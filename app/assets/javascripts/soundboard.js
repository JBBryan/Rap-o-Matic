$(document).ready(function(){

$(".rapper-container").hover(function(){
  $('img', this).first().toggleClass('hidden', [1000])
})

$(".rapper-container").on('click', function(){
  $('audio', this).get(0).play()
})

})
