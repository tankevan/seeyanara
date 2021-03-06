import { Box, Container, Heading, Text } from '@chakra-ui/react'

export default function StatsCard({ emoji, statistic, statistic_description }) {
  return (
    <Container w="full" centerContent p="12">
      <Box pb="8">
        <Heading size="2xl">{emoji}</Heading>
      </Box>
      <Box pb="1">
        <Heading size="4xl">{statistic}</Heading>
      </Box>
      <Box>
        <Text color="gray.500" fontWeight="semibold">{statistic_description}</Text>
      </Box>
    </Container>
  )
}