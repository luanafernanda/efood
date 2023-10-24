import React from 'react'
import { Button, SideBar } from '../Cart/styles'
import { Paragrafo, Title } from './styles'

interface OrderConfirmationProps {
  orderId: string
  onConclude: () => void
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  orderId,
  onConclude
}) => {
  return (
    <SideBar>
      <Title>Pedido realizado - {orderId}</Title>
      <Paragrafo>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </Paragrafo>
      <Paragrafo>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </Paragrafo>
      <Paragrafo>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </Paragrafo>
      <Paragrafo>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </Paragrafo>
      <Button onClick={onConclude}>Concluir</Button>
    </SideBar>
  )
}

export default OrderConfirmation
