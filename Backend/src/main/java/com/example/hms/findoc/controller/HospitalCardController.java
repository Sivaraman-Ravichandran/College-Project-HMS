package com.example.hms.findoc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.hms.findoc.entity.HospitalCard;
import java.util.List;
import java.util.Optional;
import com.example.hms.findoc.service.*;
@RestController
public class HospitalCardController {
    @Autowired
    service service;
    @GetMapping("/HospitalCardGet")
    public List<HospitalCard> getHospitalCard(){
        return service.findHospitalCard();
    }
    @PostMapping("/HospitalCardPost")
    public String postHospitalCard(@RequestBody HospitalCard hc){
        service.postCardHosital(hc);
        return "Posted Successfully";
    }
    @GetMapping("/HospitalCardGetById/{n}")
    public Optional<HospitalCard> getById(@PathVariable int n){
        return service.ByFindId(n);
    }

}
