$wnd.gwtmaterialdemo.runAsyncCallback14("function $clinit_DateTimeFormat_0(){\n  $clinit_DateTimeFormat_0 = emptyMethod;\n  $clinit_DateTimeFormat();\n  cache_1 = new HashMap;\n}\n\nfunction DateTimeFormat_0(){\n  DateTimeFormat.call(this, 'hh:mm a');\n}\n\nfunction getFormat_0(dtfi){\n  $clinit_DateTimeFormat_0();\n  var defaultDtfi, dtf;\n  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));\n  dtf = null;\n  dtfi == defaultDtfi && (dtf = castTo($getStringValue(cache_1, 'hh:mm a'), 401));\n  if (!dtf) {\n    dtf = new DateTimeFormat_0;\n    dtfi == defaultDtfi && $putStringValue(cache_1, 'hh:mm a', dtf);\n  }\n  return dtf;\n}\n\ndefineClass(401, 311, {401:1, 311:1}, DateTimeFormat_0);\nvar cache_1;\nvar Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'DateTimeFormat', 401);\nfunction $open_2(this$static){\n  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new MaterialTimePicker$lambda$1$Type(this$static));\n}\n\nfunction MaterialTimePicker$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1823, 1, {}, MaterialTimePicker$lambda$1$Type);\n_.execute_1 = function execute_22(){\n  $wnd.$($getElement(this.$$outer_0.timeInput)).lolliclock('show');\n}\n;\nvar Lgwt_material_design_addins_client_timepicker_MaterialTimePicker$lambda$1$Type_2_classLit = createForClass('gwt.material.design.addins.client.timepicker', 'MaterialTimePicker/lambda$1$Type', 1823);\nfunction TimePickersPresenter(eventBus, view, proxy){\n  $clinit_TimePickersPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(824, 61, $intern_53, TimePickersPresenter);\n_.onReveal = function onReveal_24(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Time Pickers', 'A dialog picker is used to select a single time (hours:minutes) on mobile.\\n\\nThe selected time is indicated by the filled circle at the end of the clock hand.', 'addins/timepickers/TimePickersView', 'https://material.io/guidelines/components/pickers.html#pickers-time-pickers'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersPresenter', 824);\nfunction TimePickersView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_6(new TimePickersView_BinderImpl$Widgets(this)));\n  $addHandler(this.tpEvents, new TimePickersView$lambda$0$Type, (!TYPE_15 && (TYPE_15 = new GwtEvent$Type) , TYPE_15));\n  $addHandler(this.tpEvents, new TimePickersView$lambda$1$Type, TYPE_14?TYPE_14:(TYPE_14 = new GwtEvent$Type));\n  $addHandler(this.tpEvents, new TimePickersView$lambda$2$Type, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18));\n  $addHandler(this.tpOpenClose, new TimePickersView$lambda$3$Type, (!TYPE_15 && (TYPE_15 = new GwtEvent$Type) , TYPE_15));\n  $addHandler(this.tpOpenClose, new TimePickersView$lambda$4$Type, TYPE_14?TYPE_14:(TYPE_14 = new GwtEvent$Type));\n  $addHandler(this.tpOpenClose, new TimePickersView$lambda$5$Type, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18));\n}\n\ndefineClass(1105, 67, $intern_54, TimePickersView);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView', 1105);\nfunction TimePickersView$lambda$0$Type(){\n}\n\ndefineClass(1106, 1, $intern_93, TimePickersView$lambda$0$Type);\n_.onOpen = function onOpen_5(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 22, 0, [])), 'Opened Time Picker', $intern_66, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/lambda$0$Type', 1106);\nfunction TimePickersView$lambda$1$Type(){\n}\n\ndefineClass(1107, 1, $intern_47, TimePickersView$lambda$1$Type);\n_.onClose = function onClose_5(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 22, 0, [])), 'Closed Time Picker', $intern_66, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$lambda$1$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/lambda$1$Type', 1107);\nfunction TimePickersView$lambda$2$Type(){\n}\n\ndefineClass(1108, 1, $intern_44, TimePickersView$lambda$2$Type);\n_.onValueChange = function onValueChange_21(arg0){\n  var dtf, time;\n  dtf = ($clinit_DateTimeFormat_0() , getFormat_0($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1))));\n  time = castTo(arg0.value_0, 100);\n  fireToast('MaterialTimePicker value changed to: ' + $format(dtf, time, null));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$lambda$2$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/lambda$2$Type', 1108);\nfunction TimePickersView$lambda$3$Type(){\n}\n\ndefineClass(1109, 1, $intern_93, TimePickersView$lambda$3$Type);\n_.onOpen = function onOpen_6(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 22, 0, [])), 'Opened Time Picker', $intern_66, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$lambda$3$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/lambda$3$Type', 1109);\nfunction TimePickersView$lambda$4$Type(){\n}\n\ndefineClass(1110, 1, $intern_47, TimePickersView$lambda$4$Type);\n_.onClose = function onClose_6(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 22, 0, [])), 'Closed Time Picker', $intern_66, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$lambda$4$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/lambda$4$Type', 1110);\nfunction TimePickersView$lambda$5$Type(){\n}\n\ndefineClass(1111, 1, $intern_44, TimePickersView$lambda$5$Type);\n_.onValueChange = function onValueChange_22(arg0){\n  var dtf, time;\n  dtf = ($clinit_DateTimeFormat_0() , getFormat_0($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1))));\n  time = castTo(arg0.value_0, 100);\n  fireToast('MaterialTimePicker value changed to: ' + $format(dtf, time, null));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$lambda$5$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/lambda$5$Type', 1111);\nfunction $build_f_MaterialPanel1_6(this$static){\n  var f_MaterialPanel1, f_MaterialRow2, f_MaterialRow8, f_MaterialRow11, f_MaterialRow15, f_MaterialRow18, f_MaterialRow21, f_MaterialRow25, f_MaterialRow28, f_MaterialRow32, f_MaterialTitle3, f_ExternalLibrary4, f_PrettyPre5, sb, f_MaterialTitle6, tp, f_PrettyPre7, sb_0, f_MaterialTitle9, f_timepicker$MaterialTimePicker10, f_MaterialTitle12, f_timepicker$MaterialTimePicker13, f_PrettyPre14, sb_1, f_MaterialTitle16, tpOpenClose, btnOpen, f_PrettyPre17, sb_2, f_MaterialTitle19, tpAutoClose, f_PrettyPre20, sb_3, f_MaterialTitle22, f_timepicker$MaterialTimePicker23, f_PrettyPre24, sb_4, f_MaterialTitle26, tpEvents, f_PrettyPre27, sb_5, f_MaterialBadge29, f_MaterialTitle30, tpValue, btnTpValue, btnTpValueEvent, f_PrettyPre31, sb_6, f_MaterialTitle33, tpClear, btnClear, btnGetValue, f_PrettyPre34, sb_7;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_9(f_MaterialPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Usage'))).html_0)) , fire_5(f_MaterialTitle3, 'Usage') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (f_ExternalLibrary4 = new ExternalLibrary , $setHref(f_ExternalLibrary4.externalLink, 'https://github.com/weareoutman/clockpicker') , $setTarget_0(f_ExternalLibrary4.externalLink) , $setText_2(f_ExternalLibrary4.externalLink, 'ClockPicker 0.0.7') , f_ExternalLibrary4)) , $add_9(f_MaterialRow2, (f_PrettyPre5 = new PrettyPre , $setHTML_0(f_PrettyPre5, (sb = new StringBuilder , sb.string += '\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:timepicker.MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(($clinit_DOM() , f_PrettyPre5.element_0), 'lang-xml', true) , f_PrettyPre5)) , $add_9(f_MaterialRow2, (f_MaterialTitle6 = new MaterialTitle , $setText_12(f_MaterialTitle6.paragraph, 'Tap between the hour and minute label in the title bar to switch between the hour or minute view. Additionally, tap on the AM/PM label in the title bar to switch between AM or PM (in 12-hour clock mode).') , $setInnerHTML($getElement(f_MaterialTitle6.header), (new SafeHtmlString(htmlEscape('Time Picker'))).html_0) , fire_5(f_MaterialTitle6, 'Time Picker') , f_MaterialTitle6)) , $add_9(f_MaterialRow2, (tp = new MaterialTimePicker , $setGrid((!tp.gridMixin && (tp.gridMixin = new GridMixin(tp)) , tp.gridMixin), 's12') , $setText_11(tp.placeholderLabel, 'Snooze Time') , tp)) , $add_9(f_MaterialRow2, (f_PrettyPre7 = new PrettyPre , $setHTML_0(f_PrettyPre7, (sb_0 = new StringBuilder , sb_0.string += '&lt;ma:timepicker.MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre7.element_0, 'lang-xml', true) , f_PrettyPre7)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2));\n  $add_9(f_MaterialPanel1, (f_MaterialRow8 = new MaterialRow , $add_9(f_MaterialRow8, (f_MaterialTitle9 = new MaterialTitle , $setText_12(f_MaterialTitle9.paragraph, \"You can disable your time picker by adding enabled='false'\") , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('Disabled Styles'))).html_0) , fire_5(f_MaterialTitle9, 'Disabled Styles') , f_MaterialTitle9)) , $add_9(f_MaterialRow8, (f_timepicker$MaterialTimePicker10 = new MaterialTimePicker , $setGrid((!f_timepicker$MaterialTimePicker10.gridMixin && (f_timepicker$MaterialTimePicker10.gridMixin = new GridMixin(f_timepicker$MaterialTimePicker10)) , f_timepicker$MaterialTimePicker10.gridMixin), 's12') , $setText_11(f_timepicker$MaterialTimePicker10.placeholderLabel, 'Snooze Time') , $setEnabled_0(f_timepicker$MaterialTimePicker10.timeInput, false) , f_timepicker$MaterialTimePicker10)) , setStyleName(f_MaterialRow8.element_0, 'code', true) , f_MaterialRow8));\n  $add_9(f_MaterialPanel1, (f_MaterialRow11 = new MaterialRow , $add_9(f_MaterialRow11, (f_MaterialTitle12 = new MaterialTitle , $setText_12(f_MaterialTitle12.paragraph, \"You can set 24 hour format of time picker by adding a parameter : hour24='true'\") , $setInnerHTML($getElement(f_MaterialTitle12.header), (new SafeHtmlString(htmlEscape('24 Hour format'))).html_0) , fire_5(f_MaterialTitle12, '24 Hour format') , f_MaterialTitle12)) , $add_9(f_MaterialRow11, (f_timepicker$MaterialTimePicker13 = new MaterialTimePicker , $setGrid((!f_timepicker$MaterialTimePicker13.gridMixin && (f_timepicker$MaterialTimePicker13.gridMixin = new GridMixin(f_timepicker$MaterialTimePicker13)) , f_timepicker$MaterialTimePicker13.gridMixin), 's12') , $setText_11(f_timepicker$MaterialTimePicker13.placeholderLabel, 'Snooze Time') , f_timepicker$MaterialTimePicker13.options_0.hour24 = true , f_timepicker$MaterialTimePicker13)) , $add_9(f_MaterialRow11, (f_PrettyPre14 = new PrettyPre , $setHTML_0(f_PrettyPre14, (sb_1 = new StringBuilder , sb_1.string += '&lt;ma:timepicker.MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" hour24=\"true\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre14.element_0, 'lang-xml', true) , f_PrettyPre14)) , setStyleName(f_MaterialRow11.element_0, 'code', true) , f_MaterialRow11));\n  $add_9(f_MaterialPanel1, (f_MaterialRow15 = new MaterialRow , $add_9(f_MaterialRow15, (f_MaterialTitle16 = new MaterialTitle , $setText_12(f_MaterialTitle16.paragraph, 'You can programmatically control the time picker component.') , $setInnerHTML($getElement(f_MaterialTitle16.header), (new SafeHtmlString(htmlEscape('Open / Close Control'))).html_0) , fire_5(f_MaterialTitle16, 'Open / Close Control') , f_MaterialTitle16)) , $add_9(f_MaterialRow15, (tpOpenClose = new MaterialTimePicker , $setGrid((!tpOpenClose.gridMixin && (tpOpenClose.gridMixin = new GridMixin(tpOpenClose)) , tpOpenClose.gridMixin), 's12') , $setText_11(tpOpenClose.placeholderLabel, 'Snooze Time') , this$static.owner.tpOpenClose = tpOpenClose , tpOpenClose)) , $add_9(f_MaterialRow15, (btnOpen = new MaterialButton , $setText_6(btnOpen.span_1, 'Open Time Picker') , btnOpen.span_1.attached || $add_9(btnOpen, btnOpen.span_1) , $addClickHandler(btnOpen, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6) , btnOpen)) , $add_9(f_MaterialRow15, (f_PrettyPre17 = new PrettyPre , $setHTML_0(f_PrettyPre17, (sb_2 = new StringBuilder , sb_2.string += '\\u2003tp.open() <br> tp.close()' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre17.element_0, 'lang-java', true) , f_PrettyPre17)) , setStyleName(f_MaterialRow15.element_0, 'code', true) , f_MaterialRow15));\n  $add_9(f_MaterialPanel1, (f_MaterialRow18 = new MaterialRow , $add_9(f_MaterialRow18, (f_MaterialTitle19 = new MaterialTitle , $setText_12(f_MaterialTitle19.paragraph, 'Provides a way to automatically closes the timepicker after selecting time.') , $setInnerHTML($getElement(f_MaterialTitle19.header), (new SafeHtmlString(htmlEscape('Auto Close'))).html_0) , fire_5(f_MaterialTitle19, 'Auto Close') , f_MaterialTitle19)) , $add_9(f_MaterialRow18, (tpAutoClose = new MaterialTimePicker , $setGrid((!tpAutoClose.gridMixin && (tpAutoClose.gridMixin = new GridMixin(tpAutoClose)) , tpAutoClose.gridMixin), 's12') , $setText_11(tpAutoClose.placeholderLabel, 'Time') , tpAutoClose.options_0.autoclose = true , tpAutoClose)) , $add_9(f_MaterialRow18, (f_PrettyPre20 = new PrettyPre , $setHTML_0(f_PrettyPre20, (sb_3 = new StringBuilder , sb_3.string += '&lt;ma:timepicker.MaterialTimePicker autoClose=\"true\" placeholder=\"Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre20.element_0, 'lang-xml', true) , f_PrettyPre20)) , setStyleName(f_MaterialRow18.element_0, 'code', true) , f_MaterialRow18));\n  $add_9(f_MaterialPanel1, (f_MaterialRow21 = new MaterialRow , $add_9(f_MaterialRow21, (f_MaterialTitle22 = new MaterialTitle , $setText_12(f_MaterialTitle22.paragraph, 'Open this time picker on a mobile device to test.') , $setInnerHTML($getElement(f_MaterialTitle22.header), (new SafeHtmlString(htmlEscape('Mobile'))).html_0) , fire_5(f_MaterialTitle22, 'Mobile') , f_MaterialTitle22)) , $add_9(f_MaterialRow21, (f_timepicker$MaterialTimePicker23 = new MaterialTimePicker , $setGrid((!f_timepicker$MaterialTimePicker23.gridMixin && (f_timepicker$MaterialTimePicker23.gridMixin = new GridMixin(f_timepicker$MaterialTimePicker23)) , f_timepicker$MaterialTimePicker23.gridMixin), 's12') , $setDetectOrientation_0((!f_timepicker$MaterialTimePicker23.orientationMixin && (f_timepicker$MaterialTimePicker23.orientationMixin = new OrientationMixin(f_timepicker$MaterialTimePicker23)) , f_timepicker$MaterialTimePicker23.orientationMixin), true) , $setText_11(f_timepicker$MaterialTimePicker23.placeholderLabel, 'Time') , f_timepicker$MaterialTimePicker23)) , $add_9(f_MaterialRow21, (f_PrettyPre24 = new PrettyPre , $setHTML_0(f_PrettyPre24, (sb_4 = new StringBuilder , sb_4.string += '&lt;ma:timepicker.MaterialTimePicker detectOrientation=\"true\" placeholder=\"Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre24.element_0, 'lang-xml', true) , f_PrettyPre24)) , setStyleName(f_MaterialRow21.element_0, 'code', true) , f_MaterialRow21));\n  $add_9(f_MaterialPanel1, (f_MaterialRow25 = new MaterialRow , $add_9(f_MaterialRow25, (f_MaterialTitle26 = new MaterialTitle , $setText_12(f_MaterialTitle26.paragraph, 'We provided events on time picker namely : Close, Open, ValueChange events.') , $setInnerHTML($getElement(f_MaterialTitle26.header), (new SafeHtmlString(htmlEscape('Events'))).html_0) , fire_5(f_MaterialTitle26, 'Events') , f_MaterialTitle26)) , $add_9(f_MaterialRow25, (tpEvents = new MaterialTimePicker , $setGrid((!tpEvents.gridMixin && (tpEvents.gridMixin = new GridMixin(tpEvents)) , tpEvents.gridMixin), 's12') , $setText_11(tpEvents.placeholderLabel, 'Alarm Time') , this$static.owner.tpEvents = tpEvents , tpEvents)) , $add_9(f_MaterialRow25, (f_PrettyPre27 = new PrettyPre , $setHTML_0(f_PrettyPre27, (sb_5 = new StringBuilder , sb_5.string += '\\u2003// Open Handler<br> tpEvents.addOpenHandler(new OpenHandler&lt;String&gt;() {<br> \\u2003@Override<br> \\u2003public void onOpen(OpenEvent&lt;String&gt; event) {<br> \\u2003\\u2003MaterialToast.fireToast(\"Opened Time Picker\");<br> \\u2003}<br> });<br><br> // Close Handler<br> tpEvents.addCloseHandler(new CloseHandler&lt;String&gt;() {<br> \\u2003@Override<br> \\u2003public void onClose(CloseEvent&lt;String&gt; event) {<br> \\u2003\\u2003MaterialToast.fireToast(\"Closed Time Picker\");<br> \\u2003}<br> });<br><br> // ValueChange Handler<br> tpEvents.addValueChangeHandler(new ValueChangeHandler&lt;Date&gt;() {<br> \\u2003@Override<br> \\u2003public void onValueChange(ValueChangeEvent&lt;Date&gt; event) {<br> \\u2003\\u2003DateTimeFormat dtf = DateTimeFormat.getFormat(\"hh:mm a\");<br> \\u2003\\u2003Date time = event.getValue();<br> \\u2003\\u2003MaterialToast.fireToast(\"MaterialTimePicker value changed to: \" + dtf.format(time));<br> \\u2003}<br> });<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html_0) , setStyleName(f_PrettyPre27.element_0, 'lang-java', true) , f_PrettyPre27)) , setStyleName(f_MaterialRow25.element_0, 'code', true) , f_MaterialRow25));\n  $add_9(f_MaterialPanel1, (f_MaterialRow28 = new MaterialRow , $add_9(f_MaterialRow28, (f_MaterialBadge29 = new MaterialBadge , $setBackgroundColor(f_MaterialBadge29, ($clinit_Color() , AMBER_LIGHTEN_5)) , $setShadow_0((!f_MaterialBadge29.shadowMixin && (f_MaterialBadge29.shadowMixin = new ShadowMixin(f_MaterialBadge29)) , f_MaterialBadge29.shadowMixin), 1) , $setLayoutPosition(f_MaterialBadge29, ($clinit_Style$Position() , RELATIVE)) , $setInnerHTML(f_MaterialBadge29.element_0, (new SafeHtmlString(htmlEscape('FEATURE UPDATE'))).html_0) , $setFloat(f_MaterialBadge29, ($clinit_Style$Float() , RIGHT)) , $setTextColor(f_MaterialBadge29, AMBER) , f_MaterialBadge29)) , $add_9(f_MaterialRow28, (f_MaterialTitle30 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle30.header), (new SafeHtmlString(htmlEscape('TimePicker : setValue(value, fireEvents)'))).html_0) , fire_5(f_MaterialTitle30, 'TimePicker : setValue(value, fireEvents)') , f_MaterialTitle30)) , $add_9(f_MaterialRow28, (tpValue = new MaterialTimePicker , $setGrid((!tpValue.gridMixin && (tpValue.gridMixin = new GridMixin(tpValue)) , tpValue.gridMixin), 's12') , $setText_11(tpValue.placeholderLabel, 'Time') , $addHandler(tpValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18)) , this$static.owner.tpValue = tpValue , tpValue)) , $add_9(f_MaterialRow28, (btnTpValue = new MaterialButton , btnTpValue.element_0.style['marginRight'] = ($clinit_Style$Unit() , '20.0px') , $setText_6(btnTpValue.span_1, 'Set Value') , btnTpValue.span_1.attached || $add_9(btnTpValue, btnTpValue.span_1) , $addClickHandler(btnTpValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnTpValue)) , $add_9(f_MaterialRow28, (btnTpValueEvent = new MaterialButton , $setText_6(btnTpValueEvent.span_1, 'Set Value with Event') , btnTpValueEvent.span_1.attached || $add_9(btnTpValueEvent, btnTpValueEvent.span_1) , $addClickHandler(btnTpValueEvent, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , btnTpValueEvent)) , $add_9(f_MaterialRow28, (f_PrettyPre31 = new PrettyPre , $setHTML_0(f_PrettyPre31, (sb_6 = new StringBuilder , sb_6.string += '// Will not fire an event <br> tpValue.setValue(new Date());<br> tpValue.setValue(new Date(), false);<br><br> // Will fire an event<br> tpValue.setValue(new Date(), true);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_6.string)).html_0) , setStyleName(f_PrettyPre31.element_0, 'lang-java', true) , f_PrettyPre31)) , setStyleName(f_MaterialRow28.element_0, 'code', true) , f_MaterialRow28));\n  $add_9(f_MaterialPanel1, (f_MaterialRow32 = new MaterialRow , $add_9(f_MaterialRow32, (f_MaterialTitle33 = new MaterialTitle , $setText_12(f_MaterialTitle33.paragraph, 'Clear your time picker value') , $setInnerHTML($getElement(f_MaterialTitle33.header), (new SafeHtmlString(htmlEscape('Clear()'))).html_0) , fire_5(f_MaterialTitle33, 'Clear()') , f_MaterialTitle33)) , $add_9(f_MaterialRow32, (tpClear = new MaterialTimePicker , $setGrid((!tpClear.gridMixin && (tpClear.gridMixin = new GridMixin(tpClear)) , tpClear.gridMixin), 's12') , $setText_11(tpClear.placeholderLabel, 'Snooze Time') , this$static.owner.tpClear = tpClear , tpClear)) , $add_9(f_MaterialRow32, (btnClear = new MaterialButton , btnClear.element_0.style['margin'] = '12.0px' , $setIconType_0(btnClear, ($clinit_IconType() , REFRESH)) , $setText_6(btnClear.span_1, 'Clear') , btnClear.span_1.attached || $add_9(btnClear, btnClear.span_1) , $addClickHandler(btnClear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , btnClear)) , $add_9(f_MaterialRow32, (btnGetValue = new MaterialButton , $setText_6(btnGetValue.span_1, 'Get Value') , btnGetValue.span_1.attached || $add_9(btnGetValue, btnGetValue.span_1) , $addClickHandler(btnGetValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5) , btnGetValue)) , $add_9(f_MaterialRow32, (f_PrettyPre34 = new PrettyPre , $setHTML_0(f_PrettyPre34, (sb_7 = new StringBuilder , sb_7.string += 'timepick.clear();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_7.string)).html_0) , setStyleName(f_PrettyPre34.element_0, 'lang-java', true) , f_PrettyPre34)) , setStyleName(f_MaterialRow32.element_0, 'code', true) , f_MaterialRow32));\n  return f_MaterialPanel1;\n}\n\nfunction TimePickersView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new TimePickersView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new TimePickersView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new TimePickersView_BinderImpl$Widgets$3(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new TimePickersView_BinderImpl$Widgets$4(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new TimePickersView_BinderImpl$Widgets$5(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new TimePickersView_BinderImpl$Widgets$6(this);\n  this.owner = owner;\n}\n\ndefineClass(1529, 1, {}, TimePickersView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets', 1529);\nfunction TimePickersView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(1530, 1, $intern_44, TimePickersView_BinderImpl$Widgets$1);\n_.onValueChange = function onValueChange_23(event_0){\n  var dtf, time;\n  dtf = ($clinit_DateTimeFormat_0() , getFormat_0($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1))));\n  time = castTo(event_0.value_0, 100);\n  fireToast('Value : ' + $format(dtf, time, null));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets/1', 1530);\nfunction TimePickersView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1531, 1, $intern_63, TimePickersView_BinderImpl$Widgets$2);\n_.onClick = function onClick_112(event_0){\n  $setValue_11(this.this$11.owner.tpValue, new Date_0, false);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets/2', 1531);\nfunction TimePickersView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1532, 1, $intern_63, TimePickersView_BinderImpl$Widgets$3);\n_.onClick = function onClick_113(event_0){\n  $setValue_12(this.this$11.owner.tpValue, new Date_0, true);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets/3', 1532);\nfunction TimePickersView_BinderImpl$Widgets$4(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1533, 1, $intern_63, TimePickersView_BinderImpl$Widgets$4);\n_.onClick = function onClick_114(event_0){\n  $clear_5(this.this$11.owner.tpClear);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets/4', 1533);\nfunction TimePickersView_BinderImpl$Widgets$5(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1534, 1, $intern_63, TimePickersView_BinderImpl$Widgets$5);\n_.onClick = function onClick_115(event_0){\n  fireToast(this.this$11.owner.tpClear.time + '');\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets/5', 1534);\nfunction TimePickersView_BinderImpl$Widgets$6(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1535, 1, $intern_63, TimePickersView_BinderImpl$Widgets$6);\n_.onClick = function onClick_116(event_0){\n  $open_2(this.this$11.owner.tpOpenClose);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets$6_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets/6', 1535);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$) {\n    result0 = new TimePickersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$) {\n    result = new TimePickersView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$;\n}\n\ndefineClass(716, 1, $intern_101);\n_.onSuccess_0 = function onSuccess_15(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(14);\n\n//# sourceURL=gwtmaterialdemo-14.js\n")
