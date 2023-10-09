import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FFF8F2;
    font-family: 'Roboto', sans-serif;
  }
`
export const CardGrid = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px 80px;
`
export const MainContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

export const CardGridMenu = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`
