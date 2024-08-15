package com.example.hms.findoc.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.hms.findoc.entity.SpecialityCard;

@Repository
public interface SpecialityCardRepo extends MongoRepository<SpecialityCard,Integer> {
}
