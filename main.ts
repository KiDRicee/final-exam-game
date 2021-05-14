scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.destroy(effects.bubbles, 200)
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`Spongebob`, SpriteKind.Player)
mySprite.setPosition(14, 99)
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    mySprite2 = sprites.create(img`
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
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 0))
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile3`)
    tiles.setTileAt(value, assets.tile`myTile3`)
}
