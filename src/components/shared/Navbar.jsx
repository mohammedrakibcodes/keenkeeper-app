import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    path: "/",
    label: "Home",
    icon: "https://cdn.lordicon.com/oeotfwsx.json",
  },
  {
    path: "/timeline",
    label: "Timeline",
    icon: "https://cdn.lordicon.com/ibjcmcbv.json",
  },
  {
    path: "/stats",
    label: "Stats",
    icon: "https://cdn.lordicon.com/lrzdmsmx.json",
  },
];

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <NavLink to="/">
          <h1 className="text-4xl font-extrabold">
            <span className="text-slate-900">Keen</span>
            <span className="text-[#245846]">Keeper</span>
          </h1>
        </NavLink>

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#2f6b57] text-white"
                      : "text-slate-500 hover:text-[#245846]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <lord-icon
                      src={item.icon}
                      trigger="hover"
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    ></lord-icon>

                    <span>{item.label}</span>

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full transition-all duration-300 ${
                        isActive ? "scale-x-100 bg-white" : "scale-x-0"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="dropdown dropdown-end md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm text-2xl"
          >
            <RxHamburgerMenu />
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-[100] mt-3 w-56 rounded-box border border-slate-200 bg-white p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-md ${
                      isActive ? "bg-[#245846] text-white" : ""
                    }`
                  }
                >
                  <lord-icon
                    src={item.icon}
                    trigger="hover"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  ></lord-icon>

                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
