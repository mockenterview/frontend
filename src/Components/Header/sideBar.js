import React, { useState } from "react";

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
	NavbarText,
	Row
} from "reactstrap";

import "./sideBar.css";

const SideBar = props => {
    // Handles the state of whether "Tools" Nav is collapsed or expanded.
	const [isOpen, setIsOpen] = useState(true);
	const toggle = () => setIsOpen(!isOpen);

	const [isInterviewOpen, setIsInterviewOpen] = useState(true);
	const toggleInt = () => setIsInterviewOpen(!isInterviewOpen);

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
				<br />
				<p >
					Interviews 
				</p>
					<NavItem>
						<NavLink href="#">
							{" "}
							<i class="fa fa-clock-o" /> Schedule New
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink href="#">
							<i class="fa fa-list-alt" /> Interview{" "}
						</NavLink>
					</NavItem>
				<br />

				<div>
					<p onClick={toggle}>
						{" "}
						TOOLS <i class="fa fa-chevron-down" />
					</p>
					<Collapse isOpen={isOpen}>
						<NavItem>
							<NavLink href="#">
								<i class="fa fa-calendar"></i> Calendar
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink disabled href="#">
								<i class="fa fa-address-card-o"></i> Contacts
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								{" "}
								<i class="fa fa-bell-o"></i> Reminders
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">
								{" "}
								<i class="fa fa-pie-chart"></i> Feedback
							</NavLink>
						</NavItem>
					</Collapse>
				</div>
			</Nav>
		</div>
	);
};

export default SideBar;
