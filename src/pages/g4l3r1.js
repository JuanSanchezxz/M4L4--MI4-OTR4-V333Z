"use client";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

export default function G4l3r1() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/GBZ1.JPG",
    "/GBZ5.JPG",
    "/GBZ3.JPG",
    "/GBZ4.JPG",
    "/GBZ9.JPG",
    "/GBZ8.JPG",
    "/GBZ6.JPG",
    "/GBZ2.JPG",
    "/GBZ7.JPG",
  ];

  return (
    
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <header className="py-8 px-4">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:underline">h0m3</a></li>
            <li><a href="/mUs1c" className="hover:underline">mUs1c</a></li>
            <li><a href="/g4l3r1" className="hover:underline">g4l3r1</a></li>
          </ul>
        </nav>
 </header>
      {/* Título */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-center uppercase">
        G4l3r1
      </h1>
      <section className="hero text-center py-7">
          <p className="text-lg mb-8">because i think about YOU ALL THE TIME...</p>
      </section>

      {/* Galería */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 hover:border-white/40 transition-all duration-300"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              width={800}
              height={800}
              alt="Gallery Image"
              className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />

            {/* Texto estilo Off-White */}
            <div className="absolute bottom-3 left-3 text-xs opacity-70 group-hover:opacity-100 tracking-widest">
              <p>[PHOTO_{index + 1}]</p>
            </div>
          </div>
        ))}
      </div>

{/* Botón secreto */}
<a
  href="/wiNNer"
  className="fixed bottom-4 right-4 opacity-10 hover:opacity-100 transition-opacity duration-500 text-xs px-2 py-1 border border-white rounded cursor-pointer"
  title="shhhh"
>
  ?
</a>


      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center cursor-pointer z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            width={1000}
            height={1000}
            alt="Selected"
            className="rounded-xl shadow-2xl max-h-[85vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}
