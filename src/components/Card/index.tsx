import React from 'react'
import { Link } from 'react-router-dom'
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
  StyledButton
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
        <CardDescription>{description}</CardDescription>
        {/*<Link to={`/menu/${id}`}> */}
        <Link to="/menu">
          <StyledButton>Saiba mais!</StyledButton>
        </Link>
      </CardContent>
    </CardContainer>
  )
}

export default Card
