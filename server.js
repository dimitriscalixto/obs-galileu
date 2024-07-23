const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Simulação de banco de dados em memória
let valorAtual = { valor: 0 };

// Rota para obter o valor atual
app.get('/api/valor', (req, res) => {
    res.json(valorAtual);
});

// Rota para atualizar o valor
app.post('/api/valor', (req, res) => {
    const novoValor = req.body.valor;
    if (novoValor !== undefined) {
        valorAtual.valor = novoValor;
        res.json({ message: 'Valor atualizado com sucesso', valor: valorAtual });
    } else {
        res.status(400).json({ message: 'Valor não fornecido' });
    }
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
