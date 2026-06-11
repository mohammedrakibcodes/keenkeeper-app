import { Link } from "react-router-dom";

function FriendCard({ friend }) {
  const statusStyle = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600",
  };

  return (
    <Link
      to={`/friend/${friend.id}`}
      className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="h-22 w-22 rounded-full object-cover"
      />

      <h3 className="mt-4 text-xl font-bold">{friend.name}</h3>

      <p className="mt-2 text-sm text-slate-500">
        {friend.days_since_contact} days since contact
      </p>

      <div className="mt-3 flex flex-wrap  justify-center gap-2">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs "
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
          statusStyle[friend.status]
        }`}
      >
        {friend.status}
      </span>
    </Link>
  );
}

export default FriendCard;
