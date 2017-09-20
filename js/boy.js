function Boy() {
    this.health = 3;
    this.handle;
    this.handleHealth;
    this.moved = false;
    var _position = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    }
}

// Inicjalizacja naszego czlowieka
Boy.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    $('#game').append('<div id="boy" class="init"></div>');
    $('#game').append('<div id="health"><span class="glyphicon glyphicon-heart"></span>' + this.getHealth() + '</div>');
    this.handle = $('#boy');
    this.handleHealth = $('#health');
};