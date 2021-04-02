function randNumber(from, to) {
  if (isNaN(from) || isNaN(to)) {
    throw new Error('Ошибка! Некорректный тип аргумента.')
  }
  if (from < 0 || to < 0) {
    throw new Error('Ошибка! Некорректный диапазон.')
  }
  if (from >= to) {
    return from > to ?
      'Значение from ' + from + ' не должно быть больше to ' + to : from;
  }
  return Math.floor(Math.random() * (Math.floor(to) - Math.floor(from) + 1)) + Math.floor(from);
}
function randNumberToFixed(from, to, precision) {
  if (isNaN(precision) || precision < 0) {
    throw new Error('Ошибка! Некорректный тип аргумента.')
  }
  const QUANTITY = Math.pow(10, precision);
  return randNumber(from * QUANTITY, to * QUANTITY) / QUANTITY;
}

function getRandomElement(typeArr) {
  return typeArr[randNumber(0, typeArr.length - 1)];
}

export { randNumber, randNumberToFixed, getRandomElement };
