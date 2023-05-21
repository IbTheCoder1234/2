enum RadioMessage {
    message1 = 49434,
    msg = 2648
}
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    idx = idx_record + 2
    msg = msg.substr(0, msg.length - 1)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 1, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    idx += -1
    idx_record = idx
})
input.onButtonPressed(Button.AB, function () {
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
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    idx += 1
    idx_record = idx
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    idx = idx_record - 2
    msg = "" + msg + " "
    basic.showIcon(IconNames.Yes)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1693, 5000, 169, 169, 148, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString(msg)
    basic.showString("SENT!")
})
let msg = ""
let idx = 0
let idx_record = 0
idx_record = 0
idx = 1
radio.setGroup(69)
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
    } else if (idx < 1) {
        idx = 26
    } else {
        idx = 1
    }
})
