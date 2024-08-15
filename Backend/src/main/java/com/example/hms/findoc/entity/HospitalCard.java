package com.example.hms.findoc.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "HospitalCard")
public class HospitalCard {
    @Id
    private int id;
    private String Hname;
    private String Himg;
    private String Hlocation;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHname() {
        return Hname;
    }

    public void setHname(String hname) {
        Hname = hname;
    }

    public String getHimg() {
        return Himg;
    }

    public void setHimg(String himg) {
        Himg = himg;
    }


    public String getHlocation() {
        return Hlocation;
    }

    public void setHlocation(String hlocation) {
        Hlocation = hlocation;
    }
}
