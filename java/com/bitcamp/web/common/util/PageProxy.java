package com.bitcamp.web.common.util;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@Lazy
public class PageProxy {
    private int pageNum,    //현재 페이지
                pageSize,   //한페이지당 게시글 수
                blockSize,  //하단 페이지넘버 개수 
                startRow,   //현재 페이지에서 처음 게시글 번호
                endRow,     //현재 페이지에서 마지막 게시글 번호
                startPage,  //블락에서 첫페이지
                endPage,    //블락에서 마직막페이지
                prevBlock,  // 이전 블럭
                nextBlock,  // 다음 블럭
                totalCount; //총게시글 수
    private String search;
    private boolean existPrev, existNext;
    
    public void execute(Map<?,?> paramMap){ //와일드 카드, 내부적으로 object
        String _pageNum = (String)paramMap.get("page_num");
        pageNum = (_pageNum == null) ? 1 : Integer.parseInt(_pageNum);
        String _pageSize = (String)paramMap.get("page_size"); //js는 언더스
        pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
        // blocksize 기본값 5
        String _blockSize = (String)paramMap.get("block_size");
    
        // totalCount = DB에 있는 테이블
        
        int nmg = totalCount % pageSize;
        int pageCount = (nmg == 0)? totalCount / pageSize : totalCount / pageSize + 1;

        // startRow 2page면 6
//        int startRow = 
        // endRow 2pageaus 10

    }
    
}