import React, { Component, useEffect, useState,useContext } from "react";
import { backendUrl } from "backendUrl";
import AnimationRevealPage from "helpers/AnimationRevealPage";

import Header from "components/headers/light.js";
import Footer from "components/footers/Home-Footer.js"
import EventDetailSection from "components/blogs/PopularAndRecentBlogPosts-Dashboard.js"
import { userContext } from "App";
function Dashboard() {
  const [events, setEvents] = useState([]);
useEffect(async () => {
    const token = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    await fetch(`${backendUrl}/api/get_all_events_for_an_user/`, requestOptions)
        .then((response) =>{
          if(response.status==200){
            return response.json();
          }
          else{
            alert("please login properly");
            window.location.href = "/";
            return {};
          }
        })
        .then((data) => {
          console.log(data.event_list);
          setEvents(data.event_list);
        })

        .catch((error)=>{
          console.log(error);
        })
    }, []);


    const logoutButtonPressed=()=>{
      localStorage.removeItem("token");
      window.location.href = "/";
    }

  return (
    <AnimationRevealPage>
      <Header />
      <EventDetailSection />
      {events.map((event) => (
        <div>
          <h1>{event}</h1>
          </div>
      ))}
      <button onClick={logoutButtonPressed}>logout</button>
      <Footer />
    </AnimationRevealPage>
  );
}

export default Dashboard;
