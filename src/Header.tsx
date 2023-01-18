import { Link } from  "react-router-dom" ;
import Box from "./Box";
import logoSmall from "./img/logo-small.png";
import eduRedLogo from "./img/edured.png";
import phone from './img/phone-icon.png';
import location from './img/location-icon.png';
import email from './img/email-icon.png';

const Header = () => {
  return (
    <Box p={2} width="100%" maxWidth="1200px" margin="0 auto">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Link to="/">
            <img src={logoSmall} alt="Home" width="48px" />
          </Link> 
        </Box>

        <Box display="flex" alignItems="center" height="60px">
          <Box mr={2}>
            <Link to="/">Inicio</Link>
          </Box>
          <Box mr={2}>
            <Link to="/nosotros">Nosotros</Link>
          </Box>
          <Box mr={2}>
            <Link to="/#contacto">Contáctanos</Link>
          </Box>
          <Box>
            <img src={eduRedLogo} alt="EduRed" width="100px" />
          </Box>
        </Box>

        <Box display="flex">
          <Box mr={2} backgroundColor="#333" borderRadius="50%" width="32px" height="32px" padding="8px">
            <img src={phone} alt="phone" width="16px" />
          </Box>
          <Box mr={2} backgroundColor="#333" borderRadius="50%" width="32px" height="32px" padding="8px">
            <img src={location} alt="location" width="16px" />
          </Box>
          <Box mr={2} backgroundColor="#333" borderRadius="50%" width="32px" height="32px" padding="8px">
            <img src={email} alt="email" width="16px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
