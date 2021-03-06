import { Box } from '@chakra-ui/react'

// Components
import ImageCard from './components/ImageCard'
import MilestoneCard from './components/MilestoneCard'
import NoteCard from './components/NoteCard'
import StatsCard from './components/StatsCard'

export default function Card({ type, ...props}) {
  let renderCardType
  switch(type) {
    case 'image':
      renderCardType = (<ImageCard {...props} />)
      break
    case 'milestone':
      renderCardType = (<MilestoneCard {...props} />)
      break
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
      <Box boxShadow="sm" className="card" w="90%" minW="200px" maxW="sm" borderWidth="1px" borderColor="black" borderRadius="xl">
        {renderCardType}
      </Box>
    </>
  )
}