$wnd.gwtmaterialdemo.runAsyncCallback54("function xue(){}\nfunction zue(){}\nfunction Bue(){}\nfunction Due(){}\nfunction Fue(){}\nfunction Jue(){}\nfunction Lue(){}\nfunction J6c(a,b){a.onshow=b}\nfunction H6c(a,b){a.onclose=b}\nfunction G6c(a,b){a.onclick=b}\nfunction I6c(a,b){a.onerror=b}\nfunction Iue(){this.a=new Jue;this.b=new Lue}\nfunction wue(){ALb.call(this);yLb(this,Hue(new Iue))}\nfunction nue(a,b,c){LKb();iLb.call(this,a,b,c,(Bud(),zud))}\nfunction Pue(a){var b;if(!a.d){b=new wue;a.d=b}return a.d}\nfunction Oue(a){var b,c;if(!a.c){c=new nue(YHb(SLb(a.a)),(b=Pue(a),b),Nue(a));DKb((VLb(a.a),c),TNb(VLb(a.a)));a.c=c}return a.c}\nfunction uue(){var a;a=(n6c(),$wnd.navigator.serviceWorker!=null);a||vnd(new xnd(xE(rE(_L,1),N_e,21,0,[])),'Push Notification is not supported',Y4e,null);return a}\nfunction vue(){var a,b;if(uue()){if(CPe($wnd.Notification.permission,'granted')){b=new $wnd.Object;b.body='I love GMD';b.icon='https://user.oc-static.com/upload/2017/05/03/14938342186053_01-duration-and-easing.png';a=new $wnd.Notification('GMD Says',b);G6c(a,xwb(zue.prototype.Ef,zue,[]));H6c(a,xwb(Bue.prototype.Ef,Bue,[]));I6c(a,xwb(Due.prototype.Ef,Due,[]));J6c(a,xwb(Fue.prototype.Ef,Fue,[]))}else{vnd(new xnd(xE(rE(_L,1),N_e,21,0,[])),'Permission Denied. Update it thru the browser setting',Y4e,null)}}}\nfunction Hue(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;b=new dlc;oRb(b,(c=new b8b,oRb(c,(i=new pnd,Bqd(i.b,'Will check if the Notification API is supported'),Ws(ho(i.a),(Pxb(),(new Dxb(Qxb(_yf))).a)),SB(i,_yf),i)),oRb(c,(j=new OBe,Dqd(j,(k=new aQe,k.a+='PwaManager.isPwaSupported()',new xxb(k.a)).a),zo((vyb(),j.tb),Tbf,true),j)),zo(c.tb,c8e,true),c));oRb(b,(d=new b8b,oRb(d,(l=new pnd,Ws(ho(l.a),(new Dxb(Qxb(azf))).a),SB(l,azf),l)),oRb(d,(m=new tYb,AZb(m.k,azf),m.k.ob||oRb(m,m.k),sRb(m,a.a),m)),oRb(d,(n=new OBe,Dqd(n,(o=new aQe,o.a+='// Will return the following status (see next section) <br> Notification.getPermission();',new xxb(o.a)).a),zo(n.tb,Tbf,true),n)),zo(d.tb,c8e,true),d));oRb(b,(e=new b8b,oRb(e,(p=new pnd,Ws(ho(p.a),(new Dxb(Qxb(bzf))).a),SB(p,bzf),p)),oRb(e,new ECb((q=new aQe,q.a+='<blockquote> <p><b>denied<\\/b> - The user refuses to have notifications displayed. <\\/p> <p><b>granted<\\/b> - The user accepts having notifications displayed. <\\/p> <p><b>default<\\/b> - The user choice is unknown and therefore the browser will act as if the value were denied. <\\/p> <\\/blockquote>',new xxb(q.a)).a)),zo(e.tb,c8e,true),e));oRb(b,(f=new b8b,oRb(f,(r=new pnd,Ws(ho(r.a),(new Dxb(Qxb(czf))).a),SB(r,czf),r)),oRb(f,(s=new tYb,AZb(s.k,czf),s.k.ob||oRb(s,s.k),sRb(s,a.b),s)),zo(f.tb,c8e,true),f));oRb(b,(g=new b8b,oRb(g,(t=new pnd,Ws(ho(t.a),(new Dxb(Qxb(dzf))).a),SB(t,dzf),t)),oRb(g,new ECb((u=new aQe,u.a+='<blockquote> <p><b>actions<\\/b> - The actions array of the notification as specified in the options parameter of the constructor.<\\/p> <p><b>badge<\\/b> - The URL of the image used to represent the notification when there is not enough space to display the notification itself.<\\/p> <p><b>body<\\/b> - The body string of the notification as specified in the options parameter of the constructor.<\\/p> <p><b>data<\\/b> - Returns a structured clone of the notification\\u2019s data.<\\/p> <p><b>dir<\\/b> - The text direction of the notification as specified in the options parameter of the constructor.<\\/p> <p><b>lang<\\/b> - The language code of the notification as specified in the options parameter of the constructor. <\\/p> <p><b>tag<\\/b> - The ID of the notification (if any) as specified in the options parameter of the constructor. <\\/p> <p><b>icon<\\/b> - The URL of the image used as an icon of the notification as specified in the options parameter of the constructor. <\\/p> <p><b>image<\\/b> - The URL of an image to be displayed as part of the notification, as specified in the options parameter of the constructor. <\\/p> <p><b>renotify<\\/b> - Specifies whether the user should be notified after a new notification replaces an old one. <\\/p> <p><b>requireInteraction<\\/b> - A Boolean indicating that a notification should remain active until the user clicks or dismisses it, rather than closing automatically. <\\/p> <p><b>silent<\\/b> - Specifies whether the notification should be silent, i.e. no sounds or vibrations should be issued, regardless of the device settings. <\\/p> <p><b>timestamp<\\/b> - Specifies the time at which a notification is created or applicable (past, present, or future). <\\/p> <p><b>title<\\/b> - The title of the notification as specified in the first parameter of the constructor. <\\/p> <p><b>vibrate<\\/b> - Specifies a vibration pattern for devices with vibration hardware to emit. <\\/p> <\\/blockquote>',new xxb(u.a)).a)),zo(g.tb,c8e,true),g));oRb(b,(h=new b8b,oRb(h,(v=new pnd,Ws(ho(v.a),(new Dxb(Qxb(ezf))).a),SB(v,ezf),v)),oRb(h,(w=new OBe,Dqd(w,(A=new aQe,A.a+='Notification notification = new Notification(\"GMD Says\", options); <br> // Listen to any Notification events <br> // A handler for the click event. It is triggered each time the user clicks on the notification. <br> notification.setOnclick(param1 -&gt; MaterialToast.fireToast(\"Clicked\")); <br> // A handler for the close event. It is triggered when the user closes the notification. <br> notification.setOnclose(param1 -&gt; MaterialToast.fireToast(\"Closed\")); <br> // A handler for the error event. It is triggered each time the notification encounters an error. <br> notification.setOnerror(param1 -&gt; MaterialToast.fireToast(\"Error\")); <br> // A handler for the show event. It is triggered when the notification is displayed. <br> notification.setOnshow(param1 -&gt; MaterialToast.fireToast(\"Shown\")); <br>',new xxb(A.a)).a),zo(w.tb,Tbf,true),w)),zo(h.tb,c8e,true),h));return b}\nvar _yf='isSupported()',azf='Request Permission',bzf='Permission Status',czf='Show Notification',dzf='Notification Options',ezf='Notification Handlers';vwb(1120,120,a4e,nue);_.Ge=function oue(){nBe();SKb(this,new pBe(Mkf,'Push messaging provides a simple and effective way to re-engage with your users','pwa/notification/NotificationView',''))};var eob=eOe(Tkf,'NotificationPresenter',1120);vwb(1732,129,b4e,wue);var iob=eOe(Tkf,'NotificationView',1732);vwb(3220,$wnd.Function,{},xue);_.Ef=function yue(a){ynd('Status: '+nF(a))};vwb(3216,$wnd.Function,{},zue);_.Ef=function Aue(a){vnd(new xnd(xE(rE(_L,1),N_e,21,0,[])),'Clicked',Y4e,null)};vwb(3217,$wnd.Function,{},Bue);_.Ef=function Cue(a){vnd(new xnd(xE(rE(_L,1),N_e,21,0,[])),Bof,Y4e,null)};vwb(3218,$wnd.Function,{},Due);_.Ef=function Eue(a){vnd(new xnd(xE(rE(_L,1),N_e,21,0,[])),Ztf,Y4e,null)};vwb(3219,$wnd.Function,{},Fue);_.Ef=function Gue(a){vnd(new xnd(xE(rE(_L,1),N_e,21,0,[])),'Shown',Y4e,null)};vwb(2278,1,{},Iue);var hob=eOe(Tkf,'NotificationView_BinderImpl/Widgets',2278);vwb(2279,1,L4e,Jue);_.od=function Kue(a){uue()&&$wnd.Notification.requestPermission(xwb(xue.prototype.Ef,xue,[]))};var fob=eOe(Tkf,'NotificationView_BinderImpl/Widgets/1',2279);vwb(2280,1,L4e,Lue);_.od=function Mue(a){vue()};var gob=eOe(Tkf,'NotificationView_BinderImpl/Widgets/2',2280);vwb(1005,1,jcf);_.Yc=function Vue(){iPb(this.b,Oue(this.a.a))};m_e(Kq)(54);\n//# sourceURL=gwtmaterialdemo-54.js\n")
