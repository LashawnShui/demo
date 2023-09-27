<template>
	<div class="layerContainer">
		<main>
			<canvas ref="canvas"
					id="layerCanvas"></canvas>
		</main>
	</div>
</template>

<script>
import { fabric } from 'fabric';
export default {
	data() {
		return {
			title: 'xxs'
		};
	},
	methods: {
		initLayerCanvas() {
			const layerCanvas = new fabric.Canvas('layerCanvas', {
				devicePixelRatio: true,
				width: '375',
				height: '667',
				originX: 'center',
				originY: 'center',
				backgroundColor: '#fff',
				transparentCorners: false
			});
			layerCanvas.preserveObjectStacking = true;


			// 监听鼠标按下
			const obj = layerCanvas.getActiveObject();
			layerCanvas.on("mouse:down", (options) => {
				// 记录当前鼠标的起点坐标
				if (!obj) {
					this.mouseFrom.x = options.e.clientX - layerCanvas._offset.left;
					this.mouseFrom.y = options.e.clientY - layerCanvas._offset.top;
				}
			});
			// 监听鼠标移动
			layerCanvas.on("mouse:move", (options) => {
				// 记录当前鼠标移动终点坐标
				if (!obj) {
					this.mouseTo.x = options.e.clientX - layerCanvas._offset.left
					this.mouseTo.y = options.e.clientY - layerCanvas._offset.top
					this.drawRect();
				}
			});
			// 鼠标抬起
			layerCanvas.on("mouse:up", (options) => {
				if (!obj) {
					this.mouseFrom.x = options.e.clientX - layerCanvas._offset.left;
					this.mouseFrom.y = options.e.clientY - layerCanvas._offset.top;
					this.doDrawing = false;
					this.canvasObject = null;
					this.mouseFrom = {};
					this.mouseTo = {}
				}
			});
			layerCanvas.on("selection:created", (option) => {
				if (option) {
					this.doDrawing = false;
				}
			})


			// 读取图片地址，设置画布背景
			// let imgScanle = 50;
			fabric.Image.fromURL('./assets/logo.png', (img) => {
				img.set({
					// 通过scale来设置图片大小，这里设置和画布一样大
					scaleX: 400,
					scaleY: 400,
					originX: 'left',
					originY: 'top'
				});
				// 设置背景
				layerCanvas.setBackgroundImage(img, layerCanvas.renderAll.bind(layerCanvas));
				layerCanvas.renderAll(); //重新渲染画布
			});

		}
	},
	created() {
		this.initLayerCanvas();
	}
}
</script>
<style lang="scss" scoped>
.layerContainer {
	width: 100%;
	height: 100%;

	main {
		height: 100%;
	}
}
</style>