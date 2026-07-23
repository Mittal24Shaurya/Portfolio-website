

const Navbar = () => {
  return (
<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] z-50">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">

          <div className="flex justify-between items-center px-10 py-5">

            <h1 className="text-white text-2xl font-bold">
              Portfolio
            </h1>

            <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

              <li className="hover:text-emerald-400 transition duration-300 cursor-pointer">
                <a href="/">
                Home
                </a>
              </li>

              <li className="hover:text-emerald-400 transition duration-300 cursor-pointer">
                <a href="/about">
                About
                </a>
              </li>

              <li className="hover:text-emerald-400 transition duration-300 cursor-pointer" href="/skills">
                <a href="/skills">
                Skills
                </a>
              </li>
              <li className="hover:text-emerald-400 transition duration-300 cursor-pointer" href="/contact">
                <a href="contact">
                Contact
                </a>
              </li>

            </ul>

          </div>

        </div>

      </nav>

  )
}

export default Navbar