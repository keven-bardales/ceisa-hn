import { cn } from "@/lib/utils/cn";
import { LucideProps, Sun } from "lucide-react";
import react from "react";

interface IconComponentProps extends LucideProps {
  icon: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
}

export default function IconComponent(props: IconComponentProps) {
  const Icon = props.icon;

  const { className, icon, ...restProps } = props || {};

  return (
    <Icon
      className={cn("bg-landing-icon-bg text-landing-icon-text p-3 rounded-lg h-[4rem] w-[4rem]", className || "")}
      strokeWidth={3}
      {...restProps}
    />
  );
}
