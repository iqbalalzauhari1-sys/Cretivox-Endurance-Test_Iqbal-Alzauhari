'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

import fotoKiri from '../public/fierce-kiri.jpg';
import fotoDepan from '../public/fierce-depan.jpg';
import fotoKanan from '../public/fierce-kanan.jpg';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Bebas_Neue } from 'next/font/google';
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: '900' });

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const container = useRef(null);
  
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  useGSAP(() => {
    gsap.to("#gradient-background", {
      backgroundPosition: "200% center",
      ease: "none",
      duration: 15,
      repeat: -1,
    });

    gsap.from("#hero-headline, #hero-subtitle, #hero-desc, #hero-buttons", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    gsap.from(".gallery-item", {
      scrollTrigger: {
        trigger: "#gallery-section",
        start: "top 75%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });

    gsap.from("#about-section .about-text", {
      scrollTrigger: {
        trigger: "#about-section",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1
    });

    gsap.from("#login-container", {
      scrollTrigger: {
        trigger: "#login-section",
        start: "top 85%",
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

  }, { scope: container });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginStatus("Loading...");
    
    const apiUrl = "https://dummyjson.com/auth/login"; 
    
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username: loginEmail, 
          password: loginPassword 
        }),
      });

      if (response.ok) {
        setLoginStatus("✅ Access Granted: Poin ++ Secured!");
      } else {
        setLoginStatus("❌ Access Denied: Kredensial tidak valid.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setLoginStatus("⚠️ Terjadi kesalahan jaringan.");
    }
  };

  return (
    <main ref={container} className="min-h-screen text-slate-50 overflow-hidden relative">
      
      <div className="absolute top-6 left-6 md:top-8 md:left-10 z-50 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <Image 
          src="/logo-cretivox.png" 
          alt="Cretivox Logo" 
          width={200} 
          height={45} 
          className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        />
      </div>

      <div className="absolute top-6 right-6 md:top-8 md:right-10 z-50 flex items-center h-[45px]">
        <span className={`${montserrat.className} text-sm md:text-lg font-mono font-bold tracking-widest text-emerald-400 uppercase drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]`}>
          Endurance Test
        </span>
      </div>

      <div className="fixed inset-0 -z-20 bg-black pointer-events-none" />

      <div
        id="gradient-background"
        className="fixed inset-0 -z-10 pointer-events-none bg-[length:200%_200%]"
        style={{
          background: 'linear-gradient(45deg, #0f172a 0%, #064e3b 25%, #451a03 50%, #0f172a 100%)',
          filter: 'blur(90px)',
        }}
      />

      <section
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1
              id="hero-headline"
              className={`${montserrat.className} text-5xl md:text-[80px] lg:text-[110px] tracking-tighter text-balance leading-none drop-shadow-[0_0_25px_rgba(16,185,129,0.5)]`}
            >
              IQBAL ALZAUHARI
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-emerald-300 font-light italic">
              Mahasiswa Teknik Informatika | Android Developer | Kotlin Explorer
            </p>
          </div>

          <p id="hero-desc" className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Saya berfokus pada pengembangan antarmuka aplikasi Android native menggunakan Kotlin. Mengubah alur logika sistem menjadi tampilan visual yang rapi, responsif, dan mudah digunakan oleh pengguna.
          </p>

          <div id="hero-buttons" className="flex gap-4 justify-center pt-8">
            <Button
              onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-lg rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all"
            >
              About Me
            </Button>
            <Button
              onClick={() => document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-900/40 px-8 py-6 text-lg rounded-lg"
            >
              API Login
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery-section" className="relative py-24 px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className={`${montserrat.className} text-4xl font-bold mb-16 text-center text-balance text-emerald-400`}>My 3 Fierce Sides</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { posisi: 'Kiri', src: fotoKiri },
              { posisi: 'Depan', src: fotoDepan },
              { posisi: 'Kanan', src: fotoKanan }
            ].map((foto, i) => (
              <div
                key={i}
                className={`${montserrat.className} gallery-item group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border border-emerald-800/50`}
                style={{
                  boxShadow: '0 0 20px rgba(16,185,129,0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 0 40px rgba(6, 78, 59, 0.8), 0 0 60px rgba(16, 185, 129, 0.4)';
                  el.style.transform = 'scale(1.02)';
                  el.style.borderColor = 'rgba(16,185,129,0.8)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 0 20px rgba(16,185,129,0.2)';
                  el.style.transform = 'scale(1)';
                  el.style.borderColor = 'rgba(6, 78, 59, 0.5)';
                }}
              >
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center relative">
                  
                  <Image 
                    src={foto.src} 
                    alt={`Foto Sisi ${foto.posisi}`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className={`${montserrat.className} text-2xl font-bold text-emerald-400 drop-shadow-md`}>Sisi {foto.posisi}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-section" className="relative py-24 px-6 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${montserrat.className} text-4xl font-bold mb-12 text-balance text-emerald-400`}>About Me</h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="about-text">
              Ketertarikan utama saya di dunia teknologi berpusat pada pengembangan aplikasi mobile dan analisis data. Saat ini, saya fokus mengeksplorasi ekosistem Android Studio dan Kotlin untuk membangun aplikasi yang terstruktur secara arsitektur maupun antarmuka.
            </p>
            <p className="about-text">
              Selain front-end mobile, ketertarikan saya pada machine learning dan pengolahan data membantu saya memahami bagaimana sebuah sistem back-end bekerja. Melalui Endurance Test ini, saya mendemonstrasikan integrasi API dan animasi UI untuk membuktikan bahwa fungsionalitas bisa berjalan beriringan dengan visual yang interaktif.
            </p>
            <p className="about-text">
              Sebagai developer, saya mengedepankan efisiensi. Pembuatan website ini adalah contoh nyatanya: saya tidak menulis 100% kodenya secara manual dari nol. Saya memanfaatkan AI sebagai partner kerja untuk mempercepat prototyping antarmuka dan debugging, sementara saya tetap memegang kendali penuh atas arsitektur sistem, integrasi API, dan penyesuaian logika akhir. I believe in working smart to deliver the best results.
            </p>
            <p className="about-text">
              Endurance Test ini menjadi pembuktian bagi saya bahwa aspek visual dan teknis harus saling mendukung. Saya membangun aplikasi dengan tujuan sederhana: membuat sistem yang bekerja dengan baik dan nyaman digunakan oleh penggunanya.
            </p>
          </div>
        </div>
      </section>

      <section id="login-section" className="relative py-32 px-6">
        <div id="login-container" className="max-w-md mx-auto">
          <h2 className={`${montserrat.className} text-3xl font-bold mb-8 text-center text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]`}>API Login</h2>

          <div className="p-8 rounded-2xl border border-amber-900/50 bg-black/60 backdrop-blur-lg shadow-[0_0_30px_rgba(69,26,3,0.6)] space-y-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
                  Username / Email
                </label>
                <Input
                  id="email"
                  type="text" 
                  required
                  placeholder="Enter your username"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="bg-zinc-900/80 border-zinc-700 rounded-lg py-3 px-4 text-white placeholder:text-gray-600 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-300">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="bg-zinc-900/80 border-zinc-700 rounded-lg py-3 px-4 text-white placeholder:text-gray-600 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-amber-700 hover:bg-amber-600 text-white py-6 rounded-lg text-lg font-bold shadow-[0_0_15px_rgba(180,83,9,0.5)] transition-all"
              >
                Access Portal
              </Button>
            </form>

            {loginStatus && (
                <p className={`text-center text-sm font-bold p-3 rounded-lg ${loginStatus.includes('✅') ? 'bg-emerald-900/50 text-emerald-400' : 'bg-red-900/50 text-red-400'}`}>
                    {loginStatus}
                </p>
            )}

            <p className="text-center text-sm text-gray-500 pt-2 border-t border-zinc-800">
              Protected content for authorized personnel
            </p>
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-emerald-900/30 bg-black/80">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
          <p>&copy; 2026 Iqbal Alzauhari. Endurance Test C.I.E. v0.app</p>
        </div>
      </footer>
    </main>
  );
}
