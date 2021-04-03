package com.skilldistillery.rideTracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.rideTracker.entities.Ride;

public interface RideRepository extends JpaRepository<Ride, Integer> {

}
