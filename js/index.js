//
// Учитывая целое число x, вернуть, trueе сли xэто целое число палиндрома.
//
//     Целое число является палиндромом , если оно читается так же, как в прямом, так и в обратном порядке.
//
//     Например, 121есть палиндром, а 123нет.
//
//
//     Пример 1:
//
// Ввод: x = 121
// Вывод: true
// Объяснение: 121 читается как 121 слева направо и справа налево.
//     Пример 2:
//
// Ввод: x = -121
// Вывод: false
// Объяснение: Слева направо читается -121. Справа налево получается 121-. Следовательно, это не палиндром.
//     Пример 3:
//
// Ввод: x = 10
// Вывод: false
// Объяснение: 01 читается справа налево. Следовательно, это не палиндром.

// let isPalindrome = function (x) {
//     let a = String(x)
//     let b = a.split('').reverse().join('')
//     return a===b
// };
// console.log(isPalindrome(121))
// console.log(isPalindrome(123))
// console.log(isPalindrome(12))
// console.log(isPalindrome(11))


// Вам дано большое целое число , представленное в виде массива целых чисел digits, где каждое число digits[i]является цифрой целого числа. Цифры упорядочены от наиболее значащего к наименее значащему в порядке слева направо. Большое целое число не содержит начальных символов .ith0
//
// Увеличьте большое целое число на единицу и верните результирующий массив цифр .
//
//
//
//     Пример 1:
//
// Ввод: цифры = [1,2,3]
// Вывод: [1,2,4]
// Объяснение: Массив представляет целое число 123.
// Увеличение на единицу дает 123 + 1 = 124.
// Таким образом, результат должен быть [1,2,4].
//     Пример 2:
//
// Ввод: цифры = [4,3,2,1]
// Вывод: [4,3,2,2]
// Объяснение: Массив представляет целое число 4321.
// Увеличение на единицу дает 4321 + 1 = 4322.
// Таким образом, результат должен быть [4,3,2,2].

// let plusOne = function(digits) {
//     let a=''
//     for (let i = 0; i < digits.length; i++) {
//         a = a+digits[i]
//     }
//     let b = BigInt(a)+1n
//     return String(b).split('')
// };
//
//
// console.log(plusOne([1,2,3]))
// console.log(plusOne([4,3,2,1]))
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))


// Вам даны два массива целых чисел nums1и nums2, отсортированные в неубывающем порядке , и два целых числа mи n, представляющие количество элементов в nums1и nums2соответственно.
//
//     Объединить nums1 и nums2в один массив, отсортированный в неубывающем порядке .
//
//     Окончательный отсортированный массив не должен возвращаться функцией, а должен храниться внутри массиваnums1 . Чтобы приспособиться к этому, nums1имеет длину m + n, где первые mэлементы обозначают элементы, которые должны быть объединены, а последние nэлементы установлены 0и должны игнорироваться. nums2имеет длину n.
//
//
//
//     Пример 1:
//
// Ввод: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Вывод: [1,2,2,3,5,6]
// Объяснение: мы объединяем массивы [1,2,3] и [2,5,6].
//     Результатом слияния является [ 1 , 2 ,2, 3 ,5,6] с подчеркнутыми элементами, исходящими из nums1.
//     Пример 2:
//
// Ввод: nums1 = [1], m = 1, nums2 = [], n = 0
// Вывод: [1]
// Объяснение: Мы объединяем массивы [1] и [].
//     Результат слияния [1].

// let merge = function(nums1, m, nums2, n) {
// if( n === 0 ){
//     console.log(1)
//     return nums1
// }
// if(m === 0){
//     console.log(2)
//    nums1.splice(0,n,...nums2)
//     return nums1
// }
// nums1.splice(m,n,...nums2)
//     return nums1.sort((a,b)=>a-b)
//
// };
//
// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
// console.log(merge([1],1,[],0))
// console.log(merge([0],0,[2],1))


