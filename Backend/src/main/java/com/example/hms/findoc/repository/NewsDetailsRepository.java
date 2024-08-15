package com.example.hms.findoc.repository;

import com.example.hms.findoc.entity.NewsDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsDetailsRepository extends MongoRepository<NewsDetails, Integer> {
}
