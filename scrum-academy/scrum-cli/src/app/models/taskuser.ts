export class TaskUser {
  constructor(
        public id : number,
        public description: string,
        public userId: number,
        public name: string,
        public userEmail: string,
        public state: number)
        {}
}