package com.simplilearn.foodbox.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.simplilearn.foodbox.entity.Cuisine;

@CrossOrigin("http://localhost:4200")
public interface CuisineRepository extends JpaRepository<Cuisine, Long> {



}
