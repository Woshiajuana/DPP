
import config       from './config/config.test'
import router       from './app/router'
import bodyParser   from 'body-parser'
import express      from 'express'
import log          from './tool/log'

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
    log(`服务已经启动，监听端口：${config.PORT}`);
});