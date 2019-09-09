basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);

namespace Test1{
    //% blockId=func1 
    //% block="Enter a name %var "
    export function func1(v: string) {
        basic.showString(v)
    }

}