package com.skilldistillery.rideTracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class RideTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Ride ride;
	
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
		ride = em.find(Ride.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		ride = null;
	}
	
	@DisplayName("Testing Ride mapped to table")
	@Test
	void test() {
		assertNotNull(ride);
		assertEquals(1972, ride.getMiles());
		assertFalse(ride.isDeleted());
		
	}

}
