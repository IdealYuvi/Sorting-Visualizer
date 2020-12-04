const arrayContainer = document.getElementById('flex-container');
const generatearrayButton = document.getElementById('generateNewarray');
const bubbleSortButton = document.getElementById('bubbleSort');
const insertionSortButton = document.getElementById('insertionSort');
const selectionSortButton = document.getElementById('selectionSort');
const quickSortButton = document.getElementById('quickSort');
const heapSortButton = document.getElementById('heapSort');
const array = document.querySelectorAll('.block');

const newarray = new Newarray(generatearrayButton, array);
const bubbleSort = new BubbleSort(bubbleSortButton);
const insertionSort = new InsertionSort(insertionSortButton);
const selectionSort = new SelectionSort(selectionSortButton);
const quickSort = new QuickSort(quickSortButton);
const heapSort = new HeapSort(heapSortButton);
