package gwt.material.design.demo.client.application.incubator.toggle;

/*
 * #%L
 * GwtMaterial
 * %%
 * Copyright (C) 2015 - 2016 GwtMaterialDesign
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */


import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.logical.shared.SelectionEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.ViewImpl;
import gwt.material.design.client.ui.MaterialToast;
import gwt.material.design.incubator.client.toggle.GroupToggleButton;

public class ToggleView extends ViewImpl implements TogglePresenter.MyView {
    public interface Binder extends UiBinder<Widget, ToggleView> {
    }

    @UiField
    GroupToggleButton groupToggle;

    @Inject
    ToggleView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));

        groupToggle.setFirstToggleText("1");
        groupToggle.setSecondToggleText("2");
        groupToggle.setThirdToggleText("3");
    }

    @UiHandler("groupToggle")
    void selection(SelectionEvent<Integer> e) {
        MaterialToast.fireToast("Selected Index : " + e.getSelectedItem());
    }

    @UiHandler("getIndex")
    void getIndex(ClickEvent e) {
        MaterialToast.fireToast("Selected Index : " + groupToggle.getActive());
    }
}
