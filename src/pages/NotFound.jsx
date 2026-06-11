import { Link } from "react-router-dom";

function NotFound() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">
        <lord-icon
          src="https://cdn.lordicon.com/usownftb.json"
          trigger="loop"
          delay="2000"
          style={{
            width: "140px",
            height: "140px",
          }}
        ></lord-icon>

        <h1 className="mt-4 text-7xl font-extrabold text-[#245846] md:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-500">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="btn border-none bg-[#245846] text-white hover:bg-[#1d4738]"
          >
            Back Home
          </Link>

          <button onClick={handleReload} className="btn btn-outline">
            Reload Page
          </button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
