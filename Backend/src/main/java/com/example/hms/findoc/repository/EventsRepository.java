package com.example.hms.findoc.repository;

import com.example.hms.findoc.entity.EventsDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventsRepository extends MongoRepository<EventsDetails, Integer> {
}
