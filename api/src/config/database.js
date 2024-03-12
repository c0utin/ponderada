import Sequelize from 'sequelize';
import { Book } from '../models/Book.js';

const sequelize = new Sequelize({
    dialect: 'postgres', // Alterado para PostgreSQL
    host: 'database-1.c18cukuqyzii.us-east-1.rds.amazonaws.com', // Seu endpoint RDS
    username: 'postgres', // Substitua pelo seu nome de usuário do RDS
    password: '12345678', // Substitua pela sua senha do RDS
    database: '', // Substitua pelo nome do seu banco de dados no RDS
    port: 5432, // Porta padrão do PostgreSQL
    ssl: { rejectUnauthorized: true, ca: '-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUPQ/vXkZj7j9oK9Gb8u5q71zcwMwwDQYJKoZIhvcNAQEL\nBQAwZDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT\nB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjENMAsGA1UE\nCxMETU9QUjEWMBQGA1UEAxMNbG9jYWxob3N0LmNvbTAeFw0yMTAzMTIxMjM0Mzha\nFw0yNTAzMTIxMjM0MzhaMGQxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n\ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y\nYXRpb24xDTALBgNVBAsTBE1PUFIxFjAUBgNVBAMTDWxvY2FsaG9zdC5jb20wggEi\nMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC2yI7Vjqoq4PWfRXTqMsEM/m1H\n5g61kUtrrg/tMsoy+emGVrm6vg4Atqu8kFI+eMMLxOKZ3t6j0TndTBf8ZSVOh8/q\n6XR83eCsyIsNahdj6B4GrjW9VtH5qOX7s1HIdXznh+NfYQKbMtycKCl7xkXpt+xR\n5IQg5ftG9zX8J3p31x6epfRq/bIjrs7Jv7/nd1M+xhWhAGuEfQo0z/k0g/9tdb8N\nr/WyEKKVSwT68FV5Zt8XXuP9jTSCFqL5oCK2bgE5C+NsWSTQIaYI/KEqS5gh0u7w\n8q/LBNK5e1tcfJ97e0tHAWavOiRHyN9k3STXUKwxrJw+WZtTtMl5RTSv2TZ9AgMB\nAAGjggFzMIIByzAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEG\nCCsGAQUFBwMCMB0GA1UdDgQWBBQiEbqDmD0DKX0OaF//uZZT7LM5hjAfBgNVHSME\nGDAWgBRV/3w6rFtu8P8Zu5N0m6NpvfUqCzAdBgNVHQ4EFgQUjWDFVvFFzcbXeKB3\nW+g8tOq3zVUwDgYDVR0PAQH/BAQDAgWgMAwGA1UdEwEB/wQCMAAwHQYDVR0OBBYE\nFF/g7mFwY+gAY7qkCT+xEkJ6+2DeMA0GCSqGSIb3DQEBCwUAA4IBAQB0xL3sAxz\ni2GVVvI41lARITX44MmeCFzeq9B+x0XG3h05sUHHL0xh5xGp0imB1RqUfJnAa2a\n2B+nA3B9x5I4FDaw15w9HTlX6sXJFJtD4NbBbVmrXwN1L5m+pbCVCEQJDCBtlJA\nMwuhAEsz70tZjKo9bZIm7yVnbUtv+IbgIW/1EXLQSKexLBj3J/U0hPkiU3X1whL\nWRNQEM14HQGnd94o/zutBR3z6XfeQ/AOqPnbY7aEq0/6YVqfghwd1fWVfMdrPDK7\nrjp+sdMBoMhY7toVnRSWsTJL4eN7LHOnDwRSbzMC9jUeD8q5f8PHGteHuhRO1Q/v\n4y/WGv+rTJvV\n-----END CERTIFICATE-----\n' },
});

Book.init(sequelize);

(async () => {
    await sequelize.sync({ force: true });
    await Book.create({ name: "The art of computer programming", release: "1968-01-01", pages: "12" });
    await Book.create({ name: "The art of computer programming", release: "1968-01-01", pages: "1231312312" });
})();

export default sequelize;
