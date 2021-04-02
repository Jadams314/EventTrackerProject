package com.skilldistillery.rideTracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.rideTracker.entities.Rides;

public interface RideRepository extends JpaRepository<Rides, Integer> {

}
