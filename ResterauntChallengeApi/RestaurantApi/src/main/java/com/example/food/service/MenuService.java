package com.example.food.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.food.repositories.MenuRepo;
import com.example.food.responses.MenuResponse;

@Service
public class MenuService {

	private MenuRepo menuRepo;
	
	private MenuResponse menu; 
	
	@Autowired
	public MenuService(MenuRepo menuRepo) {
		this.menuRepo = menuRepo;
	}
	
	public MenuResponse getMenu() {
		
		menu.setMenu(menuRepo.findAll());
		return menu;
		
		
	}
	
	
}
