"use client";

import { Facebook, Instagram, Mail } from "lucide-react";
import IconComponent from "./icon-component";
import WhatsappIcon from "./whatsapp-icon";

export default function IconsContact() {
  return (
    <div className="flex mx-auto w-fit gap-x-6 p-4 rounded-lg">
      <IconComponent
        onClick={() => {
          window.open("https://www.instagram.com/ceisahn?igsh=czA0NWN5ODh5NHUw", "_blank");
        }}
        className="mx-auto"
        icon={Instagram}
      />
      <IconComponent
        onClick={() => {
          window.open("mailto:corporaciónceisahn@gmail.com", "_blank");
        }}
        className="mx-auto"
        icon={Mail}
      />
      <IconComponent
        onClick={() => {
          window.open("https://www.facebook.com/profile.php?id=61560552064853&mibextid=ZbWKwL", "_blank");
        }}
        className="mx-auto"
        icon={Facebook}
      />
      <WhatsappIcon></WhatsappIcon>
    </div>
  );
}
