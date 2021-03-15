import { Box, Container, Heading, Text } from '@chakra-ui/react'

// Components
import ConfettiCanvas from './components/ConfettiCanvas'

export default function StatsCard({ emoji, statistic, statistic_description, key }) {
  return (
    <Container key={key} w="full" centerContent p="12">
      <ConfettiCanvas />
      <Box pb="8">
        <Heading align="center" size="2xl">{emoji}</Heading>
      </Box>
      <Box pb="1">
        <Heading align="center" size="4xl">{statistic}</Heading>
      </Box>
      <Box>
        <Text align="center" color="gray.300" fontWeight="semibold">{statistic_description}</Text>
      </Box>
    </Container>
  )
}