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
try {
  randNumber(4, 5);
  randNumberToFixed(4.6, 6, 3);
} catch (error) {
  /* eslint-disable no-console*/
  console.error('Что-то пошло не так.', error);
  /*eslint-enable no-console*/
}
// homework3
const TYPE_FLOOR = ['palace', 'flat', 'house', 'bungalow']
const TIME = ['12:00', '13:00', '14:00']
const ROOM_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const PHOTO_GALLERY = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

const getRandomElement = typeArr => typeArr[Math.floor(Math.random() * typeArr.length)];

const getRandomElementFeatures = featuresArr => {
  const featuresArrIndex = [];
  const featuresArrLenght = randNumber(1, featuresArr.length);

  for (let i = 0; i < featuresArrLenght; i++) {
    featuresArrIndex.push(featuresArr[i])
  }
  return featuresArrIndex;
};

const getAvatar = () => 'img/avatars/user/0' + randNumber(1, 8) + '.png';

const createObject = () => {
  const x = randNumberToFixed(35.65000, 35.70000, 5)
  const y = randNumberToFixed(139.70000, 139.80000, 5)

  return {
    author: {
      avatar: getAvatar()
    },
    offer: {
      title: 'Предложение',
      address: `${x}, ${y}`,
      price: randNumber(1000, 5000),
      type: getRandomElement(TYPE_FLOOR),
      rooms: randNumber(1, 5),
      guests: randNumber(1, 10),
      checkin: getRandomElement(TIME),
      checkout: getRandomElement(TIME),
      features: getRandomElementFeatures(ROOM_FEATURES),
      description: 'Описание',
      photos: getRandomElementFeatures(PHOTO_GALLERY)
    },
    location: {
      x: x,
      y: y
    }
  }
};

const generateObjects = objectQuantity => {
  const resultArray = []

  for (let i = 0; i < objectQuantity; i++) {
    resultArray.push(createObject())
  }
  return resultArray;
};
console.log(generateObjects(10));
