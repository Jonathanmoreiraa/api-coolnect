# CoolConect API
'colocar resumo'

## Tecnologias Principais

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL.
- **TypeScript**: Linguagem de programação tipada.
- **Swagger UI Express**: Ferramenta para documentação e teste de APIs.
- **Mongoose**: Biblioteca para modelagem de objetos MongoDB.
- **Celebrate**: Middleware para validação de dados.
- **Express Async Errors**: Tratamento de erros assíncronos no Express.
- **tsyringe**: Biblioteca de injeção de dependência.

## Scripts

- `build`: Compila o código TypeScript para a pasta `dist`.
- `start`: Inicia o servidor Node.js a partir do diretório `dist`.
- `dev`: Inicia o servidor Node.js em modo de desenvolvimento, com reinicialização automática.
- `test`: Comando para executar testes (ainda não implementados).
- `typeorm`: Comando para executar a CLI do TypeORM.

## Instalação e Uso

1. **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/"colocar_reposito.git"
cd lab-equester-manager-api
```
2. **Instale as dependências:**:
```bash
npm install
ou
yarn
```
2. **Configure as variáveis de ambiente:**:
- Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
Certifique-se de configurar corretamente a MONGODB_URI com sua própria URL do MongoDB.
```bash
PORT=3000
MONGODB_URI=sua_url_de_conexão_com_o_MongoDB
```
3. **Execute o servidor em modo de desenvolvimento:**:
```bash
npm run dev
yarn dev
```

3. **Acesse a documentação da AP:**:
- Após iniciar o servidor, a documentação Swagger estará disponível em:
```bash
http://localhost:3000/api-docs
```

## Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:
```bash
rst-pista-api/
│
├── dist/                 # Código compilado
├── src/                  # Código-fonte TypeScript
│   ├── configs/          # Configurações da aplicação
│   ├── functions/        # Funções da aplicação
│   │   └── points/       # Pontuação
│   ├── infra/            # Infraestrutura
│   │   ├── entities/     # Entidades
│   │   └── http/         # Camada HTTP
│   │       ├── controller/  # Controladores HTTP
│   │       └── routes/      # Rotas HTTP
│   ├── interfaces/       # Interfaces da aplicação
│   │   └── Responses/    # Respostas
│   ├── services/         # Serviços da aplicação
│   └── shared/           # Compartilhado
│       ├── errors/       # Erros
│       ├── infra/        # Infraestrutura compartilhada
│       │   └── http/     # Camada HTTP compartilhada
│       │       └── mongodb/  # MongoDB
│       └── http/         # Camada HTTP compartilhada
│           ├── controller/  # Controladores HTTP compartilhados
│           └── routes/      # Rotas HTTP compartilhadas
│
├── .env                  # Arquivo de configuração de variáveis de ambiente
├── .editorconfig         # Configuração do editor
├── .eslintignore         # Arquivos e diretórios a serem ignorados pelo ESLint
├── .eslintrc.json        # Configuração do ESLint
├── .gitignore            # Arquivos e diretórios a serem ignorados pelo Git
├── LICENSE               # Licença do projeto
├── package.json          # Lista de dependências e scripts
├── prettier.config.js    # Configuração do Prettier
├── README.md             # Informações sobre o projeto
└── tsconfig.json         # Configuração do TypeScript



```
