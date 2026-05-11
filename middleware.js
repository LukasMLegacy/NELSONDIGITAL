import { next, rewrite } from '@vercel/functions';

/**
 * Jedna Vercel deployment = dva weby podľa Host hlavičky:
 *
 * streamlinemedia.shop (+ www), *.vercel.app, preview URL → koreň repo (Streamline)
 * nelsondigital.shop (+ www)                             → sites/nelsondigital/ (Nelson)
 */
const NELSON_HOSTS = new Set(['nelsondigital.shop', 'www.nelsondigital.shop']);

export default function middleware(request) {
  const url = new URL(request.url);
  if (!NELSON_HOSTS.has(url.hostname.toLowerCase())) {
    return next();
  }

  const base = '/sites/nelsondigital';
  let pathname = url.pathname;

  if (pathname.startsWith('/.well-known')) {
    return next();
  }
  if (pathname.startsWith(`${base}/`) || pathname === base) {
    return next();
  }
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  const dest = new URL(`${base}${pathname}`, url.origin);
  dest.search = url.search;
  dest.hash = url.hash;
  return rewrite(dest);
}

export const config = {
  matcher: ['/', '/((?!_next).*)'],
};
