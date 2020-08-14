// Режим логирования
// Объявленно через let, так что режим можно переключать прямо через консоль
let isLogMode = true;
// let logging;
// Ждём когда загрузится документ страницы, чтобы иметь возможность обращаться к isGodMode
// document.addEventListener('DOMContentLoaded', function () {
//     // Логирование доступно только тем, кто имеет доступ к редактированию карты
//     if (isGodMode) {
//         // При загрузке, очищаем историю вывода консоли браузера
//         if (isLogMode) console.clear();
//         // Функция, которую необходимо использовать вместе стандартного console.log
//         logging = (type, ...options) => {
//             // И тогда вывод в консоль будет происходить только тогда, когда включён режим логирования
//             if (isLogMode) {
//                 // Для того, чтобы вывести информацию, выделив её стилями, первым параметром нужно передать 'cust',
//                 if (type === 'cust') {
//                     let style;

//                     // а вторым то, в каком стиле мы хотим видеть информацию;
//                     // третьим же параметром указываем то, что нужно вывести
//                     switch (options.splice(0, 1)[0]) {
//                         // Если информация должна быть заметна среди всех выводов
//                         case 'important':
//                             style = ['%c%s', 'color: green; font: 1.2rem/1 Tahoma;'];
//                             break;
//                         // Чтобы информация бросалась в глаза, т.к. мы будем выводить её несколько раз, чтобы сравнить вывод
//                         case 'compare':
//                             style = ['%c%s', 'color: red;'];
//                             break;
//                         // Тут мы выводим какие-то данные
//                         case 'array':
//                             style = ['%c%s', 'color: blue; font-size: 1.2em;'];
//                             break;
//                         // Пометки о том, что нужно сделать в будущем
//                         case 'todo':
//                             options[0] = `TODO: ${options[0]}`;
//                             style = ['%c%s', 'color: orange; text-decoration: underline;'];
//                             break;
//                         // Пометки о том, от чего в будущем обязательно надо будет избавиться
//                         case 'delete':
//                             options[0] = `DELETE: ${options[0]}`;
//                             style = ['%c%s', 'color: red; text-decoration: underline;'];
//                             break;
//                         default:
//                           break;
//                     }
//                     console.log(...style, ...options);
//                 } else {
//                     // Если мы не хотим использовать вывод со стилями, то первым параметров нужно указать, какой тип консоли мы хотим(log, count и т.п.)
//                     console[type](...options);
//                 }
//             };
//         }
//     }
// });

export const logging = (type, ...options) => {
  // И тогда вывод в консоль будет происходить только тогда, когда включён режим логирования
  if (isLogMode) {
      // Для того, чтобы вывести информацию, выделив её стилями, первым параметром нужно передать 'cust',
      if (type === 'cust') {
          let style;

          // а вторым то, в каком стиле мы хотим видеть информацию;
          // третьим же параметром указываем то, что нужно вывести
          switch (options.splice(0, 1)[0]) {
              // Если информация должна быть заметна среди всех выводов
              case 'important':
                  style = ['%c%s', 'color: green; font: 1.2rem/1 Tahoma;'];
                  break;
              // Чтобы информация бросалась в глаза, т.к. мы будем выводить её несколько раз, чтобы сравнить вывод
              case 'compare':
                  style = ['%c%s', 'color: red;'];
                  break;
              // Тут мы выводим какие-то данные
              case 'array':
                  style = ['%c%s', 'color: blue; font-size: 1.2em;'];
                  break;
              // Пометки о том, что нужно сделать в будущем
              case 'todo':
                  options[0] = `TODO: ${options[0]}`;
                  style = ['%c%s', 'color: orange; text-decoration: underline;'];
                  break;
              // Пометки о том, от чего в будущем обязательно надо будет избавиться
              case 'delete':
                  options[0] = `DELETE: ${options[0]}`;
                  style = ['%c%s', 'color: red; text-decoration: underline;'];
                  break;
              default:
                break;
          }
          console.log(...style, ...options);
      } else {
          // Если мы не хотим использовать вывод со стилями, то первым параметров нужно указать, какой тип консоли мы хотим(log, count и т.п.)
          console[type](...options);
      }
  };
}

// // Цвета
// export const COLORS = {
//     default: '#8BC540',
//     disable: '#9BA9AD',
//     mark: '#FF0000',
//     nonImportant: '#D1E8B3',
//     seatingNoRules: '#FED141',
//     select: '#7AAC38',
// };

