package com.pre012.stackoverflow.question.entity;

import com.pre012.stackoverflow.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qid;

    @JoinColumn(name="mid")
    @ManyToOne
    private Member member;

    @OneToMany(mappedBy = "question")
    private List<QuestionRecommend> questionRecommend;

    private String title;

    private String content;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private Long view;
}
