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
}

const CardMenu: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <CardContainer>
        <CardImage bgImage={imageSrc}></CardImage>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
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
                <p style={{ paddingBottom: '32px' }}>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.
                </p>
                <p>Serve: de 2 a 3 pessoas</p>
              </CardDescription>
              <ButtonText>Adicionar ao carrinho - R$ 60,90</ButtonText>
            </ModalTextContainer>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  )
}

export default CardMenu
