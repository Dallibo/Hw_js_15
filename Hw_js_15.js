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
  constructor(title, text, tags, date) {
    this.title = title;
    this.text = text;
    this.tags = tags;
    this.date = date;
  }

  print() {
  let day1 = new Date(2023, 5, 29, 4, 26, 45, 456);
  let diff = new Date() - day1;
  let days = diff / (1000 * 60 * 60 * 24);
  let dateOutput;

  if (days < 1) {
    dateOutput = "today";
  } else if (days < 7) {
    dateOutput = `${parseInt(days)} days ago`;
  } else {
    dateOutput = `${day1.getDate()}.${day1.getMonth() + 1}.${day1.getFullYear()}`;
  }

  let str = `<h2>${this.title}</h2>`;
  str += `<p>${dateOutput}</p>`;
  str += `<p>${this.text}</p>`;
  str += "<div>" + Array.from(this.tags).map(elem => `#${elem}`).join(" ") + "</div>";
  document.write(str);
}
}
let news1 = new News("Hellow Web-31", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque, ducimus ab ut et obcaecati reprehenderit nisi eaque officia animi excepturi porro harum dolorem voluptates corrupti fugit dolores ipsum? Ipsam!", ["sport", "summer", "tennis"], new Date());
[news1].forEach(elem => elem.print());


class NewsString {
  constructor() {
    this.newsArray = [];
  }
    get count() {
    return this.newsArray.length;
  }
  displayAllNews() {
    this.newsArray.forEach(news => console.log(news));
  }
  addNews(news) {
    this.newsArray.push(news);
  }
  removeNews(news) {
    const index = this.newsArray.indexOf(news);
    if (index !== -1) {
      this.newsArray.splice(index, 1);
    }
  }
  sortNewsByDate() {
    this.newsArray.sort((a, b) => b.date - a.date);
  }

  searchNewsByTag(tag) {
    return this.newsArray.filter(news => news.tags.includes(tag));
  }
}
let newsString = new NewsString();
newsString.addNews({
  title: "News 1",
  text: "Новость 1",
  tags: ["tag1", "tag2"],
  date: new Date(2023, 5, 28, 4, 26, 45, 456)
});

newsString.addNews({
  title: "News 2",
  text: "Новость 2",
  tags: ["tag2", "tag3"],
  date: new Date(2023, 5, 29, 12, 30, 0, 0)
});

console.log("Number of news:", newsString.count);
newsString.displayAllNews();

newsString.sortNewsByDate();
console.log("Sorted news:");
newsString.displayAllNews();

const searchResults = newsString.searchNewsByTag("tag2");
console.log("News with tag 'tag2':");
searchResults.forEach(news => console.log(news));

newsString.removeNews(searchResults[0]);
console.log("After removing a news:");
newsString.displayAllNews();