import React, { useState } from 'react'
import { Button, SideBar } from '../Cart/styles'
import { Input, Label, Title, Container } from './styles'

interface PaymentFormProps {
  onFinalizePayment: () => void
  onBackToDelivery: () => void
  totalValue: number
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  onFinalizePayment,
  onBackToDelivery,
  totalValue
}) => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [expiryMonth, setExpiryMonth] = useState('')
  const [expiryYear, setExpiryYear] = useState('')

  return (
    <SideBar>
      <Title>Pagamento - Valor a pagar: R$ {totalValue}</Title>

      <Label>
        Nome do cartão
        <Input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
      </Label>

      <Container>
        <Label>
          Número do cartão
          <Input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Label>

        <Label>
          CVV
          <Input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={3}
          />
        </Label>
      </Container>

      <Container>
        <Label>
          Mês de vencimento
          <Input
            type="text"
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
            maxLength={2}
          />
        </Label>

        <Label>
          Ano de vencimento
          <Input
            type="text"
            value={expiryYear}
            onChange={(e) => setExpiryYear(e.target.value)}
            maxLength={4}
          />
        </Label>
      </Container>

      <Button onClick={onFinalizePayment} style={{ marginTop: '16px' }}>
        Finalizar pagamento
      </Button>
      <Button onClick={onBackToDelivery}>
        Voltar para a edição de endereço
      </Button>
    </SideBar>
  )
}

export default PaymentForm
