export default class HashTable {
  constructor(size = 100) {
    this.table = new Array(size);
  }

  computeHash(string) {
    let H = this.findPrime(this.table.length);
    let total = 0;
    for (let i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    return total % this.table.length;
  }

  put( item ) {
    let key = this.computeHash( item );
    return !this.table[key] ? this.table[key] = item : false;
  }

  remove( item ) {
    let key = this.computeHash( item );
    return this.table[key] = undefined
  }


  search( item ) {
    let key = this.computeHash( item );
    return this.table[key] === item
  }

  findPrime( num ) {
    while(true) {
      if( this.isPrime(num) ){ break; }
      num += 1
    }
    return num;
  }

  isPrime( num ) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false;
    return num !== 1;
  }



  size() {
    let counter = 0;
    for( let i=0, len = this.table.length; i < len; i++) {
      if( this.table[i] ) { counter++ }
    }
    return counter;
  }

  isEmpty() {
    for( let i=0, len = this.table.length; i < len; i++) {
      if( this.table[i] ) { return false }
    }
    return true
  }

  show() {
    for( let i=0, len = this.table.length; i < len; i++) {
      if(this.table[i]) { console.log( i, ':', this.table[i] ) }
    }
  }

}
