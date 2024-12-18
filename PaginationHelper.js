class PaginationHelper {
    constructor(collection, itemsPerPage) {
      this.collection = collection;
      this.itemsPerPage = itemsPerPage;
    }
  
    // Menghitung jumlah halaman
    pageCount() {
      return Math.ceil(this.collection.length / this.itemsPerPage);
    }
  
    // Menghitung jumlah item dalam koleksi
    itemCount() {
      return this.collection.length;
    }
  
    // Menghitung jumlah item pada halaman tertentu
    pageItemCount(pageIndex) {
      if (pageIndex < 0 || pageIndex >= this.pageCount()) {
        return -1; // Halaman tidak valid
      }
  
      const startIndex = pageIndex * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return Math.min(endIndex, this.collection.length) - startIndex;
    }
  
    // Menentukan halaman tempat item dengan indeks tertentu berada
    pageIndex(itemIndex) {
      if (itemIndex < 0 || itemIndex >= this.collection.length) {
        return -1; // Item tidak valid
      }
      return Math.floor(itemIndex / this.itemsPerPage);
    }
  }
  
  // Buat instance PaginationHelper
  var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
  
  // Tampilkan hasil
  console.log(helper.pageCount()); // Output: 2
  console.log(helper.itemCount()); // Output: 6
  console.log(helper.pageItemCount(0)); // Output: 4
  console.log(helper.pageItemCount(1)); // Output: 2
  console.log(helper.pageItemCount(2)); // Output: -1
  
  console.log(helper.pageIndex(5));  // Output: 1
  console.log(helper.pageIndex(2));  // Output: 0
  console.log(helper.pageIndex(20)); // Output: -1
  console.log(helper.pageIndex(-10)); // Output: -1
  