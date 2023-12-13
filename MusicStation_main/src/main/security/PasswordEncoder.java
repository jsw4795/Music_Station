package main.security;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class PasswordEncoder {
	private static final int SALT_SIZE = 16;
	private static final int KEY_STRECHING_COUNT = 999;
	
	// 랜덤한 솔트 생성
	public static String makeSalt() {
		SecureRandom r = new SecureRandom();
		byte[] bytes = new byte[SALT_SIZE];
		r.nextBytes(bytes);
		
		return byteToString(bytes);
		
	}
	
	public static String encode(String password, String salt) {
		MessageDigest md = null;
		byte[] bytePassword = password.getBytes(); // 계산을 위해 String에서 byte[]로 변경
		
		try {
			md = MessageDigest.getInstance("SHA-256");
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		}
		
		for(int i = 0; i < KEY_STRECHING_COUNT; i++) { // key-stretching
			String temp = byteToString(bytePassword) + salt; // 현재 바이트 상태의 비번을 스트링으로 바꾸고 salt 붙이기
			md.update(temp.getBytes()); // 문자열을 해싱해서 md에 저장(업데이트)
			bytePassword = md.digest(); // bytePassword에 md의 다이제스트를 저장
		}
		
		return byteToString(bytePassword);
		
	}
	
	// byte배열을 String 으로 변환
	private static String byteToString(byte[] bytes) {
		StringBuilder sb = new StringBuilder();
		for(byte b : bytes) 
			sb.append(String.format("%02x", b));
		return sb.toString();
	}
}
