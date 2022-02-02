function Game_Over () {
    basic.showIcon(IconNames.Skull)
    GameOver = 1
    basic.pause(5000)
    New_Game()
}
function Check_Button_Press (num: number) {
    if (PatternList[index] == num) {
        index += 1
        if (PatternList.length == index) {
            Next_Round()
        }
    } else {
        Game_Over()
    }
}
input.onButtonPressed(Button.A, function () {
    Check_Button_Press(0)
})
function Show_Pattern () {
    for (let value of PatternList) {
        if (value == 0) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
            music.playTone(262, music.beat(BeatFraction.Double))
        } else {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
            music.playTone(330, music.beat(BeatFraction.Double))
        }
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
}
function Next_Round () {
    if (randint(0, 1) == 0) {
        PatternList.push(0)
    } else {
        PatternList.push(1)
    }
    index = 0
    Show_Pattern()
}
input.onButtonPressed(Button.B, function () {
    Check_Button_Press(1)
})
function New_Game () {
    GameOver = 0
    PatternList = []
    Next_Round()
}
let index = 0
let PatternList: number[] = []
let GameOver = 0
New_Game()
