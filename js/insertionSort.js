class InsertionSort {
  constructor(insertionSortButton) {
    this.insertionSortButton = insertionSortButton;

    this.insertionSortButton.addEventListener('click', async () => {
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

    for (let i = 1; i < array.length; i++) {
      let j = i;
      array[j].style.backgroundColor = '#ec524b';
      array[j - 1].style.backgroundColor = '#ec524b';

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      while (
        j > 0 &&
        Number(array[j].textContent) < Number(array[j - 1].textContent)
      ) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 400)
        );

        array[j].style.backgroundColor = '#13CE66';
        array[j - 1].style.backgroundColor = '#13CE66';

        await this.swap(j, array);

        array[j].style.backgroundColor = '#ffa62b';
        array[j - 1].style.backgroundColor = '#ffa62b';

        j -= 1;
      }

      if (j > 0) {
        array[j].style.backgroundColor = '#ffa62b';
        array[j - 1].style.backgroundColor = '#ffa62b';
      }
    }
  };

  swap = (j, array) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let tempHeight = array[j - 1].style.height;
        let tempContent = array[j - 1].textContent;

        array[j - 1].style.height = array[j].style.height;
        array[j - 1].textContent = array[j].textContent;

        array[j].style.height = tempHeight;
        array[j].textContent = tempContent;

        resolve();
      }, 300);
    });
  };
}
