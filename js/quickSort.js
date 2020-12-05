class QuickSort {
  constructor(quickSortButton) {
    this.quickSortButton = quickSortButton;

    this.quickSortButton.addEventListener('click', async () => {
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
      array[pivotIdx].style.backgroundColor = '#214252';
      array[rightIdx].style.backgroundColor = '#ec524b';
      array[leftIdx].style.backgroundColor = '#ec524b';

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
        array[leftIdx].style.backgroundColor = '#13CE66';
        array[rightIdx].style.backgroundColor = '#13CE66';

        await this.swap(leftIdx, rightIdx, array);

        array[leftIdx].style.backgroundColor = '#ffa62b';
        array[rightIdx].style.backgroundColor = '#ffa62b';
      }

      if (
        Number(array[leftIdx].textContent) <=
        Number(array[pivotIdx].textContent)
      ) {
        array[leftIdx].style.backgroundColor = '#ffa62b';

        leftIdx += 1;
      }

      if (
        Number(array[rightIdx].textContent) >=
        Number(array[pivotIdx].textContent)
      ) {
        array[rightIdx].style.backgroundColor = '#ffa62b';

        rightIdx -= 1;
      }

      array[pivotIdx].style.backgroundColor = '#ffa62b';
    }

    array[pivotIdx].style.backgroundColor = '#13CE66';
    array[rightIdx].style.backgroundColor = '#13CE66';

    await this.swap(pivotIdx, rightIdx, array);

    array[pivotIdx].style.backgroundColor = '#ffa62b';
    array[rightIdx].style.backgroundColor = '#ffa62b';

    let leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - rightIdx + 1;

    if (leftSubarrayIsSmaller) {
      this.helper(array, startIdx, rightIdx - 1);
      this.helper(array, rightIdx + 1, endIdx);
    } else {
      this.helper(array, rightIdx + 1, endIdx);
      this.helper(array, startIdx, rightIdx - 1);
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
