export default class DateException extends Error {

    constructor() {
        super('Une ou plusieurs données sont erronées')
    }

    static checkDate(date: string): boolean {
        const reg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
        return (reg.test(date))
    }
}