package com.example.hms.findoc.entity;

public class Duties {
    private String id;
    private String workplace;
    private String worktime;

    public Duties() {

    }

    public Duties(String id, String workplace, String worktime) {
        this.id = id;
        this.workplace = workplace;
        this.worktime = worktime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getWorkplace() {
        return workplace;
    }

    public void setWorkplace(String workplace) {
        this.workplace = workplace;
    }

    public String getWorktime() {
        return worktime;
    }

    public void setWorktime(String worktime) {
        this.worktime = worktime;
    }

}
