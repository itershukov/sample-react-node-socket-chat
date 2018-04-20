/**
 * Created by itersh on 08.04.2018.
 */
import socket from './ws';

export const createUser = data =>
  new Promise((res, rej) =>
    socket.emit('users', { type: 'CREATE', body: data }, r => {
      r.code === 200 ? res(r.body) : rej(r.body);
    })
  );
