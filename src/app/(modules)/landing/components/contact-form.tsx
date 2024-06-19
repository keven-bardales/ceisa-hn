"use client";

import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import LandingButton from "./landing-button";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  return (
    <div className="flex flex-col w-full gap-y-8 md:px-36 py-4">
      <FloatLabel>
        <InputText
          value={formState.name}
          onChange={(e) => {
            setFormState({ ...formState, name: e.target.value });
          }}
          className="bg-landing-second-bg border-gray-300 text-landing-text-primary md:max-w-[400px] w-full sm:min-w-[400px] h-[55px]"
          autoComplete="off"
          id="name"
        />
        <label className="text-landing-text-primary font-medium text-base" htmlFor="name">
          Nombre
        </label>
      </FloatLabel>
      <FloatLabel>
        <InputText
          value={formState.email}
          onChange={(e) => {
            setFormState({ ...formState, email: e.target.value });
          }}
          className="bg-landing-second-bg border-gray-300 text-landing-text-primary md:max-w-[400px] w-full sm:min-w-[400px] h-[55px]"
          autoComplete="off"
          id="email"
        />
        <label className="text-landing-text-primary font-medium text-base" htmlFor="email">
          Correo
        </label>
      </FloatLabel>
      <FloatLabel>
        <InputText
          value={formState.subject}
          onChange={(e) => {
            setFormState({ ...formState, subject: e.target.value });
          }}
          className="bg-landing-second-bg border-gray-300 text-landing-text-primary md:max-w-[400px] w-full sm:min-w-[400px] h-[55px]"
          autoComplete="off"
          id="subject"
        />
        <label className="text-landing-text-primary font-medium text-base" htmlFor="subject">
          Titulo
        </label>
      </FloatLabel>
      <FloatLabel>
        <InputTextarea
          value={formState.message}
          onChange={(e) => {
            setFormState({ ...formState, message: e.target.value });
          }}
          className="bg-landing-second-bg border-gray-300 text-landing-text-primary md:max-w-[400px] w-full sm:min-w-[400px] h-[85px]"
          autoComplete="off"
          id="message"
        />
        <label className="text-landing-text-primary font-medium text-base" htmlFor="message">
          Mensaje
        </label>
      </FloatLabel>

      <div className="max-w-[400px] w-full flex justify-end">
        <LandingButton className="px-5 py-3 mx-auto md:ml-0 mr-0 min-w-[150px]">Enviar</LandingButton>
      </div>
    </div>
  );
}
