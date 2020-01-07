package io.transwarp.knowledge_graph.service;

import io.transwarp.knowledge_graph.service.dto.FirstDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing First.
 */
public interface FirstService {

    /**
     * Save a first.
     *
     * @param firstDTO the entity to save
     * @return the persisted entity
     */
    FirstDTO save(FirstDTO firstDTO);

    /**
     * Get all the firsts.
     *
     * @return the list of entities
     */
    List<FirstDTO> findAll();


    /**
     * Get the "id" first.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<FirstDTO> findOne(Long id);

    /**
     * Delete the "id" first.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
