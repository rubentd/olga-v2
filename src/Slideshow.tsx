import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Box from './Box';

const images:string[] = [
  '/slider/1.jpg',
  '/slider/2.jpg',
  '/slider/3.jpg',
  '/slider/4.jpg',
  '/slider/5.jpg',
  '/slider/6.jpg',
  '/slider/7.jpg',
];

const Slideshow = () => {
  return (
    <Box marginTop="-8px" position="relative">
      <Box className="overlay" />
      <Slide>
        {
          images.map((image, index) => (
            <Box
              key={index}
              style={{
                'backgroundImage': `url(${image})`,
                'backgroundSize': 'cover',
                'backgroundPosition': '50% 30%',
                'position': 'relative', 
              }}
              width="100%"
              height="480px"
            />
          ))
        }
      </Slide>
    </Box>
  );
}

export default Slideshow;
