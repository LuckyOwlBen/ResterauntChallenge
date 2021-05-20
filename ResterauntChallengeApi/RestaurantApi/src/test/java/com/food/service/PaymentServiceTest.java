package com.food.service;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.HashSet;
import java.util.Set;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import com.food.entities.CartItemEntity;
import com.food.entities.OrderEntity;
import com.food.repositories.OrderRepo;
import com.food.requests.PaymentRequest;
import com.food.responses.PaymentResponse;

class PaymentServiceTest {

	@Mock
	OrderRepo orderRepo;
	
	@InjectMocks
	PaymentService paymentService = new PaymentService(orderRepo);
	
	static OrderEntity orderEntity = new OrderEntity();
	static CartItemEntity cartItem = new CartItemEntity();
	static Set<CartItemEntity> shoppingCart = new HashSet<CartItemEntity>();
	static PaymentRequest request = new PaymentRequest();
	
	@BeforeAll
	static void setUp() throws Exception {
		
		
		long dbId = 1337l;
		String orderId = "001";
		
		cartItem.setId(dbId);
		cartItem.setItemName("Steak");
		cartItem.setItemPrice("12.99");
		cartItem.setQuantity("1");
		cartItem.setOrderID(orderId);
		shoppingCart.add(cartItem);
		
		request.setAddress("10 lavender st Richmond VA 21221");
		request.setCardNumber("4266 4266 4266 4266");
		request.setExpDate("12/12");
		request.setNameOnCard("Dan Ham");
		request.setOrderItems(shoppingCart);
		request.setOrderNumber(orderId);
		request.setSecurityCode("222");
		
		orderEntity.setId(dbId);
		orderEntity.setOrderId(orderId);
		orderEntity.setSubtotal("12.99");
		orderEntity.setTotal("14.42");
		
		
	}
	

	@Test
	void testPaymentService() {
		String orderId = "001";
		when(orderRepo.findByOrderId(orderId)).thenReturn(orderEntity);
		PaymentResponse response = paymentService.makePayment(request);
		assertTrue(response.isSuccess());
	}

}
