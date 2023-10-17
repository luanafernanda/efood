import styled from 'styled-components'

type HeroContainerProps = {
  bg: string
}

export const HeroContainer = styled.div<HeroContainerProps>`
  max-width: 100%;
  height: 360px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 80px;
  background-image: url(${(props) => props.bg});
  object-fit: cover;
`

export const Logo = styled.img`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 70px;
  background-color: transparent;
`

export const StyledH2 = styled.h2`
  position: relative;
  font-size: 36px;
  font-wight: bold;
  margin-top: 69px;
  margin-bottom: 40px;
  background-color: transparent;
  color: #e66767;
  text-align: center;
`
