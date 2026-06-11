import SummaryCard from "./SummaryCard";

function SummarySection() {
  const stats = [
    {
      id: 1,
      title: "Total Friends",
      value: 10,
    },
    {
      id: 2,
      title: "On Track",
      value: 3,
    },
    {
      id: 3,
      title: "Need Attention",
      value: 6,
    },
    {
      id: 4,
      title: "Interactions This Month",
      value: 12,
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
