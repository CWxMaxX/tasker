import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { signOut, User } from "firebase/auth";
import { Button, Menu, MenuItem } from "@mui/material";
import { appAuth } from "../../../firebase";

interface Props {
	user: User;
}

const UserProfileCard = (props: Props) => {
	const { user } = props;
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleSignOut = () => {
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
	};
	return (
		<div className='flex flex-row items-center hover:bg-violet-500 px-0.5 rounded-2xl'>
			<div className='flex-row flex pr-2 items-center'>
				{user?.photoURL ? (
					<div
						style={{
							borderRadius: "50%",
							overflow: "hidden",
							height: "30px",
							width: "30px",
						}}>
						<img src={user.photoURL} alt='User' width={30} />
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
			<Button
				id='basic-button'
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				sx={{ color: "#ffffff", textTransform: "capitalize" }}>
				{user?.displayName ? user.displayName : user?.email}
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleSignOut}>Logout</MenuItem>
			</Menu>
		</div>
	);
};

export default UserProfileCard;
