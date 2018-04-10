
import config       from './config/env_config'
import router       from './router/index'
import bodyParser   from 'body-parser';
import express      from 'express';

const app = express();

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    req.method === 'OPTIONS' ? res.send(200) : next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use((err, req, res, next) => {
    res.status(404).send('未找到当前路由');
});

app.listen( config.PORT, () => {
    console.log('success listen…………');
});