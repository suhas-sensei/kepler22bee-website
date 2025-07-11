export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center font-['Geist_Mono']">
        <a href="/" className="text-white text-lg font-bold">
          Kepler22bee
        </a>
        <ul className="flex space-x-20">
          <li>
            <a href="/" className="text-gray-300 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="/whitelist" className="text-gray-300 hover:text-white">
              Whitepaper
            </a>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <a href="/login" className="text-gray-300 hover:text-white">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
