"use client";

import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { useQuotedProductsStore } from "../stores/quoted-products.store";
import { ShoppingCart } from "lucide-react";
import IconComponent from "./icon-component";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import RemoveProduct from "./remove-quoted-produc";
import { InputNumber } from "primereact/inputnumber";
import AddRemoveProduct from "./add-remove-product";
import Link from "next/link";
import LandingButton from "./landing-button";
import { useRouter } from "next/navigation";

interface CartModalProps {
  iconClassNames?: string;
}

export default function CartModal({ iconClassNames }: CartModalProps) {
  const [visible, setVisible] = useState(false);
  const quotedProducts = useQuotedProductsStore((state) => state.quotedProducts);
  const addDesiredQuantity = useQuotedProductsStore((state) => state.addDesiredQuantity);
  const router = useRouter();

  return (
    <>
      <IconComponent
        onClick={() => {
          setVisible(true);
        }}
        className={cn("", iconClassNames && iconClassNames)}
        icon={ShoppingCart}
      />
      <Dialog
        footer={
          <>
            <div className="flex justify-end bg-transparent">
              <LandingButton
                className="p-3 min-w-[150px]"
                onClick={() => {
                  setVisible(false);
                  router.push("/landing/#contact");
                }}
              >
                Cotizar
              </LandingButton>
            </div>
          </>
        }
        header="Cotización"
        modal
        pt={{
          root: {
            style: {
              width: "90%",
              maxWidth: "550px",
              minHeight: "300px",
            },
            className: "!bg-black border-none",
          },
          content: {
            className: "!bg-white",
          },
          header: {
            className: "!bg-white text-black",
          },
          closeButton: {
            className: "!bg-white text-black hover:bg-gray-200 hover:text-black",
          },
          footer: {
            className: "!bg-white text-black",
          },
        }}
        draggable={false}
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <div className="flex flex-col p-2 gap-y-4 w-full">
          {quotedProducts.map((product) => {
            return (
              <div key={product.product.id} className="flex gap-x-4 flex-wrap lg:flex-nowrap items-center border p-2 rounded-lg">
                <Image src={product.product.image} alt={product.product.name} className="w-20" />
                <div className="flex flex-col gap-y-1 shrink-0 md:max-w-[180px] text-landing-text-primary font-bold">
                  <div className="text-xl shrink-0">{product.product.name}</div>
                </div>
                <div className="flex gap-x-4 items-center grow w-full justify-end">
                  <RemoveProduct product={product.product} />
                  <InputNumber
                    inputStyle={{ width: "100px" }}
                    value={product?.quantity}
                    onValueChange={(e) => {
                      addDesiredQuantity(product.product, Number(e.value));
                    }}
                  />
                  <AddRemoveProduct
                    addAndRestContainerClassName="bg-landing-primary-main"
                    addAndRestClassNames="text-black"
                    containerClassName="grow-0"
                    hideButton
                    product={product.product}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Dialog>
    </>
  );
}
