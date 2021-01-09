package com.food.service;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.Optional;

import javax.ws.rs.BadRequestException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.entities.OrderEntity;
import com.food.repositories.OrderRepo;
import com.food.requests.OrderRequest;
import com.food.responses.OrderResponse;

@Service
public class OrderService {

	private OrderRepo orderRepo;
	
	private static DecimalFormat df = new DecimalFormat("0.00");
	private double subtotal = 0;
	private double tax = .18;
	
	
	@Autowired
	public OrderService (OrderRepo orderRepo) {
		this.orderRepo = orderRepo;
	}
	
	
	public OrderResponse submitOrder(OrderRequest request) {
		
		OrderEntity orderEntity = checkOrderNumber(request);
		orderEntity = totalOrder(orderEntity);
		OrderResponse response = generateResponse(orderEntity);
		
		return response;
	}
	
	private OrderEntity totalOrder (OrderEntity orderEntity) {
		
		
		df.setRoundingMode(RoundingMode.UP);
		
		orderEntity.getOrderCart().forEach(element -> {
			subtotal += Double.parseDouble(element.getItemPrice());
		});
		
		orderEntity.setSubtotal(String.valueOf(df.format(subtotal)));
		orderEntity.setTotal(String.valueOf(df.format(subtotal + (subtotal* tax))));
		orderEntity = orderRepo.save(orderEntity);
		return orderEntity;
	}
	
	private OrderResponse generateResponse(OrderEntity orderEntity) {
		
		OrderResponse response = new OrderResponse();
		response.setOrderId(orderEntity.getOrderId());
		response.setMenu(orderEntity.getOrderCart());
		response.setSubtotal(orderEntity.getSubtotal());
		response.setTotal(orderEntity.getTotal());
		return response;
	}


	private String generateNewOrderId(Long dbId) {
		 long orderID = dbId;
		 return String.valueOf(orderID + 1025); 
	}
	
	private Long decodeOrderId(String orderId) {
		return Long.decode(orderId) - 1025;
	}
	
	private OrderEntity checkOrderNumber(OrderRequest request) throws BadRequestException  {
		OrderEntity orderEntity = new OrderEntity();
		if(request.getOrderId() == null) {
			orderEntity.setOrderId("0");
			orderEntity = orderRepo.save(orderEntity);
			orderEntity.setOrderId(generateNewOrderId(orderEntity.getId()));
			orderEntity = orderRepo.save(orderEntity);
			orderEntity.setOrderCart(request.getMenu());
		} else {
			Optional<OrderEntity> optional = orderRepo.findById(decodeOrderId(request.getOrderId()));
			if(optional.isPresent()) {
				 orderEntity = optional.get();
				 orderEntity.setOrderCart(request.getMenu());
				 orderEntity = orderRepo.save(orderEntity);
			} else {
				throw new BadRequestException();
			}
		}
		return orderEntity;
	}
}
