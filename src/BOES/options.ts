
class Key {
    Name: String;
    Namespace: String;

    constructor(name: string, namespace: string){
        this.Name = name;
        this.Namespace = namespace;
    }
}

class Indicator {
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


export default {
    Key: Key,
    Indicator: Indicator
};