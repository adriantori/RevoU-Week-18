import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static" style={{ position: 'fixed', bottom: 0 }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="body2" color="textDark">
          Adri Antori ©2023 Created for RevoU Week 18 - Milestone 3 - Just a joke app, hopefully.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
