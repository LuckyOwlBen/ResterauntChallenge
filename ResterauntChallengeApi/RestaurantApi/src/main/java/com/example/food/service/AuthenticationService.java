package com.example.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.food.configuration.AuthDetailRetrieval;
import com.example.food.repositories.UserRepo;
import com.example.food.requests.AuthenticationRequest;
import com.example.food.responses.AuthenticationResponse;
import com.example.food.util.JwtUtil;

@Service
public class AuthenticationService {

	private AuthenticationManager authenticationManager;
	private JwtUtil jwtUtil;
	private AuthDetailRetrieval user;
	
	@Autowired
	public AuthenticationService (UserRepo userRepo, AuthenticationManager authenticationManager, JwtUtil jwtUtil, AuthDetailRetrieval user) {
		this.authenticationManager = authenticationManager;
		this.jwtUtil = jwtUtil;
		this.user = user;
		
	}
	
	public AuthenticationResponse login(AuthenticationRequest request) {
		try {	
			authenticateUser(request);
			final UserDetails userDetails = user.loadUserByUsername(request.getEmail());
			final String jwt = jwtUtil.generateToken(userDetails);
			return new AuthenticationResponse(jwt, true);
		} catch(BadCredentialsException e) {
			return new AuthenticationResponse(null, false);
		} catch(UsernameNotFoundException e) {
			return new AuthenticationResponse(null, false);
		}
	}

	private void authenticateUser(AuthenticationRequest request)throws BadCredentialsException  {
		UsernamePasswordAuthenticationToken token = null;
		token = new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword());
		authenticationManager.authenticate(token);
	}


	

}

