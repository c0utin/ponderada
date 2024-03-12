import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:12345678@database-1.c18cukuqyzii.us-east-1.rds.amazonaws.com/', {
  dialect: 'postgres',
  host: 'database-1.c18cukuqyzii.us-east-1.rds.amazonaws.com',
  port: 5432,
  dialectOptions: {
    ssl: { // Defina a opção SSL corretamente
      require: true,
      rejectUnauthorized: false // ou true, dependendo da configuração do seu banco de dados
    },
  },
  logging: console.log,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

export default sequelize;
