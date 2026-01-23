function App() {
  return (
    <div className="bg-black text-white min-h-screen font-[Poppins] overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-12 z-50 bg-black">
        <a className="text-2xl md:text-3xl font-extrabold text-red-500 hover:scale-110 transition">
          Saurav
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {["Home", "Services", "Skills", "Education", "Experience", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className={`text-base lg:text-lg font-medium pb-1 border-b-2 transition ${
                  item === "Home"
                    ? "text-red-500 border-red-500"
                    : "border-transparent hover:text-red-500 hover:border-red-500"
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      {/* HOME SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-28">

        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">

          {/* IMAGE */}
          <div className="flex justify-center w-full lg:w-auto">
            <img
              src="/main.jpg"
              alt="Profile"
              className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-96 rounded-full shadow-lg hover:scale-105 transition"
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-xl text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, It's <span className="text-red-500">Saurav</span>
            </h1>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 mb-3">
              I'm a <span className="text-red-500">Web Developer</span>
            </h3>

            <p className="text-sm sm:text-base mb-5">
              Cyber Security Enthusiast
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              {["linkedin", "github", "x-twitter", "instagram"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 text-lg transition hover:bg-red-500 hover:text-black hover:-translate-y-1 hover:scale-110"
                >
                  <i className={`fa-brands fa-${icon}`}></i>
                </a>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-block px-7 py-2.5 rounded-full border-2 border-red-500 text-red-500 text-base tracking-widest font-semibold transition hover:bg-red-500 hover:text-black hover:scale-105"
              >
                Hire me
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
