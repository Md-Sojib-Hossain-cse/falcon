import type { ReactNode } from "react";

type TLogoNav = {
  children: ReactNode;
  title: string;
};

const LogoNavItem = ({ children, title }: TLogoNav) => {
  return (
    <li title={title} className="flex gap-2 items-center">
      {children}
      <p className="text-[#475569] text-[12px] font-medium hover:text-[#00B795] hidden xl:flex">
        {title}
      </p>
    </li>
  );
};

export default LogoNavItem;
