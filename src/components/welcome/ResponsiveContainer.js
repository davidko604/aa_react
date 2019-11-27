import React from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";

function ResponsiveContainer({ children }) {
  const { currentUser, onSignOut } = children;
  return (
    <div>
      <DesktopContainer currentUser={currentUser} onSignOut={onSignOut}>
        {children}
      </DesktopContainer>
      <MobileContainer currentUser={currentUser} onSignOut={onSignOut}>
        {children}
      </MobileContainer>
    </div>
  );
}

export default ResponsiveContainer;
