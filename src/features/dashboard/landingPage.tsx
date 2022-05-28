import { Button } from "@mui/material";
import React from "react";

// Images
const wordingImg = "/assets/Images/wording.png";
const banner = "/assets/Images/banner.png";

const LandingPage: React.FC = () => {
  return (
    <div>
      {" "}
      <img
        src={banner}
        alt="Banner"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: -10,
          objectFit: "cover",
        }}
      />
      <img src={wordingImg} alt="wording" className="ml-auto mr-auto pt-20" />
      <Button
        variant={"contained"}
        sx={{ px: 7, mt: 40, py: 1.5 }}
        onClick={() => {
          window.open("/auth/login", "_self");
        }}
      >
        Get Start
      </Button>
    </div>
  );
};

export default LandingPage;
