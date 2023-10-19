import Card from '../components/Card'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { CardGrid, MainCointainer } from '../styles'
import { useGetAllRestaurantsQuery } from '../services/api'

const HomePage = () => {
  const { data: restaurantes, error, isLoading } = useGetAllRestaurantsQuery()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Erro ao buscar os restaurantes.</p>
  }
  return (
    <>
      <MainCointainer>
        <Hero />
        <CardGrid>
          {restaurantes?.map((restaurante) => (
            <Card
              key={restaurante.id}
              id={restaurante.id}
              imageSrc={restaurante.capa}
              tags={[restaurante.tipo]}
              title={restaurante.titulo}
              rating={restaurante.avaliacao}
              description={restaurante.descricao}
            />
          ))}
        </CardGrid>
        <Footer />
      </MainCointainer>
    </>
  )
}

export default HomePage
