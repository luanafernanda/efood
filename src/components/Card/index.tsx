import React from 'react'
import star from '../../images/star.png'
import {
  CardContainer,
  CardImage,
  TagContainer,
  Tag,
  CardContent,
  CardTop,
  CardTitle,
  Rating,
  StarIcon,
  CardDescription,
  LinkButton
} from './styles'

interface CardProps {
  id: number
  imageSrc: string
  tags?: string[]
  title: string
  rating: number
  description: string
}

const Card: React.FC<CardProps> = ({
  id,
  imageSrc,
  tags,
  title,
  rating,
  description
}) => {
  const truncateDescription = (text: string) => {
    const maxWords = 40
    const words = text.split(' ')

    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...'
    }
    return text
  }

  return (
    <CardContainer>
      <CardImage bgImage={imageSrc}>
        <TagContainer>
          {tags && tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
        </TagContainer>
      </CardImage>
      <CardContent>
        <CardTop>
          <CardTitle>{title}</CardTitle>
          <Rating>
            {rating}
            <StarIcon src={star} alt="Rating Star" />
          </Rating>
        </CardTop>
        <CardDescription>{truncateDescription(description)}</CardDescription>
        <LinkButton to={`/menu/${id}`}>Saiba mais!</LinkButton>
      </CardContent>
    </CardContainer>
  )
}

export default Card
