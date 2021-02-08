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
