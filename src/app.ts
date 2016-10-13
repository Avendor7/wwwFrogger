
module Game {
    export class wwwFrogger {
        
        game:Phaser.Game;
        backgroundSprite: Phaser.Sprite;
        frogUpSprite: Phaser.Sprite;

        constructor() {
            
            this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'content', {

                create: this.create, preload: this.preload, update: this.update
            });
        }

        preload(){
            //graphics
            this.game.load.image("background", "Graphics/backg.png");
            this.game.load.image("frogUp", "Graphics/frogUp.png");
            // this.game.load.image("background", "Graphics/backg.png");
            // this.game.load.image("background", "Graphics/backg.png");
            
            //spritesheets
            
            //audio

        }

        create(){

            var backg = this.game.cache.getImage("background");
            var frogUp = this.game.cache.getImage("frogUp");            
                       
            this.backgroundSprite = this.game.add.sprite(0,0,"background");
            
            
            this.frogUpSprite = this.game.add.sprite(0,550,"frogUp");
            this.frogUpSprite.scale.setTo(.5,.5);
            
            // this.backgroundSprite = this.game.add.sprite(0,0,"background");
            // this.backgroundSprite = this.game.add.sprite(0,0,"background");
            
            // create the cursor key object
            this.cursors = this.game.input.keyboard.createCursorKeys();

            key1 = game.input.keyboard.addKey(Phaser.Keyboard.Down);
            key2 = game.input.keyboard.addKey(Phaser.Keyboard.Up);
            key3 = game.input.keyboard.addKey(Phaser.Keyboard.Right);
        }

        update(){
            if (this.cursors.down.onDown){
                this.frogUpSprite.position.y+=50;
            }
            if (this.cursors.up.onDown){
                this.frogUpSprite.position.y-=50;
            }

            if (this.cursors.right.onDown){
                this.frogUpSprite.position.x+=50;
                // if(this.frogUpSprite.position >=600){
                //     this.frogUpSprite.position = 600;
                // }
            }
            if (this.cursors.left.onDown){
                this.frogUpSprite.position.x-=50;
                // if(this.frogUpSprite.position <=0){
                //     this.frogUpSprite.position = 0;
                // }
            }
        }
    }

}

window.onload = () => {
    var game = new Game.wwwFrogger();
}