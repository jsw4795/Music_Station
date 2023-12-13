package main.model.service;

import main.model.dao.TempDataDAO;
import main.model.vo.TempDataVO;

public class TempDataService {
	
	/**
	 * DB에 임시 데이터를 저장한다
	 * 그리고 인덱스를 리턴해 준다
	 * 
	 * @param data 데이터값
	 */
	public static int setData(String data) {
		int index = -1;
		
		TempDataVO vo = new TempDataVO(data);
		index = TempDataDAO.insertOne(vo);
		
		return index;
	}
	
	/**
	 * 인덱스에 맞는 데이터를 리턴해주고, DB에 있는 데이터를 삭제한다
	 * 
	 * @param index 파라미터로 받은 인덱스
	 * @return 
	 */
	public static String getData(String index) {
		String data = null;
		
		data = TempDataDAO.selectOne(index);
		TempDataDAO.deleteOne(index);
		
		return data;
	}
	
}
