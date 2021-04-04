package com.skilldistillery.rideTracker.services;

import java.util.ArrayList;
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
		List<Ride> allRides = repo.findAll();
		List<Ride> filtered = new ArrayList<>();
		for (Ride ride : allRides) {
			if (ride.isDeleted()== false) {
				filtered.add(ride);
			}
		}
		return filtered;
	}

	@Override
	public Ride findById(int rideId) {
		Ride ride = repo.findById(rideId).get();
		return ride;
	}

	@Override
	public Ride createRide(Ride ride) {
		repo.saveAndFlush(ride);
		return ride;
	}

	@Override
	public Ride updateRide(Ride ride, int id) {
		Ride oldRide = findById(id);
		if (oldRide != null) {
			oldRide.setBikeUsed(ride.getBikeUsed());
			oldRide.setDescription(ride.getDescription());
			oldRide.setMiles(ride.getMiles());
			oldRide.setTimeHours(ride.getTimeHours());
			oldRide.setTimeMinutes(ride.getTimeMinutes());
			oldRide.setTitle(ride.getTitle());
			repo.saveAndFlush(oldRide);
			return oldRide;
		}
		return null;
	}

	@Override
	public void deleteRide(int id) {
		Ride ride = findById(id);
		ride.setDeleted(true);
		
	}

}
