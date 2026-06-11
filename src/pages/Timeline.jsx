import { useState } from "react";
import { getTimeline } from "../utils/timeline";

function Timeline() {
  const [timeline] = useState(getTimeline());

  if (timeline.length === 0) {
    return (
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-5xl font-bold text-slate-800">Timeline</h1>

          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
            <p className="text-lg text-slate-500">
              No interactions logged yet.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-5xl font-bold text-slate-800">Timeline</h1>

        <div className="space-y-4">
          {timeline.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md"
            >
              <div>
                {item.type === "Call" && (
                  <lord-icon
                    src="https://cdn.lordicon.com/wtywrnoz.json"
                    trigger="hover"
                    style={{
                      width: "42px",
                      height: "42px",
                    }}
                  ></lord-icon>
                )}

                {item.type === "Text" && (
                  <lord-icon
                    src="https://cdn.lordicon.com/bpptgtfr.json"
                    trigger="hover"
                    style={{
                      width: "42px",
                      height: "42px",
                    }}
                  ></lord-icon>
                )}

                {item.type === "Video" && (
                  <lord-icon
                    src="https://cdn.lordicon.com/zczzhvwa.json"
                    trigger="hover"
                    state="hover-videocam-2"
                    style={{
                      width: "42px",
                      height: "42px",
                    }}
                  ></lord-icon>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {item.title}
                </h3>

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
