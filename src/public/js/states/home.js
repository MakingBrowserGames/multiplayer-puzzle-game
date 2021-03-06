/**
* The game's home screen
*
* Gives options for 3 other states:
*   single player
*   multiplayer
*   options
**/
var homeState = {

  create: function() {

    var nameLabel = game.add.text(80,80,'Home',
                    {font: '75px Arial', fill: '#ffffff'});

    var singleplayerLabel = game.add.text(80, game.camera.height-240,
                    'Single Player',
                    {font: '50px Arial', fill: '#ffffff'});

    var optionsLabel = game.add.text(80, game.camera.height-80,
                    'Options',
                    {font: '50px Arial', fill: '#ffffff'});

    var multiplayerLabel = game.add.text(80, game.camera.height-160,
                    'Multiplayer',
                    {font: '50px Arial', fill: '#ffffff'});

    // Add clickable links:
    singleplayerLabel.inputEnabled = true;
    singleplayerLabel.events.onInputDown.add(this.singleplayer, this);
    optionsLabel.inputEnabled = true;
    optionsLabel.events.onInputDown.add(this.options, this);
    multiplayerLabel.inputEnabled = true;
    multiplayerLabel.events.onInputDown.add(this.multiplayer, this);

    // add menu sounds
    sounds.clickSounds.push(game.add.audio('click1'));
  },


  singleplayer: function() {
    sounds.playSound(sounds.clickSounds);
    game.state.start('singleplayer');
  },

  multiplayer() {
    // call the play state
    sounds.playSound(sounds.clickSounds);
    game.state.start('multiplayer');
  },

  options() {
    // call the play state
    sounds.playSound(sounds.clickSounds);
    game.state.start('options');
  },
};