//Учитывая целочисленный массив, numsотсортированный в неубывающем порядке    , удалите дубликаты на месте , чтобы каждый уникальный элемент появлялся только один раз . Относительный порядок элементов должен быть сохранен .
//
//     Поскольку в некоторых языках невозможно изменить длину массива, вместо этого вы должны поместить результат в первую часть массива nums. Более формально, если есть kэлементы после удаления дубликатов, то первые kэлементы nums должны содержать окончательный результат. Неважно, что вы оставите за пределами первых  k элементов.
//
//     Возврат kпосле размещения конечного результата в первых kслотахnums .
//
//     Не выделяйте дополнительное пространство для другого массива. Вы должны сделать это, изменив входной массив на месте с дополнительной памятью O (1).
//
//     Пользовательский судья:
//
//     Судья проверит ваше решение с помощью следующего кода:
//
//     int[] числа = [...]; // Входной массив
// int[] ожидаемые числа = [...]; // Ожидаемый ответ правильной длины
//
// int k = удалить дубликаты (числа); // Вызывает вашу реализацию
//
// утверждать k == ожидаемоеNums.length;
// for (int i = 0; i < k; i++) {
//     утверждать nums[i] == ожидаемоеNums[i];
// }
// Если все утверждения пройдены, то ваше решение будет принято .
//
//     Пример 1:
//
// Ввод: nums = [1,1,2]
// Вывод: 2, nums = [1,2,_]
// Объяснение: Ваша функция должна возвращать k = 2, причем первые два элемента nums равны 1 и 2 соответственно.
//     Неважно, что вы оставляете за возвращенным k (следовательно, это символы подчеркивания).
// Пример 2:
//
// Ввод: числа = [0,0,1,1,1,2,2,3,3,4]
// Выход: 5, числа = [0,1,2,3,4,_,_,_,_, _]
// Объяснение: Ваша функция должна возвращать k = 5, причем первые пять элементов nums равны 0, 1, 2, 3 и 4 соответственно.
//     Неважно, что вы оставляете за возвращенным k (следовательно, это символы подчеркивания).

// let removeDuplicates = function(nums) {
//     let  i=1
//     for (let q=1; q<nums.length; ++q) {
//         if (nums[q] !== nums[q-1]) {
//             nums[i++] = nums[q];
//         }
//     }
//     nums.length = i;
//     console.log(nums.length = i)
//     return nums.length
// };
// console.log(removeDuplicates([1,1,2]))
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))


// Учитывая массив arrцелых чисел, проверьте, существуют ли два целых числа N, Mкоторые Nявляются двойными M( т.е. N = 2 * M).
//
//     Более формально проверьте, существуют ли два индекса i и j такие, что:
//
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
//
//
// Пример 1:
//
// Ввод: arr = [10,2,5,3]
// Вывод: true
// Объяснение: N  = 10— двойное число M  = 5, то есть 10 = 2 * 5.
// Пример 2:
//
// Ввод: arr = [7,1,14,11]
// Вывод: true
// Объяснение: N  = 14— двойное число M  = 7, то есть 14 = 2 * 7.
// Пример 3:
//
// Ввод: arr = [3,1,7,11]
// Вывод: ложь
// Объяснение: В этом случае не существует таких N и M, что N = 2 * M.

// let checkIfExist = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = arr.length-1; j >= 0; j--) {
//             console.log('i',arr[i])
//             console.log('j',arr[j])
//             console.log('j*2',arr[j]*2)
//             if(arr[i]===0) {
//                 i++
//             }
//
//             if (arr[i] === arr[j] * 2) {
//                 return true
//             }
//
//         }
//     }
//     return false
// };
//
//
// console.log(checkIfExist([-2,0,10,-19,4,6,-8]))
// console.log(checkIfExist([10, 2, 5, 3]))
// console.log(checkIfExist([7, 1, 14, 11]))
// console.log(checkIfExist([3, 1, 7, 11]))

