import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import BuscaCep from '../components/BuscaCep'

function Busca() {
  const buscaCepRef = useRef()
  const navigate = useNavigate()

  function handleEnderecoEncontrado(endereco) {
    navigate('/resultado', { state: endereco })
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4">Busca de CEP</h1>
      <BuscaCep ref={buscaCepRef} onEnderecoEncontrado={handleEnderecoEncontrado} />
      <Button onClick={() => buscaCepRef.current?.buscarEndereco()}>
        Buscar CEP
      </Button>
    </Container>
  )
}

export default Busca
