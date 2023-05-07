basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
    }
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(200)
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
    }
})
