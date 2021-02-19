package com.food.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.food.requests.PaymentRequest;
import com.food.responses.PaymentResponse;
import com.food.service.PaymentService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController

public class PaymentController {

	private PaymentService paymentService;
	
	@Autowired
	public PaymentController(PaymentService paymentService) {
		
		this.paymentService = paymentService;
		
	}
	
	@PostMapping(value = "/auth/processPayment")
	public PaymentResponse processPayment(@RequestBody PaymentRequest request) {
		return paymentService.makePayment(request);
	}	
	
}