// // Иконки
// export const ICONS = {
//     greenArrow: '<?xml version="1.0" encoding="UTF-8"?><svg width="16px" height="14px" viewBox="0 0 50 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon/done/green" transform="translate(0.000000, -3.000000)" fill="#82BF00" fill-rule="nonzero"><polygon id="Shape" points="15.9090909 33.9548207 6.09607409 23.2165366 0 29.3391133 15.9090909 46.4285714 50 9.80830392 42.6725187 3.57142857"></polygon></g></g></svg>',
//     redCross: '<?xml version="1.0" encoding="UTF-8"?><svg width="16px" height="14px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ic-close"><polygon id="Path" points="0 0 50 0 50 50 0 50"></polygon><polygon id="Path" fill="#FF0000" points="50 5.05357143 44.9464286 0 25 19.9464286 5.05357143 0 0 5.05357143 19.9464286 25 0 44.9464286 5.05357143 50 25 30.0535714 44.9464286 50 50 44.9464286 30.0535714 25"></polygon></g></g></svg>',
// };

// // Путь до корневой папки
// export const ROOT_PATH = '/local/templates/.default/components/local/block/portal_map/src';
// // Путь до файла с данными объектов на карте
// export const DATA_PATH = `${ROOT_PATH}/data.json`;
// // Путь до папки с изображениями
// export const IMAGES_PATH = `${ROOT_PATH}/images`;
// // Максимальный зум
// export const MAX_ZOOM = 23;
// // Минимальный зум
// export const MIN_ZOOM = 20;
// // Ширина изображения в пикселях на максимальном зуме
// export const PIC_WIDTH = 4608;
// // Высота изображения в пикселях на максимальном зуме
// export const PIC_HEIGHT = 3584;

// // Обёртка над блоком с фильтром переговорок по опциям
// export const OPTIONS_BLOCK_PARENT = document.querySelector('.options-container');
// // Кнопка скрытия блока с фильтрами переговорок по опциям
// export const TOGGLE_OPTIONS_BLOCK_BUTTON = document.querySelector('.options-hide-button');
// // Поле поиска
// export const SEARCH_INPUT = document.getElementById('search-on-map');
// // Блок с чекбоксами для выбора опций переговорок
// export const OPTIONS_BLOCK = document.getElementById('options');
// // Блок с выпадающим списком подсказок при вводе в строку поиска
// export const SEARCH_HINTS = document.querySelector('.search__hint');
// // Блок для хранения выбранных фильтров через строку поиска
// export const COMBO_FILTER = document.querySelector('.search__hint-temp');
// // Индикатор, показывающий, что карта загружается
// export const LOADER_MAP = document.getElementById('loaderMap');
// // Список для фильтра по кол-ву мест
// export const CAPACITY_LIST = document.getElementById('capacityDropdown');
// // Выбранный фильтр кол-ва мест
// export const CAPACITY_DISPLAY = document.getElementById('capacityDisplay');
// // Кнопка открытия закртия списка фильтра по кол-ву мест
// export const CAPACITY_BUTTON = document.getElementById('dropwdownOpen');
// // Стрелочка у фильтра по кол-ву мест, указывающая на то, открыт или закрыт список
// export const CAPACITY_ARROW = document.querySelector('.filter__capacity-display b');
// // Кнопка сброса фильтров
// export const RESET_FILTERS = document.querySelector('.reset-options');
// // Обёртка для блока с избранными объектами
// export const FAVORITES_BLOCK_WRAPPER = document.querySelector('.favorites-block');
// // Блок с избранными объектами
// export const FAVORITES_BLOCK = FAVORITES_BLOCK_WRAPPER.querySelector('.custom__scroll_gray');
// // Кнопка открытия блока с избранными объектами
// export const FAVORITES_BLOCK_BUTTON = FAVORITES_BLOCK_WRAPPER.querySelector('.right-hiddens-block__button');
// // Блок, в котором хранятся контактные лица
// export const CONTACT_PARENT = document.querySelector('.content-page__side-content');
// // Класс контактного лица
// export const CONTACT_WRAP = '.contact-person';
// // Класс, в котором содержится email контактного лица
// export const CONTACT_EMAIL = '.person_email a';

// // Переменная для хранения номера последовательности табуляции
// export let globalTabindex = 5;
