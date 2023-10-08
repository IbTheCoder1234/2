enum RadioMessage {
    msg = 2648,
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    idx += -1
    idx_record = idx
})
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    msg = "" + msg + " "
    basic.showIcon(IconNames.Yes)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    let idxstart = 0
    if (idx == 1) {
        msg = "" + msg + "A"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 2) {
        msg = "" + msg + "B"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 3) {
        msg = "" + msg + "C"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 4) {
        msg = "" + msg + "D"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 5) {
        msg = "" + msg + "E"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 6) {
        msg = "" + msg + "F"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 7) {
        msg = "" + msg + "G"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 8) {
        msg = "" + msg + "H"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 9) {
        msg = "" + msg + "I"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 10) {
        msg = "" + msg + "G"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 11) {
        msg = "" + msg + "K"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 12) {
        msg = "" + msg + "L"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 13) {
        msg = "" + msg + "M"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 14) {
        msg = "" + msg + "N"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 15) {
        msg = "" + msg + "O"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 16) {
        msg = "" + msg + "P"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 17) {
        msg = "" + msg + "Q"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 18) {
        msg = "" + msg + "R"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 19) {
        msg = "" + msg + "S"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 20) {
        msg = "" + msg + "T"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 21) {
        msg = "" + msg + "U"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 22) {
        msg = "" + msg + "V"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 23) {
        msg = "" + msg + "W"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 24) {
        msg = "" + msg + "X"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 25) {
        msg = "" + msg + "Y"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 26) {
        msg = "" + msg + "Z"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 27) {
        msg = "" + msg + "1"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 28) {
        msg = "" + msg + "2"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 29) {
        msg = "" + msg + "3"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 30) {
        msg = "" + msg + "4"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 31) {
        msg = "" + msg + "5"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 32) {
        msg = "" + msg + "6"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 33) {
        msg = "" + msg + "7"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 34) {
        msg = "" + msg + "8"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 35) {
        msg = "" + msg + "9"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idx == 36) {
        msg = "" + msg + "0"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idxstart == 1) {
        radio2 = "" + radio2 + "1"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idxstart == 2) {
        radio2 = "" + radio2 + "2"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idxstart == 3) {
        radio2 = "" + radio2 + "3"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idxstart == 4) {
        radio2 = "" + radio2 + "4"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idxstart == 5) {
        radio2 = "" + radio2 + "5"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idxstart == 6) {
        radio2 = "" + radio2 + "6"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idxstart == 7) {
        radio2 = "" + radio2 + "7"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idxstart == 8) {
        radio2 = "" + radio2 + "8"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idxstart == 9) {
        radio2 = "" + radio2 + "9"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (idxstart == 10) {
        radio2 = "" + radio2 + "0"
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.pause(200)
    basic.showString(receivedString)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    idx += 1
    idx_record = idx
    if (connected == 0) {
        if (idx < 27) {
            idx = 27
        }
        if (idx == 1) {
            idx = 27
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (!(msg == "")) {
        radio.sendString(msg)
        basic.clearScreen()
        basic.showString("SENT!")
        msg = ""
    }
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    msg = msg.substr(0, msg.length - 1)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 1, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
let msg = ""
let connected = 0
let radio2 = ""
let idx = 0
let idx_record = 0
idx_record = 0
idx = 27
radio2 = "0"
connected = 0
basic.forever(function () {
    if (idx == 1) {
        basic.showString("A")
    } else if (idx == 2) {
        basic.showString("B")
    } else if (idx == 3) {
        basic.showString("C")
    } else if (idx == 4) {
        basic.showString("D")
    } else if (idx == 5) {
        basic.showString("E")
    } else if (idx == 6) {
        basic.showString("F")
    } else if (idx == 7) {
        basic.showString("G")
    } else if (idx == 8) {
        basic.showString("H")
    } else if (idx == 9) {
        basic.showString("I")
    } else if (idx == 10) {
        basic.showString("J")
    } else if (idx == 11) {
        basic.showString("K")
    } else if (idx == 12) {
        basic.showString("L")
    } else if (idx == 13) {
        basic.showString("M")
    } else if (idx == 14) {
        basic.showString("N")
    } else if (idx == 15) {
        basic.showString("O")
    } else if (idx == 16) {
        basic.showString("P")
    } else if (idx == 17) {
        basic.showString("Q")
    } else if (idx == 18) {
        basic.showString("R")
    } else if (idx == 19) {
        basic.showString("S")
    } else if (idx == 20) {
        basic.showString("T")
    } else if (idx == 21) {
        basic.showString("U")
    } else if (idx == 22) {
        basic.showString("V")
    } else if (idx == 23) {
        basic.showString("W")
    } else if (idx == 24) {
        basic.showString("X")
    } else if (idx == 25) {
        basic.showString("Y")
    } else if (idx == 26) {
        basic.showString("Z")
    } else if (idx == 27) {
        basic.showString("1")
    } else if (idx == 28) {
        basic.showString("2")
    } else if (idx == 29) {
        basic.showString("3")
    } else if (idx == 30) {
        basic.showString("4")
    } else if (idx == 31) {
        basic.showString("5")
    } else if (idx == 32) {
        basic.showString("6")
    } else if (idx == 33) {
        basic.showString("7")
    } else if (idx == 34) {
        basic.showString("8")
    } else if (idx == 35) {
        basic.showString("9")
    } else if (idx == 36) {
        basic.showString("0")
    } else if (idx < 1) {
        if (connected == 1) {
            idx = 36
        }
    } else {
        if (connected == 1) {
            idx = 1
        }
    }
})
