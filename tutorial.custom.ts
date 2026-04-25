game.setDialogTextColor(1)
game.setDialogFrame(snow_imgs.snow_box)
/**
* An extension for snowglobe making
*/
//% color=#c292d2 icon="\uf2dc"
namespace snow {
    //% blockId=short_blizz
    //% block="add blizzard to $thisSprite"
    //% thisSprite.defl="scenery"
    //% thisSprite.shadow="variables_get"
    //% help=github:docs/short_blizz
    export function bigShortBlizzard(thisSprite: Sprite) {
        music.stopAllSounds()
        thisSprite.startEffect(effects.blizzard, 2000)
        thisSprite.startEffect(effects.blizzard, 2000)
        thisSprite.startEffect(effects.blizzard, 2000)
        thisSprite.startEffect(effects.blizzard, 2000)
    }
}
namespace sprites{
    /**
    * Bundle together code blocks
    */
    //% block="add globe"  weight=300
    //% handlerStatement=1
    export function wrap1(handler: () => void) {
        handler();
    }
    /**
    * Bundle together code blocks
    */
    //% block="add scenery"  weight=200
    //% handlerStatement=1
    export function wrap2(handler: () => void) {
        handler();
    }
    /**
    * Bundle together code blocks
    */
    //% block="add animation"  weight=100
    //% handlerStatement=1
    export function wrap3(handler: () => void) {
        handler();
    }
}