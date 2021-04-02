import {randNumber, randNumberToFixed, getRandomElement} from './util.js';
import {
  TYPE_FLOOR,
  TIME,
  ROOM_FEATURES,
  PHOTO_GALLERY,
  MIN_PRICE,
  MAX_PRICE,
  MIN_ROOMS,
  MAX_ROOMS,
  MIN_GUESTS,
  MAX_GUESTS,
  LOCATION_X_START,
  LOCATION_X_END,
  LOCATION_Y_START,
  LOCATION_Y_END,
  ROUNDING_LOCATION,
  AVATAR_LINK_FIRST,
  AVATAR_LINK_LAST
} from './constant.js';

const getRandomElements = (arr) => {
  const cloneArr = arr.slice();
  const randomSort = () => Math.floor(Math.random() * 3) - 1;

  return cloneArr.sort(randomSort).slice(0, randNumber(1, cloneArr.length));
}

const getAvatar = (number) => {
  const avatarID = `${number}`.padStart(2, '0');
  return `img/avatars/user/${avatarID}.png`
}

const createObject = () => {
  const X = randNumberToFixed(LOCATION_X_START, LOCATION_X_END, ROUNDING_LOCATION)
  const Y = randNumberToFixed(LOCATION_Y_START, LOCATION_Y_END, ROUNDING_LOCATION)
  const CHECK_TIME = getRandomElement(TIME)

  return {
    author: {
      avatar: getAvatar(randNumber(AVATAR_LINK_FIRST, AVATAR_LINK_LAST)),
    },
    offer: {
      title: 'Предложение',
      address: `${X}, ${Y}`,
      price: randNumber(MIN_PRICE, MAX_PRICE),
      type: getRandomElement(TYPE_FLOOR),
      rooms: randNumber(MIN_ROOMS, MAX_ROOMS),
      guests: randNumber(MIN_GUESTS, MAX_GUESTS),
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
}

const generateObjects = objectQuantity => {
  const resultArray = []

  for (let i = 0; i < objectQuantity; i++) {
    resultArray.push(createObject())
  }
  return resultArray;
}

export { generateObjects };
