import { Box } from '@chakra-ui/react'

export default function ImageCard({ filename, caption, key, renderGrid }) {
  // Error handle if filename is not found
  let Image
  try {
    Image = (<img src={require(`../../../../img/${filename}`).default} alt={caption} onLoad={renderGrid} />)
  } catch (err) {
    Image = (
      <Box p="6">
        <img alt="Could not find this file" />
      </Box>
    )
  }

  return (
    <div key={key}>
      {Image}
      <Box p="6">
        {caption}
      </Box>
    </div>
  )
}