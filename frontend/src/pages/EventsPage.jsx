import useEvents from "../services/useEvents";

function EventsPage() {
  const { getEvents } = useEvents();

  const events = getEvents();
  console.log("frontend events", events);

  return (
    <div className="text-black">
      {events.map((event) => {
        return (
          <div key={event.id}>
            Name is {event.name}, date is {event.dates.start.localDate}
          </div>
        );
      })}
    </div>
  );
}

export default EventsPage;
