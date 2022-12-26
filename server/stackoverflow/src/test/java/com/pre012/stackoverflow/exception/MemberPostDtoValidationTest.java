package com.pre012.stackoverflow.exception;

import com.pre012.stackoverflow.member.MemberPostDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import java.util.Set;
import static org.junit.jupiter.api.Assertions.*;

public class MemberPostDtoValidationTest {
    private Validator validator;

    @BeforeEach
    public void init() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }

    @Test
    public void memberPostDtoSuccess() {
        MemberPostDto memberPostDto = new MemberPostDto("hgd@gmail.com", "hgd", "a1234567");
        Set<ConstraintViolation<MemberPostDto>> violations = validator.validate(memberPostDto);
        assertTrue(violations.isEmpty());
    }

    @Test
    public void memberPostDtoEmailValidationFail() {
        MemberPostDto memberPostDto = new MemberPostDto("hgd@", "hgd", "a1234567");

        Set<ConstraintViolation<MemberPostDto>> violations = validator.validate(memberPostDto);

        assertFalse(violations.isEmpty());
        violations.stream().forEach(error -> {
            assertEquals(error.getPropertyPath().toString(), "email");
        });
    }
}
