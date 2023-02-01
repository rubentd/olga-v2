import Box from "./Box";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Header from "./Header";
import Footer from "./Footer";
import yellowBg from './img/yellow-bg.png';
import kidsTable from './img/kids-table.png';

const timeline = [
  'Deseamos proyectar una enseñanza de calidad y excelencia a través de la preparación académica sustentada en las últimas innovaciones educativas y tecnológicas. ',
  'Nuestro objetivo es contribuir al desarrollo bio psico social, emocional y espiritual de los alumnos, fomentado la adquisición de experiencias que lo capaciten para desenvolverse satisfactoriamente en situaciones futuras.',
  'Contamos con docentes de la más alta calificación personal, vocacional y profesional que son de modelo y ejemplo para los alumnos. ',
  'Nuestra esencia está basada en el temor a Dios y valores tales como el amor, el perdón, la honestidad, la misericordia y el respeto.',
  'Incentivamos en los estudiantes el aprecio por el aprendizaje significativo y espíritu indagador.',
]

const About = () => {
  return (
    <Box>
      <Header />

      <Box
        py="60px"
        mt="-8px"
        width="100%"
        minHeight="400px"
        backgroundImage={`url(${yellowBg})`}
        backgroundSize="cover"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent={['center', 'space-between']}
      >
        <Box width={['100%', '50%']} display="flex" justifyContent="center">
          <Box
            backgroundImage={`url(${kidsTable})`}
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
        
        <Box p={4} width={['100%', '50%']}>
          <h4>NOSOTROS</h4>
          <Box mt={2} maxWidth="400px" fontSize="24px">
            Somos una institución fundada en el año 2000, la cual es pionera en el ámbito educativo dentro del estado Carabobo.
          </Box>
        </Box>
      </Box>

      <VerticalTimeline lineColor="#333">
        {
          timeline.map(text => (
            
              <VerticalTimelineElement
                key={text}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#eac83f', color: '#333' }}
                contentArrowStyle={{ borderRight: '7px solid  #eac83f' }}
                iconStyle={{ background: '#eac83f', color: '#333' }}
              >
                <Box>
                  { text }
                </Box>
              </VerticalTimelineElement>
            
          ))
        }
      </VerticalTimeline>

      <Footer />
    </Box>
  )
}

export default About;
