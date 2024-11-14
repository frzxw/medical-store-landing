'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Mail, MapPin, Menu, Phone, Instagram, CheckCircle2, ShieldCheck, PiggyBank, Award, Facebook } from 'lucide-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTiktok } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"  
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = () => {
    window.open('https://wa.me/6285179941277?text=Halo%20Wira%20Medical!', '_blank')
  }

  return (
    <div className="min-h-screen font-['Open_Sans'] bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image
            src="/images/logo.png"
            alt="Wira Prakasa Group Logo"
            width={50}
            height={50}
            className="h-12 w-12 object-contain hover:scale-110 transition-transform cursor-pointer"
            onClick={() => window.location.reload()}
          />
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-gray-700 hover:text-[#267dfd] transition-colors">Tentang</Link>
            <Link href="#services" className="text-gray-700 hover:text-[#267dfd] transition-colors">Layanan</Link>
            <Link href="#legality" className="text-gray-700 hover:text-[#267dfd] transition-colors">Legalitas</Link>
            <Link href="#contact" className="text-gray-700 hover:text-[#267dfd] transition-colors">Kontak</Link>
            <Link href="#marketplace" className="text-gray-700 hover:text-[#267dfd] transition-colors">Marketplace</Link>
          </nav>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-[#267dfd] fixed top-4 right-4 z-50">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[250px] p-4 bg-white">
              <div className="flex flex-col gap-6">
                <Link href="#about" className="text-lg text-gray-700 hover:text-[#267dfd] transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="#services" className="text-lg text-gray-700 hover:text-[#267dfd] transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link href="#legality" className="text-lg text-gray-700 hover:text-[#267dfd] transition-colors" onClick={() => setIsMenuOpen(false)}>Legality</Link>
                <Link href="#contact" className="text-lg text-gray-700 hover:text-[#267dfd] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <Link href="#marketplace" className="text-lg text-gray-700 hover:text-[#267dfd] transition-colors" onClick={() => setIsMenuOpen(false)}>Marketplace</Link>
              </div>
              </SheetContent>
            </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[100vh] flex items-center justify-center pt-16 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-600 font-bold font-['Poppins'] mb-4 md:mb-6">
                Rekan Terpercaya Anda untuk
                <span className="text-[#267dfd]"> Peralatan </span>
                <span className="text-[#fd3736]"> Kesehatan </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                Distributor penyedia alat kesehatan terlengkap dan terpercaya yang berkomitmen
                untuk menyediakan solusi kesehatan berkualitas tinggi kepada pelanggan kami.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Button 
                  className="bg-[#267dfd] hover:bg-[#267dfd]/90 px-6 py-2 text-sm md:text-base" 
                  onClick={handleContactClick}
                >
                  Hubungi Kami
                </Button>
                <Button 
                  variant="outline"
                  className="px-6 py-2 text-sm md:text-base text-gray-600 hover:bg-gray-100"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Selengkapnya
                </Button>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0 hidden md:block">
              <Image
                src="/hero.svg"
                alt="Medical Equipment Illustration"
                width={500}
                height={500}
                className="relative z-10 w-full max-w-[400px] md:max-w-[5 00px] mx-auto rounded-3xl md:pb-20"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 lg:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-bold font-['Poppins'] text-center mb-8 md:mb-12">Tentang Kami</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-600 mb-6">
              Kami adalah distributor alat kesehatan terlengkap dan terpercaya, 
              berkomitmen menyediakan solusi kesehatan berkualitas. Dengan pengalaman 
              bertahun-tahun, kami menjadi mitra tepercaya bagi berbagai institusi medis, 
              rumah sakit, klinik, dan fasilitas kesehatan lainnya.
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#267dfd] font-['Poppins']">Visi</h3>
              <p className="text-base md:text-lg text-gray-600 mb-6">
              Menjadi pilihan utama masyarakat Indonesia dalam memenuhi kebutuhan alat kesehatan dengan 
              memberikan pengalaman berbelanja yang mudah, aman, dan memuaskan.
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#fd3736] font-['Poppins']">Misi</h3>
              <ul className="space-y-3 text-base md:text-lg text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#267dfd] mt-1 flex-shrink-0" />
                  <span>
                  Menyediakan produk alat kesehatan berkualitas tinggi dari merek-merek terpercaya.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#267dfd] mt-1 flex-shrink-0" />
                  <span>
                  Menawarkan harga yang kompetitif dan transparan untuk semua produk kami.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#267dfd] mt-1 flex-shrink-0" />
                  <span>
                  Berinovasi dalam layanan untuk memenuhi kebutuhan kesehatan Anda.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#267dfd] mt-1 flex-shrink-0" />
                  <span>
                  Tim profesional siap membantu Anda memilih produk yang tepat.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#267dfd] mt-1 flex-shrink-0" />
                  <span>
                  Mudah diakses melalui website dan toko fisik.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#267dfd] mt-1 flex-shrink-0" />
                  <span>
                  Memberikan informasi akurat seputar kesehatan dan alat kesehatan.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#267dfd]/20 to-[#fd3736]/20 rounded-3xl transform rotate-3" />
                <Image
                  src="/images/about.jpg"
                  alt="Medical Equipment"
                  width={600}
                  height={400}
                  className="rounded-2xl relative shadow-lg w-full"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-bold font-['Poppins'] text-center mb-8 md:mb-12">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#267dfd]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#267dfd] transition-colors">
                  <ShieldCheck className="w-8 h-8 text-[#267dfd] group-hover:text-white" />
                </div>
                <h3 className="text-lg md:text-xl text-gray-600 font-bold mb-2 font-['Poppins']">Terpercaya</h3>
                <p className="text-sm md:text-base text-gray-600">Mitra tepercaya bagi institusi medis dan fasilitas kesehatan dengan pengalaman bertahun-tahun dalam industri.</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#fd3736]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#fd3736] transition-colors">
                  <PiggyBank className="w-8 h-8 text-[#fd3736] group-hover:text-white" />
                </div>
                <h3 className="text-lg md:text-xl text-gray-600 font-bold mb-2 font-['Poppins']">Terjangkau</h3>
                <p className="text-sm md:text-base text-gray-600">Solusi kesehatan berkualitas dengan harga terjangkau untuk memenuhi kebutuhan berbagai fasilitas kesehatan.</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#267dfd]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#267dfd] transition-colors">
                  <Award className="w-8 h-8 text-[#267dfd] group-hover:text-white" />
                </div>
                <h3 className="text-lg md:text-xl text-gray-600 font-bold mb-2 font-['Poppins']">Terbaik</h3>
                <p className="text-sm md:text-base text-gray-600">Pelayanan prima dan produk berkualitas tinggi, termasuk alat medis, perlengkapan rumah sakit, dan lain-lain.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-bold font-['Poppins'] text-center mb-8 md:mb-12">Kontak Kami</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#267dfd] mt-1" />
              <div>
                <h3 className="text-gray-600 font-bold mb-1 font-['Poppins']">Alamat</h3>
                <Link href="https://maps.app.goo.gl/zPrUVR9ZM9vCswKr6" className="text-gray-600 hover:text-[#267dfd] transition-colors">Ps Pramuka, Lt Dasar, Aks 127, Jakarta Timur</Link>
              </div>
              </div>
              <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#267dfd] mt-1" />
              <div>
                <h3 className="text-gray-600 font-bold mb-1 font-['Poppins']">Telepon</h3>
                <Link href="https://wa.me/6285179941277" className="text-gray-600 hover:text-[#267dfd] transition-colors">+62 851-7994-1277</Link>
              </div>
              </div>
              <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#267dfd] mt-1" />
              <div>
                <h3 className="text-gray-600 font-bold mb-1 font-['Poppins']">Email</h3>
                <Link href="mailto:wiramedical127@gmail.com" className="text-gray-600 hover:text-[#267dfd] transition-colors">wiramedical127@gmail.com</Link>
              </div>
              </div>
              <div className="flex items-start gap-4">
              <Facebook className="w-6 h-6 text-[#267dfd] mt-1" />
              <div>
                <h3 className="text-gray-600 font-bold mb-1 font-['Poppins']">Facebook</h3>
                <Link href="https://www.facebook.com/WiraMedical" className="text-gray-600 hover:text-[#267dfd] transition-colors">Wira Medical</Link>
              </div>
              </div>
              <div className="flex items-start gap-4">
              <Instagram className="w-6 h-6 text-[#267dfd] mt-1" />
              <div>
                <h3 className="text-gray-600 font-bold mb-1 font-['Poppins']">Instagram</h3>
                <Link href="https://www.instagram.com/wira_medical/" className="text-gray-600 hover:text-[#267dfd] transition-colors">wira_medical</Link>
              </div>
              </div>
              <div className="flex items-start gap-4">
              <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 text-[#267dfd] mt-1" />
              <div>
                <h3 className="text-gray-600 font-bold mb-1 font-['Poppins']">TikTok</h3>
                <Link href="https://www.tiktok.com/@wiramedical" className="text-gray-600 hover:text-[#267dfd] transition-colors">wiramedical</Link>
              </div>
              </div>
            </div>
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.501052822076!2d106.8529304883603!3d-6.197430044689669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f57ccdb8579d%3A0x4292cc8c31894d3e!2sWira%20Medical!5e0!3m2!1sen!2sid!4v1731485698755!5m2!1sen!2sid"
                width="100%"
                height="430"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-12 md:py-16 lg:py-20 px-">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-bold font-['Poppins'] text-center mb-8 md:mb-12">Marketplace</h2>
            <div className="flex justify-center gap-8 flex-wrap">
            <Link href="https://blibli.onelink.me/GNtk/s4pyev5q" target="_blank" rel="noopener noreferrer">
              <Image
              src="/images/blibli.png"
              alt="Blibli Logo"
              width={150}
              height={150}
              className="hover:scale-110 transition-transform w-full sm:w-auto h-32 sm:h-48"
              />
            </Link>
            <Link href="https://www.lazada.co.id/shop/wira-medical" target="_blank" rel="noopener noreferrer">
              <Image
              src="/images/lazada.png"
              alt="Lazada Logo"
              width={150}
              height={150}
              className="hover:scale-110 transition-transform w-full sm:w-auto h-32 sm:h-48"
              />
            </Link>
            <Link href="https://shopee.co.id/wira_medical" target="_blank" rel="noopener noreferrer">
              <Image
              src="/images/shopee.png"
              alt="Shopee Logo"
              width={150}
              height={150}
              className="hover:scale-110 transition-transform w-full sm:w-auto h-32 sm:h-48"
              />
            </Link>
            <Link href="https://www.tokopedia.com/wiramedical" target="_blank" rel="noopener noreferrer">
              <Image
              src="/images/tokopedia.png"
              alt="Tokopedia Logo"
              width={150}
              height={150}
              className="hover:scale-110 transition-transform w-full sm:w-auto h-32 sm:h-48"
              />
            </Link>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/footer-logo.png"
                alt="Wira Medical Footer Logo"
                width={200}
                height={100}
                className="h-auto w-auto max-w-[300px] mb-4 filter grayscale invert"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Poppins']">Navigasi</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">Tentang</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Layanan</Link></li>
                <li><Link href="#legality" className="text-gray-400 hover:text-white transition-colors">Legalitas</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontak</Link></li>
                <li><Link href="#marketplace" className="text-gray-400 hover:text-white transition-colors">Marketplace</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Poppins']">Kontak</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <Link href="https://maps.app.goo.gl/zPrUVR9ZM9vCswKr6" className="text-gray-400 hover:text-white transition-colors">Ps Pramuka, Lt Dasar, Aks 127, Jakarta Timur</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <Link href="https://wa.me/6285179941277" className="text-gray-400 hover:text-white transition-colors">+62 851-7994-1277</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <Link href="mailto:wiramedical127@gmail.com" className="text-gray-400 hover:text-white transition-colors">wiramedical127@gmail.com</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Facebook className="w-4 h-4 flex-shrink-0" />
                  <Link href="https://www.facebook.com/WiraMedical" className="text-gray-400 hover:text-white transition-colors">Wira Medical</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 flex-shrink-0" />
                  <Link href="https://www.instagram.com/wira_medical/" className="text-gray-400 hover:text-white transition-colors">wira_medical</Link>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faTiktok} className="w-4 h-4 flex-shrink-0" />
                  <Link href="https://www.tiktok.com/@wiramedical" className="text-gray-400 hover:text-white transition-colors">wiramedical</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} PT. Wira Prakasa Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    <button
      onClick={handleContactClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl md:p-4"
    >
      <Phone className="w-5 h-5 mr-1 md:w-6 md:h-6 md:mr-2" />
      <span className="text-sm md:text-base">Hubungi Kami</span>
    </button>
    </div>
  )
}