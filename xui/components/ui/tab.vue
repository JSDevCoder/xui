<template>
	<view class="tab">
		<view class="tab-head">
			<!-- <view class="b-r"></view> -->
			<view class="tab-head-item single-line-hidden" v-for="(item, index) of itemData" :key="index" :data-index="index" @tap="itemTap">
				<text :class="idx == index ? 'c' : ''">{{item.title}}</text>
				<view class="b-b" v-if="idx == index"></view>
			</view>
		</view>
		<view class="tab-content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'x-tab',
		
		data() {
			return {
				idx: 0
			}
		},
		
		props: {
			itemData: {
				type: Array,
				default() {
					return [{
						pane: 'pane1',
						title: '测试一'
					}, {
						pane: 'pane2',
						title: '测试二'
					}]
				}
			}
		},
		
		methods: {
			itemTap(e) {
				const index = e.currentTarget.dataset.index;
				this.idx = index;
				this.$emit('itemTap', index);
			}
		}
	}
</script>

<style lang="less" scoped>
@keyframes w {
	0% {
		width: 0;
	}
	
	100% {
		width: 80px;
	}
}
.tab{
	
	.tab-head{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;
		border-bottom: 1px solid #d8d8d8;
		
		.b-r{
			width: 1px;
			height:44px;
			background-color: #d8d8d8;
			position: absolute;
			left:50%;
			top:0;
			margin-left: -0.5px;
		}
		
		.tab-head-item{
			flex-grow: 1;
			height: 44px;
			text-align: center;
			line-height: 44px;
			position: relative;
			
			.b-b{
				width: 80px;
				height:2px;
				background-color: #CC0200;
				margin-left: -40px;
				position: absolute;
				left:50%;
				bottom:0;
				animation: w .3s;
			}
			
			.c{
				color: #cc0200;
			}
		}
	}
	
	.tab-content{
		padding:20px;
	}
}
</style>
