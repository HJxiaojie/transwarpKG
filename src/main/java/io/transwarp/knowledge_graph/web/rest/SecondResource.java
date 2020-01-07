package io.transwarp.knowledge_graph.web.rest;
import io.transwarp.knowledge_graph.domain.Second;
import io.transwarp.knowledge_graph.repository.SecondRepository;
import io.transwarp.knowledge_graph.web.rest.errors.BadRequestAlertException;
import io.transwarp.knowledge_graph.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Second.
 */
@RestController
@RequestMapping("/api")
public class SecondResource {

    private final Logger log = LoggerFactory.getLogger(SecondResource.class);

    private static final String ENTITY_NAME = "second";

    private final SecondRepository secondRepository;

    public SecondResource(SecondRepository secondRepository) {
        this.secondRepository = secondRepository;
    }

    /**
     * POST  /seconds : Create a new second.
     *
     * @param second the second to create
     * @return the ResponseEntity with status 201 (Created) and with body the new second, or with status 400 (Bad Request) if the second has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/seconds")
    public ResponseEntity<Second> createSecond(@RequestBody Second second) throws URISyntaxException {
        log.debug("REST request to save Second : {}", second);
        if (second.getId() != null) {
            throw new BadRequestAlertException("A new second cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Second result = secondRepository.save(second);
        return ResponseEntity.created(new URI("/api/seconds/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /seconds : Updates an existing second.
     *
     * @param second the second to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated second,
     * or with status 400 (Bad Request) if the second is not valid,
     * or with status 500 (Internal Server Error) if the second couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/seconds")
    public ResponseEntity<Second> updateSecond(@RequestBody Second second) throws URISyntaxException {
        log.debug("REST request to update Second : {}", second);
        if (second.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Second result = secondRepository.save(second);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, second.getId().toString()))
            .body(result);
    }

    /**
     * GET  /seconds : get all the seconds.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of seconds in body
     */
    @GetMapping("/seconds")
    public List<Second> getAllSeconds() {
        log.debug("REST request to get all Seconds");
        return secondRepository.findAll();
    }

    /**
     * GET  /seconds/:id : get the "id" second.
     *
     * @param id the id of the second to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the second, or with status 404 (Not Found)
     */
    @GetMapping("/seconds/{id}")
    public ResponseEntity<Second> getSecond(@PathVariable Long id) {
        log.debug("REST request to get Second : {}", id);
        Optional<Second> second = secondRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(second);
    }

    /**
     * DELETE  /seconds/:id : delete the "id" second.
     *
     * @param id the id of the second to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/seconds/{id}")
    public ResponseEntity<Void> deleteSecond(@PathVariable Long id) {
        log.debug("REST request to delete Second : {}", id);
        secondRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
