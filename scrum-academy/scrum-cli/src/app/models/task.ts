export class Task {
    constructor(
        public id : number,
        public description: string,
        public userId: number,
        public userName: string,
        public state: number)
        {}
}