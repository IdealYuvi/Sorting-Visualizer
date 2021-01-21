class InsertionSort {
  constructor(insertionSortButton) {
    this.insertionSortButton = insertionSortButton;

    this.insertionSortButton.addEventListener('click', async () => {
      let buttons = document.querySelectorAll('button');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].style.opacity = 0.7;
      }

      await this.sort();

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].style.opacity = 1;
      }
    });
  }

  sort = async () => {
    let array = document.querySelectorAll('.block');

    for (let i = 1; i < array.length; i++) {
      let j = i;
      array[j].style.backgroundColor = '#9a1750';
      array[j - 1].style.backgroundColor = '#9a1750';

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

        array[j].style.backgroundColor = '#d9b08c';
        array[j - 1].style.backgroundColor = '#d9b08c';

        await this.swap(j, array);

        array[j].style.backgroundColor = '#123c69';
        array[j - 1].style.backgroundColor = '#123c69';

        j -= 1;
      }

      if (j > 0) {
        array[j].style.backgroundColor = '#123c69';
        array[j - 1].style.backgroundColor = '#123c69';
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
