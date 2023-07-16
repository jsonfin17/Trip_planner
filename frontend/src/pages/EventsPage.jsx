import useEvents from "../services/useEvents";
import getUser from "../services/getUser";
import EventCard from "../components/EventCard";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function EventsPage() {
  const user = getUser();
  const navigate = useNavigate();
  const { getEvents } = useEvents();


  const events = getEvents();
  console.log("frontend events", events);

  return (
    <>
      <Navbar />
      <div className="mt-2  w-full rounded-lg border md:p-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {" "}
          <h1
            className="mb-4 text-center text-4xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-5xl"
            data-aos="zoom-y-out"
          >
            Upcoming Events
          </h1>{" "}
          <div className="flex  flex-col items-center pb-10">
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => {
                return <EventCard event={event} key={index} user={user} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsPage;
