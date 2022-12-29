package com.pre012.stackoverflow.member;

import com.pre012.stackoverflow.question.entity.Question;
import com.pre012.stackoverflow.question.entity.QuestionRecommend;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
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
    private List<QuestionRecommend> questionRecommends;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;
}
