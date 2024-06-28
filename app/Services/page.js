import Head from 'next/head';
import Navbar from '../Home/Navbar';
import Services from './services';
import Footer from '@/app/Services/Footer';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>Consulting Company - Your Project Management Partner</title>
        <meta name="description" content="Dynamic consulting company specializing in project management and professional development." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        <Services />
      </main>

      <Footer />
    </div>
  );
}
