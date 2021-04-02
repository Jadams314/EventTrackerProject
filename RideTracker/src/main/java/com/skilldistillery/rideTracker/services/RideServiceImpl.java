package com.skilldistillery.rideTracker.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.rideTracker.entities.Rides;
import com.skilldistillery.rideTracker.repositories.RideRepository;

@Service
@Transactional
public class RideServiceImpl implements RideService {
	
	@Autowired
	private RideRepository repo;
	
	
	@Override
	public List<Rides> allRides() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Rides findById(int rideId) {
		// TODO Auto-generated method stub
		return null;
	}

}
