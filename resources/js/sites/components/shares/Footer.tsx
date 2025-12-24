import { Droplets, MapPin, Mail, Phone } from 'lucide-react';
import { FOOTER_SERVICES, SITE_SOCIAL_LINKS, SITE_CONTACT, SITE_SEO } from '@/sites/config';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-12 md:pt-20 pb-8 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden select-none opacity-[0.02]">
            <span className="font-display font-bold text-[20vw] leading-none text-white whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm">
                ECOLAUNDRY
            </span>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-4 md:mb-6 group">
              <div className="bg-brand-main p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-main/20">
                  <Droplets className="text-white" size={24} fill="currentColor" fillOpacity={0.2} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">EcoLaundry</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              La référence du soin du linge à Meknès. <br/>
              Technologie moderne, produits écologiques et service client attentionné.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 md:mb-6 text-white">Services</h4>
            <ul className="space-y-3 md:space-y-4 text-white/60 text-sm">
              {FOOTER_SERVICES.map((item) => (
                  <li key={item}>
                      <a href="#services" className="hover:text-brand-main transition-colors flex items-center gap-2 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-main transition-colors"></span>
                          {item}
                      </a>
                  </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 md:mb-6 text-white">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-brand-main/20 transition-colors">
                    <MapPin size={16} className="text-brand-main" />
                </div>
                <span className="mt-1 whitespace-pre-line">{SITE_CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-brand-main/20 transition-colors">
                    <Mail size={16} className="text-brand-main" />
                </div>
                <a href={`mailto:${SITE_CONTACT.email}`} className="hover:text-white transition-colors">{SITE_CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-brand-main/20 transition-colors">
                    <Phone size={16} className="text-brand-main" />
                </div>
                <a href={`tel:${SITE_CONTACT.phoneFormatted}`} className="hover:text-white transition-colors">{SITE_CONTACT.phone}</a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 md:mb-6 text-white">Suivez-nous</h4>
            <div className="flex gap-4">
              {SITE_SOCIAL_LINKS.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                      key={idx}
                      href={social.href} 
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-main hover:border-brand-main hover:text-white text-white/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-brand-main/25"
                  >
                      <Icon size={20} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* SEO Block */}
        <div className="border-t border-white/10 pt-8 md:pt-12 pb-8 md:pb-12 mb-6 md:mb-8">
            <h3 className="font-display text-white/80 text-lg mb-4">{SITE_SEO.title}</h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-sm text-white/40 leading-relaxed">
                {SITE_SEO.paragraphs.map((paragraph, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex justify-center items-center text-xs text-white/30">
          <p>EcoLaundry Meknès</p>
        </div>
      </div>
    </footer>
  );
}