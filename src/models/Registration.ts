export class Registration {
    constructor(
        public eventId: string,
        public userEmail: string,
        public registrationDate: Date = new Date()
    ) {}
}