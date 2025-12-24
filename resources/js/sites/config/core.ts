import { SocialLink } from '@/sites/types';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

/**
 * Core Site Information
 * 
 * Centralized configuration for all site-related information including:
 * - Contact details (email, phone, address)
 * - Social media links
 * - Location/map information
 */

const PHONE_FORMATTED = '+212535000000';
const PHONE_WHATSAPP = PHONE_FORMATTED.replace('+', '');

export const SITE_CONTACT = {
    email: 'contact@ecolaundry.ma',
    phone: '05 35 00 00 00',
    phoneFormatted: PHONE_FORMATTED,
    address: 'Hamria, Meknès,\nMaroc',
    addressLine1: 'Hamria',
    addressLine2: 'Meknès, Maroc',
};

export const SITE_SOCIAL_LINKS: SocialLink[] = [
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: MessageCircle, href: `https://wa.me/${PHONE_WHATSAPP}` }, // WhatsApp
];

/**
 * Map/Location Information
 * Format: Google Maps URL format
 * You can update with actual coordinates if needed
 */
export const SITE_LOCATION = {
    mapUrl: '#', // Google Maps embed URL or link
    coordinates: {
        lat: null as number | null,
        lng: null as number | null,
    },
    address: SITE_CONTACT.address,
};

/**
 * SEO Content for Footer
 * Local SEO optimized content with keywords for search engine visibility
 */
export const SITE_SEO = {
    title: 'EcoLaundry : Votre partenaire propreté à Meknès',
    paragraphs: [
        'Située au cœur de la ville, EcoLaundry réinvente le service de <strong>blanchisserie à Meknès</strong>. Que vous habitiez à Hamria, Plaisance, ou Belle Vue, notre service de <strong>pressing avec livraison</strong> vous simplifie la vie. Spécialistes du <strong>lavage au Kilo</strong>, nous traitons aussi bien le linge quotidien que les articles volumineux comme les tapis et couettes.',
        'Notre engagement : offrir aux habitants de Meknès une alternative moderne, écologique et rapide aux pressings traditionnels. Fini les corvées, bonjour le temps libre. Profitez de nos services de nettoyage à sec, repassage et blanchisserie industrielle adaptés aux particuliers et professionnels.',
    ],
};

