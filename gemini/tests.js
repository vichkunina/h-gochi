gemini.suite('gochi-test', (suite) => {
    suite.setUrl('/')
        .setCaptureElements('.pig')
        .capture('plain');
});

gemini.suite('game-button', function(suite) {
    suite
        .setUrl('/')
        .setCaptureElements('.newgame__button')
        .before(function(actions, find) {
            this.button = find('.newgame__button');
        })
        .capture('plain')
        .capture('hovered', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find) {
            actions.mouseDown(this.button);
        })
});

gemini.suite('.preloader', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('.preloader')
        .capture('plain');
});
