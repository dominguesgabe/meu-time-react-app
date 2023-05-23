# meu-time-react-app ⚽

 ## Veja dados de Futebol do mundo todo!

Esse app consome a [API Football](https://www.api-football.com/documentation-v3), onde será possível ver dados de times por temporadas, ligas por país. Os dados são:

 - **Jogos**
 - **Vitórias**
 - **Derrotas**
 - **Empates**

* * *
#### Requisitos
 1. Docker
 2. Docker-compose

* * *
#### Como usar
 1. Clone o projeto
 2. Na pasta do projeto execute o comando `docker-compose up -d`
 3. Entre no container com o comando `docker exec -it react-meu-time bash`
 4. Execute `npm run dev` para iniciar a aplicação em modo de desenvolvimento

##### troubleshooting
Caso tenha problemas com permissão na pasta do projeto (fora do container), rode o comando `sudo chown -R [seuUsuario]:[seuUsuario] .` 

#### Como rodar os testes
 1. Execute `npm run test`
 
  * * *
 
#### Processo de desenvolvimento
 1. **Definir ambiente**: Criei o repositório e tive que buscar alguns tutoriais na internet de como fazer um ambiente docker visto que não tenho muita prática, e então aplicar Vite para a criação da estrutura. Depois disso instalei algumas dependências que quero usar, como o Jest, depois disso comecei a configuração 🤡.
