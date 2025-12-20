const message = ['I', 'love', 'you']
function writeLoveLetter(message, name) {
    message.unshift(name)
    return message
}
let name = "Sakshi"
console.log(writeLoveLetter(message, name));

