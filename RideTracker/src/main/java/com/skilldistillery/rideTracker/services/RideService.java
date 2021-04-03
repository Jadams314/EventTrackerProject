package com.skilldistillery.rideTracker.services;

import java.util.List;

import com.skilldistillery.rideTracker.entities.Ride;

public interface RideService {
	List<Ride> allRides();
	Ride findById(int rideId);
}
