
# FinTechX

ChatBot da empresa fictícia FinTechX
## Tech Stack

**Client:** Nextjs with React, TailwindCSS, Shadcn/ui, zustand and swr

## Rodando Localmente

Clonando o projeto

```bash
  git clone https://github.com/reisjean/fintechx.git
```

Vá para o diretório do projeto

```bash
  cd fintechx
```

Instalar dependências

```bash
  npm install
```

Criar variáveis de ambiente

```bash
  cp .env.example .env.local
```

Preencher variável de ambiente "OPENAI_API_KEY" com a chave de API do OpenAI

```bash
  OPENAI_API_KEY=SUA_CHAVE_AQUI
```

Inicie o servidor

```bash
  npm run start
```


## Rondando testes

Para executar testes unitários

```bash
  npm run test
```

Para executar testes e2e

```bash
  npm run test:e2e
```