// Дан массив целых чисел arr, возврат trueтогда и только тогда, когда это допустимый массив гор .
//
//     Напомним, что arr является горным массивом тогда и только тогда, когда:
//
// arr.length >= 3
// Существуют некоторые iс 0 < i < arr.length - 1таким, что:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
//
//
//
// Пример 1:
//
// Ввод: обр = [2,1]
// Вывод: ложь
// Пример 2:
//
// Ввод: обр = [3,5,5]
// Вывод: ложь
// Пример 3:
//
// Ввод: обр = [0,3,2,1]
// Вывод: правда

// let validMountainArray = function (arr) {
//     if (arr.length > 2) {
//         if (arr.length === 3) {
//             if (arr[0] < arr[1] && arr[1] > arr[2]) {
//                 return true
//             }
//             return false
//         }
//
//         if (arr[0] < arr[1]) {
//             let a = arr.indexOf(Math.max.apply(null, arr))
//             let arr1 = arr.filter((el, i) => i <= a)
//             let arr2 = arr.filter((el, i) => i > a)
//
//             if (arr2.length > 0 && arr1.length > 1) {
//                 for (let i = 0; i < arr1.length - 1; i++) {
//                     console.log(1)
//                     if (arr1[i] < arr1[i + 1]) {
//                     } else {
//                         return false
//                     }
//                 }
//
//                 for (let i = 0; i < arr2.length - 1; i++) {
//                     console.log(2)
//                     if (arr2[i] > arr2[i + 1]) {
//                     } else {
//                         return false
//                     }
//                 }
//                 console.log(3)
//                 return true
//             }
//
//             return false
//         }
//         return false
//
//     }
//     return false
// }


// let validMountainArray = function (arr) {
//     let  i = 0;
//     let j = arr.length - 1;
//     let n = arr.length - 1;
//     while (i + 1 < n && arr[i] < arr[i+1]) {
//         i++;
//     }
//
//     while (j > 0 && arr[j] < arr[j-1]) {
//         j--;
//     }
//
//     return (i > 0 && i == j && j < n);
// }
//
//
//
// console.log(validMountainArray([2,1]))
// console.log(validMountainArray([1,3,2]))
// console.log(validMountainArray([3,5,5]))
// console.log(validMountainArray([0, 3, 5, 6, 5, 3, 2, 1]))
// console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]))
// console.log(validMountainArray([0, 1, 2, 1, 2]))


// Учитывая массив arr, замените каждый элемент в этом массиве наибольшим элементом среди элементов справа от него и замените последний элемент на -1.
//
// После этого верните массив.
//
//
//
//     Пример 1:
//
// Ввод: обр = [17,18,5,4,6,1]
// Вывод: [18,6,6,6,1,-1]

// Объяснение:
//     - индекс 0 --> наибольший элемент справа от индекса 0 имеет индекс 1 (18).
// - индекс 1 --> наибольший элемент справа от индекса 1 имеет индекс 4 (6).
// - индекс 2 --> наибольший элемент справа от индекса 2 имеет индекс 4 (6).
// - индекс 3 --> наибольший элемент справа от индекса 3 имеет индекс 4 (6).
// - индекс 4 --> наибольший элемент справа от индекса 4 имеет индекс 5 (1).
// - индекс 5 --> справа от индекса 5 нет элементов, поэтому ставим -1.
// Пример 2:

// Ввод: arr = [400]
// Вывод: [-1]
// Объяснение: Справа от индекса 0 нет элементов.
//
let replaceElements = function(arr) {
    let max = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = max;
        if (temp > max) max = temp;
    }

    return arr

};


// let replaceElements = function(arr) {
//     if (arr.length ===1){
//         return arr =[-1]
//     }
//     for (let i = 0; i < arr.length; i++) {
//        let a = arr.slice(i+1,arr.length)
//         let b = Math.max(...a)
//         arr.splice(i,1,b)
//
//     }
//     arr.splice(arr.length-1,1,-1)
//
//     return arr
//
// };




console.log(replaceElements([400]))
console.log(replaceElements([17,18,5,4,6,1]))




