package com.example.food.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.food.entities.PasswordEntity;

@Repository
public interface PasswordRepo extends JpaRepository<PasswordEntity, Long> {

}