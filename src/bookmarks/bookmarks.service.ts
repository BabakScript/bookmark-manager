import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuid } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = [];

  findAll(): Bookmark[] {
    return this.bookmarks;
  }

  find(getBookmarkDto: GetBookmarkDto): Bookmark[] {
    let bookmarks = this.findAll();
    const { url, description } = getBookmarkDto;

    if (url) {
      bookmarks = bookmarks.filter((bookmark) =>
        bookmark.url.toLowerCase().includes(url),
      );
    }

    if (description) {
      bookmarks = bookmarks.filter((bookmark) =>
        bookmark.description.toLowerCase().includes(description),
      );
    }

    return bookmarks;
  }

  findById(id: string): Bookmark {
    return this.bookmarks.find((bookmark) => bookmark.id == id);
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

  deleteBookmark(id: string): void {
    this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
  }
}
