import React, { useState } from "react";
import { appAuth } from "../../firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Images
const addIcon = "/assets/Icons/Add.svg";
const calenderIcon = "/assets/Icons/Calendar Plus.svg";
const documentIcon = "/assets/Icons/Create Document.svg";
const locationIcon = "/assets/Icons/Address.svg";
const alarmIcon = "/assets/Icons/Add Reminder.svg";
const downloadIcon = "/assets/Icons/Download from the Cloud.svg";
const userIcon = "/assets/Icons/User.svg";

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  onAuthStateChanged(appAuth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div style={{ height: "100vh", width: "100vw", color: "#fcfcfc" }}>
      <header className="flex flex-row-reverse w-full h-12 fixed bg-gray-900 items-center pr-5">
        <span>{user ? user.email : "User Email"}</span>
        <div className="">
          <AccountCircleIcon
            sx={{
              color: `${user ? "#2378ef" : "#f1410a"}`,
              mr: 1,
              width: "35px",
              height: "35px",
            }}
          />
        </div>
      </header>
      <div
        className="flex flex-row"
        style={{
          backgroundImage: "url('/assets/Images/backgroundImage.png')",
          width: "100%",
          height: "100%",
          backgroundColor: "#4a148c",
          color: "#fff",
        }}
      >
        <div className="w-1/12 flex flex-col justify-center items-start sm:pl-5">
          <div className=" w-16 h-full items-center sm:flex flex-col justify-center hidden fixed">
            <img
              src={addIcon}
              alt="Add"
              className="mb-8"
              width={40}
              onClick={() => {}}
            />
            <img
              src={calenderIcon}
              alt="Calender"
              className="mb-8"
              width={40}
            />
            <img
              src={documentIcon}
              alt="Document Icon"
              className="mb-8"
              width={40}
            />
            <img src={locationIcon} alt="Address" className="mb-8" width={40} />
            <img src={alarmIcon} alt="Alarm" className="mb-8" width={40} />
            <img
              src={downloadIcon}
              alt="Download"
              className="mb-8"
              width={40}
            />
          </div>
        </div>

        <div className=" w-8/12 h-full"></div>
        <div className=" w-3/12 h-full"></div>
      </div>
      <footer className="flex flex-row w-full h-48 bg-gray-900"></footer>
    </div>
  );
};

export default Home;
