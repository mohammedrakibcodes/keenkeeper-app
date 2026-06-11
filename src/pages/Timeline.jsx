import { useState } from "react";
import { getTimeline } from "../utils/timeline";

function Timeline() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [timeline] = useState(getTimeline());

  const filteredTimeline =
    activeFilter === "All"
      ? timeline
      : timeline.filter((item) => item.type === activeFilter);

  if (timeline.length === 0) {
    return (
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-5xl font-bold text-slate-800">Timeline</h1>

          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
            <lord-icon
              src="https://cdn.lordicon.com/juujmrhr.json"
              trigger="in"
              style={{ width: "120px", height: "120px" }}
            ></lord-icon>

            <h2 className="mt-6 text-3xl font-semibold text-slate-800">
              No interactions logged yet
            </h2>

            <p className="mt-5 text-2xl text-slate-800">
              Your timeline is empty. Start logging calls, messages, and meetups
              with friends to create a history of your interactions.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-5xl font-bold">Timeline</h1>

        <div className="mb-8 flex flex-wrap gap-3">
          {["All", "Call", "Text", "Video"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-5 py-2 font-medium transition ${
                activeFilter === filter
                  ? "bg-[#245846] text-white"
                  : "bg-white text-slate-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div>
                {item.type === "Call" && (
                  <lord-icon
                    src="https://cdn.lordicon.com/wtywrnoz.json"
                    trigger="in"
                    style={{
                      width: "42px",
                      height: "42px",
                    }}
                  ></lord-icon>
                )}

                {item.type === "Text" && (
                  <lord-icon
                    src="https://cdn.lordicon.com/bpptgtfr.json"
                    trigger="in"
                    style={{
                      width: "42px",
                      height: "42px",
                    }}
                  ></lord-icon>
                )}

                {item.type === "Video" && (
                  <lord-icon
                    src="https://cdn.lordicon.com/zczzhvwa.json"
                    trigger="in"
                    state="hover-videocam-2"
                    style={{
                      width: "42px",
                      height: "42px",
                    }}
                  ></lord-icon>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-1 text-slate-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
