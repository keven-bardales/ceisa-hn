"use client";
import { LANDINGPRODUCTS } from "@/app/(modules)/landing/constants/products";
import IconComponent from "./icon-component";
import LandingButton from "./landing-button";
import { ArrowDown, ArrowUp, Eye, Trash, Trash2Icon } from "lucide-react";
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";
import { useQuotedProductsStore } from "../stores/quoted-products.store";
import { useToast } from "../../(shared)/providers/toast-provider/toast-provider";
import AddRemoveProduct from "./add-remove-product";
import RemoveProduct from "./remove-quoted-produc";
import { InputNumber } from "primereact/inputnumber";

export interface ProductLandingDetailProps {
  product: (typeof LANDINGPRODUCTS)[0];
}
export default function ProductLandingDetail({ product }: ProductLandingDetailProps) {
  const [visible, setVisible] = useState(false);
  const quotedProducts = useQuotedProductsStore((state) => state.quotedProducts);
  const addQuotedProduct = useQuotedProductsStore((state) => state.addQuotedProduct);
  const addDesiredQuantity = useQuotedProductsStore((state) => state.addDesiredQuantity);
  const { showToast } = useToast();

  const productExists = quotedProducts.find((p) => p.product.id === product.id);

  return (
    <>
      <Dialog
        modal
        pt={{
          root: {
            style: {
              width: "90%",
              maxWidth: "1000px",
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
        }}
        draggable={false}
        visible={visible}
        onHide={() => {
          setVisible(false);
        }}
      >
        <div className="grid lg:grid-cols-2">
          <div className="p-4 bg-landing-second-bg rounded-lg flex items-center">
            <Image
              style={{
                filter: "drop-shadow(0 6px 6px rgba(0, 0, 0, 0.3)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.2))",
              }}
              className={cn("w-full", product?.classNames ? product?.classNames : "")}
              src={product.image}
              height={600}
              width={600}
              alt="Product-Image"
            ></Image>
          </div>
          <div className="flex flex-col gap-y-4 p-4">
            <h1 className="text-5xl text-landing-text-primary font-bold">{product.name}</h1>
            <p className="text-landing-text-gray text-lg">{product.description}</p>
            <div className="flex flex-col w-full">
              {product.specs.map((spec, index) => (
                <>
                  <div key={index} className="grid md:grid-cols-2">
                    <div className="text-landing-text-primary font-bold text-lg py-4">{spec.title}</div>
                    <div className="text-landing-text-gray text-lg py-4">{spec.value}</div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex gap-x-4 items-center w-full">
              <RemoveProduct product={product} />
              <InputNumber
                inputStyle={{ width: "100px" }}
                value={productExists?.quantity}
                onValueChange={(e) => {
                  addDesiredQuantity(product, Number(e.value));
                }}
              />
              <AddRemoveProduct product={product} />
            </div>
          </div>
        </div>
      </Dialog>
      <p className="text-landing-text-primary font-bold text-3xl">{product.name}</p>
      <div className="w-full flex gap-x-4 items-center flex-wrap">
        <div>
          <IconComponent
            onClick={() => {
              setVisible(true);
            }}
            className="mx-auto cursor-pointer bg-black text-white h-12 w-12"
            icon={Eye}
          />
        </div>
        <RemoveProduct product={product} />
        <AddRemoveProduct product={product} />
      </div>
    </>
  );
}
