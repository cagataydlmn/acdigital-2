import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  LayoutGrid,
  Briefcase,
  BookOpen,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((p) => !p);

  // Route değişince kapan
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Scroll kilidi + ESC ile kapama
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    document.body.style.overflow = open ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const items = [
    {
      to: "/hakkimizda",
      title: "Hakkımızda",
      desc: "Biz kimiz? Vizyonumuz ve ekibimiz.",
      icon: Sparkles,
    },
    {
      to: "/hizmetler",
      title: "Hizmetler",
      desc: "Web, tasarım, reklam ve dijital çözümler.",
      icon: LayoutGrid,
    },
    {
      to: "/portfoy",
      title: "Portföy",
      desc: "Projelerimiz ve örnek çalışmalar.",
      icon: Briefcase,
    },
    {
      to: "/blog",
      title: "Blog",
      desc: "İpuçları, rehberler ve güncel içerikler.",
      icon: BookOpen,
    },
  ];

  return (
    <>
      {/* ✅ DESKTOP NAVBAR (dokunmadım) */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative group" onClick={closeMenu}>
              <img
                src="/A&C@3x-8-2.png"
                alt="A&C Digital"
                className="h-16 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004250] via-[#4DB8FF] to-[#80D4FF] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink
                to="/hakkimizda"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative group ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Hakkımızda
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/hizmetler"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative group ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Hizmetler
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/portfoy"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative group ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Portföy
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative group ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Blog
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>

              <Link
                to="/iletisim"
                className="px-6 py-2.5 bg-gradient-to-r from-[#4DB8FF] to-[#80D4FF] text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                İletişim
              </Link>
            </div>

            {/* ✅ Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition active:scale-[0.98]"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="text-sm font-semibold">Menü</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)",
        }}
        onClick={closeMenu}
      />

      {/* ✅ Drawer (Right) */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[86%] max-w-sm transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "rgba(10, 10, 10, 0.92)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.10)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        {/* Drawer Header */}
        <div className="px-6 pt-6 pb-4 flex items-center justify-between">
          <div className="text-white font-semibold">Menü</div>

          <button
            onClick={closeMenu}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="px-6 pb-6 flex flex-col gap-3">
          {items.map(({ to, title, desc, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `group flex items-center justify-between gap-4 px-4 py-4 rounded-2xl border transition ${
                  isActive
                    ? "bg-white/10 border-white/15 text-white"
                    : "bg-white/0 border-white/0 text-white/80 hover:text-white hover:bg-white/5 hover:border-white/10"
                }`
              }
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-xl bg-white/5 border border-white/10">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{title}</div>
                  <div className="text-xs text-white/55 leading-snug">
                    {desc}
                  </div>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-white/35 group-hover:text-white/70 transition" />
            </NavLink>
          ))}

          {/* CTA */}
          <Link
            to="/iletisim"
            onClick={closeMenu}
            className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm text-white hover:scale-[1.02] active:scale-[0.98] transition"
            style={{
              background: "linear-gradient(90deg, #4DB8FF, #80D4FF)",
              boxShadow: "0 12px 30px rgba(77,184,255,0.2)",
            }}
          >
            <Phone className="w-4 h-4" />
            İletişime Geç
          </Link>

          <div className="pt-4 text-xs text-white/35">
            A&C Digital • Modern Solutions
          </div>
        </div>
      </div>

      {/* İçerik navbar altında kalmasın */}
      <div className="h-24" />
    </>
  );
}
