package web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import core.model.Book;
import core.service.BookService;
import web.converter.BookConverter;
import web.dto.BookDto;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by radu.
 */

@RestController
public class BookController {

    private static final Logger log = LoggerFactory.getLogger(
            BookController.class);

    @Autowired
    private BookService bookService;

    @Autowired
    private BookConverter bookConverter;


    @RequestMapping(value = "/books", method = RequestMethod.GET)
    public List<BookDto> getBooks() {
        log.trace("getBooks");

        List<Book> books = bookService.findAll();

        log.trace("getBooks: books={}", books);

        return new ArrayList<>(bookConverter.convertModelsToDtos(books));
    }

    @RequestMapping(value = "/books/{bookId}", method = RequestMethod.PUT)
    public BookDto updateBook(
            @PathVariable final Long bookId,
            @RequestBody final BookDto bookDto) {
        log.trace("updateBook: bookId={}, bookDtoMap={}", bookId,
                  bookDto);

        Book book = bookService.updateBook(bookId,
                                                       bookDto.getBookname(),
                                                       bookDto.getAuthor(),
                                                       bookDto.getPrice());

        BookDto result = bookConverter.convertModelToDto(book);

        log.trace("updateBook: result={}", result);

        return result;
    }

    @RequestMapping(value = "/books", method = RequestMethod.POST)
    BookDto saveBook(@RequestBody BookDto dto) {
        return bookConverter.convertModelToDto(
                bookService.saveBook(
                        bookConverter.convertDtoToModel(dto)
                ));
    }

    @RequestMapping(value = "/books/{bookId}", method = RequestMethod.DELETE)
    public void deleteBook(@PathVariable final Long bookId) {
        log.trace("deleteBook: bookId={}", bookId);

        bookService.deleteBook(bookId);
    }


}
