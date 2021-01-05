package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.food.entities.PasswordEntity;
import com.food.entities.UserEntity;
import com.food.repositories.UserRepo;
import com.food.requests.RegistrationRequest;
import com.food.responses.RegistrationResponse;

@Service
public class RegistrationService {

	private UserRepo repo;
	private UserEntity user = new UserEntity();
	private PasswordEntity password = new PasswordEntity();

	@Autowired
	public RegistrationService(UserRepo repo) {
		this.repo = repo;
	}

	public RegistrationResponse registerUser(RegistrationRequest request) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		RegistrationResponse response = new RegistrationResponse();

		try {
			if (!request.getEmail().isEmpty() && !request.getPassword().isEmpty()) {
				boolean hasNoDuplicates = duplicateChecker(request);
				if (hasNoDuplicates) {
					user.setFirstName(request.getFirstName());
					user.setLastName(request.getLastName());
					user.setEmail(request.getEmail());
					password.setPassword(encoder.encode(request.getPassword()));
					user.setPassword(password);
					repo.save(user);
					response.setSuccess(true);
				}
			}
		} catch (Exception e) {
			response.setSuccess(false);
		}
		return response;
	}

	private boolean duplicateChecker(RegistrationRequest request) {
		boolean result = false;
		List<UserEntity> duplicates= repo.findByEmail(request.getEmail());
		if(duplicates.isEmpty()) {
			result = true;
		}
		return result;
	}
}
