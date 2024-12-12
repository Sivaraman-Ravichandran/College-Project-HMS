package com.example.hms.findoc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.example.hms.findoc.service.*;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.hms.findoc.entity.DoctorDetails;
import com.example.hms.findoc.repository.DoctorDetailRepo;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@RestController
public class DoctorDetailController {
    @Autowired
    service service;

    @Autowired
    DoctorDetailRepo doctorRepository;

    @GetMapping("/doctorDetailGet")
    public List<DoctorDetails> getDoctorDetail() {
        return service.getDetailDoctor();
    }

    @PostMapping("/doctorDetailPost")
    public String postDoctorDetail(@RequestBody DoctorDetails d) {
        service.postDetailDoctor(d);
        return "Posted Successfully";
    }

    @GetMapping("/DoctorDetailById/{n}")
    public Optional<DoctorDetails> getById(@PathVariable String n) {
        return service.getById(n);
    }

    @GetMapping("/search")
    public List<DoctorDetails> searchDoctors(
            @RequestParam(required = false) String speciality,
            @RequestParam(required = false) String location) {
        if (speciality != null) {
            return doctorRepository.findBySpecialityContainingIgnoreCase(speciality);
        }
        if (location != null) {
            return doctorRepository.findByLocationContainingIgnoreCase(location);
        }
        return doctorRepository.findAll();
    }

    @PutMapping("/doctorUpdate/{id}")
    public ResponseEntity<String> updateDoctor(
            @PathVariable String id,
            @RequestParam("doctorData") String doctorData,
            @RequestParam(value = "dimg", required = false) MultipartFile dimg) {
        try {
            // Parse the JSON data for doctor details
            ObjectMapper objectMapper = new ObjectMapper();
            DoctorDetails updatedDoctor = objectMapper.readValue(doctorData, DoctorDetails.class);

            // Find existing doctor by ID
            Optional<DoctorDetails> existingDoctor = doctorRepository.findById(id);
            if (existingDoctor.isPresent()) {
                // Update fields of the doctor
                updatedDoctor.setId(id);

                // Handle image upload if a file is provided
                if (dimg != null && !dimg.isEmpty()) {
                    String base64Image = encodeImageToBase64(dimg);
                    updatedDoctor.setDimg(base64Image); // Store the Base64-encoded image
                } else {
                    // Retain the existing image if no new image is uploaded
                    updatedDoctor.setDimg(existingDoctor.get().getDimg());
                }

                // Save updated doctor details
                doctorRepository.save(updatedDoctor);

                return ResponseEntity.ok("Doctor details updated successfully!");
            }

            return ResponseEntity.notFound().build();
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error updating doctor details.");
        }
    }

    // Helper method to encode the uploaded image to Base64 format
    private String encodeImageToBase64(MultipartFile file) throws IOException {
        byte[] fileBytes = file.getBytes();
        return Base64.getEncoder().encodeToString(fileBytes);
    }
}
