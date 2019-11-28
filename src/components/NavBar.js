import React from "react";
import { NavLink /* Link */ } from "react-router-dom";
import ReactDOM from "react-dom";
import { CSSTransitionGroup } from "react-transition-group";
import MenuProductDropdownItem from "./welcome/MenuProductDropdownItem";
import { Menu, Dropdown } from "react-bootstrap";

function NavBar(props) {
  const { currentUser, onSignOut } = props;

  // const handleSignOutClick = event => {
  //   event.preventDefault();

  //   if (typeof onSignOut === "function") {
  //     onSignOut();
  //   }
  // };
  return (
    <div className="ui menu">
      <NavLink to="/" className="item">
        <img src="https://content-static.upwork.com/blog/uploads/sites/3/2018/08/30134609/LogoMakr.png"></img>
      </NavLink>
      <NavLink to="/questions" className="item">
        Questions
      </NavLink>
      {currentUser ? (
        <>
          <NavLink exact to="/questions/new" className="item">
            Ask a Question
          </NavLink>
          <NavLink to="/" onClick={onSignOut} className="item">
            Sign Out
          </NavLink>
          <span className="item" style={{ color: "green" }}>
            Welcome {currentUser.full_name}
          </span>
        </>
      ) : (
        <React.Fragment>
          <NavLink exact to="/sign_in" className="item">
            Sign In
          </NavLink>
          <NavLink exact to="/sign_up" className="item">
            Sign Up
          </NavLink>
        </React.Fragment>
      )}
      {/* <div class="ui dropdown item">
        Categories
        <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item">Electronics</a>
          <a class="item">Automotive</a>
          <a class="item">Home</a>
        </div>
      </div> */}

      <MenuProductDropdownItem />
    </div>
  );
}

export default NavBar;

// class Submenu extends React.Component {
//   render() {
//     return (
//       <ul className="nav__submenu">
//         <li className="nav__submenu-item ">
//           <a>Our Company</a>
//         </li>
//         <li className="nav__submenu-item ">
//           <a>Our Team</a>
//         </li>
//         <li className="nav__submenu-item ">
//           <a>Our Portfolio</a>
//         </li>
//       </ul>
//     );
//   }
// }

// class Menu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showAboutMenu: false
//     };
//   }

//   handleHover = event => {
//     this.setState({ showAboutMenu: true });
//   };

//   handleLeave = event => {
//     this.setState({ showAboutMenu: false });
//   };

//   render() {
//     return (
//       <nav className="nav">
//         <ul className="nav__menu">
//           <li className="nav__menu-item">
//             <a>Home</a>
//           </li>
//           <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
//             <a onMouseEnter={this.handleHover}>About</a>
//             <div className="submenu-container">
//               <CSSTransitionGroup
//                 transitionName="slide"
//                 transitionEnterTimeout={300}
//                 transitionLeaveTimeout={300}
//               >
//                 {this.state.showAboutMenu && <Submenu />}
//               </CSSTransitionGroup>
//             </div>
//           </li>

//           <li className="nav__menu-item">
//             <a>Contact</a>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }
