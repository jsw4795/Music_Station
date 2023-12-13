package com.mystudy.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import com.mystudy.mybatis.DBService;
import com.mystudy.vo.FileVO;

public class FileDAO {

	// 파일 목록을 반환합니다.
	public static List<FileVO> myFileList(){
		List<FileVO> list = null;
		SqlSession ss = DBService.getFactory().openSession();
		try {
			list = ss.selectList("file.selectFile");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return list;
	}
	
	// 새로운 file 입력합니다.
    public static int insertFile(FileVO vo) {
        int applyResult = 0;
		SqlSession ss = DBService.getFactory().openSession();
		try {
			applyResult = ss.insert("file.insertFile",vo);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
        return applyResult;
    }
}
