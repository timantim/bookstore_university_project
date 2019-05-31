package core.model;

import lombok.*;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(callSuper = true)
public class Book extends BaseEntity<Long> {
    private String bookname;
    private String author;
    private double price;

    @Override
    public String toString() {
        return "Base{" +
                "bookname='" + bookname + '\'' +
                ", author='" + author + '\'' +
                ", price=" + price +
                "} " + super.toString();
    }
}
