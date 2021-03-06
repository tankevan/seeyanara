import _ from 'lodash'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

export default function MilestoneCard({ milestone_action, milestone_date }) {
  return (
    <Container w="full" centerContent p="12">
      <Box pb="2">
        <Text color="gray.500" fontSize="lg" fontWeight="bold">{milestone_action}</Text>
      </Box>
      <Box>
        <Heading size="3xl">{milestone_date}</Heading>
      </Box>
    </Container>
  )
}