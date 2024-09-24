import Link from 'next/link';

import MainSiteNav from '@/components/SiteNav/Nav';

const MainSiteHeader = () => {
  return (
    <header className='mb-6 bg-primary text-primary-foreground'>
      <div className='flex justify-between px-6 py-6'>
        <Link href={'/'}>
          <h1 className='cursor-pointer text-xl font-bold hover:text-primary-foreground/90'>
            Site Name
          </h1>
        </Link>
        <MainSiteNav />
      </div>
    </header>
  );
};

export default MainSiteHeader;
