import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 320px;
  margin-bottom: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #e66767;
`

export const CardImage = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  width: 304px;
  height: 167px;
  margin: 8px auto 0 auto;
  position: relative;
`

export const CardContent = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: #e66767;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  background-color: #e66767;
  color: #ffffff;
  text-align: left;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-top: 8px;
  background-color: #e66767;
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

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
`

export const ModalContent = styled.div`
  background-color: #e66767;
  display: flex;
  position: relative;
  padding: 32px;
`

export const ModalImageContainer = styled.img<{ src: string }>`
  max-width: 280px;
  width: 100%;
  height: 280px;
  object-fit: cover;
`
export const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 8px;
  background-color: #e66767;
  color: #ffffff;
`

export const ModalTextContainer = styled.div`
  padding-left: 20px;
  max-width: 690px;
  background-color: #e66767;

  p {
    padding-right: 12px;
    padding-bottom: 16px;
    font-size: 14px;
    background-color: #e66767;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
  color: #ffffff;
`
export const ButtonText = styled.button`
  border: none;
  width: 218px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  color: #e66767;
`

export const ModalButton = styled.button`
  width: 218px;
  height: 24px;
  background-color: #e66767;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
