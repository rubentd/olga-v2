import { useState } from 'react';
import { Link } from  "react-router-dom" ;
import Box from "./Box";
import logoMedium from "./img/logo-medium-white-bg.png";
import eduRedLogo from "./img/edured.png";
import phone from './img/phone-icon.png';
import location from './img/location-icon.png';
import email from './img/email-icon.png';
import menuIcon from './img/menu-icon.png';
import closeIcon from './img/close-icon.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Box
      width="100%"
      height="80px"
      borderBottom="8px solid rgba(0, 0, 0, .2)"
      position="relative"
      zIndex="99"
    >
      <Box
        p={2}
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
        position="relative"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box width={['120px', '180px']}>
            <Box
              position="absolute"
              top="8px"
              left={['calc(50% - 50px)', 'calc(50% - 50px)', '16px']}
              zIndex={2}
            >
              <Link to="/">
                <Box
                  width={['100px', '160px']}
                >
                  <img
                    src={logoMedium}
                    alt="Home"
                    width="100%"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .4))'
                    }}
                  />
                </Box>
              </Link>
            </Box>
          </Box>

          <Box display={['none', 'none', 'flex']} alignItems="center" height="60px">
            <Box mr={4}>
              <Link to="/">Inicio</Link>
            </Box>
            <Box mr={4}>
              <Link to="/nosotros">Nosotros</Link>
            </Box>
            <Box mr={4}>
              <a href="/#contacto">Contáctanos</a>
            </Box>
            <Box py={1} px={2} border="2px solid #666" borderRadius="16px">
              <a href="https://edudatos.com/Colegios/Colegio1.asp?CodigoOmad=PD02050812" target="_blank" rel="noopener noreferrer">
                <img src={eduRedLogo} alt="EduRed" width="100px" />
              </a>
            </Box>
          </Box>

          <Box display={['none', 'none', 'flex']}>
            <a href="/#contacto">
              <Box mr={2} backgroundColor="#333" borderRadius="50%" width="32px" height="32px" padding="8px">
                <img src={phone} alt="phone" width="16px" />
              </Box>
            </a>
            <a href="/#contacto">
              <Box mr={2} backgroundColor="#333" borderRadius="50%" width="32px" height="32px" padding="8px">
                <img src={location} alt="location" width="16px" />
              </Box>
            </a>
            <a href="/#contacto">
              <Box mr={2} backgroundColor="#333" borderRadius="50%" width="32px" height="32px" padding="8px">
                <img src={email} alt="email" width="16px" />
              </Box>
            </a>
          </Box>

          <Box display={['block', 'none', 'none']} p={2} onClick={toggleMenu}>
            { menuOpen ? (
              <img src={closeIcon} width="40px" alt="close menu" />
            ) : (
              <img src={menuIcon} width="40px" alt="open menu" />
            )}
          </Box>

          {
            menuOpen && (
              <Box
                position="absolute"
                top="120px"
                left={0}
                width="100%"
                backgroundColor="rgba(0, 0, 0, .6)"
                py={5}
              >
                <Box
                  margin="8px auto"
                  backgroundColor="white"
                  border="2px solid #333"
                  width="200px"
                  textAlign="center"
                  p={2}
                >
                  <Link to="/">Inicio</Link>
                </Box>
                <Box
                  margin="8px auto"
                  backgroundColor="white"
                  border="2px solid #333"
                  width="200px"
                  textAlign="center"
                  p={2}
                >
                  <Link to="/nosotros">Nosotros</Link>
                </Box>
                <Box
                  margin="8px auto"
                  backgroundColor="white"
                  border="2px solid #333"
                  width="200px"
                  textAlign="center"
                  p={2}
                >
                  <a href="/#contacto">Contáctanos</a>
                </Box>
                <Box py={1} width="180px" margin="0 auto" textAlign="center" px={2} border="2px solid #666" borderRadius="16px" backgroundColor="white">
                  <a href="https://edudatos.com/Colegios/Colegio1.asp?CodigoOmad=PD02050812" target="_blank" rel="noopener noreferrer">
                    <img src={eduRedLogo} alt="EduRed" width="100px" />
                  </a>
                </Box>
              </Box>
            )
          }
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
