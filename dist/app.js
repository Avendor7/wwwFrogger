var Game;
(function (Game) {
    var wwwFrogger = (function () {
        function wwwFrogger() {
            this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload, update: this.update
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
            this.backgroundSprite = this.game.add.sprite(0, 0, "background");
            this.frogUpSprite = this.game.add.sprite(0, 550, "frogUp");
            this.frogUpSprite.scale.setTo(.5, .5);
            // this.backgroundSprite = this.game.add.sprite(0,0,"background");
            // this.backgroundSprite = this.game.add.sprite(0,0,"background");
            // create the cursor key object
            this.cursors = this.game.input.keyboard.createCursorKeys();
            key1 = game.input.keyboard.addKey(Phaser.Keyboard.Down);
            key2 = game.input.keyboard.addKey(Phaser.Keyboard.Up);
            key3 = game.input.keyboard.addKey(Phaser.Keyboard.Right);
        };
        wwwFrogger.prototype.update = function () {
            if (this.cursors.down.onDown) {
                this.frogUpSprite.position.y += 50;
            }
            if (this.cursors.up.onDown) {
                this.frogUpSprite.position.y -= 50;
            }
            if (this.cursors.right.onDown) {
                this.frogUpSprite.position.x += 50;
            }
            if (this.cursors.left.onDown) {
                this.frogUpSprite.position.x -= 50;
            }
        };
        return wwwFrogger;
    }());
    Game.wwwFrogger = wwwFrogger;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.wwwFrogger();
};
