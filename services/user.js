/**
 * Created by itersh on 08.04.2018.
 */
let users = []

exports.getUsers = () => {
  return users
}

exports.createUser = data => {
  const {nickname} = data
  const user = {id: `${Math.random()}`.slice(2), nickname, channel: ''}
  users.push(user)
  return user
}

exports.connectUserToChannel = (uid, cid) => {
  const user = this.getUser(uid)
  if (!user) return false
  user.channel = cid;
  return user
}

exports.disconnectUserFromChannel = (uid, cid) => {
  const user = this.getUser(uid)
  if (!user || user.channel !== cid) return false
  return this.connectUserToChannel(uid, '')
}

exports.getUser = id => {
  return users.filter(u => u.id === id)[0]
}