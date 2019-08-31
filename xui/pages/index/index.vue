<template>
	<view class="container">


		<!-- #ifdef H5 -->
		<!-- H5导航条 -->
		<x-nav-bar back="返回" title="H5标题哟" :icons="icons" @tapIcon="tapIcon"></x-nav-bar>
		<!-- #endif -->


		<!-- 侧栏 -->
		<x-side-bar ref="sideBar">
			<view class="content">
				<button type="primary" @tap="confirm">确定</button>
				<button class="mt" type="default" plane @tap="closePopover('sidebar')">关闭</button>
			</view>
		</x-side-bar>

		<!-- 底部弹窗 -->
		<x-bottom-popover ref="bottomPopover">
			<view>可填写任意内容</view>
			<view class="content">
				<button type="primary" @tap="confirm">确定</button>
				<button class="mt" type="default" plane @tap="closePopover('bottom')">关闭</button>
			</view>
		</x-bottom-popover>

		<x-loading ref="vueLoading"></x-loading>



		<view class="btns">
			<button type="primary" @tap="openSideBar">点击打开侧栏</button>
			<button class="mt" type="default" @tap="openBottomPopover">点击打开底部弹窗</button>
			<button class="mt" type="default" @tap="openVueLoading">点击打开loding(vue)</button>
			<!-- #ifdef APP-PLUS -->
			<button class="mt" type="primary" @tap="openNVue">点击打开nvue窗口</button>
			<button class="mt" type="primary" @tap="openNvueLoading">点击打开loading(nvue)</button>
			<!-- #endif -->
		</view>

		<x-tab @itemTap="itemTap" :itemData="itemData">
			<view class="p-b20">标题：{{itemData[index]['title']}}</view>
			<view class="p-b20">导演：{{itemData[index]['author']}}</view>
			<view class="text">简介：{{itemData[index]['desc']}}</view>
		</x-tab>
	</view>
</template>

<script>
	import service from '../../common/service.js'
	import xSideBar from '../../components/ui/side-bar.vue'
	import xBottomPopover from '../../components/ui/bottom-popover.vue'
	import xLoading from '../../components/ui/loading.vue'
	import xTab from '../../components/ui/tab.vue'
	// #ifdef H5
	import xNavBar from '../../components/ui/nav-bar.vue'
	// #endif

	export default {
		data() {
			return {
				title: 'Hello',
				icons: [{
					text: '侧栏'
				}, {
					text: '底栏'
				}],
				index: 0,
				itemData: [{
					pane: 'pane1',
					title: '战狼',
					author: '吴京',
					desc: '在南疆围捕贩毒分子的行动中，特种部队狙击手冷锋公然违抗上级的命令，开枪射杀伤害了战友的暴徒武吉。这一行动令冷锋遭到军方禁闭甚至强制退伍的处罚，不过各特种部队精英组成超级特种部队战狼中队的中队长龙小云，却十分欣赏这个敢作敢为且业务过硬的血性男儿，于是将其召入自己的麾下。在新近的一次演习中，冷锋凭借冷静的判断力从老首长处拔得一城，并且成功击退了突然出现的狼群。谁知在毫无准备的情况下，战狼遭到了一伙荷枪实弹分子的袭击。原来武吉的哥哥敏登是一个冷酷无情的国际通缉犯，他手下豢养了一大批身怀绝技的雇佣兵。为了给弟弟报仇，敏登派出雇佣兵千里迢迢奔着冷锋而来。'
				}, {
					pane: 'pane2',
					title: '西游记之大圣归来',
					author: '田晓鹏',
					desc: '《西游记之大圣归来》是根据中国传统神话故事《西游记》进行拓展和演绎的3D动画电影，由横店影视、天空之城、燕城十月与微影时代联合高路动画、恭梓兄弟、世纪长龙、山东影视、东台龙行盛世、淮安西游产业与永康壹禾共同出品，田晓鹏执导，张磊、林子杰、刘九容和童自荣等联袂配音。影片讲述了已于五行山下寂寞沉潜五百年的孙悟空被儿时的唐僧——俗名江流儿的小和尚误打误撞地解除封印后，在相互陪伴的冒险之旅中找回初心，完成自我救赎的故事。影片于2015年7月10日以2D、3D和中国巨幕的形式在国内公映后，即以优秀的口碑引发网友观众的追捧和媒体的广泛报道。《人民日报》认为该片是中国动画电影十年来少有的现象级作品。2015年，该片获得年第30届中国电影金鸡奖最佳美术片奖和第16届中国电影华表奖优秀故事片奖。2016年8月6日，在第20届华鼎奖组委会公布的50强电影名单中，该片排名第16位。'
				}, {
					pane: 'pane3',
					title: '哪吒之魔童降世',
					author: '饺子',
					desc: '《哪吒之魔童降世》是由霍尔果斯彩条屋影业有限公司出品的动画电影，由饺子执导兼编剧，吕艳婷、囧森瑟夫、瀚墨、陈浩、绿绮、张珈铭、杨卫担任主要配音。该片改编自中国神话故事，讲述了哪吒虽“生而为魔”却“逆天而行斗到底”的成长经历的故事。该片于2019年7月26日在中国内地上映。'
				}]
			}
		},

		components: {
			xSideBar,
			xBottomPopover,
			xLoading,
			xTab,
			// #ifdef H5
			xNavBar
			// #endif
		},

		onLoad() {
			const token = uni.getStorageSync('token');
			console.log(token)
			if (!token) {
				uni.redirectTo({
					url: '/pages/login/login',
					animationType: 'slide-in-bottom',
					animationDuration: '800'
				});
				return;
			}

			// #ifdef APP-PLUS
			this.createNavBar();
			// #endif
		},
		methods: {
			// #ifdef H5
			tapIcon(index) {
				console.log(index)
				console.log('当前点击了第' + index + '个icon')
				console.log(this.icons[index])

				if (index === 0) {
					this.openSideBar();
				} else if (index === 1) {
					this.openBottomPopover();
				}

			},
			// #endif

			// #ifdef APP-PLUS
			createNavBar() {
				const navBar = uni.getSubNVueById('navBar');

				plus.webview.postMessageToUniNView({
					title: '首页'
				}, 'navBar')

				navBar.show();
			},

			openNVue() {
				const popup = uni.getSubNVueById('pop');
				popup.setStyle({
					width: '80%',
					height: '100%'
				})
				popup.show('slide-in-left');
			},

			openNvueLoading() {
				const loading = uni.getSubNVueById('loading');
				loading.show();
			},

			// #endif
			
			itemTap(index) {
				this.index = index;
			},

			openVueLoading() {
				this.$refs.vueLoading.open();
			},

			openSideBar() {
				this.$refs.sideBar.open();
			},

			openBottomPopover() {
				this.$refs.bottomPopover.open();
			},

			confirm() {
				console.log('确定哦');
			},

			closePopover(flag) {
				if (flag === 'sidebar') {
					this.$refs.sideBar.close();
				} else if (flag === 'bottom') {
					this.$refs.bottomPopover.close();
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {

		.mt {
			margin-top: 16px;
		}

		.mr {
			margin-right: 16px;
		}

		.content {
			padding: 16px;
		}

		.btns {
			padding: 16px;
		}
		
		.p-b20{
			padding-bottom: 20px;
		}
		
		.text{
			text-align:justify;
			line-height:2;
		}
	}
</style>
