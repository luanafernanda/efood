import { ImageContainer, Categoria, RestaurantName } from './styles'

interface RestaurantIntroProps {
  image: string
  category: string
  name: string
}

const RestaurantIntro: React.FC<RestaurantIntroProps> = ({
  image,
  category,
  name
}) => {
  return (
    <ImageContainer image={image}>
      <Categoria>{category}</Categoria>
      <RestaurantName>{name}</RestaurantName>
    </ImageContainer>
  )
}

export default RestaurantIntro
