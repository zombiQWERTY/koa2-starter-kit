import compose    from 'koa-compose';
import convert    from 'koa-convert';
import logger     from 'koa-logger';
import cors       from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import session    from 'koa-generic-session';

const corsConfig = () => {
  const accessControlMaxAge = '1200';

  const allowedOrigins = [
    'http://localhost:8080'
  ];

  const accessControlAllowMethods = [
    'OPTIONS',
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'HEAD'
  ];

  const accessControlAllowHeaders = [
    'X-Requested-With',
    'If-Modified-Since',
    'Cache-Control',
    'DNT',
    'X-CustomHeader',
    'Keep-Alive',
    'User-Agent',
    'Content-Type',
    'Authorization',
    'Pragma'
  ];

  return {
    origin:      allowedOrigins,
    methods:     accessControlAllowMethods,
    headers:     accessControlAllowHeaders,
    expose:      'Authorization',
    maxAge:      accessControlMaxAge,
    credentials: true
  };
};

export default function middleware() {
  return compose([
    logger(),
    convert(cors(corsConfig())),
    convert(bodyParser()),
    convert(session())
  ]);
}
