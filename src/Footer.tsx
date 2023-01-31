import Box from "./Box";
import logoMedium from "./img/logo-medium-white-bg.png";

const Footer = () => (
  <Box
    backgroundColor="#dedede"
    width="100%"
    p={4}
  >
    <Box mb={1} fontSize="14px">
      Unidad Educativa Olga Bayone de Rodríguez.
    </Box>
    <Box mb={2} fontSize="14px">
      Todos los derechos reservados 2023.
    </Box>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img src={logoMedium} alt="U.E. Olga Bayone" style={{
        width: '80%',
        maxWidth: '328px',
      }} />
    </Box>
  </Box>
)

export default Footer;
