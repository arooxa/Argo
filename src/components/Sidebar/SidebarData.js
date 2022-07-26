import React from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <GridViewIcon />,
        link: "/dash"
    },
    {
        title: "Boards",
        icon: <WorkIcon />,
        link: "/boards"
    },
    {
        title: "Calendar",
        icon: <CalendarMonthIcon />,
        link: "/calendar"
    },
    {
        title: "Inbox",
        icon: <EmailIcon />,
        link: "/inbox"
    },
];

export const SidebarDataBottom = [
    {
        title: "Dashboard",
        icon: <GridViewIcon />,
        link: "/dash"
    },
    {
        title: "Boards",
        icon: <WorkIcon />,
        link: "/boards"
    },
    {
        title: "Calendar",
        icon: <CalendarMonthIcon />,
        link: "/calendar"
    },
    {
        title: "Inbox",
        icon: <EmailIcon />,
        link: "/inbox"
    },
    {
        title: "Profile",
        icon: <AccountBoxIcon />,
        link: "/profile"
    },
];
