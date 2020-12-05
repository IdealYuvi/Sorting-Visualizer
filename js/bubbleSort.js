class BubbleSort {
  constructor(bubbleSortButton) {
    this.bubbleSortButton = bubbleSortButton;

    this.bubbleSortButton.addEventListener('click', async () => {
      let buttons = document.querySelectorAll('button');
      
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }

      await this.sort();

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
      }
    });
  }

  sort = async () => {
    let array = document.querySelectorAll('.block');
    let isSorted = false;
    let counter = 0;

    while (!isSorted) {
      isSorted = true;

      for (let i = 0; i < array.length - 1 - counter; i++) {
        let firstElement = Number(array[i].textContent);
        let secondElement = Number(array[i + 1].textContent);
        array[i].style.backgroundColor = '#ec524b';
        array[i + 1].style.backgroundColor = '#ec524b';

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 400)
        );

        if (firstElement > secondElement) {
          array[i].style.backgroundColor = '#13CE66';
          array[i + 1].style.backgroundColor = '#13CE66';

          await this.swap(i, array);

          isSorted = false;
        }

        array[i].style.backgroundColor = '#ffa62b';
        array[i + 1].style.backgroundColor = '#ffa62b';
      }
      counter += 1;
    }
  };

  swap = (i, array) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let tempHeight = array[i + 1].style.height;
        let tempContent = array[i + 1].textContent;

        array[i + 1].style.height = array[i].style.height;
        array[i + 1].textContent = array[i].textContent;

        array[i].style.height = tempHeight;
        array[i].textContent = tempContent;

        resolve();
      }, 400);
    });
  };
}
