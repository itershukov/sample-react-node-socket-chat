/**
 * Created by itersh on 08.04.2018.
 */
let messages = []

exports.getMessages = () => {
  return messages
}

exports.createMessage = data => {
  const {author, channel, text = ''} = data
  const message = {id: `${Math.random()}`.slice(2), author, text, channel,  ts: Date.now()}
  messages.push(message)
  return message
}

exports.getMessage = id => {
  return messages.filter(u => u.id === id)[0]
}
