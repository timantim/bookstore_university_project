package web.dto;

import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class BaseDto implements Serializable {
    private Long id;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id=id;
    }
}
