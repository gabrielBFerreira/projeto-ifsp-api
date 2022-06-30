# Projeto IFSP (API)
API do projeto para pós-graduação no IFSP Itapetininga, 1º sem. 2022
Desenvolvido com TypeScript, Express, TypeORM, Docker, MySQL, MongoDB, Swagger...
# Requisitos
- Docker v20.10.x^ e Docker-Compose v1.28.x^ (para rodar direto no container)
- Node.js v16.10.x^ (para rodar pelo Terminal)
- Yarn v1.22.x^ (para instalar dependências e rodar scripts)
# Para rodar o projeto
Para rodar localmente com o Docker, copiar o arquivo **.env.example** para **.env**, preencher suas variáveis (obs.: para que a rota de upload de fotos do produto funcione, o usuário deve ter uma conta na Amazon Web Services e colocar suas chaves nos campos *AWS_ACCESS_KEY_ID* e *AWS_SECRET_ACCESS_KEY*), e rodar **docker-compose up -d**; o container da API e os dois bancos de dados irão subir com as diretivas definidas no **.env**.
Para criar o banco de dados MySQL, é possível acessar o container por um gerenciador de bancos de dados (MySQL Workbench, Beekeeper ou DBeaver) utilizando as variáveis do MySQL definidas no **.env**, e executar o script presente em **src/database/scripts/mysql/CreateMySqlDatabase.sql**.
Para rodar posteriormente sem o Docker, executar **yarn** para instalar as dependências (apenas uma vez) e **yarn dev** para iniciar a API.
# Para compilar o projeto
Executar **yarn build** para gerar uma versão compilada da API, e **yarn start** para iniciá-la.
# Para acessar a documentação
Ao iniciar a API, acessar a rota raiz pelo navegador levará o desenvolvedor à documentação, criada no Swagger.
