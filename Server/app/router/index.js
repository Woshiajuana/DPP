
import admin from './admin'

export default app => {
    app.use('v1/admin', admin);
}