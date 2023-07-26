# Desafio Técnico @ Full Stack Watch

> Este projeto foi realizado como etapa do desafio técnico para a posição de Desenvolvedor Full Stack da Watch Brasil.

## Sobre o projeto

O teste consiste em criar uma aplicação com PHP usando FrameWork Laravel e Mysql que expõe uma API REST de um CRUD de usuários e filmes e uma aplicação web contendo uma interface para login e acesso a dados de uma API externa.

### Implementações

-   Interface de login
-   Feedbacks de usuário ou senha incorreta
-   Listagem dos dados de filmes
-   Listagem dos dados de Usuários
-   Paginação dos dados na API

### Melhorias

-   Autenticação das rotas de consulta por Token
-   Implementação de layout autoral
-   Implementação das funcionalidades de Criação, Atualização e Deleção pela Interface

## Tecnologias utilizadas

-   Laravel PHP framework
-   React.js
-   Typescript
-   Tailwind CSS
-   Axios
-   Date-fns

## Instruções de build

Inicie instalando as dependências do projeto e startando o servidor web

```bash
npm install && npm run dev
```

Inicie o servidor do PHP

```bash
php artisan serve
```

E rode as migrations das tabelas do banco de dados MySQL (é necessário ter instalação previa do MySQL localmente ou utilizar através do Docker)

```bash
php artisan migrate
```

Agora poderá ser utilizado o script de build

```bash
npm run build
```
