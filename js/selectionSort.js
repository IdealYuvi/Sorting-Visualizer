class SelectionSort {
  constructor(selectionSortButton) {
    this.selectionSortButton = selectionSortButton;

    this.selectionSortButton.addEventListener('click', async () => {
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
    let currentIdx = 0;

    while (currentIdx < array.length - 1) {
      let smallestIdx = currentIdx;

      for (let i = currentIdx; i < array.length; i++) {
        array[i].style.backgroundColor = '#ec524b';
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 400)
        );

        if (
          Number(array[smallestIdx].textContent) > Number(array[i].textContent)
        ) {
          array[smallestIdx].style.backgroundColor = '#ffa62b';
          array[currentIdx].style.backgroundColor = '#ec524b';
          smallestIdx = i;
        }

        array[i].style.backgroundColor = '#ffa62b';
        array[smallestIdx].style.backgroundColor = '#214252';
        array[currentIdx].style.backgroundColor = '#214252';
      }

      array[smallestIdx].style.backgroundColor = '#13CE66';
      array[currentIdx].style.backgroundColor = '#13CE66';

      await this.swap(smallestIdx, currentIdx, array);

      array[smallestIdx].style.backgroundColor = '#ffa62b';
      array[currentIdx].style.backgroundColor = '#ffa62b';

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
