export default class EmailException extends Error {

    constructor() {
        super('Une ou plusieurs données sont erronées')
    }

    static checkEmail(email: string): boolean {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let tst = !reg.test(email.toLowerCase().trim());
        console.log(tst + ' regextst');
        return (!reg.test(email.toLowerCase().trim()))
    }
}