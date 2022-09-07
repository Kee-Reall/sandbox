class Counter {
    constructor(initialValue = 1) {
        this.value = initialValue
        this._initialValue = initialValue
    }
    increment (value = 1) {
        this.value += Math.ceil(value)
    }
    decrement (value = 1) {
        this.value -= Math.ceil(value)
    }
    setInitial() {
        this.value === this._initialValue
    }

    setNoun() {
        this.value = 0
    }
    setCustom(value) {
        if(!value || Number.isNaN(value)){
            return
        } else {
            this.value = Math.ceil(value)
        }
    }
}

const tester = new Counter()

console.log(tester)

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