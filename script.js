
function send1(){
    var msg = document.getElementById("msg").value
    var SPAN = document.createElement("span")
    var P = document.createElement("p")
    SPAN.id = "left"
    var TXT = document.createTextNode(msg)
    var IMG = document.createElement("img")
    IMG.src = "img-left.jpg"
    SPAN.appendChild(IMG)
    P.appendChild(TXT)
    SPAN.appendChild(P)


    document.getElementById("chat-msgs").appendChild(SPAN)
    document.getElementById("msg").value = ''


}


function send2(){
    var msg = document.getElementById("msg").value
    var SPAN = document.createElement("span")
    var P = document.createElement("p")
    SPAN.id = "right"
    var TXT = document.createTextNode(msg)
    var IMG = document.createElement("img")

    

    IMG.src = "img-right.jpg"
    P.appendChild(TXT)
    SPAN.appendChild(P)
    SPAN.appendChild(IMG)
    
    


    document.getElementById("chat-msgs").appendChild(SPAN)
    document.getElementById("msg").value = ''


}