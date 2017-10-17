$wnd.gwtmaterialdemo.runAsyncCallback44("function IconsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(867, 61, $intern_54, IconsPresenter);\n_.onReveal = function onReveal_66(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Icons', 'We have included 740 Material Design Icons courtesy of Google. You can download them directly from the Material Design specs.', '', 'https://material.io/icons/'));\n}\n;\nvar Lgwt_material_design_demo_client_application_style_icons_IconsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsPresenter', 867);\nfunction IconsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_20(new IconsView_BinderImpl$Widgets));\n}\n\ndefineClass(1284, 67, $intern_55, IconsView);\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView', 1284);\nfunction $build_f_MaterialPanel1_20(this$static){\n  var f_MaterialPanel1, f_HTMLPanel2, __attachRecord__, f_MaterialRow3, f_MaterialRow7, f_MaterialRow23, f_MaterialRow27, f_MaterialTitle4, f_MaterialIcon5, f_PrettyPre6, sb, f_MaterialTitle8, f_MaterialRow9, f_MaterialColumn10, f_MaterialIcon11, f_MaterialLabel12, f_MaterialColumn13, f_MaterialIcon14, f_MaterialLabel15, f_MaterialColumn16, f_MaterialIcon17, f_MaterialLabel18, f_MaterialColumn19, f_MaterialIcon20, f_MaterialLabel21, f_PrettyPre22, sb_0, f_MaterialTitle24, f_MaterialLink25, f_PrettyPre26, sb_1, f_MaterialTitle28, f_Frame29, style;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_9(f_MaterialPanel1, (f_HTMLPanel2 = new HTMLPanel($html4_10(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3).html_0) , __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel2.element_0)) , $get_0(this$static.domId0Element) , $get_0(this$static.domId1Element) , $get_0(this$static.domId2Element) , $get_0(this$static.domId3Element) , __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element) , $addAndReplaceElement(f_HTMLPanel2, (f_MaterialRow3 = new MaterialRow , $add_9(f_MaterialRow3, (f_MaterialTitle4 = new MaterialTitle , $setText_12(f_MaterialTitle4.paragraph, 'Using MaterialIcon Widget you can easily make it by adding the lines below. Just set the icon attribute and indicate which icon you want to display. Please refer below about the list of icon.') , $setInnerHTML($getElement(f_MaterialTitle4.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Usage'))).html_0)) , fire_5(f_MaterialTitle4, 'Usage') , f_MaterialTitle4)) , $add_9(f_MaterialRow3, (f_MaterialIcon5 = new MaterialIcon , $setIconType_4(f_MaterialIcon5, ($clinit_IconType() , ROTATION_3D)) , f_MaterialIcon5)) , $add_9(f_MaterialRow3, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb = new StringBuilder , sb.string += '&lt;m:MaterialIcon iconType=\"ROTATION_3D\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'lang-xml', true) , f_PrettyPre6)) , setStyleName(f_MaterialRow3.element_0, 'code', true) , f_MaterialRow3), $get_0(this$static.domId0Element)) , $addAndReplaceElement(f_HTMLPanel2, (f_MaterialRow7 = new MaterialRow , $add_9(f_MaterialRow7, (f_MaterialTitle8 = new MaterialTitle , $setText_12(f_MaterialTitle8.paragraph, 'To control the size of the icon, just set size attribute in your MaterialIcon widget.') , $setInnerHTML($getElement(f_MaterialTitle8.header), (new SafeHtmlString(htmlEscape('Sizes'))).html_0) , fire_5(f_MaterialTitle8, 'Sizes') , f_MaterialTitle8)) , $add_9(f_MaterialRow7, (f_MaterialRow9 = new MaterialRow , $add_9(f_MaterialRow9, (f_MaterialColumn10 = new MaterialColumn , $add_9(f_MaterialColumn10, (f_MaterialIcon11 = new MaterialIcon , $setIconType_4(f_MaterialIcon11, POLYMER) , $setIconSize_1(f_MaterialIcon11, ($clinit_IconSize() , TINY)) , f_MaterialIcon11)) , $add_9(f_MaterialColumn10, (f_MaterialLabel12 = new MaterialLabel , $setText_5((!f_MaterialLabel12.textMixin && (f_MaterialLabel12.textMixin = new TextMixin(f_MaterialLabel12)) , f_MaterialLabel12.textMixin), 'Tiny') , fire_5(f_MaterialLabel12, 'Tiny') , f_MaterialLabel12)) , setStyleName(f_MaterialColumn10.element_0, 'center-align', true) , $setGrid((!f_MaterialColumn10.gridMixin && (f_MaterialColumn10.gridMixin = new GridMixin(f_MaterialColumn10)) , f_MaterialColumn10.gridMixin), 's4 m2') , f_MaterialColumn10)) , $add_9(f_MaterialRow9, (f_MaterialColumn13 = new MaterialColumn , $add_9(f_MaterialColumn13, (f_MaterialIcon14 = new MaterialIcon , $setIconType_4(f_MaterialIcon14, POLYMER) , $setIconSize_1(f_MaterialIcon14, SMALL) , f_MaterialIcon14)) , $add_9(f_MaterialColumn13, (f_MaterialLabel15 = new MaterialLabel , $setText_5((!f_MaterialLabel15.textMixin && (f_MaterialLabel15.textMixin = new TextMixin(f_MaterialLabel15)) , f_MaterialLabel15.textMixin), 'Small') , fire_5(f_MaterialLabel15, 'Small') , f_MaterialLabel15)) , setStyleName(f_MaterialColumn13.element_0, 'center-align', true) , $setGrid((!f_MaterialColumn13.gridMixin && (f_MaterialColumn13.gridMixin = new GridMixin(f_MaterialColumn13)) , f_MaterialColumn13.gridMixin), 's4 m2') , f_MaterialColumn13)) , $add_9(f_MaterialRow9, (f_MaterialColumn16 = new MaterialColumn , $add_9(f_MaterialColumn16, (f_MaterialIcon17 = new MaterialIcon , $setIconType_4(f_MaterialIcon17, POLYMER) , $setIconSize_1(f_MaterialIcon17, MEDIUM_0) , f_MaterialIcon17)) , $add_9(f_MaterialColumn16, (f_MaterialLabel18 = new MaterialLabel , $setText_5((!f_MaterialLabel18.textMixin && (f_MaterialLabel18.textMixin = new TextMixin(f_MaterialLabel18)) , f_MaterialLabel18.textMixin), 'Medium') , fire_5(f_MaterialLabel18, 'Medium') , f_MaterialLabel18)) , setStyleName(f_MaterialColumn16.element_0, 'center-align', true) , $setGrid((!f_MaterialColumn16.gridMixin && (f_MaterialColumn16.gridMixin = new GridMixin(f_MaterialColumn16)) , f_MaterialColumn16.gridMixin), 's4 m2') , f_MaterialColumn16)) , $add_9(f_MaterialRow9, (f_MaterialColumn19 = new MaterialColumn , $add_9(f_MaterialColumn19, (f_MaterialIcon20 = new MaterialIcon , $setIconType_4(f_MaterialIcon20, POLYMER) , $setIconSize_1(f_MaterialIcon20, LARGE_0) , f_MaterialIcon20)) , $add_9(f_MaterialColumn19, (f_MaterialLabel21 = new MaterialLabel , $setText_5((!f_MaterialLabel21.textMixin && (f_MaterialLabel21.textMixin = new TextMixin(f_MaterialLabel21)) , f_MaterialLabel21.textMixin), 'Large') , fire_5(f_MaterialLabel21, 'Large') , f_MaterialLabel21)) , setStyleName(f_MaterialColumn19.element_0, 'center-align', true) , $setGrid((!f_MaterialColumn19.gridMixin && (f_MaterialColumn19.gridMixin = new GridMixin(f_MaterialColumn19)) , f_MaterialColumn19.gridMixin), 's4 m2') , f_MaterialColumn19)) , setStyleName(f_MaterialRow9.element_0, 'valign-wrapper', true) , f_MaterialRow9)) , $add_9(f_MaterialRow7, (f_PrettyPre22 = new PrettyPre , $setHTML_0(f_PrettyPre22, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"TINY\" /&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"SMALL\" /&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"MEDIUM\" /&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" iconSize=\"LARGE\" /&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre22.element_0, 'lang-xml', true) , f_PrettyPre22)) , setStyleName(f_MaterialRow7.element_0, 'code', true) , f_MaterialRow7), $get_0(this$static.domId1Element)) , $addAndReplaceElement(f_HTMLPanel2, (f_MaterialRow23 = new MaterialRow , $add_9(f_MaterialRow23, (f_MaterialTitle24 = new MaterialTitle , $setText_12(f_MaterialTitle24.paragraph, 'You can add in your material link an icon instance by adding icon attribute') , $setInnerHTML($getElement(f_MaterialTitle24.header), (new SafeHtmlString(htmlEscape('Icon inside MaterialLink'))).html_0) , fire_5(f_MaterialTitle24, 'Icon inside MaterialLink') , f_MaterialTitle24)) , $add_9(f_MaterialRow23, (f_MaterialLink25 = new MaterialLink , $setIconType_0(f_MaterialLink25, FAVORITE) , $setIconPosition(f_MaterialLink25, ($clinit_IconPosition() , LEFT_6)) , $setFontSize_1((!f_MaterialLink25.fontSizeMixin && (f_MaterialLink25.fontSizeMixin = new FontSizeMixin(f_MaterialLink25)) , f_MaterialLink25.fontSizeMixin), '2em') , $setText_6(f_MaterialLink25.span_1, 'I love Material Design') , f_MaterialLink25.span_1.attached || $add_9(f_MaterialLink25, f_MaterialLink25.span_1) , $setTextColor(f_MaterialLink25, ($clinit_Color() , RED)) , f_MaterialLink25)) , $add_9(f_MaterialRow23, (f_PrettyPre26 = new PrettyPre , $setHTML_0(f_PrettyPre26, (sb_1 = new StringBuilder , sb_1.string += '&lt;m:MaterialLink fontSize=\"2em\" text=\"I love Material Design\" textColor=\"red\" iconType=\"FAVORITE\" iconPosition=\"LEFT\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre26.element_0, 'lang-xml', true) , f_PrettyPre26)) , setStyleName(f_MaterialRow23.element_0, 'code', true) , f_MaterialRow23), $get_0(this$static.domId2Element)) , $addAndReplaceElement(f_HTMLPanel2, (f_MaterialRow27 = new MaterialRow , $add_9(f_MaterialRow27, (f_MaterialTitle28 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle28.header), (new SafeHtmlString(htmlEscape('Get Icons from Google Material Design'))).html_0) , fire_5(f_MaterialTitle28, 'Get Icons from Google Material Design') , f_MaterialTitle28)) , $add_9(f_MaterialRow27, (f_Frame29 = new Frame_0 , $addStyleName(f_Frame29, (style = ($clinit_IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_26) , $ensureInjected_25(style) , 'CWDTSS-w-a')) , f_Frame29.element_0.style['width'] = '100%' , f_Frame29.element_0.src = 'https://www.google.com/design/icons/#ic_3d_rotation' , f_Frame29.element_0.style['height'] = '700px' , f_Frame29)) , setStyleName(f_MaterialRow27.element_0, 'code', true) , f_MaterialRow27), $get_0(this$static.domId3Element)) , f_HTMLPanel2));\n  return f_MaterialPanel1;\n}\n\nfunction IconsView_BinderImpl$Widgets(){\n  var style;\n  style = ($clinit_IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_26);\n  $ensureInjected_25(style);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n}\n\ndefineClass(1728, 1, {}, IconsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView_BinderImpl/Widgets', 1728);\nvar style_26;\nfunction $ensureInjected_25(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push(toInject, '.CWDTSS-w-a{border:1px solid #e9e9e9}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2143, 1, {}, IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_141(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_icons_IconsView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.icons', 'IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 2143);\nfunction $clinit_IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_26 = new IconsView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html4_10(arg0, arg1, arg2, arg3){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$) {\n    result0 = new IconsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$) {\n    result = new IconsView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$icons$IconsView$_annotation$$none$$;\n}\n\ndefineClass(788, 1, $intern_102);\n_.onSuccess_0 = function onSuccess_45(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$icons$IconsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(44);\n\n//# sourceURL=gwtmaterialdemo-44.js\n")
