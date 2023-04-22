# Novos desenvolvedores

TL;DR; Para este desafio você precisará construir esta maravilhosa landing page utilizando algum framework Javascript (React, VueJS, Svelte, etc.).

![Etrader Landing](assets/landing.png)

## Descrição
Queremos através deste desafio analisar quais são seus conhecimentos em Javascript (e seus frameworks), HTML e CSS. Você deverá copiar o layout proposto para esta landing page utilizando algum framework conhecido como React, VueJS, Angular, Svelte e por aí vai. E aí, consegue? Então toca ficha e vem trabalhar com a gente! ;)

### Passo a passo
Eis aqui o que você precisa fazer. Vamos lá:
- Faça um fork do projeto
- Faça um ```git clone``` na sua máquina, do repositório criado a partir do fork
- Crie uma ```branch``` com seu nome no formato ```slug-case``` (Ex: ```john-doe```)
- No próprio repo clonado (dentro da sua branch), construa a landing usando React, VueJS, Angular, Svelte, etc.
- Todos os botões da landing não possuem ação
- Utilize as imagens e ícones que estão na pasta ```assets/```
- Fontes utilizadas: [Raleway](https://fonts.google.com/specimen/Raleway) e [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- Para te ajudar, você pode se guiar visualmente pelo Figma usando o arquivo ```assets/landing-figma.fig```
- Substitua a seção **Build da minha landing** deste README.md e insira as instruções do que deve ser feito para fazer sua landing funcionar e a gente ver o resultado
- Assim que concluir, abra um PR no repositório criado a partir do fork, com o título sendo seu nome completo, escrito de maneira normal
- Feito, é só aguardar que vamos analisar e te responder ;)

### Bônus pra quem é bão memo, o bixão
Se você é fera e quiser uma atenção especial, faça algo ou tudo da lista abaixo:
- Utilize Scss/Less
- Utilize alguma biblioteca de ícones (antd, Feather, FontAwesome, etc) via Javascript
- Crie uma API REST em Javascript (usando express, AdonisJS, etc.) que possua apenas uma rota chamada ```/features```. Esta rota deve devolver em formato lista/array as informações dos cards da área lateral direita (fundo laranja). Substitua o contúdo fixo e faça com que a landing consuma desta API e exiba as mesmas informações. Por fim, coloque o código desta API em uma pasta chamada ```api``` e entregue junto. Não se esqueça de colocar as instruções de como iniciar a API localmente na seção **Build da minha landing**

### Build da minha landing
Para rodar o projeto siga os seguintes passos:
1. Verifique e ou instale as dependecias necessarias para o uso do gerenciador de pacotes ```yarn```
    * Para mais informações para esse passo, verificar https://classic.yarnpkg.com/en/
2. Instale as dependencias com o comando ```yarn``` ou ```yarn install```
3. Utilize o comando ```yarn dev``` para executar a aplicação em `http://localhost:3000`
+ Outras informações podem ser encontradas na documentação abaixo (Nuxt 3 Minimal Starter)

### Dúvidas?
[Abra uma Issue e descreva sua dúvida clicando aqui](https://github.com/mybets/challenge/issues/new?labels=question).

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
