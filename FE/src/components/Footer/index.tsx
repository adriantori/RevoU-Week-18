import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          Adri Antori ©2023 Created for RevoU Week 18 - Milestone 3
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
