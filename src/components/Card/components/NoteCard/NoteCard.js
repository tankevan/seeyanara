import { Box, Divider, Text  } from '@chakra-ui/react'

export default function NoteCard({ message, from }) {
  return (
    <>
      <Box p="6">
        {message}
      </Box>
      {/* <Divider /> */}
      <Box p="6">
        <Text fontWeight="semibold">{from}</Text>
        
      </Box>
    </>
  )
}