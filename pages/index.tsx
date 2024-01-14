import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SquigglyLines from '../components/SquigglyLines';
import { Testimonials } from '../components/Testimonials';
import va from '@vercel/analytics';

const Home: NextPage = () => {
  return (
    <div className="bg-yellow-200 flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>🐓 Coqify Your Profile</title>
      </Head>
      <Header />
      <main className="bg-cover bg-[url('/coq-inu.png')] bg-opacity-10 flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-20">
        <a
          href="https://twitter.com/nutlope/status/1704894145003741611"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Used by over <span className="font-semibold">42069</span> $COQ aligned chads
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Add a $COQ ring
          <span className="relative whitespace-nowrap text-[#fcce5f]">
            <SquigglyLines />
            <span className="relative">to your profile</span>
          </span>{' '}
          in under a second.
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          What if you could very easily and subtly Coqify your pfp using the famous orange/yellow circle in the Coq Inu logo, placed around your current PFP?? 
          Subtle, but easily visible.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            onClick={() => va.track('RoomGPT link clicked')}
          >
            $COQ Lite
          </button>
          <button 
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            onClick={() => va.track('RoomGPT link clicked')}
          >
            $COQ Ring
          </button>     
          <button 
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            onClick={() => va.track('RoomGPT link clicked')}
          >
            Full penetration
          </button>   
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original PFP</h2>
                <Image
                  alt="Original Twitter / X PFP"
                  src="/michael.jpg"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Coqified Photo</h2>
                <Image
                  alt="Coqified PFP"
                  width={400}
                  height={400}
                  src="/michael-new.jpg"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
