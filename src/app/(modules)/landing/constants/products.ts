import cablethin from "@/root/public/landing/product-images/cable_thin.png";
import breakers from "@/root/public/landing/product-images/breaker.png";
import cordonspt from "@/root/public/landing/product-images/cordon_spt.png";
import poliducto from "@/root/public/landing/product-images/poliducto.png";
import panels from "@/root/public/landing/product-images/panel.png";
import cabletsj from "@/root/public/landing/product-images/cable_tsj.png";
import coaxial from "@/root/public/landing/product-images/cable_coaxial.png";
import tubesPVC from "@/root/public/landing/product-images/tuberia_pvc.png";
import cableUtp from "@/root/public/landing/product-images/cable_utp.png";
import rielStrut from "@/root/public/landing/product-images/riel_strut.png";
import cantex from "@/root/public/landing/product-images/caja_cantex.png";
import tubesPVCCurve from "@/root/public/landing/product-images/curva_pvc_electrico.png";

export const LANDINGPRODUCTS = [
  {
    id: 1,
    name: "Cable THHN",
    image: cablethin,
    isActive: true,
    classNames: "",
    description: "Cable THHN, utilizado para instalaciones eléctricas residenciales y comerciales. Ofrece alta resistencia al calor.",
    specs: [
      { title: "Tensión Nominal", value: "600V" },
      { title: "Material del Conductor", value: "Cobre" },
      { title: "Aislamiento", value: "Termoplástico resistente al calor con revestimiento de nailon" },
      { title: "Temperatura Nominal", value: "90°C" },
      { title: "Uso", value: "Cableado residencial y comercial" },
    ],
  },
  {
    id: 2,
    name: "Breakers",
    image: breakers,
    isActive: true,
    description: "Interruptores automáticos que protegen los circuitos eléctricos de sobrecargas y cortocircuitos.",
    specs: [
      { title: "Tipo", value: "Interruptor Automático" },
      { title: "Corriente Nominal", value: "15-100A" },
      { title: "Tensión Nominal", value: "120/240V" },
      { title: "Capacidad de Interrupción", value: "10kA" },
      { title: "Polos", value: "1, 2, 3" },
      { title: "Uso", value: "Protección contra sobrecorrientes" },
    ],
  },
  {
    id: 3,
    name: "Cordón SPT",
    image: cordonspt,
    isActive: true,
    description: "Cordón SPT utilizado para aparatos y lámparas de uso ligero. Flexible y fácil de manejar.",
    specs: [
      { title: "Tensión Nominal", value: "300V" },
      { title: "Material del Conductor", value: "Cobre" },
      { title: "Aislamiento", value: "PVC" },
      { title: "Temperatura Nominal", value: "60°C" },
      { title: "Uso", value: "Aparatos y lámparas de uso ligero" },
    ],
  },
  {
    id: 4,
    name: "Poliducto",
    image: poliducto,
    isActive: true,
    description: "Poliducto flexible de polietileno para protección y manejo de cables.",
    specs: [
      { title: "Material", value: "Polietileno" },
      { title: "Diámetro", value: "1/2 a 4 pulgadas" },
      { title: "Longitud", value: "6 metros" },
      { title: "Uso", value: "Protección y manejo de cables" },
      { title: "Flexibilidad", value: "Alta" },
    ],
  },
  {
    id: 5,
    name: "Paneles",
    image: panels,
    isActive: true,
    description: "Paneles eléctricos utilizados para la distribución de energía eléctrica en instalaciones residenciales y comerciales.",
    specs: [
      { title: "Tipo", value: "Panel Eléctrico" },
      { title: "Tensión Nominal", value: "120/240V" },
      { title: "Corriente Nominal", value: "100-400A" },
      { title: "Material", value: "Acero" },
      { title: "Uso", value: "Distribución de energía eléctrica" },
      { title: "Capacidad de Interruptores", value: "12-42 circuitos" },
    ],
  },
  {
    id: 6,
    name: "Cable TSJ",
    image: cabletsj,
    isActive: true,
    description: "Cable TSJ para herramientas portátiles y equipos eléctricos. Flexible y resistente.",
    specs: [
      { title: "Tensión Nominal", value: "300V" },
      { title: "Material del Conductor", value: "Cobre" },
      { title: "Aislamiento", value: "Termoplástico" },
      { title: "Temperatura Nominal", value: "60°C" },
      { title: "Uso", value: "Herramientas portátiles y equipos" },
    ],
  },
  {
    id: 7,
    name: "Cable Coaxial",
    image: coaxial,
    isActive: true,
    description: "Cable coaxial utilizado para la transmisión de señales de televisión e internet.",
    specs: [
      { title: "Impedancia", value: "75 ohmios" },
      { title: "Material del Conductor", value: "Cobre" },
      { title: "Blindaje", value: "Trenzado de aluminio" },
      { title: "Uso", value: "Transmisión de señales de televisión e internet" },
      { title: "Rango de Frecuencia", value: "Hasta 1 GHz" },
    ],
  },
  {
    id: 8,
    name: "Tubería PVC Electrica",
    image: tubesPVC,
    isActive: true,
    description: "Tubería PVC para instalaciones eléctricas, proporcionando protección y aislamiento a los cables.",
    specs: [
      { title: "Material", value: "PVC" },
      { title: "Diámetro", value: "1/2 a 4 pulgadas" },
      { title: "Longitud", value: "10 pies" },
      { title: "Uso", value: "Conducto para cableado eléctrico" },
      { title: "Cumplimiento", value: "Listado UL" },
    ],
  },
  {
    id: 9,
    name: "Cable UTP",
    image: cableUtp,
    isActive: true,
    description: "Cable UTP utilizado en redes de datos y voz. Disponible en categorías Cat 5e, Cat 6 y Cat 6a.",
    specs: [
      { title: "Categoría", value: "Cat 5e/6/6a" },
      { title: "Material del Conductor", value: "Cobre" },
      { title: "Pares", value: "4 pares" },
      { title: "Uso", value: "Redes de datos y voz" },
      { title: "Rango de Frecuencia", value: "Hasta 500 MHz" },
    ],
  },
  {
    id: 10,
    name: "Riel Strut",
    image: rielStrut,
    isActive: true,
    description: "Riel Strut de acero galvanizado para soportar sistemas eléctricos y mecánicos.",
    specs: [
      { title: "Material", value: "Acero" },
      { title: "Acabado", value: "Galvanizado" },
      { title: "Longitud", value: "10 pies" },
      { title: "Uso", value: "Soporte para sistemas eléctricos y mecánicos" },
      { title: "Capacidad de Carga", value: "Varía" },
    ],
  },
  {
    id: 11,
    name: "Cantex",
    image: cantex,
    isActive: true,
    description: "Productos Cantex para sistemas de canalización eléctrica, cumpliendo con los estándares UL.",
    specs: [
      { title: "Material", value: "PVC" },
      { title: "Tipo", value: "Conductos y accesorios" },
      { title: "Cumplimiento", value: "Listado UL" },
      { title: "Uso", value: "Sistemas de canalización eléctrica" },
      { title: "Temperatura Nominal", value: "90°C" },
    ],
  },
  {
    id: 12,
    name: "Curva PVC Electrica",
    image: tubesPVCCurve,
    isActive: true,
    description: "Curvas de PVC para cambios de dirección en sistemas de tuberías eléctricas.",
    specs: [
      { title: "Material", value: "PVC" },
      { title: "Diámetro", value: "1/2 a 4 pulgadas" },
      { title: "Ángulo de Curvatura", value: "90 grados" },
      { title: "Uso", value: "Cambios de dirección en conductos" },
      { title: "Cumplimiento", value: "Listado UL" },
    ],
  },
];
