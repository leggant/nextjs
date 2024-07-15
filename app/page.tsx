import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'App',
  description: 'App',
  keywords: ['App', 'here'],
  creator: 'Anthony Legg',
};

const HomePage: NextPage = () => {
  return (
    <section>
      <h2 className='my-auto text-2xl'>App Page</h2>
    </section>
  );
};

export default HomePage;
