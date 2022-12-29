
package com.pre012.stackoverflow.answer;

import org.springframework.stereotype.Service;

@Service
public class AnswerService {
    private AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer updatedAnswer = answer;
        return updatedAnswer;
    }

    public void deleteAnswer(long aid) {
    }
}