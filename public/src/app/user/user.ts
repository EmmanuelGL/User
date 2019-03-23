export class User {
    constructor(
        // numero aleatorio del 1 al 100 y metodo floor redondea asia bajo 
        public _id: number = Math.floor(Math.random() * 100),
        public first_name: string = "",
        public last_name: string = "",
        public email: string = "",
        public editable: boolean = false
    ) {

    }
}
