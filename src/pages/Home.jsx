import { useEffect, useState } from "react";

import Banner from "../components/home/Banner";
import SummarySection from "../components/home/SummarySection";
import FriendsSection from "../components/home/FriendsSection";

function Home() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <>
      <Banner />

      <SummarySection friends={friends} />

      <FriendsSection />
    </>
  );
}

export default Home;
