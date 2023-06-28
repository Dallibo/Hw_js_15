class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
      this.fontSize = fontSize;
      this.fontColor = fontColor;
      this.fontFamily = fontFamily;
    }
  
    print(text) {
      document.write(`<p style="font-size: ${this.fontSize}px; color: ${this.fontColor}; font-family: ${this.fontFamily};">${text}</p>`);
    }
  }
  const printer = new PrintMachine(16, 'blue', 'Tahoma, Arial, sans-serif;');
  printer.print('Hellow Web-31');

  class News {
    constructor(Title, Text, Tags, Date) {
      this.Title = Title;
      this.Text = Text;
      this.Tags = Tags;
      this.date = Date;
    }
    print() {
      let day1 = new Date(2023, 5, 28, 4, 26, 45, 456);
      let diff = new Date() - day1;
      let days = diff / (1000 * 60 * 60 * 24);
  
      if (days < 1) {
        console.log("today");
      } else if (days < 7) {
        console.log(`${parseInt(days)} days ago`);
      } else {
        console.log(`${day1.getDate()}.${day1.getMonth() + 1}.${day1.getFullYear()}`);
      }
      document.write(`<p> ${Title}</p>`)
    }
  }

  let news1 = new News("header 1", "lorem impus dolor",["sport", "summer", "tennis"] )