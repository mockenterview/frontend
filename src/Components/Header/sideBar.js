import React, {useState} from "react";

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from "reactstrap";

import "./sideBar.css";

const sideBar = (props) => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="sidebar">
			<Nav vertical>
				<div className="avatar">
					<div className="round"></div>
                    <NavItem>
					<NavLink href="#">UserName</NavLink>
				</NavItem>
					<p>User@email.com</p>
				</div>
			</Nav>
			<br />
			<Nav vertical>
				<p>Interviews</p>
				<NavItem>
					<NavLink href="#">Schedule New</NavLink>
				</NavItem>

				<NavItem>
					<NavLink href="#">Interview </NavLink>
				</NavItem>
			</Nav>

			<br />

			<Nav vertical>
				<p > TOOLS</p>
                {/* <Collapse isOpen={isOpen}> */}
				<NavItem>
					<NavLink href="#">Calendar</NavLink>
				</NavItem>
				<NavItem>
					<NavLink disabled href="#">Contacts</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#">Reminders</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#">Feedback</NavLink>
				</NavItem>
                {/* </Collapse> */}
			</Nav>
		</div>
	);
};

export default sideBar;
