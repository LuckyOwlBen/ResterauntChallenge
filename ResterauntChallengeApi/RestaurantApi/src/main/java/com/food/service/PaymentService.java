package com.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.entities.OrderEntity;
import com.food.repositories.OrderRepo;
import com.food.requests.PaymentRequest;
import com.food.responses.PaymentResponse;

@Service
public class PaymentService {

	private OrderRepo orderRepo;
	
	@Autowired
	public PaymentService(OrderRepo orderRepo) {
		this.orderRepo = orderRepo;
	}
	
	public PaymentResponse makePayment(PaymentRequest request) {
		
		OrderEntity currentOrder = orderRepo.findByOrderId(request.getOrderNumber());
		currentOrder.setOrderCart(request.getOrderItems());
		PaymentResponse response = new PaymentResponse();
		response.setSuccess(true);
		response.setWaitTime("10 minutes");
		return response;
		
	}

}
