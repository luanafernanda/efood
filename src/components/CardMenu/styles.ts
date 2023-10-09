import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 320px;
  margin-bottom: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #e66767;
  border: 1px solid #e66767;
`

export const CardImage = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  width: 304px;
  height: 167px;
  margin: 8px auto 0 auto; /* Ajuste da margem */
  position: relative;
`

export const CardContent = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e66767;
  background-color: #e66767;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #e66767;
  text-align: left;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: #ffffff;
  background-color: #e66767;
  margin-top: 8px;
`

export const Button = styled.button`
  width: 100%;
  align-self: center;
  margin-top: 8px;
  background-color: #ffffff;
  color: #e66767;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  border: none;
  cursor: pointer;
`
