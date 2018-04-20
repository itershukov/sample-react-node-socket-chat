/**
 * Created by itersh on 08.04.2018.
 */
import socket from './ws';

let currentChannel = null;

export const createMessage = data =>
  new Promise(
    (res, rej) =>
      currentChannel
        ? socket.emit(currentChannel, { type: 'MSG', body: data }, r => {
            r.code === 200 ? res(r.body) : rej(r.body);
          })
        : rej({ code: 400, body: { message: 'CONN_ERR' } })
  );

export const createChannel = data =>
  new Promise((res, rej) =>
    socket.emit('channels', { type: 'CREATE', body: data }, r => {
      r.code === 200 ? res(r.body) : rej(r.body);
    })
  );

export const joinChannel = data =>
  new Promise((res, rej) =>
    socket.emit('channels', { type: 'JOIN', body: data }, r => {
      if (r.code === 200) {
        res(r.body);
        currentChannel = r.body.id;
      } else {
        rej(r.body);
      }
    })
  );

export const leaveChannel = data =>
  new Promise((res, rej) =>
    socket.emit('channels', { type: 'LEAVE', body: data }, r => {
      if (r.code === 200) {
        res(r.body);
        currentChannel = null;
      } else {
        rej(r.body);
      }
    })
  );

export const getChannels = data =>
  new Promise((res, rej) =>
    socket.emit('channels', { type: 'GET' }, r => {
      r.code === 200 ? res(r.body) : rej(r.body);
    })
  );

export const getChannel = data =>
  new Promise((res, rej) =>
    socket.emit('channels', { type: 'GET', body: data }, r => {
      r.code === 200 ? res(r.body) : rej(r.body);
    })
  );

export const listenChannel = (eventChannel, id = 'channels') => () =>
  eventChannel(emitter => {
    console.log('start listening', id);
    socket.on(id, data => {
      // dispatch an action with emitter here
      console.log(data);
      return emitter(data);
    });
    // unsubscribe function
    return () => {
      // do whatever to interrupt the socket communication here
    };
  });
