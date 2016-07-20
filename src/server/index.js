import Koa        from 'koa';
import KeyGrip    from 'keygrip';

import middleware from './middleware';
import auth       from './auth';
import routes     from './routes';

const app = new Koa();

const keys = ['my-secret-key'];
app.keys   = new KeyGrip(keys, 'sha256');

app.use(middleware());
app.use(auth());
app.use(routes());
app.use(ctx => ctx.status = 404);

export default app;
