(function($) {
	var s,
	spanizeLetters = {
	  settings: {
		letters: $('.js-spanize'),
	  },
	  init: function() {
		s = this.settings;
		this.bindEvents();
	  },
	  bindEvents: function(){
		s.letters.html(function (i, el) {
		  //spanizeLetters.joinChars();
		  var spanizer = $.trim(el).split("");
		  return '<span>' + spanizer.join('</span><span>') + '</span>';
		});
	  },
	};
	spanizeLetters.init();
  })(jQuery);

  function testResults (form) {
	var TestVar = form.inputbox.value;
	console.log(TestVar)
	if (TestVar == "yrp" || TestVar == "YRP") {
		window.location.href = "pageS3.html";
	}else{
		window.location.href = "pageF3.html";
  }
}
