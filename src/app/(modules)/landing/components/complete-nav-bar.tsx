"use client";
import blueLogo from "@/root/public/landing/logos/logo-oficial-azul.png";
import logowhite from "@/root/public/landing/logos/logo_white.png";
import yellowLogo from "@/root/public/landing/logos/logo-oficial-amarillo.png";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import fullYellowLogo from "@/root/public/landing/logos/logo-oficial-amarillo-blanco.png";
import Image from "next/image";
import { Menu } from "lucide-react";
import NavBarItems from "./navbar";
import IconComponent from "./icon-component";

import { Sidebar as PrimeSidebar } from "primereact/sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { handleScroll } from "../utils/handle-scroll";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-landing-bg-nav w-full h-full">
      <section className="flex gap-x-4 px-4 justify-between items-center container mx-auto py-2">
        {/* <Image className="w-24" src={blueLogo} height={100} width={100} alt="Ceisa-Logo" /> */}
        {/* <Image className="w-24" src={yellowLogo} height={100} width={100} alt="Ceisa-Logo" /> */}
        <Link href={"/landing/#home"}>
          <Image className="w-20 cursor-pointer" src={fullYellowLogo} height={100} width={100} alt="Ceisa-Logo" />
        </Link>
        {/* <Image className="w-24" src={logowhite} height={100} width={100} alt="Ceisa-Logo" /> */}
        {/* <div className="flex flex-col justify-center">
            <Lightbulb className="text-landing-secondary-main rounded-lg mx-auto h-12 w-12" />
            <div className="flex items-center text-lg font-bold text-landing-secondary-main">
              <span>CE</span>
              <Zap className="text-landing-primary-main w-8 h-8 bg-transparent rounded-lg" />
              <span>SA</span>
            </div>
          </div> */}

        <NavBarItems className="hidden gap-x-2 items-center justify-evenly md:flex"></NavBarItems>
        <IconComponent
          onClick={(e: any) => {
            setIsOpen(true);
          }}
          className="md:hidden h-12 w-12"
          icon={Menu}
        />
        <PrimeSidebar
          autoFocus={false}
          className={cn({
            "transition-all duration-300": true,
            "w-[18rem]": isOpen,
            "bg-landing-bg-nav": true,
          })}
          modal={true}
          appendTo={"self"}
          onHide={() => {
            setIsOpen(false);
          }}
          visible={isOpen}
          content={({ closeIconRef, hide }) => (
            <>
              <NavBarItems
                onItemClicked={() => {
                  setIsOpen(false);
                }}
                className="flex flex-col gap-x-2 justify-evenly md:hidden py-10 px-5"
              ></NavBarItems>
            </>
          )}
        ></PrimeSidebar>
      </section>
    </nav>
  );
}
