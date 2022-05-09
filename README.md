# Projeto IFSP (API)
API do projeto para pós-graduação no IFSP Itapetininga, 1º sem. 2022
Desenvolvido com TypeScript, Express, TypeORM, Docker, MySQL, MongoDB...
# Requisitos
- Docker v20.10.x^ e Docker-Compose v1.28.x^ (para rodar direto no container)
- Node.js v16.10.x^ (para rodar pelo Terminal)
- Yarn v1.22.x^ (para instalar dependências e rodar scripts)
# Para rodar o projeto
Para rodar localmente com o Docker, copiar o arquivo **.env.example** para **.env.dev** e rodar **docker-compose up -d**; o container da API e os dois bancos de dados irão subir.
para rodar posteriormente sem o Docker, executar **yarn** para instalar as dependências e **yarn dev** para iniciar a API.
# Para buildar o projeto
Executar **yarn build** para gerar uma versão compilada do projeto. Copiar o arquivo **.env.example** para **.env** e executar **yarn start** para iniciar a versão compilada da API.
