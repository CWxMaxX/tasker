import React, { useEffect, useState } from "react";
import { SectionColumn, SectionRow } from "../../components/sections/sections";
import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { stringCrop } from "../../helpers/stringCrop";
import LightToolTipCustom from "../../components/tooltip/lightToolTip";

interface Props {
  user: User;
}

interface Task {
  timeStamp: string;
  title: string;
  description: string;
  date: string;
}

const ViewTaskCard: React.FC<Props> = (props) => {
  const [taskList, setTaskList] = useState([]);
  const docRef = doc(db, "users", props.user.uid);
  const getTaskList = async () => {
    try {
      const docSnap = await getDoc(docRef);
      let taskArray = docSnap.data()?.taskList.map((task: string) => {
        return JSON.parse(task);
      });
      setTaskList(taskArray);
    } catch (e) {
      console.log("Error ====>", e);
    }
  };

  useEffect(() => {
    return () => {
      getTaskList().then((r) => console.log(r));
    };
  }, []);

  const renderTaskList = (taskList: any) => {
    return taskList.map((task: Task, index: number) => (
      <SectionRow className={"w-full h-10 justify-center items-end border-b"}>
        <SectionRow className={"w-10  "}>{index + 1}.</SectionRow>
        <SectionRow className={"w-2/12 "}>{task?.title}</SectionRow>
        <SectionRow className={"w-7/12 "}>
          <LightToolTipCustom title={task.description}>
            <div>{stringCrop(task.description, 60)}</div>
          </LightToolTipCustom>
        </SectionRow>
        <SectionRow className={"w-1/12 "}>
          <div className={"w-full"}>{task.date}</div>
        </SectionRow>
        <SectionRow className={"w-1/12 justify-end"}>Status</SectionRow>
      </SectionRow>
    ));
  };

  return (
    <div
      className={"w-full mx-auto text-gray-900 bg-gray-50 rounded-2xl"}
      style={{ height: "650px" }}
    >
      <SectionRow
        className={"h-12 bg-amber-300 rounded-t-2xl pt-3 pl-4 font-bold "}
      >
        Tasks List
      </SectionRow>
      <SectionColumn className={"w-full  pt-5 px-5 "}>
        <SectionRow
          className={
            "w-full h-12 justify-center items-center border-b font-extrabold"
          }
        >
          <SectionRow className={"w-10 justify-start"}>No.</SectionRow>
          <SectionRow className={"w-2/12 "}>Title</SectionRow>
          <SectionRow className={"w-7/12 "}>Description</SectionRow>
          <SectionRow className={"w-1/12 "}>
            <div className={"w-full"}>Date</div>
          </SectionRow>
          <SectionRow className={"w-1/12 justify-end"}>Status</SectionRow>
        </SectionRow>
        {taskList && renderTaskList(taskList)}
      </SectionColumn>
    </div>
  );
};

export default ViewTaskCard;
