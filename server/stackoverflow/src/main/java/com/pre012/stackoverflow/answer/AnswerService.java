
package com.pre012.stackoverflow.answer;


import com.pre012.stackoverflow.exception.BusinessLogicException;
import com.pre012.stackoverflow.exception.ExceptionCode;
import com.pre012.stackoverflow.member.Member;
import com.pre012.stackoverflow.member.MemberRepository;
import com.pre012.stackoverflow.question.entity.Question;
import com.pre012.stackoverflow.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AnswerService {
    private AnswerRepository answerRepository;
    private MemberRepository memberRepository;

    private QuestionRepository questionRepository;

    public AnswerService(AnswerRepository answerRepository, MemberRepository memberRepository, QuestionRepository questionRepository) {
        this.answerRepository = answerRepository;
        this.memberRepository = memberRepository;
        this.questionRepository = questionRepository;
    }



    public Answer createAnswer(Answer answer, String email, Long qid) {
        Member member = memberRepository.findByEmail(email).orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        Question question = questionRepository.findById(qid).orElseThrow(()-> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        answer.setMember(member);
        answer.setQuestion(question);
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer, String email) {
        Answer findAnswer = answerRepository.findById(answer.getAid()).orElseThrow(()-> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        if ( !findAnswer.getMember().getEmail().equals(email)){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_ALLOWED);
        }

        findAnswer.setContent(answer.getContent());
        findAnswer.setModifiedAt(LocalDateTime.now().withNano(0));

        return answerRepository.save(findAnswer);
    }

    public void deleteAnswer(Long aid, String email) {
        Answer findAnswer = answerRepository.findById(aid).orElseThrow(()-> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        if ( !findAnswer.getMember().getEmail().equals(email)){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_ALLOWED);
        }

        answerRepository.delete(findAnswer);
    }
}