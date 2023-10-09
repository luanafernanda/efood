import styled from 'styled-components'

interface HeaderContainerProps {
  bg: string
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  height: 186px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Restaurantes = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: #e66767;
  background-color: transparent;
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
  position: relative;
  margin: 8px;
`

export const CartDetails = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: #e66767;
  background-color: transparent;
`
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  background-color: transparent;
`

export const ItemContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: transparent;

  &:first-child {
    justify-content: flex-start;
  }

  &:nth-child(2) {
    justify-content: center;
  }

  &:last-child {
    justify-content: flex-end;
  }
`