import { useState, useEffect } from "react";

export const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/local-events")
      .then((response) => response.json()) // Parse the response data as JSON
      .then((data) => {
        console.log("data fetched is", data);

        setEvents(data); // Set the data in the state
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getEvents = () => {
    return events;
  };

  return { getEvents };
};

export default useEvents;
