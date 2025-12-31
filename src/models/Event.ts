export class EventModel {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public date: string,
        public location: string,
        public category: 'conference' | 'sport' | 'workshop' | 'other',
        public maxCapacity: number,
        public currentParticipants: number = 0
    ) {}
}