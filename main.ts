input.onGesture(Gesture.Shake, function () {
    music.playTone(tone, music.beat(BeatFraction.Whole))
})
let tone = 0
tone = 261.63
basic.forever(function () {
    if (input.compassHeading() == 0) {
        tone = 261.63
    } else if (input.compassHeading() == 45) {
        tone = 293.66
    } else if (input.compassHeading() == 90) {
        tone = 329.63
    } else if (input.compassHeading() == 135) {
        tone = 349.23
    } else if (input.compassHeading() == 180) {
        tone = 392
    } else if (input.compassHeading() == 225) {
        tone = 440
    } else if (input.compassHeading() == 270) {
        tone = 493.88
    } else {
        basic.pause(100)
    }
})
