"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../app/logo.png";
import {
  motion,
  useAnimation,
  useMotionValue,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pill, Truck, ShieldCheck, Phone, Globe, Menu, X } from "lucide-react";

const content = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      about: "About",
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
      title: "About Nutripharm",
      description:
        "With over 20 years of experience, Nutripharm has been a trusted partner for pharmacies nationwide. We specialize in importing high-quality medicines and nutritional supplements from reputable international manufacturers and ensuring their timely distribution to our network of pharmacy partners.",
      features: [
        "Licensed and regulated importer",
        "Nationwide distribution network",
        "Extensive range of medications and supplements",
      ],
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
        submit: "Request a Call Back",
      },
      placeHolder: {
        name: "Please provide us your Name",
        email: "Please provide us your Email",
        phone: "Please provide us your Phone Number",
        // request: "Please provide us your Request",
        submit: "Request a Call Back",
      },
    },
    footer: {
      rights:
        "© 2024 Nutripharm Pharmaceutical Distributors. All rights reserved.",
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
        "20 гаруй жилийн туршлагатай Нутрифарм нь улс даяар эмийн сангуудын найдвартай түнш болж ирсэн. Бид олон улсын нэр хүндтэй үйлдвэрлэгчдээс өндөр чанартай эм болон хоол тэжээлийн нэмэлтүүдийг импортлох, эмийн сангийн түнш байгууллагуудын сүлжээнд цаг тухайд нь түгээх чиглэлээр мэргэшсэн.",
      features: [
        "Зөвшөөрөлтэй, зохицуулалттай импортлогч",
        "Улс даяар түгээх сүлжээ",
        "Эм болон хоол тэжээлийн нэмэлтүүдийн өргөн сонголт",
      ],
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
        // request: "Таны санал хүсэлтээ бичнэ үү",
        submit: "Холбоо барих хүсэлт илгээх",
      },
    },
    footer: {
      rights:
        "© 2024 Нутрифарм Эм Ханган Нийлүүлэгч. Бүх эрх хуулиар хамгаалагдсан.",
      terms: "Үйлчилгээний нөхцөл",
      privacy: "Нууцлалын бодлого",
    },
  },
};

const FloatingNav = ({ language, setLanguage }) => {
  const { scrollYProgress } = useScroll();
  const t = content[language].nav;
  const [activeItem, setActiveItem] = useState(t.home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBackgroundColor = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.9)"]
  );

  const navBackdropFilter = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["blur(0px)", "blur(20px)"]
  );

  const navItems = [
    { name: t.home, href: "#home" },
    { name: t.products, href: "#products" },
    { name: t.services, href: "#services" },
    { name: t.about, href: "#about" },
    { name: t.contact, href: "#contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-4 inset-x-0  z-50 px-4"
      style={{
        // backgroundColor: navBackgroundColor,
        backdropFilter: navBackdropFilter,
      }}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div
        className="max-w-7xl mx-auto flex items-center h-16 px-4 justify-between  rounded-full border  border-emerald-200"
        layout
      >
        <Link href="#" className="text-lg font-bold text-emerald-600">
          <Image src={logo} width={60} height={30} alt="Nutripharm Logo" />
        </Link>
        <nav className="hidden md:block ">
          <ul className="flex space-x-2">
            <AnimatePresence>
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                      activeItem === item.name
                        ? "bg-emerald-600 text-white"
                        : "text-emerald-700 hover:bg-emerald-100 hover:text-emerald-900"
                    }`}
                    onClick={(e) => {
                      setActiveItem(item.name);
                      handleNavClick(e, item.href);
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === "en" ? "mn" : "en")}
            aria-label="Toggle language"
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100"
          >
            <Globe className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </motion.div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden bg-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      activeItem === item.name
                        ? "bg-emerald-600 text-white"
                        : "text-emerald-700 hover:bg-emerald-100 hover:text-emerald-900"
                    }`}
                    onClick={(e) => {
                      setActiveItem(item.name);
                      handleNavClick(e, item.href);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const AuroraBackground = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white" />
      <div
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-radial from-emerald-200 via-emerald-100 to-transparent opacity-50 blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.4) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute -bottom-1/4  -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-radial from-emerald-200 via-emerald-100 to-transparent opacity-50 blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.4) 50%, transparent 100%)",
        }}
      />
    </div>
  );
};

