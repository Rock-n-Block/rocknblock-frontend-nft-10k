export const RECAPTCHA_KEY = '6Lfgus8cAAAAADnnubdqHEU991A39n7FvpT19-k2';

export const isBrowser = typeof window !== 'undefined';

export interface GoogleReCaptcha {
  execute: () => void;
  reset: () => void;
  getResponse: () => string;
}

export interface ProjectWindow extends Window {
  grecaptcha: GoogleReCaptcha;
  grecaptchaTokenResponse: (token: string) => void;
  grecaptchaExpired: () => void;
}