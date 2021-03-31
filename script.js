 var openNav = () => {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidebar").style.height = "100%";
    document.getElementById("sidebar").style.zIndex="1";
   
//     document.getElementById("myNavbar").style.color = "blue";
   
//     document.getElementById("myNavbar").style.paddingTop = "28px";
 }

 const closeNav = () => {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("sidebar").style.height = "0px";
    document.getElementById("sidebar").style.zIndex = "-1";
 }

//  var openNav = () => {
//    document.getElementById("image-logo").style.display = "none";
// }