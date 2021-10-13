//Soal no 1
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// - maka baris kode tersebut akan menghasilkan keluaran ;
//   fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
//   fun2 {}

// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// - Tidak

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// - Karena fun2 memiliki deklarasi yang salah sehingga hanya mengeluarkan keluaran fun2 {}
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();
  
//Soal no 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// - Merupakan salah satu dari empat konsep fundamental OOP selain inheritance, polymorphism, dan abstraction. Encapsulation adalah teknik membuat “field” di class dengan atribut “private” dan menyediakan akses ke “field” tersebut melalui “public methods”
// - Encapsulation dibutuhkan saat  suatu data yang ada dalam suatu kelas tidak bisa diubah lagi.

// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// - adalah proses untuk menyembunyikan detail implementasi dari user sehingga hanya sisi fungsionalitas saja yang ditampilkan, atau dengan kata lain user akan menerima informasi mengenai apa yang dapat dilakukan oleh suatu objek namun user tidak akan mengetahui bagaimana objek itu melakukannya.
// - Abstraction dibutuhkan karena DRY (Dont Repeat Yourself), Reusability dan easier code maintenance.

// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// - Inheritance adalah pilar penting dari pemrograman berorientasi objek pada bahasa pemrograman Java. Dimana hal ini memungkinkan program Java untuk mewariskan isi fitur satu class terhadap class lainnya yang akan dikembangkan.
// - inheritance dibutuhkan saat ingin mengambil objek dan method yang ada di class parent dan tidak perlu membuat objek / method yang sama di class child nya

// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
// - sebuah konsep OOP di mana class memiliki banyak “bentuk” method yang berbeda, meskipun namanya sama. Maksud dari “bentuk” adalah isinya yang berbeda, namun tipe data dan parameternya berbeda.
// - Polymorpishm mirip dengan inheritance, hanya saja di polymorpishm metode nya bisa diubah dan tidak perlu mengikuti method yang ada pada class parent

//Soal no 3
class Phone {
    constructor(brand, storage, ram){
    this.brand = brand
    this.storage = storage
    this.ram = ram
    }
    getBrandName() {
        return this.brand 
    }
   
    setBrandName(a) {
       this.brand = a
    }
    printSpecification() {
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
    }
    setSpecification(b, c){
        this.storage = b
        this.ram = c
    }
 }

const phone = new Phone("Skilvul Mobile co", 64, 4);
console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());
phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

//Soal n0 4

class Student {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
      this.courseOfferings = [];
    }
  
    getIndexFromCourse(course) {
      const indexOfCourse = this.courseOfferings.findIndex((courseOffering) => {
        return courseOffering.course.getSubject() === course.getSubject();
      });
      return indexOfCourse;
    }
    
    takeNewCourse(course) {
      // check if course already in array
      const isCourseExist = this.courseOfferings.find((courseOffering) => {
        return courseOffering.course.getSubject() === course.getSubject();
      });
  
      // push the course into array if the course not exist yet
      if (this.courseOfferings.length === 0 || !isCourseExist) {
        this.courseOfferings.push(new CourseOffering(course));
        course.decreaseQuota();
      }
    }
    
    courseAttendance(course) {
      const indexOfCourse = this.getIndexFromCourse(course);
      if (indexOfCourse >= 0) {
        this.courseOfferings[indexOfCourse].attendance++;
      }
    }
  
    takeATest(course) {
      const indexOfCourse = this.getIndexFromCourse(course);
      if (indexOfCourse >= 0) {
        if (this.courseOfferings[indexOfCourse].attendance >= course.getAttendance()) {
          this.courseOfferings[indexOfCourse].grade = Math.floor(Math.random() * 100);
        } else {
          console.log("please fill your absent");
        }
      }
    }
  }
  
  class CourseOffering {
    constructor(course) {
      this.course = course;
      this.attendance = 0;
      this.grade = 0;
    }
  }
  
  class Course {
    constructor(subject, quota, attendance) {
      this.subject = subject;
      this.quota = quota;
      this.attendance = attendance;
    }
    getSubject() {
      return this.subject;
    }
    getAttendance() {
      return this.attendance;
    }
    decreaseQuota() {
      this.quota--;
    }
  }
  
  
  const biology = new Course("biology", 10, 3);
  const physics = new Course("physics", 10, 2);
  
  const johnWatson = new Student("john watson", "male");
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);