import { Module } from '@nestjs/common';
import { BookmarksController } from './bookmarks.controller';

@Module({
  controllers: [BookmarksController]
})
export class BookmarksModule {}
