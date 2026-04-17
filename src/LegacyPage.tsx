import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GOFUNDME_LINK = "https://gofund.me/ad3ddda37";

const getAsset = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\.\//, '').replace(/^\//, '')}`;
};

export default function LegacyPage({ navigateTo, t, lang }: { navigateTo: (path: string) => void, t: any, lang: string }) {
  return (
    <div className="min-h-screen bg-[var(--color-islamic-deep)] text-white font-sans selection:bg-[var(--color-islamic-emerald)] selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[var(--color-islamic-deep)]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={() => navigateTo('/')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <ChevronLeft className={`w-5 h-5 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
              {t.impact.back || "Volver"}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-islamic-gold-light)] mb-12 text-center">
            {t.legacy.title}
          </h1>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8 space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light">
              <p>{t.legacy.content1}</p>
              <p>{t.legacy.content2}</p>
              <p>{t.legacy.content3}</p>
              <p>{t.legacy.content4}</p>
              <p>{t.legacy.content5}</p>
              <p>{t.legacy.content6}</p>
              <p>{t.legacy.content7}</p>
              <p>{t.legacy.content8}</p>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-islamic-gold-light)] mt-12 mb-6">
                {t.legacy.subtitle}
              </h2>
              <p>{t.legacy.content9}</p>
              <p>{t.legacy.content10}</p>
            </div>

            <div className="md:col-span-4 space-y-6">
              {/* Placeholders for images */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group">
                {/* Puedes cambiar esta imagen manualmente editando el atributo 'src' */}
                <img 
                  src={getAsset("./f474c36c-78af-4e3b-a392-dadc2174e0a1.jpg")}
                  alt={t.legacy.imgAlt1}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group">
                {/* Puedes cambiar esta imagen manualmente editando el atributo 'src' */}
                <img 
                  src={getAsset("./1d2c0bde-c4f8-4a24-8f89-d11f367b4f2b.jpg")}
                  alt={t.legacy.imgAlt2}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group">
                {/* Puedes cambiar esta imagen manualmente editando el atributo 'src' */}
                <img 
                  src={getAsset("./9f41dd16-bbc4-441c-a7e0-3e7bfbe8c26e.jpg")}
                  alt={t.legacy.imgAlt3}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <a 
              href={GOFUNDME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-islamic-deep)] bg-[var(--color-islamic-gold)] hover:bg-[var(--color-islamic-gold-light)] px-10 py-5 rounded-full font-medium text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t.legacy.cta}
              <ChevronRight className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
