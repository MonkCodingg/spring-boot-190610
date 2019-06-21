package com.bitcamp.web.common.util;

import java.util.Map;

import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component@Data@Lazy
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
        //  Dim-1 scalar info
        //int 값과 String 값 교체
        //page_num, page_size, block_size
        int totalCount = Integer.parseInt(String.valueOf(paramMap.get("totalCount")));

        //  Dim-2 scalar info
        String _pageNum = (String)paramMap.get("page_num");
        pageNum = (_pageNum == null) ? 1 : Integer.parseInt(_pageNum);
        String _pageSize = (String)paramMap.get("page_size"); //js는 언더스
        pageSize = (_pageSize == null) ? 5 : Integer.parseInt(_pageSize);
        int nmg = totalCount % pageSize;
        int pageCount = (nmg == 0)? totalCount / pageSize : totalCount / pageSize + 1;
        startRow = (pageNum -1) * pageSize;
        endRow = (totalCount > pageNum * pageSize) ? pageNum * pageSize : totalCount;
        //  Dim-3 scalar info
        String _blockSize = (String)paramMap.get("block_size");
        blockSize = (_blockSize == null) ? 5 : Integer.parseInt(_blockSize);
        int blockNum = (pageNum - 1) / blockSize;
        
        existPrev = (startPage - pageSize) > 0;
        existNext = (startPage + pageSize) <= pageCount;
        
        startPage = (existPrev) ? blockNum * blockSize + 1 : 1;
        endPage = ( endPage > pageCount) ? pageCount : startPage + (blockSize - 1);

        prevBlock = startPage - pageSize;
        nextBlock = startPage + pageSize;
        search = (String)paramMap.get("search");
        // startRow 2page면 6
//        int startRow = 
        // endRow 2pageaus 10

    }
}