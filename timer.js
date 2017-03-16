var time = process.argv[2]
var countdown = 0

if (time.includes("s")){
   countdown = parseInt(time.replace("s",""))
} else if (time.includes("min")){
   countdown = parseInt(time.replace("min","")) * 60
}


var interval= setInterval(function(){
  countdown--
  console.log(`Left: ${countdown}s`)

  if (countdown === 0 ){
    clearInterval(interval)
    process.exit(0)
  }
},1000)
