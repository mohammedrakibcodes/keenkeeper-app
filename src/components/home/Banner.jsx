function Banner() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-extrabold text-slate-800 md:text-6xl">
          Friends to keep close in your life
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-500 md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#316351] px-5 py-3 font-semibold text-white transition hover:opacity-90">
          <lord-icon
            src="https://cdn.lordicon.com/efxgwrkc.json"
            trigger="hover"
            style={{
              width: "20px",
              height: "20px",
            }}
          ></lord-icon>
          Add a Friend
        </button>
      </div>
    </section>
  );
}

export default Banner;
