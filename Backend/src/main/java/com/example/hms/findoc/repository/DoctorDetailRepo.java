package com.example.hms.findoc.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.hms.findoc.entity.DoctorDetails;

@Repository
public interface DoctorDetailRepo extends MongoRepository<DoctorDetails,Integer> {

}
