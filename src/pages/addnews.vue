<template>
	<div class="content">
		<el-form :label-position="labelPosition" label-width="80px" :model="form">
			<el-form-item label="缩略图">
				<el-upload class="avatar-uploader" action="http://127.0.0.1:5000/up_photo" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" name="photo">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item label="新闻名称">
				<el-input v-model="form.news_name"></el-input>
			</el-form-item>
			<el-form-item label="新闻摘要">
				<el-input v-model="form.abstract"></el-input>
			</el-form-item>
			<el-form-item label="作者">
				<el-input v-model="form.author"></el-input>
			</el-form-item>
			<el-form-item label="来源">
				<el-input v-model="form.origin"></el-input>
			</el-form-item>
			<el-form-item label="新闻内容">				
				<div id="news_content" v-model="form.news_content"></div>
			</el-form-item>
			<el-form-item style="text-align: center;">
				<el-button type="primary" @click="addNews">立即创建</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import axios from "axios";

	axios.defaults.baseURL = 'http://127.0.0.1:5000/';

	export default {
		data() {
			return {
				labelPosition: 'right',
				form: {
					news_name: "",
					abstract: "",
					author: "",
					origin: ""
				},
				editor:{},
				imageUrl: ''
			};
		},
		methods: {
			addNews() {
				axios.post("addNews", {
						actionCode: 'login',
						photo: this.imageUrl,
						news_name: this.form.news_name,
						abstract: this.form.abstract,
						author: this.form.author,
						origin: this.form.origin,
						news_content: this.editor.txt.html()
					})
					.then(function(response) {
						if(response.data.meta.errno == 0) {

						} else {

						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isLt2M = file.size / 1024 / 1024 < 2;
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isLt2M;
			}
		},
		created(){
			
		},
		mounted(){
			var E = window.wangEditor
		    var editor = new E('#news_content');
		    this.editor = editor;
		    editor.customConfig.uploadImgShowBase64 = false;
		    editor.create();
		}
	}
</script>

<style>
	.content {
		width: 1200px;
		margin: 22px auto;
	}
	
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>