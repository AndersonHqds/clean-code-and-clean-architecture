Estrutura dos testes:

Given, When, Then ou Arrange, Act e Assert

Code Smells:

1 - Nomes estranhos

dist, ds, result, movArray, calc, mov

renomear variável OK
renomear função ou metódo OK
renomear arquivo
renomear pasta

2 - Números mágicos

extrair constante
extrair variavel explicativa
extrair enum

3 - Comentários útils

extrair variavel explicativa
extrair método ou função

4 - Código comentado e morto

apagar comentário

5 - Linhas em branco

Apagar linhas em branco

6 - Retornos estranhos (códigos numéricos) - Depende da linguagem

7 - Condições confusas

extrair a condição extensa para uma função ou método
Introduzir cláusulas guarda
consolidar condições

8 - Falta de tratamento de errors ou excesões

Utilizar algum tipo de tratamento de errors/exceptions ou outro tipo de result pattern

9 - Método longo

Quebra de SRP (Single Responsibility principle): Devemos separar coisas que mudam por motivos diferentes
Quebra do OCP (Open / Closed Principle): Devemos estar aberto para extensão e fechados para modificação
