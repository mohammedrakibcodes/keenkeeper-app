import SummaryCard from "./SummaryCard";
import { getSummaryStats } from "../../utils/stats";

function SummarySection({ friends }) {
  const { totalFriends, onTrack, needAttention, totalInteractions } =
    getSummaryStats(friends);

  const stats = [
    {
      id: 1,
      title: "Total Friends",
      value: totalFriends,
    },
    {
      id: 2,
      title: "On Track",
      value: onTrack,
    },
    {
      id: 3,
      title: "Need Attention",
      value: needAttention,
    },
    {
      id: 4,
      title: "Interactions",
      value: totalInteractions,
    },
  ];

  return (
    <section className="px-4 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <SummaryCard key={item.id} title={item.title} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SummarySection;
