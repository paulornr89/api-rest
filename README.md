# api-rest
Modelo de API REST

# BOAS PRÁTICAS

- Utilizar verbos HTTP para requisições.
- Não deixar barra no final do endpoint

### Necessidades para ser RESTful

- _Client-Server_: Separação do cliente e do armazenamento de dados(servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder(response) a requisição(request).

- _Cacheable_: As respostas para uma requisição, deveria ser explícitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa o endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidore estará lidando, para que a requisição seja respondida.

- _Code on demand(opicional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente;

### RESTful

RESTful, é a aplicação dos padrões REST.

## Instalações ##

- yarn init -y

- yarn add express



