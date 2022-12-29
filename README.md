## Description
<h3>
Desenvolvi uma api REST com NestJS, TypeScript. com Buscas, Validacoes, Serializaacao, type checking e Detalhes de arquiteturais.
Passei por diversos temas que sao referenciado na Documentacao do Nest: Controladores, providers, Modulos, Filtro de Excecao, Pipes, Interceptadores, Decorator, entre outras coisas. Aplicando boas praticas e padroes de projeto
</h3>
<br>
<h3>
Utilizando os Verbos do HTTP ja fica claro  o que faz aquele Endpoint. Contudo, uma classe controller fica resposnsavel apenas por lidar com com protocolo HTTP. Deste modo, fica uma unica responsabilidade do nosso controlador. S-OLID , um dos pilares principais da programacao, que e a Responsabilidade Unica. A classe de service, servira os servicos assencial para os controladores
</h3>
<br>
<h3>
Usei  decorator importante chamado @Injectable indicando que a parti agora passou a ser injetavel, Usando a Injecao de Depedencia. Outro pilar da programacao(Princípio da inversão da dependência), SOLI-D. com a Inversão de Dependência conseguimos desacoplar nossas classes
O próprio NestJ disponibiliza um recurso chamado de Container IoC, ou “container de inversão de controle”
</h3>
<br>
<h3>
Usei class-validator e class-transforme, assim garantindo que os dados estejam no formato esperado pela API. dando a importancia de devolver mesangens coerentes com os erros, fazendo uso ValidationPipe, pude construir decorator customizados.
</h3>

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


