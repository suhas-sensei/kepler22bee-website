export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black z-50">
      <div className="flex items-center font-['Geist_Mono'] h-20">
        {/* Logo */}
        <div className="flex-1 px-8">
          <a href="/" className="text-white text-2xl font-bold">
            Kepler22bee
          </a>
        </div>

        {/* Centered Navigation Items with Slanted Separators */}
        <div className="flex justify-center h-full">
          {/* Home */}
          <div className="relative h-full flex items-center group">
            <div
              className="h-full flex items-center px-20 relative transition-all duration-300 group-hover:bg-white"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)",
              }}
            >
              <a
                href="/"
                className="text-gray-300 text-1xl group-hover:text-black relative z-10"
              >
                Home
              </a>
            </div>
          </div>

          {/* About */}
          <div className="relative h-full flex items-center group -ml-5">
            <div
              className="h-full flex items-center px-20 relative transition-all duration-300 group-hover:bg-white"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)",
              }}
            >
              <a
                href="/about"
                className="text-gray-300 text-1xl group-hover:text-black relative z-10"
              >
                About
              </a>
            </div>
          </div>

          {/* Whitepaper */}
          <div className="relative h-full flex items-center group -ml-5">
            <div
              className="h-full flex items-center px-20 relative transition-all duration-300 group-hover:bg-white"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)",
              }}
            >
              <a
                href="/whitelist"
                className="text-gray-300 text-1xl group-hover:text-black relative z-10"
              >
                Whitepaper
              </a>
            </div>
          </div>

          <div className="relative h-full flex items-center group">
            <div
              className="h-full flex items-center px-20 relative transition-all duration-300 group-hover:bg-white"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)",
              }}
            >
              <a
                href="/blog"
                className="text-gray-300 text-1xl group-hover:text-black relative z-10"
              >
                Blog
              </a>
            </div>
          </div>
        </div>

        {/* Login */}
        <div className="flex-1 flex justify-end h-full">
          <div className="relative h-full flex items-center group -ml-5">
            <div
              className="h-full flex items-center px-8 relative transition-all duration-300 group-hover:bg-white"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)",
              }}
            >
              <a
                href="/login"
                className="text-gray-300 group-hover:text-black relative z-10"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
