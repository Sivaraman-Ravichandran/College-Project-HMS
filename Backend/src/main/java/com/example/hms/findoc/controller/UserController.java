package com.example.hms.findoc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	public ResponseEntity<Map<String, Object>> login(@RequestBody AuthenticationDTO auth) {
		User existingUser = service.findByEmail(auth.getEmail());
		if (existingUser != null && existingUser.getPassword().equals(auth.getPassword())) {
			Map<String, Object> response = new HashMap<>();
			response.put("message", "Login Successful");
			response.put("role", existingUser.getRole());
			response.put("id", existingUser.getId()); // Include user ID
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else {
			Map<String, Object> errorResponse = new HashMap<>();
			errorResponse.put("message", "Invalid Username or Password");
			return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
		}
	}

	@PostMapping("/create")
	public String createUser(@RequestBody User user) {
		return service.createUser(user);
	}
}
