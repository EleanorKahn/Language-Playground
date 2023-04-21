//Challenge from Codewars
//Answer by Eleanor

class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection =  collection,
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length;
	}
	pageCount() {
	// returns the number of pages
    return Math.ceil(this.itemCount() / this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
      return (
        pageIndex + 1 > this.pageCount() || pageIndex < 0
        ? -1
        : pageIndex + 1 === this.pageCount() 
          ? this.itemCount() - pageIndex * this.itemsPerPage
          : this.itemsPerPage
      )
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    return (
      itemIndex > this.itemCount() || itemIndex < 0 || this.itemCount() === 0 || itemIndex === this.itemCount()
      ? -1
      : Math.floor(itemIndex/this.itemsPerPage)
    )
	}
}