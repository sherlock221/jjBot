var _ = require('underscore');

_.extend(_.templateSettings, {
	interpolate: /\{\{(.+?)\}\}/g
});