import Card from '../components/Card'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import cardData from '../mocks/cardData'
import { GlobalStyles, CardGrid, MainContainer } from '../styles'

const HomePage = () => {
  return (
    <>
      <Hero />
      <MainContainer>
        <GlobalStyles />
        <CardGrid>
          {cardData.map((card, index) => (
            <Card
              key={index}
              id={card.id}
              imageSrc={card.imageSrc}
              tags={card.tags}
              title={card.title}
              rating={card.rating}
              description={card.description}
            />
          ))}
        </CardGrid>
      </MainContainer>
      <Footer />
    </>
  )
}

export default HomePage
