// pages/index.js
import Head from 'next/head';
import React, { useState, useEffect } from "react";
import Image from "next/image";


export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Activa la animación cuando el componente se monta
    setTimeout(() => setLoaded(true), 150);
  }, []);

  return (
    <>
      <Head>
        <title>GabZ</title>
        <meta name="description" content="Página Web Broquito <333" />
      </Head>

      <header className="py-8 px-4">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:underline">h0m3</Link></li>
            <li><Link href="/music" className="hover:underline">mUs1c</Link></li>
            <li><Link href="/galery" className="hover:underline">g4l3r1</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="hero text-center py-10">
          <h1 className="text-5xl font-semibold mb-6">M4L4 MI4 OTR4 V333Z</h1>
          <p>{`i'm just trying to tell you how much I love "you"`}</p>
        </section>

        <div className="flex justify-center">
          <Link
            href="https://open.spotify.com/playlist/2MljsaNlAEoXwbsjKuK8oj?si=83cbc74d20f645bf&pt=3da5624471122807f7d75ec2e7595948"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-1000 ease-[cubic-bezier(.19,1,.22,1)] ${
              loaded ? "opacity-100 scale-[1.03]" : "opacity-0 scale-100"
            } hover:opacity-90 hover:scale-[1.05] hover:-translate-y-[2px]`}
          >
            <Image
              src="/IV.png"
              alt="Portada"
              width={600}
              height={600}
              className="object-contain select-none"
              priority
            />
          </Link>
        </div>
      </main>

      <footer className="py-12 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} wke</p>
      </footer>
    </>
  );
}
