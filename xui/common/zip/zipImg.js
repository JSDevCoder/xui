export default {
	// 图片路径
	tempFilePaths: '',
	
	materialList: [],

	//选择图片
	chooseImage() {
		uni.chooseImage({
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			count: 9, //默认9
			success: res => {
				console.log(res)
				this.tempFilePaths = res.tempFilePaths;
				//#ifdef MP-WEIXIN
				//图片压缩并转base64
				this.weixin_img(0, res)
				//#endif

				//#ifdef APP-PLUS
				//图片压缩
				this.app_img(0, res)
				//#endif

			}
		})
	},
	// app压缩图片  
	// 用for循环来处理图片压缩的问题，
	// 原因是 plus.zip.compressImage方法是异步执行的，
	// for循环很快，
	// 同时手机可执行的压缩方法有限制：应该是3个吧。
	// 超出直接就不执行了。
	// 所以原理就是在图片压缩成功后，继续回调压缩函数。 
	// 以到达循环压缩图片的功能。
	app_img(num, res) {
		//获取图片地址最后一个点的位置 
		let index = res.tempFiles[num].path.lastIndexOf(".");

		//截取图片类型如png jpg
		let img_type = res.tempFiles[num].path.substring(index + 1, res.tempFiles[num].path.length);

		//截取图片原始路径
		let img_yuanshi = res.tempFiles[num].path.substring(0, index);

		//时间戳
		let d2 = new Date().getTime();

		//压缩图片
		plus.zip.compressImage(
			{
				//你要压缩的图片地址
				src: res.tempFiles[num].path,

				//压缩之后的图片地址(注意压缩之后的路径最好和原生路径的位置一样，不然真机上报code-5)
				dst: img_yuanshi + d2 + '.' + img_type,

				//[10-100]
				quality: 10
			},
			e => {
				//压缩之后路径转base64位的
				//通过URL参数获取目录对象或文件对象
				plus.io.resolveLocalFileSystemURL(e.target, function(entry) {
					// 可通过entry对象操作test.html文件 
					//获取文件数据对象
					entry.file(file => {
						// 文件系统中的读取文件对象，用于获取文件的内容
						const fileReader = new plus.io.FileReader();
						//alert("getFile:" + JSON.stringify(file));

						//以URL编码格式读取文件数据内容
						fileReader.readAsDataURL(file);

						//读取文件成功完成的回调函数
						fileReader.onloadend = evt => {
							//拿到'data:image/jpeg;base64,'后面的
							res.tempFiles[num].Base64_Path = evt.target.result.split(",")[1]
						}
					})
				})
				this.materialList = this.materialList.concat(res.tempFiles[num]);
				console.log(num == res.tempFiles.length - 1)
				console.log('end', JSON.stringify(this.materialList))
				//利用递归循环来实现多张图片压缩
				if (num == res.tempFiles.length - 1) {
					return;
				} else {
					this.app_img(num + 1, res)
				}
				console.log('end', this.materialList)
			},
			error => {
				console.log("Compress error!");
				console.log(JSON.stringify(error));
			}
		);
	},
	
	//微信压缩
	weixin_img(num, res) {
		wx.getImageInfo({ //获取这个图片 图片压缩
			src: res.tempFiles[num].path, //需要获取的图片 图片选择不用我说了吧
			success: res => {
				const ctx = wx.createCanvasContext('attendCanvasId'); //使用一个canvas
				const canvasWidth = res.width //原图宽度 
				const canvasHeight = res.height; //原图高度
				const ratio = 2;
				// 保证宽高均在200以内
				while (canvasWidth > 200 || canvasHeight > 200) {
					//比例取整
					canvasWidth = Math.trunc(res.width / ratio)
					canvasHeight = Math.trunc(res.height / ratio)
					ratio++;
				}
				//绘制新图
				ctx.drawImage(res.tempFiles[num].path, 0, 0, canvasWidth, canvasHeight)
				ctx.draw(false, () => {
					//获取图像数据， API 1.9.0
					wx.canvasGetImageData({
						canvasId: 'attendCanvasId',
						x: 0,
						y: 0,
						width: canvasWidth,
						height: canvasHeight,
						success: (res) => {
							let platform = wx.getSystemInfoSync().platform
							if (platform === 'ios') {
								// 兼容处理：ios获取的图片上下颠倒
								res = that.reverseImgData(res)
							}
							// 3. png编码
							let pngData = upng.encode([res.data.buffer], canvasWidth, canvasHeight)
							// 4. base64编码
							let base64 = wx.arrayBufferToBase64(pngData)
							// console.log('1111','data:image/jpeg;base64,'+base64)
							res.tempFiles[num].Base64_Path = base64
							this.materialList = this.materialList.concat(res.tempFiles[num]);
							//利用递归循环来实现多张图片压缩
							if (num == res.tempFiles.length - 1) {
								return
							} else {
								this.weixin_img(num + 1, res)
							}
							console.log('end', this.materialList)
						}
					})
				})
			},
		})


	},
	// 兼容处理：ios获取的图片上下颠倒
	reverseImgData(res) {
		var w = res.width
		var h = res.height
		let con = 0
		for (var i = 0; i < h / 2; i++) {
			for (var j = 0; j < w * 4; j++) {
				con = res.data[i * w * 4 + j]
				res.data[i * w * 4 + j] = res.data[(h - i - 1) * w * 4 + j]
				res.data[(h - i - 1) * w * 4 + j] = con
			}
		}
		return res
	}
}
