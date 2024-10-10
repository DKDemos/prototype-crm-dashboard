export const users = [
  {
    id: 1,
    firstname: 'Олена',
    lastname: 'Середа',
    email: 'zbrovarenko@ukr.net',
    phone: '+380964094101',
    birthday: '1987-02-02',
    gender: 'other',
    website: 'http://sergienko.com',
    image: 'http://placeimg.com/640/480/people',
  },
  {
    id: 2,
    firstname: 'Світлана',
    lastname: 'Микитюк',
    email: 'qvasilcuk@mirosnicenko.com.ua',
    phone: '+380633133778',
    birthday: '1999-03-26',
    gender: 'female',
    website: 'http://kramarenko.org.ua',
    image: 'http://placeimg.com/640/480/people',
  },
  {
    id: 3,
    firstname: 'Інна',
    lastname: 'Крамарчук',
    email: 'szakharcuk@dmitrenko.net.ua',
    phone: '+380932724277',
    birthday: '1955-02-23',
    gender: 'female',
    website: 'http://antonenko.com.ua',
    image: 'http://placeimg.com/640/480/people',
  },
  {
    id: 4,
    firstname: 'Марія',
    lastname: 'Кравчук',
    email: 'gsevcenko@mikituk.com',
    phone: '+380938976505',
    birthday: '1940-01-02',
    gender: 'female',
    website: 'http://gnatuk.net.ua',
    image: 'http://placeimg.com/640/480/people',
  },
  {
    id: 5,
    firstname: 'Павло',
    lastname: 'Васильчук',
    email: 'adam.lisenko@i.ua',
    phone: '+380663662528',
    birthday: '1936-08-15',
    gender: 'male',
    website: 'http://kravcenko.net.ua',
    image: 'http://placeimg.com/640/480/people',
  },
  {
    id: 6,
    firstname: 'Назар',
    lastname: 'Петренко',
    email: 'utarasuk@i.ua',
    phone: '+380961615166',
    birthday: '1991-02-26',
    gender: 'male',
    website: 'http://gnatuk.net.ua',
    image: 'http://placeimg.com/640/480/people',
  },
  {
    id: 7,
    firstname: 'Йосип',
    lastname: 'Шевченко',
    email: 'zakharcuk.maksim@i.ua',
    phone: '+380918627118',
    birthday: '2014-08-07',
    gender: 'male',
    website: 'http://ponomarenko.org',
    image: 'http://placeimg.com/640/480/people',
  },
  {
    id: 8,
    firstname: 'Олександр',
    lastname: 'Микитюк',
    email: 'sevcuk.kostantin@panasuk.net.ua',
    phone: '+380912930115',
    birthday: '1950-08-04',
    gender: 'other',
    website: 'http://sevcenko.net.ua',
    image: 'http://placeimg.com/640/480/people',
  },
  {
    id: 9,
    firstname: "В'ячеслав",
    lastname: 'Кравчук',
    email: 'ivancenko.marina@melnicenko.ua',
    phone: '+380635516703',
    birthday: '2024-08-16',
    gender: 'male',
    website: 'http://vasilenko.net',
    image: 'http://placeimg.com/640/480/people',
  },
  {
    id: 10,
    firstname: 'Валентина',
    lastname: 'Гнатюк',
    email: 'msinkarenko@petrenko.org',
    phone: '+380990781654',
    birthday: '1970-03-17',
    gender: 'other',
    website: 'http://gnatuk.com.ua',
    image: 'http://placeimg.com/640/480/people',
  },
];

export const objects = Array.from({ length: 10 }, (v, i) => ({
  id: i + 1,
  title: `Object ${i + 1}`,
}));

export const facilities = Array.from({ length: 10 }, (v, i) => ({
  id: i + 1,
  title: `Facility ${i + 1}`,
}));

export const connections = Array.from({ length: 10 }, (v, i) => ({
  id: i + 1,
  title: `Connection ${i + 1}`,
}));

export const orders = [
  {
    id: 'f41acb21-22ee-4150-8f7f-4baf1d08d805',
    searchId: 0,
    author: 'Sd as',
    date: '2024-10-10T21:23:00',
    facility: [1, 3, 4],
    connection: [1, 3, 4],
    orderText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur, ipsa enim perspiciatis nesciunt, perferendis velit aperiam dicta debitis molestiae eveniet consequuntur doloribus veritatis magni impedit, alias temporibus hic expedita?',
    needsToBeAcquainted: [1, 3, 4],
    acquainted: [1, 3, 4],
    acquaintedWithDecline: [1, 3, 4],
    status: 'active',
  },
  {
    id: '79abb6da-40d1-4d71-9d16-c5f6a96f3999',
    searchId: 1,
    author: 'Sdasd IJIds',
    date: '2024-09-10T21:23:00',
    facility: [1, 3, 4],
    connection: [1, 3, 4],
    orderText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur, ipsa enim perspiciatis nesciunt, perferendis velit aperiam dicta debitis molestiae eveniet consequuntur doloribus veritatis magni impedit, alias temporibus hic expedita?',
    needsToBeAcquainted: [1, 3, 4],
    acquainted: [1, 3, 4],
    acquaintedWithDecline: [1, 3, 4],
    status: 'active',
  },
  {
    id: 'e972576b-f3c6-40af-acab-939d99b52282',
    searchId: 2,
    author: 'Oqerqeip SLjdasd',
    date: '2024-10-10T21:13:00',
    facility: [1, 3, 4],
    connection: [1, 3, 4],
    orderText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur, ipsa enim perspiciatis nesciunt, perferendis velit aperiam dicta debitis molestiae eveniet consequuntur doloribus veritatis magni impedit, alias temporibus hic expedita?',
    needsToBeAcquainted: [1, 3, 4],
    acquainted: [1, 3, 4],
    acquaintedWithDecline: [1, 3, 4],
    status: 'declined',
  },
  {
    id: '953197a5-8340-474a-b174-3ea567f3ae20',
    searchId: 3,
    author: 'Asdfasd Pqscx',
    date: '2024-10-12T21:23:00',
    facility: [1, 3, 4],
    connection: [1, 3, 4],
    orderText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur, ipsa enim perspiciatis nesciunt, perferendis velit aperiam dicta debitis molestiae eveniet consequuntur doloribus veritatis magni impedit, alias temporibus hic expedita?',
    needsToBeAcquainted: [1, 3, 4],
    acquainted: [1, 3, 4],
    acquaintedWithDecline: [1, 3, 4],
    status: 'pending',
  },
];

export const groups = Array.from({ length: 10 }, (v, i) => ({
  id: i + 1,
  title: `Group ${i + 1}`,
  users: Math.floor(Math.random() * 99) + 1,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur, ipsa enim perspiciatis nesciunt, perferendis velit aperiam dicta debitis molestiae eveniet consequuntur doloribus veritatis magni impedit, alias temporibus hic expedita?',
}));

function createRandomArray() {
  const randomArray = Array.from(
    { length: Math.floor(Math.random() * 10) + 1 },
    () => Math.floor(Math.random() * 10) + 1
  );
  return randomArray;
}

export const categories = Array.from({ length: 5 }, (v, i) => ({
  id: i + 1,
  title: `Category ${i + 1}`,
  groups: createRandomArray(),
}));
