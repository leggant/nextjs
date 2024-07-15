import Link from 'next/link';

const SiteFooter = () => {
  return (
    <footer className='main-footer'>
      <div className='footer-container'>
        <div className='footer-link-wrapper'>
          <Link href={'/'} className='footer-link'>
            About
          </Link>
          <Link href={'/'} className='footer-link'>
            Contact us
          </Link>
          <Link href={'/'} className='footer-link'>
            Terms of Service
          </Link>
          <Link href={'/'} className='footer-link'>
            Privacy Policy
          </Link>
        </div>
        <div className='mt-6 flex items-center'>
          <p className='text-base leading-4 text-gray-800'>
            {/* 2022 <span className='font-semibold'>{ appName }</span> */}
            2024
          </p>
          <div className='ml-2 border-l border-gray-800 pl-2'>
            <p className='text-base leading-4 text-gray-800'>
              Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default SiteFooter;
