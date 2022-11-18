import HomeIcon from '@mui/icons-material/Home';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const sideBarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <HomeIcon />,
  },
  {
    title: 'Project',
    path: '',
    icon: <BeenhereIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: 'Add',
        path: '/project/add',
        icon: <AddCircleOutlineIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <HomeIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <HomeIcon />
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <HomeIcon />
  },
  {
    title: 'Team',
    path: '/team',
    icon: <HomeIcon />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <HomeIcon />,

    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <HomeIcon />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <HomeIcon />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <HomeIcon/>
  }
  // {
  //   title : 'Home',
  //   path : '/',
  //   icon : HomeIcon},
  // {
  //   title : 'Project',
  //   path : '/project',
  //   icon : <BeenhereIcon />,
  //   iconClosed: <ArrowDropDownIcon />,
  //   iconOpened: <ArrowDropUpIcon />,
  //   subNav : [
  //     {
  //       title : 'Add',
  //       path : '/project/add',
  //       icon : <AddCircleOutlineIcon />
  //     }
  //   ]
  // }
]