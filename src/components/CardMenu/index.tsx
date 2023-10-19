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
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Menu } from '../../model/menu'

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

  const dispatch = useDispatch()
  const addToCart = () => {
    const menuItem: Menu = {
      foto: imageSrc,
      nome: title,
      descricao: description,
      porcao: serves,
      preco: price,
      id: Date.now()
    }

    dispatch(add(menuItem))
    dispatch(open())
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
              <ButtonText onClick={addToCart}>
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
