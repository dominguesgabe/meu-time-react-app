# [meu-time-react-app](https://meu-time-react.netlify.app/) ⚽

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
 3. Nesse momento o app já está rodando em `http://http://localhost:3000/`,
    casso queira fazer alterações e acompanhar no console siga os próximos passos
 4. Entre no container com o comando `docker exec -it react-meu-time bash`
 5. Execute `npm run dev` para iniciar a aplicação em modo de desenvolvimento

##### troubleshooting
Caso tenha problemas com permissão na pasta do projeto (fora do container), rode o comando `sudo chown -R [seuUsuario]:[seuUsuario] .` 

#### Como rodar os testes
 1. Execute `npm run test`
 
  * * *
 
#### Processo de desenvolvimento
 1. **Definir ambiente**: Criei o repositório e tive que buscar alguns tutoriais na internet de como fazer um ambiente docker visto que não tenho muita prática, e então aplicar Vite para a criação da estrutura. Depois disso instalei algumas dependências que quero usar, como o Jest, depois disso comecei a configuração 🤡.
 2. **Ajustes finais no ambiente**: Uma coisa que deixei passar no setup foram as rotas e gerenciamento de estado, por isso adicionei as libs *react-router-dom* e criei páginas necessárias, eu também adicionaria alguma lib de estilos, mas acabei fazendo o css na mão até o momento.
 3. **Iniciando o desenvolvimento**: Eu já fiz a primeira requisição, que será a base da autenticação, e isso foi tranquilo, porém o typescript parece ser a tecnologia dessa stack que estou tendo mais dificuldade, não consegui manter o strict mode ligado e ainda não fiz nenhum teste unitário.
 4. **Segundo dia**: Hoje pretendo implementar autenticação nas rotas. Depois de conversar com outras pessoas percebi que jest não funcionaria bem como testrunner, então decidi trocar para o vitest.
 Não foi possível ir muito longe no dia de hoje devido à implementação da autenticação, especialmente porque o typescript têm me dificultado.
 5. **Terceiro dia**:
