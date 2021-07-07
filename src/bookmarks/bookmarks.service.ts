import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuid } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = [];

  findAll(): Bookmark[] {
    return this.bookmarks;
  }

  createBookmark(createBookmarkDto: CreateBookmarkDto): Bookmark {
    const { url, description } = createBookmarkDto;
    const bookmark: Bookmark = {
      id: uuid(),
      url,
      description,
    };

    this.bookmarks.push(bookmark);

    return bookmark;
  }
}
