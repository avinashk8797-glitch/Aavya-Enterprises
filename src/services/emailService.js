import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
    return { success: true, result };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};

export const sendFormRef = async (formRef) => {
  try {
    const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef, PUBLIC_KEY);
    return { success: true, result };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
