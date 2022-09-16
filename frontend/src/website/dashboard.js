import React, { Component, useEffect, useState } from "react";
import { backendUrl } from "backendUrl";
import AnimationRevealPage from "helpers/AnimationRevealPage";

import Header from "components/headers/light.js";
import Footer from "components/footers/Home-Footer.js"
import EventDetailSection from "components/blogs/PopularAndRecentBlogPosts-Dashboard.js"

function Dashboard() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    fetch(`${backendUrl}/api/get_all_events_for_an_user/`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            setEvents(data);
            console.log(events);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

  return (
    <AnimationRevealPage>
      <Header />
      <EventDetailSection />
      <Footer />
    </AnimationRevealPage>
  );
}

export default Dashboard;
