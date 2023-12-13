package main.model.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TempDataVO {
	private int idx;
	private String value;
	
	public TempDataVO(String value) {
		this.setValue(value);
	}
}
