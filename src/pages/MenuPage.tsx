import CardMenu from '../components/CardMenu'
import Footer from '../components/Footer'
import Header from '../components/HeaderMenu'
import RestaurantIntro from '../components/RestaurantIntro'
import pizza from '../images/pizza.png'
import { CardGridMenu, GlobalStyles } from '../styles'

const MenuPage = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <RestaurantIntro />
      <CardGridMenu>
        <CardMenu
          imageSrc={pizza}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
        />
        <CardMenu
          imageSrc={pizza}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
        />
        <CardMenu
          imageSrc={pizza}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
        />
        <CardMenu
          imageSrc={pizza}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
        />
        <CardMenu
          imageSrc={pizza}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
        />
        <CardMenu
          imageSrc={pizza}
          title={'Pizza Marguerita'}
          description={
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
          }
        />
      </CardGridMenu>
      <Footer />
    </>
  )
}

export default MenuPage
