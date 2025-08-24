// https://www.codewars.com/kata/515bb423de843ea99400000a/train/typescript

type Collection = string[] | number[];

export class PaginationHelper {

  public itemsPerPage: number;
  private _collection: Collection;

	constructor(collection: Collection = [], itemsPerPage: number) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
  this.itemsPerPage = itemsPerPage;
  this._collection = collection;
	}

	itemCount(): number {
    return this._collection.length;
  }

	pageCount() {
	// returns the number of pages
    return Math.ceil(this.itemCount() / this.itemsPerPage) 
	}

	pageItemCount(pageIndex: number) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range

    pageIndex++;
    const totalPages = this.pageCount();

    // if we're on a page smaller or larger than 1 or the max, return -1
    if (pageIndex < 1 || pageIndex > totalPages) return -1;

    if (pageIndex === totalPages) {
      // get the last page count
      const prevPagesTotal = ((totalPages - 1) * this.itemsPerPage );
      return this._collection.length - prevPagesTotal;
    }

    // otherwise the count should match the itemsPerPage
    return this.itemsPerPage;

	}

	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
	pageIndex(itemIndex: number) {
    // normalize the index
    itemIndex++
    if (itemIndex < 1 || itemIndex > this._collection.length) return -1;

    // rounds to the next lower index in order to return zero-baed index
    return Math.floor(itemIndex / this.itemsPerPage); // no need to add 1 again since we round up
	}
}


// for itemCount = 29 itemsPerPage = 13
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const pagination = new PaginationHelper(items, 13);

pagination.pageIndex(13);