$( "#move" ).on( "mousemove", function( event ) {
    $("#treno").show().css({left:event.pageX, top:event.pageY } )
})
$( "#move" ).on('mouseleave',function(){
$('#treno').hide()
})

// const button = document.querySelector("button");
// const audio = document.querySelector("audio");

// button.addEventListener("click", function() {
//   audio.play()
// });


lista_acordes = ["C.wav", "D.wav", "E.wav"];

function tocar() {
  var som = document.getElementById("audio");
  som.src = lista_acordes[1];
  som.play();
  console.log(som);
}