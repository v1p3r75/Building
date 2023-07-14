var menu = document.querySelector(".menu")
var option_img = document.querySelector(".option img")
var close = document.querySelector(".close")
var body = document.querySelector("body")
var other = document.querySelectorAll(".top-head div")



option_img.addEventListener("click", function(){
    menu.style.left = "0px";
    document.body.style.overflow = "hidden";
}, false)

close.addEventListener("click", function(){
      menu.style.left = "-20%";
      document.body.style.overflow = "auto";
}, false)


document.addEventListener("click", function(e) {
var target = e.target;
if (menu.contains(target) || target === menu || target === option_img) return target;
else menu.style.left = '-20%';
},false)
