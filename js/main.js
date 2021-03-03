const TYPE_FLOOR = ['palace', 'flat', 'house', 'bungalow']
const TIME = ['12:00', '13:00', '14:00']
const ROOM_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const PHOTO_GALLERY = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

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
};

const getRandomElements = (arr) => {
  const cloneArr = arr.slice();
  const randomSort = () => Math.floor(Math.random() * 3) - 1;

  return cloneArr.sort(randomSort).slice(0, randNumber(1, cloneArr.length));
};

const getAvatar = (number) => {
  const avatarID = `${number}`.padStart(2, '0');
  return `img/avatars/user/${avatarID}.png`
}

const createObject = () => {
  const X = randNumberToFixed(35.65000, 35.70000, 5)
  const Y = randNumberToFixed(139.70000, 139.80000, 5)
  const CHECK_TIME = getRandomElement(TIME)

  return {
    author: {
      avatar: getAvatar(randNumber(1, 11)),
    },
    offer: {
      title: 'Предложение',
      address: `${X}, ${Y}`,
      price: randNumber(1000, 5000),
      type: getRandomElement(TYPE_FLOOR),
      rooms: randNumber(1, 5),
      guests: randNumber(1, 10),
      checkin: CHECK_TIME,
      checkout: CHECK_TIME,
      features: getRandomElements(ROOM_FEATURES),
      description: 'Описание',
      photos: getRandomElements(PHOTO_GALLERY),
    },
    location: {
      x: X,
      y: Y,
    },
  }
};

const generateObjects = objectQuantity => {
  const resultArray = []

  for (let i = 0; i < objectQuantity; i++) {
    resultArray.push(createObject())
  }
  return resultArray;
};

generateObjects(10);
