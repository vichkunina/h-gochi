gemini.suite('gochi-test', (suite) => {
    suite.setUrl('/')
        .setCaptureElements('.pig-body')
        .capture('plain');
});

gemini.suite('game-button', function(suite) {
    suite
        .setUrl('/')
        .setCaptureElements('.newgame-button')
        .before(function(actions, find) {
            this.button = find('.newgame-button');
        })
        .capture('plain')
        .capture('hovered', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find) {
            actions.mouseDown(this.button);
        })
});
