'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ReactWX = require('../../../../ReactWX.js');

var _ReactWX2 = _interopRequireDefault(_ReactWX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function P() {
    this.state = {
        title: '',
        key: '',
        trs: [[{ title: 'aaa' }, { title: 'bbb' }, { title: 'ccc' }], [{ title: 'ddd' }, { title: 'eee' }, { title: 'fff' }], [{ title: 'ggg' }, { title: 'hhh' }, { title: 'iii' }]]
    };
}

P = _ReactWX2.default.toClass(P, _ReactWX2.default.Component, {
    getData: function (item, e) {
        this.setState({
            title: item.title,
            key: e.target.dataset.key
        });
    },
    render: function () {
        var h = _ReactWX2.default.createElement;

        return h('view', null, h('view', null, '\u6D4B\u8BD5\u5FAA\u73AF\u4E2D\u7684\u4E8B\u4EF6\uFF0C\u70B9\u51FB\u4E0B\u65B9\u683C\u5B50'), h('view', null, 'title:', this.state.title, '  key ', this.state.key), h('view', { 'class': 'grid-wrap' }, this.state.trs.map(function (item, i954) {
            return h('view', null, item.map(function (el, i1090) {
                return h('view', { 'class': 'grid', onTap: this.getData.bind(this, el),
                    'data-click-uid': 'e2471', 'data-class-uid': 'c1691', 'data-key': i954 + '-' + i1090 }, h(_ReactWX2.default.useComponent, { content: el.title, is: "Fish", $$index: i954 + '-' + i1090 }));
            }, this));
        }, this)));
    },
    classUid: 'c1691'
}, {});
Page(_ReactWX2.default.registerPage(P, 'pages/demo/syntax/loop2/index'));

exports.default = P;