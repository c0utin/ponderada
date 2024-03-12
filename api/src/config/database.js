import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Sequelize instance for connecting to a PostgreSQL database using ElephantSQL.
 * It utilizes environment variables for configuration.
 *
 * @type {Sequelize} - Sequelize instance
 */
const sequelize = new Sequelize(process.env.RDS_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false }, // Enable SSL for RDS
  },
});

/**
 * Synchronize the Sequelize instance with the database.
 * This ensures that the defined models are created in the database.
 *
 * @function
 * @async
 */
(async () => {
  await sequelize.sync();
})();

export default sequelize;
