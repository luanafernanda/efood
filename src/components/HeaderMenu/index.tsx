import React from 'react'
import logo from '../../images/logo.png'
//import MenuImage from '../../images/capaMenu.png'
import fundoHeader from '../../images/headerMenu.png'
import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  CartDetails,
  Restaurantes,
  Logo,
  ItemContainer,
  ContentWrapper
} from './styles'

const Header: React.FC = () => {
  return (
    <HeaderContainer bg={fundoHeader}>
      <ContentWrapper>
        <ItemContainer>
          <Link to="/">
            <Restaurantes>Restaurantes</Restaurantes>
          </Link>
        </ItemContainer>
        <ItemContainer>
          <Logo src={logo} alt="Logo da Efood" />
        </ItemContainer>
        <ItemContainer>
          <CartDetails>0 produto(s) no carrinho</CartDetails>
        </ItemContainer>
      </ContentWrapper>
    </HeaderContainer>
  )
}

export default Header
