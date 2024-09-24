import { Lato, Noto_Sans, Poppins } from 'next/font/google';

const noto400 = Noto_Sans({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-noto400',
  preload: false,
});
const noto800 = Noto_Sans({
  weight: ['800'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-noto800',
  preload: false,
});

const lato400 = Lato({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-lato400',
  preload: false,
});
const lato900 = Lato({
  weight: ['900'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-lato900',
  preload: false,
});

const poppins400 = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-poppins400',
  preload: false,
});
const poppins900 = Poppins({
  weight: ['900'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-poppins900',
  preload: false,
});

export { lato400, lato900, noto400, noto800, poppins400, poppins900 };
