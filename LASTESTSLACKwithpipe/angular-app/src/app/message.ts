// import { User } from './user'; 
export class Message {
    constructor(
        public id: number = null,
        public senderUsername: string = "",
        public recieverUsername: string = "",
        public content: string = "",
        public conversationId: string = "",
    ){}
}

