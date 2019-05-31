package core.model;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(callSuper = true)
public class Purchase extends BaseEntity<Long> {
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "book_id")
    private Book book;
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "client_id")
    private Client client;
    private Integer quantity;

    @Override
    public String toString() {
        return "Purchase{" +
                "Book='" + book + '\'' +
                ", Quantity='" + quantity + '\'' +
                ", Client='" + client + '\'' +
                "} " + super.toString();
    }
}
