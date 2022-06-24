(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    // Forma corta
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    const newPerson = new Person('Kodake', 'M', new Date('1991-10-15'));
    console.log({ newPerson });


})();

// Forma larga
// class Person {
//     public name: string;
//     public gender: Gender;
//     public birthdate: Date;

//     constructor(name: string, gender: Gender, birthdate: Date) {
//         this.name = name;
//         this.gender = gender;
//         this.birthdate = birthdate;
//     }
// }