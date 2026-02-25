import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? '';
const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? '';

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export type EmailResult = {
  success: boolean;
  message: string;
};

function ensureConfigured(): EmailResult | null {
  if (!resendApiKey || !resend || !FROM_EMAIL || !TO_EMAIL) {
    return {
      success: false,
      message: 'Email service is not configured. Please contact support directly.',
    };
  }
  return null;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendContactEmail(params: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}): Promise<EmailResult> {
  const configError = ensureConfigured();
  if (configError) return configError;

  const name = params.name.trim();
  const email = params.email.trim();
  const phone = (params.phone ?? '').trim();
  const subject = (params.subject ?? 'New Inquiry').trim() || 'New Inquiry';
  const message = params.message.trim();

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Missing required fields (name, email, message).',
    };
  }

  const html = `
      <h2>${escapeHtml(subject)}</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
      <hr />
      <pre style="white-space: pre-wrap; font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; margin: 0;">${escapeHtml(
        message,
      )}</pre>
    `;

  const text = `${subject}\n\nFrom: ${name} <${email}>${phone ? `\nPhone: ${phone}` : ''}\n\n${message}`;

  try {
    await resend!.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject,
      html,
      text,
    });

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    };
  } catch (error) {
    console.error('Resend contact email error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later or contact us directly.',
    };
  }
}

export async function sendFeasibilityRequestEmail(params: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<EmailResult> {
  const configError = ensureConfigured();
  if (configError) return configError;

  const name = params.name.trim();
  const email = params.email.trim();
  const phone = (params.phone ?? '').trim();
  const subject = params.subject.trim() || 'New Feasibility Request';
  const message = params.message.trim();

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Missing required fields (name, email, message).',
    };
  }

  const html = `
      <h2>${escapeHtml(subject)}</h2>
      <p><strong>Submitted by:</strong> ${escapeHtml(name)} (${escapeHtml(email)})${
        phone ? `, ${escapeHtml(phone)}` : ''
      }</p>
      <hr />
      <pre style="white-space: pre-wrap; font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; margin: 0;">${escapeHtml(
        message,
      )}</pre>
    `;

  const text = `${subject}\n\nFrom: ${name} <${email}>${phone ? `\nPhone: ${phone}` : ''}\n\n${message}`;

  try {
    await resend!.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject,
      html,
      text,
    });

    return {
      success: true,
      message: 'Thank you! Your feasibility request has been submitted successfully.',
    };
  } catch (error) {
    console.error('Resend feasibility email error:', error);
    return {
      success: false,
      message: 'Failed to submit request. Please try again later or contact us directly.',
    };
  }
}

