package com.example.hms.findoc.serviceImpl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hms.findoc.dto.AuthenticationDTO;
import com.example.hms.findoc.entity.DoctorCard;
import com.example.hms.findoc.entity.DoctorDetails;
import com.example.hms.findoc.entity.EventsDetails;
import com.example.hms.findoc.entity.HospitalCard;
import com.example.hms.findoc.entity.HospitalDetails;
import com.example.hms.findoc.entity.NewsDetails;
import com.example.hms.findoc.entity.SpecialityCard;
import com.example.hms.findoc.entity.User;
import com.example.hms.findoc.repository.*;
import com.example.hms.findoc.service.*;
@Service
public class ServiceImpl implements service{
@Autowired
UserRepository UserRepo;
@Autowired
DoctorCardRepo doctorCardRepo;
@Autowired
DoctorDetailRepo doctorDetailRepo;
@Autowired
HospitalCardRepo hospitalCardRepo;
@Autowired
HospitalDetailRepo hospitalDetailrepo;
@Autowired
SpecialityCardRepo specialityCardRepo;
@Autowired
private EventsRepository eventsRepository;
@Autowired
private NewsDetailsRepository newsRepository;

	@Override
	public List<User> getAllDetails() {
		return UserRepo.findAll() ;
	}
	 @Override
	    public String postAllDetails(AuthenticationDTO auth) {
	        String id = auth.getId();
	        if (id == null || id.isEmpty()) {
	            id = UUID.randomUUID().toString();
	        }

	        User user = new User(
	                id,
	                auth.getEmail(),
	                auth.getPassword()
	        );
	        UserRepo.save(user);
	        return user.getEmail();
	    }


	@Override
	public User findByEmail(String mail) {
		return UserRepo.findByEmail(mail);
	}


	@Override
	public List<DoctorCard> getAllDoctorCard() {
		return doctorCardRepo.findAll();
	
	}

	@Override
	public Optional<DoctorCard> findById(int n) {
		// TODO Auto-generated method stub
		return Optional.empty();
	}

	@Override
	public void postDoctorCardItems(DoctorCard d) {
		// TODO Auto-generated method stub
		doctorCardRepo.save(d);
		return;
	}

	@Override
	public Optional<DoctorCard> getDoctorCardById(int n) {
		// TODO Auto-generated method stu
		return doctorCardRepo.findById(n);

	}

	@Override
	public List<DoctorDetails> getDetailDoctor() {
		// TODO Auto-generated method stub
		return doctorDetailRepo.findAll();
	}

	@Override
	public void postDetailDoctor(DoctorDetails d) {
		// TODO Auto-generated method stub
		doctorDetailRepo.save(d);
	}

	@Override
	public Optional<DoctorDetails> getById(int n) {
		// TODO Auto-generated method stub
		return doctorDetailRepo.findById(n);
	}

	@Override
	public List<HospitalCard> findHospitalCard() {
		return hospitalCardRepo.findAll();
	}

	@Override
	public void postCardHosital(HospitalCard hc) {
		hospitalCardRepo.save(hc);
	}

	@Override
	public Optional<HospitalCard> ByFindId(int n) {
		// TODO Auto-generated method stub
		return hospitalCardRepo.findById(n);
	}

	@Override
	public List<HospitalDetails> GetHospitalDetails() {
		return hospitalDetailrepo.findAll();
	}

	@Override
	public void insertDetailsHospital(HospitalDetails h) {
		hospitalDetailrepo.save(h);
		return;
	}

	@Override
	public Optional<HospitalDetails> selectById(String n) {
		return hospitalDetailrepo.findById(n);
	}

	@Override
	public List<SpecialityCard> getSpecialityCard() {
		return specialityCardRepo.findAll();
	}

	@Override
	public void postCardSpeciality(SpecialityCard s) {
		specialityCardRepo.save(s);
	}

	@Override
	public Optional<SpecialityCard> SpecialityById(int n) {
		return specialityCardRepo.findById(n);
	}
	@Override
	 public List<EventsDetails> getAllEvents() {
	        return eventsRepository.findAll();
	    }
	@Override
	    public EventsDetails getEventById(int id) {
	        return eventsRepository.findById(id).orElse(null);
	    }
	@Override
	    public EventsDetails createEvent(EventsDetails eventDetails) {
	        return eventsRepository.save(eventDetails);
	    }

	@Override
	public List<NewsDetails> getAllNews() {
		   return newsRepository.findAll();
	}

	@Override
	public NewsDetails getNewsById(int id) {
		  return newsRepository.findById(id).orElse(null);
	}

	@Override
	public NewsDetails createNews(NewsDetails newsDetails) {
		return newsRepository.save(newsDetails);
	}
}
