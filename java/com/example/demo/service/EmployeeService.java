package com.example.demo.service;

import com.example.demo.dto.EmployeeDto;

import java.util.List;

//This is an Abstract method can be called in the controller used for implementation
public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee);

    void deleteEmployee(Long employeeId);
}
