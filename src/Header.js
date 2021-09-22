import React from 'react';
import { Navbar, NavItem, Popover, OverlayTrigger, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react'
import LoginButoon from './components/LoginButton'
import LogoutButoon from './components/logoutButton'
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);
const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
  );

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {
          this.props.auth0.isAuthenticated ?
            <>
              <LogoutButoon />
              <div className="button-placement" style={{ "color": "white", "float": "100px" }}>
                <img trigger="hover"  className="button-placement" style={{ "padding": "0px 30px", "height": "30px" }} src={this.props.auth0.user.picture} alt="" />
                <span style={{ "paddingRight": "15px"}}>Name: {this.props.auth0.user.name}</span>
                <span style={{ "paddingRight": "250px"}}>E-mail: {this.props.auth0.user.email}</span>

              </div>
            </> :
            <LoginButoon className="button-placement" />
        }
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
