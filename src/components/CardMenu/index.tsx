import React, { useState } from 'react'
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  Button,
  CloseButton,
  ModalBackground,
  ModalContent,
  ModalImageContainer,
  ModalTextContainer,
  ModalTitle,
  ButtonText
} from './styles'

interface CardProps {
  imageSrc: string
  title: string
  description: string
  serves: string
  price: number
}

const CardMenu: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  serves,
  price
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const truncateDescription = (text: string) => {
    const maxWords = 25
    const words = text.split(' ')

    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...'
    }
    return text
  }

  return (
    <>
      <CardContainer>
        <CardImage bgImage={imageSrc}></CardImage>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{truncateDescription(description)}</CardDescription>
          <Button onClick={() => setIsModalOpen(true)}>Mais detalhes</Button>
        </CardContent>
      </CardContainer>

      {isModalOpen && (
        <ModalBackground onClick={() => setIsModalOpen(false)}>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>X</CloseButton>
            <ModalImageContainer src={imageSrc} alt="Descrição da imagem" />
            <ModalTextContainer>
              <ModalTitle>{title}</ModalTitle>
              <CardDescription>
                <p style={{ paddingBottom: '32px' }}>{description}</p>
                <p>{serves}</p>
              </CardDescription>
              <ButtonText>
                Adicionar ao carrinho - R$ {price.toFixed(2)}
              </ButtonText>
            </ModalTextContainer>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  )
}

export default CardMenu
