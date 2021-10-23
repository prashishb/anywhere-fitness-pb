import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
  {
    title: 'Dashboard',
    link: '/client',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Class',
    link: '#',
    icon: <SiIcons.SiGoogleclassroom />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Enrolled',
        link: '/client/classes/current',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Available',
        link: '/client/classes/available',
        icon: <RiIcons.RiAddBoxFill />,
      },
    ],
  },
  {
    title: 'Contact Us',
    link: '/#contact',
    icon: <AiIcons.AiFillMail />,
  },
  {
    title: 'Logout',
    link: '#',
    icon: <RiIcons.RiLogoutBoxFill />,
  },
];
