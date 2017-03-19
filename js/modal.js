var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById('modal-image');

function openModal() {
    modal.style.display = "block";
    modalImg.src = this.getAttribute("data-highres");
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function() {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
window.openModal = function(img) {
    modal.style.display = "block";
    modalImg.src = img.getAttribute("data-highres");
}