import { Lato, Noto_Sans, Poppins } from 'next/font/google';

const noto400 = Noto_Sans({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-noto400',
});
const noto800 = Noto_Sans({
  weight: ['800'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-noto800',
});

const lato400 = Lato({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-lato400',
});
const lato900 = Lato({
  weight: ['900'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-lato900',
});

const poppins400 = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-poppins400',
});
const poppins900 = Poppins({
  weight: ['900'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-poppins900',
});

export { lato400, lato900, noto400, noto800, poppins400, poppins900 };
