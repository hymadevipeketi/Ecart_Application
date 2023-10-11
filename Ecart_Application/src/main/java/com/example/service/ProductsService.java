package com.example.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.models.Product;
import com.example.models.Fashion;

@Service
public class ProductsService {
	
	 @Autowired
	    private JdbcTemplate jdbcTemplate;
	 public void insertProducts(Product p) {
String query = "INSERT INTO Allproducts (category, productname, productbrand, price,color,dscript, image) " +
	                "VALUES (?, ?, ?, ?, ?, ?, ?)";
	        jdbcTemplate.update(query,p.getCatagory(),p.getProductname(),p.getProductbrand(),p.getPrice(),p.getColor(),p.getDscript(),p.getImage());
	    }
	 
	 public List<Product> selectproducts() {
	        String query = "SELECT * FROM Allproducts";
	        List rows = jdbcTemplate.queryForList(query);
	        return rows;
	    }
	 
	 public List<Product> selectProductsByCategory(String category) {
		    String query = "SELECT * FROM Allproducts WHERE category=?";
		    List rows = jdbcTemplate.queryForList(query,category);
		    return rows;
		} 

	 public List<Product> selectProductsByCategoryAndName(String category, String productName) {
		    String query = "SELECT * FROM Allproducts WHERE category=? AND productname LIKE ?";
		    List<Map<String, Object>> rows = jdbcTemplate.queryForList(query, category, productName + "%");
		    List<Product> products = new ArrayList<>();
		    for (Map<String, Object> row : rows) {
		        Product product = new Product();
		        product.setProductid((int) row.get("productid"));
		        product.setProductname((String) row.get("productname"));
		        product.setCatagory((String) row.get("category"));
		        product.setProductbrand((String) row.get("productbrand"));
		        product.setPrice((Float) row.get("price"));
		        product.setColor((String) row.get("color"));
		        product.setDscript((String) row.get("dscript"));
		        products.add(product);
		    }
		    return products;
		}
} 
	 
//	 public List<Productpojo> selectProductsByCategory(String category) {
//		    String query = "SELECT * FROM Allproducts WHERE category=?";
//		    List rows1= jdbcTemplate.queryForList(query,category);
//		    if(!rows1.isEmpty())
//		    {
//		    	return rows1;
//		    }
//		    else
//		    {
//		    	String query1 = "SELECT * FROM Allproducts";
//		    	List rows2 = jdbcTemplate.queryForList(query,category);
//		    	return row2;
//		    }
//		    
//		} 
//}
