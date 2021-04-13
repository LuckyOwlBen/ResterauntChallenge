package com.food.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.food.requests.RegistrationRequest;
import com.food.responses.RegistrationResponse;
import com.food.service.RegistrationService;

//@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "Authorization")
@RestController
public class RegistrationController {
	
	@Autowired
	public RegistrationController(RegistrationService service) {
		this.registrationService = service;
	}
	private RegistrationService registrationService;
	
	
	@PostMapping(value="/register")
	public RegistrationResponse registerUser(@RequestBody RegistrationRequest request) {
		return registrationService.registerUser(request);
	}
}
