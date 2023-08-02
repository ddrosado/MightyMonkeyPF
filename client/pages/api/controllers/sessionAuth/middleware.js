require('dotenv').config();
import { withIronSession } from 'next-iron-session';
const {SESSION} = process.env

export function withSession(handler) {
  return withIronSession(handler, {
    password: SESSION,
    cookieName: 'mightyMonkey',
    // cookieOptions: {
    //   secure: process.env.NODE_ENV === 'production', // Solo enviar cookies en conexiones HTTPS en producción.
    // },
  });
}


