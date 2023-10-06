//import { Button } from "@mui/base";
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HomeOutlined, LineAxisOutlined, MapOutlined, MenuOutlined, PeopleOutlineOutlined, PieChartOutline, ReceiptOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
//import { Outlet, NavLink, Form, useNavigation } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import PropTypes from 'prop-types'
import { Link, NavLink } from "react-router-dom";

const Item = ({ title, to, icon }) => {

    return (
        <MenuItem
            active={location.pathname === to}
            className="text-skin-base"
            icon={icon}
            component={<NavLink to={to} />}>
            <p>{title}</p>
        </MenuItem>
    )
}

Item.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.element,
    selected: PropTypes.string,
    setSelected: PropTypes.func
}

export default function RootSidebar() {
    const location = useLocation();
    //const submit = useSubmit()
    const [isCollapsed, setIsCollapsed] = useState(false)

    //const searching =
    //    navigation.location &&
    //    new URLSearchParams(navigation.location.search).has("q")

    const NavMenuItems =
        [
            {
                title: "Dashboard",
                to: "/",
                icon: <HomeOutlined />,
            },
            {
                group: "Data"
            },
            {
                title: "Manage Teams",
                to: "/teams",
                icon: <PeopleOutlineOutlined />,
            },
            {
                title: "Contacts",
                to: "/contacts",
                icon: <ContactsOutlined />,
            },
            {
                title: "Invoices Balances",
                to: "/invoices",
                icon: <ReceiptOutlined />,
            },
            {
                group: "Logistics"
            },
            {
                title: "Calendar",
                to: "/calendar",
                icon: <CalendarTodayOutlined />,
            },
            {
                title: "Job Routes",
                to: "/routes",
                icon: <MapOutlined />,
            },
            {
                group: "Charts"
            },
            {
                title: "Bar Chart",
                to: "/bar",
                icon: <BarChartOutlined />,
            },
            {
                title: "Pie Chart",
                to: "/pie",
                icon: <PieChartOutline />,
            },
            {
                title: "Line Chart",
                to: "/line",
                icon: <LineAxisOutlined />,
            },
        ]

    const listItems = NavMenuItems.map(item => {
        return (item.group ?
            <h6 key={item.group} className="text-skin-muted mt-4 mb-1 ml-5">{item.group}</h6> :
            <Item
                key={item.title}
                title={item.title}
                to={item.to}
                icon={item.icon}
            />)
    })
    return (
        <>
            <div className="flex min-w-0">
                <Box className="bg-skin-bgAccent flex"
                    sx={{
                        "& .ps-sidebar-container": {
                            backgroundColor: 'var(--color-background-accent)',
                        },
                        "& .ps-active": {
                            color: 'var(--color-text-blue)',
                        },
                    }}>
                    <Sidebar className="!border-greenAccent-500 bg-skin-bgAccent" collapsed={isCollapsed}
                    >
                        <Menu className="">

                            {/* Log and Menu Icon*/}
                            <MenuItem
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                icon={isCollapsed ? <MenuOutlined /> : undefined}
                                className="mt-3 mb-5 text-skin-base">

                                {!isCollapsed && (
                                    <div className="flex justify-between items-center ml-4">
                                        <h3 className="text-skin-base">ADMINS</h3>
                                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                            <MenuOutlined />
                                        </IconButton>
                                    </div>)}
                            </MenuItem>
                            {/*User*/}
                            {!isCollapsed && (
                                <div className="mb-6 test">
                                    <div className="flex justify-center items-center">
                                        <img
                                            alt="profile-user"
                                            width="100px"
                                            height="100px"
                                            src={`src/assets/user.png`}
                                            style={{ cursor: "pointer", borderRadius: "50%" }} />
                                    </div>

                                    <div className="text-center">
                                        <h2 className="text-skin-base font-bold mt-3">Bruno</h2>
                                        <h5 className="text-skin-green">VP Admin</h5>
                                    </div>
                                </div>)}

                            {/* Menu Items */}
                            <div className={isCollapsed ? "" : "pl-[10%]"}>
                                {listItems}
                            </div>
                        </Menu>
                    </Sidebar>
                </Box>
            </div >


            {// FIXME : Check if code is needed
            }
            {/*
            <div className="flex flex-1">
                <div id="sidebar" >
                    <h1>Get Clean Schedule</h1>
                    <div id="sidebarTop">
                        <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                            <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                            <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </button>
                        <NavLink to="/">
                            <Button>HOME</Button>
                        </NavLink>
                        <Form id="search-form" role="search">
                            <input
                                className={searching ? "loading" : ""}
                                aria-label="Search contacts"
                                placeholder="Search"
                                type="search"
                                name="q"

                            />
                            <div
                                id="search-spinner"
                                aria-hidden
                                hidden={!searching}
                            />
                            <div
                                className="sr-only"
                                aria-live="polite"
                            ></div>
                        </Form>
                        <Form method="post">
                            <button type="submit">New</button>
                        </Form>
                    </div>
                    <nav className="">
                        <ul>

                            <li >
                                <NavLink
                                    to={`contacts/`}
                                    className={
                                        ({ isActive, isPending }) =>
                                            isActive ? "active" :
                                                isPending ? "pending" : ""
                                    }>
                                    <p>Contacts</p>
                                </NavLink>
                            </li>

                        </ul>

                    </nav>
                </div>
                <div id="detail"
                    className={
                        navigation.state === "loading" ? "loading " : ""
                    }>
                    <Outlet />
                </div>
            </div>
            */}
        </>

    );
}