package com.skilldistillery.rideTracker.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.rideTracker.entities.Ride;
import com.skilldistillery.rideTracker.repositories.RideRepository;

@Service
@Transactional
public class RideServiceImpl implements RideService {
	
	@Autowired
	private RideRepository repo;
	
	
	@Override
	public List<Ride> allRides() {
		return repo.findAll();
	}

	@Override
	public Ride findById(int rideId) {
		// TODO Auto-generated method stub
		return null;
	}

}
