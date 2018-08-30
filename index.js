const express = require ('express');
const app = express ();
const orgaos = require('./data/orgaos.json');


app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('', (req, res) => {
    res.render('index', {'orgaos': orgaos});
});

app.get('/Tutorial', (req, res) => {
    res.render('tutorial')
});

app.get('/Carrinho', (req, res) => {
    res.render('Carrinho')
});

app.listen(3000, () => {
    console.log('Servidor Inicializado')
});

