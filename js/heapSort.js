class HeapSort {
  constructor(heapSortButton) {
    this.heapSortButton = heapSortButton;
    this.array = document.querySelectorAll('.block');
    this.heapSortButton.addEventListener('click', async () => {
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
    let { array } = this;

    await this.buildMaxHeap(array);

    for (let i = array.length - 1; i >= 1; i--) {
      array[i].style.backgroundColor = '#d9b08c';
      array[0].style.backgroundColor = '#d9b08c';

      await this.swap(0, i, array);

      array[i].style.backgroundColor = '#123c69';
      array[0].style.backgroundColor = '#123c69';

      await this.siftDown(0, i - 1, array);
    }

    return array;
  };

  buildMaxHeap = async (array) => {
    let firstParentIdx = parseInt((array.length - 1 - 1) / 2);

    for (let i = firstParentIdx; i >= 0; i--) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 500)
      );

      await this.siftDown(i, array.length - 1, array);
    }
  };

  siftDown = async (currentIdx, endIdx, array) => {
    let childOneIdx = currentIdx * 2 + 1;
    let childTwoIdx;
    let idxToSwap;

    while (childOneIdx <= endIdx) {
      if (currentIdx * 2 + 2 <= endIdx) {
        childTwoIdx = currentIdx * 2 + 2;
      } else {
        childTwoIdx = -1;
      }

      if (
        childTwoIdx > -1 &&
        Number(array[childTwoIdx].textContent) >
          Number(array[childOneIdx].textContent)
      ) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (
        Number(array[idxToSwap].textContent) >
        Number(array[currentIdx].textContent)
      ) {
        array[currentIdx].style.backgroundColor = '#9a1750';
        array[idxToSwap].style.backgroundColor = '#9a1750';

        await this.swap(currentIdx, idxToSwap, array);

        array[currentIdx].style.backgroundColor = '#123c69';
        array[idxToSwap].style.backgroundColor = '#123c69';

        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
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
      }, 500);
    });
  };
}
