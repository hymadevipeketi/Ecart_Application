package com.example.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.models.Electronics;
import com.example.models.Fashion;
import com.example.models.Furniture;

@Service
public class ProductService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void insertElectronics(Electronics electronics) {
        String query = "INSERT INTO electronics (category, brand, color, image, storageGB, cam, price, size, dscript) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(query, electronics.getCategory(), electronics.getBrand(), electronics.getColor(),
                electronics.getImage(), electronics.getStorageGB(), electronics.getCam(), electronics.getPrice(),
                electronics.getSize(), electronics.getDscript());
    }

    public void insertFashion(Fashion fashion) {
        String query = "INSERT INTO fashion (brand, gender, price, dscript, quantity, size, image, color, cloth, madein) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(query, fashion.getBrand(), fashion.getGender(), fashion.getPrice(),
                fashion.getDscript(), fashion.getQuantity(), fashion.getSize(), fashion.getImage(),
                fashion.getColor(), fashion.getCloth(), fashion.getMadein());
    }

    public void insertFurniture(Furniture furniture) {
        String query = "INSERT INTO furniture (brand, color, typeofmaterial, size, image, price, dscript) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(query, furniture.getBrand(), furniture.getColor(), furniture.getTypeofmaterial(),
                furniture.getSize(), furniture.getImage(), furniture.getPrice(), furniture.getDscript());
    }

    public List<Electronics> selectElectronics() {
        String query = "SELECT * FROM electronics";
        List rows = jdbcTemplate.queryForList(query);
        return rows;
    }

    public List<Fashion> selectFashion() {
        String query = "SELECT * FROM fashion";
        List rows = jdbcTemplate.queryForList(query);
        return rows;
    }
   
    public List<Furniture> selectFurniture() {
        String query = "SELECT * FROM furniture";
        List rows = jdbcTemplate.queryForList(query);
        return rows;
    }
    

    
    public List getAllItems() {
    	List items = new ArrayList<>();
    	items.add(selectElectronics());
    	items.add(selectFashion());
    	items.add(selectFurniture());
    	return items;
    }
    
}

