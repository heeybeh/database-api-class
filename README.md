# database-api-class
Olá Alunos, esse é um exemplo da tarefa dada em aula.

Obs:. Esse projeto está usando um open cluster do mongoDB. 

**Mongo Cloud**: [Create a Cluster](https://cloud.mongodb.com/).
**Mongo Compass**: [Install docker](https://www.mongodb.com/try/download/compass/).

**Instalar Docker**: [Install docker](https://docs.docker.com/get-docker/).

**Habilitar para deploy no k8s**: [Deploy on Kubernetes](https://docs.docker.com/docker-for-windows/kubernetes/).

## RUN IT

Para rodar no nosso localhost vamos utilizar 2 comando.

**Building**:

```sh
docker build -t yourusername/ourapp
```
**Running**:
```sh
docker run -p 3000:3000 -d yourusername/ourapp
```
