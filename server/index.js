import express from 'express';
let app = express();

app.get('/*', (req, res) => { res.send('yah');
});

app.listen(3000, ()=> console.log("app...."););