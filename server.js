const express = require('express');

const app = express();

const PORT = 3000;

// Middleware para interpretar requisições em formato JSON
app.use(express.json());

// Rota inicial para testar a API
app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'API Connect está funcionando!'
    });
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});