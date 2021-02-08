function randNumber(from, to) {
  // Проверка на тип данных: вывести ошибку, если это не число
  if (typeof from !== 'number' || typeof to !== 'number') {
      throw new Error('Ошибка! Введите число.')
  }
  // если первый параметр меньше нуля, то преобразовать в положительное число
  if (from < 0) {
      from *= -1;
  }
  // если второй параметр меньше нуля, то преобразовать в положительное число
  if (to < 0) {
      to *= -1;
  }
  if (from >= to) {
      return from > to ?
          'Значение from ' + from + ' не должно быть больше to ' + to
          : 'Значение from ' + from + ' не должно быть равно to ' + to

  }
  return Math.floor(Math.random() * (Math.floor(to) - Math.floor(from) + 1)) + Math.floor(from);
}

let resultFinal = 0;

// Кексобукинг
function randNumberToFixed(from, to, quantity) {
  if (typeof from !== 'number' || typeof to !== 'number') {
      throw new Error('Ошибка! Введите число.')
  }
  if (from < 0 || to < 0) {
      throw new Error('Ошибка! Некорректный диапазон.')
  }

  if (from >= to) {
      return from > to ?
          'Значение from ' + from + ' не должно быть больше to ' + to
          : 'Значение from ' + from + ' не должно быть равно to ' + to
  }

  let result = Math.random() * (to - from) + from;

  return Number(result.toFixed(quantity));
}

let resultFinalToFixed = 0;

try {
  resultFinal = randNumber(2.6, 5);
  resultFinalToFixed = randNumberToFixed(3.6, '6.7', 10);
}
catch (error) {
  console.error('Что-то пошло не так.', error);
}

console.log('ДЗ второе:', randNumber(2.6, 5));
console.log('ДЗ второе - Кексобукинг:', randNumberToFixed(3.6, 6.7, 10));

// console.log('ДЗ второе:', randNumber(10, 17));
// console.log('ДЗ второе:', randNumber(2, 1));
// console.log('ДЗ второе:', randNumber(-1, 7));
// console.log('ДЗ второе:', randNumber(0, 3));
// console.log('ДЗ второе:', randNumber(4, 4));
// console.log('ДЗ второе:', randNumber(-4, -2));
// console.log('ДЗ второе - Кексобукинг:', randNumberToFixed(2.12212, 1.45542, 3));
// console.log('ДЗ второе - Кексобукинг:', randNumberToFixed(-1.74638274, 7.313432, 5));
// console.log('ДЗ второе - Кексобукинг:', randNumberToFixed(0.4432, 3.112, 1));
// console.log('ДЗ второе - Кексобукинг:', randNumberToFixed(3.344, 4.4212, 0));
// console.log('ДЗ второе - Кексобукинг:', randNumberToFixed(-4.3323, -2.1111, 2));
