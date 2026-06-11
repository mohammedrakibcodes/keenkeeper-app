import { useMemo } from "react";
import { getTimeline } from "../utils/timeline";

import { Pie, PieChart } from "recharts";

function Stats() {
  const timeline = getTimeline();

  const chartData = useMemo(() => {
    const callCount = timeline.filter((item) => item.type === "Call").length;

    const textCount = timeline.filter((item) => item.type === "Text").length;

    const videoCount = timeline.filter((item) => item.type === "Video").length;

    return [
      {
        name: "Call",
        value: callCount,
        fill: "#245846",
      },
      {
        name: "Text",
        value: textCount,
        fill: "#f59e0b",
      },
      {
        name: "Video",
        value: videoCount,
        fill: "#3b82f6",
      },
    ];
  }, [timeline]);

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-5xl font-bold text-slate-800">
          Friendship Analytics
        </h1>

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <PieChart width={400} height={400}>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={90}
                outerRadius={150}
                cornerRadius={12}
                paddingAngle={5}
                label
              />
            </PieChart>

            <div className="space-y-5">
              {chartData.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{
                      backgroundColor: item.fill,
                    }}
                  ></div>

                  <span className="text-lg font-medium">
                    {item.name}: {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
