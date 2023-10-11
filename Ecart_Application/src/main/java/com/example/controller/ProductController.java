package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Electronics;
import com.example.models.Fashion;
import com.example.models.Furniture;
import com.example.service.ProductService;


@CrossOrigin(origins = "*")
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/insert/electronics")
    public String insertElectronics(@RequestBody Electronics electronics) {
        productService.insertElectronics(electronics);
        return "Inserted electronics product successfully";
    }

    @PostMapping("/insert/fashion")
    public String insertFashion(@RequestBody Fashion fashion) {
        productService.insertFashion(fashion);
        return "Inserted fashion product successfully";
    }

    @PostMapping("/insert/furniture")
    public String insertFurniture(@RequestBody Furniture furniture) {
        productService.insertFurniture(furniture);
        return "Inserted furniture product successfully";
    }

    @GetMapping("/select/electronics")
    public List<Electronics> selectElectronics() {
        return productService.selectElectronics();
    }

    @GetMapping("/select/fashion")
    public List<Fashion> selectFashion() {
        return productService.selectFashion();
    }

    @GetMapping("/select/furniture")
    public List<Furniture> selectFurniture() {
        return productService.selectFurniture();
    }
    
//    @GetMapping("/items")
//    public ResponseEntity<List<String>> getAllItems() {
//        List<String> items = productService.getAllItems();
//        return ResponseEntity.ok().body(items);
//    }
    
    @GetMapping("/all")
    public ResponseEntity<List> getAllItems() {
        List items = productService.getAllItems();
        return ResponseEntity.ok(items);
    }
 
}

