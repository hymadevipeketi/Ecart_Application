package com.example.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.AddCart;
import com.example.service.AddCartService;

@RestController
@CrossOrigin(origins ="*")
public class AddCartController {
	@Autowired
	private AddCartService addcartService;
	JdbcTemplate jdbctemplate;

	@PostMapping("/addtocart")
	public String addToCart(@RequestBody AddCart addCart) {
		try {
			addcartService.addToCart(addCart);
			return "Item added to cart successfully";
		} catch (Exception e) {

			return "Not added to cart";
		}
	}
	
	@DeleteMapping("/remove/{id}")
	public Map deleteById(@PathVariable int id) {
		return addcartService.deleteById(id);
	}
	

	@DeleteMapping("/emptycart/{userid}")
	public int emptycartByUserId(@PathVariable int userid) {
		return addcartService.emptycartByUserId(userid);
	}
	
	@GetMapping("/getcart/{userid}")
	public Map getByuserid(@PathVariable int userid) {
	    return addcartService.getByUserid(userid);
	}
	
	@GetMapping("/getcart")
	public Map getCartItems() {
	    return addcartService.getCartItems();
	}
	
}





