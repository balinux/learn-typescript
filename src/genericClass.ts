class List<T> {
  private data: T[];

  constructor(elements: T[]) {
    this.data = elements;
  }

  add(elements: T): void {
    this.data.push(elements);
  }

  addMultipleElemetn(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

// jika mneggunakan rest element(...element) maka saat instanceclasstidak perlu menggunakan []
let numbers = new List<number>([1, 2, 3]);
numbers.add(4);
numbers.addMultipleElemetn(5,6,7)
console.log(numbers.getAll());


// jika ingin menginstance tidak hanya number
let randomData2 = new List<string | number>([22,33, "44"]);
console.log(randomData2.getAll());
