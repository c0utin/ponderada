import Sequelize from 'sequelize';
import dotenv from 'dotenv';

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

// Criar uma instância do Sequelize para se conectar ao banco de dados PostgreSQL
const sequelize = new Sequelize(process.env.RDS_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false }, // Habilitar SSL para o RDS
  },
});

// Sincronizar a instância do Sequelize com o banco de dados para garantir que os modelos estejam criados
(async () => {
  try {
    await sequelize.sync();
    console.log('Sequelize models synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing Sequelize models:', error);
  }
})();

export default sequelize;
