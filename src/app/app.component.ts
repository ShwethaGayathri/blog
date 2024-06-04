import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  typedText: string = ''
  messages: string[] = ["Hey there!, Welcome to my Blog.", "My name is Gayathri U.", "Feel Free to look around my blog to learn more about me! :)"];
  currentMessageIndex: number = 0;

  @ViewChild('background', { static: true }) background!: ElementRef;
  title = 'blog';

  images: string[] = [
    // "Big Data.png",
    "book & laptop.png",
    "G.png",
    // "Book.png",
    "Books (2).png",
    // "Books.png",
    // "code eq.png",
    "Code.png",
    // "DS (1).png",
    "DS (2).png",
    // "Laptop.png",
    "SDG.png",
    // "morning.png",
    "SG.png",
    // "Music & Code (1).png",
    "Music & Code (2).png",
    // "Pgmer.png",
    // "PL.png",
    "Bookstore.png",
    // "SDG1.png",
    "Setup.png",
    // 
  ];

  ngOnInit(): void {
    this.typeMessage();
  }


  typeMessage() {
    let index = 0;
    const message = this.messages[this.currentMessageIndex];
    const intervalId = setInterval(() => {
      if (index < message.length) {
        this.typedText += message[index];
        index++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          this.eraseMessage();
        }, 1000); // Adjust delay before erasing (milliseconds)
      }
    }, 100);
  }

  eraseMessage() {
    let index = this.typedText.length - 1;
    const intervalId = setInterval(() => {
      if (index >= 0) {
        this.typedText = this.typedText.slice(0, index);
        index--;
      } else {
        clearInterval(intervalId);
        this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
        setTimeout(() => {
          this.typeMessage();
        }, 500); // Adjust delay before typing next message (milliseconds)
      }
    }, 50); // Adjust erasing speed (milliseconds)

  }

  getYPosition(image: string): number {

    // console.log(this.background)
    const containerHeight = this.background.nativeElement.offsetHeight;
    const imageIndex = this.images.indexOf(image);
    const rowCount = Math.ceil(this.images.length / 3); // Assuming 3 images in each row

    // Calculate the top position based on the image's index and the container height
    return ((imageIndex % rowCount) * (containerHeight / rowCount));
  }

  getXPosition(image: string): number {
    const containerWidth = this.background.nativeElement.offsetWidth;
    const imageIndex = this.images.indexOf(image);
    const columnCount = 3; // Assuming 3 images in each row

    // Calculate the left position based on the image's index and the container width
    return ((Math.floor(imageIndex / columnCount)) * (containerWidth / columnCount));
  }
}



