
module Game {
    export class wwwFrogger {
        
        game:Phaser.Game;

        constructor() {
            
            this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'content', {

                create: this.create, preload: this.preload
            });
        }

        preload(){
            //graphics
            this.game.load.image("background", "/Graphics/backg.png");
            //spritesheets

            //audio

        }

        create(){

        }
    }

}

window.onload = () => {
    var game = new Game.wwwFrogger();
}