package com.food.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.entities.CartItemEntity;

@Repository
public interface CartItemRepo extends JpaRepository<CartItemEntity, Long> {

}
