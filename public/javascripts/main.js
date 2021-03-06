var config = {
    type : Phaser.AUTO,
    parent : 'game',
    width : 1334,
    height : 750,
    scene: {
        preload : preload,
        create : create
    }
}

function preload()
{
    this.load.image('bg', 'assets/background.jpg');
    this.load.audio('bgm', 'assets/background01.mp3');
}

function create()
{
    this.add.image(1334 / 2, 750 / 2, 'bg');
    this.sound.play('bgm');
    localStorage.setItem('a', 'b');
    var text = localStorage.getItem('a');
    alert(text);
}

var game = new Phaser.Game(config);