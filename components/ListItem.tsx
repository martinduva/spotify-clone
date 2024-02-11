"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

type ListItemProps = {
  imageSrc: string;
  name: string;
  href: string;
};

const ListItem: React.FC<ListItemProps> = ({ imageSrc, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // TODO: Add auth before push
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-x-4 overflow-hidden rounded-md bg-neutral-100/10 pr-4 transition hover:bg-neutral-100/20"
    >
      <div className="relative min-h-[64px] min-w-[64px] ">
        <Image
          src={imageSrc}
          alt="white heart on purple gradient background"
          fill
          draggable={false}
          className="object-cover"
        />
      </div>
      <p className="truncate py-5 font-medium">{name}</p>
      <div className="absolute right-5 flex items-center justify-center rounded-full bg-green-500 p-3.5 opacity-0 drop-shadow-lg transition hover:scale-110 group-hover:opacity-100">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
