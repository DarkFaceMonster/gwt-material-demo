$wnd.gwtmaterialdemo.runAsyncCallback7("function vAd(){}\nfunction xAd(){}\nfunction pxb(){oxb()}\nfunction r$b(a,b){a.o=b}\nfunction w$b(a){this.a=a}\nfunction y$b(a){this.a=a}\nfunction A$b(a){this.a=a}\nfunction BAd(a){this.a=a}\nfunction DAd(a){this.a=a}\nfunction Vwb(a){!!Lwb&&OA(Lwb,a)}\nfunction o$b(a){s$b(a.k,a.o,a.i,a.f)}\nfunction p$b(a){s$b(a.k,a.o,a.i,a.f)}\nfunction tAd(a){r$b(a.b,ho(a.a));q$b(a.b)}\nfunction Ywb(){if(!Pwb){Vxb();Pwb=true}}\nfunction oxb(){oxb=_tb;nxb=new Ly}\nfunction n$b(a){a.k.style[Chf]=Dhf+a.e+' '+a.g}\nfunction HAd(a){var b;if(!a.d){b=new uAd;a.d=b}return a.d}\nfunction AAd(a){this.a=new BAd(this);this.b=new DAd(this);this.c=a}\nfunction mAd(a,b,c){qIb();PIb.call(this,a,b,c,(Nrd(),Lrd))}\nfunction Twb(a){Wwb();Ywb();return Rwb((oxb(),oxb(),nxb),a)}\nfunction Vxb(){var b=$wnd.onscroll;$wnd.onscroll=gUe(function(a){try{Pwb&&Vwb((qt($doc),rt($doc),new pxb))}finally{b&&b(a)}})}\nfunction GAd(a){var b,c;if(!a.c){c=new mAd(DFb(xJb(a.a)),(b=HAd(a),b),FAd(a));iIb((AJb(a.a),c),xLb(AJb(a.a)));a.c=c}return a.c}\nfunction t$b(a){if(a.a){a.k.style[pZe]=Ghf+a.j+'ms '+a.b;a.k.style[qZe]=Ghf+a.j+'ms '+a.b}else{a.k.style[pZe]='';a.k.style[qZe]=''}}\nfunction uAd(){fJb.call(this);dJb(this,zAd(new AAd(this)));Grd(this.b);Go(this.b,new vAd,jA?jA:(jA=new Ly));Go(this.b,new xAd,(!oA&&(oA=new Ly),oA))}\nfunction m$b(a){$doc.documentElement.style[EXe]=a.p;(_vb(),a.tb).style[IXe]=(jv(),cVe);!a.Y&&(a.Y=new B1c(a));y1c(a.Y);if(a.c){Mo(a);a.c=false}mA(a,a)}\nfunction u$b(){BQb.call(this,$doc.createElement(CXe),lD(fD(wrb,1),SWe,2,6,['material-cutout']));this.d=(Ixc(),htc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=$doc.createElement(CXe);qs((_vb(),this.tb),this.k);this.tb.style[EXe]=(Ew(),gWe);this.tb.style[IXe]=(jv(),cVe)}\nfunction s$b(a,b,c,d){var e,f,g,h,i;h=et(tt(b.ownerDocument),b)-(ROb==null&&(ROb=$wnd.$(d$e)),ROb).scrollTop();g=dt(tt(b.ownerDocument),b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css(GXe,h+nWe);$wnd.$(a).css(aWe,g+nWe);$wnd.$(a).css(_Ue,i+nWe);$wnd.$(a).css($Ue,f+nWe)}\nfunction Ws(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction q$b(a){var b,c,d,e,f;c=(_vb(),a.tb).style;c[_Ue]=(lx(),'100.0%');c[$Ue]='100.0%';c[DXe]=(Tw(),lWe);c[GXe]=FXe;c[aWe]=FXe;c[JXe]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[A_e]=\"''\";c[DXe]=kWe;c[JXe]='-1';if(!a.o){throw Btb(new $He('The target element should be set before calling open().'))}Ws(a.o);a.g==null&&(d=new AQb($doc.createElement(CXe)),PPb(d,a.d),e=d.tb.style,e[DXe]=lWe,undefined,e[_Ue]='1.0px',undefined,e[$Ue]='1.0px',undefined,e[aWe]='-10.0px',undefined,e[GXe]='-10.0px',undefined,e[JXe]='-10000',undefined,f=Bnc(a.d),a.n<1&&OIe(f.substr(0,4),'rgb(')&&(f=TIe(TIe(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=b[EXe];b[EXe]=gWe;a.e==null&&(a.e=(ROb==null&&(ROb=$wnd.$(d$e)),ROb).width()+300+nWe);t$b(a);if(a.a){a.k.style[Chf]='0px 0px 0px 0rem '+a.g;Gr((zr(),yr),new w$b(a))}else{a.k.style[Chf]=Dhf+a.e+' '+a.g}if(a.f){a.k.style[Ehf]=z8e;a.k.style[Fhf]=z8e}else{a.k.style[Ehf]='';a.k.style[Fhf]=''}s$b(a.k,a.o,a.i,a.f);NPb(a,Swb(new y$b(a)));NPb(a,Twb(new A$b(a)));a.tb.style[IXe]='';if(!a.sb){a.c=true;ryb((jDb(),nDb(null)),a)}rA(a,a)}\nfunction zAd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new Cic;UOb(b,(c=new A5b,UOb(c,(e=new Ckd,Is(ho(e.a),(tvb(),(new hvb(uvb(G4e))).a)),GA(e,G4e),e)),UOb(c,(f=new fxe,Qnd(f,(g=new mJe,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new bvb(g.a)).a),zo((_vb(),f.tb),H4e,true),f)),zo(c.tb,V0e,true),c));UOb(b,(d=new A5b,UOb(d,(h=new Ckd,Ond(h.b,'Click the icon below to show a material cutout.'),Is(ho(h.a),(new hvb(uvb(Ihf))).a),GA(h,Ihf),h)),UOb(d,(i=new Led,Jed(i,(XRc(),KMc)),YOb(i,a.a),a.c.a=i,i)),UOb(d,(j=new u$b,UOb(j,(k=new Ckd,Ond(k.b,'Description of your new Feature'),Is(ho(k.a),(new hvb(uvb(Jhf))).a),GA(k,Jhf),qQb(k,(Ixc(),txc)),k)),UOb(j,(l=new WVb,PPb(l,txc),bXb(l.k,a5e),l.k.ob||UOb(l,l.k),qQb(l,htc),YOb(l,a.b),l)),pQb(j,(XTc(),TTc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),UOb(d,(m=new fxe,Qnd(m,(n=new mJe,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new bvb(n.a)).a),zo(m.tb,H4e,true),m)),UOb(d,(o=new fxe,Qnd(o,(p=new mJe,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new bvb(p.a)).a),zo(o.tb,M4e,true),o)),zo(d.tb,V0e,true),d));return b}\nvar Chf='boxShadow',Dhf='0px 0px 0px ',Ehf='WebkitBorderRadius',Fhf='borderRadius',Ghf='box-shadow ',Hhf='gwt.material.design.addins.client.cutout',Ihf='Material Cut Out',Jhf='New Feature';var Pwb=false;$tb(764,rWe,{},pxb);_.fd=function qxb(a){p$b(XD(a,2995).a)};_.gd=function rxb(){return nxb};var nxb;var mJ=sHe(qUe,'Window/ScrollEvent',764);$tb(2277,26,sZe,u$b);_.Qe=function v$b(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var MN=sHe(Hhf,'MaterialCutOut',2277);$tb(2278,1,{},w$b);_.Zc=function x$b(){n$b(this.a)};var JN=sHe(Hhf,'MaterialCutOut/lambda$0$Type',2278);$tb(2279,1,wYe,y$b);_.xd=function z$b(a){o$b(this.a)};var KN=sHe(Hhf,'MaterialCutOut/lambda$1$Type',2279);$tb(2280,1,{8:1,2995:1},A$b);var LN=sHe(Hhf,'MaterialCutOut/lambda$2$Type',2280);$tb(961,56,WYe,mAd);_.Ce=function nAd(){Gwe();xIb(this,new Iwe('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var q1=sHe(d6e,'CutOutsPresenter',961);$tb(1322,65,XYe,uAd);var w1=sHe(d6e,'CutOutsView',1322);$tb(1323,1,CYe,vAd);_.vd=function wAd(a){Hkd(new Kkd(lD(fD(KK,1),HUe,21,0,[])),'Close Event Fired',PZe,null)};var r1=sHe(d6e,'CutOutsView/lambda$0$Type',1323);$tb(1324,1,F1e,xAd);_.wd=function yAd(a){Hkd(new Kkd(lD(fD(KK,1),HUe,21,0,[])),'Open Event Fired',PZe,null)};var s1=sHe(d6e,'CutOutsView/lambda$1$Type',1324);$tb(1851,1,{},AAd);var v1=sHe(d6e,'CutOutsView_BinderImpl/Widgets',1851);$tb(1852,1,CZe,BAd);_.md=function CAd(a){tAd(this.a.c)};var t1=sHe(d6e,'CutOutsView_BinderImpl/Widgets/1',1852);$tb(1853,1,CZe,DAd);_.md=function EAd(a){m$b(this.a.c.b)};var u1=sHe(d6e,'CutOutsView_BinderImpl/Widgets/2',1853);$tb(800,1,d5e);_.Xc=function NAd(){OMb(this.b,GAd(this.a.a))};gUe(Jq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")
