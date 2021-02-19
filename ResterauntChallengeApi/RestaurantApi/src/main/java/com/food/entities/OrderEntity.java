package com.food.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="ORDERS")
public class OrderEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="ID")
	private Long id;
	
	@Column(name="ORDER_ID")
	private String orderId;
	
	@Column(name="SUBTOTAL")
	private String subtotal;
	
	@Column(name="TOTAL")
	private String total;
	
	@OneToMany(cascade= CascadeType.ALL, orphanRemoval = true)
	@Column(name = "ORDER_CART")
	private Set<CartItemEntity> orderCart;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Set<CartItemEntity> getOrderCart() {
		return orderCart;
	}

	public void setOrderCart(Set<CartItemEntity> orderCart) {
		this.orderCart = orderCart;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
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
}
