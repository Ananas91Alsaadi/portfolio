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
}