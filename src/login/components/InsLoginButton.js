import React from "react";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";

const InsLoginButton = () => {
  const handleInstagramLogin = () => {
    const clientId = "584458130551150"; // Instagram App ID
    const redirectUri = "https://7fbb-218-14-60-100.ngrok-free.app/page2"; // public url represent http://localhost:3000 generated by ngrok

    const url = `https://api.instagram.com/oauth/authorize
      ?client_id=${clientId}
      &redirect_uri=${redirectUri}
      &scope=user_profile,user_media
      &response_type=code`;

    window.location.href = url;
  };

  return (
    <Button
      variant="outlined"
      startIcon={<InstagramIcon />}
      onClick={handleInstagramLogin}
      fullWidth
    >
      Sign up with Instagram
    </Button>
  );
};

export default InsLoginButton;