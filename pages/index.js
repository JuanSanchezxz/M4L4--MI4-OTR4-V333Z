// pages/index.js
import Head from 'next/head';
import Image from "next/image";
import { useEffect, useState } from "react";

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
            <li><a href="/" className="hover:underline">h0m3</a></li>
            <li><a href="/mUs1c" className="hover:underline">mUs1c</a></li>
            <li><a href="/g4l3r1" className="hover:underline">g4l3r1</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="hero text-center py-10">
          <h1 className="text-5xl font-semibold mb-6">M4L4 MI4 OTR4 V333Z</h1>
          <p className="text-lg mb-8">i'm juSt trying t0 teLl you h0w much I love YOU</p>
        </section>

        <div className="flex justify-center">
          <a
            href="https://open.spotify.com/playlist/2MljsaNlAEoXwbsjKuK8oj?si=637e492107144488&pt=935d2776d284a8fa1518b264f79a7f7e"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-1000 ease-[cubic-bezier(.19,1,.22,1)] ${
              loaded ? "opacity-100 scale-[1.03]" : "opacity-0 scale-100"
            } hover:opacity-90 hover:scale-[1.05] hover:-translate-y-[2px]`}
          >
            <Image
              src="/iv.png"
              alt="Portada"
              width={600}
              height={600}
              className="object-contain select-none"
              priority
            />
          </a>
        </div>
      </main>

      <footer className="py-12 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} wke</p>
      </footer>
    </>
  );
}
