
# FinTechX

ChatBot da empresa fictícia FinTechX

## Interação
- Na tela inicial temos um carrossel funcional com a *apresentação* do chatbot.
- Tocando no botão "Skip" acessamos o chatbot.
- É possível tocar em um dos botões com mensagens pré-definidas (aleatórias) para enviar ao chatbot
- É possível enviar mensagens através do input "envie sua mensagem"
- Tocando no botão de [...] no topo, é possível acessar a página de **Perfil do usuário** (não funcional, apenas layout)

## Tech Stack

**Client:** Nextjs/React, TailwindCSS, Shadcn/ui, Framer Motion, Zustand e SWR

**Tests:** Jest + Testing Library e Cypress

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

Preencher variável de ambiente "OPENAI_API_KEY" com uma chave de API do OpenAI válida

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
