package com.example.food.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.food.responses.MenuResponse;
import com.example.food.service.MenuService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class MenuController {
	
	private MenuService menuService;
	
	@Autowired
	public MenuController(MenuService menuService) {
		this.menuService = menuService;
	}

	@PostMapping(value="/auth/menu") 
	public MenuResponse getMenu(){
		return menuService.getMenu();
	}
}
