// Type definitions for the landing page components

export interface NavItem {
    name: string;
    href: string;
}

export interface FloatingNavProps {
    language: Language;
    setLanguage: (lang: Language) => void;
}

export interface CarouselItem {
    title: string;
    description: string;
}

export interface AppleCardProps {
    title: string;
    description: string;
}

export interface AppleCardsCarouselProps {
    items: CarouselItem[];
}

export interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface FeatureItem {
    text: string;
}

export interface ProductSectionProps {
    tag: string;
    title: string;
    highlight: string;
    description: string;
    features: string[];
    ctaPrimary: string;
    ctaPrimaryLink: string;
    cardTitle: string;
    cardDescription: string;
    imageSrc: string;
    imageAlt: string;
    colorScheme?: 'emerald' | 'sky';
}

export type Language = 'en' | 'mn';

export interface ContentStructure {
    nav: {
        home: string;
        products: string;
        services: string;
        about: string;
        radiantViewer: string;
        contact: string;
    };
    hero: {
        title: string;
        subtitle: string;
    };
    carousel: {
        title: string;
        items: CarouselItem[];
    };
    services: {
        title: string;
        distribution: {
            title: string;
            description: string;
        };
        quality: {
            title: string;
            description: string;
        };
        range: {
            title: string;
            description: string;
        };
    };
    about: {
        title: string;
        description: string;
        features: string[];
    };
    radiantViewer: ProductSectionProps;
    nutricost: ProductSectionProps;
    contact: {
        title: string;
        description: string;
        form: {
            name: string;
            email: string;
            phone: string;
            request: string;
            submit: string;
        };
        placeHolder: {
            name: string;
            email: string;
            phone: string;
            request?: string;
            submit: string;
        };
    };
    footer: {
        rights: string;
        terms: string;
        privacy: string;
    };
}
