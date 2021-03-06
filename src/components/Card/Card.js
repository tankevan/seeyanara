import { Box } from '@chakra-ui/react'

export default function Card({ type, message, from}) {
  return (
    <>
      <Box className="card" maxW="sm" borderWidth="1px" borderColor="black" borderRadius="lg" p="6">
        <Box>
          {type}
        </Box>
        <Box>
          {message}
        </Box>
        <Box>
          {from}
        </Box>
      </Box>
    </>
  )
}