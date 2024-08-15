package com.example.hms.findoc.service;

import java.util.List;
import java.util.Optional;

import com.example.hms.findoc.dto.AuthenticationDTO;
import com.example.hms.findoc.entity.*;

public interface service {
	List<User> getAllDetails();

    String postAllDetails(AuthenticationDTO auth);
    User findByEmail(String mail);
    

	Optional<DoctorCard> findById(int n);

	List<DoctorCard> getAllDoctorCard();

	void postDoctorCardItems(DoctorCard d);

	Optional<DoctorCard> getDoctorCardById(int n);

	List<DoctorDetails> getDetailDoctor();

	void postDetailDoctor(DoctorDetails d);

	Optional<DoctorDetails> getById(int n);

	List<HospitalCard> findHospitalCard();

	void postCardHosital(HospitalCard hc);

	Optional<HospitalCard> ByFindId(int n);

	List<HospitalDetails> GetHospitalDetails();

	void insertDetailsHospital(HospitalDetails h);

	Optional<HospitalDetails> selectById(String n);

	List<SpecialityCard> getSpecialityCard();

	void postCardSpeciality(SpecialityCard s);

	Optional<SpecialityCard> SpecialityById(int n);

	List<EventsDetails> getAllEvents();

	EventsDetails getEventById(int id);

	EventsDetails createEvent(EventsDetails eventDetails);

	List<NewsDetails> getAllNews();

	NewsDetails getNewsById(int id);

	NewsDetails createNews(NewsDetails newsDetails);
}
