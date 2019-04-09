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

// 2(4 points)
function User ( name ) {
    this.name = name
    var presence = false
	Object.defineProperty(this, 'presense', {
		get: function (){
			return presence ? `${this.name} is present` : `${this.name} is absent`
		},
		set: function(newPresence){
			presence = newPresence + ''
		},
		enumerable: true,
		configurable: true,
		
	})
}

let user = new User ( "Ivan" )
