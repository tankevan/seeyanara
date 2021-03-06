import { Box, Divider } from '@chakra-ui/react'

// Components
import NoteCard from './components/NoteCard'

export default function Card({ type, message, from}) {
  let renderCardType
  switch(type) {
    case 'note':
      renderCardType = (<NoteCard message={message} from={from} />)
      break
    default:
      // skip card if no 'type' defined
      renderCardType = null
      break
  }
  return (
    <>
      <Box className="card" maxW="sm" borderWidth="1px" borderColor="black" borderRadius="lg">
        {renderCardType}
      </Box>
    </>
  )
}