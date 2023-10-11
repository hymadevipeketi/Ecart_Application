package com.example.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.models.AddCart;

@Service
public class AddCartService {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	private int getNewCartId(int userid) {
		long timestamp = System.currentTimeMillis();
		return Math.abs((int) (userid + timestamp));

	}

	private int getCartId(int userid) {
		String sqlQuery = "SELECT cartid FROM addtocart WHERE userid = ?";
		List<Map<String, Object>> cartList = jdbcTemplate.queryForList(sqlQuery, userid);
		if (cartList.isEmpty()) {
			return -1;
		} else {
			int cartid = (int) cartList.get(0).get("cartid");
			return cartid;
		}
	}

	public void addToCart(AddCart addCart) {
		String sqlquery;
		int cartid = getCartId(addCart.getUserid());
		float total = addCart.getPrice() * addCart.getQuantity();
		if (cartid == -1) {
			cartid = getNewCartId(addCart.getUserid());
			sqlquery = "INSERT INTO addtocart (cartid, userid, productid, productname, price, quantity, total) VALUES ( ?, ?, ?, ?, ?, ?, ?)";
		} else {
			sqlquery = "INSERT INTO addtocart (cartid, userid, productid, productname, price, quantity, total) VALUES ( ?, ?, ?, ?, ?, ?, ?)";
		}
		jdbcTemplate.update(sqlquery, cartid, addCart.getUserid(), addCart.getProductid(), addCart.getProductname(),
				addCart.getPrice(), addCart.getQuantity(), total);
	}
	
	public Map deleteById(int id) {
		Map response=new HashMap<>();
		String sqlQuery = "DELETE FROM addtocart WHERE id = ?";
		int remove = jdbcTemplate.update(sqlQuery, id);
		if(remove>0)
		{
			response.put("Data", "Deleted Success");
		}
		else
		{
			response.put("Data", "Not Deleted");
		}
		return response;
	}

	public int emptycartByUserId(int userId) {
		String sqlQuery = "DELETE FROM addtocart WHERE userid = ?";
		int remove = jdbcTemplate.update(sqlQuery, userId);
		return remove;
	}

	public Map getByUserid(int userid) {
		Map response = new HashMap<>();
		String query = "SELECT * FROM addtocart WHERE userid=?";
		List rows = jdbcTemplate.queryForList(query, userid);
		response.put("data", rows);
		return response;
	}

	public Map getCartItems() {
		Map response = new HashMap<>();
		List data = jdbcTemplate.queryForList("select * from addtocart");
		response.put("data", data);
		response.put("count", data.size());
		return response;
	}
}

//	public void addToCart(AddCart addCart) {
//		String sqlquery;  
//		int cartid = getCartId(addCart.getUserid());
//		if (cartid == -1) {
//			sqlquery = "INSERT INTO addtocart (cartid, userid, productid, productname, price, quantity, total) VALUES ( ?, ?, ?, ?, ?, ?, ?)";
//			cartid = getNewCartId(addCart.getUserid());
//		} else {
//			// check if item already exists in cart
//			String checkQuery = "SELECT quantity FROM addtocart WHERE userid = ? AND productid = ?";
//			List<Integer> existingQuantities = jdbcTemplate.queryForList(checkQuery,
//					new Object[] { addCart.getUserid(), addCart.getProductid() }, Integer.class);
//			if (!existingQuantities.isEmpty()) {
//				int existingQuantity = existingQuantities.get(0);
//				// item already exists, update the quantity
//				int newQuantity = existingQuantity + addCart.getQuantity();
//				float newTotal = addCart.getPrice() * newQuantity;
//				sqlquery = "UPDATE addtocart SET quantity = ?, total = ? WHERE userid = ? AND productid = ?";
//				jdbcTemplate.update(sqlquery, newQuantity, newTotal, addCart.getUserid(), addCart.getProductid());
//				return;
//			} else {
//				sqlquery = "INSERT INTO addtocart (cartid, userid, productid, productname, price, quantity, total) VALUES ( ?, ?, ?, ?, ?, ?, ?)";
//			}
//		}
//		float total = addCart.getPrice() * addCart.getQuantity();
//		jdbcTemplate.update(sqlquery, cartid, addCart.getUserid(), addCart.getProductid(), addCart.getProductname(),
//				addCart.getPrice(), addCart.getQuantity(), total);
//	}
