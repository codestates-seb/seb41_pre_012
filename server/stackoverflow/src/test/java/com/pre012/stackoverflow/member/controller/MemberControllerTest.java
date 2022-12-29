package com.pre012.stackoverflow.member.controller;

import com.google.gson.Gson;
import com.pre012.stackoverflow.member.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.Arrays;
import java.util.List;

import static com.pre012.stackoverflow.utils.ApiDocumentUtils.getRequestPreProcessor;
import static com.pre012.stackoverflow.utils.ApiDocumentUtils.getResponsePreProcessor;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(MemberController.class) // 컨트롤러 전용 테스트 애너테이션
@MockBean(JpaMetamodelMappingContext.class) // 괄호안 클래스를 Mock 객체로 주입
@AutoConfigureRestDocs // 문서화
public class MemberControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private Gson gson;

    @MockBean
    private MemberService memberService;

    @MockBean
    private MemberMapper memberMapper;

    @Test
    public void memberPostTest() throws Exception {
        // given
        // postDto로 요청받아서 mapper로 Member entity로 매핑
        // service에 member 넣어서 결과 리턴
        MemberPostDto post = new MemberPostDto("hgd@gmail.com", "hgd", "a1234567");
        String content = gson.toJson(post);


        given(memberMapper.memberPostDtoToMember(Mockito.any(MemberPostDto.class))).willReturn(new Member());

        Member resultMember = new Member();
        resultMember.setMid(1L);
        given(memberService.createMember(Mockito.any(Member.class))).willReturn(resultMember);

        // when
        ResultActions actions =
                mockMvc.perform(
                        post("/members")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );

        // then
        actions
                .andExpect(status().isCreated())
                .andDo(document(
                        "post-member",
                        getRequestPreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("username").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호")
                                )
                        )
                ));
    }

    @Test
    public void memberDeleteTest() throws Exception {
        // given
        // 회원 삭제 시키면, doNothing 리턴
        long mid = 1L;
        doNothing().when(memberService).deleteMember(Mockito.anyLong());

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.delete("/members/{member-id}", mid));

        // then
        actions
                .andExpect(status().isNoContent())
                .andDo(
                        document(
                                "delete-member",
                                getRequestPreProcessor(),
                                getResponsePreProcessor(),
                                pathParameters(
                                        Arrays.asList(parameterWithName("member-id").description("회원 식별자 ID"))
                                )
                        )
                );
    }

}
