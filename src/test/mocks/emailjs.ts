import { send } from '@emailjs/browser';
import { vi } from 'vitest';

export const emailSendMock = vi.mocked(send);
