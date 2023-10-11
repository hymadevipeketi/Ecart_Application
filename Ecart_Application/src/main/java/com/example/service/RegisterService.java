package com.example.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.example.models.Register;

@Service
public class RegisterService {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	public boolean checkDuplicate(String uname, String email, String password) {
		String query = "SELECT COUNT(*) FROM register WHERE uname = ? OR email = ? OR password = ?";
		int count = jdbcTemplate.queryForObject(query, new Object[] { uname, email, password }, Integer.class);
		return count > 0;
	}

	public int insert(Register p) {
		String fname = p.getFname();
		String lname = p.getLname();
		String uname = p.getUname();
		String email = p.getEmail();
		String password = p.getPassword();
		String address = p.getAddress();
		String phone =p.getPhone();
		if (checkDuplicate(uname, email, password)) {
			return -1;
		}
		String query = "INSERT INTO register (fname, lname,uname, email, password,address,phone) VALUES (?,?,?, ?, ?, ?, ?)";
		return jdbcTemplate.update(query, fname, lname, uname, email, password, address,phone);
	}

	public Map getData4(String uname, String password) {
		Map response = new HashMap<>();
		List<Map<String, Object>> getData4 = new ArrayList<Map<String, Object>>();
		String query = "select * from register where uname=? and password=?";
		getData4 = jdbcTemplate.queryForList(query, uname, password);
		System.out.println(getData4);
		if (!getData4.isEmpty()) {
			response.put("success", true);
			response.put("message", "Login Success");
			response.put("data", getData4);
		} else {
			response.put("success", false);
			response.put("message", "Invalid Credentials");
		}
		return response;
	}

	public List getData4() {
		List getlist = new ArrayList<>();
		Map getmap = null;
		List<Map<String, Object>> getData4 = new ArrayList<Map<String, Object>>();
		String query = "select * from register ";
		getData4 = jdbcTemplate.queryForList(query);
		System.out.println(getData4);
		return getData4;
	}

	public Map<String, Object> updatePassword(int userid, String password) {
		Map<String, Object> a = new HashMap<>();
//		String selectquery="SELECT password from register where id=?";
//	    List a=jdbcTemplate.queryForList(selectquery,id);
		String updateQuery = "update register set password=? where userid=?";
		int a1 = jdbcTemplate.update(updateQuery, password, userid);
		if (a1 > 0) {
			a.put("status", true);
			a.put("message", "User Updated Success");
			return a;
		} else {
			a.put("faile", false);
			a.put("message", "Unable to Update User");
		}
		return a;

	}
}
