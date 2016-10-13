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
            this.game.load.image("background", "Graphics/backg.png");
            this.game.load.image("frogUp", "Graphics/frogUp.png");
            // this.game.load.image("background", "Graphics/backg.png");
            // this.game.load.image("background", "Graphics/backg.png");
            //spritesheets
            //audio
        };
        wwwFrogger.prototype.create = function () {
            var backg = this.game.cache.getImage("background");
            var frogUp = this.game.cache.getImage("frogUp");
            console.log(frogUp.height);
            console.log(frogUp.width);
            this.backgroundSprite = this.game.add.sprite(0, 0, "background");
            this.backgroundSprite = this.game.add.sprite(0, 500, "frogUp");
            // this.backgroundSprite = this.game.add.sprite(0,0,"background");
            // this.backgroundSprite = this.game.add.sprite(0,0,"background");
        };
        return wwwFrogger;
    }());
    Game.wwwFrogger = wwwFrogger;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.wwwFrogger();
};
