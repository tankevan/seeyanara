import { Container, Heading } from '@chakra-ui/react'

import './App.scss';


// Components
import Grid from './components/Grid'

// Data
import content from './content'

function App() {
  return (
    <Container centerContent maxW="full">
      <Heading as="h1" size="2xl" m="12">{content.page_title}</Heading>
      <Grid />
    </Container>
  );
}

export default App;
