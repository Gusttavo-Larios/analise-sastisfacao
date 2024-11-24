# Documentação da API

Esta é a documentação das rotas da API do projeto de análise de satisfação de alunos do IFMT campus Rondonópolis. Abaixo, você encontrará informações detalhadas sobre cada rota, incluindo o método HTTP, parâmetros, exemplos de requisição e resposta.

# Requisitos

- PostregreSQL - V17
- NodeJS - V20

# Inciar projeto

1. Copie o arquivo `.env.example`, o renomei para `.env`, e informe as credencias do banco de dados.

2. Dentro da pasta do projeto execute o comando `npm i` para instalar as dependências.

3. Dentro da pasta do projeto execute o comando `npm run migration:run` para executar as migrations.

4. Dentro da pasta do projeto execute o comando `npm run start` para inciar a aplicação.

# Rotas da API

## Rota 1: Criar um novo usuário

**Método HTTP**: `POST`

**Endpoint**: `/api/usuarios`

**Descrição**: Cria um novo usuário com os dados fornecidos.

### Parâmetros de Requisição (Body):

```json
{
  "name": "Nome do usuário",
  "email": "usuario@dominio.com",
  "senha": "senha-secreta",
  "turmaId": 0
}
```

### Exemplo de Requisição:

```http
GET /api/usuarios HTTP/1.1
Host: host
```

### Exemplo de Resposta:

```json
{
  "name": "Nome do usuário",
  "email": "usuario@dominio.com",
  "senha": "senha-secreta",
  "turmaId": 0
}
```

### Códigos de Resposta:

- **200 OK**: Requisição bem-sucedida.
- **422 Unprocessable Entity**: Se os parâmetros estiverem em formatos inesperador ou ausentes.
- **500 Internal Server Error**: Se ocorrer um erro inesperado no servidor.

## Rota 2: Autenticar usuário

**Método HTTP**: `POST`

**Endpoint**: `/api/autenticao/autenticar`

**Descrição**: Autenticar um usuário com as credenciais fornecidas.

### Parâmetros de Requisição (Body):

```json
{
  "name": "Nome do usuário",
  "senha": "senha-secreta"
}
```

### Exemplo de Requisição:

```http
GET /api/autenticao/autenticar HTTP/1.1
Host: host
```

### Exemplo de Resposta:

```json
{
  "token": "token-value"
}
```

### Códigos de Resposta:

- **200 OK**: Requisição bem-sucedida.
- **401 Unauthorized**: Usuário não autorizado.
- **422 Unprocessable Entity**: Se os parâmetros estiverem em formatos inesperador ou ausentes.
- **500 Internal Server Error**: Se ocorrer um erro inesperado no servidor.

## Rota 3: Listar todas as turmas

**Método HTTP:** `GET`

**Endpoint:** `/api/turmas`

**Descrição:** Recupera uma lista de todas as turmas cadastradas no sistema. Pode ser filtrada por uma palavra-chave.

### Parâmetros de Requisição (Query Parameters):

| Parâmetro | Tipo   | Descrição                            | Exemplo      |
| --------- | ------ | ------------------------------------ | ------------ |
| keyword   | string | Palavra-chave para filtrar as turmas | "matematica" |

### Exemplo de Requisição:

```http
GET /api/turmas?keyword=matematica HTTP/1.1
Host: host
```

### Exemplo de Resposta:

```json
[
  {
    "id": 1,
    "nome": "1° Ano Administração",
    "ano": 2024,
    "tipoCurso": "ADMINISTRACAO"
  }
]
```

### Códigos de Resposta:

- **200 OK**: Requisição bem-sucedida.
- **401 Unauthorized**: Usuário não autorizado.
- **422 Unprocessable Entity**: Se os parâmetros estiverem em formatos inesperador ou ausentes.
- **500 Internal Server Error**: Se ocorrer um erro inesperado no servidor.

## Rota 4: Buscar última aplicação de questionário

**Método HTTP:** `GET`

**Endpoint:** `/api/questionario/aplicacao/ultimo`

**Descrição:** Recupera a última aplicação de questionário, filtrada pela situação da aplicação (em andamento ou encerrada).

### Parâmetros de Requisição (Query Parameters):

| Parâmetro | Tipo | Descrição                                                            | Exemplo |
| --------- | ---- | -------------------------------------------------------------------- | ------- |
| situacao  | int  | Situação da aplicação: `0` para "EM_ANDAMENTO", `1` para "ENCERRADO" | 0       |

### Exemplo de Requisição:

```http
GET /api/questionario/aplicacao/ultimo?situacao=0  HTTP/1.1
Host: host
```

### Exemplo de Resposta:

```json
{
  "id": 1,
  "dataInicio": "2024-01-01T04:00:00.000Z",
  "dataFim": "2024-01-31T04:00:00.000Z",
  "situacao": "EM_ANDAMENTO"
}
```

### Códigos de Resposta:

- **200 OK**: Requisição bem-sucedida.
- **401 Unauthorized**: Usuário não autorizado.
- **422 Unprocessable Entity**: Se os parâmetros estiverem em formatos inesperador ou ausentes.
- **500 Internal Server Error**: Se ocorrer um erro inesperado no servidor.

## Rota 5: Salvar respostas do questionário

**Método HTTP**: `POST`

**Endpoint**: `/api/questionario/resposta`

**Descrição**: Salvar respostas das perguntas do questionário.

### Parâmetros de Requisição (Body):

```json
{
  "aplicacaoId": 0,
  "respostas": [
    { "perguntaId": 0, "expectativa": 0, "realidade": 0 }
    // mais itens
  ]
}
```

### Exemplo de Requisição:

```http
GET /api/questionario/resposta HTTP/1.1
Host: host
```

### Exemplo de Resposta:

```json
{
  "mensagem": "Respostas salvas com sucesso"
}
```

### Códigos de Resposta:

- **200 OK**: Requisição bem-sucedida.
- **400 Bad Request**: Se alguma regra de negócio for quebrada.
- **422 Unprocessable Entity**: Se os parâmetros estiverem em formatos inesperador ou ausentes.
- **500 Internal Server Error**: Se ocorrer um erro inesperado no servidor.
