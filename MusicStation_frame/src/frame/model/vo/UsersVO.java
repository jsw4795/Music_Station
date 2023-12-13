package frame.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class UsersVO {
	private String userId;
	private String pwd;
	private String nickname;
	private String email;
	private String bio;
	private String picture;
	private String login;
	private Date regDate;
	private String salt;
}
