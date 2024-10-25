To create migrations/tables with knex, use the command `yarn knex -- migrate:make table-name`
To run the migrations, use the command `yarn knex -- migrate:latest`
To revert the migration, use the command `yarn knex -- migrate:rollback`

# ROUTES

## RF

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

## RN

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou;
