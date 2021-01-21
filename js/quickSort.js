class QuickSort {
  constructor(quickSortButton) {
    this.quickSortButton = quickSortButton;

    this.quickSortButton.addEventListener('click', async () => {
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

    await this.helper(array, 0, array.length - 1);
  };

  helper = async (array, startIdx, endIdx) => {
    if (startIdx >= endIdx) {
      return;
    }

    let pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    while (rightIdx >= leftIdx) {
      array[pivotIdx].style.backgroundColor = '#5d001e';
      array[rightIdx].style.backgroundColor = '#9a1750';
      array[leftIdx].style.backgroundColor = '#9a1750';

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );

      if (
        Number(array[leftIdx].textContent) >
          Number(array[pivotIdx].textContent) &&
        Number(array[rightIdx].textContent) <
          Number(array[pivotIdx].textContent)
      ) {
        array[leftIdx].style.backgroundColor = '#d9b08c';
        array[rightIdx].style.backgroundColor = '#d9b08c';

        await this.swap(leftIdx, rightIdx, array);

        array[leftIdx].style.backgroundColor = '#123c69';
        array[rightIdx].style.backgroundColor = '#123c69';
      }

      if (
        Number(array[leftIdx].textContent) <=
        Number(array[pivotIdx].textContent)
      ) {
        array[leftIdx].style.backgroundColor = '#123c69';

        leftIdx += 1;
      }

      if (
        Number(array[rightIdx].textContent) >=
        Number(array[pivotIdx].textContent)
      ) {
        array[rightIdx].style.backgroundColor = '#123c69';

        rightIdx -= 1;
      }

      array[pivotIdx].style.backgroundColor = '#123c69';
    }

    array[pivotIdx].style.backgroundColor = '#d9b08c';
    array[rightIdx].style.backgroundColor = '#d9b08c';

    await this.swap(pivotIdx, rightIdx, array);

    array[pivotIdx].style.backgroundColor = '#123c69';
    array[rightIdx].style.backgroundColor = '#123c69';

    let leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - rightIdx + 1;

    if (leftSubarrayIsSmaller) {
      await this.helper(array, startIdx, rightIdx - 1);
      await this.helper(array, rightIdx + 1, endIdx);
    } else {
      await this.helper(array, rightIdx + 1, endIdx);
      await this.helper(array, startIdx, rightIdx - 1);
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
      }, 600);
    });
  };
}
