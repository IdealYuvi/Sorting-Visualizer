class Newarray {
  constructor(generatearrayButton, array) {
    this.generatearrayButton = generatearrayButton;
    this.array = array;
    this.generatearray();

    this.generatearrayButton.addEventListener('click', this.generatearray);
  }

  generatearray = () => {
    for (let i = 0; i < this.array.length; i++) {
      let num = Math.floor(Math.random() * 100 + 5);
      this.array[i].textContent = num;
      this.array[i].style.height = `${num * 4}px`;
    }
  };
}
