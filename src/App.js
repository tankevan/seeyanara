import { Container, Heading } from '@chakra-ui/react'

// Components
import Grid from './components/Grid'

// Data
import content from './content'

function App() {
  return (
    <Container centerContent maxW="full">
      <Heading m="12">{content.page_title}</Heading>
      <Grid />
    </Container>
  );
}

export default App;
