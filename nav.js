function nav()  {document.querySelector("nav").innerHTML = 
	' <button id="barmenu"><i class="fa fa-bars"></i></button>\
  <ul>\
    <li onclick="window.location=' + "'webapp.html'" + ';">Web Apps</li>\
    <li>Mobile Apps</li>\
    <li onclick="window.location=' + "'appdesign.html'" + ';">Application Design</li>\
    <li onclick="window.location=' + "'illus.html'" + ';">Illustrator</li>\
    <li>Home Made</li>\
    <li onclick="window.location=' + "'CV.html'" + ';">Resume</li>\
  </ul>\
  <h1 onclick="window.location=' + "'index.html'" + ';">This Is My Design</h1>';
				 

document.querySelector("header").innerHTML='<img src="design/logoAnas.png" alt="">\
  <h1>Anas Alsaadi</h1>';

				 
document.querySelector("footer").innerHTML='<div class="foot">\
<img src="design/logoAnas.png" alt="">\
<h2>Contact</h2>\
<p><i class="fa fa-envelope-o" aria-hidden="true"></i> anas_al-saadi@hotmail.com</p>\
<p><i class="fa fa-mobile" aria-hidden="true"></i> 0046721270751</p>\
<a href="https://github.com/Ananas91Alsaadi?tab=repositories"><i class="fa fa-github-square"></i></a>\
<a href="https://www.facebook.com/an00000s"><i class="fa fa-facebook-square"></i></a></div>';
				
				
				
				
				}


