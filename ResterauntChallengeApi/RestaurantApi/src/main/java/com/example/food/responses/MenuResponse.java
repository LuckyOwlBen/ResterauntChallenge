package com.example.food.responses;

import java.util.List;

import com.example.food.entities.MenuItemsEntity;

public class MenuResponse {
	
	private List<MenuItemsEntity> menu;

	public List<MenuItemsEntity> getMenu() {
		return menu;
	}

	public void setMenu(List<MenuItemsEntity> menu) {
		this.menu = menu;
	}

}
