import React, { useState } from "react";
import { appAuth, db } from "../../firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Button from "@mui/material/Button";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

import CommonModal from "../../components/modals/commonModal";
import AddNewTask from "../../components/modals/dashboardComponents/addNewTask";

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
		setUser(currentUser);
	});

	const handleAddTask = async () => {
		try {
			const docRef = await setDoc(doc(db, "users", user?.uid || "anonymous"), {
				name: "Los Angeles",
				state: "CA",
				country: "USA",
				proList: ["Test1", "Test2"],
			});
			console.log("Document written with ID: ", docRef);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	return (
		<div style={{ height: "100vh", width: "100vw", color: "#fcfcfc" }}>
			<header className='flex flex-row-reverse w-full h-12 fixed bg-gray-900 items-center pr-5'>
				<span>{user?.displayName ? user.displayName : user?.email}</span>
				<div className='flex-row flex pr-2'>
					{user?.photoURL ? (
						<div style={{ borderRadius: "50%", overflow: "clip" }}>
							<img src={user?.photoURL} alt='User' width={35} />
						</div>
					) : (
						<AccountCircleIcon
							sx={{
								color: `${user ? "#2378ef" : "#f1410a"}`,
								mr: 1,
								width: "35px",
								height: "35px",
							}}
							onClick={() => {
								console.log(user?.uid);
							}}
						/>
					)}
				</div>
			</header>
			<div
				className='flex flex-row'
				style={{
					backgroundImage: "url('/assets/Images/backgroundImage.png')",
					width: "100%",
					height: "100%",
					backgroundColor: "#4a148c",
					color: "#fff",
				}}>
				<div className='w-1/12 flex flex-col justify-center items-start sm:pl-5'>
					<div className=' w-16 h-full items-center sm:flex flex-col justify-center hidden fixed'>
						<CommonModal
							component={<img src={addIcon} alt='Add' className='mb-8' width={40} />}
							title='Add New Task ...'
							content={<AddNewTask />}
							handleSubmit={handleAddTask}
						/>
						<img src={calenderIcon} alt='Calender' className='mb-8' width={40} />
						<img src={documentIcon} alt='Document Icon' className='mb-8' width={40} />
						<img src={locationIcon} alt='Address' className='mb-8' width={40} />
						<img src={alarmIcon} alt='Alarm' className='mb-8' width={40} />
						<img src={downloadIcon} alt='Download' className='mb-8' width={40} />
					</div>
				</div>

				<div className=' w-8/12 h-full items-center flex'></div>
				<div className=' w-3/12 h-full flex flex-col-reverse pb-10 mr-10 items-end'>
					<Button
						sx={{ width: "200px" }}
						variant='contained'
						endIcon={<DoubleArrowIcon />}
						onClick={() => {
							signOut(appAuth)
								.then(() => {
									localStorage.setItem("TASKER_USER", "");
									window.location.replace("/auth/login");
									// Sign-out successful.
								})
								.catch((error) => {
									// An error happened.
									console.log(error);
								});
						}}>
						Log out
					</Button>
				</div>
			</div>
			<footer className='flex flex-row w-full h-48 bg-gray-900'></footer>
		</div>
	);
};

export default Home;
