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

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'kodake@mail.com',
        'Admin',
        'Kodake',
        'M',
        new Date('1991-10-15')
    );

    console.log({ userSettings });

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