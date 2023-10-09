import {
  FooterContainer,
  Logo,
  SocialIcons,
  SocialIcon,
  Disclaimer
} from './styles'
import logoImage from '../../images/logo.png'
import facebookIcon from '../../images/facebook.svg'
import instagramIcon from '../../images/instagram.svg'
import twitterIcon from '../../images/twitter.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logoImage} alt="Logo da efood" />
      <SocialIcons>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={twitterIcon} alt="Twitter" />
        </a>
      </SocialIcons>
      <Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </Disclaimer>
    </FooterContainer>
  )
}

export default Footer
