import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
            Movie Database
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/movies"className="text-white">
                Movies
            </Link>
          </li>
          <li>
            <Link href="/tvshows"className="text-white">
                TV shows
            </Link>
          </li>
          <li>
            <Link href="/watchlist"className="text-white">
                Watchlist
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
