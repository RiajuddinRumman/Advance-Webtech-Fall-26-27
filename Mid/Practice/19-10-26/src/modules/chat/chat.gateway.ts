import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

// @WebSocketGateway({
//   namespace: '/chat',
//   cors: { origin: '*' },
// })
// export class ChatGateway
//   implements OnGatewayConnection, OnGatewayDisconnect
// {
//   private readonly logger = new Logger(ChatGateway.name);

//   @WebSocketServer()
//   private server!: Server;

//   constructor(private readonly chatService: ChatService) {}

//   handleConnection(client: Socket) {
//     client.join('general');
//     const joinedEvent = {
//       clientId: client.id,
//       room: 'general',
//     };
//     this.logger.log(
//       `Client joined: ${JSON.stringify(joinedEvent)}`,
//     );
//     console.log(`Client joined: ${JSON.stringify(joinedEvent)}`);
//     client.broadcast.emit('userJoined', {
//       ...joinedEvent,
//     });
//     client.emit('chatHistory', this.chatService.findAll());
//     console.log(`Client connected: ${client.id}`);
//     this.server.emit('user entered', { clientId: client.id, room: 'general' });
//   }

//   handleDisconnect(client: Socket) {
//     const leftEvent = { clientId: client.id, room: 'general' };
//     this.logger.log(`Client left: ${JSON.stringify(leftEvent)}`);
//     console.log(`Client left: ${JSON.stringify(leftEvent)}`);
//     client.broadcast.emit('userLeft', leftEvent);
//     console.log(`Client disconnected: ${client.id}`);
//   }

//   @SubscribeMessage('joinRoom')
//   joinRoom(
//     @MessageBody() room: string,
//     @ConnectedSocket() client: Socket,
//   ) {
//     const normalizedRoom = room?.trim();
//     if (!normalizedRoom) {
//       throw new WsException('Room name is required');
//     }

//     client.join(normalizedRoom);
//     const joinedEvent = {
//       clientId: client.id,
//       room: normalizedRoom,
//     };
//     this.logger.log(
//       `Client joined: ${JSON.stringify(joinedEvent)}`,
//     );
//     client.broadcast.to(normalizedRoom).emit('userJoined', {
//       ...joinedEvent,
//     });
//     return { room: normalizedRoom, clientId: client.id };
//   }

//   @SubscribeMessage('sendMessage')
//   sendMessage(
//     @MessageBody() createChatDto: CreateChatDto,
//     @ConnectedSocket() client: Socket,
//   ) {
//     const chat = this.chatService.create(createChatDto);
//     client.join(chat.room);
//     this.logger.log(
//       `Message ${chat.id} from ${chat.sender} sent to room: ${chat.room}`,
//     );
//     this.server.to(chat.room).emit('reply', chat);
//     this.server.to(chat.room).emit('newMessage', chat);
//     return client.emit('reply', 'Message sent successfully');
//   }

//   @SubscribeMessage('getMessages')
//   getMessages(@MessageBody() room?: string) {
//     return this.chatService.findAll(room || 'general');
//   }

//   @SubscribeMessage('updateMessage')
//   updateMessage(@MessageBody() updateChatDto: UpdateChatDto) {
//     const chat = this.chatService.update(updateChatDto);
//     if (chat) {
//       this.server.to(chat.room).emit('messageUpdated', chat);
//     }
//     return chat ?? { error: 'Message not found' };
//   }

//   @SubscribeMessage('deleteMessage')
//   deleteMessage(@MessageBody() id: string) {
//     const chat = this.chatService.remove(id);
//     if (chat) {
//       this.server.to(chat.room).emit('messageDeleted', { id: chat.id });
//     }
//     return chat ? { id: chat.id, deleted: true } : { error: 'Message not found' };
//   }
//  }



@WebSocketGateway({namespace : '/chat', cors : {origin : '*'}})
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(client : Socket, message : any){
    console.log("message", message);

    client.emit('reply', 'this is a reply from server');
  }
}
