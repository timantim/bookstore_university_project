package core.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import core.model.Book;
import core.repository.BookRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    private static final Logger log = LoggerFactory.getLogger(
            BookServiceImpl.class);

    @Autowired
    private BookRepository bookRepository;


    @Override
    public List<Book> findAll() {
        log.trace("findAll --- method entered");

        List<Book> books = bookRepository.findAll();

        log.trace("findAll: books={}", books);

        return books;
    }

    @Override
    @Transactional
    public Book updateBook(Long bookId, String bookname, String author, double price) {
        log.trace("updateStudent: bookname={}, author={}, price={}",
                  bookname, author, price);

        Optional<Book> book = bookRepository.findById(bookId);

        book.ifPresent(s -> {
            s.setBookname(bookname);
            s.setAuthor(author);
            s.setPrice(price);
        });

        log.trace("updateBook: book={}", book.get());

        return book.orElse(null);
    }

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public void deleteBook(Long bookId){
        bookRepository.deleteById(bookId);
    }

}
