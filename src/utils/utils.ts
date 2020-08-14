import qs from 'qs';

import { logging } from './settings';
import history from './history';

// import history from 'history';

// // Копирование в буфер обмена
// const copyToClipboard = (str, elem) => {
//   logging('count', 'start copyToClipboard');

//   const el = document.createElement('textarea');
//   el.value = str;
//   el.setAttribute('readonly', '');
//   el.style.position = 'absolute';
//   el.style.left = '-9999px';
//   document.body.appendChild(el);
//   el.select();
//   document.execCommand('copy');
//   document.body.removeChild(el);
//   elem.classList.add('copied');
// };

// // Проверка на совпадение
// const checkMatch = (str, searchQuery) => {
//   logging('count', 'start checkMatch');

//   // Регулярка для поиска совпадений
//   const reg = new RegExp(`${searchQuery}`);

//   // Проверяем на совпадение
//   const matched = str.toLowerCase().match(reg);

//   return matched;
// }

// // Удаляем объекты из массива с одинаковыми значениями определённого свойства
// const deleteDoublesFromArrayOfObjects = (arr, property) => {
//   logging('count', 'start deleteDoublesFromArrayOfObjects');

//   const uniqueKeys = [...new Set(arr.map(item => item[property]))];
//   const keys = [];
//   const result = [];

//   arr.forEach(el => {
//       if (keys.indexOf(el[property]) === -1) {
//           result.push(el);
//           keys.push(el[property]);
//       }
//   });

//   return result;
// }

// // Сортируем массив из объектов по определённому свойству в алфавитном порядке
// const alphabeticalSort = (arr, property) => {
//   logging('count', 'start alphabeticalSort');

//   arr.sort((a, b) => {
//       const x = a[property].toLowerCase();
//       const y = b[property].toLowerCase();
//       return x < y ? -1 : x > y ? 1 : 0;
//   });

//   return arr;
// }

// Выполняем функцию только для объектов узанного типа
export const eachObjects = (array, type, func) => {
  logging('count', 'start eachMeetingRooms');
  array.filter(obj => obj.type === type).forEach(obj => func(obj));
}

// Получаем данные в формате JSONP
export function getJSONP<A>(url): Promise<A> {
  return new Promise((resolve, reject) => {
    const ud = "_" + +new Date();
    const script = document.createElement("script");
    const head =
      document.getElementsByTagName("head")[0] || document.documentElement;

    window[ud] = (data) => {
      head.removeChild(script);
      if (!data) {
        reject("JSONP request error");
      }
      resolve(data);
    };

    script.src = url.replace("callback=?", "callback=" + ud);
    head.appendChild(script);
  });
}

// Получаем cookie по ключу
export const getCookie = (name) => {
  logging('count', 'start getCookie');

  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );

  return matches ? decodeURIComponent(matches[1]) : undefined;
};

// // Проверяем, выбрана ли данная локация для отображения
// const checkSelectedLocation = location => {
//   logging('count', 'start checkSelectedLocation');

//   for (let key in LOCATIONS) {
//       // Если данная локация выбрана для отображения, возвращаем true,
//       if (location === getSelectedLocation()) return true;
//       // если же данной локации нет в списке локаций в settings.js или же она не выбранна для отображение, возвразаем false
//       if (typeof LOCATIONS[location] === 'undefined' || typeof LOCATIONS[location].selected === 'undefined') return false;
//   }
// }

// // Получаем координаты центра прямоугольника
// const getCenterPolygon = coords => {
//   const x1 = coords[0][0];
//   const y1 = coords[0][1];

//   const x2 = coords[2][0];
//   const y2 = coords[2][1];

//   const xc = (x1 + x2) / 2;
//   const yc = (y1 + y2) / 2;

//   return [xc, yc];
// }

// Изменение параметров урла в браузерной строке
export const editBrowserUrl = (queryParams) => {
  logging('count', 'start editBrowserUrl');

  const queryString = qs.stringify(queryParams);

  history.push({search: queryString});
}

// // Возвращает разметку, состоящую из последовательно расположенных друг за другом ссылок
// const createChainOfLinksFromArray = (array, template, variable, delimiter) => {
//   logging('count', 'start createChainOfLinksFromArray');

//   if (array && array.length > 0) {
//       let chainOfLinks = [];

//       array.forEach(item => {
//           let href = template.replace(new RegExp(`${variable}`), item.id);
//           let link = `<a href="${href}" target="_blank">${item.name}</a>`;

//           chainOfLinks.push(link)
//       });

//       return chainOfLinks.join(delimiter);
//   }
// }
