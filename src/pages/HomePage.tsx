import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { GlobalStyles, CardGrid, MainCointainer } from '../styles'

interface Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Array<{
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }>
}

const HomePage = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => setRestaurantes(data))
      .catch((error) => console.error('Erro ao buscar os restaurantes:', error))
  }, [])

  return (
    <>
      <MainCointainer>
        <Hero />
        <CardGrid>
          {restaurantes.map((restaurante) => (
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
