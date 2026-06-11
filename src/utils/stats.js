import { getTimeline } from "./timeline";

export const getSummaryStats = (friends) => {
  const timeline = getTimeline();

  const totalFriends = friends.length;

  const onTrack = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;

  const needAttention = friends.filter(
    (friend) => friend.status !== "on-track",
  ).length;

  const totalInteractions = timeline.length;

  return {
    totalFriends,
    onTrack,
    needAttention,
    totalInteractions,
  };
};
