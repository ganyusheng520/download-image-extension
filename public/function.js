/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
 **/
'use strict';
window._w_cargo = '0123456789';
window._w_sway = '0123456789abcdef';
window._w_flange = '0123456789abcdefghijklmnopqrstuvwxyz';
window._w_writ = 8e3;
window._w_maze = 'https://www.pullywood.com/ImageAssistant/blank.html';
window._w_legacy = _w_revise(window._w_maze);
window._w_tariff = _w_revise(window._w_maze);
window._w_logjam = 'https://www.pullywood.com/ImageAssistant/images/IAnalytic.png';
window._w_tripod = 'https://www.pullywood.com/publish/imageassistant-resource-list';
window._w_epic = _w_revise('https://www.pullywood.com/ImageAssistant/defaultRegexpUrlRule.properties');
window._w_hack = _w_revise('http://localhost:61257/check');
window._w_swirl = _w_revise('http://localhost:61257/collection/save');
window._w_lull = _w_revise('https://www.pullywood.com/ImageAssistant/dynamic_config.json');
window._w_swarm = false;
window._w_pith = {};
window._w_slosh = false;
window._w_hawker = 512;
window._w_spell = './images/loading.gif';
const _w_wink = {
    _w_peril: [`${_w_tango('manifest_ext_name')}/{page.title}`, `${_w_tango('manifest_ext_name')}/{page.host}/{page.title}`, `${_w_tango('manifest_ext_name')}/{YYYY-MM-DD}/{page.title}`, `${_w_tango('manifest_ext_name')}/{page.host}/{YYYY-MM-DD}_{HH-mm-ss}/{page.title}`],
    _w_folder: ['{filename}', '{no.10001}', '{origin_serial}']
};
window._w_wile = {
    _keyStr: 'bFf2YMpEZLT6OBqN/DCtJlnc9G154W=wP+h3Rrk8xadIzjQoHmv7sAS0yeUiKVugX', encode: function (e) {
        let t = '';
        let n, r, i, s, o, u, a;
        let f = 0;
        e = _w_wile._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64;
            } else if (isNaN(i)) {
                a = 64;
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
        }
        return t;
    }, decode: function (e) {
        let t = '';
        let n, r, i;
        let s, o, u, a;
        let f = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r);
            }
            if (a != 64) {
                t = t + String.fromCharCode(i);
            }
        }
        t = _w_wile._utf8_decode(t);
        return t;
    }, _utf8_encode: function (e) {
        e = e.replace(/\r\n/g, '\n');
        let t = '';
        for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128);
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128);
            }
        }
        return t;
    }, _utf8_decode: function (e) {
        let t = '';
        let n = 0;
        let r = 0, c1 = 0, c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++;
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2;
            } else {
                c2 = e.charCodeAt(n + 1);
                var c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3;
            }
        }
        return t;
    }
};
if (!Object.entries) {
    Object.entries = function (obj) {
        var ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
        while (i--) {
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
        }
        return resArray;
    };
}
if (!Object.values) {
    Object.values = function (obj) {
        return Object.keys(obj).map((function (key) {
            return obj[key];
        }));
    };
}
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
        let _w_chunk = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > _w_chunk.length) {
            position = _w_chunk.length;
        }
        position -= searchString.length;
        let _w_assay = _w_chunk.indexOf(searchString, position);
        return _w_assay !== -1 && _w_assay === position;
    };
}
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}
if (!Number.parseInt) Number.parseInt = parseInt;
if (!window.URL) {
    window.URL = function (url) {
        if (url.indexOf('://') < 0) throw new TypeError('Invalid URL');
        this.url = url;
        this.link = document.createElement('a');
        this.link.href = url;
        this.href = this.link.href;
        this.protocol = this.link.protocol;
        this.host = this.link.host;
        this.hostname = this.link.hostname;
        this.port = this.link.port;
        this.pathname = this.link.pathname;
        this.search = this.link.search;
        this.hash = this.link.hash;
        this.username = this.link.username;
        this.password = this.link.password;
        this.origin = this.link.origin;
    };
}
const _w_tease = /(['"\s\n\r])[^'"\s\n\r]*?\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp|pnj)(\?[^'"\s\n\r]*)?(?=['"\s\n\r])/gi;
const _w_finale = function (_w_void) {
    let _w_almond = [];
    _w_void && _w_void.forEach((function (item) {
        let _w_kidney = item.replace(/[\\'"\s\n\r]+/gi, '');
        _w_almond.push(_w_kidney);
    }));
    return _w_almond;
};
$.ajaxSetup({
    timeout: window._w_writ,
    headers: {
        Accept: '*/*; charset=UTF-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0',
        Pragma: 'no-cache',
        Expires: '0'
    }
});
(function ($) {
    let _w_cane = [];
    $(document).ajaxSend((function (e, jqXHR, options) {
        _w_cane.push(jqXHR);
    }));
    $(document).ajaxComplete((function (e, jqXHR, options) {
        _w_cane = $.grep(_w_cane, (function (x) {
            return x != jqXHR;
        }));
    }));
    let _w_odium = function () {
        $.each(_w_cane, (function (idx, jqXHR) {
            jqXHR.abort();
        }));
    };
    let _w_scorn = window.onbeforeunload;
    window.abortAjaxRequest = function () {
        _w_odium();
    };
    window.onbeforeunload = function () {
        let _w_credo = _w_scorn ? _w_scorn() : undefined;
        if (_w_credo == undefined) {
            _w_odium();
        }
        return _w_credo;
    };
})(jQuery);

function _w_revise(url) {
    if (typeof url != 'string') return url;
    let _w_sonnet = 'version='.concat(chrome.runtime.getManifest().version).concat('&finger=').concat(localStorage[chrome.runtime.id]);
    if (url.indexOf('?') >= 0) {
        return url.concat('&').concat(_w_sonnet);
    } else {
        return url.concat('?').concat(_w_sonnet);
    }
}

function _w_kernel(url) {
    let _w_ream = /^https?:(\/\/.*?)$/;
    let _w_annex = window.location.href ? window.location.href.match(_w_ream) : null;
    let _w_screw = url ? url.match(_w_ream) : null;
    if (_w_annex && _w_screw) {
        return _w_screw[1];
    }
    return url;
}

function _w_hyphen(taskFun) {
    return taskFun && typeof taskFun === 'function';
}

function _w_choir(e) {
    if (e.target && ['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) >= 0 || e.target.contentEditable == 'true') return true;
    return false;
}

function _w_fad(_w_issue) {
    let _w_plane = [];
    let _w_fetter = 0;
    let _w_jargon = 0;
    let _w_scathe = _w_issue;
    setInterval((function fetchAndExecTask() {
        if (_w_fetter < _w_scathe && _w_jargon < _w_scathe && _w_plane.length > 0) {
            _w_jargon++;
            let _w_tusk = _w_plane.shift();
            if (_w_hyphen(_w_tusk)) {
                _w_tusk((function () {
                    _w_fetter++;
                }), (function () {
                    _w_fetter--;
                }), (function () {
                    return [_w_fetter, _w_plane.length];
                }));
            }
            _w_jargon--;
        }
    }), 10);
    return {
        setMax: function (max) {
            _w_scathe = max;
        }, getProcessingNum: function () {
            return _w_fetter;
        }, getTaskNum: function () {
            return _w_plane.length;
        }, addTaskToLast: function (taskFun) {
            _w_plane.push(taskFun);
        }, addTaskToFirst: function (taskFun) {
            _w_plane.unshift(taskFun);
        }, addTask: function (taskFun) {
            _w_plane.push(taskFun);
        }
    };
}

function _w_colony(hex) {
    let _w_sack = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(_w_sack, (function (m, r, g, b) {
        return r + r + g + g + b + b;
    }));
    let _w_tint = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return _w_tint ? {r: parseInt(_w_tint[1], 16), g: parseInt(_w_tint[2], 16), b: parseInt(_w_tint[3], 16)} : null;
}

function _w_vogue() {
    chrome.downloads.showDefaultFolder();
}

function _w_mulct() {
    if (window._w_forte) {
        return;
    } else {
        window._w_forte = true;
    }
    new MutationObserver((function (_w_aorta) {
        _w_aorta.forEach((function (_w_defect) {
            for (let i = 0; i < _w_defect.addedNodes.length; ++i) {
                let _w_realm = _w_defect.addedNodes.item(i);
                if (_w_realm.tagName == 'IMG') {
                    _w_realm.removeAttribute('src');
                } else if (typeof _w_realm.getElementsByTagName !== 'function') {
                    return;
                } else {
                    let _w_guilt = _w_realm.getElementsByTagName('img');
                    for (let j = 0; j < _w_guilt.length; ++j) _w_guilt[j].removeAttribute('src');
                }
            }
        }));
    })).observe(document.body, {childList: true, subtree: true});
}

function _w_tango(key) {
    return chrome.i18n.getMessage(key);
}

function _w_drill(url) {
    url || (url = '');
    try {
        url = decodeURIComponent(url);
    } catch (e) {
    }
    return url;
}

function _w_genre() {
    if (typeof chrome != 'undefined' && typeof chrome.extension != 'undefined' && typeof chrome.extension.getBackgroundPage != 'undefined') {
        return chrome.extension.getBackgroundPage();
    }
    return null;
}

function _w_shrine(_w_ode, _w_hedge) {
    (function observeStatus() {
        setTimeout((() => {
            chrome.tabs.get(_w_ode, (function (_w_glade) {
                if (chrome.runtime.lastError && chrome.runtime.lastError.message.indexOf('No tab with id') > 0) {
                    return;
                }
                if (!_w_glade || !_w_glade.pendingUrl) {
                    _w_hyphen(_w_hedge) && _w_hedge(_w_glade);
                } else {
                    observeStatus();
                }
            }));
        }), 250);
    })();
}

function _w_digit(_w_ode, _w_hedge) {
    (function observeStatus() {
        setTimeout((() => {
            chrome.tabs.get(_w_ode, (function (_w_glade) {
                if (chrome.runtime.lastError && chrome.runtime.lastError.message.indexOf('No tab with id') > 0) {
                    return;
                }
                if (_w_glade && _w_glade.status && _w_glade.status == 'complete') {
                    _w_hyphen(_w_hedge) && _w_hedge(_w_glade);
                } else {
                    observeStatus();
                }
            }));
        }), 250);
    })();
}

function _w_tenant(_w_pulp, _w_volley) {
    (function observeStatus() {
        setTimeout((() => {
            chrome.tabs.remove(_w_pulp, (function () {
                if (chrome.runtime.lastError) {
                    if (chrome.runtime.lastError.message.indexOf('drag') > 0) {
                        observeStatus();
                    } else {
                        return;
                    }
                } else if (_w_hyphen(_w_volley)) {
                    _w_volley.apply(this, arguments);
                }
            }));
        }), 250);
    })();
}

function _w_cuff(_w_nadir) {
    if (location.href.indexOf('?') == -1 || location.href.indexOf(_w_nadir + '=') == -1) {
        return '';
    }
    let _w_slew = location.href.substring(location.href.indexOf('?') + 1);
    if (_w_slew.indexOf('#') > -1) {
        _w_slew = _w_slew.substring(0, _w_slew.indexOf('#'));
    }
    let _w_vault = _w_slew.split('&');
    let _w_vessel, paraName, paraValue;
    for (let i = 0; i < _w_vault.length; i++) {
        _w_vessel = _w_vault[i].indexOf('=');
        if (_w_vessel == -1) {
            continue;
        }
        paraName = _w_vault[i].substring(0, _w_vessel);
        paraValue = _w_vault[i].substring(_w_vessel + 1);
        if (paraName == _w_nadir) {
            return unescape(paraValue.replace(/\+/g, ' '));
        }
    }
    return '';
}

function _w_lyric(url) {
    let _w_quarry = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    if (_w_quarry) {
        return _w_quarry[1];
    }
    return '';
}

function _w_peep(url) {
    let _w_quarry = url.match(/^(https?\:\/\/[^\/?#]+\/)/i);
    if (_w_quarry) {
        return _w_quarry[1];
    }
    return '';
}

function _w_stunt(url) {
    if (typeof url == 'string') {
        return url.replace(/#.*$/gi, '');
    }
    return null;
}

function _w_swine() {
    let _w_pod = new URL(window.location.href);
    _w_pod = _w_pod.origin + _w_pod.pathname;
    return _w_pod;
}

function _w_hoist(_w_lounge, _w_scamp, _w_gnat) {
    let _w_palate = {width: 0, height: 0};
    if (_w_lounge && _w_scamp && _w_gnat) {
        try {
            let _w_tiff = _w_lounge.width;
            let _w_colon = _w_lounge.height;
            if (_w_tiff <= _w_scamp && _w_colon <= _w_gnat) {
                _w_palate.width = _w_tiff;
                _w_palate.height = _w_colon;
            } else if (_w_tiff / _w_colon >= _w_scamp / _w_gnat) {
                _w_palate.width = _w_scamp;
                _w_palate.height = _w_scamp / _w_tiff * _w_colon;
            } else {
                _w_palate.width = _w_gnat / _w_colon * _w_tiff;
                _w_palate.height = _w_gnat;
            }
        } catch (e) {
        }
    }
    return _w_palate;
}

async function _w_agenda(_w_rookie, resolutionLimit = {maxWidth: 256, maxHeight: 256}) {
    let rect = _w_hoist(_w_rookie, resolutionLimit.maxWidth, resolutionLimit.maxHeight);
    let canvas = document.createElement('canvas');
    canvas.width = rect.width;
    canvas.height = rect.height;
    canvas.title = _w_rookie.title;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(_w_rookie, 0, 0, rect.width, rect.height);
    const blob = await new Promise((resolve => canvas.toBlob(resolve, 'png')));
    const tmpUrl = URL.createObjectURL(blob);
    let blobSrc = await asyncUrlToBlobUrl(tmpUrl);
    URL.revokeObjectURL(tmpUrl);
    canvas = null;
    return blobSrc;
}

function _w_dwarf(_w_errand) {
    if (!_w_errand.getBoundingClientRect) return false;
    let _w_palate = _w_errand.getBoundingClientRect();
    if (_w_palate.bottom < 0 - _w_hawker || _w_palate.right < 0 - _w_hawker || _w_palate.top > window.innerHeight + _w_hawker || _w_palate.left > window.innerWidth + _w_hawker) {
        return false;
    } else {
        return true;
    }
}

window.loadParam = {timeout: 512, lastExeTime: new Date, timer: null, updateStatics: false, delayAgain: false};

function _w_gulch() {
    return chrome.runtime.id;
}

function _w_bucket() {
    return localStorage['drag_download_switch'] == 'on';
}

function _w_raffle(_w_gambol, _w_frisk, _w_ken) {
    _w_frisk && (loadParam.updateStatics = _w_frisk);
    _w_sprout(loadParam, (function () {
        let _w_frisk = false;
        loadParam.updateStatics && (_w_frisk = loadParam.updateStatics, loadParam.updateStatics = false);
        if (_w_frisk) {
            let _w_jolt = _w_genre()._w_valve();
            if (_w_jolt & 1) {
                $('#filter_switch').addClass('btn-pwd active');
                $('#filter_menu').slideDown('fast', _w_prig);
            } else {
                $('#filter_switch').removeClass('btn-pwd active');
                $('#filter_menu').slideUp('fast', _w_prig);
            }
            if (_w_jolt & 2) {
                $('#select_menu_switch').addClass('btn-pwd active');
                $('#select_menu').slideDown('fast', _w_prig);
            } else {
                $('#select_menu_switch').removeClass('btn-pwd active');
                $('#select_menu').slideUp('fast', _w_prig);
            }
            const $sortBtn = $('#sort_switch');
            if (_w_jolt & 4 && $sortBtn.is(':not(.active)')) {
                $sortBtn.addClass('btn-pwd active');
                $sortBtn.trigger('funExec');
            } else if (!(_w_jolt & 4) && $sortBtn.is('.active')) {
                $sortBtn.removeClass('btn-pwd active');
                $sortBtn.trigger('funExec');
            }
            if (_w_jolt & 8) {
                $('#resolutionTle_switch').addClass('btn-pwd active');
                $('.imageItemResolution').show();
            } else {
                $('#resolutionTle_switch').removeClass('btn-pwd active');
                $('.imageItemResolution').hide();
            }
            const $dedupBtn = $('#imageDeduplication_switch');
            if (_w_jolt & 16 && $dedupBtn.is(':not(.active)')) {
                $dedupBtn.addClass('btn-pwd active');
                $('#dedup_menu').show();
                $dedupBtn.trigger('funExec');
            } else if (!(_w_jolt & 16) && $dedupBtn.is('.active')) {
                $dedupBtn.removeClass('btn-pwd active');
                $('#dedup_menu').hide();
            }
            if ((_w_jolt | 12) == 12) {
                $('#menu').hide();
            } else {
                $('#menu').show();
            }
            let _w_vertex = new Array;
            let _w_din = new Array;
            $('#filter_menu_type .imageType[value!=all][value!=other].active').each((function () {
                _w_vertex.push($(this).attr('value'));
            }));
            $('#filter_menu_type .imageType[value!=all][value!=other]:not(.active)').each((function () {
                _w_din.push($(this).attr('value'));
            }));
            $('#filter_menu_type .imageType[value=all]').hasClass('active') ? $(_w_gambol).show() : $('#filter_menu_type .imageType[value=other]').hasClass('active') ? $(_w_gambol).each((function () {
                _w_din.indexOf($(this).attr('data-type')) > -1 ? $(this).hide() : $(this).show();
            })) : $(_w_gambol).each((function () {
                _w_vertex.indexOf($(this).attr('data-type')) > -1 ? $(this).show() : $(this).hide();
            }));
            let _w_mope = _w_torque.slice(0);
            _w_mope.push('other');
            $('#counter_all').html($(_w_gambol).length);
            for (let i = 0; i < _w_mope.length; ++i) {
                let _w_tremor = $(_w_gambol + '[data-type=' + _w_mope[i] + ']').length;
                $('#counter_' + _w_mope[i]).html(_w_tremor);
                _w_tremor != 0 ? $('#counter_' + _w_mope[i]).parent().show() : $('#counter_' + _w_mope[i]).parent().hide();
            }
            if ($('#filter_menu_size .selectType[value=larger]').hasClass('active')) {
                $('#filter_menu_size .selectOption[value!=all]').each((function () {
                    $(_w_gambol + '[data-max-range=' + $(this).attr('value') + ']').length > 0 ? $(this).show() : $(this).hide();
                }));
                if ($('#filter_menu_size .selectOption[value=all]').hasClass('active')) {
                } else if ($('#filter_menu_size .selectOption[value=other].active').length > 0) {
                    $(_w_gambol + ':visible[data-max-range!=other]').hide();
                } else {
                    let _w_adobe = $('#filter_menu_size .selectOption[value!=all][value!=other].active');
                    let _w_bench = _w_genre()._w_dearth();
                    let _w_quota = _w_bench[_w_adobe.attr('value')];
                    $(_w_gambol + ':visible').each((function () {
                        $(this).attr('data-width') - _w_quota.width >= 0 && $(this).attr('data-height') - _w_quota.height >= 0 ? $(this).show() : $(this).hide();
                    }));
                }
            } else if ($('#filter_menu_size .selectType[value=exact]').hasClass('active')) {
                let _w_rhyme = 0;
                $('#filter_menu_size .selectOption[value!=all][value!=other]').each((function () {
                    let _w_saga = $(_w_gambol + '[data-resolution=' + $(this).attr('value') + ']').length;
                    _w_saga > 0 ? $(this).show() : $(this).hide();
                    _w_rhyme += _w_saga;
                }));
                let $_w_mote = $('#filter_menu_size .selectOption[value=other]');
                _w_rhyme < $(_w_gambol).length ? $_w_mote.show() : $_w_mote.hide();
                let _w_melon = new Array;
                let _w_groom = new Array;
                $('#filter_menu_size .selectOption[value!=all][value!=other].active').each((function () {
                    _w_melon.push($(this).attr('value'));
                }));
                $('#filter_menu_size .selectOption[value!=all][value!=other]:not(.active)').each((function () {
                    _w_groom.push($(this).attr('value'));
                }));
                $('#filter_menu_size .selectOption[value=all]').hasClass('active') ? true : $('#filter_menu_size .selectOption[value=other]').hasClass('active') ? $(_w_gambol + ':visible').each((function () {
                    _w_groom.indexOf($(this).attr('data-resolution')) > -1 ? $(this).hide() : $(this).show();
                })) : $(_w_gambol + ':visible').each((function () {
                    _w_melon.indexOf($(this).attr('data-resolution')) > -1 ? $(this).show() : $(this).hide();
                }));
            } else {
            }
            let _w_cement = $('#urlRegexpFilter').prop('value').trim();
            if (_w_cement && _w_cement.length > 0) {
                try {
                    let _w_jamb = new RegExp(_w_cement);
                    $(_w_gambol + ':visible').each((function () {
                        if (null != _w_jamb.exec($(this).attr('data-src'))) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    }));
                    $('#urlRegexpFilter').removeClass('regexp_error');
                } catch (exception) {
                    $('#urlRegexpFilter').addClass('regexp_error');
                }
            } else {
                $('#urlRegexpFilter').removeClass('regexp_error');
            }
            $(_w_gambol + ':visible').addClass('colorbox cboxElement');
            $(_w_gambol + ':hidden').removeClass('colorbox cboxElement');
        }
        let _w_gentry = $(_w_gambol + ':visible').length;
        $(_w_gambol).each((function () {
            let _w_trend = $(this).get(0);
            if (!_w_dwarf(_w_trend)) {
                if (_w_gentry <= _w_genre()._w_clamp()) return;
                let _w_lounge = $(this).find('img').get(0);
                _w_lounge && _w_lounge.src != _w_spell && (_w_lounge.src = _w_spell);
            } else if ($(this).is(':visible')) {
                let _w_lounge = $(this).find('img').get(0);
                if (_w_bucket()) {
                    _w_lounge && _w_lounge.src != _w_lounge.parentNode.href && (_w_lounge.src = _w_lounge.parentNode.href);
                } else {
                    _w_lounge && _w_lounge.src != _w_lounge.dataset.src && (_w_lounge.src = _w_lounge.dataset.src);
                }
            } else {
                $(this).removeClass('selected');
            }
        }));
    }), _w_ken);
    if (_w_frisk) {
        $('#image_amount').html(_w_relish($(_w_gambol).length, 6));
        $('#visible_amount').html(_w_relish($(_w_gambol + ':visible').length, 4));
        $('#select_amount').html(_w_relish($(_w_gambol + ':visible.selected').length, 4));
        if ($('#ext_main>.imageItem').length > 0) {
            $('#empty').remove();
            window._w_pleat = true;
        } else if (window._w_pleat) {
            $('#empty').length > 0 ? true : function () {
                $('<img />', {id: 'empty', src: './images/empty.svg'}).appendTo($('#ext_main'));
            }();
        }
        _w_prig();
        let $_w_oak = $('#ext_main');
        let _w_fern = window.innerHeight - $('#header').outerHeight();
        if ($_w_oak.outerHeight() < _w_fern) {
            let _w_gravel = $_w_oak.outerHeight() - $_w_oak.height();
            $_w_oak.css('min-height', _w_fern - _w_gravel);
        }
    }
}

function _w_prig() {
    $('#ext_main').css('margin-top', $('#header').height());
}

window.sortParam = {timeout: 512, lastExeTime: new Date, timer: null, updateStatics: false, delayAgain: true};

function _w_nectar(_w_sonnet) {
    _w_sprout(sortParam, (function () {
        let _w_bail = null;
        if (typeof _w_sonnet == 'string') {
            _w_bail = $(_w_sonnet).toArray();
        } else {
            _w_bail = _w_sonnet;
        }
        let _w_jolt = _w_genre()._w_valve();
        let _w_nil = (_w_jolt & 4) > 0;
        _w_bail.sort((function (a, b) {
            let _w_tint = 0;
            if (_w_nil) {
                _w_tint = b.dataset.size - a.dataset.size;
            } else {
                let _w_debate = a.refererSplitArray;
                let _w_idyll = b.refererSplitArray;
                if (a.dataset.serial && b.dataset.serial) {
                    _w_tint = a.dataset.serial - b.dataset.serial;
                } else if (_w_debate && _w_idyll && _w_debate > _w_idyll) {
                    _w_tint = -1;
                } else if (_w_debate && _w_idyll && _w_debate < _w_idyll) {
                    _w_tint = 1;
                }
            }
            if (_w_tint == 0) {
                return a.dataset.id - b.dataset.id;
            }
            return _w_tint;
        }));
        for (let i = 0; i < _w_bail.length; ++i) {
            _w_bail[i].parentNode.appendChild(_w_bail[i]);
        }
        _w_raffle(_w_sonnet, true, true);
    }), false);
}

function _w_vermin(_w_matrix, _w_curd) {
    if (_w_matrix && _w_matrix.data && _w_matrix.data.id) {
        let _w_speck = document.querySelector('a[data-id=\'' + _w_matrix.data.id + '\']');
        if (!_w_speck) return;
        const _w_gander = _w_matrix.data.hash;
        _w_speck.dataset.phash = _w_gander;
        if (!_w_curd && _w_girth) {
            _w_girth.storePhash(_w_speck.dataset.src, _w_gander);
        }
        const _w_mask = [];
        let _w_poster = false;
        const _w_brunt = _w_speck.dataset.serial;
        document.querySelectorAll('a.imageItem[data-phash]').forEach((_w_adobe => {
            if (_w_poster) return;
            if (_w_adobe == _w_speck) return;
            const _w_spoor = parseInt(_w_gander, 16);
            const _w_gust = parseInt(_w_adobe.dataset.phash, 16);
            let _w_query = ((_w_spoor >>> 0).toString(2).match(/1/g) || '').length;
            let _w_hem = ((_w_gust >>> 0).toString(2).match(/1/g) || '').length;
            const _w_hull = ((_w_spoor ^ _w_gust) >>> 0).toString(2);
            const _w_heyday = (_w_hull.match(/1/g) || '').length;
            if (_w_heyday > window._w_crayon) return;
            const _w_idiom = parseInt(_w_speck.dataset.size);
            const _w_hatch = _w_speck.dataset.src.length;
            const _w_streak = parseInt(_w_adobe.dataset.size);
            const _w_delta = _w_adobe.dataset.src.length;
            if (_w_streak > _w_idiom || _w_streak == _w_idiom && (_w_query > _w_hem || _w_hatch > _w_delta)) {
                console.log('去重(本体)：' + _w_speck.dataset.src);
                _w_speck.remove();
                _w_mask.splice(0);
                if (_w_adobe.dataset.serial > _w_brunt) {
                    _w_adobe.dataset.serial = _w_brunt;
                }
                _w_poster = true;
                return;
            } else {
                _w_mask.push(_w_adobe);
                if (_w_adobe.dataset.serial < _w_speck.dataset.serial) {
                    _w_speck.dataset.serial = _w_adobe.dataset.serial;
                }
            }
        }));
        if (!_w_poster) {
            _w_mask.forEach((item => {
                console.log('去重(元素)：' + item.dataset.src);
                item.remove();
            }));
        }
    }
}

function _w_woe(url) {
    if (!window.fileDownloadCounter) {
        window.fileDownloadCounter = 10001;
    }
    if (!window.urlSerialMapper) {
        window.urlSerialMapper = {};
    }
    if (!window.urlSerialMapper[url]) {
        window.urlSerialMapper[url] = window.fileDownloadCounter++;
    }
    return window.urlSerialMapper[url];
}

function _w_clamor(_w_kidney, _w_litter) {
    let _w_temper = _w_girth.getFetchEntry(_w_kidney);
    let _w_clown = function (_w_pod) {
        let _w_bud = _w_genre()._w_doyen() == 'jpg' ? 'image/jpeg' : 'image/png';
        blobUtil.imgSrcToBlob(_w_pod, _w_bud, 'Anonymous', 1).then((function (_w_dither) {
            if (_w_hyphen(_w_litter)) {
                let _w_hue = window.URL.createObjectURL(_w_dither);
                if (_w_temper) {
                    _w_temper._w_rubble = _w_hue;
                }
                _w_litter(_w_hue);
            }
        }));
    };
    if (_w_temper && _w_temper._w_rubble) {
        _w_litter(_w_temper._w_rubble);
    } else if (_w_temper && _w_temper._w_stamp) {
        _w_clown(_w_temper._w_stamp);
    } else {
        _w_clown(_w_kidney);
    }
}

function _w_clam(_w_bower) {
    if (_w_bower) {
        return _w_bower.replace(/^[_\s\.]+/gi, '').replace(/[_\s\.]+$/gi, '').replace(/([\/\\]+)[_\s\.]+/gi, '$1').replace(/[_\s\.]+([\/\\]+)/gi, '$1').replace(/[\\\/]+/gi, '/').replace(/^\/+/gi, '');
    }
    return _w_bower;
}

function _w_bonnet(_w_gutter, _w_ulcer = false) {
    if (_w_ulcer) {
        _w_gutter = _w_gutter.replace(/[\u200B-\u200D\uFEFF\x00-\x1F\x7F\x80-\x9F\n\r\f\s\t\v\\:\*\|\?'"<>%&^`\!\$\~|]+/gi, '_');
    } else {
        _w_gutter = _w_gutter.replace(/[\u200B-\u200D\uFEFF\x00-\x1F\x7F\x80-\x9F\n\r\f\s\t\v\\:\*\|\?'"<>%&^`\!\$\~|\/]+/gi, '_');
    }
    return _w_clam(_w_gutter);
}

function _w_jigsaw(_w_cord, _w_cleft, _w_spate, _w_hulk) {
    let _w_sprig = function (_w_shard) {
        function _w_dictum(_w_weasel) {
            chrome.downloads.download({
                url: _w_weasel,
                filename: _w_bonnet(_w_shard.filename, true),
                saveAs: false,
                conflictAction: 'uniquify'
            });
        }

        if (_w_genre()._w_craft(_w_shard.suffix)) {
            _w_clamor(_w_shard.src, _w_dictum);
        } else {
            _w_dictum(_w_shard.url);
        }
    };
    if (_w_spate == null) _w_spate = _w_sprig;
    let _w_combat = _w_anvil;
    if (!_w_combat || _w_combat.length == 0) folder = (new Date).toJSON();
    _w_combat = _w_bonnet(_w_combat);
    let _w_acuity = _w_combat.substr(0, 128);
    _w_cord.forEach((item => {
        item.order_serial = _w_woe(item.url);
        if (!item.serial) {
            if (item.origin_serial) {
                item.serial = item.origin_serial;
            } else {
                item.serial = item.order_serial;
            }
        }
        let _w_trophy = _w_cleft._w_trophy;
        let _w_yacht = _w_recipe(item.referer, _w_acuity);
        let _w_comity = _w_bonnet(_w_yacht, false).substr(0, 128);
        let _w_shred = _w_lyric(item.referer);
        _w_trophy = _w_trophy.replace(/\{page.title\}/gi, _w_comity).replace(/\{page.host\}/gi, _w_shred).replace(/\{origin.title\}/gi, _w_acuity).replace(/\{YYYY-MM-DD\}/gi, _w_accord.YYYYMMDD).replace(/\{HH-mm-ss\}/gi, _w_accord.HHmmss).replace(/\{extractor_hash\}/gi, _w_bump);
        _w_trophy = _w_bonnet(_w_trophy, true);
        let _w_gutter = item.filename;
        let _w_gist = item.suffix;
        let _w_balk = _w_cleft._w_balk;
        _w_gutter = _w_balk.replace(/\{filename\}/gi, _w_gutter).replace(/\{no.10001\}/gi, item.order_serial).replace(/\{origin_serial\}/gi, item.serial).replace(/\{page.title\}/gi, _w_comity).replace(/\{origin.title\}/gi, _w_acuity).replace(/\{page.host\}/gi, _w_shred).replace(/\{YYYY-MM-DD\}/gi, _w_accord.YYYYMMDD).replace(/\{HH-mm-ss\}/gi, _w_accord.HHmmss).replace(/\{extractor_hash\}/gi, _w_bump);
        _w_gutter = _w_bonnet(_w_gutter) + _w_gist;
        _w_spate({
            url: item.url,
            src: item.src,
            referer: item.referer,
            filename: _w_bonnet(_w_trophy + '/', true) + _w_gutter,
            suffix: item.suffix
        });
    }));
    if (_w_hulk) _w_hulk();
}

function _w_limbo(_w_awe) {
    let _w_cleft = {
        _w_trophy: localStorage['filePath_format'] ? localStorage['filePath_format'] : _w_wink._w_peril[1],
        _w_balk: localStorage['filename_format'] ? localStorage['filename_format'] : _w_wink._w_folder[1]
    };
    _w_jigsaw(_w_awe, _w_cleft, null, null);
}

function _w_plumb(_w_awe, _w_boor) {
    if ($('.modal').is(':visible') || $('.modal').length > 1) {
        return;
    } else if (_w_awe == undefined || _w_awe.length == 0) {
        alert(_w_tango('_w_split'));
        return;
    }
    let $_w_amble = $('<div />', {id: 'download_confirm_dlg', class: 'modal fade', role: 'dialog'});
    let $_w_strut = $('<div />', {class: 'modal-dialog modal-xl'});
    let $_w_mutton = $('<div />', {class: 'modal-content'});
    let $_w_sow = $('<div />', {class: 'modal-header'});
    let $_w_banter = $('<h4 />', {class: 'modal-title', text: _w_tango('_w_pirate')});
    $_w_sow.append($_w_banter);
    $_w_mutton.append($_w_sow);
    let $_w_jazz = $('<div />', {class: 'modal-body'});
    $_w_jazz.append(_w_tango('_w_brawl'));
    let $_w_dose = $('<form />', {class: 'form-horizontal'});
    $_w_dose.append($('<h4 />', {text: _w_tango('_w_pest')}));
    let $_w_code = $('<div />', {class: 'input-group'});
    let _w_cleft = {_w_trophy: '', _w_balk: ''};
    let $_w_plaza = $('<input />', {
        class: 'form-control',
        type: 'text',
        value: localStorage['filePath_format'] ? localStorage['filePath_format'] : _w_wink._w_peril[1]
    }).on('change input', (function () {
        localStorage['filePath_format'] = $(this).prop('value');
        _w_cleft['_w_trophy'] = localStorage['filePath_format'];
    })).trigger('change');
    $_w_code.append($_w_plaza);
    let $_w_twinge = $('<div />', {class: 'input-group-btn'});
    $_w_twinge.append($('<button />', {
        type: 'button',
        class: 'btn btn-default dropdown-toggle',
        'data-toggle': 'dropdown'
    }).append($('<span />', {class: 'caret'})));
    let $_w_brooch = $('<ul />', {class: 'dropdown-menu dropdown-menu-right'});
    _w_wink._w_peril.forEach((_w_duct => {
        let $_w_dike = $('<a />', {href: '#', text: _w_duct});
        $_w_dike.on('click', (function () {
            $_w_plaza.prop('value', $(this).text()).trigger('change');
        }));
        $_w_brooch.append($('<li />').append($_w_dike));
    }));
    $_w_twinge.append($_w_brooch);
    $_w_code.append($_w_twinge);
    $_w_code.append($('<span />', {class: 'input-group-addon', text: '/'}));
    let $_w_blast = $('<input />', {
        type: 'text',
        class: 'form-control',
        value: localStorage['filename_format'] ? localStorage['filename_format'] : _w_wink._w_folder[1]
    }).on('change input', (function () {
        localStorage['filename_format'] = $(this).prop('value');
        _w_cleft['_w_balk'] = localStorage['filename_format'];
    })).trigger('change');
    $_w_code.append($_w_blast);
    let $_w_gab = $('<div />', {class: 'input-group-btn'});
    $_w_gab.append($('<button />', {
        type: 'button',
        class: 'btn btn-default dropdown-toggle',
        'data-toggle': 'dropdown'
    }).append($('<span />', {class: 'caret'})));
    let $_w_cygnet = $('<ul />', {class: 'dropdown-menu dropdown-menu-right'});
    _w_wink._w_folder.forEach((_w_breach => {
        let $_w_leash = $('<a />', {href: '#', text: _w_breach});
        $_w_leash.on('click', (function () {
            $_w_blast.prop('value', $(this).text()).trigger('change');
        }));
        $_w_cygnet.append($('<li />').append($_w_leash));
    }));
    $_w_gab.append($_w_cygnet);
    $_w_code.append($_w_gab);
    $_w_code.append($('<span />', {class: 'input-group-addon', text: '.{suffix}'}));
    $_w_dose.append($('<div />', {class: 'form-group'}).append($('<div />', {class: 'col-md-12 col-sm-12'}).append($_w_code)));
    $_w_jazz.append($_w_dose);
    $_w_mutton.append($_w_jazz);
    let $_w_slaver = $('<div />', {class: 'modal-footer'});
    let $_w_lesion = $('<button />', {class: 'btn btn-default unrelative_download', text: _w_tango('_w_thatch')});
    $_w_lesion.prepend($('<span />', {class: 'fa fa-terminal fa-lg'}));
    $_w_slaver.append($_w_lesion);
    let $_w_alert = $('<button />', {class: 'btn btn-default unrelative_download', text: _w_tango('_w_omelet')});
    $_w_alert.prepend($('<span />', {class: 'glyphicon glyphicon-wrench'}));
    $_w_slaver.append($_w_alert);
    let $_w_batch = $('<input />', {type: 'checkbox', name: 'continuousSwitch'});
    $_w_slaver.append($('<span />', {class: 'continuousSwitchContainer'}).append($_w_batch));
    $_w_batch.bootstrapSwitch({
        labelText: _w_tango('_w_girth'), labelWidth: 100, onSwitchChange: function (_, state) {
            if (state == true) {
                $('.unrelative_download').hide();
            } else {
                $('.unrelative_download').show();
            }
        }
    });
    let $_w_buckle = $('<button />', {class: 'btn btn-default', text: _w_tango('_w_reaper')});
    $_w_buckle.prepend($('<span />', {class: 'glyphicon glyphicon-download'}));
    $_w_slaver.append($_w_buckle);
    let $_w_ballot = $('<button />', {class: 'btn btn-default', 'data-dismiss': 'modal', text: _w_tango('_w_die')});
    $_w_ballot.prepend($('<span />', {class: 'glyphicon glyphicon-remove'}));
    $_w_slaver.append($_w_ballot);
    $_w_mutton.append($_w_slaver);
    $_w_strut.append($_w_mutton);
    $_w_amble.append($_w_strut);
    $_w_amble.modal({backdrop: 'static', keyboard: false}).on('hidden.bs.modal', (function () {
        $(this).remove();
    })).on('shown.bs.modal', (function () {
        if ($('.modal:visible').length > 1) {
            $('.modal:visible:not(:first)').modal('hide');
        }
    }));
    $_w_lesion.on('click', (function () {
        let $_w_canard = $_w_dose.find('#curlScriptContainer');
        let $_w_apogee = $_w_dose.find('#scriptTypeOptionCMD');
        let $_w_riddle = $_w_dose.find('#scriptTypeOptionShell');
        let _w_apogee = '';
        let _w_riddle = '';
        let _w_penury = navigator.platform.toLocaleLowerCase().indexOf('win') == 0;
        if ($_w_canard.length == 0) {
            let $_w_coven = $('<h4 />', {text: _w_tango('_w_patent')});
            $_w_apogee = $('<div />', {
                id: 'scriptTypeOptionCMD',
                class: 'btn btn-default ' + (_w_penury ? 'btn-primary' : ''),
                text: 'CMD'
            });
            $_w_riddle = $('<div />', {
                id: 'scriptTypeOptionShell',
                class: 'btn btn-default ' + (_w_penury ? '' : 'btn-primary'),
                text: 'Shell'
            });
            $_w_coven.append($('<div />', {
                class: 'btn-group btn-group-xs btn-group-vertical',
                'data-toggle': 'buttons'
            }).append($_w_apogee).append($_w_riddle));
            $_w_canard = $('<textarea />', {id: 'curlScriptContainer', rows: 16, class: 'form-control'});
            $_w_dose.append($('<div />', {class: 'unrelative_download'}).append($_w_coven).append($('<div />', {class: 'form-group'}).append($('<div />', {class: 'col-md-12 col-sm-12'}).append($_w_canard))));
            $($_w_apogee).on('click', (function () {
                $(this).addClass('btn-primary');
                $_w_riddle.removeClass('btn-primary');
                $_w_canard.prop('value', _w_apogee);
            }));
            $($_w_riddle).on('click', (function () {
                $(this).addClass('btn-primary');
                $_w_apogee.removeClass('btn-primary');
                $_w_canard.prop('value', _w_riddle);
            }));
        } else {
            _w_apogee = '';
            _w_riddle = '';
            $_w_canard.prop('value', '');
        }
        _w_jigsaw(_w_awe, _w_cleft, (function (_w_shard) {
            if (!_w_breed(_w_shard.src)) return;
            let _w_feat = encodeURI(decodeURI(_w_shard.referer));
            let _w_cameo = navigator.languages ? navigator.languages.toString() : navigator.language.toString();
            let _w_maroon = navigator.userAgent;
            _w_apogee += '\n';
            _w_apogee += 'curl -L "' + _w_shard.src + '" -o "' + _w_shard.filename.replace(/\//g, '\\') + '" --create-dirs -H "Accept: image/*,*/*;q=0.8" -H "Connection: keep-alive" -H "Accept-Encoding: gzip, deflate, sdch" -H "Referer: ' + _w_feat + '" -H "Accept-Language: ' + _w_cameo + ';q=0.8" -H "User-Agent: ' + _w_maroon + '" -k --retry 4';
            _w_apogee += '\n';
            _w_riddle += '\n';
            _w_riddle += 'curl -L "' + _w_shard.src + '" -o "' + _w_shard.filename.replace(/\//g, '/') + '" --create-dirs -H "Accept: image/*,*/*;q=0.8" -H "Connection: keep-alive" -H "Accept-Encoding: gzip, deflate, sdch" -H "Referer: ' + _w_feat + '" -H "Accept-Language: ' + _w_cameo + ';q=0.8" -H "User-Agent: ' + _w_maroon + '" -k --retry 4';
            _w_riddle += '\n';
            $_w_canard.prop('value', $_w_apogee.hasClass('btn-primary') ? _w_apogee : _w_riddle);
        }), null);
    }));
    $_w_alert.on('click', (function () {
        chrome.tabs.create({url: 'chrome://settings/?search=' + _w_tango('_w_sill')});
    }));
    $_w_buckle.on('click', (function () {
        let _w_lust = $_w_batch.is(':checked');
        if (_w_lust) {
            $(this).prop('disabled', true);
            $_w_dose.find('input,select, button').prop('disabled', true);
            $_w_batch.bootstrapSwitch('disabled', true);
        }
        if (_w_lust) {
            (function continueDownloadFun(_w_awe) {
                _w_jigsaw(_w_awe, _w_cleft, null, (function () {
                    if ($_w_amble.is(':visible')) {
                        let _w_wig = _w_boor();
                        setTimeout((() => {
                            continueDownloadFun(_w_wig);
                        }), 2e3);
                    }
                }));
            })(_w_awe);
            chrome.notifications.create('', {
                type: 'basic',
                iconUrl: './images/icon512.png',
                title: _w_tango('_w_augur'),
                message: _w_tango('_w_grace')
            });
        } else {
            _w_jigsaw(_w_awe, _w_cleft, null, null);
            $_w_amble.modal('hide');
            chrome.notifications.create('', {
                type: 'basic',
                iconUrl: './images/icon512.png',
                title: _w_tango('_w_simile'),
                message: _w_tango('_w_lucre')
            });
        }
    }));
    $_w_ballot.on('click', (function () {
    }));
    if (!chrome.downloads || !chrome.downloads.download) {
        $_w_alert.attr('disabled', true);
        $_w_buckle.attr('disabled', true);
        chrome.notifications.create('', {
            type: 'basic',
            iconUrl: './images/icon512.png',
            title: _w_tango('_w_quaver'),
            message: _w_tango('_w_amble')
        }, (function (notificationId) {
        }));
    }
}

function _w_sprout(_w_dunce, _w_pundit, _w_ken) {
    function execMe() {
        _w_dunce.lastExeTime = new Date;
        _w_pundit();
    }

    _w_dunce.timer && clearTimeout(_w_dunce.timer);
    if ((new Date).getTime() - _w_dunce.lastExeTime.getTime() > _w_dunce.timeout) {
        execMe();
    } else {
        _w_dunce.timer = setTimeout(execMe, _w_dunce.timeout);
        (_w_dunce.delayAgain || _w_ken) && (_w_dunce.lastExeTime = new Date);
    }
}

function _w_sheath(_w_bench, _w_fleck) {
    for (let i = 0; i < _w_bench.length; ++i) {
        let _w_nadir = _w_bench[i];
        let _w_halo = _w_nadir.split('x');
        _w_bench[_w_nadir] = {width: _w_halo[0], height: _w_halo[1]};
        let _w_sibyl = _w_bench[_w_nadir].height + 'x' + _w_bench[_w_nadir].width;
        if (_w_fleck && _w_bench.indexOf(_w_sibyl) == -1) {
            _w_bench.push(_w_sibyl);
            _w_bench[_w_sibyl] = {width: _w_bench[_w_nadir].height, height: _w_bench[_w_nadir].width};
        }
    }
    return _w_ennui(_w_bench);
}

function _w_ennui(_w_bench) {
    _w_bench.sort((function (a, b) {
        let _w_brat = _w_bench[a];
        let _w_rote = _w_bench[b];
        return _w_brat.width - _w_rote.width > 0 ? 1 : _w_brat.width - _w_rote.width < 0 ? -1 : _w_brat.height - _w_rote.height > 0 ? 1 : _w_brat.height - _w_rote.height < 0 ? -1 : 0;
    }));
    return _w_bench;
}

function _w_foul() {
    let _w_beacon = _w_genre()._w_foil();
    let _w_norm = _w_reed();
    _w_beacon = _w_norm + _w_crab(_w_norm, _w_gulch() + _w_beacon);
    return _w_beacon;
}

function _w_crab(_w_norm, _w_heed) {
    let _w_gleam = _w_norm.indexOf('0') % 16 + 1;
    for (; _w_gleam > 0; --_w_gleam) {
        _w_heed = _w_oath(_w_norm, _w_heed);
    }
    return _w_heed;
}

function _w_agony(_w_norm, _w_heed) {
    let _w_gleam = _w_norm.indexOf('0') % 16 + 1;
    for (; _w_gleam > 0; --_w_gleam) {
        _w_heed = _w_gear(_w_norm, _w_heed);
    }
    return _w_heed;
}

function _w_oath(_w_norm, _w_heed) {
    let _w_panic = _w_norm.toLowerCase().split('');
    let _w_hone = _w_heed.toLowerCase().split('');
    let _w_pauper = _w_flange.toLowerCase().split('');
    let _w_fag = new Array;
    for (let i = 0; i < _w_hone.length; ++i) {
        _w_fag.push(_w_panic[_w_pauper.indexOf(_w_hone[i])]);
    }
    return _w_fag.join('');
}

function _w_gear(_w_norm, _w_heed) {
    let _w_panic = _w_norm.toLowerCase().split('');
    let _w_hone = _w_heed.toLowerCase().split('');
    let _w_pauper = _w_flange.toLowerCase().split('');
    let _w_fag = new Array;
    for (let i = 0; i < _w_hone.length; ++i) {
        _w_fag.push(_w_pauper[_w_panic.indexOf(_w_hone[i])]);
    }
    return _w_fag.join('');
}

function _w_pelt(l) {
    if (isNaN(l)) {
        l = 0;
    }
    return parseInt(Math.random() * l);
}

function _w_ire(l) {
    let _w_sap = _w_flange;
    let _w_nicest = '';
    for (let i = 0; i < l; ++i) {
        _w_nicest += _w_sap.charAt(Math.ceil(Math.random() * 1e8) % _w_sap.length);
    }
    return _w_nicest;
}

function _w_reed() {
    let _w_sap = _w_flange.split('');
    let _w_hold = '';
    while (_w_sap.length > 0) {
        let _w_dynamo = Math.ceil(Math.random() * 1e8) % _w_sap.length;
        _w_hold += _w_sap.splice(_w_dynamo, 1)[0];
    }
    return _w_hold;
}

function _w_condor(l) {
    let _w_sap = _w_sway;
    let _w_nicest = '';
    for (let i = 0; i < l; ++i) {
        _w_nicest += _w_sap.charAt(Math.ceil(Math.random() * 1e8) % _w_sap.length);
    }
    return _w_nicest;
}

function _w_fang(l) {
    let _w_sap = _w_cargo;
    let _w_nicest = '';
    for (let i = 0; i < l; ++i) {
        _w_nicest += _w_sap.charAt(Math.ceil(Math.random() * 1e8) % _w_sap.length);
    }
    return _w_nicest;
}

Number.parseInt = function (data) {
    return parseInt(data);
};

function _w_flux(_w_entity, _w_defile) {
    if (!_w_defile || _w_defile == '') {
        if (!_w_entity || _w_entity == '') {
            return '';
        } else {
            return _w_entity;
        }
    } else if (_w_breed(_w_defile)) {
        let _w_pod = new URL(_w_defile);
        return _w_pod.href;
    }
    let _w_intent = null;
    try {
        _w_intent = new URL(_w_entity);
    } catch (exception) {
        return _w_defile;
    }
    if (_w_defile.startsWith('//')) {
        return _w_intent.protocol + _w_defile;
    }
    let _w_collar = '';
    let _w_fidget = '';
    _w_collar += _w_intent.protocol + '//';
    if (_w_intent.username) {
        _w_collar += _w_intent.username;
        if (_w_intent.password) {
            _w_collar += ':' + _w_intent.password;
        }
        _w_collar += '@';
    }
    _w_collar += _w_intent.host;
    _w_fidget = _w_collar + _w_intent.pathname;
    if (_w_fidget[_w_fidget.length - 1] != '/') {
        _w_fidget = _w_fidget.substring(0, _w_fidget.lastIndexOf('/') + 1);
    }
    if (_w_defile[0] == '/') {
        let _w_pod = new URL(_w_collar + _w_defile);
        return _w_pod.href;
    } else {
        let _w_pod = new URL(_w_fidget + _w_defile);
        return _w_pod.href;
    }
}

function _w_rue(svgTag) {
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgTag)}`;
}

function _w_deceit() {
    return '0.' + ((new Date).getTime() / 1e3 / 3600 / 24 / 7).toFixed(0);
}

function _w_hunch(_w_pod, _w_tumult) {
    if (!_w_pod) {
        return '';
    } else if (_w_pod.indexOf('data:') == 0) {
        return _w_pod;
    }
    if (_w_pod.indexOf('#') > 0) {
        _w_pod = _w_pod.substring(0, _w_pod.indexOf('#'));
    }
    if (!_w_tumult || _w_tumult.trim() == '') _w_tumult = Math.random();
    if (_w_pod.indexOf('?') > 0) {
        _w_pod += '&' + _w_tumult;
    } else {
        _w_pod += '?' + _w_tumult;
    }
    return _w_pod;
}

function _w_cougar(url, action) {
    let _w_parody = {type: '_w_chore', url: url, action: action, createNewTab: true};
    chrome.runtime.sendMessage(_w_gulch(), _w_parody);
    return _w_parody;
}

function _w_leeway() {
    chrome.runtime.sendMessage(chrome.runtime.id, {type: '_w_crest'});
}

function _w_climax() {
    let _w_cult = ['en-US', 'zh-CN', 'zh-TW'];
    let _w_signal = navigator.language;
    if (_w_cult.indexOf(_w_signal) < 0) _w_signal = _w_cult[0];
    return _w_signal;
}

function _w_dandy(url) {
    let _w_rival = 'https://www.google.com/searchbyimage?hl=' + _w_climax() + '&image_url=' + encodeURIComponent(decodeURI(url));
    return _w_cougar(_w_rival);
}

function _w_den(url) {
    let _w_rival = 'https://www.google.com/searchbyimage?hl=' + _w_climax() + '&image_url=' + encodeURIComponent(decodeURI(url));
    return _w_cougar(_w_rival, '_w_crux');
}

function _w_venom(url) {
    let _w_rival = 'https://www.google.com/searchbyimage?hl=' + _w_climax() + '&image_url=' + encodeURIComponent(decodeURI(url));
    return _w_cougar(_w_rival, '_w_sod');
}

function _w_coop(keyword) {
    let _w_rival = 'https://www.google.com/search?tbm=isch&hl=' + navigator.language + '&q=' + encodeURIComponent(keyword);
    return _w_cougar(_w_rival, '_w_shoddy');
}

function _w_apex(keword) {
    let _w_poseur = 'http://image.baidu.com/search/index?tn=baiduimage&word=' + encodeURIComponent(keword);
    return _w_cougar(_w_poseur, '_w_shoddy');
}

function _w_welter(ajaxParam, _w_verse) {
    let _w_foyer = function (data, status, xhr) {
        _w_verse(data, status, xhr);
    };
    if (window.location.protocol == 'http:' || window.location.protocol == 'https:') {
        _w_warp(ajaxParam, _w_foyer);
    } else {
        if (!window.funExecutePool) {
            window.funExecutePool = _w_fad(4);
        }
        window.funExecutePool.addTask((function (beginFun, endFun) {
            beginFun();
            $.ajax(ajaxParam).always(endFun).always(_w_foyer);
        }));
    }
}

function _w_warp(requestParam, callbackFun) {
    if (!requestParam || !requestParam.url) {
        callbackFun();
        return;
    }
    requestParam.url = _w_flux(window.location.href, requestParam.url);
    let _w_menial = _w_ire(64);
    if (!window._w_swarm) {
        chrome.runtime.onMessage.addListener((function _w_prank(message, sender, callback) {
            if (message && message.type == '_w_log') {
                if (message.status == 'success') {
                    message.xhr.getResponseHeader = function (headerName) {
                        return message.xhr.responseHeaders[headerName];
                    };
                }
                if (_w_pith[message.requestHash]) {
                    let _w_cape = _w_pith[message.requestHash];
                    delete _w_pith[message.requestHash];
                    _w_cape = _w_cape(message.data, message.status, message.xhr);
                }
            }
        }));
        window._w_swarm = true;
    }
    _w_pith[_w_menial] = callbackFun;
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: '_w_simian',
        requestParam: requestParam,
        requestHash: _w_menial
    });
}

function _w_muscle(url) {
    try {
        let _w_pod = new URL(_w_pod);
        if (_w_pod.href.startsWith(_w_legacy)) {
            return false;
        } else if (_w_pod.hostname.endsWith('cxyz.info') || _w_pod.hostname.endsWith('pullywood.com')) {
            return true;
        } else {
            return false;
        }
    } catch (exception) {
        return false;
    }
}

function _w_score(url) {
    try {
        let _w_pod = new URL(_w_pod);
        if (_w_pod.host == chrome.runtime.id) {
            return true;
        } else {
            return false;
        }
    } catch (exception) {
        return false;
    }
}

function _w_phial(url) {
    if (url.indexOf('#') > 0) url = url.substring(0, url.indexOf('#'));
    if (/^.*?([\?&]0\.\d{4,6})+$/.test(url)) {
        return url.replace(/([\?&]0\.\d{4,6})+$/, '');
    } else {
        return url;
    }
}

window._w_tenor = function () {
    let _w_tussle = false;
    if (typeof chrome != 'undefined' && typeof chrome.extension != 'undefined' && typeof chrome.extension.isAllowedFileSchemeAccess != 'undefined') {
        chrome.extension.isAllowedFileSchemeAccess((function (isAllowed) {
            _w_tussle = isAllowed;
        }));
    }
    return function () {
        return _w_tussle;
    };
}();

function _w_scurvy(url) {
    return new URL(url).pathname == '/multiUrlExtractor.html' || new URL(url).pathname == '/blank.html';
}

function _w_breed(url) {
    let _w_spin = ['http:', 'https:', 'ftp:', 'data:', 'about:'];
    let _w_donor = 'file:';
    if (_w_tenor() || _w_genre && _w_genre() && _w_genre()._w_tenor()) {
        _w_spin.push(_w_donor);
    }
    try {
        url = new URL(url);
        return _w_spin.indexOf(url.protocol) >= 0;
    } catch (exception) {
        return false;
    }
}

function _w_mettle(url) {
    if (!url || url == '' || url.startsWith('data:')) return url;
    if (url.indexOf('#') >= 0) url = url.substring(0, url.indexOf('#'));
    return url.trim();
}

chrome.runtime.onMessage.addListener((function (message, sender, callback) {
    if (message && message.type == '_w_nymph') {
        _w_nymph(message.text, true);
    }
}));

function _w_nymph(text, showTitle) {
    let _w_squash = '_w_squash';
    let _w_jade = {};
    _w_jade.scrollX = window.scrollX;
    _w_jade.scrollY = window.scrollY;
    let $_w_ditch = $('<link />', {
        rel: 'stylesheet',
        type: 'text/css',
        href: chrome.extension.getURL('libs/bootstrap/3.4.1/css/bootstrap.min.css')
    });
    $('head').append($_w_ditch);
    let $_w_awl = $('#' + _w_squash);
    if ($_w_awl.length > 0) $_w_awl.modal('hide');
    $_w_awl = $('<div />', {id: _w_squash, class: 'modal fade', style: 'z-index:999999999', role: 'dialog'});
    let $_w_strut = $('<div />', {class: 'modal-dialog'});
    let $_w_mutton = $('<div />', {class: 'modal-content'});
    let $_w_sow = $('<div />', {
        class: 'modal-header',
        style: 'overflow:hidden; word-wrap: break-word; word-break: break-all;'
    });
    let $_w_flora = $('<button />', {class: 'close', 'data-dismiss': 'modal', text: 'x'});
    $_w_sow.append($_w_flora);
    if (showTitle) {
        let $_w_banter = $('<h4 />', {
            class: 'modal-title',
            style: 'overflow:hidden; word-wrap: break-word; word-break: break-all;',
            text: text.trim()
        });
        $_w_sow.append($_w_banter);
    }
    $_w_mutton.append($_w_sow);
    let $_w_jazz = $('<div />', {
        class: 'modal-body',
        style: 'overflow:hidden; word-wrap: break-word; word-break: break-all;'
    });
    $_w_mutton.append($_w_jazz);
    let $_w_slaver = $('<div />', {
        class: 'modal-footer',
        style: 'overflow:hidden; word-wrap: break-word; word-break: break-all;'
    });
    $_w_slaver.append('Generated By <a target="_pullywood_" href="https://www.pullywood.com/ImageAssistant/">' + _w_tango('_w_fusion') + '</a>');
    $_w_mutton.append($_w_slaver);
    $_w_strut.append($_w_mutton);
    $_w_awl.append($_w_strut);
    $_w_awl.modal({keyboard: true}).on('shown.bs.modal', (function (e) {
        function dynamicSizeQRCode(qrCodeSize) {
            $_w_jazz.html('');
            if (!qrCodeSize) {
                let _w_scamp = $_w_jazz.width() - 30;
                let _w_gnat = $_w_jazz[0].getBoundingClientRect ? window.innerHeight - $_w_jazz[0].getBoundingClientRect().top - 30 : _w_scamp;
                qrCodeSize = _w_scamp > _w_gnat ? _w_gnat : _w_scamp;
            }
            let _w_girdle = null;
            let _w_pullet = [QRCode.CorrectLevel.L, QRCode.CorrectLevel.M, QRCode.CorrectLevel.Q, QRCode.CorrectLevel.H];
            while (!_w_girdle && _w_pullet.length > 0) {
                try {
                    let _w_thorn = _w_pullet.pop();
                    _w_girdle = new QRCode($_w_jazz.get(0), {
                        text: text.trim(),
                        width: qrCodeSize,
                        height: qrCodeSize,
                        colorDark: '#000000',
                        colorLight: '#ffffff',
                        correctLevel: _w_thorn
                    });
                } catch (exception) {
                    $_w_jazz.html('');
                }
            }
            _w_girdle = undefined;
        }

        $(window).on('resize', (function () {
            dynamicSizeQRCode();
        })).resize();
    })).on('hidden.bs.modal', (function (e) {
        $_w_ditch.remove();
        $(this).remove();
        window.scrollTo(_w_jade.scrollX, _w_jade.scrollY);
    }));
}

function _w_splint(_w_suture, _w_whit, _w_arroyo, _w_stake) {
    let _w_stanza = document.createElement('div');
    let _w_girdle = null;
    let _w_pullet = [QRCode.CorrectLevel.L, QRCode.CorrectLevel.M, QRCode.CorrectLevel.Q, QRCode.CorrectLevel.H];
    while (!_w_girdle && _w_pullet.length > 0) {
        try {
            let _w_thorn = _w_pullet.pop();
            _w_girdle = new QRCode(_w_stanza, {
                text: _w_suture.trim(),
                width: _w_whit,
                height: _w_whit,
                colorDark: _w_arroyo,
                colorLight: _w_stake,
                correctLevel: _w_thorn
            });
        } catch (exception) {
        }
    }
    _w_girdle = undefined;
    let _w_hassle = _w_stanza.getElementsByTagName('img');
    if (_w_hassle && _w_hassle.length > 0) {
        return _w_hassle[0];
    }
}

function _w_relish(_w_graft, _w_whelp) {
    let _w_puddle = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    if (typeof _w_graft == 'undefined' || typeof _w_whelp == 'undefined' || isNaN(_w_whelp)) return '';
    _w_whelp = Number.parseInt(_w_whelp);
    if (_w_whelp > 128) _w_whelp = 128;
    _w_graft = _w_graft.toString();
    if (_w_graft.length < _w_whelp) {
        _w_whelp -= _w_graft.length;
        _w_graft = _w_puddle.substr(0, _w_whelp) + _w_graft;
    }
    return _w_graft;
}

function _w_lobby(_w_slough) {
    return String(_w_slough).replace(/[&<>"'\/]/g, (function (s) {
        return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;', '/': '&#x2F;'}[s];
    }));
}

function _w_crutch(string) {
    return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function _w_toil(url) {
    if (!url) {
        return true;
    } else if (url.indexOf(_w_logjam) == 0 || url.indexOf(_w_logjam.replace('http://', 'https://')) == 0) {
        return true;
    } else if (url.match(/^https?:\/\/(img|image|)\d*\.cxyz\.info\/.*/i)) {
        return true;
    }
    return false;
}

function _w_levy() {
    window.alert = function (alert) {
        console.log('window.alert: ' + alert);
    };
    window.confirm = function (confirm) {
        console.log('window.confirm: ' + confirm, ', return true');
        return true;
    };
    window.prompt = function (prompt) {
        console.log('window.prompt: ' + prompt, ', return ""');
        return '';
    };
}

function _w_pastor(_w_aspen = 100, checkVisible = false) {
    if (typeof window._w_vim == 'undefined') {
        window._w_vim = true;
        setInterval((function () {
            if (!window._w_pagan) {
                window._w_pagan = 0;
            }
            let _w_import = window.innerHeight > 100 ? window.innerHeight : 100;
            if (window.pageYOffset - window._w_pagan >= _w_import / 2) {
                chrome.runtime.sendMessage(_w_gulch(), {type: '_w_jest'});
            }
            window._w_pagan = window.pageYOffset;
        }), 50);
        let _w_timbre = 8;
        setInterval((function () {
            if (checkVisible && document.hidden) return;
            chrome.runtime.sendMessage(_w_gulch(), {type: '_w_hermit'}, (function (reqNum) {
                if (reqNum < _w_timbre) {
                    window.scrollBy(0, window.innerHeight);
                }
            }));
        }), _w_aspen);
    }
}

function _w_bout() {
    let _w_hub = {};
    return {
        add: function (item) {
            _w_hub[item] = true;
        }, has: function (item) {
            if (_w_hub[item]) {
                return true;
            } else {
                return false;
            }
        }, size: function () {
            return Object.keys(_w_hub).length;
        }
    };
}

function _w_lyric(url) {
    let _w_sting = '';
    try {
        _w_sting = new URL(url).host;
    } catch (exception) {
    }
    return _w_sting;
}

function _w_raisin(_w_aspen, _w_tremor) {
    let _w_bale = {};
    let _w_eddy = _w_tremor;
    let _w_guile = {};
    let _w_pedant = function (host, inTime, outOfTime) {
        if (typeof _w_guile[host] == 'undefined') {
            _w_guile[host] = [0, 0];
        }
        inTime && _w_guile[host][0]++;
        outOfTime && _w_guile[host][1]++;
    };
    let _w_hush = function (host) {
        if (_w_guile[host] && _w_guile[host][0] == 0 && _w_guile[host][1] >= _w_eddy) {
            return true;
        } else {
            return false;
        }
    };
    return {
        setImgSrc: function (img, src, forceFetch = false) {
            let _w_sting = _w_lyric(src);
            let _w_grotto = false;
            if (!_w_bale[src]) _w_bale[src] = {};
            let _w_temper = _w_bale[src];
            let _w_stamp = _w_temper._w_stamp;
            if (src && (forceFetch || !_w_stamp)) {
                let _w_forage = new AbortController;
                let _w_martyr = _w_forage.signal;
                let _w_scar = setTimeout((function () {
                    _w_pedant(false, true);
                    _w_grotto = true;
                    _w_forage.abort();
                }), _w_aspen);
                (_w_slosh ? _w_genre().fetch : fetch)(src, {_w_martyr: _w_martyr}).then((resp => {
                    _w_temper._w_icicle = resp.status;
                    if (resp.headers) {
                        let _w_maize = resp.headers.get('content-disposition');
                        if (_w_maize) {
                            let match = _w_maize.match(/filename\=['"]?([^'"]+)['"]?;/i);
                            let _w_gutter = match ? decodeURIComponent(match[1]) : null;
                            _w_temper._w_gutter = _w_gutter;
                        }
                    }
                    return resp.blob();
                })).then((function (blob) {
                    let match = blob.type.match(/^(image\/.*?)$/i);
                    let _w_tilt = match ? _w_creek[match[1].toLowerCase()] : null;
                    let _w_stamp = URL.createObjectURL(blob);
                    URL.revokeObjectURL(_w_temper._w_stamp);
                    URL.revokeObjectURL(_w_temper._w_ploy);
                    URL.revokeObjectURL(_w_temper._w_egoism);
                    URL.revokeObjectURL(_w_temper._w_rubble);
                    delete _w_temper._w_stamp;
                    delete _w_temper._w_ploy;
                    delete _w_temper._w_egoism;
                    delete _w_temper._w_rubble;
                    _w_temper._w_tilt = _w_tilt;
                    _w_temper._w_stamp = _w_stamp;
                    img.src = _w_stamp;
                    _w_pedant(_w_sting, true, false);
                })).catch((function (e) {
                    img.src = null;
                })).finally((function () {
                    clearTimeout(_w_scar);
                }));
            } else {
                img.src = _w_stamp;
            }
            return {
                isTimeout: function () {
                    return _w_grotto;
                }, getFetchEntry: function () {
                    return _w_temper;
                }
            };
        }, directSetImgSrc: function (img, src) {
            img.src = src;
            return {
                isTimeout: function () {
                    return false;
                }, getFetchEntry: function () {
                    return {};
                }
            };
        }, bypassUrl: function (url) {
            if (typeof url == 'undefined') {
                return true;
            }
            let _w_sting = _w_lyric(url);
            if (_w_sting == '') {
                return true;
            }
            return _w_hush(_w_sting);
        }, getStatus: function () {
            return JSON.stringify(_w_guile);
        }, getBypassSite: function () {
            let _w_slit = [];
            Object.keys(_w_guile).forEach((function (host) {
                if (_w_hush(host)) {
                    _w_slit.push(host);
                }
            }));
            return _w_slit;
        }, storePhash: function (src, phash) {
            if (_w_bale[src]) {
                _w_bale[src]._w_salute = phash;
            }
        }, getFetchEntry: function (src) {
            return _w_bale[src];
        }
    };
}

function _w_sonata(_w_gutter, _w_con) {
    let _w_stigma = document.createElement('a');
    let _w_dither = new Blob([_w_con], {type: 'text/plain;charset=UTF-8'});
    _w_stigma.href = window.URL.createObjectURL(_w_dither);
    _w_stigma.download = _w_gutter;
    _w_stigma.style.display = 'none';
    document.body.appendChild(_w_stigma);
    _w_stigma.click();
    _w_stigma = undefined;
}

function _w_scheme(_w_bile) {
    let _w_hide = null;
    if (typeof _w_bile == 'number') {
        _w_hide = _w_fad(_w_bile);
    } else if (_w_hyphen(_w_bile.addTask) && _w_hyphen(_w_bile.setMax)) {
        _w_hide = _w_bile;
    } else {
        _w_hide = _w_fad(8);
    }
    let _w_addict = function (_w_fillet, _w_pod, _w_tundra, _w_lure, _w_slice, _w_brake, _w_billow) {
        _w_hide.addTask((function (beginFun, endFun) {
            let _w_hoe = null;
            try {
                _w_hoe = JSON.stringify(_w_lure);
            } catch (exception) {
            }
            beginFun();
            $.ajax({
                method: _w_fillet,
                url: _w_pod,
                timeout: _w_writ,
                headers: _w_tundra,
                data: _w_hoe,
                contentType: 'application/json'
            }).always(endFun).done(_w_slice).fail(_w_brake).always(_w_billow);
        }));
    };
    return {
        ajaxGet: function (_w_pod, _w_tundra, _w_lure, _w_slice, _w_brake, _w_billow) {
            _w_addict('GET', _w_pod, _w_tundra, _w_lure, _w_slice, _w_brake, _w_billow);
        }, ajaxPost: function (_w_pod, _w_tundra, _w_lure, _w_slice, _w_brake, _w_billow) {
            _w_addict('POST', _w_pod, _w_tundra, _w_lure, _w_slice, _w_brake, _w_billow);
        }, setMax: function (max) {
            _w_hide.setMax(max);
        }, getProcessingNum: function () {
            return _w_hide.getProcessingNum();
        }, getTaskNum: function () {
            return _w_hide.getTaskNum();
        }
    };
}

function _w_galley(_w_yokel, _w_blurb, _w_panel, _w_linen) {
    let _w_flax = [];
    let _w_frieze = null;
    let _w_ledger = false;
    _w_yokel.forEach((function (url) {
        let _w_glut = _w_blurb.exec(url);
        if (_w_glut) {
            _w_frieze = _w_glut;
            _w_flax.push([_w_frieze[_w_panel], parseInt(_w_frieze[_w_linen] ? _w_frieze[_w_linen] : 1)]);
            if (_w_frieze[_w_linen] == '') {
                _w_ledger = true;
            }
        }
    }));
    _w_flax.sort((function (a, b) {
        let _w_tint = a[0].localeCompare(b[0]);
        if (_w_tint == 0) {
            _w_tint = a[1] - b[1];
        }
        return _w_tint;
    }));
    let _w_tangle = Array.from(_w_yokel);
    let _w_resort = [];

    function createUrlByCharacteristic(_w_frieze, _w_panel, _w_linen, _w_dent, _w_sect, _w_ledger) {
        let _w_pun = '';
        if (_w_ledger && _w_sect == 1) {
            _w_sect = '';
        }
        for (let k = 1; k < _w_frieze.length; ++k) {
            if (k == _w_panel) {
                _w_pun = _w_pun.concat(_w_dent);
            } else if (k == _w_linen) {
                _w_pun = _w_pun.concat(_w_sect);
            } else if (k == _w_linen - 1 && _w_sect == '' && _w_frieze[k].length > 0 && (_w_frieze[k].substr(-1) == '_' || _w_frieze[k].substr(-1) == '_')) {
                _w_pun.concat(_w_frieze[k].slice(0, -1));
            } else {
                _w_pun = _w_pun.concat(_w_frieze[k]);
            }
        }
        return _w_pun;
    }

    for (let i = 0; i < _w_flax.length; ++i) {
        let _w_drone = _w_flax.length - 1;
        let _w_shack = function () {
            _w_resort.push(createUrlByCharacteristic(_w_frieze, _w_panel, _w_linen, _w_flax[i][0], _w_flax[i][1], _w_ledger));
        };
        if (_w_flax.length == 1) {
            _w_shack();
        } else if (i == 0) {
            item.serial;
            if (_w_flax[i][0] != _w_flax[i + 1][0]) {
                _w_shack();
            }
        } else if (i == _w_drone) {
            if (_w_flax[i - 1][0] != _w_flax[i][0]) {
                _w_shack();
            }
        } else if (_w_flax[i - 1][0] != _w_flax[i][0] && _w_flax[i][0] != _w_flax[i + 1][0]) {
            _w_shack();
        }
        if (i == _w_drone) {
            continue;
        }
        if (_w_flax[i][0] == _w_flax[i + 1][0] && _w_flax[i + 1][1] - _w_flax[i][1] > 1) {
            for (let j = _w_flax[i][1] + 1; j < _w_flax[i + 1][1]; ++j) {
                let _w_pun = createUrlByCharacteristic(_w_frieze, _w_panel, _w_linen, _w_flax[i][0], j);
                _w_tangle.push(_w_pun);
            }
        }
    }
    console.log('old urls length: ' + _w_yokel.length + ', new Urls length: ' + _w_tangle.length + ', single Urls length: ' + _w_resort.length);
    return [Array.from(new Set(_w_tangle)), Array.from(new Set(_w_resort))];
}

async function asyncUrlToBlobUrl(url) {
    return await (_w_slosh ? _w_genre().fetch : fetch)(url, {
        mode: 'cors',
        headers: {'Access-Control-Allow-Origin': '*'}
    }).then((response => response.blob())).then((function (blob) {
        return URL.createObjectURL(blob);
    }));
}
