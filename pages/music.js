import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function mUs1c() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);
  return (
  <>
<Head>
        <title>mUs1c</title>
        <meta name="description" content="Music section" />
      </Head>

<header className="py-8 px-4">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:underline">h0m3</a></li>
            <li><a href="/music" className="hover:underline">mUs1c</a></li>
            <li><a href="/galery" className="hover:underline">g4l3r1</a></li>
          </ul>
        </nav>
 </header>

<main className="container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-10 tracking-wider">
          THERE IS NOT ENOUGH TIME
        </h1>
        <a href="/why" className="text-4xl font-bold mb-10 tracking-wider">*</a>
        <div className="flex flex-col items-center space-y-12">
          <a            
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              !. Entombed ("$/??/"="?)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-20">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              ". Desire ("$/!=/"="&)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              #. Bound 2 ("$/??/"="?)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              $. eCLIPSE sOLAR ("$/??/"="?)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              %. MY EYES ("$/??/"="?)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              &. GONGOLI (2012) ("$/??/"="?)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              /. MELÓN VINO ("$/??/"="?)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              8. ALMA DINAMITA ("$/??/"="?)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              9. 2 Much ("$/??/"="?)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              !=. Unstable ("$/??/"="?)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              !!. R.I.P. (feat. The Kid LAROI) ("$/??/"="?)
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/mb.png"
              alt="Álbum"
              width={444}
              height={444}
              className="rounded-lg shadow-lg group-hover:opacity-90"
            />
            <p className="mt-4 text-xl tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
              !". BHAVILONIA ("$/??/"="?)
            </p>
          </a>
        </div>

    </main>
  </>
  );
}
