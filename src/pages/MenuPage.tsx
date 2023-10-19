import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardMenu from '../components/CardMenu'
import Footer from '../components/Footer'
import Header from '../components/HeaderMenu'
import RestaurantIntro from '../components/RestaurantIntro'
import { CardGridMenu, GlobalStyles, MainCointainer } from '../styles'
import { Restaurant as RestaurantData } from '../model/restaurant'

const MenuPage = () => {
  const [restaurantData, setRestaurantData] = useState<RestaurantData | null>(
    null
  )
  const [error, setError] = useState<string | null>(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setError(data.message)
        } else {
          setRestaurantData(data)
        }
      })
      .catch((err) => setError('Ocorreu um erro ao carregar os dados.'))
  }, [id])

  if (error) {
    return <p>{error}</p>
  }

  if (!restaurantData) {
    return <p>Loading...</p>
  }

  return (
    <>
      <MainCointainer>
        <GlobalStyles />
        <Header />
        <RestaurantIntro
          image={restaurantData.capa}
          category={restaurantData.tipo}
          name={restaurantData.titulo}
        />
        <CardGridMenu>
          {restaurantData.cardapio.map((item) => (
            <CardMenu
              key={item.id}
              imageSrc={item.foto}
              title={item.nome}
              description={item.descricao}
              serves={`Serve: ${item.porcao}`}
              price={item.preco}
            />
          ))}
        </CardGridMenu>
        <Footer />
      </MainCointainer>
    </>
  )
}

export default MenuPage
