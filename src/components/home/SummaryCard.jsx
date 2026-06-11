function SummaryCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-3xl font-bold text-[#245846]">{value}</h3>

      <p className="mt-2 text-sm font-medium text-slate-500">{title}</p>
    </div>
  );
}

export default SummaryCard;
