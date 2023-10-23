import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HighlightIcon from '@mui/icons-material/Highlight';
import ScheduleIcon from '@mui/icons-material/Schedule';

const items = [
  {
    label: 'Fullstack ToDo list application',
    icon: <AddBoxIcon />,
  },
  {
    label: 'Adri Antori',
    icon: <HighlightIcon />,
  },
  {
    label: 'Milestone 3',
    icon: <ScheduleIcon />,
  },
];

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'center' }}>
        {items.map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
            {item.icon}
            <Typography variant="body1">{item.label}</Typography>
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
