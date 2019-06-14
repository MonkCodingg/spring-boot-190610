package com.bitcamp.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class WebApplication { //real 코드

	public static void main(String[] args) {
		SpringApplication.run(WebApplication.class, args); //가상코드. 컴파일된 이후 jvm(가상머신)이 읽어드린다
	}
}
