package com.food.requests;

import java.util.Set;

import com.food.entities.CartItemEntity;

public class PaymentRequest {
	
	private String orderNumber;
	
	private Set<CartItemEntity> orderItems;
	
	private String cardNumber;
	
	private String securityCode;
	
	private String expDate;
	
	private String nameOnCard;
	
	private String address;

	public String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public Set<CartItemEntity> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(Set<CartItemEntity> orderItems) {
		this.orderItems = orderItems;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getSecurityCode() {
		return securityCode;
	}

	public void setSecurityCode(String securityCode) {
		this.securityCode = securityCode;
	}

	public String getExpDate() {
		return expDate;
	}

	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}

	public String getNameOnCard() {
		return nameOnCard;
	}

	public void setNameOnCard(String nameOnCard) {
		this.nameOnCard = nameOnCard;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}	

}
