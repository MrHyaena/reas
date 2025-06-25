import Image from "next/image";
import Link from "next/link";

//Header component used for desktop user, shows when screen over 768px horizontally
export function DesktopHeader() {
  const links = [
    {
      href: "https://www.reas.cz/prodej/nemovitosti",
      label: "Nabídka nemovitostí",
    },
    {
      href: "https://www.reas.cz/realitni-makleri",
      label: "Přehled realitních makléřů",
    },
    { href: "https://www.reas.cz/kontakt", label: "Kontakt" },
  ];

  return (
    <div className="w-wrapper md:flex justify-between items-center hidden">
      <Link
        href="/"
        className="flex items-center gap-2 font-semibold font-oswald"
      >
        <Image
          src={"/faviconV2.png"}
          width={30}
          height={30}
          alt="logo"
          className="max-w-[30px]"
        />
        <p className="text-3xl lowercase mt-[-5px] text-textLight">Reas</p>
      </Link>
      <ul className="flex gap-10 items-center *:not-last:hover:text-primary *:not-last:transition-all *:not-last:ease-in-out font-oswald text-textLight">
        {links.map((link) => {
          return (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          );
        })}

        <li>
          <a href="https://www.reas.cz/prihlasit">
            <button className="buttonBasics font-medium p-2 px-4 hover:scale-105 ">
              uživatelský účet
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}
