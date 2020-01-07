package io.transwarp.knowledge_graph.web.rest;
import io.micrometer.core.annotation.Timed;
import io.transwarp.knowledge_graph.service.FirstService;
import io.transwarp.knowledge_graph.web.rest.errors.BadRequestAlertException;
import io.transwarp.knowledge_graph.web.rest.util.HeaderUtil;
import io.transwarp.knowledge_graph.service.dto.FirstDTO;
import io.transwarp.knowledge_graph.service.dto.FirstCriteria;
import io.transwarp.knowledge_graph.service.FirstQueryService;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing First.
 */
@RestController
@RequestMapping("/api")
public class KGSearchResource {

    private final Logger log = LoggerFactory.getLogger(KGSearchResource.class);

    private static final String ENTITY_NAME = "kgSearch";

    private final FirstService firstService;

    private final FirstQueryService firstQueryService;

    public KGSearchResource(FirstService firstService, FirstQueryService firstQueryService) {
        this.firstService = firstService;
        this.firstQueryService = firstQueryService;
    }

    /**
     * POST  /firsts : Create a new first.
     *
     * @param firstDTO the firstDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new firstDTO, or with status 400 (Bad Request) if the first has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/kgSearch")
    public ResponseEntity<FirstDTO> createFirst(@RequestBody FirstDTO firstDTO) throws URISyntaxException {
        log.debug("REST request to save First : {}", firstDTO);
        if (firstDTO.getId() != null) {
            throw new BadRequestAlertException("A new first cannot already have an ID", ENTITY_NAME, "idexists");
        }
        FirstDTO result = firstService.save(firstDTO);
        return ResponseEntity.created(new URI("/api/firsts/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /firsts : Updates an existing first.
     *
     * @param firstDTO the firstDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated firstDTO,
     * or with status 400 (Bad Request) if the firstDTO is not valid,
     * or with status 500 (Internal Server Error) if the firstDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/firsts")
    public ResponseEntity<FirstDTO> updateFirst(@RequestBody FirstDTO firstDTO) throws URISyntaxException {
        log.debug("REST request to update First : {}", firstDTO);
        if (firstDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        FirstDTO result = firstService.save(firstDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, firstDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /firsts : get all the firsts.
     *
     * @param criteria the criterias which the requested entities should match
     * @return the ResponseEntity with status 200 (OK) and the list of firsts in body
     */
    @GetMapping("/firsts")
    public ResponseEntity<List<FirstDTO>> getAllFirsts(FirstCriteria criteria) {
        log.debug("REST request to get Firsts by criteria: {}", criteria);
        List<FirstDTO> entityList = firstQueryService.findByCriteria(criteria);
        return ResponseEntity.ok().body(entityList);
    }

    /**
    * GET  /firsts/count : count all the firsts.
    *
    * @param criteria the criterias which the requested entities should match
    * @return the ResponseEntity with status 200 (OK) and the count in body
    */
    @GetMapping("/firsts/count")
    public ResponseEntity<Long> countFirsts(FirstCriteria criteria) {
        log.debug("REST request to count Firsts by criteria: {}", criteria);
        return ResponseEntity.ok().body(firstQueryService.countByCriteria(criteria));
    }

    /**
     * GET  /firsts/:id : get the "id" first.
     *
     * @param id the id of the firstDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the firstDTO, or with status 404 (Not Found)
     */
    @GetMapping("/firsts/{id}")
    public ResponseEntity<FirstDTO> getFirst(@PathVariable Long id) {
        log.debug("REST request to get First : {}", id);
        Optional<FirstDTO> firstDTO = firstService.findOne(id);
        return ResponseUtil.wrapOrNotFound(firstDTO);
    }

    /**
     * DELETE  /firsts/:id : delete the "id" first.
     *
     * @param id the id of the firstDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/firsts/{id}")
    public ResponseEntity<Void> deleteFirst(@PathVariable Long id) {
        log.debug("REST request to delete First : {}", id);
        firstService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    @PostMapping("/kgSearch/uploadFile")
    @ResponseBody
    public ResponseEntity uploadFile(@RequestParam("file") MultipartFile file) {
//        files.forEach(file-> System.out.println(file.getOriginalFilename()));
        System.out.println(file.getOriginalFilename());
        String result = file.getOriginalFilename();
        return new ResponseEntity(HttpStatus.OK);
    }
}
