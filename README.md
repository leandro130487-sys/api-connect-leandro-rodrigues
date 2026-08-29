API Connect
Objetivo

A API Connect é uma API REST desenvolvida como parte da Experiência Prática II da disciplina de Desenvolvimento Back-end.

O projeto tem como objetivo estabelecer a base de uma aplicação back-end para uma startup de tecnologia que necessita de um serviço responsável pelo gerenciamento de usuários.

Nesta primeira versão, foi estruturado e configurado o servidor HTTP, incluindo a interpretação de requisições no formato JSON e uma rota inicial para validação do funcionamento da aplicação.

O projeto será posteriormente expandido para contemplar as operações completas de gerenciamento de usuários utilizando os princípios da arquitetura REST.

Tecnologias utilizadas
Node.js — ambiente de execução JavaScript no lado do servidor.
Express — framework utilizado para construção da API REST.
Nodemon — ferramenta utilizada durante o desenvolvimento para reinicialização automática do servidor.
JavaScript — linguagem de programação utilizada no desenvolvimento.
JSON — formato utilizado na comunicação entre cliente e servidor.
Git — sistema de controle de versão.
GitHub — plataforma utilizada para hospedagem e versionamento do projeto.
Pré-requisitos

Para executar o projeto localmente, é necessário possuir instalado:

Node.js
npm (Node Package Manager)
Git
Instalação

Clone o repositório utilizando:

git clone https://github.com/leandro130487-sys/api-connect-leandro-rodrigues.git

Entre no diretório do projeto:

cd api-connect-leandro-rodrigues

Instale as dependências:

npm install
Execução

Para iniciar a aplicação em modo de desenvolvimento, utilizando o Nodemon:

npm run dev

Também é possível iniciar a aplicação utilizando o Node.js diretamente:

npm start

Após a inicialização, o servidor ficará disponível em:

http://localhost:3000
Endpoint disponível

Nesta etapa inicial do projeto, foi implementado um endpoint de teste para verificar se o servidor está funcionando corretamente.

Método	Endpoint	Descrição
GET	/	Verifica o funcionamento da API
Exemplo de requisição
GET http://localhost:3000/
Exemplo de resposta
{
  "mensagem": "API Connect está funcionando!"
}

A resposta utiliza o código de status HTTP 200 OK, indicando que a requisição foi processada com sucesso.

Middleware JSON

A aplicação utiliza o middleware express.json() para interpretar automaticamente os dados enviados no corpo das requisições no formato JSON.

app.use(express.json());

Esse recurso será utilizado nas próximas etapas para receber os dados enviados durante as operações de cadastro e atualização de usuários.

Estrutura atual do projeto
api-connect/
│
├── node_modules/
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── server.js

A pasta node_modules contém as dependências instaladas pelo npm e está configurada no .gitignore para não ser versionada no GitHub.

Status do projeto

Em desenvolvimento.

A estrutura inicial do servidor e a configuração do ambiente foram concluídas. As próximas etapas contemplarão a implementação das operações CRUD para gerenciamento de usuários, incluindo cadastro, consulta, atualização e remoção de registros.

Autor

Leandro Rodrigues

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento Back-end.