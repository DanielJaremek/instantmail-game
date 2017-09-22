function Boy() {
    this.handle;
    this.step = 5;
}

// Inicjalizacja naszego czlowieka
Boy.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    var boyElement = $('<div id="boy" class="init"></div>');
    $('#game').append(boyElement);
    this.handle = boyElement[0];
    this.handle.style.left = '50%';
    this.handle.style.bottom = '0%';
};


// Unikanie przeszkody (kucanie)
Boy.prototype.moveleft = function () {

        var acctualPositionX = this.handle.style.left.replace('%', '');
        var newPosition = acctualPositionX - this.step;

        this.handle.style.left = newPosition + '%';

        console.log(acctualPositionX);

};

