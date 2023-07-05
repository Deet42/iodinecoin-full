// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Deet42IodinecoinfullIodinecoinfull from './deet42.iodinecoinfull.iodinecoinfull'
import Deet42IodinecoinfullTokenfactory from './deet42.iodinecoinfull.tokenfactory'


export default { 
  Deet42IodinecoinfullIodinecoinfull: load(Deet42IodinecoinfullIodinecoinfull, 'deet42.iodinecoinfull.iodinecoinfull'),
  Deet42IodinecoinfullTokenfactory: load(Deet42IodinecoinfullTokenfactory, 'deet42.iodinecoinfull.tokenfactory'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}