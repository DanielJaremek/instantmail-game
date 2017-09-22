

setInterval(function (){

    var pack = new PackageTopRight();

    pack.init();

    setTimeout(function () {
        pack.moveLeft();
    }, 50);

    setTimeout(function () {
        pack.moveDown();
    }, 8000);

}, 4300);

setInterval(function (){

    var pack1 = new PackageTopLeft();

    pack1.init();


    setTimeout(function () {
        pack1.moveRight();
    }, 50);

    setTimeout(function () {
        pack1.moveDown();
    }, 6000);

}, 5300);

    setInterval(function (){


    var pack2 = new PackageBottomLeft();

    pack2.init();


    setTimeout(function () {
        pack2.moveLeft();
    }, 50);

    setTimeout(function () {
        pack2.moveDown();
    }, 6000);

}, 8000);

    setInterval(function (){


    var pack3 = new PackageBottomRight();

    pack3.init();


    setTimeout(function () {
        pack3.moveLeft();
    }, 50);

    setTimeout(function () {
        pack3.moveDown();
    }, 3000);

    }, 3500);


