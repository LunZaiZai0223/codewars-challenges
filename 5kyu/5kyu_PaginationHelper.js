/*

5kyu PaginationHelper
https://www.codewars.com/kata/515bb423de843ea99400000a

For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

Examples:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1

*/

class PaginationHelper {
	constructor(collection, itemsPerPage) {
		this.collection = collection
		this.itemsPerPage = itemsPerPage
	}
	itemCount() {
		return this.collection.length
	}
	pageCount() {
		return Math.ceil(this.collection.length / this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
		if (pageIndex < 0 || this.collection.length === 0) {
			return -1
		}
		// 第一頁額外看列表長度跟每頁數量的關係
		if (pageIndex === 0) {
			if (this.collection.length > this.itemsPerPage) {
				return this.itemsPerPage
			} else {
				return this.collection.length
			}
		}

		// 因為是從 0 開始，在第 0 頁時要額外加一才可以正確計算
		const correctPageIndex = (pageIndex === 0 ? pageIndex + 1 : pageIndex)
		const counter = this.collection.length - correctPageIndex * this.itemsPerPage

		if (counter < 0) {
			return - 1
		}

		if (counter === 0) {
			return -1
		}

		if (counter < this.itemsPerPage) {
			return counter
		}

		if (counter >= this.itemsPerPage) {
			return this.itemsPerPage
		}

		return -1

	}
	pageIndex(itemIndex) {
		if (itemIndex >= this.collection.length || this.collection.length === 0 || itemIndex < 0) {
			return -1
		}

		const slicedCollection = this.collection.slice(0, itemIndex + 1)
		const counter = Math.ceil(slicedCollection.length / this.itemsPerPage)

		return counter - 1
	}
}
