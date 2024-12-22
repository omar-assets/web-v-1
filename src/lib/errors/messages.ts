export const ERROR_MESSAGES = {
  auth: {
    invalid_credentials: 'Invalid email or password. Please try again.',
    email_taken: 'An account with this email already exists. Please sign in or use a different email.',
    weak_password: 'Password must be at least 8 characters.',
    session_expired: 'Your session has expired. Please sign in again.',
    too_many_requests: 'Too many attempts. Please try again later.',
    unknown_error: 'Authentication failed. Please try again.'
  },
  validation: {
    required: 'This field is required',
    invalid_email: 'Please enter a valid email address',
    min_length: (field: string, length: number) => `${field} must be at least ${length} characters`,
    password_mismatch: 'Passwords do not match',
    invalid_input: 'Please enter valid information'
  },
  network: {
    offline: 'You appear to be offline. Please check your connection.',
    timeout: 'Request timed out. Please try again.'
  },
  unknown: 'An unexpected error occurred. Please try again.'
} as const;