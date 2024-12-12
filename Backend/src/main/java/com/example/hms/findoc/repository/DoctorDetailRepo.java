package com.example.hms.findoc.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.hms.findoc.entity.DoctorDetails;

@Repository
public interface DoctorDetailRepo extends MongoRepository<DoctorDetails, Integer> {

    List<DoctorDetails> findBySpecialityContainingIgnoreCase(String speciality);

    List<DoctorDetails> findByLocationContainingIgnoreCase(String location);

    Optional<DoctorDetails> findById(String id);

}
