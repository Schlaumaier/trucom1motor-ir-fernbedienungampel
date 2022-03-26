Bit_IR.onPressEvent(RemoteButton.RIGHT, function () {
    x = 2
})
Bit_IR.onPressEvent(RemoteButton.UP, function () {
    speed += 50
})
function Ampel_rot () {
    pins.digitalWritePin(DigitalPin.P10, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function Ampel_gelb () {
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
}
/**
 * hier wird die Geschwindigkeit des Motors erniedrigt  -50 bei jedem Tastendruck
 */
Bit_IR.onPressEvent(RemoteButton.DOWN, function () {
    speed += -50
})
function Ampel_gruen () {
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
Bit_IR.onPressEvent(RemoteButton.LEFT, function () {
    x = 1
})
Bit_IR.onPressEvent(RemoteButton.NUM0, function () {
    x = 10
})
/**
 * 1 Gleichstrommotor mit einer IR-Fernbedienung steuern. Vor  und Rück, sowie langsam schnell mit tippen von Up  down auf dem Steuerkreuz.
 * 
 * Hardware TRUE Component 2H-Brücken.
 */
let x = 0
led.enable(false)
pins.digitalWritePin(DigitalPin.P14, 1)
Bit_IR.init(Pins.P3)
let speed = 400
/**
 * Eine Ampel zeigt die Motorzustände an. Bei Stopp blinkt die Ampel gelb
 */
basic.forever(function () {
    if (x == 1) {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        Ampel_rot()
    }
    if (x == 2) {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        Ampel_gruen()
    }
    if (x == 3) {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
    if (x == 10) {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        Ampel_gelb()
    }
})
