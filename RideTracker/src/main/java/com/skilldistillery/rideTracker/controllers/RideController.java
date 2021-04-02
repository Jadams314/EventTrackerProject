package com.skilldistillery.rideTracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
