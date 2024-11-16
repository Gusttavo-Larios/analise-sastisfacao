# Documentação da API

Esta é a documentação das rotas da API do projeto de análise de satisfação de alunos do IFMT campus Rondonópolis. Abaixo, você encontrará informações sobre cada uma das rotas, incluindo o método HTTP, parâmetros e exemplo de resposta.

---

## Rota 1: Criar um novo usuário

**Método HTTP**: `POST`

**Endpoint**: `/api/usuarios`

**Descrição**: Cria um novo usuário com os dados fornecidos.

### Parâmetros de Requisição (Body):

```json
{
  "name": "Nome do usuário",
  "email": "usuario@dominio.com",
  "senha": "senha-secreta"
}
```
