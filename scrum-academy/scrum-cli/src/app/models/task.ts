export class Task {
    constructor(
        public id : number,
        public description: string,
        public userId: number,
        public state: number)
        {}
}