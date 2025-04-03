import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "../nav/nav-link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={logoIcon} alt="icon" />
        Next Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href={"/meals"}>Meals</NavLink>
          </li>
          <li>
            <NavLink href={"/community"}>Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
