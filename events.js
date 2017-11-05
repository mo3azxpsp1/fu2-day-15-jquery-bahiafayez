$("#button1").click(function() {
      $('#toggle1').css('display','block');
      $('#toggle2').css('display','none');
      $('#toggle3').css('display','none');
    });

$("#button2").click(function() {
      $('#toggle1').css('display','none');
      $('#toggle2').css('display','block');
      $('#toggle3').css('display','none');
    });

$("#button3").click(function() {
      $('#toggle1').css('display','none');
      $('#toggle2').css('display','none');
      $('#toggle3').css('display','block');
    });


$("input").on('keyup', function() {
	var value = document.getElementById('password').value;
	if (value.length >= 8) {
		$('#correct').css('display','inline');
		$('#wrong').css('display','none');
	}
	
});