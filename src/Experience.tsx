import Box from './Box';
import whiteBg from './img/white-bg.png';
import yellowBg from './img/yellow-bg.png';
import kidsRow from './img/kids-row.png';
import scienceKids from './img/science-kids.png';
import mochila from './img/mochila.png';

const Experience = () => (
  <Box borderTop="8px solid rgba(0, 0, 0, .2)" marginTop="-8px" zIndex="2" position="relative">
    <Box
      width="100%"
      backgroundImage={`url(${whiteBg})`}
      backgroundSize="cover"
    >
      <Box width="100%" maxWidth="1200px" height="100%" margin="0 auto">
        <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" minHeight="380px">
          <Box
            width={['100%', '50%']}
            fontSize="24px"
            maxWidth="480px"
            p={4}
          >
            Contamos con +20 años de experiencia fomentando una educación basada en valores.
          </Box>

          <Box
            width={['100%', '50%']}
            position="relative"
          >

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              height="100%"
              minHeight="400px"
            >
              <img src={mochila} alt="Mochila" width="360px" style={{ position: 'relative', marginTop: '-120px' }} />
              
              <Box
                position="absolute"
                backgroundImage={`url(${kidsRow})`}
                backgroundSize="120%"
                backgroundPosition="center center"
                top="80px"
                width="320px"
                height="320px"
                borderRadius="50%"
                border="8px solid #eac83f"
                boxShadow="0 0 20px rgba(0, 0, 0, .4)"
              >
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box
      width="100%"
      backgroundImage={`url(${yellowBg})`}
      backgroundSize="cover"
    >
      <Box width="100%" maxWidth="1200px" margin="0 auto">
        <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center" minHeight="380px">

          <Box
            width={['100%', '50%']}
            display="flex"
            alignItems="center"
            justifyContent="center"
            py={4}
          >
            <Box
              backgroundImage={`url(${scienceKids})`}
              backgroundSize="120%"
              backgroundPosition="center center"
              width="320px"
              height="320px"
              borderRadius="50%"
              border="8px solid #eac83f"
              boxShadow="0 0 20px rgba(0, 0, 0, .4)"
            >
            </Box>
          </Box>

          <Box
            width={['100%', '50%']}
            fontSize="24px"
            maxWidth="480px"
            p={4}
          >
            Somos una institución fundada en el año 2000, la cual es pionera en el ámbito educativo dentro del estado Carabobo. 
          </Box>
        </Box>
      </Box>
    </Box>
  
  </Box>
);

export default Experience;