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

const Home: NextPage = () => {

  const [username, setUsername] = useState("CoqInuAvax");
  const [coqDataURL, setCoqDataURL] = useState("");
  async function update(username: string) {
    await setUsername(username);
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const original = document.getElementById("original") as HTMLImageElement;
    original.crossOrigin="anonymous"
    const coqring = document.getElementById("coqifyred") as HTMLImageElement;
    original.onload = () => {
      ctx.drawImage(original, 0, 0);
      ctx.drawImage(coqring, 0, 0);
      setCoqDataURL(canvas.toDataURL("image/png"));
    }
  }   
  function download() {
    const coqDownload = document.getElementById("coqDownload") as HTMLAnchorElement;
    const coqCanvas = document.getElementById("canvas") as HTMLCanvasElement;
    setCoqDataURL(coqCanvas.toDataURL("image/png"));
    coqDownload.href = coqDataURL;
  }

  function tweet() {
    var text = "Bok! I Coqified my profile with Coqify by @suizzle_ https://coqify.vercel.app";
    var encoded = encodeURIComponent(text);
    var twitterIntentUrl = "https://twitter.com/intent/tweet?text=" + encoded;
    window.open(twitterIntentUrl);
  }

  

  return (
    <div className="bg-yellow-200 bg-cover bg-[url('/coq-inu.png')] flex w-screen mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>🐓 Coqify Your Profile</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://coqify.vercel.app" />
        <meta name="twitter:title" content="Coqify" />
        <meta name="twitter:description" content="Show COQ alignment - add a COQ ring to your pfp." />
        <meta name="twitter:image" content={coqDataURL} />
        <meta name="og:image" content={coqDataURL} />
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

        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original PFP</h2>
                <Image
                    id="original"
                    crossOrigin="anonymous"
                    alt="Original Twitter / X PFP"
                    src= {`http://unavatar.io/twitter/${username}`}
                    className="w-96 h-96 rounded-2xl"
                    width={400}
                    height={400}
                  />

              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Coqified PFP</h2>
                <canvas
                  id="canvas"
                  width={400}
                  height={400}
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
            <div className="align-right flex sm:space-x-2 sm:flex-row flex-row-reverse justify-end">
              <a href="#" id="coqDownload" onClick={download} download>Download</a>
              <a id="tweet" onClick={tweet}>Tweet</a>
            </div>
          </div>
          <div className="flex sm:space-x-2 sm:flex-row flex-col mt-10 font-bold">
          <h2>Your COQ Ring:</h2>
          <Image
              id="coqifyred"
              alt="Original Twitter / X PFP"
              src= "/redcoqring.png"
              className=""
              width={96}
              height={96}
            />
            <h2>More options coming soon!</h2>
        </div>


        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
