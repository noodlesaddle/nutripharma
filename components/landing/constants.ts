import { ContentStructure } from './types';

export const CAROUSEL_ITEM_WIDTH = 288; // 72 * 4
export const CAROUSEL_GAP = 16; // 1rem

export const content: Record<'en' | 'mn', ContentStructure> = {
    en: {
        nav: {
            home: "Home",
            products: "Products",
            services: "Services",
            about: "About",
            radiantViewer: "Radiant Viewer",
            contact: "Contact",
        },
        hero: {
            title: "Reliable Pharmaceutical Distribution",
            subtitle:
                "Importing quality medicines and efficiently distributing them to pharmacies across the nation.",
        },
        carousel: {
            title: "Our Featured Products",
            items: [
                {
                    title: "Essential Medicines",
                    description: "Core medications for primary healthcare needs",
                },
                {
                    title: "Specialty Drugs",
                    description: "Advanced medications for complex conditions",
                },
                {
                    title: "Medical Supplies",
                    description:
                        "Essential equipment and consumables for healthcare providers",
                },
                {
                    title: "Over-the-Counter",
                    description: "Common medications available without prescription",
                },
                {
                    title: "Nutritional Supplements",
                    description: "Vitamins and minerals for overall health and wellness",
                },
            ],
        },
        services: {
            title: "Our Services",
            distribution: {
                title: "Efficient Distribution",
                description:
                    "Fast and reliable delivery to pharmacies across the country.",
            },
            quality: {
                title: "Quality Assurance",
                description: "Rigorous quality control for all imported medicines.",
            },
            range: {
                title: "Wide Product Range",
                description:
                    "Comprehensive catalog of essential medications and nutritional products.",
            },
        },
        about: {
            title: "About Nomt-Nutripharma",
            description:
                "With over 10 years of experience, Nomt-Nutripharma has been a trusted partner for pharmacies nationwide. We specialize in importing high-quality medicines and nutritional supplements from reputable international manufacturers and ensuring their timely distribution to our network of pharmacy partners.",
            features: [
                "Licensed and regulated importer",
                "Nationwide distribution network",
                "Extensive range of medications and supplements",
            ],
        },
        radiantViewer: {
            tag: "Official Distributor",
            title: "Empowering Diagnostics with",
            highlight: "Radiant Viewer",
            description:
                "We are proud to announce our official partnership as the authorized distributor of Radiant Viewer, a leading DICOM viewer trusted by medical professionals worldwide. Get access to advanced medical imaging solutions directly from us.",
            features: [
                "Cutting-edge medical imaging software for enhanced diagnostics.",
                "Dedicated local support and comprehensive training from our experts.",
                "Seamless integration into existing medical workflows.",
                "Cost-effective licensing and upgrade options.",
            ],
            ctaPrimary: "Learn More About Radiant Viewer",
            ctaPrimaryLink: "https://www.radiantviewer.com/",
            cardTitle: "Intuitive & Powerful DICOM Viewer",
            cardDescription:
                "Radiant Viewer provides a comprehensive set of tools for medical image visualization and analysis, supporting a wide range of modalities.",
            imageSrc: "https://www.radiantviewer.com/img/mainbg.jpg",
            imageAlt: "Radiant Viewer Software Interface",
            colorScheme: 'emerald',
        },
        nutricost: {
            tag: "Official Distributor",
            title: "Enhancing Wellness with",
            highlight: "Nutricost Supplements",
            description:
                "As an official distributor of Nutricost, we bring a wide selection of premium, high-quality nutritional supplements directly to your customers. Nutricost is renowned for its commitment to purity, potency, and transparent labeling, helping individuals achieve their health goals.",
            features: [
                "Extensive range of vitamins, minerals, and specialty supplements.",
                "Third-party tested products for guaranteed purity and quality.",
                "Transparent labeling and allergen information.",
                "Trusted brand by health enthusiasts worldwide.",
            ],
            ctaPrimary: "Browse Nutricost Products",
            ctaPrimaryLink: "https://nutricost.com/collections/all-items",
            cardTitle: "Pure, Potent, & Transparent Supplements",
            cardDescription:
                "Nutricost offers a comprehensive line of supplements, meticulously tested for quality and designed to support various health and wellness needs.",
            imageSrc: "https://www.nasc.cc/wp-content/uploads/2024/09/Nutricost-Logo.jpg",
            imageAlt: "Nutricost protein powder and supplements",
            colorScheme: 'sky',
        },
        contact: {
            title: "Get in Touch",
            description:
                "Have questions or ready to place an order? Our team is here to assist you.",
            form: {
                name: "Your Name",
                email: "Your Email",
                phone: "Your Phone Number",
                request: "Your Request",
                submit: "Submit Contact Form",
            },
            placeHolder: {
                name: "Please provide us your Name",
                email: "Please provide us your Email",
                phone: "Please provide us your Phone Number",
                submit: " ",
            },
        },
        footer: {
            rights: `© ${new Date().getFullYear()} Nutripharma Pharmaceutical Distributors. All rights reserved.`,
            terms: "Terms of Service",
            privacy: "Privacy Policy",
        },
    },
    mn: {
        nav: {
            home: "Нүүр",
            products: "Бүтээгдэхүүн",
            services: "Үйлчилгээ",
            about: "Бидний тухай",
            radiantViewer: "Радиант Вьювер",
            contact: "Холбоо барих",
        },
        hero: {
            title: "Найдвартай эм ханган нийлүүлэлт",
            subtitle:
                "Чанартай эм импортлож, үндэсний хэмжээнд эмийн сангуудад үр ашигтай түгээх.",
        },
        carousel: {
            title: "Манай онцлох бүтээгдэхүүнүүд",
            items: [
                {
                    title: "Үндсэн эмүүд",
                    description:
                        "Анхан шатны эрүүл мэндийн үйлчилгээнд зориулсан үндсэн эмүүд",
                },
                {
                    title: "Тусгай эмүүд",
                    description: "Нарийн төвөгтэй өвчнүүдэд зориулсан дэвшилтэт эмүүд",
                },
                {
                    title: "Эмнэлгийн хэрэгсэл",
                    description:
                        "Эрүүл мэндийн байгууллагуудад зориулсан чухал тоног төхөөрөмж, хэрэглээний материалууд",
                },
                {
                    title: "Жоргүй олгох эмүүд",
                    description: "Жоргүйгээр олгох боломжтой түгээмэл эмүүд",
                },
                {
                    title: "Хоол тэжээлийн нэмэлтүүд",
                    description:
                        "Ерөнхий эрүүл мэнд, сайн сайхан байдалд зориулсан витамин, эрдэс бодисууд",
                },
            ],
        },
        services: {
            title: "Манай үйлчилгээ",
            distribution: {
                title: "Үр ашигтай түгээлт",
                description: "Улс даяар эмийн сангуудад хурдан, найдвартай хүргэлт.",
            },
            quality: {
                title: "Чанарын баталгаа",
                description:
                    "Импортолсон бүх эмийн бүтээгдэхүүнд чанд чанарын хяналт тавина.",
            },
            range: {
                title: "Өргөн сонголт",
                description:
                    "Үндсэн эм болон хоол тэжээлийн бүтээгдэхүүний иж бүрэн каталог.",
            },
        },
        about: {
            title: "Нутрифармын тухай",
            description:
                "10 гаруй жилийн туршлагатай Номт-Нутрифарма ХХК нь улс даяар эмийн сангуудын найдвартай түнш болж ирсэн. Бид олон улсын нэр хүндтэй үйлдвэрлэгчдээс өндөр чанартай эм болон хоол тэжээлийн нэмэлтүүдийг импортлох, эмийн сангийн түнш байгууллагуудын сүлжээнд цаг тухайд нь түгээх чиглэлээр мэргэшсэн.",
            features: [
                "Зөвшөөрөлтэй, зохицуулалттай импортлогч",
                "Улс даяар түгээх сүлжээ",
                "Эм болон хоол тэжээлийн нэмэлтүүдийн өргөн сонголт",
            ],
        },
        radiantViewer: {
            tag: "Албан ёсны дистрибьютор",
            title: "Радиант Вьюверээр оношилгоог сайжруулах",
            highlight: "Радиант Вьювер",
            description:
                "Бид дэлхийн өнцөг булан бүрт эмнэлгийн мэргэжилтнүүдийн итгэлийг хүлээсэн тэргүүлэгч DICOM үзүүлэгч Radiant Viewer-ийн албан ёсны дистрибьютер болсноо бахардан зарлаж байна. Биднээс шууд дэвшилтэт эмнэлгийн дүрслэл шийдлүүдийг аваарай.",
            features: [
                "Оношилгоог сайжруулах орчин үеийн  дүрслэл програм хангамж.",
                "Манай мэргэжилтнүүдээс тусгай дэмжлэг, иж бүрэн сургалт.",
                "Одоо байгаа эмнэлгийн ажлын урсгалд саадгүй нэгдэнэ.",
                "Зардал хэмнэлттэй лиценз болон шинэчлэх сонголтууд.",
            ],
            ctaPrimary: "Радиант Вьюверийн тухай дэлгэрэнгүй",
            ctaPrimaryLink: "https://www.radiantviewer.com/",
            cardTitle: "Ухаалаг бөгөөд хүчирхэг DICOM үзүүлэгч",
            cardDescription:
                "Радиант Вьювер нь эмнэлгийн дүрслэлийг харуулах, дүн шинжилгээ хийхэд зориулсан иж бүрэн хэрэгслүүдийг санал болгодог бөгөөд олон төрлийн модалийг дэмждэг.",
            imageSrc: "https://www.radiantviewer.com/img/mainbg.jpg",
            imageAlt: "Radiant Viewer Software Interface",
            colorScheme: 'emerald',
        },
        nutricost: {
            tag: "Албан ёсны дистрибьютор",
            title: "Эрүүл мэндийг дэмжих",
            highlight: "Нутрикост нэмэлт бүтээгдэхүүнүүд",
            description:
                "Нутрикостын албан ёсны дистрибьютерийн хувиар бид өндөр чанартай хоол тэжээлийн нэмэлт бүтээгдэхүүний өргөн сонголтыг үйлчлүүлэгчдэдээ шууд хүргэж байна. Нутрикост нь цэвэр байдал, үр дүн, орц найрлага нь ил тодоороо алдартай байгууллага билээ.",
            features: [
                "Витамин, эрдэс бодис, тусгай нэмэлтүүдийн өргөн сонголт.",
                "Цэвэр байдал, чанарыг баталгаажуулсан, гуравдагч этгээдээр туршсан бүтээгдэхүүн.",
                "Орц найрлага ил тод, харшлын мэдээлэл.",
                "Дэлхий даяар эрүүл мэндийн сонирхогчдын итгэлийг хүлээсэн брэнд.",
            ],
            ctaPrimary: "Нутрикост бүтээгдэхүүн үзэх",
            ctaPrimaryLink: "https://nutricost.com/collections/all-items",
            cardTitle: "Цэвэр, хүчирхэг, ил тод нэмэлтүүд",
            cardDescription:
                "Нутрикост нь чанарыг нь нарийн шалгасан, эрүүл мэнд, сайн сайхан байдлын төрөл бүрийн хэрэгцээг дэмжих зорилготой иж бүрэн нэмэлт бүтээгдэхүүнүүдийг санал болгодог.",
            imageSrc: "https://www.nasc.cc/wp-content/uploads/2024/09/Nutricost-Logo.jpg",
            imageAlt: "Nutricost protein powder and supplements",
            colorScheme: 'sky',
        },
        contact: {
            title: "Холбоо барих",
            description:
                "Асуулт байна уу эсвэл захиалга өгөхөд бэлэн үү? Манай баг танд туслахад бэлэн байна.",
            form: {
                name: "Таны нэр",
                email: "Таны и-мэйл",
                phone: "Таны утасны дугаар",
                request: "Таны утасны санал хүсэлт",
                submit: "Холбоо барих хүсэлт илгээх",
            },
            placeHolder: {
                name: "Таны нэрээ бичнэ үү",
                email: "Таны и-мэйлээ бичнэ үү",
                phone: "Таны утасны дугаараа бичнэ үү",
                submit: "Холбоо барих хүсэлт илгээх",
            },
        },
        footer: {
            rights: `© ${new Date().getFullYear()} Нутрифарма Эм Ханган Нийлүүлэх Байгууллага. Бүх эрх хуулиар хамгаалагдсан.`,
            terms: "Үйлчилгээний нөхцөл",
            privacy: "Нууцлалын бодлого",
        },
    },
};
