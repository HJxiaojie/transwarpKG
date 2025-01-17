package io.transwarp.knowledge_graph.service.dto;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the First entity.
 */
public class FirstDTO implements Serializable {

    private Long id;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        FirstDTO firstDTO = (FirstDTO) o;
        if (firstDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), firstDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "FirstDTO{" +
            "id=" + getId() +
            "}";
    }
}
