package com.food.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.food.requests.AddToMenuRequest;
import com.food.responses.MenuResponse;
import com.food.service.MenuService;

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
	
	@PostMapping(value="/addMenu")
	public void addToMenu(@RequestBody AddToMenuRequest request){
		menuService.addToMenu(request);
	}
}
