package io.transwarp.knowledge_graph.repository;

import io.transwarp.knowledge_graph.domain.First;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the First entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FirstRepository extends JpaRepository<First, Long>, JpaSpecificationExecutor<First> {

}
