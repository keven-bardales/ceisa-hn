import { ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "../../(shared)/providers/toast-provider/toast-provider";
import { useQuotedProductsStore } from "../stores/quoted-products.store";
import IconComponent from "./icon-component";
import LandingButton from "./landing-button";
import { LANDINGPRODUCTS } from "../constants/products";
import { cn } from "@/lib/utils/cn";

export interface AddRemoveProductProps {
  product: (typeof LANDINGPRODUCTS)[0];
  hideButton?: boolean;
  containerClassName?: string;
  addAndRestClassNames?: string;
  addAndRestContainerClassName?: string;
}

export default function AddRemoveProduct({
  product,
  hideButton = false,
  containerClassName,
  addAndRestClassNames,
  addAndRestContainerClassName,
}: AddRemoveProductProps) {
  const decreaseQuotedProduct = useQuotedProductsStore((state) => state.decreaseQuotedProduct);
  const { showToast } = useToast();
  const addQuotedProduct = useQuotedProductsStore((state) => state.addQuotedProduct);
  const quotedProducts = useQuotedProductsStore((state) => state.quotedProducts);
  const productExists = quotedProducts.find((p) => p.product.id === product.id);

  const numberFormat = new Intl.NumberFormat("es-HN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  if (!productExists && !hideButton) {
    return (
      <LandingButton
        onClick={() => {
          addQuotedProduct(product);
          showToast({
            pt: {
              root: {
                style: {
                  width: "100%",
                  maxWidth: "100%",
                },
                className: "!bg-black border-none",
              },
              content: {
                className: "!bg-green-200 text-green-800",
              },
              closeButton: {
                className: "!bg-green-200 text-green-800 hover:bg-green-300 hover:text-green-800",
              },
            },
            severity: "success",
            summary: "Producto agregado",
            detail: "El producto se ha agregado a la cotización",
          });
        }}
        className="p-3 grow"
      >
        Agregar
      </LandingButton>
    );
  }

  return (
    <div className={cn("flex grow", containerClassName && containerClassName)}>
      <div
        className={cn(
          "flex flex-col shrink-0 bg-black p-2 rounded-md rounded-r-none gap-y-1",
          addAndRestContainerClassName && addAndRestContainerClassName
        )}
      >
        <IconComponent
          onClick={() => {
            addQuotedProduct(product);
          }}
          className={cn("mx-auto cursor-pointer bg-transparent text-white h-4 w-4 rounded-none p-0", addAndRestClassNames && addAndRestClassNames)}
          icon={ArrowUp}
        />
        <hr />
        <IconComponent
          onClick={() => {
            decreaseQuotedProduct(product);
          }}
          className={cn("mx-auto cursor-pointer bg-transparent text-white h-4 w-4 rounded-none p-0", addAndRestClassNames && addAndRestClassNames)}
          icon={ArrowDown}
        />
      </div>
      {!hideButton && (
        <LandingButton className="border-l-0 rounded-l-none p-3 grow">Agregado {numberFormat.format(productExists?.quantity as any)} </LandingButton>
      )}
    </div>
  );
}
