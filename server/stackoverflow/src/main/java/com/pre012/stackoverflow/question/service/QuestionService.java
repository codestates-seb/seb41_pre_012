package com.pre012.stackoverflow.question.service;

import com.pre012.stackoverflow.exception.BusinessLogicException;
import com.pre012.stackoverflow.exception.ExceptionCode;
import com.pre012.stackoverflow.member.Member;
import com.pre012.stackoverflow.member.MemberRepository;
import com.pre012.stackoverflow.question.dto.*;
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

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class QuestionService {

    private final QuestionRepository repository;

    private final MemberRepository memberRepository;

    @Transactional
    public ResponseEntity create(QuestionPostDto questionPostDto, String email) {

        if (questionPostDto == null || questionPostDto.getTitle().isEmpty()) {
            return new ResponseEntity("fail", HttpStatus.BAD_REQUEST);
        }

        Member member = memberRepository.findByEmail(email).orElseThrow();
        Question question = questionPostDto.toQuestion(member);
        Long qid = repository.save(question).getQid();
        question = repository.findById(qid).orElseThrow();

        QuestionResponseDto response = new QuestionResponseDto(question);

        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @Transactional
    public ResponseEntity update(Long qid, String email, QuestionPatchDto questionPatchDto) {

        Question question = repository.findById(qid).orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        if (!question.getMember().getEmail().equals(email)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_ALLOWED);
        }
        Optional.ofNullable(questionPatchDto.getTitle()).ifPresent(question::setTitle);
        Optional.ofNullable(questionPatchDto.getContent()).ifPresent(question::setContent);
        question.setModifiedAt(LocalDateTime.now().withNano(0));
        Question savedQuestion = repository.save(question);
        QuestionResponseDto response = new QuestionResponseDto(savedQuestion);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity list(int page, int size) {

        Pageable pageable = PageRequest.of(page - 1, size, Sort.by("qid").descending());
        Page<QuestionDto> pageQuestion = repository.findAll(pageable).map(QuestionDto::result);
        return new ResponseEntity<>(pageQuestion, HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity detail(Long qid) {

        QuestionDetailDto question = repository.findById(qid).map(QuestionDetailDto::result).orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return new ResponseEntity<>(question, HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity delete(Long qid, String email) {

        Question question = repository.findById(qid).orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        if (!question.getMember().getEmail().equals(email)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_ALLOWED);
        }
        repository.delete(question);

        return new ResponseEntity<>(qid, HttpStatus.OK);
    }
}
