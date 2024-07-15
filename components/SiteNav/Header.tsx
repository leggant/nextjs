import MainSiteNav from '@/components/SiteNav/Nav';
import Link from 'next/link';

const MainSiteHeader = () => {
  return (
    <header className='mb-6 bg-primary text-primary-foreground'>
      <div className='py-6 px-6 flex justify-between'>
        <Link href={'/'}>
          <h1 className='text-xl font-bold hover:text-primary-foreground/90 cursor-pointer'>
            Site Name
          </h1>
        </Link>
        <MainSiteNav />
      </div>
    </header>
  );
};

export default MainSiteHeader;