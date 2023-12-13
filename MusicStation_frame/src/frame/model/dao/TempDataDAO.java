package frame.model.dao;

import org.apache.ibatis.session.SqlSession;

import frame.model.vo.TempDataVO;
import frame.mybatis.DBService;

public class TempDataDAO {
	
	/**
	 *  입력된 인덱스를 리턴해준다
	 * @param vo
	 * @return
	 */
	public static int insertOne(TempDataVO vo) {
		int index = -1;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession(true);
			ss.insert("tempData.insert", vo); // insert하면서 입력된 인덱스를 vo에 set 해준다 (mapper 확인)
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();	
		}
		
		index = vo.getIdx();
		
		return index;
	}
	
	
	public static String selectOne(String idx) {
		String result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectOne("tempData.one", idx);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		return result;
	}
	
	public static int deleteOne(String idx) {
		int result = -1;
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession(true);
			result = ss.delete("tempData.delete", idx);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		return result;
	}
	
}
