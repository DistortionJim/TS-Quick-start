interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '1',
    size: {
        width: 10,
        height: 20
    },
    // color: "#000"
}

const rect2: Rect = {
    id: '2',
    size: {
        width: 10,
        height: 20
    }
}

react2.color = "#f00"

const rect3 = {} as Rect
const rect4 = <Rect>{}

//==================

interface RectWithArea extends Rect {
    getAre: () => number
}

const rect5: RectWithArea = {
    id: '3',
    size: {
        width: 10,
        height: 15
    },
    getAre(): number {
        return this.size.height * this.size.width
    }
}

//==================

interface IClock {
    time: Date,
     setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//==================
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid #000',
    padding: '5px',
    borderRadius: '5px'
    // ...
}