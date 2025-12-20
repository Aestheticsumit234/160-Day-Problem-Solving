const message = ['I', 'love', 'you']
function writeLoveLetter(message, name) {
    message.unshift(name)
    return message
}
let name = "Helllo"
console.log(writeLoveLetter(message, name));

