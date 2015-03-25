// https://github.com/rackt/react-router/blob/master/docs/guides/testing.md
// https://github.com/mozilla/teach.webmaker.org

var assign = require('react/lib/Object.assign');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var reactRouterStub = function (Component, props, stubs) {
  var func = React.PropTypes.func;
  var noop = function () {};

  return React.createClass({
    childContextTypes: {
      makePath: func,
      makeHref: func,
      transitionTo: func,
      replaceWith: func,
      goBack: func,
      getCurrentPath: func,
      getCurrentRoutes: func,
      getCurrentPathname: func,
      getCurrentParams: func,
      getCurrentQuery: func,
      isActive: func,
    },

    getChildContext: function () {
      return assign({
        makePath: noop,
        makeHref: noop,
        transitionTo: noop,
        replaceWith: noop,
        goBack: noop,
        getCurrentPath: noop,
        getCurrentRoutes: noop,
        getCurrentPathname: noop,
        getCurrentParams: noop,
        getCurrentQuery: noop,
        isActive: noop
      }, stubs);
    },

    render: function () {
      return React.createElement(Component, React.__spread({ref: 'childComponent'}, props));
    }
  });
};

reactRouterStub.render = function(Component, props) {
  var Stubbed = reactRouterStub(Component, props);
  return TestUtils.renderIntoDocument(React.createElement(Stubbed, null)).refs.childComponent;
};

reactRouterStub.unmount = function(childComponent) {
  React.unmountComponentAtNode(childComponent.getDOMNode().parentNode);
};

module.exports = reactRouterStub;
