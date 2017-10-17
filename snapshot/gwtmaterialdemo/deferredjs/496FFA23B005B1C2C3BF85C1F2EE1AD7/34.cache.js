$wnd.gwtmaterialdemo.runAsyncCallback34("function CustomDataTablePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(856, 61, $intern_53, CustomDataTablePresenter);\n_.onReveal = function onReveal_55(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Custom Data Table', 'Using the DataTable scaffoding features, you can now easily design your datatable look and feel.', 'datatable/custom/CustomDataTableView', 'https://material.io/guidelines/components/data-tables.html'));\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTablePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTablePresenter', 856);\nfunction $lambda$2_24(this$static){\n  $clinit_GWT();\n  this$static.table.view.refresh();\n}\n\nfunction CustomDataTableView(){\n  var i, k, people, rowIndex;\n  NavigatedView.call(this);\n  $initWidget_0(this, $build_f_MaterialRow1_2(new CustomDataTableView_BinderImpl$Widgets(this)));\n  $setText_6(this.table.tableTitle, 'My Custom Table');\n  $setRowFactory_0(this.table, new PersonRowFactory);\n  $setCategoryFactory_0(this.table, new CustomCategoryFactory);\n  $setRenderer_0(this.table, new CustomRenderer);\n  $addColumn_3(this.table, new CustomDataTableView$1);\n  $addColumn_4(this.table, new CustomDataTableView$2, 'First Name');\n  $addColumn_4(this.table, new CustomDataTableView$3, 'Last Name');\n  $addColumn_4(this.table, new CustomDataTableView$4, 'Email');\n  $addColumn_4(this.table, new CustomDataTableView$5, 'Phone');\n  $addColumn_3(this.table, new CustomDataTableView$6);\n  $addColumn_3(this.table, new CustomDataTableView$7);\n  $setVisibleRange_0(this.table, 0, 2001);\n  rowIndex = 0;\n  people = new ArrayList;\n  for (k = 1; k <= 5; k++) {\n    for (i = 1; i <= 5; ++i , rowIndex++) {\n      $add_19(people, new Person(i, 'Field ' + rowIndex, 'Field ' + i, 'Field ' + rowIndex, 'No ' + i, 'Category ' + k));\n    }\n  }\n  $setRowData_0(this.table, people);\n  $addHandler(this.table, new CustomDataTableView$lambda$0$Type, ($clinit_RowExpandingEvent() , TYPE_70));\n  $addHandler(this.table, new CustomDataTableView$lambda$1$Type, ($clinit_RowSelectEvent() , TYPE_72));\n  $addHandler(this.table, new CustomDataTableView$lambda$2$Type(this), ($clinit_ColumnSortEvent() , TYPE_58));\n  $addHandler(this.table, new CustomDataTableView$lambda$3$Type, ($clinit_CategoryOpenedEvent() , TYPE_57));\n  $addHandler(this.table, new CustomDataTableView$lambda$4$Type, ($clinit_CategoryClosedEvent() , TYPE_56));\n  $addHandler(this.table, new CustomDataTableView$lambda$5$Type, ($clinit_RowDoubleClickEvent() , TYPE_68));\n  this.table.view.longPressDuration = 400;\n  $addHandler(this.table, new CustomDataTableView$lambda$6$Type, ($clinit_RowLongPressEvent() , TYPE_71));\n  $addHandler(this.table, new CustomDataTableView$lambda$7$Type, ($clinit_RowShortPressEvent() , TYPE_73));\n}\n\ndefineClass(1200, 304, $intern_54, CustomDataTableView);\n_.onAttach = function onAttach_8(){\n  var panel;\n  panel = this.table.scaffolding.toolPanel;\n  $clear_0(panel);\n  $add_9(panel, new MaterialIcon_0(($clinit_IconType() , FAVORITE)));\n  $add_9(panel, new MaterialIcon_0(DELETE));\n  $add_9(panel, new MaterialIcon_0(MESSAGE));\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView', 1200);\nfunction $getValue_7(object){\n  var profile;\n  profile = new MaterialImage;\n  $setValue_18(profile, object.picture, true);\n  ($clinit_DOM() , profile.element_0).style['width'] = '40px';\n  profile.element_0.style['height'] = '40px';\n  profile.element_0.style['padding'] = ($clinit_Style$Unit() , '4.0px');\n  profile.element_0.style['marginTop'] = '8.0px';\n  $setBackgroundColor(profile, ($clinit_Color() , GREY_LIGHTEN_2));\n  $setOn((!profile.circleMixin && (profile.circleMixin = new ToggleStyleMixin(profile, 'circle')) , profile.circleMixin), true);\n  return profile;\n}\n\nfunction CustomDataTableView$1(){\n  WidgetColumn.call(this);\n}\n\ndefineClass(1201, 134, $intern_127, CustomDataTableView$1);\n_.getValue_0 = function getValue_31(object){\n  return $getValue_7(castTo(object, 56));\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/1', 1201);\nfunction CustomDataTableView$2(){\n  TextColumn.call(this);\n}\n\ndefineClass(1202, 142, $intern_126, CustomDataTableView$2);\n_.getValue_0 = function getValue_32(object){\n  return castTo(object, 56).firstName;\n}\n;\n_.sortComparator_0 = function sortComparator_5(){\n  return new CustomDataTableView$2$lambda$0$Type;\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/2', 1202);\nfunction CustomDataTableView$2$lambda$0$Type(){\n}\n\ndefineClass(1203, 1, {}, CustomDataTableView$2$lambda$0$Type);\n_.equals_0 = function equals_21(other){\n  return this === other;\n}\n;\n_.compare = function compare_8(arg0, arg1){\n  return $compareToIgnoreCase(castTo(castTo(arg0, 70).data_0, 56).firstName, castTo(castTo(arg1, 70).data_0, 56).firstName);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$2$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/2/lambda$0$Type', 1203);\nfunction CustomDataTableView$3(){\n  TextColumn.call(this);\n}\n\ndefineClass(1204, 142, $intern_126, CustomDataTableView$3);\n_.getValue_0 = function getValue_33(object){\n  return castTo(object, 56).lastName;\n}\n;\n_.sortComparator_0 = function sortComparator_6(){\n  return new CustomDataTableView$3$lambda$0$Type;\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/3', 1204);\nfunction CustomDataTableView$3$lambda$0$Type(){\n}\n\ndefineClass(1205, 1, {}, CustomDataTableView$3$lambda$0$Type);\n_.equals_0 = function equals_22(other){\n  return this === other;\n}\n;\n_.compare = function compare_9(arg0, arg1){\n  return $compareToIgnoreCase(castTo(castTo(arg0, 70).data_0, 56).lastName, castTo(castTo(arg1, 70).data_0, 56).lastName);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$3$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/3/lambda$0$Type', 1205);\nfunction CustomDataTableView$4(){\n  TextColumn.call(this);\n}\n\ndefineClass(1206, 142, $intern_126, CustomDataTableView$4);\n_.getValue_0 = function getValue_34(object){\n  return castTo(object, 56).email;\n}\n;\n_.sortComparator_0 = function sortComparator_7(){\n  return new CustomDataTableView$4$lambda$0$Type;\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$4_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/4', 1206);\nfunction CustomDataTableView$4$lambda$0$Type(){\n}\n\ndefineClass(1207, 1, {}, CustomDataTableView$4$lambda$0$Type);\n_.equals_0 = function equals_23(other){\n  return this === other;\n}\n;\n_.compare = function compare_10(arg0, arg1){\n  return $compareToIgnoreCase(castTo(castTo(arg0, 70).data_0, 56).email, castTo(castTo(arg1, 70).data_0, 56).email);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$4$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/4/lambda$0$Type', 1207);\nfunction CustomDataTableView$5(){\n  TextColumn.call(this);\n}\n\ndefineClass(1208, 142, $intern_126, CustomDataTableView$5);\n_.getValue_0 = function getValue_35(object){\n  return castTo(object, 56).phone;\n}\n;\n_.hideOn_0 = function hideOn_2(){\n  return $clinit_HideOn() , HIDE_ON_MED_DOWN;\n}\n;\n_.numeric = function numeric_2(){\n  return true;\n}\n;\n_.sortComparator_0 = function sortComparator_8(){\n  return new CustomDataTableView$5$lambda$0$Type;\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$5_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/5', 1208);\nfunction CustomDataTableView$5$lambda$0$Type(){\n}\n\ndefineClass(1209, 1, {}, CustomDataTableView$5$lambda$0$Type);\n_.equals_0 = function equals_24(other){\n  return this === other;\n}\n;\n_.compare = function compare_11(arg0, arg1){\n  return $compareToIgnoreCase(castTo(castTo(arg0, 70).data_0, 56).phone, castTo(castTo(arg1, 70).data_0, 56).phone);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$5$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/5/lambda$0$Type', 1209);\nfunction CustomDataTableView$6(){\n  WidgetColumn.call(this);\n}\n\ndefineClass(1210, 134, $intern_127, CustomDataTableView$6);\n_.getValue_0 = function getValue_36(object){\n  var comboBox;\n  return castTo(object, 56) , comboBox = new MaterialComboBox , $addItem_2(comboBox, 'State 1', 'State 1') , $addItem_2(comboBox, 'State 2', 'State 2') , $addItem_2(comboBox, 'State 3', 'State 3') , $addItem_2(comboBox, 'State 4', 'State 4') , $addItem_2(comboBox, 'State 5', 'State 5') , comboBox;\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$6_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/6', 1210);\nfunction $getValue_8(object){\n  var badge;\n  badge = new MaterialBadge;\n  $setText_7(badge, 'badge ' + object.id_0);\n  $setBackgroundColor(badge, ($clinit_Color() , BLUE));\n  $setLayoutPosition(badge, ($clinit_Style$Position() , RELATIVE));\n  return badge;\n}\n\nfunction CustomDataTableView$7(){\n  WidgetColumn.call(this);\n}\n\ndefineClass(1211, 134, $intern_127, CustomDataTableView$7);\n_.getValue_0 = function getValue_37(object){\n  return $getValue_8(castTo(object, 56));\n}\n;\n_.textAlign_0 = function textAlign_2(){\n  return $clinit_TextAlign() , CENTER_4;\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$7_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/7', 1211);\nfunction CustomDataTableView$8(val$event, val$section){\n  this.val$event2 = val$event;\n  this.val$section3 = val$section;\n  Timer.call(this);\n}\n\ndefineClass(1212, 137, {}, CustomDataTableView$8);\n_.run = function run_11(){\n  var badge, btn, content_0, element, icon, textBox;\n  element = this.val$event2.expansion.row.find('.content').empty();\n  content_0 = new MaterialWidget_2(element);\n  badge = new MaterialBadge_0(($clinit_Color() , WHITE), BLUE);\n  ($clinit_DOM() , badge.element_0).style['position'] = ($clinit_Style$Position() , 'relative');\n  badge.element_0.style['right'] = ($clinit_Style$Unit() , '0.0px');\n  $setFontSize(badge, 12, PX);\n  $add_1(content_0, badge, content_0.element_0);\n  btn = new MaterialButton_1(($clinit_ButtonType() , RAISED), new MaterialIcon_0(($clinit_IconType() , FULLSCREEN_0)));\n  $add_1(content_0, btn, content_0.element_0);\n  textBox = new MaterialTextBox;\n  $setText_1(textBox.valueBoxBase, ' from an asynchronous');\n  ' from an asynchronous'.length != 0 && $addStyleName(textBox.label_1, 'active');\n  $setGwtDisplay(textBox, ($clinit_Style$Display() , INLINE_TABLE));\n  textBox.element_0.style['width'] = '200px';\n  $add_1(content_0, textBox, content_0.element_0);\n  icon = new MaterialIcon_0(CALL);\n  icon.element_0.style['position'] = 'relative';\n  icon.element_0.style['top'] = '12.0px';\n  $add_1(content_0, icon, content_0.element_0);\n  this.val$section3.css('display', 'none');\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$8_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/8', 1212);\nfunction CustomDataTableView$lambda$0$Type(){\n}\n\ndefineClass(1213, 1, $intern_128, CustomDataTableView$lambda$0$Type);\n_.onRowExpanding = function onRowExpanding_0(arg0){\n  var section;\n  section = arg0.expansion.overlay;\n  $schedule(new CustomDataTableView$8(arg0, section), $intern_9);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/lambda$0$Type', 1213);\nfunction CustomDataTableView$lambda$1$Type(){\n}\n\ndefineClass(1214, 1, $intern_129, CustomDataTableView$lambda$1$Type);\n_.onRowSelect = function onRowSelect_1(arg0){\n  $clinit_GWT();\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$lambda$1$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/lambda$1$Type', 1214);\nfunction CustomDataTableView$lambda$2$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1215, 1, $intern_130, CustomDataTableView$lambda$2$Type);\n_.onColumnSort = function onColumnSort_0(arg0){\n  $lambda$2_24(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$lambda$2$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/lambda$2$Type', 1215);\nfunction CustomDataTableView$lambda$3$Type(){\n}\n\ndefineClass(1216, 1, $intern_131, CustomDataTableView$lambda$3$Type);\n_.onCategoryOpened = function onCategoryOpened_1(arg0){\n  $clinit_GWT();\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$lambda$3$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/lambda$3$Type', 1216);\nfunction CustomDataTableView$lambda$4$Type(){\n}\n\ndefineClass(1217, 1, $intern_132, CustomDataTableView$lambda$4$Type);\n_.onCategoryClosed = function onCategoryClosed_1(arg0){\n  $clinit_GWT();\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$lambda$4$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/lambda$4$Type', 1217);\nfunction CustomDataTableView$lambda$5$Type(){\n}\n\ndefineClass(1218, 1, $intern_133, CustomDataTableView$lambda$5$Type);\n_.onRowDoubleClick = function onRowDoubleClick_0(arg0){\n  alert_0('Row Double Clicked: ' + castTo(arg0.model, 56).id_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$lambda$5$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/lambda$5$Type', 1218);\nfunction CustomDataTableView$lambda$6$Type(){\n}\n\ndefineClass(1219, 1, $intern_134, CustomDataTableView$lambda$6$Type);\n_.onRowLongPress = function onRowLongPress_0(arg0){\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$lambda$6$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/lambda$6$Type', 1219);\nfunction CustomDataTableView$lambda$7$Type(){\n}\n\ndefineClass(1220, 1, $intern_135, CustomDataTableView$lambda$7$Type);\n_.onRowShortPress = function onRowShortPress_0(arg0){\n}\n;\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView$lambda$7$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView/lambda$7$Type', 1220);\nfunction $build_f_MaterialRow1_2(this$static){\n  var f_MaterialRow1, f_MaterialColumn2, f_MaterialRow3, f_MaterialTitle4, table, f_PrettyPre5, sb, f_PrettyPre6, sb_0, f_PrettyPre7, sb_1, f_PrettyPre8, sb_2, f_PrettyPre9, sb_3, f_PrettyPre10, sb_4;\n  f_MaterialRow1 = new MaterialRow;\n  $add_9(f_MaterialRow1, (f_MaterialColumn2 = new MaterialColumn , $add_9(f_MaterialColumn2, (f_MaterialRow3 = new MaterialRow , $add_9(f_MaterialRow3, (f_MaterialTitle4 = new MaterialTitle , $setScrollspy((!f_MaterialTitle4.scrollspyMixin && (f_MaterialTitle4.scrollspyMixin = new ScrollspyMixin(f_MaterialTitle4)) , f_MaterialTitle4.scrollspyMixin), 'custom_table') , $setText_12(f_MaterialTitle4.paragraph, \"You can adjust table's header, rows, columns etc. easily by altering some css and pre built in scaffolding.\") , $setInnerHTML($getElement(f_MaterialTitle4.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Customize your data table'))).html_0)) , fire_5(f_MaterialTitle4, 'Customize your data table') , f_MaterialTitle4)) , $add_9(f_MaterialRow3, (table = new MaterialDataTable , $setUseCategories(table.view, false) , $setSelectionType_1(table, ($clinit_SelectionType() , SINGLE)) , $setShadow_0((!table.shadowMixin && (table.shadowMixin = new ShadowMixin(table)) , table.shadowMixin), 1) , $setUseStickyHeader(table.view, true) , $setId_1((!table.idMixin && (table.idMixin = new IdMixin(table)) , table.idMixin), 'customTable') , table.view.useRowExpansion = true , $setHeight_0(table.view, 'calc(100vh - 400px)') , this$static.owner.table = table , table)) , $add_9(f_MaterialRow3, (f_PrettyPre5 = new PrettyPre , $setHTML_0(f_PrettyPre5, (sb = new StringBuilder , sb.string += '\\u2003// Setting table title <br> table.getTableTitle().setText(\"My Custom Table\");<br><br> //Adding / removing table toolpanel action buttons / icons<br> Panel panel = table.getScaffolding().getToolPanel();<br> panel.clear();<br> // Add two buttons<br> panel.add(new MaterialIcon(IconType.FAVORITE));<br> panel.add(new MaterialIcon(IconType.DELETE));<br> panel.add(new MaterialIcon(IconType.MESSAGE));' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(($clinit_DOM() , f_PrettyPre5.element_0), 'lang-java', true) , f_PrettyPre5)) , $add_9(f_MaterialRow3, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb_0 = new StringBuilder , sb_0.string += '\\u2003/** Top Panel **/ <br> #customTable .top-panel { <br> \\u2003background-color: white; <br> \\u2003color: black; <br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'lang-css', true) , f_PrettyPre6)) , $add_9(f_MaterialRow3, (f_PrettyPre7 = new PrettyPre , $setHTML_0(f_PrettyPre7, (sb_1 = new StringBuilder , sb_1.string += '\\u2003/** Tool Panel icons **/ <br> #customTable .top-panel .tool-panel i { <br> \\u2003color: #e91e63; <br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre7.element_0, 'lang-css', true) , f_PrettyPre7)) , $add_9(f_MaterialRow3, (f_PrettyPre8 = new PrettyPre , $setHTML_0(f_PrettyPre8, (sb_2 = new StringBuilder , sb_2.string += '\\u2003/** Hovering rows **/ <br> #customTable table tbody tr.data-row:hover { <br> \\u2003background: rgba(33, 150, 243, 0.27); <br> \\u2003color: #3f3f3f; <br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre8.element_0, 'lang-css', true) , f_PrettyPre8)) , $add_9(f_MaterialRow3, (f_PrettyPre9 = new PrettyPre , $setHTML_0(f_PrettyPre9, (sb_3 = new StringBuilder , sb_3.string += '\\u2003/** Columns **/ <br> #customTable table tbody td:nth-child(3) { <br> \\u2003background: #2196f3 !important; <br> \\u2003color: #fff; <br> \\u2003border-bottom: 2px solid #1976d2; <br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre9.element_0, 'lang-css', true) , f_PrettyPre9)) , $add_9(f_MaterialRow3, (f_PrettyPre10 = new PrettyPre , $setHTML_0(f_PrettyPre10, (sb_4 = new StringBuilder , sb_4.string += '\\u2003/** Table Headers **/ <br> #customTable table thead tr th { <br>  \\u2003color: #1976d2; <br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre10.element_0, 'lang-css', true) , f_PrettyPre10)) , setStyleName(f_MaterialRow3.element_0, 'code', true) , f_MaterialRow3)) , $setGrid((!f_MaterialColumn2.gridMixin && (f_MaterialColumn2.gridMixin = new GridMixin(f_MaterialColumn2)) , f_MaterialColumn2.gridMixin), 's12') , f_MaterialColumn2));\n  return f_MaterialRow1;\n}\n\nfunction CustomDataTableView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n}\n\ndefineClass(1702, 1, {}, CustomDataTableView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_datatable_custom_CustomDataTableView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.datatable.custom', 'CustomDataTableView_BinderImpl/Widgets', 1702);\nfunction $get_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTablePresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTablePresenter$_annotation$$none$$) {\n    result0 = new CustomDataTablePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTableView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTablePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTablePresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTablePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTableView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTableView$_annotation$$none$$) {\n    result = new CustomDataTableView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTableView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTableView$_annotation$$none$$;\n}\n\ndefineClass(767, 1, $intern_101);\n_.onSuccess_0 = function onSuccess_35(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$datatable$custom$CustomDataTablePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(34);\n\n//# sourceURL=gwtmaterialdemo-34.js\n")
