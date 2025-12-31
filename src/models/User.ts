export class User {
    constructor(
        public fullName: string,
        public email: string,
        public password: string,
        public role: 'admin' | 'student' = 'student'
    ) {}
}