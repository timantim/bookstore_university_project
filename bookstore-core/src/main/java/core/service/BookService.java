package core.service;

import core.model.Book;

import java.util.List;

public interface BookService {
    List<Book> findAll();

    Book updateBook(Long bookId, String bookname, String author, double price);

    Book saveBook(Book book);

    void deleteBook(Long bookId);

}
