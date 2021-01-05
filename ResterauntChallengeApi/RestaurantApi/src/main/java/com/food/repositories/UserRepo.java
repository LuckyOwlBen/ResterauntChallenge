package com.food.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.entities.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {
	
	List<UserEntity> findByEmail(String email);
}