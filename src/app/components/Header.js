import Link from "next/link";
import Image from 'next/image';
import logo from "../../../public/logo.png";

const Header = () => {
  return (
    <div className="flex bg-black w-full h-24 text-white">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center">
          <Link href="/">
              <Image src={logo} alt="Logo" width={100} height={50} />
          </Link>
        </div>
        <ul className="flex space-x-32">
          <li>
            <Link href="/"className="hover:text-gray-300 text-2xl">Home
            </Link>
          </li>
          <li>
            <Link href="/about"className="hover:text-gray-300 text-2xl">About
            </Link>
          </li>
          <li>
            <Link href="/movie" className="hover:text-gray-300 text-2xl">Movie
            </Link>
          </li>
          <li>
            <Link href="/contact"className="hover:text-gray-300 text-2xl">Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
