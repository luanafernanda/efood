import { HeroContainer, Logo, StyledH2 } from './styles'
import fundo from '../../images/hero.png'
import logo from '../../images/logo.png'

const Hero = () => {
  return (
    <HeroContainer bg={fundo}>
      <Logo src={logo} alt="Efood logo" />
      <StyledH2>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </StyledH2>
    </HeroContainer>
  )
}

export default Hero
