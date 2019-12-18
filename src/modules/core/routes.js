import appRouter from '../app/appRouter';
import userRouter from '../user/userRoutes';
import filmRouter from '../film/filmRoutes';
import infoRouter from '../info/infoRoutes';
import adminRouter from '../admin/adminRoutes';

export default function routes(app) {
  app.use('/user', userRouter);
  app.use('/film', filmRouter);
  app.use('/info', infoRouter);
  app.use('/admin', adminRouter);
  app.use('*', appRouter);
}
