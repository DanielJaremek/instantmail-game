function PackageTopRight() {
    this.handle;
    var _position = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    }
}

PackageTopRight.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    // @TODO: Losowanie obiektu
    var packages = ['highRight'];
    // Losujemy liczbe z zakresu kluczy w tablicy obstacles
    var random = Math.floor(Math.random() * packages.length);

    $('#game').append('<div class="package" ' + packages[random] + '"></div>');
    this.handle = $('#game .package:last-child');
};


PackageTopRight.prototype.moveLeft = function () {
    // Wprawienie przeszkody w ruch
    // Dodac klase move na przeszkodzie

    this.handle.addClass('moveLeft');
};
PackageTopRight.prototype.moveDown = function () {

    this.handle.addClass('moveDown');
};

function PackageTopLeft() {
    this.handle;
    var _position = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    }
}

PackageTopLeft.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    // @TODO: Losowanie obiektu
    var packages1 = ['highLeft'];
    // Losujemy liczbe z zakresu kluczy w tablicy obstacles
    var random = Math.floor(Math.random() * packages1.length);

    $('#game').append('<div class="package1" ' + packages1[random] + '"></div>');
    this.handle = $('#game .package1:last-child');
};


PackageTopLeft.prototype.moveRight = function () {
    // Wprawienie przeszkody w ruch
    // Dodac klase move na przeszkodzie

    this.handle.addClass('moveRight');
};
PackageTopLeft.prototype.moveDown = function () {

    this.handle.addClass('moveDown');
};


function PackageBottomLeft() {
    this.handle;
    var _position = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    }
}

PackageBottomLeft.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    // @TODO: Losowanie obiektu
    var packages2 = ['BottomLeft'];
    // Losujemy liczbe z zakresu kluczy w tablicy obstacles
    var random = Math.floor(Math.random() * packages2.length);

    $('#game').append('<div class="package2" ' + packages2[random] + '"></div>');
    this.handle = $('#game .package2:last-child');
};


PackageBottomLeft.prototype.moveLeft = function () {
    // Wprawienie przeszkody w ruch
    // Dodac klase move na przeszkodzie

    this.handle.addClass('moveLeft');
};
PackageBottomLeft.prototype.moveDown = function () {

    this.handle.addClass('moveDown');
};

function PackageBottomRight() {
    this.handle;
    var _position = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    }
}

PackageBottomRight.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    // @TODO: Losowanie obiektu
    var packages3 = ['BottomRight'];
    // Losujemy liczbe z zakresu kluczy w tablicy obstacles
    var random = Math.floor(Math.random() * packages3.length);

    $('#game').append('<div class="package3" ' + packages3[random] + '"></div>');
    this.handle = $('#game .package3:last-child');
};


PackageBottomRight.prototype.moveLeft = function () {
    // Wprawienie przeszkody w ruch
    // Dodac klase move na przeszkodzie

    this.handle.addClass('moveLeft');
};
PackageBottomRight.prototype.moveDown = function () {

    this.handle.addClass('moveDown');
};