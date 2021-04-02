package com.skilldistillery.rideTracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class RidesTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Rides ride;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("RideTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		ride = em.find(Rides.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		ride = null;
	}

	@Test
	void test() {
		assertNotNull(ride);
		assertEquals(100, ride.getMiles());
	}

}