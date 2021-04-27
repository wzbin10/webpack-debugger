'use strict'
export default class RateCanvas {
    constructor(params){
        params = params || {};
        this.unit = params.unit || '';   //占比单位
        this.speed = params.speed || 1;  //动画速度
        this.bRepeatAni = params.bRepeatAni || false;   //是否重复动画
        this.delayTime = params.delayTime || 10*1000;   //重复执行动画的间隔
        this.circelLineBg = params.circelLineBg || 'rgba(233,95,104,0.6)';   //圆圈背景
        this.gradientBgStart = params.gradientBgStart || 'rgba(4,178,195,0.6)';   //占比渐变开始
        this.gradientBgEnd = params.gradientBgEnd || 'rgba(4,178,195,1)';   //占比渐变结束
        this.innerLineStart = params.innerLineStart || 'rgba(2, 184, 198, 0)';   //内部线
        this.innerLineEnd = params.innerLineEnd || 'rgba(4,178,195,1)';   //内部线
        this.gradientLineWidth = params.gradientLineWidth || 30;   //宽
        this.borderWidth = params.borderWidth || 3;   //边框
        this.borderColor = params.borderColor ||'#000000';   //边框
        this.tickBorderWidth = params.tickBorderWidth || 5;   //刻度块
        this.tickBorderColor = params.tickBorderColor || '#00feff';   //刻度块色值
        this.showPercent = params.showPercent || true;
        this.showValue = params.showValue || true;
        this.vPositionX = params.vPositionX || 'center';
        this.vPositionY = params.vPositionY || 80;
        this.detailFontSize = params.detailFontSize || 48;
        this.detailFontFamily = params.detailFontFamily || 'Arial';
        this.detailFontColor = params.detailFontColor || '#000000';
        this.footerImg = params.footerImg || null;
        this.promises = params.promises || [];
    }
    init(dom,dataInfo){
        let _this = this;
        let canvas = dom;
        let gradientBgStart = this.gradientBgStart || 'rgba(4,178,195,0.6)',
            gradientBgEnd = this.gradientBgEnd || 'rgba(4,178,195,1)',
            innerLineStart = this.innerLineStart || 'rgba(2, 184, 198, 0)',
            innerLineEnd = this.innerLineEnd || 'rgba(2, 184, 198, 1)';

        if(!canvas) throw new Error("config not found: "+canvasId);

        this._radius = Math.min(canvas.offsetWidth, canvas.offsetHeight) * 0.5;
        canvas.width = this._radius * 2;
        canvas.height = this._radius * 2;
        this._ctx = canvas.getContext('2d');
        this._ctx.translate(this._radius, this._radius); //将坐标原点移到画布中心

        // 圆环颜色渐变
        this._fillGrad = this._ctx.createRadialGradient(this._radius, this._radius, 0, this._radius, this._radius, this._radius * 2);    
        this._fillGrad.addColorStop(0.0,gradientBgStart);  //'#0b3e59' 
        //this._fillGrad.addColorStop(0.5,'rgba(4,178,195,0.5)');  //'#0c6f89'
        this._fillGrad.addColorStop(1,gradientBgEnd);  //'#04b2c3'

        // 内部线渐变
        this._lineGrd = this._ctx.createLinearGradient( 0, this._radius, 0, - this._radius * 0.5);     
        this._lineGrd.addColorStop(0.5, innerLineStart);      
        this._lineGrd.addColorStop(1, innerLineEnd);

        var gradientLineWidth = isNaN(this.gradientLineWidth) ? 100 : Math.abs(100-this.gradientLineWidth);
        this._innerRadius = this._radius*gradientLineWidth/100;
        this._outerRadius = this._radius;
        this._borderLineWidth = this.borderWidth || 0;
        this._brickLineWidth = this.tickBorderWidth || 0;
        this._borderColor = this.borderColor || 'transparent';
        this._brickColor = this.tickBorderColor || 'transparent'; // 亮绿色的宽度
        this._startAngle = 150 * Math.PI / 180;
        this._totalAngle = 240 * Math.PI / 180;
        this._textDistance = (this._innerRadius + this._outerRadius) * 0.5;
        this._currentNum = 0; // 显示百分数

        // let promise = new Promise(function(resolve, reject){
        //     var img = new Image();
        //     img.onload = function(){
        //         _this.footerImg = img;
        //         resolve();
        //     }
        //     img.src = '../assets/footer.png';
        // });
        // this.promises.push(promise);

        this.initData(dataInfo)
    }
    initData(data=[]){
        let _this = this;
        if(data.length){
            data = data[0];
            this._totalRate = (data.currentNum / data.totalNum).toFixed(4) * 100;

            this._currentNum = data.currentNum;
            this._totalNum = data.totalNum;
            this._currentName = data.currentName;
            this._curRate = 0; // 百分比文字
            this._curAngle = 0; // 环形填充角度
            if(this._requestID) {
                cancelAnimationFrame(this._requestID);
            }
            if(this._timeoutID) {
                clearTimeout(this._timeoutID);
            }

            Promise.all(this.promises).then(() => {
                _this.drawCanvasContent(); 
            });
            
        }
    }
    drawCanvasContent(){//绘制完整canvas rate: 百分比
        this._clearCanvasRect();
        this._curRate = Math.min(this._curRate, this._totalRate);
        this._drawRing(this._totalAngle, this.circelLineBg ||'rgba(233,95,104,0.8)'); 
        this._curAngle && this._drawRing(this._curAngle, this._fillGrad);
        this._drawInnerCircleBg();
        if(this.showValue) this._drawfooterText();
        this._ringInnerText();
        if(!this._totalRate) return;
        this._curRate += this.speed;
        this._curAngle = this._totalAngle * this._curRate / 100;
        if(this._curRate < this._totalRate + this.speed){
          this._requestID = requestAnimationFrame(() => {this.drawCanvasContent()});
        } else {
            if(this.bRepeatAni) {
                this._timeoutID = setTimeout(() => {
                    this._curRate = 0;
                    this._curAngle = 0; // 环形填充角度
                    this.drawCanvasContent();
                }, this.delayTime);
            }
        }
    }
    _clearCanvasRect(){//清除canvas内容
        this._ctx.clearRect(-this._radius, -this._radius, this._radius * 2, this._radius * 2);
    }
    _drawRing(angle, fillColor){// 红色背景圆环, 蓝色渐变进度
        this._ctx.save();
        // 裁切扇形 闭合区域
        this._ctx.beginPath();
        this._ctx.rotate(this._startAngle);
        this._ctx.arc(0, 0, this._outerRadius, 0, angle, false);
        this._ctx.arc(0, 0, this._innerRadius, angle, 0, true);
        this._ctx.closePath();
        this._ctx.clip();
        this._ctx.fillStyle = fillColor;
        this._ctx.fill();
        // 画弧线顶部边界线
        this._ctx.strokeStyle = this._borderColor;
        this._ctx.lineWidth = this._borderLineWidth; 
        this._ctx.beginPath();
        this._ctx.arc(0, 0, this._outerRadius, 0, this._totalAngle, false);
        this._ctx.stroke();
        // 画弧线底部边界线
        this._ctx.strokeStyle = this._borderColor;
        this._ctx.lineWidth = this._borderLineWidth; 
        this._ctx.beginPath();
        this._ctx.arc(0, 0, this._innerRadius, 0, this._totalAngle, false);
        this._ctx.stroke(); 
        this._ctx.restore();
        // 起始位置添加横条
        this._ctx.save();
        this._ctx.rotate(this._startAngle);
        this._ctx.strokeStyle = this._brickColor;
        this._ctx.lineWidth = this._brickLineWidth; 
        this._ctx.beginPath();
        this._ctx.moveTo(this._innerRadius, 0);
        this._ctx.lineTo(this._outerRadius, 0);
        this._ctx.closePath();
        this._ctx.stroke();
        this._ctx.restore();
        this._ctx.save();
        //终止位置添加横条
        var endAngle = this._startAngle + angle;
        this._ctx.rotate(endAngle);
        this._ctx.strokeStyle = this._brickColor;
        this._ctx.lineWidth = this._brickLineWidth; 
        this._ctx.beginPath();
        this._ctx.moveTo(this._innerRadius, 0);
        this._ctx.lineTo(this._outerRadius, 0);
        this._ctx.closePath();
        this._ctx.stroke();
        this._ctx.restore();
    }
    _drawInnerCircleBg(){// 内部圆圈+文字
        this._ctx.beginPath();
        // 渐变弧形
        this._ctx.arc(0, 0, this._innerRadius * 0.8, this._startAngle, this._startAngle + this._totalAngle);
        this._ctx.strokeStyle = this._lineGrd;
        this._ctx.lineWidth = this._borderLineWidth;
        this._ctx.stroke();
        // 增加文字
        if(this.showPercent){
            this._ctx.font = this.detailFontSize+"px "+this.detailFontFamily;
            this._ctx.fillStyle = this.detailFontColor || "#00f5ff";
            this._ctx.textAlign='center';
            this._ctx.textBaseline = 'middle';
            // this._ctx.fillText(this._curRate.toFixed(0) + this.unit, 0, 0);
            this._ctx.fillText(this._currentNum.toFixed(0) + this.unit, 0, 0);
        }
    }
    _drawfooterText(){// 底部文字+底座图片
        this._ctx.save();
        this._ctx.translate(0, this._innerRadius * this.vPositionY/100);
        this._ctx.font = this.detailFontSize+"px "+this.detailFontFamily;
        this._ctx.fillStyle = this.detailFontColor ||"#00f5ff";
        this._ctx.textAlign= this.vPositionX ||'center';
        this._ctx.textBaseline = 'middle';
        this._ctx.fillText(this._currentName ||0, 0, 0);
        this._ctx.restore();

        // this._ctx.save();
        // this._ctx.translate(0, this._innerRadius);
        // this._ctx.scale(1, 1);
        // this._ctx.drawImage(this.footerImg, -this.footerImg.width / 2, -this.footerImg.height / 2, this.footerImg.width, this.footerImg.height);
        // this._ctx.restore();
    }
    _ringInnerText(){// 环形上的文字
        this._ctx.save();
        this._ctx.rotate(this._startAngle * 1.08);
        this._ctx.font = "24px Arial";
        this._ctx.fillStyle = this.tickBorderColor || "#ecebeb";
        this._ctx.textAlign='center';
        this._ctx.textBaseline = 'middle';
        this._ctx.fillText('0', this._textDistance, 0);
        this._ctx.restore();
        this._ctx.save();
        var endAngle = this._startAngle + this._totalAngle;
        this._ctx.rotate(endAngle * 0.97);
        this._ctx.font = "24px Arial";
        this._ctx.fillStyle = this.tickBorderColor ||"#ecebeb";
        this._ctx.textAlign='center';
        this._ctx.textBaseline = 'middle';
        this._ctx.fillText(this._totalNum||0, this._textDistance, 0);
        this._ctx.restore();
    }
};