

setInterval(function (){

    var pack = new PackageTopRight();
    pack.init();

    setTimeout(function () {
        pack.moveLeft();
    }, 50);

    setTimeout(function () {
        pack.moveDown();
    }, 8000);

    var pack1 = new PackageTopLeft();

    pack1.init();


    setTimeout(function () {
        pack1.moveRight();
    }, 50);

    setTimeout(function () {
        pack1.moveDown();
    }, 6000);

    var pack2 = new PackageBottomLeft();

    pack2.init();


    setTimeout(function () {
        pack2.moveLeft();
    }, 50);

    setTimeout(function () {
        pack2.moveDown();
    }, 5000);


    var pack3 = new PackageBottomRight();

    pack3.init();


    setTimeout(function () {
        pack3.moveLeft();
    }, 50);

    setTimeout(function () {
        pack3.moveDown();
    }, 3500);


}, 3300);

