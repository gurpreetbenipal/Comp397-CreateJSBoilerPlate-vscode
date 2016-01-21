module objects {
    export class Student extends Person {
        //Private Instance Variables
        private _studentNumber: number;
        //Constructor
        constructor(name: string, studentNumber: number) {
            super(name);
            this._studentNumber = studentNumber;
        }
        //Public Methods
        public studies(): void {
            console.log(this._name + " is studying");
        }

    }
}