import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Container, Alert } from 'react-bootstrap'

function Resultado() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    return (
      <Container className="py-4">
        <Alert variant="warning">Nenhum endereço foi informado. Volte e faça uma busca.</Alert>
        <Button onClick={() => navigate('/')}>Voltar</Button>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4">Endereço Encontrado</h1>
      <div className="mb-2">
        <strong>Rua:</strong> {state.logradouro || '-'}
      </div>
      <div className="mb-2">
        <strong>Bairro:</strong> {state.bairro || '-'}
      </div>
      <div className="mb-2">
        <strong>Cidade:</strong> {state.localidade || '-'} / {state.uf || '-'}
      </div>
      <Button onClick={() => navigate('/')}>Voltar</Button>
    </Container>
  )
}

export default Resultado
