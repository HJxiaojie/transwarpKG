package io.transwarp.knowledge_graph.repository;

import io.transwarp.knowledge_graph.domain.Second;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Second entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SecondRepository extends JpaRepository<Second, Long> {

}
