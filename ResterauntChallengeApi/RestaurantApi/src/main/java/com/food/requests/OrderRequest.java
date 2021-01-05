package com.food.requests;

import java.util.List;

import com.food.entities.CartItemEntity;

public class OrderRequest {
	
	private String orderId;
	
	private List<CartItemEntity> menu;

	public List<CartItemEntity> getMenu() {
		return menu;
	}

	public void setMenu(List<CartItemEntity> menu) {
		this.menu = menu;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}


}
