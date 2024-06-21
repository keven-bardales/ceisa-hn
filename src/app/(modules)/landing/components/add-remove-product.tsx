import { ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "../../(shared)/providers/toast-provider/toast-provider";
import { useQuotedProductsStore } from "../stores/quoted-products.store";
import IconComponent from "./icon-component";
import LandingButton from "./landing-button";
import { LANDINGPRODUCTS } from "../constants/products";

export interface AddRemoveProductProps {
  product: (typeof LANDINGPRODUCTS)[0];
}

export default function AddRemoveProduct({ product }: AddRemoveProductProps) {
  const decreaseQuotedProduct = useQuotedProductsStore((state) => state.decreaseQuotedProduct);
  const { showToast } = useToast();
  const addQuotedProduct = useQuotedProductsStore((state) => state.addQuotedProduct);
  const quotedProducts = useQuotedProductsStore((state) => state.quotedProducts);
  const productExists = quotedProducts.find((p) => p.product.id === product.id);

  const numberFormat = new Intl.NumberFormat("es-HN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  if (!productExists) {
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
    <div className="flex grow">
      <div className="flex flex-col shrink-0 bg-black p-2 rounded-md rounded-r-none gap-y-1">
        <IconComponent
          onClick={() => {
            addQuotedProduct(product);
          }}
          className="mx-auto cursor-pointer bg-black text-white h-4 w-4 rounded-none p-0"
          icon={ArrowUp}
        />
        <hr />
        <IconComponent
          onClick={() => {
            decreaseQuotedProduct(product);
          }}
          className="mx-auto cursor-pointer bg-black text-white h-[0.75rem] w-[0.75rem] rounded-none p-0"
          icon={ArrowDown}
        />
      </div>
      <LandingButton className="border-l-0 rounded-l-none p-3 grow">Agregado {numberFormat.format(productExists?.quantity)} </LandingButton>
    </div>
  );
}
