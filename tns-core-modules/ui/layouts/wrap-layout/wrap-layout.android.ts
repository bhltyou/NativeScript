﻿import { WrapLayoutBase, orientationProperty, itemWidthProperty, itemHeightProperty, Length } from "./wrap-layout-common";

export * from "./wrap-layout-common";

export class WrapLayout extends WrapLayoutBase {
    nativeView: org.nativescript.widgets.WrapLayout;

    public _createNativeView() {
         return new org.nativescript.widgets.WrapLayout(this._context);
    }

    [orientationProperty.setNative](value: "horizontal" | "vertical") {
        this.nativeView.setOrientation(value === "vertical" ? org.nativescript.widgets.Orientation.vertical : org.nativescript.widgets.Orientation.horizontal)
    }

    [itemWidthProperty.setNative](value: Length) {
        this.nativeView.setItemWidth(Length.toDevicePixels(value, -1));
    }

    [itemHeightProperty.setNative](value: Length) {
        this.nativeView.setItemHeight(Length.toDevicePixels(value, -1));
    }
}