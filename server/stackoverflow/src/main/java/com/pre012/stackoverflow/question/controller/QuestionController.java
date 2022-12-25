package com.pre012.stackoverflow.question.controller;

import com.pre012.stackoverflow.question.dto.QuestionPatchDto;
import com.pre012.stackoverflow.question.dto.QuestionPostDto;
import com.pre012.stackoverflow.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class QuestionController {

    private final QuestionService service;

    @PostMapping("/question")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {

        return service.create(questionPostDto);
    }

    @PatchMapping("/question")
    public ResponseEntity patchQuestion(@Valid @RequestBody QuestionPatchDto questionPatchDto) {

        return service.update(questionPatchDto);
    }

    @GetMapping("/question/{qid}")
    public ResponseEntity detail(@PathVariable("qid") Long qid) {

        return service.detail(qid);
    }

    @GetMapping("/questions")
    public ResponseEntity list(@Positive @RequestParam int page,
                               @Positive @RequestParam int size) {

        return service.list(page, size);
    }

    @DeleteMapping("/questions/{qid}")
    public ResponseEntity delete(@PathVariable("qid") Long qid) {

        return service.delete(qid);
    }
}
