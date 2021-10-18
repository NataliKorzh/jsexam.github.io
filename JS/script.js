let modal = document.getElementById("modal");
let btn = document.getElementById("footer__modal_btn");
let close = document.getElementsByClassName("close_modal")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";

}

let $page = $('html, body');
        $('a[href*="#"]').click(function () {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
            return false;
        });