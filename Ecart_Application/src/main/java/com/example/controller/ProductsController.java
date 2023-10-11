package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Product;
import com.example.service.ProductsService;

@CrossOrigin(origins = "*")
@RestController
public class ProductsController {
	@Autowired
	ProductsService ps;
	
	 @PostMapping("/insertproducts")
	    public String insertProduct(@RequestBody Product p) {
	        ps.insertProducts(p);
	        return "Inserted product successfully";
	    }
	 @GetMapping("/selectproducts")
	    public List<Product> selectProducts() {
	        return ps.selectproducts();
	    }
	 
	 @GetMapping("/products/{category}")
	    public List<Product> getProductsByCategory(@PathVariable String category) {
	        return ps.selectProductsByCategory(category);
	    }

	

	 @GetMapping("/byanyletter/{category}")
		public List<Product> getProductsByCategoryAndName(@PathVariable String category, @RequestParam(required = false) String productName) {
		    if (productName == null) {
		        return getProductsByCategory(category);
		    } else {
		        return getProductsByCategoryAndName(category, productName);
		    }
		}
	 
}