const AppleCard = ({ title, description }) => {
  return (
    <motion.div
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 h-full w-full bg-white opacity-80 rounded-xl" />
      <div className="relative z-10 p-6 flex flex-col h-full justify-between">
        <div>
          <h3 className="font-semibold text-xl text-emerald-800">{title}</h3>
          <p className="mt-2 text-emerald-600">{description}</p>
        </div>
        <Button className="self-start bg-emerald-600 hover:bg-emerald-700 text-white">
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

const AppleCardsCarousel = ({ items }) => {
  const [dragStartX, setDragStartX] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const onDragStart = (event) => {
    setDragStartX(event.clientX || event.touches[0].clientX);
    setIsSwiping(true);
  };

  const onDragEnd = () => {
    setIsSwiping(false);
    const containerWidth = containerRef.current.offsetWidth;
    const numItems = items.length;
    const itemWidth = 288; // 72 * 4 = 288
    const maxDrag = -((numItems - 1) * itemWidth);
    let newX = x.get() + draggedDistance;

    if (newX > 0) {
      newX = 0;
    } else if (newX < maxDrag) {
      newX = maxDrag;
    } else {
      newX = Math.round(newX / itemWidth) * itemWidth;
    }

    x.set(newX);
    setDraggedDistance(0);
  };

  const onDrag = (event) => {
    if (isSwiping) {
      const currentX = event.clientX || event.touches[0].clientX;
      const distance = currentX - dragStartX;
      setDraggedDistance(distance);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isSwiping) {
        onDrag(e);
      }
    };

    const handleMouseUp = () => {
      if (isSwiping) {
        onDragEnd();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isSwiping]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-4 p-4"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {items.map((item, index) => (
          <motion.div key={index} className="shrink-0">
            <AppleCard title={item.title} description={item.description} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default function NutripharmLanding() {
  const [language, setLanguage] = useState("en");
  const t = content[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-emerald-900">
      <FloatingNav language={language} setLanguage={setLanguage} />
      <main className="flex-1 pt-24">
        <div>
          <motion.section
            id="home"
            className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <AuroraBackground />
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <motion.div
                className="container mx-auto px-4 md:px-6 relative z-10"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <motion.div className="space-y-2" variants={fadeInUp}>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-emerald-800">
                      {t.hero.title}
                    </h1>
                    <p className="mx-auto max-w-[700px] text-emerald-700 md:text-xl">
                      {t.hero.subtitle}
                    </p>
                  </motion.div>
                  <motion.div className="space-x-4" variants={fadeInUp}>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      Our Catalog
                    </Button>
                    <Button
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      Contact Sales
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            id="products"
            className="w-full py-12 md:py-24 lg:py-32"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <motion.div
                className="container mx-auto px-4 md:px-6"
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-emerald-800">
                  {t.carousel.title}
                </h2>
                <AppleCardsCarousel items={t.carousel.items} />
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            id="services"
            className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <motion.div
                className="container mx-auto px-4 md:px-6"
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-emerald-800">
                  {t.services.title}
                </h2>
                <motion.div
                  className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
                  variants={staggerChildren}
                >
                  <motion.div
                    className="flex flex-col items-center space-y-2 border border-emerald-200 p-4 rounded-lg bg-white"
                    variants={fadeInUp}
                  >
                    <div className="p-2 bg-emerald-100 rounded-full">
                      <Truck className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800">
                      {t.services.distribution.title}
                    </h3>
                    <p className="text-sm text-emerald-600 text-center">
                      {t.services.distribution.description}
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center space-y-2 border border-emerald-200 p-4 rounded-lg bg-white"
                    variants={fadeInUp}
                  >
                    <div className="p-2 bg-emerald-100 rounded-full">
                      <ShieldCheck className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800">
                      {t.services.quality.title}
                    </h3>
                    <p className="text-sm text-emerald-600 text-center">
                      {t.services.quality.description}
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center space-y-2 border border-emerald-200 p-4 rounded-lg bg-white"
                    variants={fadeInUp}
                  >
                    <div className="p-2 bg-emerald-100 rounded-full">
                      <Pill className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800">
                      {t.services.range.title}
                    </h3>
                    <p className="text-sm text-emerald-600 text-center">
                      {t.services.range.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            id="about"
            className="w-full py-12 md:py-24 lg:py-32"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <motion.div
                className="container mx-auto px-4 md:px-6"
                variants={fadeInUp}
              >
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                  <motion.div className="space-y-4" variants={fadeInUp}>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-emerald-800">
                      {t.about.title}
                    </h2>
                    <p className="text-emerald-600">{t.about.description}</p>
                    <ul className="grid gap-2">
                      {t.about.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-2"
                          variants={fadeInUp}
                        >
                          <ShieldCheck className="h-5 w-5 text-emerald-600" />
                          <span className="text-emerald-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    className="flex justify-center"
                    variants={fadeInUp}
                  >
                    <img
                      alt="Pharmaceutical warehouse"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="400"
                      src="https://www.arrowedge.co.uk/wp-content/uploads/2018/09/arro_pharma.jpg"
                      width="600"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            id="contact"
            className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <motion.div
                className="container mx-auto px-4 md:px-6"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <motion.div className="space-y-2" variants={fadeInUp}>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-emerald-800">
                      {t.contact.title}
                    </h2>
                    <p className="max-w-[600px] text-emerald-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      {t.contact.description}
                    </p>
                  </motion.div>
                  <motion.div className="w-full max-w-md" variants={fadeInUp}>
                    <form className="p-8 bg-white rounded-2xl shadow-xl">
                      <div className="space-y-4  text-left">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-emerald-700 mb-1"
                          >
                            {t.contact.form.name}
                          </label>
                          <Input
                            id="name"
                            className="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder={t.contact.placeHolder.name}
                            type="text"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-emerald-700 mb-1"
                          >
                            {t.contact.form.email}
                          </label>
                          <Input
                            id="email"
                            className="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder={t.contact.placeHolder.email}
                            type="email"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-emerald-700 mb-1"
                          >
                            {t.contact.form.phone}
                          </label>
                          <Input
                            id="phone"
                            className="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder={t.contact.placeHolder.phone}
                            type="tel"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="request"
                            className="block text-sm font-medium text-emerald-700 mb-1"
                          >
                            {t.contact.form.request}
                          </label>
                          <Input
                            id="request"
                            className="w-full px-3 py-2 border border-emerald-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder={t.contact.placeHolder.request}
                            type="tel"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                        >
                          {t.contact.form.submit}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-center space-x-2 pt-4"
                    variants={fadeInUp}
                  >
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">
                      Call us: +976 7711-2233
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </main>
      <motion.footer
        className="w-full shrink-0 border-t border-emerald-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 items-center px-4 md:px-6">
          <p className="text-xs text-emerald-600">{t.footer.rights}</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-emerald-600"
              href="#"
            >
              {t.footer.terms}
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-emerald-600"
              href="#"
            >
              {t.footer.privacy}
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  );
}
