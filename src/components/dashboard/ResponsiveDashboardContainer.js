import React from "react";
import DesktopDashboardContainer from "./DesktopDashboardContainer";
// import MobileDashboardContainer from "./MobileContainer";

export class ResponsiveDashboardContainer extends React.Component {
  constructor({ children }) {
    super({ children });

    this.state = {
      questions: [],
      isLoading: true
    };
  }
  render() {
    // const currentUser = this.props.currentUser;
    // const onSignOut = this.props.onSignOut;
    const { currentUser, onSignOut, children } = this.props;

    return (
      <div>
        <DesktopDashboardContainer
          currentUser={currentUser}
          onSignOut={onSignOut}
        >
          {children}
        </DesktopDashboardContainer>
        {/* <MobileContainer currentUser={currentUser} onSignOut={onSignOut}>
        {children}
      </MobileContainer> */}
      </div>
    );
  }
}

export default ResponsiveDashboardContainer;
