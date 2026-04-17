import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Heart, BookOpen, Utensils, Activity, MapPin, Phone, ChevronRight, X, ChevronLeft, ChevronDown } from 'lucide-react';
import { translations, Language } from './i18n';
import LegacyPage from './LegacyPage';

const GOFUNDME_LINK = "https://gofund.me/ad3ddda37";

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [selectedGallery, setSelectedGallery] = useState<{title: string, imgs: string[]} | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedImpactCard, setExpandedImpactCard] = useState<number | null>(null);
  const [fullViewImpactCard, setFullViewImpactCard] = useState<number | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => {
      if (prev === 'es') return 'en';
      if (prev === 'en') return 'ar';
      return 'es';
    });
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPage(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPage(path);
    window.scrollTo(0, 0);
  };

  if (currentPage === '/legado-said-louahabi') {
    return <LegacyPage navigateTo={navigateTo} t={t} lang={lang} />;
  }

  // Fade up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-islamic-white)] text-[var(--color-islamic-gray)] font-sans selection:bg-[var(--color-islamic-emerald)] selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-islamic-emerald)]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-islamic-deep)] to-[var(--color-islamic-emerald)] flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg shadow-[var(--color-islamic-emerald)]/20">
                A
              </div>
              <span className="font-serif font-semibold text-lg sm:text-xl text-[var(--color-islamic-deep)] hidden sm:block">
                {t.nav.logoText}
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center bg-[var(--color-islamic-emerald)]/5 rounded-full p-1 border border-[var(--color-islamic-emerald)]/10">
                <button 
                  onClick={() => setLang('es')}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${lang === 'es' ? 'bg-white text-[var(--color-islamic-deep)] shadow-sm' : 'text-[var(--color-islamic-gray-light)] hover:text-[var(--color-islamic-deep)]'}`}
                >
                  ES
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-[var(--color-islamic-deep)] shadow-sm' : 'text-[var(--color-islamic-gray-light)] hover:text-[var(--color-islamic-deep)]'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('ar')}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${lang === 'ar' ? 'bg-white text-[var(--color-islamic-deep)] shadow-sm' : 'text-[var(--color-islamic-gray-light)] hover:text-[var(--color-islamic-deep)]'}`}
                  dir="rtl"
                >
                  العربية
                </button>
              </div>
              <a 
                href={GOFUNDME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-islamic-gold)] hover:bg-[#c5a02b] text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md shadow-[var(--color-islamic-gold)]/30 hover:shadow-lg hover:shadow-[var(--color-islamic-gold)]/40 hover:-translate-y-0.5"
              >
                {t.nav.donate}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Puedes cambiar esta imagen manualmente editando el atributo 'src' */}
          <img 
            src="./0c75c09b-b35e-4348-b3d8-4368dfcdc5ef.jpg" 
            alt="Islamic Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[var(--color-islamic-white)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-xl sm:text-2xl text-[var(--color-islamic-white)]/90 font-light mb-6 max-w-2xl leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.p 
              variants={fadeUp}
              className={`text-lg sm:text-xl text-[var(--color-islamic-gold-light)] font-serif mb-10 max-w-2xl ${lang === 'ar' ? 'font-arabic text-2xl' : 'italic'}`}
            >
              {t.hero.bismillah}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a 
                href={GOFUNDME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-islamic-gold)] hover:bg-[#c5a02b] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-xl shadow-[var(--color-islamic-gold)]/20 hover:shadow-2xl hover:shadow-[var(--color-islamic-gold)]/40 hover:-translate-y-1 flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                {t.hero.cta}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[var(--color-islamic-white)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold text-[var(--color-islamic-deep)] mb-6">
                {t.about.title}
              </motion.h2>
              <motion.div variants={fadeUp} className="w-20 h-1 bg-[var(--color-islamic-gold)] mb-8 rounded-full"></motion.div>
              <motion.p variants={fadeUp} className="text-lg text-[var(--color-islamic-gray-light)] mb-6 leading-relaxed">
                {t.about.description1}
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-[var(--color-islamic-gray-light)] leading-relaxed mb-8">
                {t.about.description2}
              </motion.p>
              <motion.div variants={fadeUp}>
                <button
                  onClick={() => setIsAboutModalOpen(true)}
                  className="inline-flex items-center gap-2 text-[var(--color-islamic-deep)] bg-[var(--color-islamic-gold)] hover:bg-[var(--color-islamic-gold-light)] px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  {t.about.knowMore}
                  <ChevronRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                {/* Puedes cambiar esta imagen manualmente editando el atributo 'src' */}
                <img 
                  src="./41fd66da-0d56-4fab-9a2b-d9f9739a4024.jpg" 
                  alt="Mosque architecture" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[var(--color-islamic-emerald)]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-[var(--color-islamic-gold)]/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-24 bg-[var(--color-islamic-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-[var(--color-islamic-deep)] mb-4"
            >
              {t.impact.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[var(--color-islamic-gray-light)]"
            >
              {t.impact.subtitle}
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {[
              { icon: Activity, item: t.impact.items[0] },
              { icon: Utensils, item: t.impact.items[1] },
              { icon: Globe, item: t.impact.items[2] },
              { icon: BookOpen, item: t.impact.items[3] }
            ].map((data, index) => {
              const isExpanded = expandedImpactCard === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedImpactCard(isExpanded ? null : index)}
                    className="w-full text-left p-8 focus:outline-none focus:ring-2 focus:ring-[var(--color-islamic-emerald)] focus:ring-inset"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 bg-[var(--color-islamic-emerald)]/10 rounded-2xl flex items-center justify-center group-hover:bg-[var(--color-islamic-emerald)] transition-colors duration-300">
                        <data.icon className="w-7 h-7 text-[var(--color-islamic-emerald)] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-[var(--color-islamic-emerald)]" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[var(--color-islamic-gray)] mb-3">{data.item.title}</h3>
                    <p className="text-[var(--color-islamic-gray-light)] leading-relaxed text-sm">
                      {data.item.shortText}
                    </p>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 pt-0">
                          <div className="w-full h-px bg-gray-100 mb-6"></div>
                          <p className="text-[var(--color-islamic-gray)] text-sm mb-6 line-clamp-4 whitespace-pre-line">
                            {data.item.longText}
                          </p>
                          {data.item.quote && (
                            <blockquote className="border-l-2 border-[var(--color-islamic-gold)] pl-4 py-1 mb-6 text-sm italic text-[var(--color-islamic-gray-light)] bg-[var(--color-islamic-gold)]/5 rounded-r-lg">
                              {data.item.quote}
                            </blockquote>
                          )}
                          <button
                            onClick={() => setFullViewImpactCard(index)}
                            className="inline-flex items-center gap-2 text-[var(--color-islamic-emerald)] font-medium text-sm hover:text-[var(--color-islamic-deep)] transition-colors"
                          >
                            {t.impact.readMore}
                            <ChevronRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold text-[var(--color-islamic-deep)] mb-8"
          >
            {t.progress.title}
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-6 bg-gray-200 rounded-full overflow-hidden mb-6 shadow-inner"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--color-islamic-emerald)] to-[var(--color-islamic-gold)] rounded-full"
            ></motion.div>
          </motion.div>
          
          <div className="flex justify-between text-sm font-medium text-[var(--color-islamic-gray-light)] mb-8 px-2">
            <span>0%</span>
            <span className="text-[var(--color-islamic-emerald)] font-bold text-lg">{t.progress.percentage}</span>
            <span>100%</span>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg text-[var(--color-islamic-gray-light)]"
          >
            {t.progress.text}
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[var(--color-islamic-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-[var(--color-islamic-deep)] mb-12 text-center"
          >
            {t.gallery.title}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Puedes cambiar estas imágenes manualmente editando la propiedad 'img' de cada elemento. 
                También puedes agregar más imágenes a la galería usando el arreglo 'imgs' */}
            {[
              { 
                title: t.gallery.categories.addiction, 
                img: "./b9a793e6-eb50-49ea-a01d-9315e4572e7e.jpg", 
                imgs: [
                  "./vids/video-adiction.mp4",
                  "./b9a793e6-eb50-49ea-a01d-9315e4572e7e.jpg"
                ] 
              },
              { 
                title: t.gallery.categories.food, 
                img: "./05302639-4a45-4a16-8b0f-d7e5fbd8c6b7.jpg", 
                imgs: [
                  "./vids/video-food.mp4",
                  "./05302639-4a45-4a16-8b0f-d7e5fbd8c6b7.jpg",
                  "./54ca4e00-97f6-4bdd-99a5-8d0c9019b211.jpg",
                  "./341f5005-acbb-48a1-aa7b-9ee5de3d52ad.jpg"
                ] 
              },
              { 
                title: t.gallery.categories.quran, 
                img: "./ef686a8a-6a1f-473c-9f01-909da4073e06.jpg", 
                imgs: [
                  "./vids/video-quran.mp4",
                  "./vids/video-quran2.mp4",
                  "./ef686a8a-6a1f-473c-9f01-909da4073e06.jpg",
                  "./d69f4c88-bb42-4a70-b438-6ec011dc6bee.jpg",
                  "./59545d3f-3e5e-4c59-89b4-0d7171061a5d.jpg"
                ] 
              },
              { 
                title: t.gallery.categories.construction, 
                img: "./b29a8349-6b5d-4edb-b313-0acf7e5c6ee8.jpg", 
                imgs: [
                  "./vids/video-construction.mp4",
                  "./b29a8349-6b5d-4edb-b313-0acf7e5c6ee8.jpg",
                  "./9aa209c1-42f3-48d6-a819-ae6cbde5fb15.jpg",
                  "./bea0d982-5bb1-4561-95ed-afdb4f96899b.jpg",
                  "./099933e0-ad9d-4abf-82c3-75b060c9f6ee.jpg",
                  "./a4793aca-2c61-4e6a-b8b5-ffffef3ec05e.jpg",
                  "./4d1fc065-c6a0-45ed-92b7-aca166862ccf.jpg"
                ] 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[16/9] rounded-3xl overflow-hidden cursor-pointer shadow-md"
                onClick={() => {
                  setSelectedGallery({ title: item.title, imgs: item.imgs || [item.img] });
                  setCurrentImageIndex(0);
                }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-islamic-deep)]/90 via-[var(--color-islamic-deep)]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                  <div className="w-12 h-1 bg-[var(--color-islamic-gold)] rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-[var(--color-islamic-deep)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path d="M15 15L45 45M15 45L45 15" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[var(--color-islamic-gold-light)]">
              {t.legacy.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-light">
              {t.legacy.content1}
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed font-light">
              {t.legacy.content2}
            </motion.p>
            <motion.div variants={fadeUp}>
              <button 
                onClick={() => navigateTo('/legado-said-louahabi')}
                className="inline-flex items-center gap-2 text-[var(--color-islamic-deep)] bg-[var(--color-islamic-gold)] hover:bg-[var(--color-islamic-gold-light)] px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {t.legacy.readMoreCta}
                <ChevronRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-islamic-deep)] to-[var(--color-islamic-emerald)]"></div>
        {/* Puedes cambiar esta imagen de fondo manualmente editando la URL dentro de bg-[url('...')] */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2070&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              {t.donation.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-white/90 mb-10 font-light leading-relaxed">
              {t.donation.text}
            </motion.p>
            <motion.div variants={fadeUp}>
              <a 
                href={GOFUNDME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--color-islamic-gold)] hover:bg-[#c5a02b] text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl shadow-[var(--color-islamic-gold)]/30 hover:shadow-[var(--color-islamic-gold)]/50 hover:-translate-y-1"
              >
                {t.donation.cta}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-islamic-gray)] text-white/70 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-islamic-deep)] to-[var(--color-islamic-emerald)] flex items-center justify-center text-white font-serif font-bold text-xl">
                  A
                </div>
                <span className="font-serif font-semibold text-xl text-white">
                  {t.nav.logoText}
                </span>
              </div>
              <p className="text-sm max-w-md">
                © {new Date().getFullYear()} {t.hero.title}. {t.footer.rights}
              </p>
            </div>
            
            <div className="flex flex-col gap-4 md:items-end">
              <div className="flex items-start gap-3 max-w-sm md:text-right">
                <MapPin className="w-5 h-5 text-[var(--color-islamic-emerald)] flex-shrink-0 mt-1 md:order-2" />
                <span className="md:order-1">{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-3 md:text-right">
                <Phone className="w-5 h-5 text-[var(--color-islamic-emerald)] flex-shrink-0 md:order-2" />
                <span className="md:order-1" dir="ltr">{t.footer.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedGallery(null)}
          >
            <button 
              onClick={() => setSelectedGallery(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>
            
            {selectedGallery.imgs.length > 1 && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(prev => prev === 0 ? selectedGallery.imgs.length - 1 : prev - 1);
                  }}
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full"
                >
                  <ChevronLeft className={`w-8 h-8 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(prev => prev === selectedGallery.imgs.length - 1 ? 0 : prev + 1);
                  }}
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full"
                >
                  <ChevronRight className={`w-8 h-8 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </button>
              </>
            )}

            <div 
              className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedGallery.imgs[currentImageIndex].endsWith('.mp4') ? (
                <motion.video 
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={selectedGallery.imgs[currentImageIndex]} 
                  controls
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={selectedGallery.imgs[currentImageIndex]} 
                  alt={selectedGallery.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
              )}
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-serif text-white">{selectedGallery.title}</h3>
                {selectedGallery.imgs.length > 1 && (
                  <p className="text-white/60 mt-2">
                    {currentImageIndex + 1} / {selectedGallery.imgs.length}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full View Modal for Impact Cards */}
      <AnimatePresence>
        {fullViewImpactCard !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col">
              <div className="max-w-3xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8 flex-grow">
                <button
                  onClick={() => setFullViewImpactCard(null)}
                  className="inline-flex items-center gap-2 text-[var(--color-islamic-gray-light)] hover:text-[var(--color-islamic-emerald)] transition-colors mb-12 group"
                >
                  <ChevronLeft className={`w-5 h-5 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
                  {t.impact.back}
                </button>

                {(() => {
                  const data = [
                    { icon: Activity, item: t.impact.items[0] },
                    { icon: Utensils, item: t.impact.items[1] },
                    { icon: Globe, item: t.impact.items[2] },
                    { icon: BookOpen, item: t.impact.items[3] }
                  ][fullViewImpactCard];

                  return (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-20 h-20 bg-[var(--color-islamic-emerald)]/10 rounded-3xl flex items-center justify-center mb-8">
                        <data.icon className="w-10 h-10 text-[var(--color-islamic-emerald)]" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-islamic-deep)] mb-6">
                        {data.item.title}
                      </h2>
                      {data.item.quote && (
                        <blockquote className="text-xl md:text-2xl font-serif italic text-[var(--color-islamic-gold)] mb-8 border-l-4 border-[var(--color-islamic-gold)] pl-6 py-2 bg-[var(--color-islamic-gold)]/5 rounded-r-xl">
                          {data.item.quote}
                        </blockquote>
                      )}
                      <div className="prose prose-lg prose-emerald max-w-none text-[var(--color-islamic-gray)]">
                        <p className="leading-relaxed text-lg md:text-xl font-light whitespace-pre-line">
                          {data.item.longText}
                        </p>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* About Modal */}
      <AnimatePresence>
        {isAboutModalOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[var(--color-islamic-gold)]/20"
            >
              <button
                onClick={() => setIsAboutModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-[var(--color-islamic-deep)] hover:bg-[var(--color-islamic-emerald)]/10 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 sm:p-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-islamic-deep)] mb-8 pr-8">
                  {t.aboutModal.title}
                </h2>

                <div className="space-y-6 text-gray-800 text-lg leading-relaxed font-light">
                  <p>{t.aboutModal.p1}</p>

                  <p>{t.aboutModal.p2}</p>

                  <div className="my-8 aspect-video rounded-xl overflow-hidden border-2 border-[var(--color-islamic-deep)] shadow-lg bg-black">
                    <video 
                      className="w-full h-full" 
                      controls 
                      preload="metadata"
                      poster="./ef686a8a-6a1f-473c-9f01-909da4073e06.jpg"
                    >
                      <source src="./vids/video-ajusco-principal.mp4" type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>

                  <p>{t.aboutModal.p3}</p>

                  <div className="w-full h-px bg-[var(--color-islamic-emerald)]/20 my-8"></div>

                  <p>{t.aboutModal.p4}</p>

                  <p>{t.aboutModal.p5}</p>

                  <p>{t.aboutModal.p6}</p>



                  <p>{t.aboutModal.p7}</p>

                  <p>{t.aboutModal.p8}</p>

                  <div className="w-full h-px bg-[var(--color-islamic-emerald)]/20 my-8"></div>

                  <p className="font-medium text-[var(--color-islamic-deep)]">{t.aboutModal.p9}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
