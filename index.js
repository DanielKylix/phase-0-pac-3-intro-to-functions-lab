const shout = (string) => {
return string.toUpperCase ()
}

const whisper = (string) => {
    return string.toLowerCase ()
    }

const logShout = (string) => {
    console.log (string.toUpperCase ())
 }
 const logWhisper = (string) => {
    console.log (string.toLowerCase ())
 }
 const sayHiToHeadphonedRoommate = (string) => {
    if (string.toLowerCase ()) {
        return "I can't hear you!"
    }
    if (string.toUpperCase ())
    {
       return   "YES INDEED!"
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
 }
