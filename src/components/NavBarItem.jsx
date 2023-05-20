"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function NavBarItem({ title, param }) {
  const SearchParams = useSearchParams();
  const genre = SearchParams.get("genre");
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre &&
          genre === param &&
          "decoration-4 decoration-amber-500 rounded-lg underline underline-offset-8"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
