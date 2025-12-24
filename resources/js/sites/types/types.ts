import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    image: string;
    priceStart?: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface NavLink {
    label: string;
    href: string;
}