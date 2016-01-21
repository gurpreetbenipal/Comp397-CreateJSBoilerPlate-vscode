module objects {
   export class Person {
        //Private Instance Variables
        protected _name: string;
        //Constructor
        constructor(name: string) {
            this._name = name;
        }
        //Public Methods
        public speaks(): void {
            console.log(this._name + " says hello");
        }
    }
}