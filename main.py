@namespace
class SpriteKind:
    TheHive = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.over(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_up_pressed():
    if mySprite.vy == 0:
        mySprite.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.destroy(effects.bubbles, 200)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    global Bee
    Hive.destroy()
    animation.run_image_animation(Bee,
        [img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
sprites.on_overlap(SpriteKind.player, SpriteKind.TheHive, on_on_overlap2)

Bee: Sprite = None
Hive: Sprite = None
KrabbyPatty: Sprite = None
mySprite: Sprite = None
scene.set_background_color(9)
mySprite = sprites.create(assets.image("""
    Spongebob
"""), SpriteKind.player)
mySprite.set_position(14, 99)
controller.move_sprite(mySprite, 100, 0)
tiles.set_tilemap(tilemap("""
    level1
"""))
mySprite.ay = 300
scene.camera_follow_sprite(mySprite)
for value in tiles.get_tiles_by_type(assets.tile("""
    myTile3
""")):
    KrabbyPatty = sprites.create(img("""
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
        """),
        SpriteKind.food)
    animation.run_image_animation(KrabbyPatty,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
    tiles.place_on_tile(KrabbyPatty, value)
    tiles.set_tile_at(value, assets.tile("""
        transparency16
    """))
for value2 in tiles.get_tiles_by_type(assets.tile("""
    myTile4
""")):
    Hive = sprites.create(img("""
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
        """),
        SpriteKind.TheHive)
    tiles.place_on_tile(Hive, value2)
    tiles.set_tile_at(value2, assets.tile("""
        transparency16
    """))