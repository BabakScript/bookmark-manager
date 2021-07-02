import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = [];

  findAll(): Bookmark[] {
    return this.bookmarks;
  }

  createBookmark(url: string, description: string) {
    const bookmark: Bookmark = {
      id: uuid(),
      url,
      description,
    };

    this.bookmarks.push(bookmark);

    return bookmark;
  }
}
