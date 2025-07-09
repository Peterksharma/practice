

const hardLimit = 10
let limitCount = 0

const doThing =  () => {
    console.log(limitCount)
}


while (limitCount < hardLimit) {
    doThing(limitCount)
    limitCount++
}

function getLocation(location) {
    
} 