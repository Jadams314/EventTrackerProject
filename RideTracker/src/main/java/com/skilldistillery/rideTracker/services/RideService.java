package com.skilldistillery.rideTracker.services;

import java.util.List;

import com.skilldistillery.rideTracker.entities.Rides;

public interface RideService {
	List<Rides> allRides();
	Rides findById(int rideId);
}
