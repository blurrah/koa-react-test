'use strict';
require('babel/register', function() {});

const koa = require('koa');
const React = require('react');
const Router = require('react-router');
const path = require('path');
const render = require('koa-ejs');
const serve = require('koa-static');

const routes = require('./src/js/router/routes');

const port = process.argv[2] || 3000;
const app = koa();

var handler;

render(app, {
    root: path.join(__dirname, 'views'),
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: true
});

app.use(serve('./src/'));

app.use(function *(next) {
    Router.run(routes, this.request.url, function(Handler) {
        var handlerComponent = React.createFactory(Handler);
        handler = React.renderToString(handlerComponent());
    });

    yield next;
});

app.use(function *() {
    yield this.render('index', {body: handler});
});

app.listen(port, function(err) {
    if (err) throw err;

    console.log(`Koa server listening on ${port}`);
});
