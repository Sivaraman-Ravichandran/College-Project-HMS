package com.example.hms.findoc.controller;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.hms.findoc.service.*;
import org.springframework.web.bind.annotation.*;
import com.example.hms.findoc.entity.DoctorDetails;
import java.util.List;
import java.util.Optional;
@RestController
public class DoctorDetailController {
    @Autowired 
    service service;
    
    @GetMapping("/doctorDetailGet")
    public List<DoctorDetails> getDoctorDetail(){
        return service.getDetailDoctor();
    }
    @PostMapping("/doctorDetailPost")
    public String postDoctorDetail(@RequestBody DoctorDetails d){
        service.postDetailDoctor(d);
        return "Posted Successfully";
    }
    @GetMapping("/DoctorDetailById/{n}")
    public Optional<DoctorDetails> getById(@PathVariable int n){
        return service.getById(n);
    }
}
