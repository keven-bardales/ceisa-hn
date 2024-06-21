import Image from "next/image";
import main_section_image from "@/root/public/landing/items/main_section_image_2.png";
import { cn } from "@/lib/utils/cn";
import { Eye, Goal, Home, Lightbulb, LocateIcon, Mail, Menu, PackageSearch, Sun, TrendingUp, Zap } from "lucide-react";
import IconComponent from "./components/icon-component";
import { LANDINGPRODUCTS } from "./constants/products";
import { Metadata } from "next";
import ContactForm from "./components/contact-form";
import NavBar from "./components/complete-nav-bar";
import ProductLandingDetail from "./components/product-landing-detail";
import QuoteNowComponent from "./components/quote-now-component";
import logo from "@/root/public/landing/logos/logo-oficial-amarillo-blanco.png";

export const metadata: Metadata = {
  title: "Ceisa Honduras",
  description: "Productos electricos de alta calidad para tus proyectos de construcción",
};

const mainSectionPadding = "py-20";

export default function LandingPage() {
  return (
    <main className="bg-white w-full h-screen overflow-auto relative">
      <header className="w-full  sticky top-0 z-[200]">
        <NavBar></NavBar>
      </header>
      <section id="home" className={cn("!pt-18 scroll-mt-24 !pb-[5rem] bg-landing-first-bg px-4 relative", mainSectionPadding)}>
        <div className="container mx-auto flex flex-col gap-y-3">
          <h1 className="text-landing-text-primary font-[900] text-4xl sm:text-5xl text-center max-w-[90%] lg:max-w-[70%] mx-auto">
            Productos electricos de alta calidad para tus proyectos de construcción
          </h1>
          <p className="text-center text-2xl font-semibold text-landing-text-primary">
            Contactanos y cotiza los productos electricos a los mejores precios del mercado
          </p>
          <div className="flex mx-auto justify-center gap-x-4 items-stretch">
            <IconComponent className="mx-auto bg-landing-text-primary text-landing-first-bg cursor-pointer" icon={Home} />
            <QuoteNowComponent />
          </div>
        </div>
        <Image
          style={{
            filter: "drop-shadow(0 12px 12px rgba(0, 0, 0, 0.5)) drop-shadow(0 20px 20px rgba(0, 0, 0, 0.3))",
          }}
          className="mx-auto w-[43rem] absolute z-[50] left-0 right-0 top-[75%] mt-14 md:mt-16"
          src={main_section_image}
          height={250}
          width={400}
          alt="Bombilla electrica"
        />
      </section>
      <section id="products" className={cn("pt-[18rem] -scroll-m-80 sm:pt-[22rem] !pb-[5rem]  px-4 bg-landing-first-bg relative")}>
        <div className="container mx-auto flex flex-col gap-y-3">
          <IconComponent className="mx-auto" icon={PackageSearch} />
          <h1 className="text-landing-text-primary font-[900] text-4xl sm:text-5xl text-center max-w-[90%] lg:max-w-[70%] mx-auto">
            Conoce nuestros productos electricos más populares
          </h1>
          <p className="text-center text-2xl font-semibold text-landing-text-primary">
            Mira nuestra selección de productos electricos de alta calidad y a los mejores precios del mercado
          </p>
          <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mt-10">
            {LANDINGPRODUCTS.map((product, index) => (
              <div key={index} className="flex flex-col items-center gap-y-3 border border-black p-3">
                <Image
                  style={{
                    filter: "drop-shadow(0 6px 6px rgba(0, 0, 0, 0.3)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2))",
                  }}
                  className={cn(
                    "w-full max-w-[55%] sm:max-w-[80%] h-[200px] mx-auto sm:h-[270px] lg:h-[260px]",
                    product?.classNames ? product?.classNames : ""
                  )}
                  src={product.image}
                  height={600}
                  width={600}
                  alt="Product-Image"
                />
                <ProductLandingDetail product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={cn("!pt-[6rem] !pb-[5rem] bg-landing-second-bg px-4 relative", mainSectionPadding)}>
        <div className="container mx-auto flex flex-col gap-y-6">
          <IconComponent className="mx-auto" icon={Sun} />
          <h2 className="text-landing-text-primary font-[900] text-4xl sm:text-5xl text-center mx-auto max-w-[90%] lg:max-w-[60%]">
            Servicio de calidad de una empresa con mas de 40 años de experiencia en el mercado de productos electricos
          </h2>
          <p className="text-center text-2xl font-semibold text-landing-text-primary max-w-[90%] lg:max-w-[60%] mx-auto">
            Comercialización y distribución de materiales para instalaciones eléctricas. Nos especializamos en una amplia variedad de productos,
            incluyendo cables, conductores, tuberías, canalizaciones, y equipos de protección. Todos nuestros productos cumplen con los más altos
            estándares de calidad y seguridad. Nuestro enfoque exclusivo en la venta nos permite ofrecer un servicio experto y personalizado. Ya sea
            para proyectos residenciales, comerciales o industriales, tenemos todo lo necesario para que sus instalaciones sean seguras y eficientes.
          </p>
        </div>
      </section>
      <section id="location" className={cn("!pt-[6rem] !pb-[5rem] bg-landing-first-bg relative px-4", mainSectionPadding)}>
        <div className="container mx-auto flex flex-col gap-y-6">
          {/* <LocateIcon className="text-landing-icon-text bg-landing-icon-bg h-[3.5rem] w-[3.5rem] mx-auto font-bold" /> */}
          <IconComponent className="mx-auto" icon={LocateIcon} />
          <div className="flex items-center w-full justify-center gap-x-[0.7rem] text-4xl sm:text-5xl flex-wrap">
            <h2 className="text-landing-text-primary font-[900] text-center w-fit">SUCURSAL PRINCIPAL</h2>
            <div className="flex items-center justify-center text-landing-text-primary font-[900] text-center w-fit">
              CE
              <span>
                <Zap className="text-landing-primary-main w-10 h-10 bg-transparent rounded-lg" />
              </span>
              SA
            </div>
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            {/* <p className="font-bold text-3xl text-center text-landing-primary-main">Dirección</p> */}
            <div className="text-center text-2xl font-semibold text-landing-text-primary lg:max-w-[60%] mx-auto">
              Intersección Belén-Country, avenida Cabañas, Comayagüela
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            {/* <p className="font-bold text-3xl text-center text-landing-primary-main">Dirección</p> */}
            <p className="text-center text-2xl font-semibold text-landing-text-primary lg:max-w-[60%] mx-auto">
              Abiertos de lunes a viernes de 8:00 am a 5:00 pm, sábados de 8:00 am a 12:00 pm
            </p>
          </div>

          <div>
            <iframe
              className="w-full h-[30rem]"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3869.7294991432286!2d-87.21851892490346!3d14.093138986335248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDA1JzM1LjMiTiA4N8KwMTInNTcuNCJX!5e0!3m2!1sen!2shn!4v1717810598233!5m2!1sen!2shn"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
        </div>
      </section>
      <section id="about-us" className={cn("!pt-[5rem] scroll-m-40 !pb-[5rem]  bg-landing-second-bg relative px-4", mainSectionPadding)}>
        <div className="container mx-auto grid lg:grid-cols-3 gap-5 gap-y-8 gap-x-6">
          <div className="p-8 rounded-xl grow flex flex-col gap-y-4 items-center bg-landing-first-bg shadow-xl">
            {/* <TrendingUp className="text-landing-primary-main h-8 w-8 font-bold" /> */}
            <IconComponent className="mx-auto" icon={Goal} />
            <h3 className="text-4xl sm:text-5xl text-center font-extrabold text-landing-text-primary">Misión</h3>
            <p className="text-center text-2xl font-medium text-landing-text-primary mx-auto leading-relaxed tracking-wide">
              Nuestra misión es proporcionar materiales de alta calidad que garanticen la seguridad y eficiencia de las instalaciones eléctricas. Nos
              comprometemos a ofrecer un servicio excepcional y soluciones personalizadas para nuestros clientes.
            </p>
          </div>

          <div className="p-8 rounded-xl grow flex flex-col gap-y-4 items-center bg-landing-first-bg shadow-xl">
            <IconComponent className="mx-auto" icon={TrendingUp} />
            <h3 className="text-4xl sm:text-5xl text-center font-extrabold text-landing-text-primary">Valores</h3>
            <p className="text-center text-2xl font-medium text-landing-text-primary mx-auto leading-relaxed tracking-wide">
              Nuestros valores fundamentales son <strong>Honestidad</strong>, <strong>Transparencia</strong>, <strong>Pasión</strong>,{" "}
              <strong>Calidad</strong> y <strong>Responsabilidad social</strong>. Estos valores guían nuestras acciones y decisiones diarias,
              asegurando que siempre actuemos con integridad y dedicación.
            </p>
          </div>

          <div className="p-8 rounded-xl grow flex flex-col gap-y-4 bg-landing-first-bg items-center shadow-xl">
            <IconComponent className="mx-auto" icon={TrendingUp} />
            <h3 className="text-4xl sm:text-5xl text-center font-extrabold text-landing-text-primary">Visión</h3>
            <p className="text-center text-2xl font-medium text-landing-text-primary mx-auto leading-relaxed tracking-wide">
              Ser la empresa líder en el mercado de materiales eléctricos, reconocida por nuestra excelencia en servicio y compromiso. Aspiramos a ser
              el socio preferido de nuestros clientes y contribuir al desarrollo de infraestructuras eléctricas eficientes.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className={cn("!pt-[6rem] scroll-mt-12 px-4 !pb-[5rem] bg-landing-first-bg relative", mainSectionPadding)}>
        <div className="flex gap-x-4 items-center w-full">
          <div className="flex flex-col gap-y-6 max-w-[50%]">
            <div className="flex flex-col gap-y-2 mr-auto md:px-36 text-left">
              {/* <Mail className="text-landing-primary-main h-[3.5rem] w-[3.5rem] font-bold" /> */}
              <IconComponent className="mx-auto md:ml-0 md:mr-0" icon={Mail} />
              <h2 className="text-landing-text-primary font-[900] text-4xl sm:text-5xl w-full text-center md:text-left">Contactanos</h2>
              <p className="text-2xl font-semibold text-landing-text-primary text-center md:text-left">
                Si tienes alguna pregunta o deseas cotizar nuestros productos, no dudes en contactarnos. Estamos aquí para ayudarte
              </p>
            </div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>
    </main>
  );
}
