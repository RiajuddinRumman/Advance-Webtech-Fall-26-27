import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  private readonly messages: Chat[] = [];

  create(createChatDto: CreateChatDto): Chat {
    const chat: Chat = {
      id: randomUUID(),
      sender: createChatDto.sender,
      message: createChatDto.message,
      room: createChatDto.room ?? 'general',
      createdAt: new Date().toISOString(),
    };

    this.messages.push(chat);
    return chat;
  }

  findAll(room = 'general'): Chat[] {
    return this.messages.filter((chat) => chat.room === room);
  }

  findOne(id: string): Chat | undefined {
    return this.messages.find((chat) => chat.id === id);
  }

  update(updateChatDto: UpdateChatDto): Chat | undefined {
    const chat = this.findOne(updateChatDto.id);
    if (chat) {
      chat.message = updateChatDto.message;
    }
    return chat;
  }

  remove(id: string): Chat | undefined {
    const index = this.messages.findIndex((chat) => chat.id === id);
    return index === -1 ? undefined : this.messages.splice(index, 1)[0];
  }
}
