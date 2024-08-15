package com.example.hms.findoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.hms.findoc.dto.AuthenticationDTO;
import com.example.hms.findoc.entity.User;
import com.example.hms.findoc.service.service;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class UserController {
	@Autowired
	service service;
	@GetMapping("/getUser")
	public List<User> getUserDetails() {
		return service.getAllDetails();
	}
	@PostMapping("/saveUser")
    public String postUserDetails(@RequestBody AuthenticationDTO auth) {
		String id = service.postAllDetails(auth);
        return id;
    }
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody AuthenticationDTO auth) {
		User existingUser = service.findByEmail(auth.getEmail());
		if (existingUser != null && existingUser.getPassword().equals(auth.getPassword())) {
			return new ResponseEntity<>("Login Successful", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Invalid Username or Password", HttpStatus.UNAUTHORIZED);
		}
	}
}
