package com.food.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.food.requests.OrderRequest;
import com.food.responses.OrderResponse;
import com.food.service.OrderService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class OrderController {
	
	private OrderService orderService;
	
	@Autowired
	public OrderController(OrderService orderService) {
		this.orderService = orderService;
	}
	
	@PostMapping(value="auth/submitOrder")
	public OrderResponse submitOrder(@RequestBody OrderRequest request) {
		return orderService.submitOrder(request);
	}

}
