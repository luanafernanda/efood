import styled from 'styled-components'

type HeroContainerProps = {
  bg: string
}

export const HeroContainer = styled.div<HeroContainerProps>`
  width: 100%;
  height: 360px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 80px;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
  position: relative;
  margin-bottom: 24px;
`

export const StyledH2 = styled.h2`
  position: relative;
  font-size: 36px;
  font-wight: bold;
  margin-top: 64px;
  margin-bottom: 40px;
  background-color: transparent;
  color: #e66767;
  text-align: center;
`
