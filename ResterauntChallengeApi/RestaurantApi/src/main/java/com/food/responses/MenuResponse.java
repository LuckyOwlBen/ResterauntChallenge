package com.food.responses;

import java.util.List;

import com.food.entities.MenuItemsEntity;

public class MenuResponse {
	
	private List<MenuItemsEntity> menu;
	
	private String authorization;

	public List<MenuItemsEntity> getMenu() {
		return menu;
	}

	public void setMenu(List<MenuItemsEntity> menu) {
		this.menu = menu;
	}

	public String getAuthorization() {
		return authorization;
	}

	public void setAuthorization(String authorization) {
		this.authorization = authorization;
	}

}
