// 1(3 points)
let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

var log = {}
var sendMessage = ( message, callback ) =>
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )
getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? key + "[2]" : key
}
var handler = function(message){
    Object.defineProperty(log, getKey(),{value: message})
}
messages.forEach (
    message => sendMessage ( message, handler )
)