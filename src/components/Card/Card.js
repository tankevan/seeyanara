import { Box } from '@chakra-ui/react'

// Components
import NoteCard from './components/NoteCard'
import StatsCard from './components/StatsCard'

export default function Card({ type, ...props}) {
  let renderCardType
  switch(type) {
    case 'note':
      renderCardType = (<NoteCard {...props} />)
      break
    case 'stats':
      renderCardType = (<StatsCard {...props} />)
      break
    default:
      // skip card if no 'type' defined
      renderCardType = null
      break
  }
  return (
    <>
      <Box className="card" w="sm" borderWidth="1px" borderColor="black" borderRadius="lg">
        {renderCardType}
      </Box>
    </>
  )
}