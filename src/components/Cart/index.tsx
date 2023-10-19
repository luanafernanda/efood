import {
  Button,
  CartContainer,
  CartItem,
  CartList,
  Overlay,
  Prices,
  SideBar,
  TrashIcon
} from './styles'
import lixeira from '../../images/lixeira-de-reciclagem 1.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <CartList>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>R$ {item.preco}</span>
                <TrashIcon onClick={() => removeItem(item.id)}>
                  <img src={lixeira} alt="Remover produto" />
                </TrashIcon>
              </div>
            </CartItem>
          ))}
        </CartList>
        <Prices>
          Valor total <span>{getTotalPrice()}</span>{' '}
        </Prices>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
