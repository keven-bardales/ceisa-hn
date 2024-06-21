"use client";

import { useRouter } from "next/navigation";
import LandingButton from "./landing-button";

export default function QuoteNowComponent() {
  const router = useRouter();
  return (
    <LandingButton
      onClick={() => {
        router.push("/landing#products");
      }}
    >
      COTIZA YA
    </LandingButton>
  );
}
