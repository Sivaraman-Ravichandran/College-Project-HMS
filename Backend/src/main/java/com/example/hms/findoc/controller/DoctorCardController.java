package com.example.hms.findoc.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.hms.findoc.entity.DoctorCard;
import com.example.hms.findoc.service.*;
import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class DoctorCardController {
    @Autowired
    service service;
    @GetMapping("/doctorCardGet")
    public List<DoctorCard> getDoctorCard(){
        return service.getAllDoctorCard();
    }
    @PostMapping("/doctorCardPost")
    public String postDoctorCard(@RequestBody DoctorCard d){
        service.postDoctorCardItems(d);
        return "Posted Successfully";
    }
    @GetMapping("/DoctorCardGetById/{n}")
    public Optional<DoctorCard> getById(@PathVariable int n){
        return service.getDoctorCardById(n);
    }
}
