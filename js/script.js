window.onload = function() {
	scroll();
}
if(document.querySelector('.header')) {
	function scroll() {
		document.querySelector('.header').style.height=parseInt(document.querySelector('.header .main-menu').offsetHeight)+'px';
		scroll = document.body.scrollTop;
		window.addEventListener('scroll', function() {
			scroll = window.pageYOffset || document.documentElement.scroll;

			scr = scroll > 0 ? document.querySelector('.header .main-menu').classList.add('fixed') : document.querySelector('.header .main-menu').classList.remove('fixed');
		});
	}
}
if(document.querySelector('#feedback-form')) {
	document.querySelector('#feedback-form').addEventListener('submit', function(evt){
		var http = new XMLHttpRequest(), f = this;
		evt.preventDefault();
		http.open("POST", "js/feedback-form.php", true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.send("&email=" + f.email.value + "&subject=" + f.submit.value);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				alert(http.responseText + 'Инструкция отправлена Вам на почту.\nБлагодарим за интерес к нашему продукту!');    
			}
		}
		http.onerror = function() {
			alert('Извините, данные не были переданы. Попробуйте другой способ связи.');
		}
		window.location = 'thanks.html';
	}, false);
}
if(document.querySelector('#feedback-form1')) {
	document.querySelector('#feedback-form1').addEventListener('submit', function(evt){
		var http = new XMLHttpRequest(), f = this;
		evt.preventDefault();
		http.open("POST", "js/feedback-form.php", true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.send("&email=" + f.email.value + "&subject=" + f.submit.value);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				alert(http.responseText + 'Инструкция отправлена Вам на почту.\nБлагодарим за интерес к нашему продукту!');    
			}

		}
		http.onerror = function() {
			alert('Извините, данные не были переданы. Попробуйте другой способ связи.');
		}
		window.location = 'thanks.html';
	}, false);
}
if(document.querySelector('#feedback-form2')) {
	document.querySelector('#feedback-form2').addEventListener('submit', function(evt){
		var http = new XMLHttpRequest(), f = this;
		evt.preventDefault();
		http.open("POST", "js/feedback-form2.php", true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.send("&tel=" + f.tel.value + "&subject=" + f.submit.value);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				alert(http.responseText + 'Мы очень скоро с Вами свяжемся.\nБлагодарим за интерес к нашему продукту!');    
			}

		}
		http.onerror = function() {
			alert('Извините, данные не были переданы. Попробуйте другой способ связи.');
		}
	}, false);
}