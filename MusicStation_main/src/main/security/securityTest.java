package main.security;

public class securityTest {
	public static void main(String[] args) {
		String salt = PasswordEncoder.makeSalt();
		System.out.println("salt : " + salt);
		String password = "testPassword";
		System.out.println("password : " + password);
		
		String hashedPassword = PasswordEncoder.encode(password, salt);
		System.out.println("해싱 비번 : " + hashedPassword);
	}
}
