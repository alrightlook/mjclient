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
}

function create()
{
    this.add.image(1334 / 2, 750 / 2, 'bg');
}

var game = new Phaser.Game(config);