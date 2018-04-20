/**
 * Created by itersh on 08.04.2018.
 */
const userService = require('./user')
const msgService = require('./message')
let channels = []

exports.getChannels = () => {
  return channels.map(ch => fillChannels(ch))
}

exports.createChannel = data => {
  const {name=''} = data
  const channel = {id: `${Math.random()}`.slice(2), name, users: []}
  channels.push(channel)
  return channel
}

exports.getChannel = id => {
  return channels.filter(u => u.id === id).map(ch => fillChannel(ch))[0]
}

exports.addUserToChannel = (cid, uid) => {
  let channel = this.getChannel(cid)
  const user = userService.getUser(uid)
  if (!channel || !user) return false
  channel.push(user)
  return true
}

function fillChannels(channel) {
  const res = {
    ...channel,
    users: userService.getUsers().filter(u => u.channel === channel.id).length
  }
  return res
}

function fillChannel(channel) {
  const res = {
    ...channel,
    users: userService.getUsers().filter(u => u.channel === channel.id),
    messages: msgService.getMessages().filter(u => u.channel === channel.id)
  }
  return res
}