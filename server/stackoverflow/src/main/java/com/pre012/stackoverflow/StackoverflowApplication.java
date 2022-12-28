package com.pre012.stackoverflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing // JPA가 생성일자, 수정일자 컬럼 인식하게함
@SpringBootApplication
public class StackoverflowApplication {

    public static void main(String[] args) {
        SpringApplication.run(StackoverflowApplication.class, args);
    }
}
