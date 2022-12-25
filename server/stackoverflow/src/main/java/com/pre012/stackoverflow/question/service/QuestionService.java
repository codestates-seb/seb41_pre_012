package com.pre012.stackoverflow.question.service;

import com.pre012.stackoverflow.question.dto.QuestionDetailDto;
import com.pre012.stackoverflow.question.dto.QuestionDto;
import com.pre012.stackoverflow.question.dto.QuestionPatchDto;
import com.pre012.stackoverflow.question.dto.QuestionPostDto;
import com.pre012.stackoverflow.question.entity.Question;
import com.pre012.stackoverflow.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class QuestionService {

    private final QuestionRepository repository;

    @Transactional
    public ResponseEntity create(QuestionPostDto questionPostDto) {

        if( questionPostDto == null || questionPostDto.getTitle().isEmpty() ){
            return new ResponseEntity("fail", HttpStatus.BAD_REQUEST);
        }

        Question question = questionPostDto.toQuestion();
        Long qid = repository.save(question).getQid();
        question = repository.findById(qid).orElseThrow();

        return new ResponseEntity(question, HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity update(QuestionPatchDto questionPatchDto) {

        Question question = repository.findById(questionPatchDto.getQId()).orElseThrow();
        repository.save(questionPatchDto.toQuestion(questionPatchDto));

        return new ResponseEntity(question, HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity list(int page, int size) {

        Pageable pageable = PageRequest.of(page - 1, size, Sort.by("qid").descending());   // 최신순 정렬(id=글번호)
        Page<QuestionDto> pageQuestion = repository.findAll(pageable).map(QuestionDto::result);
        return new ResponseEntity<>(pageQuestion, HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity detail(Long qid) {

        QuestionDetailDto question = repository.findById(qid).map(QuestionDetailDto::result).orElseThrow();

        return new ResponseEntity<>(question, HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity delete(Long qid) {

        Question question = repository.findById(qid).orElseThrow();
        repository.delete(question);

        return new ResponseEntity<>(qid, HttpStatus.OK);
    }
}
