package camp.kh.semi.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NoticeController {

@GetMapping(value="/notice/notice")
public void notice() {
	System.out.println("공지사항 페이지로 이동");
}
}
