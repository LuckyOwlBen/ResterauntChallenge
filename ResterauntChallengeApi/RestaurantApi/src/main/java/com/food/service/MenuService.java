package com.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.entities.MenuItemsEntity;
import com.food.repositories.MenuRepo;
import com.food.requests.AddToMenuRequest;
import com.food.responses.MenuResponse;

@Service
public class MenuService {

	private MenuRepo menuRepo;

	private MenuResponse menu = new MenuResponse();

	@Autowired
	public MenuService(MenuRepo menuRepo) {
		this.menuRepo = menuRepo;
	}

	public MenuResponse getMenu() {

		menu.setMenu(menuRepo.findAll());
		return menu;
	}

	public void addToMenu(AddToMenuRequest request) {

		MenuItemsEntity menuItem = new MenuItemsEntity();
		menuItem.setItemName(request.getItemName());
		menuItem.setItemDesc(request.getItemDesc());
		menuItem.setItemPrice(request.getItemPrice());
		menuRepo.save(menuItem);
	}
}
