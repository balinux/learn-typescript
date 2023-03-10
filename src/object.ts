// object typescriptp

// bagian ini akan di baca sebagai variabel dan sebagai type, dan bersimfat immutable
let user = {
  name: "rio",
  age: 23,
};

user = {
  // address:"bali" // jika ditambahkan key baru maka akan terjadi error
  name: "wati",
  age: 20,
};

// CARA KE 2
type User = {
  name: string;
  age: number;
};

let user2:User ={
    name: "khalid",
    age: 3
}

console.log(user2);

