// Get the modal
//<!-- Button to open the modal login form -->
var modal = document.getElementById('radiiHouston');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "block";
    }
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
    cell.innerHTML="<img height=40 width=40 src='<%=request.getContextPath()%>/writeImage.htm' onError='ImgErrorVideo(this);'>" 
    function ImgErrorVideo(source){
        source.src = "../Assets/RAD111.png";
        source.onerror = "../Assets/RAD111.png"; 
        return true; 
}

