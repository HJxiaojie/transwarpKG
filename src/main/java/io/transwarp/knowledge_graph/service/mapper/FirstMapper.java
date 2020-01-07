package io.transwarp.knowledge_graph.service.mapper;

import io.transwarp.knowledge_graph.service.dto.FirstDTO;

import io.transwarp.knowledge_graph.domain.First;
import org.mapstruct.*;

/**
 * Mapper for the entity First and its DTO FirstDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface FirstMapper extends EntityMapper<FirstDTO, First> {



    default First fromId(Long id) {
        if (id == null) {
            return null;
        }
        First first = new First();
        first.setId(id);
        return first;
    }
}
