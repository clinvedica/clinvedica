import { NextRequest, NextResponse } from 'next/server';
import { sendFeasibilityRequestEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const subject = String(formData.get('subject') ?? 'New Feasibility Request').trim() || 'New Feasibility Request';
    const message = String(formData.get('message') ?? '').trim();

    const result = await sendFeasibilityRequestEmail({
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
    console.error('Feasibility request email route error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit request. Please try again later or contact us directly.',
      },
      { status: 500 },
    );
  }
}

