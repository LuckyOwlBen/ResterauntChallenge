package com.example.food.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.food.requests.AuthenticationRequest;
import com.example.food.responses.AuthenticationResponse;
import com.example.food.service.AuthenticationService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AuthenticationController {

	private AuthenticationService userService;

	@Autowired
	public AuthenticationController(AuthenticationService userService) {

		this.userService = userService;

	}

	@PostMapping(value = "/auth/login")
	public AuthenticationResponse registerUser(@RequestBody AuthenticationRequest request) {
		return userService.login(request);
	}
}	
