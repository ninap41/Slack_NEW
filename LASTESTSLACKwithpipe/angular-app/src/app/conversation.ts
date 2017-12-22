// import { User } from './user'; 
export class Conversation {
    constructor(
        public id: number = null,
        public UserList = [],
        public MessageList = [],
        public title: string = "",
    ){}
}

