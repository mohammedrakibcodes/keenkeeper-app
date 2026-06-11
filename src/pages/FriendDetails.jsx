import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { IoArchiveOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { saveTimeline } from "../utils/timeline";

function FriendDetails() {
  const { id } = useParams();

  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedFriend = data.find((item) => item.id === Number(id));

        setFriend(selectedFriend);
      });
  }, [id]);

  const handleCheckIn = (type) => {
    const entry = {
      id: Date.now(),
      type,
      friendName: friend.name,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      title: `${type} with ${friend.name}`,
    };

    saveTimeline(entry);

    toast.success(`${type} logged successfully`);
  };

  if (!friend) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg text-[#245846]"></span>
      </div>
    );
  }

  const statusStyle = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600",
  };

  return (
    <section className="bg-slate-50 px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[350px_1fr]">
        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <img
              src={friend.picture}
              alt={friend.name}
              className="mx-auto h-24 w-24 rounded-full object-cover"
            />

            <h2 className="mt-4 text-center text-4xl font-bold">
              {friend.name}
            </h2>

            <div className="mt-4 flex justify-center">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  statusStyle[friend.status]
                }`}
              >
                {friend.status}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase text-green-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-6 text-center italic text-slate-500">
              "{friend.bio}"
            </p>

            <p className="mt-3 text-center text-slate-500">Preferred: email</p>
          </div>

          <button className="btn h-14 w-full border-slate-200 bg-white">
            <RiNotificationSnoozeLine size={20} />
            Snooze 2 Weeks
          </button>

          <button className="btn h-14 w-full border-slate-200 bg-white">
            <IoArchiveOutline size={20} />
            Archive
          </button>

          <button className="btn h-14 w-full border-slate-200 bg-white text-red-500">
            <lord-icon
              src="https://cdn.lordicon.com/oqeixref.json"
              trigger="in"
              colors="primary:#ef4444,secondary:#ef4444"
              style={{
                width: "22px",
                height: "22px",
              }}
            ></lord-icon>
            Delete
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-5xl font-bold text-[#245846]">
                {friend.days_since_contact}
              </h3>

              <p className="mt-2 text-slate-500">Days Since Contact</p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-5xl font-bold text-[#245846]">
                {friend.goal}
              </h3>

              <p className="mt-2 text-slate-500">Goal (Days)</p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#245846]">
                {friend.next_due_date}
              </h3>

              <p className="mt-2 text-slate-500">Next Due</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-semibold">Relationship Goal</h3>

              <button className="btn btn-sm bg-slate-100">Edit</button>
            </div>

            <p className="mt-6 text-xl text-slate-600">
              Connect every{" "}
              <span className="font-bold text-slate-900">
                {friend.goal} days
              </span>
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-6 text-3xl font-semibold">Quick Check-In</h3>

            <div className="grid gap-4 md:grid-cols-3">
              <button
                onClick={() => handleCheckIn("Call")}
                className="flex h-28 flex-col items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-50"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wtywrnoz.json"
                  trigger="in"
                  style={{
                    width: "36px",
                    height: "36px",
                  }}
                ></lord-icon>

                <span className="mt-2 text-lg font-medium">Call</span>
              </button>

              <button
                onClick={() => handleCheckIn("Text")}
                className="flex h-28 flex-col items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-50"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/bpptgtfr.json"
                  trigger="in"
                  style={{
                    width: "36px",
                    height: "36px",
                  }}
                ></lord-icon>

                <span className="mt-2 text-lg font-medium">Text</span>
              </button>

              <button
                onClick={() => handleCheckIn("Video")}
                className="flex h-28 flex-col items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-50"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/zczzhvwa.json"
                  trigger="in"
                  state="hover-videocam-2"
                  style={{
                    width: "36px",
                    height: "36px",
                  }}
                ></lord-icon>

                <span className="mt-2 text-lg font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FriendDetails;
