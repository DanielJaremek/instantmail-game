var boy;

$(document).ready(function () {
    // Inicjalizujemy ludzika
    boy = new Boy();
    console.log(boy);
    boy.init();


    // Tworzymy co 500ms przeszkody
    createObstacles(500, boy);

    setTimeout(function () {
        $('#game').addClass('hard');
    }, 5000);
});

document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowDown') {
        boy.moveleft();
    }
    if (event.code === 'ArrowUp') {
        boy.moveleft();
    }
});