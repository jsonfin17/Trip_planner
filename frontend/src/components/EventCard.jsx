import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCollection from "../services/useCollection";
import getUser from "../services/getUser";

const EventCard = ({ event, user }) => {
  const [checkedUsers, setCheckedUsers] = useState([]);

  // Function to toggle user's checked status
  const toggleCheckedUser = (user) => {
    if (checkedUsers.some((checkedUser) => checkedUser.uid === user.uid)) {
      // User is already checked, remove from the list
      setCheckedUsers((prevCheckedUsers) =>
        prevCheckedUsers.filter((checkedUser) => checkedUser.uid !== user.uid)
      );
    } else {
      // User is not checked, add to the list
      setCheckedUsers([...checkedUsers, user]);
    }
  };

  function formatDate(inputDate) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dateParts = inputDate.split("-");
    const year = dateParts[0];
    const month = months[parseInt(dateParts[1]) - 1];
    const day = dateParts[2];

    return `${parseInt(day)} ${month} ${year}`;
  }

  const { allUsers, loadAllUsers } = useCollection();

  const currentuser = getUser();

  useEffect(() => {
    loadAllUsers();
  }, [allUsers]);

  const sendEmail = async () => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }

    await emailjs
      .sendForm(
        "service_kxn71pt",
        "template_wtsmvnr",
        form.current,
        "bbc4c12GJuBCsPiDl"
      )
      .then(() => {
        setValues({
          name: "",
          email: "",
          message: "",
        });
      });
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div>
      {event ? (
        <div
          to={`/events/${event.name}`}
          state={user}
          className="mx-auto block w-[90%] rounded-lg border border-gray-200 bg-secondary p-6 shadow hover:bg-gray-700 md:w-full"
        >
          <h5
            title={event.name}
            className="h-16 text-center text-2xl font-bold tracking-tight text-gray-900 line-clamp-2 dark:text-white  md:text-start md:line-clamp-3"
          >
            {event.name}
          </h5>
          <span
            title={event.name}
            className="text-center text-xl font-bold tracking-tight text-gray-900 line-clamp-2 dark:text-white  md:text-start md:line-clamp-3"
          >
            {formatDate(event.dates.start.localDate)}
          </span>
          <img src={event.images[0].url} alt="" />
          <a
            title={event.seatmap.staticUrl}
            href={event.seatmap.staticUrl}
            target="_blank"
            className="text-center font-normal text-gray-700 line-clamp-4 text-gray-400  md:text-start md:line-clamp-6"
          >
            SeatMap
          </a>
          <a
            title={event.url}
            href={event.url}
            target="_blank"
            className="text-center font-normal text-gray-700 line-clamp-4 text-gray-400 md:text-start md:line-clamp-6"
          >
            TicketMaster
          </a>
          <div className="mt-4 flex items-center justify-evenly text-gray-700 md:justify-between">
            <span className="text-lg font-bold text-blue-700 dark:text-blue-600">
              ${event.priceRanges[0].min} - ${event.priceRanges[0].max}
            </span>
          </div>
          <div>
            <span className="text-sm font-bold text-blue-700 dark:text-blue-600">
              {event.priceRanges[0].type}
            </span>
          </div>
          <div>
            <span className="text-sm font-bold text-gray-700">
              Friend's availble
            </span>
          </div>
          {allUsers
            .filter((user) => user.uid !== currentuser.user.uid)
            .map((user) => {
              return (
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  <input
                    type="checkbox"
                    checked={checkedUsers.some(
                      (checkedUser) => checkedUser.uid === user.uid
                    )}
                    onChange={() => toggleCheckedUser(user)}
                    className="mr-1"
                  />
                  {user.name}
                </span>
              );
            })}
          <button className="text-sm font-bold text-gray-700">
            Invite Friends
          </button>
          {checkedUsers.map((user) => {
            return <span>{user.name}</span>;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EventCard;
