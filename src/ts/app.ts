import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movies';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Fantastic, Action', 137));

// Возвращает все товары в корзине
console.log('\nВозвращает все товары в корзине:\n', cart.items);

// Общая сумма без скидки
console.log('\nОбщая сумма без скидки:', cart.summPrice());

// Общая сумма со скидкой
console.log('\nОбщая сумма со скидкой:', cart.summPrice(0.05));

// Удаление товара в корзине по его ID
cart.del(1001);

// Товары в корзине после удаления
console.log('\nТовары в корзине после удаления:\n', cart.items);

