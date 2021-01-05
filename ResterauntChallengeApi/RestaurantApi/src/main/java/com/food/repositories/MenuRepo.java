package com.food.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.entities.MenuItemsEntity;

@Repository
public interface MenuRepo extends JpaRepository<MenuItemsEntity, Long> {
	
}
