import Box from "./Box";
import logoMedium from './img/logo-medium.png';

const TopLogo = () => {
  return (
    <Box
      textAlign="center"
      backgroundColor="#cecece"
      py="16px"
    >
      <img
        src={logoMedium}
        alt="Olga Bayone"
        width="280px"
      />
    </Box>
  );
}

export default TopLogo;
