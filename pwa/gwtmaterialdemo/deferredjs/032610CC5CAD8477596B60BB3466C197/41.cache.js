$wnd.gwtmaterialdemo.runAsyncCallback41("function NotificationPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(898, 57, $intern_57, NotificationPresenter);\n_.onReveal = function onReveal_62(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Notification', 'Notification', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationPresenter', 898);\nfunction NotificationView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_20(new NotificationView_BinderImpl$Widgets));\n}\n\ndefineClass(1255, 60, $intern_58, NotificationView);\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView', 1255);\nfunction NotificationView$lambda$0$Type(){\n}\n\ndefineClass(2639, $wnd.Function, {}, NotificationView$lambda$0$Type);\n_.call_8 = function call_155(){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Clicked', $intern_70, null);\n}\n;\nfunction NotificationView$lambda$1$Type(){\n}\n\ndefineClass(2640, $wnd.Function, {}, NotificationView$lambda$1$Type);\n_.call_8 = function call_156(){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Closed', $intern_70, null);\n}\n;\nfunction NotificationView$lambda$2$Type(){\n}\n\ndefineClass(2641, $wnd.Function, {}, NotificationView$lambda$2$Type);\n_.call_8 = function call_157(){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Errored', $intern_70, null);\n}\n;\nfunction NotificationView$lambda$3$Type(){\n}\n\ndefineClass(2642, $wnd.Function, {}, NotificationView$lambda$3$Type);\n_.call_8 = function call_158(){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Showed', $intern_70, null);\n}\n;\nfunction $build_f_MaterialPanel1_20(this$static){\n  var f_MaterialPanel1, f_MaterialRow2, f_MaterialRow4, f_MaterialRow6, f_MaterialRow8, f_MaterialRow10, f_MaterialTitle3, btnNotify, f_MaterialTitle5, btnNotifyOptions, f_MaterialTitle7, btnNotifyCallbacks, f_MaterialTitle9, btnNotifyInteraction, f_MaterialTitle11, btnCount;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_14(f_MaterialPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Simple Push Notification'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (btnNotify = new MaterialButton , $setText_9(btnNotify.span_1, 'Notify') , btnNotify.span_1.attached || $add_14(btnNotify, btnNotify.span_1) , $addClickHandler(btnNotify, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , btnNotify)) , setStyleName(($clinit_DOM() , f_MaterialRow2.element_0), 'code', true) , f_MaterialRow2));\n  $add_14(f_MaterialPanel1, (f_MaterialRow4 = new MaterialRow , $add_14(f_MaterialRow4, (f_MaterialTitle5 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle5.header), (new SafeHtmlString(htmlEscape('Options'))).html_0) , f_MaterialTitle5)) , $add_14(f_MaterialRow4, (btnNotifyOptions = new MaterialButton , $setText_9(btnNotifyOptions.span_1, 'Notify with Options') , btnNotifyOptions.span_1.attached || $add_14(btnNotifyOptions, btnNotifyOptions.span_1) , $addClickHandler(btnNotifyOptions, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnNotifyOptions)) , setStyleName(f_MaterialRow4.element_0, 'code', true) , f_MaterialRow4));\n  $add_14(f_MaterialPanel1, (f_MaterialRow6 = new MaterialRow , $add_14(f_MaterialRow6, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle7.header), (new SafeHtmlString(htmlEscape('Callbacks'))).html_0) , f_MaterialTitle7)) , $add_14(f_MaterialRow6, (btnNotifyCallbacks = new MaterialButton , $setText_9(btnNotifyCallbacks.span_1, 'Notify with Options') , btnNotifyCallbacks.span_1.attached || $add_14(btnNotifyCallbacks, btnNotifyCallbacks.span_1) , $addClickHandler(btnNotifyCallbacks, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , btnNotifyCallbacks)) , setStyleName(f_MaterialRow6.element_0, 'code', true) , f_MaterialRow6));\n  $add_14(f_MaterialPanel1, (f_MaterialRow8 = new MaterialRow , $add_14(f_MaterialRow8, (f_MaterialTitle9 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('Require Interaction'))).html_0) , f_MaterialTitle9)) , $add_14(f_MaterialRow8, (btnNotifyInteraction = new MaterialButton , $setText_9(btnNotifyInteraction.span_1, 'Require Interaction (TRUE)') , btnNotifyInteraction.span_1.attached || $add_14(btnNotifyInteraction, btnNotifyInteraction.span_1) , $addClickHandler(btnNotifyInteraction, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , btnNotifyInteraction)) , setStyleName(f_MaterialRow8.element_0, 'code', true) , f_MaterialRow8));\n  $add_14(f_MaterialPanel1, (f_MaterialRow10 = new MaterialRow , $add_14(f_MaterialRow10, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), (new SafeHtmlString(htmlEscape('Count'))).html_0) , f_MaterialTitle11)) , $add_14(f_MaterialRow10, (btnCount = new MaterialButton , $setText_9(btnCount.span_1, 'Count Opened Notifications') , btnCount.span_1.attached || $add_14(btnCount, btnCount.span_1) , $addClickHandler(btnCount, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5) , btnCount)) , setStyleName(f_MaterialRow10.element_0, 'code', true) , f_MaterialRow10));\n  return f_MaterialPanel1;\n}\n\nfunction NotificationView_BinderImpl$Widgets(){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new NotificationView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new NotificationView_BinderImpl$Widgets$2;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new NotificationView_BinderImpl$Widgets$3;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new NotificationView_BinderImpl$Widgets$4;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new NotificationView_BinderImpl$Widgets$5;\n}\n\ndefineClass(1673, 1, {}, NotificationView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets', 1673);\nfunction NotificationView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(1674, 1, $intern_67, NotificationView_BinderImpl$Widgets$1);\n_.onClick_0 = function onClick_244(event_0){\n  $wnd.Push.create('Gwt Material Design');\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/1', 1674);\nfunction NotificationView_BinderImpl$Widgets$2(){\n}\n\ndefineClass(1675, 1, $intern_67, NotificationView_BinderImpl$Widgets$2);\n_.onClick_0 = function onClick_245(event_0){\n  var options;\n  options = new $wnd.Object;\n  options.body = 'I love GWT Material';\n  options.icon = 'https://i.imgur.com/VaBxpGj.png';\n  options.link = 'https://gwtmaterialdesign.github.io/gwt-material-demo';\n  options.timeout = $intern_70;\n  $wnd.Push.create('Gwt Material Design', options);\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/2', 1675);\nfunction NotificationView_BinderImpl$Widgets$3(){\n}\n\ndefineClass(1676, 1, $intern_67, NotificationView_BinderImpl$Widgets$3);\n_.onClick_0 = function onClick_246(event_0){\n  var options;\n  options = new $wnd.Object;\n  options.body = 'I love GWT Material';\n  options.icon = 'https://i.imgur.com/VaBxpGj.png';\n  options.link = 'https://gwtmaterialdesign.github.io/gwt-material-demo';\n  options.timeout = $intern_70;\n  options.onClick = makeLambdaFunction(NotificationView$lambda$0$Type.prototype.call_8, NotificationView$lambda$0$Type, []);\n  options.onClose = makeLambdaFunction(NotificationView$lambda$1$Type.prototype.call_8, NotificationView$lambda$1$Type, []);\n  options.onError = makeLambdaFunction(NotificationView$lambda$2$Type.prototype.call_8, NotificationView$lambda$2$Type, []);\n  options.onShow = makeLambdaFunction(NotificationView$lambda$3$Type.prototype.call_8, NotificationView$lambda$3$Type, []);\n  $wnd.Push.create('Gwt Material Design', options);\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/3', 1676);\nfunction NotificationView_BinderImpl$Widgets$4(){\n}\n\ndefineClass(1677, 1, $intern_67, NotificationView_BinderImpl$Widgets$4);\n_.onClick_0 = function onClick_247(event_0){\n  var options;\n  options = new $wnd.Object;\n  options.body = 'I love GWT Material';\n  options.icon = 'https://i.imgur.com/VaBxpGj.png';\n  options.link = 'https://gwtmaterialdesign.github.io/gwt-material-demo';\n  options.timeout = $intern_70;\n  options.requireInteraction = true;\n  $wnd.Push.create('Gwt Material Design', options);\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/4', 1677);\nfunction NotificationView_BinderImpl$Widgets$5(){\n}\n\ndefineClass(1678, 1, $intern_67, NotificationView_BinderImpl$Widgets$5);\n_.onClick_0 = function onClick_248(event_0){\n  fireToast($wnd.Push.count() + ' notification(s) opened');\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_notification_NotificationView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.notification', 'NotificationView_BinderImpl/Widgets/5', 1678);\nfunction $get_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$_annotation$$none$$) {\n    result0 = new NotificationPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationView$_annotation$$none$$) {\n    result = new NotificationView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationView$_annotation$$none$$;\n}\n\ndefineClass(811, 1, $intern_109);\n_.onSuccess_0 = function onSuccess_42(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$pwa$notification$NotificationPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(41);\n\n//# sourceURL=gwtmaterialdemo-41.js\n")
