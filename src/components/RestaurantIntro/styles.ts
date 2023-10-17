import styled from 'styled-components'

interface ImageProps {
  image: string
}

export const ImageContainer = styled.div<ImageProps>`
  width: 100%;
  height: 280px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 56px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Categoria = styled.div`
  position: absolute;
  top: 25px;
  left: 170px;
  background-color: transparent;
  font-size: 32px;
  font-weight: 100;
  color: #ffffff;
`
export const RestaurantName = styled.div`
  position: absolute;
  bottom: 32px;
  left: 170px;
  background-color: transparent;
  font-size: 32px;
  font-weight: 900;
  color: #ffffff;
`
