<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>upload Page</title>
<link href="/info/css/uploadMainStyle.css" rel="stylesheet">
<link href="/info/css/uploadFileDetail.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="/info/js/uploadMain.js"></script>
<script src="/info/js/uploadFileDetails.js"></script>

</head>
<body>
	<div id="uploadContainer">
		<form method="post" id="fileFrm" enctype="multipart/form-data">
		<h2 id="uploadTitle">YOU CAN UPLOAD YOUR OWN TRACKS</h2>
		<div id="uploadMain" data-userId="${siteUserInfo.userId }">
			<div id="uploadMain_banner">
				<div id="upload_container">
					<div id="upload_beforeChooser">
						<div id="uploadDropArea">
							<%--드롭영역 시작--%>
							<div id="uploadMain_content">
								<h1 class="uploadMain_title">Drag and drop your tracks here</h1>
								<div class="uploadMain_chooser">
									<div class="chooseFiles">
										<input class="chooseFiles_input" type="file" accept=".mp3" id="musicFileInput" name="musicFile">
										<button type="button" class="chooseFiles_btn"
											style="min-width: 300px">
											<span class="sc-button-label">or choose files to
												upload</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<%--드롭영역 끝 --%>
				</div>
			</div>
		</div>

		<%--modal로 열기 --%>
		<div class="uploadModalContainer">
			<div class="activeUpload_form">
				<div class="soundEditTabs">
					<div class="title">
						<h2>Music Basic Info</h2>
					</div>
						<div class="Tabs_content">
							<div class="tabs_contentSlot" style="display: block">
								<div class="editBasicTab">
									<div class="baseFields">
										<div class="baseFields_img">
											<div class="editImage alwaysShowEditButton"
												style="width: 260px">
												<div class="editImage_select">
													<div class="uploadMusicImg">
														<span class="uploadSpan"><img id="thumbnail"
															src="/main/resources/images/musicPic/defaultMusicPic.png" alt="music photo"></span>
													</div>
													<div class="imageChooser editImage_btn">
														<button type="button" class="imageChosserBtn">
															<svg xmlns="http://www.w3.org/2000/svg" width="16"
																height="16" fill="currentColor"
																class="bi bi-camera-fill" viewBox="0 0 16 16">
  												<path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
  												<path
																	d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
												</svg>
															Upload Image
														</button>
														<input class="imageChooser_fileInput" type="file"
															accept=".jpg" name="picture" id="picture" >
													</div>
												</div>
											</div>
										</div>
										<div class="baseFieldsAll">
											<div class="baseFields_data">
												<div class="baseFields_title">
													<div class="textfield">
														<label class="text_title"> <span
															class="textfield_label">Title</span>
														</label>
														<div class="textfield_inputWrapper">
															<input class="textfield_input" id="title" type="text"
																name="title" >
														</div>
													</div>
												</div>
												<div class="textfield">
													<label class="text_description">
														<span class="textfield_label">Description</span>
													</label>
													<div class="textfield_inputWrapper">
														<textarea class="textfield_input" id="info" name="info"
															rows="3"></textarea>
													</div>
												</div>
											</div>
											<div class="activeUpload_formButtons">
												<div class="uploadBtn">
													<button type="button" class="activeUpload_cancle"
														title="cancel">Cancel</button>
													<button type="button" class="activeUpload_Save"
														title="save">Save</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>
			<span id="uploadNotice">음원은 업로드 후 10초가 지난 후 실제 업로드 됩니다.</span>
		</div>
		<div class="uploadDetailsoverlay"></div>
		</form>
	</div>
</body>
</html>