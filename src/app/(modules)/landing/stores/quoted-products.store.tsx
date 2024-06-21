"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LANDINGPRODUCTS } from "../constants/products";

type ProductType = (typeof LANDINGPRODUCTS)[0];

export interface QUOTEDPRODUCTS {
  product: ProductType;
  quantity: number;
}

type QuotedProductsStore = {
  quotedProducts: QUOTEDPRODUCTS[];
  setQuotedProducts: (products: ProductType[]) => void;
  addQuotedProduct: (product: ProductType) => void;
  deleteQuotedProduct: (product: ProductType) => void;
  decreaseQuotedProduct: (product: ProductType) => void;
  addDesiredQuantity: (product: ProductType, quantity: number) => void;
};

export const useQuotedProductsStore = create<QuotedProductsStore>()(
  persist(
    (set, get) => ({
      quotedProducts: [],
      setQuotedProducts: (products) =>
        set({
          quotedProducts: products.map((product) => ({
            product,
            quantity: 1,
          })),
        }),
      addQuotedProduct: (product) =>
        set((state) => {
          const productExists = state.quotedProducts.find((p) => p.product.id === product.id);

          if (productExists) {
            return {
              quotedProducts: state.quotedProducts.map((p) => {
                if (p.product.id === product.id) {
                  return { ...p, quantity: p.quantity + 1 };
                }
                return p;
              }),
            };
          }
          return {
            quotedProducts: [
              ...state.quotedProducts,
              {
                product,
                quantity: 1,
              },
            ],
          };
        }),
      deleteQuotedProduct: (product) => set((state) => ({ quotedProducts: state.quotedProducts.filter((p) => p.product.id !== product.id) })),
      decreaseQuotedProduct: (product) =>
        set((state) => {
          const actualQuantity = state.quotedProducts.find((p) => p.product.id === product.id)?.quantity;

          if (actualQuantity === 1) {
            return {
              quotedProducts: state.quotedProducts.filter((p) => p.product.id !== product.id),
            };
          }

          return {
            quotedProducts: state.quotedProducts.map((p) => {
              if (p.product.id === product.id) {
                return { ...p, quantity: p.quantity - 1 };
              }
              return p;
            }),
          };
        }),
      addDesiredQuantity: (product, quantity) =>
        set((state) => {
          const productExists = state.quotedProducts.find((p) => p.product.id === product.id);

          if (productExists) {
            return {
              quotedProducts: state.quotedProducts.map((p) => {
                if (p.product.id === product.id) {
                  return { ...p, quantity: quantity };
                }
                return p;
              }),
            };
          }
          return {
            quotedProducts: [
              ...state.quotedProducts,
              {
                product,
                quantity,
              },
            ],
          };
        }),
    }),
    {
      name: "quoted-products-store",
      //   partialize: (state) =>
      //     Object.fromEntries(Object.entries(state).filter(([key]) => !["isClosingSession"].includes(key) || ["isLogginRememberme"].includes(key))),
    }
  )
);
