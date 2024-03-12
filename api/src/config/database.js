import Sequelize from 'sequelize';
import { Book } from '../models/Book.js';

const sequelize = new Sequelize({
    dialect: 'postgres', // Alterado para PostgreSQL
    host: 'database-1.c18cukuqyzii.us-east-1.rds.amazonaws.com', // Seu endpoint RDS
    username: 'postgres', // Substitua pelo seu nome de usuário do RDS
    password: '12345678', // Substitua pela sua senha do RDS
    database: '', // Substitua pelo nome do seu banco de dados no RDS
    port: 5432, // Porta padrão do PostgreSQL
});

Book.init(sequelize);

(async () => {
    await sequelize.sync({ force: true });
    await Book.create({ name: "The art of computer programming", release: "1968-01-01", pages: "12" });
    await Book.create({ name: "The art of computer programming", release: "1968-01-01", pages: "1231312312" });
})();

export default sequelize;
