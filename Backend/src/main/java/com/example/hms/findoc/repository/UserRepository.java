package com.example.hms.findoc.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.hms.findoc.dto.AuthenticationDTO;
import com.example.hms.findoc.entity.User;

public interface UserRepository extends MongoRepository<User,Integer> {

    User findByEmail(String username);

	AuthenticationDTO save(AuthenticationDTO auth);
}
