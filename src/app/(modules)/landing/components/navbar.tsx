import { NavBarItem } from "./nav-bar-item";

interface NavBarProps {
  className: string;
  onItemClicked?: () => void;
}

const landingNavBarItems = [
  {
    content: "INICIO",
    href: "/landing#home",
  },
  {
    content: "PRODUCTOS",
    href: "/landing#products",
  },
  {
    content: "UBICACIÓN",
    href: "/landing#location",
  },
  {
    content: "NOSOTROS",
    href: "/landing#about-us",
  },
  {
    content: "CONTACTO",
    href: "/landing#contact",
  },
];

export default function NavBarItems({ className, onItemClicked }: NavBarProps) {
  return (
    <div className={className}>
      {landingNavBarItems.map((item, index) => (
        <NavBarItem
          onClick={() => {
            if (onItemClicked) {
              onItemClicked();
            }
          }}
          key={index}
          href={`${item.href}`}
        >
          {item.content}
        </NavBarItem>
      ))}
    </div>
  );
}
