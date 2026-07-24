import { Injectable } from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class NotesService {
    findAll(){
        return [
            {
            id: 1,
            title: 'Learn NestJs'
        },
        {
            id: 2,
            title: 'Build Notes API',
        }
        ];
    }
}
