package io.transwarp.knowledge_graph.service;

import java.util.List;

import io.transwarp.knowledge_graph.domain.First;
import io.transwarp.knowledge_graph.service.dto.FirstDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.service.QueryService;

import io.transwarp.knowledge_graph.domain.*; // for static metamodels
import io.transwarp.knowledge_graph.repository.FirstRepository;
import io.transwarp.knowledge_graph.service.dto.FirstCriteria;
import io.transwarp.knowledge_graph.service.mapper.FirstMapper;

/**
 * Service for executing complex queries for First entities in the database.
 * The main input is a {@link FirstCriteria} which gets converted to {@link Specification},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link FirstDTO} or a {@link Page} of {@link FirstDTO} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class FirstQueryService extends QueryService<First> {

    private final Logger log = LoggerFactory.getLogger(FirstQueryService.class);

    private final FirstRepository firstRepository;

    private final FirstMapper firstMapper;

    public FirstQueryService(FirstRepository firstRepository, FirstMapper firstMapper) {
        this.firstRepository = firstRepository;
        this.firstMapper = firstMapper;
    }

    /**
     * Return a {@link List} of {@link FirstDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<FirstDTO> findByCriteria(FirstCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specification<First> specification = createSpecification(criteria);
        return firstMapper.toDto(firstRepository.findAll(specification));
    }

    /**
     * Return a {@link Page} of {@link FirstDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<FirstDTO> findByCriteria(FirstCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specification<First> specification = createSpecification(criteria);
        return firstRepository.findAll(specification, page)
            .map(firstMapper::toDto);
    }

    /**
     * Return the number of matching entities in the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the number of matching entities.
     */
    @Transactional(readOnly = true)
    public long countByCriteria(FirstCriteria criteria) {
        log.debug("count by criteria : {}", criteria);
        final Specification<First> specification = createSpecification(criteria);
        return firstRepository.count(specification);
    }

    /**
     * Function to convert FirstCriteria to a {@link Specification}
     */
    private Specification<First> createSpecification(FirstCriteria criteria) {
        Specification<First> specification = Specification.where(null);
        if (criteria != null) {
            if (criteria.getId() != null) {
                specification = specification.and(buildSpecification(criteria.getId(), First_.id));
            }
        }
        return specification;
    }
}
