package com.example.service.springbootrewards.rewards;

import com.example.service.springbootrewards.model.MyTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.service.springbootrewards.model.Customer;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{
}

