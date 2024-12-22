import { Logo as UILogo } from '../ui/Logo';
import { APP_CONFIG } from '@/utils/constants';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <UILogo />
      <span className="sr-only">{APP_CONFIG.APP_NAME}</span>
    </a>
  );
}