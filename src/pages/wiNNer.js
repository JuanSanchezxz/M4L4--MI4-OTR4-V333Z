"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Winner() {
  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState("");

  const correctPassword = "GABZ<333"; // ← cámbiala si quieres

  const images = [
    "/yo1.JPG",
    "/yo2.JPG",
    "/yo3.JPG",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAccess(true);
    } else {
      alert("incorrecto broqui ;)");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <Head>
        <title>wiNNer</title>
      </Head>

      {/* Si NO tiene acceso aún → pantalla de contraseña */}
      {!access && (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-5xl font-bold mb-6">g4n4st3!!!</h1>
          <p className="mb-4 opacity-80">contraseña???</p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="password"
              placeholder="password..."
              className="px-4 py-2 bg-black border border-white/20 rounded text-center focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 border border-white/40 rounded hover:bg-white hover:text-black transition-all duration-300"
            >
              3ntr4r
            </button>
          </form>
        </div>
      )}

      {/* Si tiene acceso → galería secreta */}
      {access && (
        <>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-center uppercase">
            SECRET GALLERY
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/40 transition-all duration-300"
              >
                <Image
                  src={src}
                  width={800}
                  height={800}
                  alt="Secret Image"
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="absolute bottom-3 left-3 text-xs opacity-70 tracking-widest">
                  <p>[SECRET_{index + 1}]</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
