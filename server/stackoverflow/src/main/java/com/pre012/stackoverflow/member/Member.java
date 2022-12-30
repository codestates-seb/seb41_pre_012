package com.pre012.stackoverflow.member;

import com.pre012.stackoverflow.answer.Answer;
import com.pre012.stackoverflow.answer.AnswerRecommend;
import com.pre012.stackoverflow.question.entity.Question;
import com.pre012.stackoverflow.question.entity.QuestionRecommend;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mid;

    @OneToMany(mappedBy = "member")
    private List<Question> questions;

    @OneToMany(mappedBy = "member")
    private List<Answer> answers;
    @OneToMany(mappedBy = "member")
    private List<QuestionRecommend> questionRecommends;

    @OneToMany(mappedBy = "member")
    private List<AnswerRecommend> answerRecommends;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(length = 100, nullable = false)
    private String password;

    private String img = "";

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
}
