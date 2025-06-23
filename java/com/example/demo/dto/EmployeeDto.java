package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {

    //this class is used to tranfer data between server and client
    //service layer to repo layer - dto - data transfer object
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}
