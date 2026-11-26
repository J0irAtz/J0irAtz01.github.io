import { withBase } from './assetPath';

export const whatsappNumber = '+52 729 154 3338';
export const whatsappHref = 'https://wa.me/527291543338';

export function portfolioLocale(pathname: string) {
  const base = withBase('/').replace(/\/$/, '');
  const path = (pathname.slice(base.length) || '/').replace(/\/$/, '') || '/';
  const english = path === '/en' || path.startsWith('/en/');
  const page = english ? path.slice(3) || '/' : path;
  const local = (href: string, inEnglish = english) =>
    withBase(inEnglish ? '/en' + (href === '/' ? '' : href) : href);
  const t = (es: string, en: string) => english ? en : es;
  return { english, page, local, t, lang: english ? 'en' : 'es' };
}
