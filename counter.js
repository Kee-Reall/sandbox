class Counter {
    constructor(initialValue = 1) {
        this.value = initialValue
        Object.defineProperty(this, '_startValue', { // create readonly field
            value: initialValue,
            writable: false,
            enumerable: false,
            configurable: false,
        })
    }
    increment (value = 1) {
        this.value += Math.ceil(value)
    }
    decrement (value = 1) {
        this.value -= Math.ceil(value)
    }
    setInitial() {
        this.value = this._startValue
    }
    setNoun() {
        this.value = 0
    }
    setCustom(value) {
        if(!value || Number.isNaN(value)) return
        else this.value = Math.ceil(value)
    }
}

// пробуем поменять startValue
const title = new Counter(85)
console.log(title.value)
title.setCustom(66)
console.log(title.value)
title._startValue = 13
title.setInitial()
console.log(title.value)
console.log("=====================================")

for (
    const loopWacher = new Counter();
    loopWacher.value !== 13;
    loopWacher.increment()
) {
    const { value: temp } = loopWacher
    if( temp === 5) loopWacher.increment(3)
    if( temp > 10000) loopWacher.setCustom(13.81575)
    console.log(temp)
}

