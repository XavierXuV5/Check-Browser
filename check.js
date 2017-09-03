/* Created by Xavier Xu on  17/8/26 10:42 */
'use strict';
function fun(Inputs,name){
    for(var i=0;i<Inputs.length;i++){
        if(Inputs[i].name==name){
            Inputs[i].checked=true;
        }else {
            Inputs[i].disabled=true;
        }
    }
}

class checkBrowser {
    constructor() {
        this.userAgent = navigator.userAgent;
        this.Android = this.userAgent.indexOf('Android') > -1 || this.userAgent.indexOf('Linux') > -1;
        this.IPhone = this.userAgent.indexOf("iPhone") != -1;
        this.Ios = this.userAgent.indexOf('iPhone') > -1 || this.userAgent.indexOf('Mac') > -1;
        this.Ipad = this.userAgent.indexOf('iPad') > -1;
        this.Opera = this.userAgent.indexOf("Opera") > -1;
        this.IE = this.userAgent.indexOf("compatible") > -1 && this.userAgent.indexOf('MSIE') > -1 && !this.Opera;
        this.Edge = this.userAgent.indexOf("Edge") > -1;
        this.FireFox = this.userAgent.indexOf('Firefox') > -1;
        this.Safari = this.userAgent.indexOf('Safari') > -1 && this.userAgent.indexOf('Chrome') == -1;
        this.Chrome = !this.Edge && this.userAgent.indexOf('Chrome') > -1 && this.userAgent.indexOf('Safari') > -1;
        this.IE11 = this.userAgent.indexOf('Trident') > -1 && this.userAgent.indexOf('rv:11.0') > -1;
        this.Wechat=!!this.userAgent.match(/MicroMessenger/i);
        this.Weibo=!!this.userAgent.match(/Weibo/i);
        this.UCBrowser=!!this.userAgent.match(/UCBrowser/i);
        this.QQ=!!this.userAgent.match(/QQ/i);
        this.QQBrowser=!this.userAgent.indexOf('MQQBrowser') > -1 && this.userAgent.indexOf('QQ/');
        this.WinWeChat=!!this.userAgent.match(/WindowsWeChat/i); // PC微信端
    }

    isOS() {
        if (!!this.userAgent.match(/compatible/i) || this.userAgent.match(/Windows/i)) {
            fun(osInput, 'windows');
        } else if (!!this.userAgent.match(/Macintosh/i) || this.userAgent.match(/Macintosh/i)) {
            fun(osInput, 'macOS');
        } else if (!!this.userAgent.match(/iphone/i) || this.userAgent.match(/Ipad/i)) {
            fun(osInput, 'ios');
        } else if (!!this.userAgent.match(/android/i)) {
            fun(osInput, 'android');
        } else {
            fun(osInput, 'other');
        }
    }

    isTerminal() {
        if (this.IPhone) {
            fun(oTerminal, 'iPhone');
        } else if (this.Android) {
            fun(oTerminal, 'Android');
        } else if (!!this.userAgent.match(/MacIntel/i) || this.userAgent.match(/Macintosh/i)) {
            fun(oTerminal, 'Mac');
        } else if (!!this.userAgent.match(/compatible/i) || this.userAgent.match(/Windows/i)) {
            fun(oTerminal, 'Windows');
        } else if (this.Ipad) {
            fun(oTerminal, 'iPad');
        }

    }

    isEntry() { // 浏览器入口
        if (this.Chrome) {
            fun(oEntry, 'Chrome');
        }
        if(this.FireFox){
            fun(oEntry, 'FireFox');
        }
        if(this.Safari){
            fun(oEntry, 'Safari');
        }
        if(this.IE11){
            fun(oEntry, 'Ie11');
        }
        if(this.IE){
            fun(oEntry,'Ie')
        }
        if(this.Edge){
            fun(oEntry, 'Edge');
        }

        if(this.Wechat || this.Android && this.QQBrowser=='-1' && this.QQ){ // 判断安卓 QQ内置 或者 QQ浏览器   微信X5内核
            if(this.Wechat && this.Android){
                fun(oEntry,'AndroidWeChat');
            }else if(this.WinWeChat ){
                alert('电脑微信端');
            }else {
                fun(oEntry,'AndroidQQBrowser');
            }
        }else if(this.Android && this.QQ){
            fun(oEntry,'AndroidQQ');
        }

        if(this.IPhone && this.Wechat){
            fun(oEntry,'IosWeChat');
        }

        if(this.Weibo){
            fun(oEntry,'WeiBo')
        }

        if(this.UCBrowser){
            fun(oEntry,'UCBrowser');
        }

        if(this.IPhone && this.QQBrowser=='-1' && this.QQ ){ // iPhone QQ内置 或 QQ浏览器
            fun(oEntry,'IosQQBrowser');
        }else if(this.IPhone && this.QQ){
            fun(oEntry,'IosQQ');
        }
    }

    isMobile(){ //detection PC and Mobile
        if(!!this.userAgent.match(/AppleWebKit.*Mobile.*/) && !!this.userAgent.match(/AppleWebKit/)){
            document.writeln('Browser:'+'Mobile Browser'+'<hr>');
        }else {
            document.writeln('Browser:'+'Desktop Browser'+'<hr>');
        }
    }
    isIe(){
        if(this.IE){
            var reIE=new RegExp('MSIE (\\d+\\.\\d+);');
            reIE.test(this.userAgent);
            var IE_version=parseFloat(["$1"]);

            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(this.userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7) {
                document.writeln("IE版本:"+7+'<br>');
            } else if (fIEVersion == 8) {
                document.writeln("IE版本:"+8+'<br>');
            } else if (fIEVersion == 9) {
                document.writeln("IE版本:"+9+'<br>');
            } else if (fIEVersion == 10) {
                document.writeln("IE版本:"+10+'<br>');
            } else {
                document.writeln("IE版本:"+6+'<br>');//IE版本<=7
            }
        }else {

        }
    }

}





