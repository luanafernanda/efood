import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`
export const MainCointainer = styled.div`
  max-width: 1336px;
  margin: 0 auto;
  background-color: #fff8f2;
`

export const CardGrid = styled.div`
  width: 1024px;
  display: grid;
  margin-left: 160px;
  margin-right: 160px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 46px 80px;
`

export const CardGridMenu = styled.div`
  width: 1024px;
  margin-left: 170px;
  magin-right: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`
