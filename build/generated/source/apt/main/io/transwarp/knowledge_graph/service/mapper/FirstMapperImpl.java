package io.transwarp.knowledge_graph.service.mapper;

import io.transwarp.knowledge_graph.domain.First;
import io.transwarp.knowledge_graph.service.dto.FirstDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-11-01T15:21:53+0800",
    comments = "version: 1.2.0.Final, compiler: javac, environment: Java 1.8.0_222 (AdoptOpenJDK)"
)
@Component
public class FirstMapperImpl implements FirstMapper {

    @Override
    public First toEntity(FirstDTO dto) {
        if ( dto == null ) {
            return null;
        }

        First first = new First();

        first.setId( dto.getId() );

        return first;
    }

    @Override
    public FirstDTO toDto(First entity) {
        if ( entity == null ) {
            return null;
        }

        FirstDTO firstDTO = new FirstDTO();

        firstDTO.setId( entity.getId() );

        return firstDTO;
    }

    @Override
    public List<First> toEntity(List<FirstDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<First> list = new ArrayList<First>( dtoList.size() );
        for ( FirstDTO firstDTO : dtoList ) {
            list.add( toEntity( firstDTO ) );
        }

        return list;
    }

    @Override
    public List<FirstDTO> toDto(List<First> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<FirstDTO> list = new ArrayList<FirstDTO>( entityList.size() );
        for ( First first : entityList ) {
            list.add( toDto( first ) );
        }

        return list;
    }
}
