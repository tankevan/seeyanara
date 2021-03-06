import { Box, Divider } from '@chakra-ui/react'

export default function NoteCard({ message, from }) {
  return (
    <>
      <Box p="6">
        {message}
      </Box>
      <Divider />
      <Box p="6">
        {from}
      </Box>
    </>
  )
}