"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    //handle logout
  };

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-primary p-6`)}>
      <div className="w-full mb-4 flex items-center justify-center">
        <div className="hidden md:flex gap-x-2 items-center"></div>
      </div>
    </div>
  );
};

export default Header;
