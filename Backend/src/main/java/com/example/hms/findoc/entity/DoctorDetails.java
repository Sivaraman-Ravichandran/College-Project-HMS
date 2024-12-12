package com.example.hms.findoc.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "DoctorDetail")
public class DoctorDetails {
    @Id
    private String id;
    private String bimg;
    private String dimg;
    private String dname;
    private String speciality;
    private String location;
    private String about;
    private String status;
    private String fees;
    private String[] actions;
    private Duties[] duties;
    private String eimg;
    private String ehname;
    private String erole;
    private String eduration;
    private String elocation;
    private String rimg;
    private String rname;
    private String rdate;
    private String rdesc;

    // Getters and setters for all fields
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBimg() {
        return bimg;
    }

    public void setBimg(String bimg) {
        this.bimg = bimg;
    }

    public String getDimg() {
        return dimg;
    }

    public void setDimg(String dimg) {
        this.dimg = dimg;
    }

    public String getDname() {
        return dname;
    }

    public void setDname(String dname) {
        this.dname = dname;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getFees() {
        return fees;
    }

    public void setFees(String fees) {
        this.fees = fees;
    }

    public String[] getActions() {
        return actions;
    }

    public void setActions(String[] actions) {
        this.actions = actions;
    }

    public Duties[] getDuties() {
        return duties;
    }

    public void setDuties(Duties[] duties) {
        this.duties = duties;
    }

    public String getEimg() {
        return eimg;
    }

    public void setEimg(String eimg) {
        this.eimg = eimg;
    }

    public String getEhname() {
        return ehname;
    }

    public void setEhname(String ehname) {
        this.ehname = ehname;
    }

    public String getErole() {
        return erole;
    }

    public void setErole(String erole) {
        this.erole = erole;
    }

    public String getEduration() {
        return eduration;
    }

    public void setEduration(String eduration) {
        this.eduration = eduration;
    }

    public String getElocation() {
        return elocation;
    }

    public void setElocation(String elocation) {
        this.elocation = elocation;
    }

    public String getRimg() {
        return rimg;
    }

    public void setRimg(String rimg) {
        this.rimg = rimg;
    }

    public String getRname() {
        return rname;
    }

    public void setRname(String rname) {
        this.rname = rname;
    }

    public String getRdate() {
        return rdate;
    }

    public void setRdate(String rdate) {
        this.rdate = rdate;
    }

    public String getRdesc() {
        return rdesc;
    }

    public void setRdesc(String rdesc) {
        this.rdesc = rdesc;
    }
}
