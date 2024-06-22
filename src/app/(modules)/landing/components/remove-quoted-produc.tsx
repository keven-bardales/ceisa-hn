import { ArrowUp, ArrowDown, Trash2Icon } from "lucide-react";
import { useToast } from "../../(shared)/providers/toast-provider/toast-provider";
import { useQuotedProductsStore } from "../stores/quoted-products.store";
import IconComponent from "./icon-component";
import LandingButton from "./landing-button";
import { LANDINGPRODUCTS } from "../constants/products";
import { cn } from "@/lib/utils/cn";

export interface RemoveProductProps {
  product: (typeof LANDINGPRODUCTS)[0];
}

export default function RemoveProduct({ product }: RemoveProductProps) {
  const { showToast } = useToast();
  const deleteQuotedProduct = useQuotedProductsStore((state) => state.deleteQuotedProduct);
  const quotedProducts = useQuotedProductsStore((state) => state.quotedProducts);
  const productExists = quotedProducts.find((p) => p.product.id === product.id);

  return (
    <IconComponent
      onClick={() => {
        if (productExists) {
          deleteQuotedProduct(product);
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
                className: "!bg-red-200 text-red-800",
              },
              closeButton: {
                className: "!bg-red-200 text-red-800 hover:bg-red-300 hover:text-red-800",
              },
            },
            severity: "error",
            summary: "Producto eliminado",
            detail: "El producto se ha eliminado de la cotización",
          });
        }
      }}
      className={cn("cursor-pointer bg-black text-white h-12 w-14", !productExists && "opacity-50 cursor-not-allowed")}
      icon={Trash2Icon}
    />
  );
}
