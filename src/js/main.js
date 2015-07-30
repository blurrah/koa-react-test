import React from 'react';
import router from './router/router';

require('../css/normalize.css');
require('../css/skeleton.css');

router.run((Handler, state) => {
    React.render(<Handler {...state} />, document.getElementById('main'));
});
