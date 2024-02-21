//Written by: Saman Siddiqui
//DATE: 17-2-24
// In this program we use Array for object.
class Mobile {
    Model: string;
    color: string;
    Performance: string;
  
    constructor(Model: string, color: string, Performance: string) {
      this.Model = Model;
      this.color = color;
      this.Performance = Performance;
    }
  }
  

  const Oppo = new Mobile("S9", "Black", "Good");
  const Iphone = new Mobile("Iphone 14 pro", "Purple", "Good");
  const Redmi = new Mobile("BBM1", "Black", "Bad");
  

  console.log(Oppo);
  console.log(Iphone);
  console.log(Redmi);
  