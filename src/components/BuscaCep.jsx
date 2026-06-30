import { forwardRef, useImperativeHandle, useState } from 'react'
import { Alert, Form, InputGroup, Spinner } from 'react-bootstrap'

function BuscaCep({ onEnderecoEncontrado }, ref) {
  const [cep, setCep] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  useImperativeHandle(ref, () => ({
    buscarEndereco: async () => {
      const cepSemMascara = cep.replace(/\D/g, '')

      if (!/^[0-9]{8}$/.test(cepSemMascara)) {
        setErro('Informe um CEP válido com 8 dígitos.')
        return
      }

      setErro('')
      setCarregando(true)

      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepSemMascara}/json/`)
        const data = await response.json()

        if (data.erro) {
          setErro('CEP não encontrado.')
          return
        }

        onEnderecoEncontrado(data)
      } catch (err) {
        setErro('Erro ao buscar o CEP. Tente novamente.')
      } finally {
        setCarregando(false)
      }
    },
  }))

  return (
    <Form className="mb-3">
      {erro && <Alert variant="danger">{erro}</Alert>}
      <Form.Label htmlFor="cepInput">CEP</Form.Label>
      <InputGroup>
        <Form.Control
          id="cepInput"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(event) => setCep(event.target.value)}
          maxLength={9}
          aria-label="CEP"
        />
        {carregando && (
          <InputGroup.Text>
            <Spinner animation="border" size="sm" />
          </InputGroup.Text>
        )}
      </InputGroup>
    </Form>
  )
}

export default forwardRef(BuscaCep)
