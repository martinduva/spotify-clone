"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

import cn from "@/lib/cn";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  const router = useRouter();

  const _handleLogout = () => {
    // TODO: Handle logout
  };

  return (
    <div className={cn("h-fit bg-gradient-to-b from-emerald-800 p-6", className)}>
      <div className="mb-6 flex w-full items-center justify-between">
        <div className="hidden items-center gap-x-2 md:flex">
          <button className="flex items-center justify-center rounded-full bg-zinc-950" onClick={() => router.back()}>
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            className="flex items-center justify-center rounded-full bg-zinc-950"
            onClick={() => router.forward()}
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
