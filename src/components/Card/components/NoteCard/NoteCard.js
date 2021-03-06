import { Box, Text} from '@chakra-ui/react'

export default function NoteCard({ message, from, key }) {
  return (
    <div key={key}>
      <Box p="6">
        {message}
      </Box>
      <Box py="6" px="6">
        <Text fontWeight="semibold" color="gray.400">{from}</Text>
      </Box>
    </div>
  )
}