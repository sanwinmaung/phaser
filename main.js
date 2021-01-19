var game = new Phaser.Game(600, 600, Phaser.CANVAS, 'phaser-game');
var mainState = {
	preload: function () {

	}
	create: function () {

	}
	update: function () {

	}
}

game.state.add('mainState', mainState);
game.state.start('mainState');