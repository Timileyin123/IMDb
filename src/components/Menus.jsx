import Link from "next/link";

export const Menus = ({ title, address, Icon }) => {
  return (
    <>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden my-3" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </>
  );
};
