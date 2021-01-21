class SelectionSort {
  constructor(selectionSortButton) {
    this.selectionSortButton = selectionSortButton;

    this.selectionSortButton.addEventListener('click', async () => {
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
    let currentIdx = 0;

    while (currentIdx < array.length - 1) {
      let smallestIdx = currentIdx;

      for (let i = currentIdx; i < array.length; i++) {
        array[i].style.backgroundColor = '#9a1750';
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 400)
        );

        if (
          Number(array[smallestIdx].textContent) > Number(array[i].textContent)
        ) {
          array[smallestIdx].style.backgroundColor = '#123c69';
          array[currentIdx].style.backgroundColor = '#9a1750';
          smallestIdx = i;
        }

        array[i].style.backgroundColor = '#123c69';
        array[smallestIdx].style.backgroundColor = '#5d001e';
        array[currentIdx].style.backgroundColor = '#5d001e';
      }

      array[smallestIdx].style.backgroundColor = '#d9b08c';
      array[currentIdx].style.backgroundColor = '#d9b08c';

      await this.swap(smallestIdx, currentIdx, array);

      array[smallestIdx].style.backgroundColor = '#123c69';
      array[currentIdx].style.backgroundColor = '#123c69';

      currentIdx += 1;
    }
  };

  swap = (i, j, array) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let tempHeight = array[j].style.height;
        let tempContent = array[j].textContent;

        array[j].style.height = array[i].style.height;
        array[j].textContent = array[i].textContent;

        array[i].style.height = tempHeight;
        array[i].textContent = tempContent;

        resolve();
      }, 400);
    });
  };
}
