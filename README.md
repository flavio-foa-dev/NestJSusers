## Description
Desenvolvi uma api REST com NestJS, TypeScript. com Buscas, Validacoes, Serializaacao, type checking e Detalhes de arquiteturais.
Passei por diversos temas que sao referenciado na Documentacao do Nest: Controladores, providers, Modulos, Filtro de Excecao, Pipes, Interceptadores, Decorator, entre outras coisas. Aplicando boas praticas e padroes de projeto

utilizando os Verbos do HTTP, ja fica claro  o que faz aquele Endpoint. Contudo, uma classe controller fica resposnsavel apenas por lidar com comprotocolo HTTP. Assim, fica uma unica responsabilidade do nosso controlador. S-OLID , um dos pilares principais da programacao, que e a Responsabilidade Unica. desta forma, passamos para classe de service, servicos assencial para os controladores

usei  decorator muito importante chamado @Injectable na  classe de servico indicando que a parti agora passou a ser injetavel. Usando a Injecao de Depedencia SOLI-D Com a Inversão de Dependência controle , conseguimos desacoplar nossas classes
O próprio NestJ disponibiliza um recurso chamado de Container IoC, ou “container de inversão de controle” injetarmos um objeto da classe Servic,  assim  sendo um provider um provedor de serviço.
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


