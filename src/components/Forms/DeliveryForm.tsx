import { useState } from 'react'
import { Button, SideBar } from '../Cart/styles'
import { Input, Label, Title, Container } from './styles'

interface DeliveryFormProps {
  onBackToCart: () => void
  onProceedToPayment: () => void
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({
  onBackToCart,
  onProceedToPayment
}) => {
  const [cliente, setCliente] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')

  return (
    <SideBar>
      <Title>Entrega</Title>

      <Label>Quem irá receber</Label>
      <Input
        type="text"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />

      <Label>
        Endereço
        <Input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
      </Label>

      <Label>
        Cidade
        <Input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
      </Label>

      <Container>
        <Label>
          CEP
          <Input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </Label>

        <Label>
          Numero
          <Input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </Label>
      </Container>

      <Label>
        Complemento (opcional)
        <Input
          type="text"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />
      </Label>
      <Button onClick={onProceedToPayment} style={{ marginTop: '24px' }}>
        Continuar com o pagamento
      </Button>
      <Button onClick={onBackToCart}>Voltar para o carrinho</Button>
    </SideBar>
  )
}

export default DeliveryForm
