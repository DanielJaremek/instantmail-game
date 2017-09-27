function PackageTopRight() {
    this.handle;
}

PackageTopRight.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    // @TODO: Losowanie obiektu
    var packages = ['package', 'package1', 'package2', 'package3'];
    var colors = ['blue', 'red', 'yellow', 'white'];
    // Losujemy liczbe z zakresu kluczy w tablicy packages
    var randomPackage = Math.floor(Math.random() * packages.length);
    var randomColor = Math.floor(Math.random() * colors.length);

    var className = packages[randomPackage] + ' ' + colors[randomColor];

    this.handle = $('<div class="' + className + '"></div>');
    $('#game').append(this.handle);

    var self = this;

    setTimeout(function () {
        if (randomPackage === 0 || randomPackage === 3) {
            self.moveLeft();
        } else {
            self.moveRight();
        }
    }, 50);

    var speed = 0;
    if (randomPackage === 0) {
        speed = 8000;
    } if (randomPackage === 1) {
        speed = 6000;
    } if (randomPackage === 2) {
        speed = 5000;
    } if (randomPackage === 3) {
        speed = 3500;
    }

    setTimeout(function () {
        self.moveDown();
    }, speed);

};


PackageTopRight.prototype.moveLeft = function () {
    this.handle.addClass('moveLeft');
};

PackageTopRight.prototype.moveRight = function () {
    this.handle.addClass('moveRight');
};

PackageTopRight.prototype.moveDown = function () {
    this.handle.addClass('moveDown');
};

// function PackageTopLeft() {
//     this.handle;
// }

// PackageTopLeft.prototype.init = function () {
//     // Dodanie elementu DOM do przestrzeni gry
//     // @TODO: Losowanie obiektu
//     var packages1 = ['highLeft'];
//     // Losujemy liczbe z zakresu kluczy w tablicy obstacles
//     var random = Math.floor(Math.random() * packages1.length);

//     $('#game').append('<div class="package1 ' + packages1[random] + '"></div>');
//     this.handle = $('#game .package1:last-child');
// };


// PackageTopLeft.prototype.moveRight = function () {
//     // Wprawienie przeszkody w ruch
//     // Dodac klase move na przeszkodzie

//     this.handle.addClass('moveRight');
// };
// PackageTopLeft.prototype.moveDown = function () {

//     this.handle.addClass('moveDown');
// };


// function PackageBottomLeft() {
//     this.handle;
// }

// PackageBottomLeft.prototype.init = function () {
//     // Dodanie elementu DOM do przestrzeni gry
//     // @TODO: Losowanie obiektu
//     var packages2 = ['BottomLeft'];
//     // Losujemy liczbe z zakresu kluczy w tablicy obstacles
//     var random = Math.floor(Math.random() * packages2.length);

//     $('#game').append('<div class="package2 ' + packages2[random] + '"></div>');
//     this.handle = $('#game .package2:last-child');
// };


// PackageBottomLeft.prototype.moveLeft = function () {
//     // Wprawienie przeszkody w ruch
//     // Dodac klase move na przeszkodzie

//     this.handle.addClass('moveLeft');
// };
// PackageBottomLeft.prototype.moveDown = function () {

//     this.handle.addClass('moveDown');
// };

// function PackageBottomRight() {
//     this.handle;
// }

// PackageBottomRight.prototype.init = function () {
//     // Dodanie elementu DOM do przestrzeni gry
//     // @TODO: Losowanie obiektu
//     var packages3 = ['BottomRight'];
//     // Losujemy liczbe z zakresu kluczy w tablicy obstacles
//     var random = Math.floor(Math.random() * packages3.length);

//     $('#game').append('<div class="package3 ' + packages3[random] + '"></div>');
//     this.handle = $('#game .package3:last-child');
// };


// PackageBottomRight.prototype.moveLeft = function () {
//     // Wprawienie przeszkody w ruch
//     // Dodac klase move na przeszkodzie

//     this.handle.addClass('moveLeft');
// };
// PackageBottomRight.prototype.moveDown = function () {

//     this.handle.addClass('moveDown');
// };