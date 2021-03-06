// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import Log from './Log';
import ElectronPopupWindow from './ElectronPopupWindow';

export default class ElectronPopupNavigator {
    
    prepare(params) {
        let popup = new ElectronPopupWindow(params);
        return Promise.resolve(popup);
    }

    callback(url) {
        Log.info("ElectronPopupNavigator.callback");

        try {
            ElectronPopupWindow.notifyOpener(url);
            return Promise.resolve();
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
}
