const togs = document.getElementById('togs');

togs.addEventListener('click', function(e) {
    let boxes = document.querySelectorAll('.boxes');
    [].forEach.call(boxes, function(box) {
        box.classList.toggle('hide');
    })
})