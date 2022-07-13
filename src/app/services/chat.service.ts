import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable()

export class ChatService {
  constructor() {}

   conversation = new Subject<Message[]>();
   messageMap:any = {
     "Hi" : "Hello",
     "Who are you?" : "My name is Test Sat Bot",
     "What is your role" : "Just guide for the user",
     "defaultmsg" : "I can't understand your text."
   }

   getBotAnswer(msg:string){
     const userMessage = new Message('User',msg);
     this.conversation.next([userMessage]);
     const botMessage = new Message('bot',this.getBotMessage(msg));
     setTimeout(() => {
       this.conversation.next([botMessage]);
     }, 1500);
   }

   getBotMessage(question: any){
     let answer = this.messageMap[question];
     return answer || this.messageMap['defaultmsg']
   }
}
