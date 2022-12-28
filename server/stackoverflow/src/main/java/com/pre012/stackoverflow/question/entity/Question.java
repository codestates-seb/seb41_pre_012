package com.pre012.stackoverflow.question.entity;

import lombok.*;

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

/*    @JoinColumn(name="mid")
    @ManyToOne
    private Member member;              // Member entity 필요

    @OneToMany(mappedBy = "question")
    private List<Answer> answer;        // Answer entity 필요*/


    @OneToMany(mappedBy = "question")
//    @OneToMany(mappedBy = "question", cascade = CascadeType.MERGE) 다삭제
    private List<QuestionRecommend> questionRecommend;

    private String title;

    private String content;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private Long view;
}
