import React from 'react'

import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  Button
} from './styles'

interface CardProps {
  imageSrc: string
  title: string
  description: string
}

const CardMenu: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <CardContainer>
      <CardImage bgImage={imageSrc}></CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Button>Adicionar ao carrinho</Button>
      </CardContent>
    </CardContainer>
  )
}

export default CardMenu
