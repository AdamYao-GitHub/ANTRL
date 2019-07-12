export default class node {
    Indicator: boolean
    FinalIndicator: boolean
    RedefinedIndicator: boolean
    constructor(indicators: Object) {
        Object.assign(this, {
            Indicator: false,
            FinalIndicator: false,
            RedefinedIndicator: null
        }, indicators)
    }
}