// main background

// background = function(){
// 	lebar = $(window).width()
// 	tinggi = $(window).height()
// 	if (tinggi > lebar){
// 		$('.background img').css({
// 			height: '100%',
// 			width: 'auto'
// 		})
// 	} else {
// 		$('.background img').css({
// 			height: 'auto',
// 			width: '100%'
// 		})
// 	}
// }
// background()
// $(window).resize(function(){
// 	background()
// })

// main masonry

$('.grid').masonry({
	itemSelector: '.grid-item'
})

// tampilkan menu setelah mengklik 'makan'

$('.tampilan_2').hide()
$('.makan').click(function(){
	$('.tampilan_1').hide()
	$('.tampilan_2').show()
})
$('.kembali').click(function(){
	$('.tampilan_1').show()
	$('.tampilan_2').hide()
})

// suara

suara = function(x){
	$('.'+x).click(function(){
		AndAud.playAudio("suara/"+x+".mp3");
	})
}
suara('makan')
suara('minum')
suara('kamar-mandi')
suara('telor')
suara('ayam')
suara('nasi-goreng')
suara('mi')
suara('bakso')
suara('donat')