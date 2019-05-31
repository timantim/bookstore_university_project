package core.model;

import lombok.*;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(callSuper = true)
public class Client extends BaseEntity<Long> {
    private String name;

    @Override
    public String toString() {
        return "Base{" +
                "name='" + name + '\'' +
                "} " + super.toString();
    }
}
