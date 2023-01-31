import whiteBg from './img/white-bg-2.png';
import Box from "./Box";

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
        width={['100%', '50%']}
        p={4}
      >
        <form action="https://formcarry.com/s/0POcr846YY" method="POST">
          <h4>
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
      <Box
        width={['100%', '50%']}
        backgroundImage={`url(${whiteBg})`}
        backgroundSize="cover"
        p={4}
      >
        Email
      </Box>
    </Box>
  </Box>
)

export default Contact;
