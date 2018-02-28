var config = {
    type : Phaser.AUTO,
    parent : 'game',
    width : 640,
    height : 480,
    scene: {
        preload : preload,
        create : create
    }
}

function preload()
{
}

function create()
{
}

var game = new Phaser.Game(config);