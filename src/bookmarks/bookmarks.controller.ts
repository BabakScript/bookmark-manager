import { Body, Controller, Get, Post } from '@nestjs/common';
import { url } from 'inspector';
import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  findAll(): Bookmark[] {
    return this.bookmarksService.findAll();
  }

  @Post()
  createBookmark(@Body('url') url, @Body('description') description): Bookmark {
    return this.bookmarksService.createBookmark(url, description);
  }
}
