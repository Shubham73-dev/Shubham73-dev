window.addEventListener("load", initEvents);
function initEvents() {
    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        }
        else {
            toTop.classList.remove("active");
        }
    })
    document.getElementById("ham-bar").onclick = function () {
        document.getElementById("ham-bar").style.display = "none";
        document.getElementById("cross").style.display = "block";
        document.getElementById("popup").style.display = "block";
    }
    document.getElementById("cross").onclick = function () {
        document.getElementById("ham-bar").style.display = "block";
        document.getElementById("cross").style.display = "none";
        document.getElementById("popup").style.display = "none";
    }
    function myFunction(x) {
        if (x.matches) {
            document.getElementById("popup").style.display = "flex";
        } else {
            document.getElementById("popup").style.display = "none";


        }
    }
    var x = window.matchMedia("(min-width: 768px)")
    myFunction(x)
    x.addListener(myFunction)
    document.querySelector("#head-trans").style.transform = "translatex(0%)";
    document.querySelector("#head-trans").style.opacity = "1";
    document.querySelector("#head3-trans").style.transform = "translatex(0%)";
    document.querySelector("#head3-trans").style.opacity = "1";
    document.getElementById("div-btn").style.transform = "translatex(0%)";

    document.getElementById("serv-1").onclick = function () {

        document.getElementById("serv-1").style.border = "2px solid white";
        document.getElementById("serv-2").style.border = "none";
        document.getElementById("row-2").style.display = "none";
        document.getElementById("row-1").style.display = "block";
    }
    document.getElementById("serv-2").onclick = function () {
        document.getElementById("serv-2").style.border = "2px solid white";
        document.getElementById("serv-1").style.border = "none";

        document.getElementById("row-1").style.display = "none";
        document.getElementById("row-2").style.display = "block";
    }

    function myFunction(y) {
        if (y.matches) {
            document.getElementById("serv-1").onclick = function () {

                document.getElementById("serv-1").style.border = "2px solid white";
                document.getElementById("serv-2").style.border = "none";
                document.getElementById("row-2").style.display = "none";
                document.getElementById("row-1").style.display = "flex";
            }
            document.getElementById("serv-2").onclick = function () {
                document.getElementById("serv-2").style.border = "2px solid white";
                document.getElementById("serv-1").style.border = "none";

                document.getElementById("row-1").style.display = "none";
                document.getElementById("row-2").style.display = "flex";
            }
        }
    }
    var y = window.matchMedia("(min-width: 992px)")
    myFunction(y)
    y.addListener(myFunction)

    //   trial
    window.addEventListener("scroll", getScrollPos);
    var a = document.querySelectorAll(".card");
    // var img = document.querySelector("#img");
    function getScrollPos() {
        var scroll_y = window.scrollY;
        for (var i = 0; i < a.length; i++) {
            var section_offset_y = a[i].offsetTop;
            // console.log(section_offset_y - scrollY);
            var pos = section_offset_y - scrollY;
            if (pos <= 500) {
                a[i].style.transform = "rotatex(0deg)";
            }
            // else{
            //     a[i].style.transform= "rotatex(90deg)"; 
            // }
        }
    }

    window.addEventListener("scroll", getScaleIcon);
    var b = document.querySelectorAll(".icon");
    // var img = document.querySelector("#img");
    function getScaleIcon() {
        var scroll_z = window.scrollY;
        for (var j = 0; j < b.length; j++) {
            var section_offset_y = b[j].offsetTop;
            // console.log(section_offset_y - scrollY);
            var position = section_offset_y - scrollY;
            if (position <= 500) {
                b[j].style.transform = "scale(1)";
            }
            // else{
            //     a[i].style.transform= "rotatex(90deg)"; 
            // }
        }
    }

}