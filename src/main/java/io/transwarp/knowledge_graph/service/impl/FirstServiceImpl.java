package io.transwarp.knowledge_graph.service.impl;

import io.transwarp.knowledge_graph.service.FirstService;
import io.transwarp.knowledge_graph.domain.First;
import io.transwarp.knowledge_graph.repository.FirstRepository;
import io.transwarp.knowledge_graph.service.dto.FirstDTO;
import io.transwarp.knowledge_graph.service.mapper.FirstMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing First.
 */
@Service
@Transactional
public class FirstServiceImpl implements FirstService {

    private final Logger log = LoggerFactory.getLogger(FirstServiceImpl.class);

    private final FirstRepository firstRepository;

    private final FirstMapper firstMapper;

    public FirstServiceImpl(FirstRepository firstRepository, FirstMapper firstMapper) {
        this.firstRepository = firstRepository;
        this.firstMapper = firstMapper;
    }

    /**
     * Save a first.
     *
     * @param firstDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public FirstDTO save(FirstDTO firstDTO) {
        log.debug("Request to save First : {}", firstDTO);
        First first = firstMapper.toEntity(firstDTO);
        first = firstRepository.save(first);
        return firstMapper.toDto(first);
    }

    /**
     * Get all the firsts.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<FirstDTO> findAll() {
        log.debug("Request to get all Firsts");
        return firstRepository.findAll().stream()
            .map(firstMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one first by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<FirstDTO> findOne(Long id) {
        log.debug("Request to get First : {}", id);
        return firstRepository.findById(id)
            .map(firstMapper::toDto);
    }

    /**
     * Delete the first by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete First : {}", id);
        firstRepository.deleteById(id);
    }
}
