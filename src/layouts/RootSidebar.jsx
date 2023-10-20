//import { Button } from "@mui/base";
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HomeOutlined, LineAxisOutlined, MapOutlined, MenuOutlined, PeopleOutlineOutlined, PieChartOutline, ReceiptOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { NavLink, } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import PropTypes from 'prop-types'

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
    //const location = useLocation();
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
        </>

    );
}