import React, { Component, useEffect, useState } from "react";
import { backendUrl } from "backendUrl";
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
    <div>
      <h1>Dashboard</h1>
      <h2>Events Registered</h2>
      <ul>
        {events.map((event) => {
          return <li>{event}</li>;
        })}
      </ul>
    </div>
  );
}

export default Dashboard;
