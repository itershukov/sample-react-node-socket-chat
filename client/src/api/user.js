/**
 * Created by itersh on 08.04.2018.
 */
import io from 'socket.io-client'

const socket = io('/')

socket.on('connect', function () {

  socket.on('message', function (msg) {
    console.log('User event:', msg)
  });
});

export const createUser = (data) =>
  new Promise((res, rej) =>
    socket.emit('users', {type: 'CREATE', body: data}, (r) => {
      r.code === 200
        ? res(r.body)
        : rej(r.body)
    })
  )
