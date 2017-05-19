$wnd.gwtmaterialdemo.runAsyncCallback35("function PushPinPresenter(eventBus, view, proxy){\n  $clinit_PushPinPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(914, 57, $intern_56, PushPinPresenter);\n_.onReveal = function onReveal_55(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Push Pin', 'Pushpin is our fixed positioning plugin. You can check out our live examples: the fixed Table of Contents on the right.', 'components/pushpin/PushPinView', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pushpin_PushPinPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pushpin', 'PushPinPresenter', 914);\nfunction PushPinView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_31(new PushPinView_BinderImpl$Widgets(this)));\n  register(this.source);\n  apply_2(this.source, 300, null, 64);\n}\n\ndefineClass(1286, 60, $intern_57, PushPinView);\nvar Lgwt_material_design_demo_client_application_components_pushpin_PushPinView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pushpin', 'PushPinView', 1286);\nfunction $build_f_HTMLPanel1_31(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialTitle3, f_MaterialRow4, source, f_PrettyPre6, sb, f_MaterialLabel5;\n  f_HTMLPanel1 = new HTMLPanel($html2_2(this$static.domId0).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_13(f_MaterialTitle3.paragraph, 'A pushpinned element has 3 states. One above (TOP) and below (BELOW) the scrolling threshold, and the pinned state where the element becomes fixed (OFFSET).') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Basic'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (f_MaterialRow4 = new MaterialRow , $add_14(f_MaterialRow4, (source = new MaterialPanel , $add_14(source, (f_MaterialLabel5 = new MaterialLabel , $setText_8(f_MaterialLabel5.textMixin, \"Pinned Options top at 300, offset at 64 (navbar's height)\") , $setTextColor(f_MaterialLabel5, ($clinit_Color() , WHITE)) , f_MaterialLabel5)) , $setBackgroundColor(source, BLUE) , $setShadow_0((!source.shadowMixin && (source.shadowMixin = new ShadowMixin(source)) , source.shadowMixin), 1) , $setGrid_0((!source.gridMixin && (source.gridMixin = new GridMixin(source)) , source.gridMixin), 's12 m12 l12') , source.element_0.style['width'] = '200px' , source.element_0.style['paddingTop'] = ($clinit_Style$Unit() , '50.0px') , source.element_0.style['height'] = '200px' , this$static.owner.source = source , source)) , f_MaterialRow4)) , $add_14(f_MaterialRow2, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb = new StringBuilder , sb.string += 'MaterialPushpin.apply(source, 300.0, 64.0);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'language-java', true) , f_PrettyPre6)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2.element_0.style['height'] = '1000px' , undefined , f_MaterialRow2), $get_0(this$static.domId0Element));\n  return f_HTMLPanel1;\n}\n\nfunction PushPinView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n}\n\ndefineClass(1725, 1, {}, PushPinView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_pushpin_PushPinView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pushpin', 'PushPinView_BinderImpl/Widgets', 1725);\nfunction $html2_2(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$_annotation$$none$$) {\n    result0 = new PushPinPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinView$_annotation$$none$$) {\n    result = new PushPinView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinView$_annotation$$none$$;\n}\n\ndefineClass(817, 1, $intern_110);\n_.onSuccess_0 = function onSuccess_36(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$pushpin$PushPinPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(35);\n\n//# sourceURL=gwtmaterialdemo-35.js\n")
