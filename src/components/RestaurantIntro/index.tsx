import { ImageContainer, Categoria, RestaurantName } from './styles'
import imagem from '../../images/capaMenu.png'

const RestaurantIntro: React.FC = () => {
  return (
    <ImageContainer bgImage={imagem}>
      <Categoria>Italiana</Categoria>
      <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
    </ImageContainer>
  )
}

export default RestaurantIntro
