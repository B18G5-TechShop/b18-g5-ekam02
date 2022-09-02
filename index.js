const express = require('express');

const app = express();

app.set('port', process.env.PORT || 9000);

app.use(express.json());

app.use('/', (req, res) => {
    res.json({
        message: "¡Hola Mundo! Desde Heroku"
    });
});

app.listen(app.get('port'), () => {
    console.log(`El servidor se desplegó desde el puerto ${app.get('port')}`);
});
