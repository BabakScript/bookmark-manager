import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { url } from 'inspector';
import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  findAll(): Bookmark[] {
    return this.bookmarksService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Bookmark {
    return this.bookmarksService.findById(id);
  }

  @Post()
  createBookmark(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark {
    return this.bookmarksService.createBookmark(createBookmarkDto);
  }
}
