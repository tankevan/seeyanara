import { Container, Heading, useBreakpointValue } from "@chakra-ui/react";

import "./App.scss";

// Components
import Grid from "./components/Grid";
import Footer from './components/Footer';

// Data
import content from "./content";

function App() {
  // Set page title
  document.title = content.page_title

  const HeadingMarginBreakpoints = useBreakpointValue({ base: "12", lg: "24" })

  return (
    <Container maxW="full" centerContent>
      <Heading align="center" as="h1" size="3xl" m={HeadingMarginBreakpoints}>
        {content.page_title}
      </Heading>
      <Grid />
      <Footer />
    </Container>
  );
}

export default App;
