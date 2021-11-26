function nav()  {document.querySelector("nav").innerHTML = 
	' <button id="barmenu"><i class="fa fa-bars"></i></button>\
  <ul>\
    <li onclick="window.location=' + "'webapp.html'" + ';">Web Apps</li>\
    <li>Mobile Apps</li>\
    <li>Application Design</li>\
    <li>Illustrator</li>\
    <li>Home Made</li>\
    <li>About Me</li>\
  </ul>\
  <h1 onclick="window.location=' + "'index.html'" + ';">This Is My Design</h1>';

document.querySelector("header").innerHTML='<img src="design/logoAnas.png" alt="">\
  <h1>Anas Alsaadi</h1>';
}