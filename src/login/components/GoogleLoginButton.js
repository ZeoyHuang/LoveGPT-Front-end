import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function GoogleLoginButton() {
  const navigate = useNavigate();

  // Redirect to Page2 on successful login
  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    navigate("/page2");
  };

  // Redirect back to login page on failed login
  const handleError = () => {
    console.log("Login Failed");
    navigate("/login");
  };

  return (
    <div>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}

export default GoogleLoginButton;
