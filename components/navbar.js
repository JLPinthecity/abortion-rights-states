import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
