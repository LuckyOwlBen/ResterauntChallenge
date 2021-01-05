package com.food.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.entities.OrderEntity;

@Repository
public interface OrderRepo extends JpaRepository<OrderEntity, Long> {

}
