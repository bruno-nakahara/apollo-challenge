<h1>Apollo-Challenge</h1>

<h2>Como é a aplicação?</h2>

<p>Projeto que cria, mostra e remove produtos</p>

<h2>Tecnologias e ferramentas</h2>

<ul>
  <li>ReactJS</li>
  <li>Javascript</li>
  <li>TypeScript</li>
  <li>Zustand</li>
  <li>Antd</li>
  <li>React Router Dom</li>
  <li>Axios</li>
  <li>Express</li>
  <li>Mongoose</li>
  <li>Swagger</li>
</ul>

<h2>Instalação e uso</h2>

<h3>Requisitos</h3>
<p>No seu computador tem que ter o <a href="https://nodejs.org/pt-br/download/](https://nodejs.org/en/download">Node</a> e o <a href="https://www.mongodb.com/try/download/community">MongoDB</a> instalado.</p>

<p>Cria uma pasta onde irá baixar os códigos. Após criar a pasta siga os passos abaixo:</p>

```
# No terminal da pasta criada, copie o repositório com o seguinte comando
$ git clone https://github.com/bruno-nakahara/apollo-challenge.git

# Após clonar o repositório, pelo terminal, entra na pasta usando o comando
$ cd apollo-challenge

# Para entrar na pasta do frontend ou backend digite o comando a seguir
$ cd frontend
# Ou
$ cd backend

# Se entrou na pasta do backend crie um arquivo .env e adicione os dados a seguir
$ PORT=3333
$ MONGO_DB_URL=mongodb+srv://test:test123@cluster0.j6pmsu4.mongodb.net/?retryWrites=true&w=majority

# Já foi criado uma conta teste no MongoDB para ser usado na avaliação

# Instale as dependências utilizando o comando tanto para aplicação frontend e backend
$ npm install

# Se tem todas as dependências, então rode a aplicação com
$ npm run dev

# Acesse a página "http://localhost:3333/api-docs" para visualizar a documentação da aplicação no backend

# e pronto! A Aplicação rodando.

```

<p>Na aplicação do backend </p>

<p>Se no backend não está utilizando a porta 3333 para rodar a aplicação, vá até a pasta frontend/src/config e modifica a porta da API_BASE_URL do arquivo env.ts.</p>

<p>Respondendo as perguntas do teste:</p>

<p>1 - What would be your first improvements if you had more implementation time?</p>

<p>No frontend adicionaria documentação(storybook e etc.) e teste para melhorar a segurança na hora do desenvolvimento. Para o backend adicionaria um crud da tabela de categoria do produto, pois se acontecer alguma alteração no valor de desconto oos produtos novos vão utilizar os valores atualizados.</p>

<p>2 - Thinking about your solution, how would maintenance be in case of adding new product categories? What would need to be changed?</p>

<p>Precisaria adicionar um crud da tabela de categorias do produto no backend, pois a tabela já foi criada durante o desenvolvimento, com dados como nome da categoria e o valor do desconto para cada categoria.</p>

<p>3 - What changes would need to be made to support updates in the product category's discount percentage so that whenever the discount percentage was changed, the new price would be reflected in all products of the same category?</p>

<p>Na hora de atualizar o valor do desconto da categoria do produto, na mesma operação atualizar o valor do preço de cada produto com a mesma categoria. Ou criar um script que roda algumas vezes durante o dia/semana/mês, vai depender da frequência de atualização do valor, para atualizar o valor do preço.</p>
