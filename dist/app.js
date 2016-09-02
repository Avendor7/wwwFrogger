var Game;
(function (Game) {
    var wwwFrogger = (function () {
        function wwwFrogger() {
            this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }
        wwwFrogger.prototype.preload = function () {
            //graphics
            this.game.load.image("tile", "/Graphics/TitleScreen.png");
            //spritesheets
            //audio
        };
        wwwFrogger.prototype.create = function () {
        };
        return wwwFrogger;
    }());
    Game.wwwFrogger = wwwFrogger;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.wwwFrogger();
};
