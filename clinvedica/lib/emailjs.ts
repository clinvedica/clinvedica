export const sendEmail = async (
  formData: FormData,
  endpoint: string = '/api/email',
): Promise<{ success: boolean; message: string }> => {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      return {
        success: false,
        message: data?.message ?? 'Failed to send message. Please try again later or contact us directly.',
      };
    }

    return {
      success: true,
      message: data.message ?? 'Thank you! Your message has been sent successfully.',
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later or contact us directly.',
    };
  }
};
