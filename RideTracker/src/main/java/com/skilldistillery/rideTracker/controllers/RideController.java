package com.skilldistillery.rideTracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.rideTracker.entities.Ride;
import com.skilldistillery.rideTracker.services.RideService;

@RequestMapping("api")
@RestController
public class RideController {

	@Autowired
	private RideService serv;
	
	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
	@GetMapping("rides")
	public List<Ride> getAllRides(){
		return serv.allRides();
	}
	@GetMapping("rides/{id}")
	public Ride findById(@PathVariable int id) {
		return serv.findById(id);
	}
	@PostMapping("rides")
	public Ride postRide(@RequestBody Ride ride) {
		return serv.createRide(ride);
	}
	@PostMapping("rides/{id}")
	public Ride updateRide(@PathVariable int id, @RequestBody Ride ride) {
		return serv.updateRide(ride, id);
	}
	@DeleteMapping("rides/{id}")
	public void delete (@PathVariable int id) {
		serv.deleteRide(id);
	}
}
