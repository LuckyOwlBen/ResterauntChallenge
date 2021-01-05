package com.example.food.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.food.entities.MenuItemsEntity;


public interface MenuRepo extends JpaRepository<MenuItemsEntity, Long> {
	
}
