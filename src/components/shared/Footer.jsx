import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#245846] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h2 className="text-5xl font-extrabold md:text-7xl">
          Keen<span className="font-bold">Keeper</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-300 md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="mt-10 text-xl font-semibold">Social Links</h3>

        <div className="mt-5 flex justify-center gap-4">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
          >
            <FaXTwitter size={20} />
          </a>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-300 md:flex-row">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
