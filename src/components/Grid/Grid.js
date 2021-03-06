import _ from 'lodash'
import { useEffect } from 'react'
import { Container } from '@chakra-ui/react'
import MiniGrid from 'minigrid'

// Components
import Card from '../Card'

// Data
import content from '../../content'

export default function Grid(props) {
  useEffect(() => {
    const renderGrid = () => {
      const grid = new MiniGrid({
        container: '.grid',
        item: '.card',
        gutter: 6,
      })
      grid.mount()
    }

    renderGrid()

    // Minigrid doesn't automatically re-render on resize
    window.addEventListener('resize', renderGrid)
  }, [])

  const cardData = content.cards

  const renderCards = _.map(cardData, (card) => <Card type={card.type} message={card.message} from={card.from} />)

  return (
    <Container className="grid" maxW="full">
      { renderCards }
    </Container>
  )
}