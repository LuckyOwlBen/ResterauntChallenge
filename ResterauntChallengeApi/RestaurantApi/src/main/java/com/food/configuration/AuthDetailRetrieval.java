package com.food.configuration;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.food.entities.UserEntity;
import com.food.repositories.UserRepo;

@Service
public class AuthDetailRetrieval implements UserDetailsService {

	UserRepo userRepo;

	@Autowired
	public AuthDetailRetrieval(UserRepo userRepo) {
		this.userRepo = userRepo;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		List<UserEntity> user = userRepo.findByEmail(username);

		return new User(user.get(0).getEmail(), user.get(0).getPassword().getPassword(), new ArrayList<>());

	}

}
