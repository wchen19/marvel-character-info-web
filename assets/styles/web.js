function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let i;
        let dropdown = document.getElementsByClassName("dropdown-content");
        for (i = 0; i < dropdown.length; i++) {
            let drop = dropdown[i];
            if (drop.classList.contains('show')) {
                drop.classList.remove('show');
            }
        }
    }
}


let indexLogo = 0;
slide();

function slide() {
    let i;
    let logos = document.getElementsByClassName("logo");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < logos.length; i++) {
        logos[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    indexLogo++;
    if (indexLogo > logos.length) { indexLogo = 1 }
    logos[indexLogo - 1].style.display = "block";
    dots[indexLogo - 1].className += " active";
    setTimeout(slide, 3000);
}


document.querySelectorAll("img").forEach((item) => {
    item.addEventListener("click", (event) => {
        document.getElementById("myModal").style.display = "block";
        document.getElementById("myModal").style.zIndex = "3";

        let modalImg = document.getElementById("img");
        let captionText = document.getElementById("caption");
        source = event.target.getAttribute("src");
        teks = event.target.getAttribute("alt");
        modalImg.setAttribute("src", source);
        captionText.innerHTML = teks
        console.log(source)
        console.log(teks)

    })
})

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal").style.zIndex = "1";
}

/*window.onclick = function(event) {
    if (!event.target.matches('.image')) {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("myModal").style.zIndex = "1";
    }
}*/