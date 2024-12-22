import { z } from 'zod';
import { ERROR_MESSAGES } from '../errors/messages';

// Base schemas for reusable validation rules
const emailSchema = z.string()
  .min(1, ERROR_MESSAGES.validation.required)
  .email(ERROR_MESSAGES.validation.invalid_email);

const nameSchema = z.string()
  .min(2, ERROR_MESSAGES.validation.min_length('Name', 2))
  .max(100, 'Name is too long');

const messageSchema = z.string()
  .min(10, ERROR_MESSAGES.validation.min_length('Message', 10))
  .max(1000, 'Message is too long');

// Form schemas
export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: messageSchema,
  subject: z.string().optional(),
  phone: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactSchema>;