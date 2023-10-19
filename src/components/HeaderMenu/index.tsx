import React from 'react'
import logo from '../../images/logo.png'
import fundoHeader from '../../images/headerMenu.png'
import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  CartDetails,
  Restaurantes,
  Logo,
  ItemContainer,
  ContentWrapper,
  LinkItem
} from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer bg={fundoHeader}>
      <ContentWrapper>
        <ItemContainer>
          <LinkItem to="/">
            <Restaurantes>Restaurantes</Restaurantes>
          </LinkItem>
        </ItemContainer>
        <ItemContainer>
          <Logo src={logo} alt="Logo da Efood" />
        </ItemContainer>
        <ItemContainer>
          <CartDetails onClick={openCart}>
            {items.length} - produto(s) no carrinho
          </CartDetails>
        </ItemContainer>
      </ContentWrapper>
    </HeaderContainer>
  )
}

export default Header
