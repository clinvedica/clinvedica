import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const subject = String(formData.get('subject') ?? 'New Inquiry').trim() || 'New Inquiry';
    const message = String(formData.get('message') ?? '').trim();

    const result = await sendContactEmail({
      name,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json(
      {
        success: result.success,
        message: result.message,
      },
      { status: result.success ? 200 : 400 },
    );
  } catch (error) {
    console.error('Contact email route error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again later or contact us directly.',
      },
      { status: 500 },
    );
  }
}

