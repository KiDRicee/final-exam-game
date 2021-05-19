namespace SpriteKind {
    export const TheHive = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.bubbles, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TheHive, function (sprite, otherSprite) {
    otherSprite.destroy()
    Bee = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        .........33333333333333.........
        ........3333333333311333........
        .......333333333333311333.......
        ......333aaaaaaaaa33311133......
        ......3333aaaaaaa333331113......
        ......333333aaa33333331113......
        ......33333333333333333113......
        ......33aaaaa3333aaaaa3113......
        ......33aaaaa3333aaaaa3113......
        ......3333aaa3333aaa333133......
        .....333333333333aa3333133......
        ....3333333333333aa3333333......
        ...33333333333333333333333......
        ..333...33333333333333333.......
        .333...3333...333..3333.........
        .33....333...3333..3333.........
        ......3333..33333..3333.........
        ......333...33333..3333.........
        .....3333..3333...3333..........
        .....333..33333..33333..........
        ....333...3333..33333...........
        ....33...33333.33333............
        ........33333..33333............
        ........3333...3333.............
        ........3333....................
        ................................
        ................................
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Bee,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        .........33333333333333.........
        ........3333333333311333........
        .......333333333333311333.......
        ......333aaaaaaaaa33311133......
        ......3333aaaaaaa333331113......
        ......333333aaa33333331113......
        ......33333333333333333113......
        ......33aaaaa3333aaaaa3113......
        ......33aaaaa3333aaaaa3113......
        ......3333aaa3333aaa333133......
        .....333333333333aa3333133......
        ....3333333333333aa3333333......
        ...33333333333333333333333......
        ..333...33333333333333333.......
        .333...3333...333..3333.........
        .33....333...3333..3333.........
        ......3333..33333..3333.........
        ......333...33333..3333.........
        .....3333..3333...3333..........
        .....333..33333..33333..........
        ....333...3333..33333...........
        ....33...33333.33333............
        ........33333..33333............
        ........3333...3333.............
        ........3333....................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .........33333333333333.........
        ........3333333333311333........
        .......333333333333311333.......
        ......333aaaaaaaaa33311133......
        ......3333aaaaaaa333331113......
        ......33333333333333333113......
        ......33aaaaa3333aaaaa3113......
        .....33333aaa3333aaa333133......
        ....3333333333333aa3333133......
        ..333333333333333aa3333333......
        ..333333333333333333333333......
        .......333333333333333333.......
        ......3333..33333..3333.........
        ......333...33333..3333.........
        .....3333..3333...3333..........
        .....333..33333..33333..........
        ....333...3333..33333...........
        ....33...33333.33333............
        ........33333..33333............
        ........3333...3333.............
        ........3333....................
        ................................
        ................................
        ................................
        ................................
        `],
    100,
    true
    )
    Bee.setPosition(mySprite.x + 80, mySprite.y - 80)
    Bee.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let Bee: Sprite = null
let Hive: Sprite = null
let KrabbyPatty: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`Spongebob`, SpriteKind.Player)
info.setLife(5)
mySprite.setPosition(14, 99)
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    KrabbyPatty = sprites.create(img`
        . . . . f f f f f f f f . . . . 
        . . . f 4 4 4 4 4 4 4 4 f . . . 
        . . f 4 4 4 d 4 4 4 d 4 4 f . . 
        . f 4 4 d 4 4 4 d 4 4 4 4 4 f . 
        . f 4 d 4 4 d 4 4 4 d 4 d 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f f f f f f f f f f f f f f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 f 7 7 f f 7 7 f 7 7 f f . 
        . f f 4 f f 4 4 f f 4 f f 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Food)
    animation.runImageAnimation(
    KrabbyPatty,
    [img`
        . . . . f f f f f f f f . . . . 
        . . . f 4 4 4 4 4 4 4 4 f . . . 
        . . f 4 4 4 d 4 4 4 d 4 4 f . . 
        . f 4 4 d 4 4 4 d 4 4 4 4 4 f . 
        . f 4 d 4 4 d 4 4 4 d 4 d 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f f f f f f f f f f f f f f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 f 7 7 f f 7 7 f 7 7 f f . 
        . f f 4 f f 4 4 f f 4 f f 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f 4 4 4 4 4 4 4 4 f f . . 
        . f 4 4 d 4 4 4 d 4 4 4 4 4 f . 
        . f 4 d 4 4 d 4 4 4 d 4 d 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f f f f f f f f f f f f f f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 f 7 7 f f 7 7 f 7 7 f f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . f f f 4 4 4 4 4 4 4 4 f f f . 
        . f 4 d 4 4 d 4 4 4 d 4 d 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f f f f f f f f f f f f f f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        f f 7 f 7 7 f f 7 7 f 7 7 f f f 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . f f f 4 4 4 4 4 4 4 4 f f f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f f f f f f f f f f f f f f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f f 7 f 7 7 f f 7 7 f 7 7 f f f 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . f f f 4 4 4 4 4 4 4 4 f f f . 
        . f f f f f f f f f f f f f f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f e e e e e e e e e e e e e e f 
        f f 7 f 7 7 f f 7 7 f 7 7 f f f 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . f f f 4 4 4 4 4 4 4 4 f f f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f f f f f f f f f f f f f f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f f 7 f 7 7 f f 7 7 f 7 7 f f f 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . f f f 4 4 4 4 4 4 4 4 f f f . 
        . f 4 d 4 4 d 4 4 4 d 4 d 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f f f f f f f f f f f f f f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        f f 7 f 7 7 f f 7 7 f 7 7 f f f 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . f f 4 4 4 4 4 4 4 4 f f . . 
        . f 4 4 d 4 4 4 d 4 4 4 4 4 f . 
        . f 4 d 4 4 d 4 4 4 d 4 d 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f f f f f f f f f f f f f f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 f 7 7 f f 7 7 f 7 7 f f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f f . . . . 
        . . . f 4 4 4 4 4 4 4 4 f . . . 
        . . f 4 4 4 d 4 4 4 d 4 4 f . . 
        . f 4 4 d 4 4 4 d 4 4 4 4 4 f . 
        . f 4 d 4 4 d 4 4 4 d 4 d 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f f f f f f f f f f f f f f . 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 f 7 7 f f 7 7 f 7 7 f f . 
        . f f 4 f f 4 4 f f 4 f f 4 f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . . f f f f f f f f f f f f . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(KrabbyPatty, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile4`)) {
    Hive = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f f b c c b f f f . . . 
        . . . f b a f f f a b b f . . . 
        . . f f b a a a c a b a f f . . 
        . . f b c c b a a a c a a f . . 
        . . f b b b c c a a b b b f . . 
        . . f c c b b b a b b c a f . . 
        . . f b a a c a a c c a a f . . 
        . . f f b a b a b b b b f f . . 
        . . . f f a c b b c c f f . . . 
        . . . . f a b c c b b f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.TheHive)
    tiles.placeOnTile(Hive, value2)
    tiles.setTileAt(value2, assets.tile`transparency16`)
}
