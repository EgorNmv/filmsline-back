import todoRouter from '../todo/todoRoutes';
import infoRouter from '../info/infoRoutes';
import appRouter from '../app/appRouter';

export default function routes(app) {
  app.use('/todo', todoRouter);
  app.use('/info', infoRouter);
  app.use('*', appRouter);
}
