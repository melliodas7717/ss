input.onButtonPressed(Button.A, function () {
    ch.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    ch.change(LedSpriteProperty.X, 1)
})
let Combo = 0
let ch: game.LedSprite = null
basic.showString("3")
basic.showString("2")
basic.showString("1")
ch = game.createSprite(2, 4)
let _ = game.createSprite(randint(0, 4), 0)
game.setLife(5)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        _.change(LedSpriteProperty.Y, Combo * 2)
        basic.pause(250 - 0)
    }
    if (_.isTouching(ch)) {
        if (Combo == 20) {
            game.addScore(3)
            basic.pause(100)
            _.delete()
            _ = game.createSprite(randint(0, 4), 0)
        } else {
            if (Combo >= 10) {
                game.addScore(2)
                basic.pause(100)
                _.delete()
                _ = game.createSprite(randint(0, 4), 0)
            } else {
                game.addScore(1)
                basic.pause(100)
                _.delete()
                _ = game.createSprite(randint(0, 4), 0)
            }
            Combo += 1
        }
    } else {
        game.removeLife(1)
        _.delete()
        _ = game.createSprite(randint(0, 4), 0)
        Combo = 0
        basic.pause(1000)
    }
})
