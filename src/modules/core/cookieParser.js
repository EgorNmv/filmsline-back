import cookieParser from 'cookie-parser';

export default function parseCookie(app) {
  app.use(cookieParser());
}
