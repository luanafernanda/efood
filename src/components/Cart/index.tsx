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
import { close, remove, clear } from '../../store/reducers/cart'
import { useState } from 'react'
import DeliveryForm from '../Forms/DeliveryForm'
import PaymentForm from '../Forms/PaymentForm'
import OrderConfirmation from '../Forms/OrderConfirmation'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [currentView, setCurrentView] = useState('cart')

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const totalValue = getTotalPrice()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleProceedToForms = () => {
    setCurrentView('forms')
  }

  const handleBackToCart = () => {
    setCurrentView('cart')
  }

  const handleProceedToPayment = () => {
    setCurrentView('payment')
  }

  const handleBackToDelivery = () => {
    setCurrentView('forms')
  }

  const handleFinalizePayment = () => {
    setCurrentView('confirmation')
  }

  const handleConcludeOrder = () => {
    dispatch(clear())
    setCurrentView('cart')
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {currentView === 'cart' ? (
          <>
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
            <Button onClick={handleProceedToForms}>
              Continuar com a entrega
            </Button>
          </>
        ) : currentView === 'forms' ? (
          <DeliveryForm
            onBackToCart={handleBackToCart}
            onProceedToPayment={handleProceedToPayment}
          />
        ) : currentView === 'payment' ? (
          <PaymentForm
            onBackToDelivery={handleBackToDelivery}
            onFinalizePayment={handleFinalizePayment}
            totalValue={totalValue}
          />
        ) : (
          currentView === 'confirmation' && (
            <OrderConfirmation
              orderId="ORDER12345"
              onConclude={handleConcludeOrder}
            />
          )
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
