/**
 * Created by itersh on 08.04.2018.
 */
const userService = require('./user')
let messages = []

exports.getMessages = () => {
  return messages.map(el => ({...el, nickname: userService.getUser(el.author).nickname}))
}

exports.createMessage = data => {
  const {author, channel, text = ''} = data
  const message = {id: `${Math.random()}`.slice(2), author, text, channel,  ts: Date.now()}
  messages.push(message)
  return this.getMessage(message.id)
}

exports.getMessage = id => {
  return this.getMessages().filter(u => u.id === id)[0]
}
