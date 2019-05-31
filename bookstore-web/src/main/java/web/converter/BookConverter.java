package web.converter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import core.model.Book;
import web.dto.BookDto;

/**
 * Created by radu.
 */

@Component
public class BookConverter extends BaseConverter<Book, BookDto> {

    private static final Logger log = LoggerFactory.getLogger(
            BookConverter.class);

    @Override
    public Book convertDtoToModel(BookDto dto) {
        Book book = new Book(dto.getBookname(), dto.getAuthor(),
                                      dto.getPrice());
        book.setId(dto.getId());
        return book;
    }

    @Override
    public BookDto convertModelToDto(Book book) {
        BookDto bookDto = new BookDto(book.getBookname(),
                                               book.getAuthor(),
                                               book.getPrice());
        bookDto.setId(book.getId());
        return bookDto;
    }
}
