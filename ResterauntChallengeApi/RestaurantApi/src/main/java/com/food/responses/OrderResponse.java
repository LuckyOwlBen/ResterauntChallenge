package com.food.responses;

import java.util.List;

import com.food.entities.CartItemEntity;

public class OrderResponse {

	private List<CartItemEntity> menu;
	
	private String subtotal;
	
	private String total;
	
	private String orderId;

	public List<CartItemEntity> getMenu() {
		return menu;
	}

	public void setMenu(List<CartItemEntity> menu) {
		this.menu = menu;
	}

	public String getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(String subtotal) {
		this.subtotal = subtotal;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

}
