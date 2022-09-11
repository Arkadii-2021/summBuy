import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movies';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new card should be no empty', () => {
  const cart2 = new Cart();
  
  cart2.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart2.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart2.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Fantastic, Action', 137));
  expect(cart2.items.length).toBe(3);
});

test('total summ in Cart', () => {
  const cart3 = new Cart();
  cart3.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart3.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart3.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Fantastic, Action', 137));
  expect(cart3.summPrice()).toBe(2900);
});


test('total summ in Cart', () => {
  const cart4 = new Cart();
  cart4.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart4.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart4.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Fantastic, Action', 137));
  cart4.del(1001);
  expect(cart4.items.length).toBe(2);
});