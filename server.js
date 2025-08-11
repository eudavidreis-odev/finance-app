const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos do React
app.use(express.static(path.join(__dirname, 'build')));

// Rota para redirecionar todas as outras requisições para o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
