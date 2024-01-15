import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SquigglyLines from '../components/SquigglyLines';
import { Testimonials } from '../components/Testimonials';
import va from '@vercel/analytics';
import React, { useState } from 'react';

const {removeBackground} = require("@imgly/background-removal");

//const {removeBackground} = require("@imgly/background-removal-node");

const Home: NextPage = () => {

  const [username, setUsername] = useState("CoqInuAvax");
  const [filter, setFilter] = useState("CoqRing");

  let noBackgroundUrl = "";
  async function update(username: string) {
    await setUsername(username);
  }

  async function fullPenetration() {
    let image_src: ImageData | ArrayBuffer | Uint8Array | Blob | URL | string = `https://unavatar.io/twitter/${username}`;
 
    removeBackground(image_src).then((blob: Blob) => {
      // The result is a blob encoded as PNG. It can be converted to an URL to be used as HTMLImage.src
    noBackgroundUrl = URL.createObjectURL(blob);
})
  }

  return (
    <div className="bg-yellow-200 bg-cover bg-[url('/coq-inu.png')] flex w-screen mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>🐓 Coqify Your Profile</title>
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-20"> 
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Coqify your profile
          <span className="relative whitespace-nowrap text-[#fcce5f]">
            <SquigglyLines />
            <span className="relative">in under a second!</span>
          </span>{' '}
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-950 font-bold leading-7">
          Enter your Twitter / X username:<br></br><br></br>
          <input 
            className="p-1" 
            type='text' 
            placeholder='Enter handle here.' 
            value={username}
            onChange={e => update(e.target.value)}
          />
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
                  src= {`https://unavatar.io/twitter/${username}`}
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Coqified PFP</h2>
                <Image
                  alt="Coqified PFP"
                  width={400}
                  height={400}
                  src= {noBackgroundUrl}
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <a href='#'>Download Coqified PFP</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
