import Box from "./Box";
import whiteBg from './img/white-bg-2.png';
import emailIcon from './img/email-icon-outlined.png';
import phoneIcon from './img/phone-icon-black.png';
import locationIcon from './img/location-icon-black.png';

const Contact = () => (
  <Box
    id="contacto"
  >
    <Box
      display="flex"
      flexWrap="wrap"
      minHeight="400px"
    >
      <Box
        width={['100%', '100%', '50%']}
        display="flex"
        justifyContent="flex-end"
        p={4}
      >
        <Box minWidth={['100%', '100%', '400px', '600px']}>
          <form action="https://formcarry.com/s/0POcr846YY" method="POST">
            <h4 style={{ marginBottom: '16px' }}>
              CONTACTO
            </h4>
            <Box mb={1}>Nombre</Box>
            <Box mb={2}>
              <input type="text" />
            </Box>
            <Box mb={1}>Correo</Box>
            <Box mb={2}>
              <input type="email" id="email" name="email" />
            </Box>
            <Box mb={1}>Teléfono</Box>
            <Box mb={2}>
              <input type="text" id="telefono" name="telefono" />
            </Box>
            <Box mb={1}>Asunto</Box>
            <Box mb={2}>
              <input type="text" id="asunto" name="asunto" />
            </Box>
            <Box mb={1}>Mensaje</Box>
            <Box mb={2}>
              <textarea id="mensaje" name="mensaje">
              </textarea>
            </Box>
            <Box mt={2}>
              <button type="submit">
                Enviar
              </button>
            </Box>
          </form>
        </Box>
      </Box>
      <Box
        width={['100%', '100%', '50%']}
        backgroundImage={`url(${whiteBg})`}
        backgroundSize="cover"
        p={4}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <Box mr={3}>
            <img src={emailIcon} alt="email" width="32px" style={{ filter: 'brightness(20%)' }} />
          </Box>
          <h4>
            Email:
          </h4>
        </Box>

        <Box ml="48px" mb={3}>
          direccionob@olgabayone.com
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <Box mr={3}>
            <img src={phoneIcon} alt="phone" width="32px" style={{ filter: 'brightness(20%)' }} />
          </Box>
          <h4>
            Teléfono:
          </h4>
        </Box>

        <Box ml="48px" mb={3}>
          <Box>0241-872-4008</Box>
          <Box>0416-235-3485</Box>
        </Box> 

        <Box display="flex" alignItems="center" mb={2}>
          <Box mr={3}>
            <img src={locationIcon} alt="location" width="32px" style={{ filter: 'brightness(20%)' }} />
          </Box>
          <h4>
            Ubicación:
          </h4>
        </Box>

        <Box ml="48px" mb={3}>
          <Box>Av. Intercomunal Don Julio Centeno,</Box>
          <Box>Urbanización Sansur. San Diego,</Box>
          <Box>Carabobo, Venezuela.</Box>
        </Box>

        <Box ml="48px" display="flex" alignItems="center" mb={2}>
          <h4>
            Rif:
          </h4>
        </Box>

        <Box ml="48px" mb={4}>
          J306066225
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Contact;
