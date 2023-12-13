package main.model.service;

import main.model.dao.MusicLogDAO;

public class MusicLogService {

	public static void addLog(String userId, String musicId) {
		MusicLogDAO.insertOne(userId, musicId);
	}
	
}
