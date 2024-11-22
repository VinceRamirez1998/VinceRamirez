
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-200">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-200">About</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-200">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-200">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
