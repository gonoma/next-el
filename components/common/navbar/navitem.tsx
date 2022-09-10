import Link from "next/link";

type NavProps = {
    text: string;
    href: string;
    active: boolean;
};

const NavItem = ({ text, href, active }: NavProps) => {
  return (
    <Link href={href}>
      <a
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;