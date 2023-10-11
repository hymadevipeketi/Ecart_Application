
package com.example.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Register;
import com.example.service.RegisterService;

@CrossOrigin(origins = "*")
@RestController
public class RegisterController {

	@Autowired
	private RegisterService registerService;

	@PostMapping("/register")

	public String insert(@RequestBody Register p) {

		int i = registerService.insert(p);

		if (i > 0) {

			return "inserted";

		} else {

			return "not inserted";
		}
	}

	@PostMapping("/login")
//	@GetMapping("/login")
	public Map get4(@RequestBody Register registerpojo) {
		return registerService.getData4(registerpojo.getUname(), registerpojo.getPassword());
	}

	@GetMapping("/getAll")
	public List get4() {
		return registerService.getData4();
	}
	
	@PutMapping("/reset/{id}/{password}")
	public Map updatePassword(@PathVariable int id,@PathVariable String password) {
		return registerService.updatePassword(id,password);
	}
}
