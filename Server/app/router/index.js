
import admin from './admin'

export default app => {
    app.get('/', (req, res, next) => {
        res.send('成功');
    });
    app.use('/v1/admin', admin);
}