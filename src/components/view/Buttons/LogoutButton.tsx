import { Button } from "antd";
import React from "react";

const Logout = ({ onLogout }: any) => {
  const handleLogout = () => {
    // Call the onLogout function from the parent
    onLogout();
  };

  return (
    <div>
      <Button type="primary" onClick={handleLogout} danger>
        Log out
      </Button>
    </div>
  );
};

export default Logout;
