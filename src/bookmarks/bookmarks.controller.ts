import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { url } from 'inspector';
import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  find(@Query() getBookmarkDto: GetBookmarkDto): Bookmark[] {
    if (Object.keys(getBookmarkDto).length) {
      return this.bookmarksService.find(getBookmarkDto);
    }
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

  @Delete('/:id')
  deleteBookmark(@Param('id') id: string): void {
    return this.bookmarksService.deleteBookmark(id);
  }

  @Patch('/:id/description')
  updateBookmarkDescription(
    @Param('id') id: string,
    @Body('description') description: string,
  ): Bookmark {
    return this.bookmarksService.updateBookmarkDescription(id, description);
  }
}
