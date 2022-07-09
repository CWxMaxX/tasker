import React, { useEffect, useState } from "react";
import { appAuth, db } from "../../firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Button from "@mui/material/Button";
import { doc, setDoc } from "firebase/firestore";

import CommonModal from "../../components/modals/commonModal";
import AddTaskCard from "../addTask/AddTaskCard";
import UserProfileCard from "./components/userProfileCard";
import AddTaskModal from "../addTask/AddTaskModal";
import ViewTaskCard from "../viewTasksList/ViewTaskCard";

// Images
const addIcon = "/assets/Icons/Add.svg";
const calenderIcon = "/assets/Icons/Calendar Plus.svg";
const documentIcon = "/assets/Icons/Create Document.svg";
const locationIcon = "/assets/Icons/Address.svg";
const alarmIcon = "/assets/Icons/Add Reminder.svg";
const downloadIcon = "/assets/Icons/Download from the Cloud.svg";

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(appAuth, (currentUser) => {
    localStorage.setItem("TASKER_USER", JSON.stringify(currentUser));
    localStorage.setItem("C_UID", JSON.stringify(currentUser?.uid));
    setUser(currentUser);
  });
  console.log("User ======>", user);

  return (
    <div style={{ height: "100vh", width: "100vw", color: "#fcfcfc" }}>
      <header className="flex flex-row-reverse w-full h-12 fixed bg-gray-900 items-center pr-5">
        {user && <UserProfileCard user={user} />}
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
        {user && (
          <div className="w-1/12 flex flex-col justify-center items-start sm:pl-5">
            <div className=" w-16 h-full items-center sm:flex flex-col justify-center hidden fixed">
              <AddTaskModal user={user} />
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
              <img
                src={locationIcon}
                alt="Address"
                className="mb-8"
                width={40}
              />
              <img src={alarmIcon} alt="Alarm" className="mb-8" width={40} />
              <img
                src={downloadIcon}
                alt="Download"
                className="mb-8"
                width={40}
              />
            </div>
          </div>
        )}

        <div className=" w-8/12 h-full items-center flex">
          <ViewTaskCard />
        </div>
        <div className=" w-3/12 h-full flex flex-col-reverse pb-10 mr-10 items-end"></div>
      </div>
      <footer className="flex flex-row w-full h-48 bg-gray-900"></footer>
    </div>
  );
};

export default Home;
