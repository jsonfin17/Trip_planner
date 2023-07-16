import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useCollection from "../services/useCollection";
import getUser from "../services/getUser";
import emailjs from "@emailjs/browser";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const EventCard = ({ event, user }) => {
  const [checkedUsers, setCheckedUsers] = useState([]);
  const message = useRef("");
  const [send, setSend] = useState(false);
  const [alert, setAlert] = useState(<p></p>);

  useEffect( () => {
      setAlert(
        <Box sx={{
            width: '50%',
            position: 'absolute',
            top: 60,
            left: '20%'
        }}>
            <Collapse in={send}>
                <Alert
                    severity="success"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setSend(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Successfully send email to your friend/s!
                </Alert>
            </Collapse>
        </Box>
    );
  }, [send])

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

  const sendEmail = async (from_user, to_user, message) => {
    const templateParams = {
      to_name: to_user.name,
      to_email: to_user.email,
      from_email: from_user.email,
      from_name: user.name,
      message: message,

      // Add any other template variables you need for your email
    };

    await emailjs
      .sendForm(
        "service_kxn71pt",
        "template_wtsmvnr",
        templateParams,
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

  const handleSendEmails = () => {
    setSend(true);
    console.log("send email called!");
    // Iterate through the checkedUsers and call sendEmail for each user
    checkedUsers.forEach((user) => {
      console.log("sending email for ", user.name, "email is", user.email);
      sendEmail(currentuser, user, message);
    });
  };

  return (
    <div>
      {alert}
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
          <div className="mt-2">
            <span className="text-sm font-bold text-white">
              Friend's availble
            </span>
          </div>
          {allUsers
            .filter((user) => user.uid !== currentuser.user.uid)
            .map((user, index) => {
              return (
                <span
                  key={index}
                  className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                >
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
          <div className="mt-2">
            <span className="text-sm font-bold text-white">
              Who you're inviting
            </span>
          </div>
          {checkedUsers.map((user, index) => {
            return (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
              >
                {user.name}
              </span>
            );
          })}
          <div className="mt-2">
            <button
              className="bg-accent text-sm text-white font-bold py-2 px-4 rounded"
              onClick={handleSendEmails}
            >
              Invite Friends
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EventCard;
