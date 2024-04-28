if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$6 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {
      onTapAdds() {
        uni.navigateTo({
          url: "/pages/adds_manager/adds_manager"
        });
      },
      onTapSign() {
        this.$router.push("pages/adds_manager/adds_manager");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("button", {
        type: "primary",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onTapAdds && $options.onTapAdds(...args))
      }, "地址管理"),
      vue.createElementVNode("button", {
        type: "primary",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.onTapSign && $options.onTapSign(...args))
      }, "交易管理")
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/windpro/Documents/Code/cryptorobot_frontend/pages/index/index.vue"]]);
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type2, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type2, filename, ...args);
    } else {
      console[type2].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  var lookup$1 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    62,
    0,
    62,
    0,
    63,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    0,
    0,
    0,
    0,
    63,
    0,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51
  ];
  function base64Decode(source, target) {
    var sourceLength = source.length;
    var paddingLength = source[sourceLength - 2] === "=" ? 2 : source[sourceLength - 1] === "=" ? 1 : 0;
    var tmp;
    var byteIndex = 0;
    var baseLength = sourceLength - paddingLength & 4294967292;
    for (var i2 = 0; i2 < baseLength; i2 += 4) {
      tmp = lookup$1[source.charCodeAt(i2)] << 18 | lookup$1[source.charCodeAt(i2 + 1)] << 12 | lookup$1[source.charCodeAt(i2 + 2)] << 6 | lookup$1[source.charCodeAt(i2 + 3)];
      target[byteIndex++] = tmp >> 16 & 255;
      target[byteIndex++] = tmp >> 8 & 255;
      target[byteIndex++] = tmp & 255;
    }
    if (paddingLength === 1) {
      tmp = lookup$1[source.charCodeAt(i2)] << 10 | lookup$1[source.charCodeAt(i2 + 1)] << 4 | lookup$1[source.charCodeAt(i2 + 2)] >> 2;
      target[byteIndex++] = tmp >> 8 & 255;
      target[byteIndex++] = tmp & 255;
    }
    if (paddingLength === 2) {
      tmp = lookup$1[source.charCodeAt(i2)] << 2 | lookup$1[source.charCodeAt(i2 + 1)] >> 4;
      target[byteIndex++] = tmp & 255;
    }
  }
  const $inject_window_crypto = {
    getRandomValues(arr) {
      if (!(arr instanceof Int8Array || arr instanceof Uint8Array || arr instanceof Int16Array || arr instanceof Uint16Array || arr instanceof Int32Array || arr instanceof Uint32Array || arr instanceof Uint8ClampedArray)) {
        throw new Error("Expected an integer array");
      }
      if (arr.byteLength > 65536) {
        throw new Error("Can only request a maximum of 65536 bytes");
      }
      var crypto2 = requireNativePlugin("DCloud-Crypto");
      base64Decode(crypto2.getRandomValues(arr.byteLength), new Uint8Array(
        arr.buffer,
        arr.byteOffset,
        arr.byteLength
      ));
      return arr;
    }
  };
  const pages = [
    {
      path: "pages/index/index",
      style: {
        navigationBarTitleText: "Crypto"
      }
    },
    {
      path: "pages/adds_manager/adds_manager",
      style: {
        navigationBarTitleText: "地址管理",
        enablePullDownRefresh: false
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "crypto",
    navigationBarBackgroundColor: "#F8F8F8",
    backgroundColor: "#F8F8F8"
  };
  const uniIdRouter = {};
  const e = {
    pages,
    globalStyle,
    uniIdRouter
  };
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i$2 = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k = e4[t4 + 13], A2 = e4[t4 + 14], P2 = e4[t4 + 15], T2 = i3[0], C2 = i3[1], x = i3[2], O2 = i3[3];
        T2 = u2(T2, C2, x, O2, o3, 7, a2[0]), O2 = u2(O2, T2, C2, x, c3, 12, a2[1]), x = u2(x, O2, T2, C2, p2, 17, a2[2]), C2 = u2(C2, x, O2, T2, f2, 22, a2[3]), T2 = u2(T2, C2, x, O2, g2, 7, a2[4]), O2 = u2(O2, T2, C2, x, m2, 12, a2[5]), x = u2(x, O2, T2, C2, y2, 17, a2[6]), C2 = u2(C2, x, O2, T2, _2, 22, a2[7]), T2 = u2(T2, C2, x, O2, w2, 7, a2[8]), O2 = u2(O2, T2, C2, x, v2, 12, a2[9]), x = u2(x, O2, T2, C2, I2, 17, a2[10]), C2 = u2(C2, x, O2, T2, S2, 22, a2[11]), T2 = u2(T2, C2, x, O2, b2, 7, a2[12]), O2 = u2(O2, T2, C2, x, k, 12, a2[13]), x = u2(x, O2, T2, C2, A2, 17, a2[14]), T2 = h2(T2, C2 = u2(C2, x, O2, T2, P2, 22, a2[15]), x, O2, c3, 5, a2[16]), O2 = h2(O2, T2, C2, x, y2, 9, a2[17]), x = h2(x, O2, T2, C2, S2, 14, a2[18]), C2 = h2(C2, x, O2, T2, o3, 20, a2[19]), T2 = h2(T2, C2, x, O2, m2, 5, a2[20]), O2 = h2(O2, T2, C2, x, I2, 9, a2[21]), x = h2(x, O2, T2, C2, P2, 14, a2[22]), C2 = h2(C2, x, O2, T2, g2, 20, a2[23]), T2 = h2(T2, C2, x, O2, v2, 5, a2[24]), O2 = h2(O2, T2, C2, x, A2, 9, a2[25]), x = h2(x, O2, T2, C2, f2, 14, a2[26]), C2 = h2(C2, x, O2, T2, w2, 20, a2[27]), T2 = h2(T2, C2, x, O2, k, 5, a2[28]), O2 = h2(O2, T2, C2, x, p2, 9, a2[29]), x = h2(x, O2, T2, C2, _2, 14, a2[30]), T2 = l2(T2, C2 = h2(C2, x, O2, T2, b2, 20, a2[31]), x, O2, m2, 4, a2[32]), O2 = l2(O2, T2, C2, x, w2, 11, a2[33]), x = l2(x, O2, T2, C2, S2, 16, a2[34]), C2 = l2(C2, x, O2, T2, A2, 23, a2[35]), T2 = l2(T2, C2, x, O2, c3, 4, a2[36]), O2 = l2(O2, T2, C2, x, g2, 11, a2[37]), x = l2(x, O2, T2, C2, _2, 16, a2[38]), C2 = l2(C2, x, O2, T2, I2, 23, a2[39]), T2 = l2(T2, C2, x, O2, k, 4, a2[40]), O2 = l2(O2, T2, C2, x, o3, 11, a2[41]), x = l2(x, O2, T2, C2, f2, 16, a2[42]), C2 = l2(C2, x, O2, T2, y2, 23, a2[43]), T2 = l2(T2, C2, x, O2, v2, 4, a2[44]), O2 = l2(O2, T2, C2, x, b2, 11, a2[45]), x = l2(x, O2, T2, C2, P2, 16, a2[46]), T2 = d2(T2, C2 = l2(C2, x, O2, T2, p2, 23, a2[47]), x, O2, o3, 6, a2[48]), O2 = d2(O2, T2, C2, x, _2, 10, a2[49]), x = d2(x, O2, T2, C2, A2, 15, a2[50]), C2 = d2(C2, x, O2, T2, m2, 21, a2[51]), T2 = d2(T2, C2, x, O2, b2, 6, a2[52]), O2 = d2(O2, T2, C2, x, f2, 10, a2[53]), x = d2(x, O2, T2, C2, I2, 15, a2[54]), C2 = d2(C2, x, O2, T2, c3, 21, a2[55]), T2 = d2(T2, C2, x, O2, w2, 6, a2[56]), O2 = d2(O2, T2, C2, x, P2, 10, a2[57]), x = d2(x, O2, T2, C2, y2, 15, a2[58]), C2 = d2(C2, x, O2, T2, k, 21, a2[59]), T2 = d2(T2, C2, x, O2, g2, 6, a2[60]), O2 = d2(O2, T2, C2, x, S2, 10, a2[61]), x = d2(x, O2, T2, C2, p2, 15, a2[62]), C2 = d2(C2, x, O2, T2, v2, 21, a2[63]), i3[0] = i3[0] + T2 | 0, i3[1] = i3[1] + C2 | 0, i3[2] = i3[2] + x | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const c = "FUNCTION", u = "OBJECT", h = "CLIENT_DB", l = "pending", d = "fulfilled", p = "rejected";
  function f$1(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f$1(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const _ = "REJECTED", w = "NOT_PENDING";
  class v {
    constructor({ createPromise: e2, retryRule: t2 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
    exec() {
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const S = true, b = "app", A = I([]), P = b, T = I(""), C = I("[]") || [];
  let O = "";
  try {
    O = "__UNI__5C4C004";
  } catch (e2) {
  }
  let E = {};
  function L(e2, t2 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t2), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const R = ["invoke", "success", "fail", "complete"], U = L("_globalUniCloudInterceptor");
  function N(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U[e3][t3];
        s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function D(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete U[e2];
  }
  function M(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t2) {
    return U[e2] && U[e2][t2] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  const K = L("_globalUniCloudListener"), j = "response", $ = "needLogin", B = "refreshToken", W = "clientdb", H = "cloudfunction", z = "cloudobject";
  function J(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function G(e2, t2) {
    const n2 = J(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function V(e2, t2) {
    const n2 = J(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t2) {
    const n2 = J(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let Q, X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t2[n2] = y(s2));
    }
    return t2;
  }
  class te extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync() };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"), tokenExpired: ne.getStorageSync("uni_id_token_expired") };
  }
  function ie({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ne.setStorageSync("uni_id_token", e2), t2 && ne.setStorageSync("uni_id_token_expired", t2);
  }
  let oe, ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  function he() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return { ...ae, locale: e2, LOCALE: e2 };
    const t2 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e3 = 0; e3 < o2.length; e3++) {
      delete t2[o2[e3]];
    }
    return ae = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...ue(), ...t2 }, { ...ae, locale: e2, LOCALE: e2 };
  }
  var le = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i$2(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400)
          return s2(new te({ code: "SYS_ERR", message: e3.errMsg || "request:fail", requestId: t3 }));
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var de = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return le.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = le.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = le.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== f$1(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new te({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = le.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: g2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new te({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var pe = { init(e2) {
    const t2 = new de(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const fe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var ge;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(ge || (ge = {}));
  var me = function() {
  }, ye = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], h2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], h3 = n3[5], l2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & h3 ^ ~a3 & l2) + c2[p2] + u2[p2];
          d2 = l2, l2 = h3, h3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(h2), t3.HmacSHA256 = i2._createHmacHelper(h2);
    }(Math), n2.SHA256);
  }), _e = ye, we = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const ve = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Ie(e2) {
    return void 0 === e2;
  }
  function Se(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var be;
  function ke(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(be || (be = {}));
  const Ae = { adapter: null, runtime: void 0 }, Pe = ["anonymousUuidKey"];
  class Te extends me {
    constructor() {
      super(), Ae.adapter.root.tcbObject || (Ae.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ae.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ae.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ae.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ae.adapter.root.tcbObject;
    }
  }
  function Ce(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t2.sessionStorage || new Te();
    }
  }
  class xe {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ae.adapter.primaryStorage || e2.persistence, this._storage = Ce(this._persistence, Ae.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Ce(e2, Ae.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Ie(r2) || Se(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const Oe = {}, Ee = {};
  function Le(e2) {
    return Oe[e2];
  }
  class Re {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ue extends Re {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const Ne = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ue)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Re(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function De(e2, t2) {
    Ne.on(e2, t2);
  }
  function Me(e2, t2 = {}) {
    Ne.fire(e2, t2);
  }
  function qe(e2, t2) {
    Ne.off(e2, t2);
  }
  const Fe = "loginStateChanged", Ke = "loginStateExpire", je = "loginTypeChanged", $e = "anonymousConverted", Be = "refreshAccessToken";
  var We;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(We || (We = {}));
  const He = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], ze = { "X-SDK-Version": "1.3.5" };
  function Je(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function Ge() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...ze, "x-seqid": e2 } };
  }
  class Ve {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ae.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Le(this.config.env), this._localCache = (t2 = this.config.env, Ee[t2]), Je(this._reqClass, "post", [Ge]), Je(this._reqClass, "upload", [Ge]), Je(this._reqClass, "download", [Ge]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new te({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === We.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Me(Ke), this._cache.removeStore(n2);
        }
        throw new te({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Me(Be), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new te({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === He.indexOf(e2)) {
        const { refreshTokenKey: e3 } = this._cache.keys;
        this._cache.getStore(e3) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = { ...h2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(fe, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new te({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}) {
      const n2 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === He.indexOf(e2)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new te({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new te({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const Ye = {};
  function Qe(e2) {
    return Ye[e2];
  }
  class Xe {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class Ze {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Le(this._envId), this._request = Qe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class et {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Le(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ze(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === We.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === We.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === We.WECHAT || this.loginType === We.WECHAT_OPEN || this.loginType === We.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class tt extends Xe {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.ANONYMOUS, persistence: "local" });
        const e3 = new et(this.config.env);
        return await e3.user.refresh(), e3;
      }
      throw new te({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Me($e, { env: this.config.env }), Me(je, { loginType: We.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new te({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, We.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class nt extends Xe {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new et(this.config.env);
      throw new te({ message: "自定义登录失败" });
    }
  }
  class st extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.EMAIL, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new te({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class rt extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: We.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.USERNAME, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new te({ message: "用户名密码登录失败" });
    }
  }
  class it {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), De(je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new tt(this.config);
    }
    customAuthProvider() {
      return new nt(this.config);
    }
    emailAuthProvider() {
      return new st(this.config);
    }
    usernameAuthProvider() {
      return new rt(this.config);
    }
    async signInAnonymously() {
      return new tt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new st(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new rt(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new tt(this.config)), De($e, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === We.ANONYMOUS)
        throw new te({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), Me(Fe), Me(je, { env: this.config.env, loginType: We.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      De(Fe, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      De(Ke, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      De(Be, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      De($e, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      De(je, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new et(this.config.env) : null;
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new nt(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const ot = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, at = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ct = function({ fileList: e2 }, t2) {
    if (t2 = t2 || ve(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return Qe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ut$1 = function({ fileList: e2 }, t2) {
    t2 = t2 || ve(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Qe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ht = async function({ fileID: e2 }, t2) {
    const n2 = (await ut$1.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = Qe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, lt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || ve();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Qe(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        o2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), o2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            o2(new te({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e3) => {
      o2(e3);
    }), o2.promise;
  }, dt = { timeout: 15e3, persistence: "session" }, pt = {};
  class ft {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ae.adapter || (this.requestClient = new Ae.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...dt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ft(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ae.adapter.primaryStorage || dt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Oe[t3] = new xe(e3), Ee[t3] = new xe({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, Ye[n2.env] = new Ve(n2), this.authObj = new it(this.config), this.authObj;
    }
    on(e2, t2) {
      return De.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return qe.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return ct.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ut$1.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return ht.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return ot.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return at.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      pt[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = pt[e2];
      if (!n2)
        throw new te({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = ke(e2) || {};
      t2 && (Ae.adapter = t2), n2 && (Ae.runtime = n2);
    }
  }
  var gt = new ft();
  function mt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class yt {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        ne.request({ url: mt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: mt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const _t = { setItem(e2, t2) {
    ne.setStorageSync(e2, t2);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var wt = { genAdapter: function() {
    return { root: {}, reqClass: yt, localStorage: _t, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  gt.useAdapters(wt);
  const vt = gt, It = vt.init;
  vt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = It.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var St = vt;
  var bt = class extends de {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = le.sign(n2, this.config.clientSecret);
      const r2 = he();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = re();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2)).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(this.setupRequest(n2)).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var kt = { init(e2) {
    const t2 = new bt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, At = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Pt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = Date.now(), u2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e3) {
      var t3 = 16 * Math.random() | 0;
      return ("x" === e3 ? t3 : 3 & t3 | 8).toString(16);
    }), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = _e(e3.body).toString(At), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = _e(r3).toString(At), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = we(o3, e3.secretKey).toString(At);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function Tt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {} }) {
    return new Promise((r2, i2) => {
      ne.request({ url: e2, method: n2, data: t2, header: s2, dataType: "json", complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return i2(new te({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        r2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Ct(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Pt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function xt(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function Ot(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  var Et = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn` });
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2 } = e3, r2 = "POST", { url: i2, headers: o2 } = Pt("/functions/invokeFunction", { functionName: n2, data: s2, method: r2, headers: { "x-to-function-name": n2 }, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e4) => ({ errCode: 0, success: true, requestId: e4.requestId, result: e4.data })).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== f$1(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await Ct({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList不能为空数组" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList数组长度不能超过50" }));
        const s2 = [];
        for (const t3 of e2) {
          "string" !== f$1(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList的元素必须是非空的字符串" }));
          const e3 = xt.call(this, t3);
          s2.push({ file_id: e3, expire: 600 });
        }
        Ct({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: Ot.call(this, e4.file_id), tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
  };
  var Lt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new Et(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Rt({ data: e2 }) {
    let t2;
    t2 = he();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Ut({ name: e2, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
    return new Promise((t3, n3) => {
      ne.request({ method: "POST", url: o2, data: { name: e2, platform: P, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR": {
            const e3 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(e3), new Error(e3);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction({ name: e2, data: t2 });
      }
      return new Promise((e3, n4) => {
        const s4 = Rt.call(this, { data: t2 });
        ne.request({ method: "POST", url: a2, data: { provider: r2, platform: P, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new te({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
          n4(new te({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const Nt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var Dt = /[\\^$.*+?()[\]{}|]/g, Mt = RegExp(Dt.source);
  function qt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Mt.test(s2) ? s2.replace(Dt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Kt = "request", jt = "response", $t = "both";
  const An = { code: 2e4, message: "System error" }, Pn = { code: 20101, message: "Invalid client" };
  function xn(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || An.code, message: r2 || o2, cause: a2 });
  }
  let En;
  function Dn({ secretType: e2 } = {}) {
    return e2 === Kt || e2 === jt || e2 === $t;
  }
  function Mn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function qn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), xn(Pn);
  }
  function Fn({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Kn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Rt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay" }[this.config.provider], i2 = Dn(n3), o2 = Mn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = qt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = qt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: Nt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && C ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Ut), o2 = Ut) : o2 = n2, o2 = o2.bind(e2), Mn(t3))
        a2 = n2.call(e2, t3);
      else if (Dn(t3)) {
        a2 = new En({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (qn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new En({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => ("undefined" != typeof UTSJSONObject && (e3.result = new UTSJSONObject(e3.result)), e3));
    };
  }
  En = class {
    constructor() {
      throw xn({ message: `Platform ${P} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const jn = Symbol("CLIENT_DB_INTERNAL");
  function $n(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = jn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function Bn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const Wn = ["db.Geo", "db.command", "command.aggregate"];
  function Hn(e2, t2) {
    return Wn.indexOf(`${e2}.${t2}`) > -1;
  }
  function zn(e2) {
    switch (f$1(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => zn(e3));
      case "object":
        return e2._internalType === jn || Object.keys(e2).forEach((t2) => {
          e2[t2] = zn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Jn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class Gn {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: zn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Jn(e2), n2 = Jn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Jn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Jn(e2), n2 = Jn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return Vn({ $method: e2, $param: zn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: zn(t2) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Vn(e2, t2, n2) {
    return $n(new Gn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Hn(s2, t3) ? Vn({ $method: t3 }, e3, n2) : function() {
        return Vn({ $method: t3, $param: zn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Yn({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function Qn(e2, t2 = {}) {
    return $n(new e2(t2), { get: (e3, t3) => Hn("db", t3) ? Vn({ $method: t3 }, null, e3) : function() {
      return Vn({ $method: t3, $param: zn(Array.from(arguments)) }, null, e3);
    } });
  }
  class Xn extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Bn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Bn(this._dbCallBacks)), this.env = $n({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = $n({}, { get: (e3, t3) => Yn({ path: ["Geo"], method: t3 }) }), this.serverDate = Yn({ path: [], method: "serverDate" }), this.RegExp = Yn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), M(q(o2, "fail"), e3).then(() => M(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y(j, { type: W, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y(B, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M(q(o2, "success"), e4).then(() => M(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(j, { type: W, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const Zn = "token无效，跳转登录页面", es = "token过期，跳转登录页面", ts = { TOKEN_INVALID_TOKEN_EXPIRED: es, TOKEN_INVALID_INVALID_CLIENTID: Zn, TOKEN_INVALID: Zn, TOKEN_INVALID_WRONG_TOKEN: Zn, TOKEN_INVALID_ANONYMOUS_USER: Zn }, ns = { "uni-id-token-expired": es, "uni-id-check-token-failed": Zn, "uni-id-token-not-exist": Zn, "uni-id-check-device-feature-failed": Zn };
  function ss(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function rs(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(ss(t2, e3.path)) : false === e3.needLogin && s2.push(ss(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function is$1(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function os() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function as() {
    return is$1(os());
  }
  function cs(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = is$1(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const us = !!e.uniIdRouter;
  const { loginPage: hs, routerNeedLogin: ls, resToLogin: ds, needLoginPage: ps, notNeedLoginPage: fs, loginPageInTabBar: gs } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = rs(t2), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = rs(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: cs(i2, r2) };
  }();
  if (ps.indexOf(hs) > -1)
    throw new Error(`Login page [${hs}] should not be "needLogin", please check your pages.json`);
  function ms(e2) {
    const t2 = as();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function ys(e2) {
    const t2 = is$1(ms(e2));
    return !(fs.indexOf(t2) > -1) && (ps.indexOf(t2) > -1 || ls.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function _s({ redirect: e2 }) {
    const t2 = is$1(e2), n2 = is$1(hs);
    return as() !== n2 && t2 !== n2;
  }
  function ws({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !_s({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(hs, t2);
    gs ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    });
  }
  function vs({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: ns[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: ns[e4] };
      }
      return n3;
    }();
    if (ys(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (J($).length > 0)
        return setTimeout(() => {
          Y($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Is() {
    !function() {
      const e3 = os(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = vs({ url: e3 });
      t2 || n2 && ws({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = vs({ url: e3.url });
        return t3 ? e3 : s2 ? (ws({ api: n2, redirect: ms(e3.url) }), false) : e3;
      } });
    }
  }
  function Ss() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ns;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ts;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = J($);
        Z().then(() => {
          const n3 = os();
          if (n3 && _s({ redirect: n3 }))
            return t3.length > 0 ? Y($, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (hs && ws({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function bs(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        G(j, e4);
      }, e3.offResponse = function(e4) {
        V(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        G($, e4);
      }, e3.offNeedLogin = function(e4) {
        V($, e4);
      }, us && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        Is.call(e3);
      }), ds && Ss.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        G(B, e4);
      }, e3.offRefreshToken = function(e4) {
        V(B, e4);
      };
    }(e2);
  }
  let ks;
  const As = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Ps = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Ts() {
    const e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(ks(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  ks = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !Ps.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = As.indexOf(e2.charAt(i2++)) << 18 | As.indexOf(e2.charAt(i2++)) << 12 | (n2 = As.indexOf(e2.charAt(i2++))) << 6 | (s2 = As.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Cs = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), xs = t(Cs);
  const Os = "manual";
  function Es(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === Os)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2;
      t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Ls(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return async function(...s4) {
            const r3 = n3 ? n3({ params: s4 }) : {};
            let i3, o3;
            try {
              return await M(q(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await M(q(t3, "success"), { ...r3, result: i3 }), i3;
            } catch (e4) {
              throw o3 = e4, await M(q(t3, "fail"), { ...r3, error: o3 }), o3;
            } finally {
              await M(q(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
            }
          };
        }({ fn: async function s4(...h2) {
          let l2;
          a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
          const d2 = { name: t2, type: u, data: { method: c2, params: h2 } };
          "object" == typeof n2.secretMethods && function(e3, t3) {
            const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
            r3 && (t3.secretType = r3);
          }(n2, d2);
          let p2 = false;
          try {
            l2 = await e2.callFunction(d2);
          } catch (e3) {
            p2 = true, l2 = { result: new te(e3) };
          }
          const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
          if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y(B, { ...y2 })), g2) {
            let e3 = m2;
            if (p2 && o2) {
              e3 = (await o2({ objectName: t2, methodName: c2, params: h2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
            }
            if (a2)
              if ("toast" === i2.type)
                uni.showToast({ title: e3, icon: "none" });
              else {
                if ("modal" !== i2.type)
                  throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                {
                  const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                    return new Promise((i3, o3) => {
                      uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                        i3(e5);
                      }, fail() {
                        i3({ confirm: false, cancel: true });
                      } });
                    });
                  }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                  if (i2.retry && t3)
                    return s4(...h2);
                }
              }
            const n3 = new te({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
            throw n3.detail = l2.result, Y(j, { type: z, content: n3 }), n3;
          }
          return Y(j, { type: z, content: l2.result }), l2.result;
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Rs(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Us({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Rs(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${P}\``);
  }
  async function Ns(e2) {
    const t2 = Rs(this);
    return t2.initPromise || (t2.initPromise = Us.call(this, e2).then((e3) => e3).catch((e3) => {
      throw delete t2.initPromise, e3;
    })), t2.initPromise;
  }
  function Ds(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Ns.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Ms(e2) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e2]({ ...n2, success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    };
  }
  class qs extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Ms("getSystemInfo")(), Ms("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function Fs(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        ne.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Ks(e2) {
    {
      const { osName: e3, osVersion: t3 } = ce();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e3, t3) {
      let n3;
      for (let s3 = 0; s3 < e3.length; s3++) {
        const r3 = e3[s3];
        if (await Fs(r3, t3)) {
          n3 = r3;
          break;
        }
      }
      return { address: n3, port: t3 };
    }(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === P.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function js(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const $s = { tcb: St, tencent: St, aliyun: pe, private: kt, alipay: Lt };
  let Bs = new class {
    init(e2) {
      let t2 = {};
      const n2 = $s[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === P;
        const n3 = T;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Ks(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), js(t2), Kn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = Qn(Xn, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = Qn(Xn, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Ts, e3.chooseAndUploadFile = xs.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Es(e3);
        } }), e3.SSEChannel = qs, e3.initSecureNetworkByWeixin = Ds(e3), e3.importObject = Ls(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), h2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (r2 && Y(j, { type: H, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (Y(j, { type: H, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            });
          };
        }(t2[e3], e3).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = C;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], Bs = Bs.init(t2), Bs._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e3) => {
        Bs[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Bs, { get mixinDatacom() {
      return Es(Bs);
    } }), bs(Bs), Bs.addInterceptor = N, Bs.removeInterceptor = D, Bs.interceptObject = F;
  })();
  var Ws = Bs;
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$5 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v2) => v2.font_class === this.type);
        if (code2) {
          return code2.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-d31e1c47"], ["__file", "/Users/windpro/Documents/Code/cryptorobot_frontend/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$4 = {
    name: "uni-data-select",
    mixins: [Ws.mixinDatacom || {}],
    props: {
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      emptyTips: {
        type: String,
        default: "无选项"
      },
      clear: {
        type: Boolean,
        default: true
      },
      defItem: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 格式化输出 用法 field="_id as value, version as text, uni_platform as label" format="{label} - {text}"
      format: {
        type: String,
        default: ""
      },
      placement: {
        type: String,
        default: "bottom"
      }
    },
    data() {
      return {
        showSelector: false,
        current: "",
        mixinDatacomResData: [],
        apps: [],
        channels: [],
        cacheKey: "uni-data-select-lastSelectedValue"
      };
    },
    created() {
      this.debounceGet = this.debounce(() => {
        this.query();
      }, 300);
      if (this.collection && !this.localdata.length) {
        this.debounceGet();
      }
    },
    computed: {
      typePlaceholder() {
        const text = {
          "opendb-stat-app-versions": "版本",
          "opendb-app-channels": "渠道",
          "opendb-app-list": "应用"
        };
        const common = this.placeholder;
        const placeholder = text[this.collection];
        return placeholder ? common + placeholder : common;
      },
      valueCom() {
        return this.modelValue;
      },
      textShow() {
        let text = this.current;
        if (text.length > 10) {
          return text.slice(0, 25) + "...";
        }
        return text;
      },
      getOffsetByPlacement() {
        switch (this.placement) {
          case "top":
            return "bottom:calc(100% + 12px);";
          case "bottom":
            return "top:calc(100% + 12px);";
        }
      }
    },
    watch: {
      localdata: {
        immediate: true,
        handler(val, old) {
          if (Array.isArray(val) && old !== val) {
            this.mixinDatacomResData = val;
          }
        }
      },
      valueCom(val, old) {
        this.initDefVal();
      },
      mixinDatacomResData: {
        immediate: true,
        handler(val) {
          if (val.length) {
            this.initDefVal();
          }
        }
      }
    },
    methods: {
      debounce(fn, time = 100) {
        let timer = null;
        return function(...args) {
          if (timer)
            clearTimeout(timer);
          timer = setTimeout(() => {
            fn.apply(this, args);
          }, time);
        };
      },
      // 执行数据库查询
      query() {
        this.mixinDatacomEasyGet();
      },
      // 监听查询条件变更事件
      onMixinDatacomPropsChange() {
        if (this.collection) {
          this.debounceGet();
        }
      },
      initDefVal() {
        let defValue = "";
        if ((this.valueCom || this.valueCom === 0) && !this.isDisabled(this.valueCom)) {
          defValue = this.valueCom;
        } else {
          let strogeValue;
          if (this.collection) {
            strogeValue = this.getCache();
          }
          if (strogeValue || strogeValue === 0) {
            defValue = strogeValue;
          } else {
            let defItem = "";
            if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {
              defItem = this.mixinDatacomResData[this.defItem - 1].value;
            }
            defValue = defItem;
          }
          if (defValue || defValue === 0) {
            this.emit(defValue);
          }
        }
        const def = this.mixinDatacomResData.find((item) => item.value === defValue);
        this.current = def ? this.formatItemName(def) : "";
      },
      /**
       * @param {[String, Number]} value
       * 判断用户给的 value 是否同时为禁用状态
       */
      isDisabled(value) {
        let isDisabled = false;
        this.mixinDatacomResData.forEach((item) => {
          if (item.value === value) {
            isDisabled = item.disable;
          }
        });
        return isDisabled;
      },
      clearVal() {
        this.emit("");
        if (this.collection) {
          this.removeCache();
        }
      },
      change(item) {
        if (!item.disable) {
          this.showSelector = false;
          this.current = this.formatItemName(item);
          this.emit(item.value);
        }
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
        this.$emit("change", val);
        if (this.collection) {
          this.setCache(val);
        }
      },
      toggleSelector() {
        if (this.disabled) {
          return;
        }
        this.showSelector = !this.showSelector;
      },
      formatItemName(item) {
        let {
          text,
          value,
          channel_code
        } = item;
        channel_code = channel_code ? `(${channel_code})` : "";
        if (this.format) {
          let str = "";
          str = this.format;
          for (let key in item) {
            str = str.replace(new RegExp(`{${key}}`, "g"), item[key]);
          }
          return str;
        } else {
          return this.collection.indexOf("app-list") > 0 ? `${text}(${value})` : text ? text : `未命名${channel_code}`;
        }
      },
      // 获取当前加载的数据
      getLoadData() {
        return this.mixinDatacomResData;
      },
      // 获取当前缓存key
      getCurrentCacheKey() {
        return this.collection;
      },
      // 获取缓存
      getCache(name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        return cacheData[name];
      },
      // 设置缓存
      setCache(value, name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        cacheData[name] = value;
        uni.setStorageSync(this.cacheKey, cacheData);
      },
      // 删除缓存
      removeCache(name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        delete cacheData[name];
        uni.setStorageSync(this.cacheKey, cacheData);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-stat__select" }, [
      $props.label ? (vue.openBlock(), vue.createElementBlock(
        "span",
        {
          key: 0,
          class: "uni-label-text hide-on-phone"
        },
        vue.toDisplayString($props.label + "："),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-stat-box", { "uni-stat__actived": $data.current }])
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-select", { "uni-select--disabled": $props.disabled }])
            },
            [
              vue.createElementVNode("view", {
                class: "uni-select__input-box",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              }, [
                $data.current ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: "uni-select__input-text"
                  },
                  vue.toDisplayString($options.textShow),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 1,
                    class: "uni-select__input-text uni-select__input-placeholder"
                  },
                  vue.toDisplayString($options.typePlaceholder),
                  1
                  /* TEXT */
                )),
                $data.current && $props.clear && !$props.disabled ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clearVal && $options.clearVal(...args), ["stop"]))
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "clear",
                    color: "#c0c4cc",
                    size: "24"
                  })
                ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
                  vue.createVNode(_component_uni_icons, {
                    type: $data.showSelector ? "top" : "bottom",
                    size: "14",
                    color: "#999"
                  }, null, 8, ["type"])
                ]))
              ]),
              $data.showSelector ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-select--mask",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              })) : vue.createCommentVNode("v-if", true),
              $data.showSelector ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  class: "uni-select__selector",
                  style: vue.normalizeStyle($options.getOffsetByPlacement)
                },
                [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass($props.placement == "bottom" ? "uni-popper__arrow_bottom" : "uni-popper__arrow_top")
                    },
                    null,
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode("scroll-view", {
                    "scroll-y": "true",
                    class: "uni-select__selector-scroll"
                  }, [
                    $data.mixinDatacomResData.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-select__selector-empty"
                    }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString($props.emptyTips),
                        1
                        /* TEXT */
                      )
                    ])) : (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      { key: 1 },
                      vue.renderList($data.mixinDatacomResData, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "uni-select__selector-item",
                          key: index,
                          onClick: ($event) => $options.change(item)
                        }, [
                          vue.createElementVNode(
                            "text",
                            {
                              class: vue.normalizeClass({ "uni-select__selector__disabled": item.disable })
                            },
                            vue.toDisplayString($options.formatItemName(item)),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 8, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ],
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-ddf9e0a2"], ["__file", "/Users/windpro/Documents/Code/cryptorobot_frontend/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue"]]);
  const _sfc_main$3 = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-section" }, [
      vue.createElementVNode("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : vue.renderSlot(_ctx.$slots, "decoration", { key: 1 }, void 0, true),
        vue.createElementVNode("view", { class: "uni-section-header__content" }, [
          vue.createElementVNode(
            "text",
            {
              style: vue.normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: vue.normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            vue.toDisplayString($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: vue.normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            vue.toDisplayString($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "uni-section-header__slot-right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ]),
      vue.createElementVNode(
        "view",
        {
          class: "uni-section-content",
          style: vue.normalizeStyle({ padding: $options._padding })
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-637fd36b"], ["__file", "/Users/windpro/Documents/Code/cryptorobot_frontend/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$2 = {
    name: "uni-easyinput",
    emits: [
      "click",
      "iconClick",
      "update:modelValue",
      "input",
      "focus",
      "blur",
      "confirm",
      "clear",
      "eyes",
      "change",
      "keyboardheightchange"
    ],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      adjustPosition: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type2) {
        this.$emit("iconClick", type2);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("blur", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e2) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              "cursor-spacing": $props.cursorSpacing,
              "adjust-position": $props.adjustPosition,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing", "adjust-position"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              "cursor-spacing": $props.cursorSpacing,
              "adjust-position": $props.adjustPosition,
              onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing", "adjust-position"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                vue.createCommentVNode(" 开启密码时显示小眼睛 "),
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true),
            $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-09fd5285"], ["__file", "/Users/windpro/Documents/Code/cryptorobot_frontend/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function getAugmentedNamespace(n2) {
    if (n2.__esModule)
      return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
      var a2 = function a3() {
        if (this instanceof a3) {
          var args = [null];
          args.push.apply(args, arguments);
          var Ctor = Function.bind.apply(f2, args);
          return new Ctor();
        }
        return f2.apply(this, arguments);
      };
      a2.prototype = f2.prototype;
    } else
      a2 = {};
    Object.defineProperty(a2, "__esModule", { value: true });
    Object.keys(n2).forEach(function(k) {
      var d2 = Object.getOwnPropertyDescriptor(n2, k);
      Object.defineProperty(a2, k, d2.get ? d2 : {
        enumerable: true,
        get: function() {
          return n2[k];
        }
      });
    });
    return a2;
  }
  var buffer = {};
  var base64Js = {};
  base64Js.byteLength = byteLength;
  base64Js.toByteArray = toByteArray;
  base64Js.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i$1 = 0, len = code.length; i$1 < len; ++i$1) {
    lookup[i$1] = code[i$1];
    revLookup[code.charCodeAt(i$1)] = i$1;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1)
      validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i2;
    for (i2 = 0; i2 < len2; i2 += 4) {
      tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output2 = [];
    for (var i2 = start; i2 < end; i2 += 3) {
      tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
      output2.push(tripletToBase64(tmp));
    }
    return output2.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
      );
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
      );
    }
    return parts.join("");
  }
  var ieee754 = {};
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  ieee754.read = function(buffer2, offset2, isLE, mLen, nBytes) {
    var e2, m2;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i2 = isLE ? nBytes - 1 : 0;
    var d2 = isLE ? -1 : 1;
    var s2 = buffer2[offset2 + i2];
    i2 += d2;
    e2 = s2 & (1 << -nBits) - 1;
    s2 >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e2 = e2 * 256 + buffer2[offset2 + i2], i2 += d2, nBits -= 8) {
    }
    m2 = e2 & (1 << -nBits) - 1;
    e2 >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m2 = m2 * 256 + buffer2[offset2 + i2], i2 += d2, nBits -= 8) {
    }
    if (e2 === 0) {
      e2 = 1 - eBias;
    } else if (e2 === eMax) {
      return m2 ? NaN : (s2 ? -1 : 1) * Infinity;
    } else {
      m2 = m2 + Math.pow(2, mLen);
      e2 = e2 - eBias;
    }
    return (s2 ? -1 : 1) * m2 * Math.pow(2, e2 - mLen);
  };
  ieee754.write = function(buffer2, value, offset2, isLE, mLen, nBytes) {
    var e2, m2, c2;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt2 = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i2 = isLE ? 0 : nBytes - 1;
    var d2 = isLE ? 1 : -1;
    var s2 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m2 = isNaN(value) ? 1 : 0;
      e2 = eMax;
    } else {
      e2 = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c2 = Math.pow(2, -e2)) < 1) {
        e2--;
        c2 *= 2;
      }
      if (e2 + eBias >= 1) {
        value += rt2 / c2;
      } else {
        value += rt2 * Math.pow(2, 1 - eBias);
      }
      if (value * c2 >= 2) {
        e2++;
        c2 /= 2;
      }
      if (e2 + eBias >= eMax) {
        m2 = 0;
        e2 = eMax;
      } else if (e2 + eBias >= 1) {
        m2 = (value * c2 - 1) * Math.pow(2, mLen);
        e2 = e2 + eBias;
      } else {
        m2 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e2 = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset2 + i2] = m2 & 255, i2 += d2, m2 /= 256, mLen -= 8) {
    }
    e2 = e2 << mLen | m2;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset2 + i2] = e2 & 255, i2 += d2, e2 /= 256, eLen -= 8) {
    }
    buffer2[offset2 + i2 - d2] |= s2 * 128;
  };
  (function(exports) {
    const base64 = base64Js;
    const ieee754$1 = ieee754;
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      formatAppLog(
        "error",
        "at node_modules/buffer/index.js:43",
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e2) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      const b2 = fromObject(value);
      if (b2)
        return b2;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding2) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding2 === "string" ? createBuffer(size).fill(fill, encoding2) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding2) {
      return alloc(size, fill, encoding2);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string2, encoding2) {
      if (typeof encoding2 !== "string" || encoding2 === "") {
        encoding2 = "utf8";
      }
      if (!Buffer2.isEncoding(encoding2)) {
        throw new TypeError("Unknown encoding: " + encoding2);
      }
      const length = byteLength2(string2, encoding2) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string2, encoding2);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array2) {
      const length = array2.length < 0 ? 0 : checked(array2.length) | 0;
      const buf = createBuffer(length);
      for (let i2 = 0; i2 < length; i2 += 1) {
        buf[i2] = array2[i2] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array2, byteOffset, length) {
      if (byteOffset < 0 || array2.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array2.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array2);
      } else if (length === void 0) {
        buf = new Uint8Array(array2, byteOffset);
      } else {
        buf = new Uint8Array(array2, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        const len2 = checked(obj.length) | 0;
        const buf = createBuffer(len2);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len2);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b2) {
      return b2 != null && b2._isBuffer === true && b2 !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a2, b2) {
      if (isInstance(a2, Uint8Array))
        a2 = Buffer2.from(a2, a2.offset, a2.byteLength);
      if (isInstance(b2, Uint8Array))
        b2 = Buffer2.from(b2, b2.offset, b2.byteLength);
      if (!Buffer2.isBuffer(a2) || !Buffer2.isBuffer(b2)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a2 === b2)
        return 0;
      let x = a2.length;
      let y2 = b2.length;
      for (let i2 = 0, len2 = Math.min(x, y2); i2 < len2; ++i2) {
        if (a2[i2] !== b2[i2]) {
          x = a2[i2];
          y2 = b2[i2];
          break;
        }
      }
      if (x < y2)
        return -1;
      if (y2 < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding2) {
      switch (String(encoding2).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      let i2;
      if (length === void 0) {
        length = 0;
        for (i2 = 0; i2 < list.length; ++i2) {
          length += list[i2].length;
        }
      }
      const buffer2 = Buffer2.allocUnsafe(length);
      let pos = 0;
      for (i2 = 0; i2 < list.length; ++i2) {
        let buf = list[i2];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer2.length) {
            if (!Buffer2.isBuffer(buf))
              buf = Buffer2.from(buf);
            buf.copy(buffer2, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer2,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer2, pos);
        }
        pos += buf.length;
      }
      return buffer2;
    };
    function byteLength2(string2, encoding2) {
      if (Buffer2.isBuffer(string2)) {
        return string2.length;
      }
      if (ArrayBuffer.isView(string2) || isInstance(string2, ArrayBuffer)) {
        return string2.byteLength;
      }
      if (typeof string2 !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string2
        );
      }
      const len2 = string2.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len2 === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding2) {
          case "ascii":
          case "latin1":
          case "binary":
            return len2;
          case "utf8":
          case "utf-8":
            return utf8ToBytes2(string2).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len2 * 2;
          case "hex":
            return len2 >>> 1;
          case "base64":
            return base64ToBytes(string2).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes2(string2).length;
            }
            encoding2 = ("" + encoding2).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength2;
    function slowToString(encoding2, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding2)
        encoding2 = "utf8";
      while (true) {
        switch (encoding2) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding2);
            encoding2 = (encoding2 + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b2, n2, m2) {
      const i2 = b2[n2];
      b2[n2] = b2[m2];
      b2[m2] = i2;
    }
    Buffer2.prototype.swap16 = function swap16() {
      const len2 = this.length;
      if (len2 % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i2 = 0; i2 < len2; i2 += 2) {
        swap(this, i2, i2 + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      const len2 = this.length;
      if (len2 % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i2 = 0; i2 < len2; i2 += 4) {
        swap(this, i2, i2 + 3);
        swap(this, i2 + 1, i2 + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      const len2 = this.length;
      if (len2 % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i2 = 0; i2 < len2; i2 += 8) {
        swap(this, i2, i2 + 7);
        swap(this, i2 + 1, i2 + 6);
        swap(this, i2 + 2, i2 + 5);
        swap(this, i2 + 3, i2 + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b2) {
      if (!Buffer2.isBuffer(b2))
        throw new TypeError("Argument must be a Buffer");
      if (this === b2)
        return true;
      return Buffer2.compare(this, b2) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x = thisEnd - thisStart;
      let y2 = end - start;
      const len2 = Math.min(x, y2);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i2 = 0; i2 < len2; ++i2) {
        if (thisCopy[i2] !== targetCopy[i2]) {
          x = thisCopy[i2];
          y2 = targetCopy[i2];
          break;
        }
      }
      if (x < y2)
        return -1;
      if (y2 < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer2, val, byteOffset, encoding2, dir) {
      if (buffer2.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding2 = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer2.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer2.length + byteOffset;
      if (byteOffset >= buffer2.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer2.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding2);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer2, val, byteOffset, encoding2, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer2, [val], byteOffset, encoding2, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding2, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding2 !== void 0) {
        encoding2 = String(encoding2).toLowerCase();
        if (encoding2 === "ucs2" || encoding2 === "ucs-2" || encoding2 === "utf16le" || encoding2 === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i3) {
        if (indexSize === 1) {
          return buf[i3];
        } else {
          return buf.readUInt16BE(i3 * indexSize);
        }
      }
      let i2;
      if (dir) {
        let foundIndex = -1;
        for (i2 = byteOffset; i2 < arrLength; i2++) {
          if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i2;
            if (i2 - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i2 -= i2 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i2 = byteOffset; i2 >= 0; i2--) {
          let found = true;
          for (let j2 = 0; j2 < valLength; j2++) {
            if (read(arr, i2 + j2) !== read(val, j2)) {
              found = false;
              break;
            }
          }
          if (found)
            return i2;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding2) {
      return this.indexOf(val, byteOffset, encoding2) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding2) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding2, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding2) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding2, false);
    };
    function hexWrite(buf, string2, offset2, length) {
      offset2 = Number(offset2) || 0;
      const remaining = buf.length - offset2;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string2.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i2;
      for (i2 = 0; i2 < length; ++i2) {
        const parsed = parseInt(string2.substr(i2 * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i2;
        buf[offset2 + i2] = parsed;
      }
      return i2;
    }
    function utf8Write(buf, string2, offset2, length) {
      return blitBuffer(utf8ToBytes2(string2, buf.length - offset2), buf, offset2, length);
    }
    function asciiWrite(buf, string2, offset2, length) {
      return blitBuffer(asciiToBytes(string2), buf, offset2, length);
    }
    function base64Write(buf, string2, offset2, length) {
      return blitBuffer(base64ToBytes(string2), buf, offset2, length);
    }
    function ucs2Write(buf, string2, offset2, length) {
      return blitBuffer(utf16leToBytes(string2, buf.length - offset2), buf, offset2, length);
    }
    Buffer2.prototype.write = function write(string2, offset2, length, encoding2) {
      if (offset2 === void 0) {
        encoding2 = "utf8";
        length = this.length;
        offset2 = 0;
      } else if (length === void 0 && typeof offset2 === "string") {
        encoding2 = offset2;
        length = this.length;
        offset2 = 0;
      } else if (isFinite(offset2)) {
        offset2 = offset2 >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding2 === void 0)
            encoding2 = "utf8";
        } else {
          encoding2 = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset2;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string2.length > 0 && (length < 0 || offset2 < 0) || offset2 > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding2)
        encoding2 = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding2) {
          case "hex":
            return hexWrite(this, string2, offset2, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string2, offset2, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string2, offset2, length);
          case "base64":
            return base64Write(this, string2, offset2, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string2, offset2, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding2);
            encoding2 = ("" + encoding2).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i2 = start;
      while (i2 < end) {
        const firstByte = buf[i2];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i2 + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i2 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              fourthByte = buf[i2 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i2 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len2 = codePoints.length;
      if (len2 <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i2 = 0;
      while (i2 < len2) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len2 = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len2)
        end = len2;
      let out = "";
      for (let i2 = start; i2 < end; ++i2) {
        out += hexSliceLookupTable[buf[i2]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes2 = buf.slice(start, end);
      let res = "";
      for (let i2 = 0; i2 < bytes2.length - 1; i2 += 2) {
        res += String.fromCharCode(bytes2[i2] + bytes2[i2 + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      const len2 = this.length;
      start = ~~start;
      end = end === void 0 ? len2 : ~~end;
      if (start < 0) {
        start += len2;
        if (start < 0)
          start = 0;
      } else if (start > len2) {
        start = len2;
      }
      if (end < 0) {
        end += len2;
        if (end < 0)
          end = 0;
      } else if (end > len2) {
        end = len2;
      }
      if (end < start)
        end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset2, ext, length) {
      if (offset2 % 1 !== 0 || offset2 < 0)
        throw new RangeError("offset is not uint");
      if (offset2 + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset2, byteLength3, noAssert) {
      offset2 = offset2 >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert)
        checkOffset(offset2, byteLength3, this.length);
      let val = this[offset2];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength3 && (mul *= 256)) {
        val += this[offset2 + i2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset2, byteLength3, noAssert) {
      offset2 = offset2 >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        checkOffset(offset2, byteLength3, this.length);
      }
      let val = this[offset2 + --byteLength3];
      let mul = 1;
      while (byteLength3 > 0 && (mul *= 256)) {
        val += this[offset2 + --byteLength3] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 1, this.length);
      return this[offset2];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 2, this.length);
      return this[offset2] | this[offset2 + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 2, this.length);
      return this[offset2] << 8 | this[offset2 + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return (this[offset2] | this[offset2 + 1] << 8 | this[offset2 + 2] << 16) + this[offset2 + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return this[offset2] * 16777216 + (this[offset2 + 1] << 16 | this[offset2 + 2] << 8 | this[offset2 + 3]);
    };
    Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset2) {
      offset2 = offset2 >>> 0;
      validateNumber(offset2, "offset");
      const first = this[offset2];
      const last = this[offset2 + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset2, this.length - 8);
      }
      const lo = first + this[++offset2] * 2 ** 8 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 24;
      const hi = this[++offset2] + this[++offset2] * 2 ** 8 + this[++offset2] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset2) {
      offset2 = offset2 >>> 0;
      validateNumber(offset2, "offset");
      const first = this[offset2];
      const last = this[offset2 + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset2, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + this[++offset2];
      const lo = this[++offset2] * 2 ** 24 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer2.prototype.readIntLE = function readIntLE(offset2, byteLength3, noAssert) {
      offset2 = offset2 >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert)
        checkOffset(offset2, byteLength3, this.length);
      let val = this[offset2];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength3 && (mul *= 256)) {
        val += this[offset2 + i2] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength3);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset2, byteLength3, noAssert) {
      offset2 = offset2 >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert)
        checkOffset(offset2, byteLength3, this.length);
      let i2 = byteLength3;
      let mul = 1;
      let val = this[offset2 + --i2];
      while (i2 > 0 && (mul *= 256)) {
        val += this[offset2 + --i2] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength3);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 1, this.length);
      if (!(this[offset2] & 128))
        return this[offset2];
      return (255 - this[offset2] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 2, this.length);
      const val = this[offset2] | this[offset2 + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 2, this.length);
      const val = this[offset2 + 1] | this[offset2] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return this[offset2] | this[offset2 + 1] << 8 | this[offset2 + 2] << 16 | this[offset2 + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return this[offset2] << 24 | this[offset2 + 1] << 16 | this[offset2 + 2] << 8 | this[offset2 + 3];
    };
    Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset2) {
      offset2 = offset2 >>> 0;
      validateNumber(offset2, "offset");
      const first = this[offset2];
      const last = this[offset2 + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset2, this.length - 8);
      }
      const val = this[offset2 + 4] + this[offset2 + 5] * 2 ** 8 + this[offset2 + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset2] * 2 ** 8 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 24);
    });
    Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset2) {
      offset2 = offset2 >>> 0;
      validateNumber(offset2, "offset");
      const first = this[offset2];
      const last = this[offset2 + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset2, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + this[++offset2];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset2] * 2 ** 24 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + last);
    });
    Buffer2.prototype.readFloatLE = function readFloatLE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return ieee754$1.read(this, offset2, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return ieee754$1.read(this, offset2, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 8, this.length);
      return ieee754$1.read(this, offset2, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 8, this.length);
      return ieee754$1.read(this, offset2, false, 52, 8);
    };
    function checkInt(buf, value, offset2, ext, max, min) {
      if (!Buffer2.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset2 + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset2, byteLength3, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt(this, value, offset2, byteLength3, maxBytes, 0);
      }
      let mul = 1;
      let i2 = 0;
      this[offset2] = value & 255;
      while (++i2 < byteLength3 && (mul *= 256)) {
        this[offset2 + i2] = value / mul & 255;
      }
      return offset2 + byteLength3;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset2, byteLength3, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt(this, value, offset2, byteLength3, maxBytes, 0);
      }
      let i2 = byteLength3 - 1;
      let mul = 1;
      this[offset2 + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        this[offset2 + i2] = value / mul & 255;
      }
      return offset2 + byteLength3;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 1, 255, 0);
      this[offset2] = value & 255;
      return offset2 + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 2, 65535, 0);
      this[offset2] = value & 255;
      this[offset2 + 1] = value >>> 8;
      return offset2 + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 2, 65535, 0);
      this[offset2] = value >>> 8;
      this[offset2 + 1] = value & 255;
      return offset2 + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 4, 4294967295, 0);
      this[offset2 + 3] = value >>> 24;
      this[offset2 + 2] = value >>> 16;
      this[offset2 + 1] = value >>> 8;
      this[offset2] = value & 255;
      return offset2 + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 4, 4294967295, 0);
      this[offset2] = value >>> 24;
      this[offset2 + 1] = value >>> 16;
      this[offset2 + 2] = value >>> 8;
      this[offset2 + 3] = value & 255;
      return offset2 + 4;
    };
    function wrtBigUInt64LE(buf, value, offset2, min, max) {
      checkIntBI(value, min, max, buf, offset2, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset2++] = lo;
      lo = lo >> 8;
      buf[offset2++] = lo;
      lo = lo >> 8;
      buf[offset2++] = lo;
      lo = lo >> 8;
      buf[offset2++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset2++] = hi;
      hi = hi >> 8;
      buf[offset2++] = hi;
      hi = hi >> 8;
      buf[offset2++] = hi;
      hi = hi >> 8;
      buf[offset2++] = hi;
      return offset2;
    }
    function wrtBigUInt64BE(buf, value, offset2, min, max) {
      checkIntBI(value, min, max, buf, offset2, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset2 + 7] = lo;
      lo = lo >> 8;
      buf[offset2 + 6] = lo;
      lo = lo >> 8;
      buf[offset2 + 5] = lo;
      lo = lo >> 8;
      buf[offset2 + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset2 + 3] = hi;
      hi = hi >> 8;
      buf[offset2 + 2] = hi;
      hi = hi >> 8;
      buf[offset2 + 1] = hi;
      hi = hi >> 8;
      buf[offset2] = hi;
      return offset2 + 8;
    }
    Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset2 = 0) {
      return wrtBigUInt64LE(this, value, offset2, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset2 = 0) {
      return wrtBigUInt64BE(this, value, offset2, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset2, byteLength3, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt(this, value, offset2, byteLength3, limit - 1, -limit);
      }
      let i2 = 0;
      let mul = 1;
      let sub = 0;
      this[offset2] = value & 255;
      while (++i2 < byteLength3 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset2 + i2 - 1] !== 0) {
          sub = 1;
        }
        this[offset2 + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset2 + byteLength3;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset2, byteLength3, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt(this, value, offset2, byteLength3, limit - 1, -limit);
      }
      let i2 = byteLength3 - 1;
      let mul = 1;
      let sub = 0;
      this[offset2 + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset2 + i2 + 1] !== 0) {
          sub = 1;
        }
        this[offset2 + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset2 + byteLength3;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset2] = value & 255;
      return offset2 + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 2, 32767, -32768);
      this[offset2] = value & 255;
      this[offset2 + 1] = value >>> 8;
      return offset2 + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 2, 32767, -32768);
      this[offset2] = value >>> 8;
      this[offset2 + 1] = value & 255;
      return offset2 + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 4, 2147483647, -2147483648);
      this[offset2] = value & 255;
      this[offset2 + 1] = value >>> 8;
      this[offset2 + 2] = value >>> 16;
      this[offset2 + 3] = value >>> 24;
      return offset2 + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset2] = value >>> 24;
      this[offset2 + 1] = value >>> 16;
      this[offset2 + 2] = value >>> 8;
      this[offset2 + 3] = value & 255;
      return offset2 + 4;
    };
    Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset2 = 0) {
      return wrtBigUInt64LE(this, value, offset2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset2 = 0) {
      return wrtBigUInt64BE(this, value, offset2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset2, ext, max, min) {
      if (offset2 + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset2 < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset2, littleEndian, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset2, 4);
      }
      ieee754$1.write(buf, value, offset2, littleEndian, 23, 4);
      return offset2 + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset2, noAssert) {
      return writeFloat(this, value, offset2, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset2, noAssert) {
      return writeFloat(this, value, offset2, false, noAssert);
    };
    function writeDouble(buf, value, offset2, littleEndian, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset2, 8);
      }
      ieee754$1.write(buf, value, offset2, littleEndian, 52, 8);
      return offset2 + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset2, noAssert) {
      return writeDouble(this, value, offset2, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset2, noAssert) {
      return writeDouble(this, value, offset2, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len2 = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len2;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding2) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding2 = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding2 = end;
          end = this.length;
        }
        if (encoding2 !== void 0 && typeof encoding2 !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding2 === "string" && !Buffer2.isEncoding(encoding2)) {
          throw new TypeError("Unknown encoding: " + encoding2);
        }
        if (val.length === 1) {
          const code2 = val.charCodeAt(0);
          if (encoding2 === "utf8" && code2 < 128 || encoding2 === "latin1") {
            val = code2;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i2;
      if (typeof val === "number") {
        for (i2 = start; i2 < end; ++i2) {
          this[i2] = val;
        }
      } else {
        const bytes2 = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding2);
        const len2 = bytes2.length;
        if (len2 === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i2 = 0; i2 < end - start; ++i2) {
          this[i2 + start] = bytes2[i2 % len2];
        }
      }
      return this;
    };
    const errors = {};
    function E2(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E2(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      },
      RangeError
    );
    E2(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      },
      TypeError
    );
    E2(
      "ERR_OUT_OF_RANGE",
      function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      },
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i2 = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i2 >= start + 4; i2 -= 3) {
        res = `_${val.slice(i2 - 3, i2)}${res}`;
      }
      return `${val.slice(0, i2)}${res}`;
    }
    function checkBounds(buf, offset2, byteLength3) {
      validateNumber(offset2, "offset");
      if (buf[offset2] === void 0 || buf[offset2 + byteLength3] === void 0) {
        boundsError(offset2, buf.length - (byteLength3 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset2, byteLength3) {
      if (value > max || value < min) {
        const n2 = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength3 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n2} and < 2${n2} ** ${(byteLength3 + 1) * 8}${n2}`;
          } else {
            range = `>= -(2${n2} ** ${(byteLength3 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength3 + 1) * 8 - 1}${n2}`;
          }
        } else {
          range = `>= ${min}${n2} and <= ${max}${n2}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset2, byteLength3);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type2) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type2);
        throw new errors.ERR_OUT_OF_RANGE(type2 || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(
        type2 || "offset",
        `>= ${type2 ? 1 : 0} and <= ${length}`,
        value
      );
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes2(string2, units) {
      units = units || Infinity;
      let codePoint;
      const length = string2.length;
      let leadSurrogate = null;
      const bytes2 = [];
      for (let i2 = 0; i2 < length; ++i2) {
        codePoint = string2.charCodeAt(i2);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes2.push(239, 191, 189);
              continue;
            } else if (i2 + 1 === length) {
              if ((units -= 3) > -1)
                bytes2.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes2.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes2.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes2.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes2.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes2.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes2.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes2;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        byteArray.push(str.charCodeAt(i2) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c2, hi, lo;
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        if ((units -= 2) < 0)
          break;
        c2 = str.charCodeAt(i2);
        hi = c2 >> 8;
        lo = c2 % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src2, dst, offset2, length) {
      let i2;
      for (i2 = 0; i2 < length; ++i2) {
        if (i2 + offset2 >= dst.length || i2 >= src2.length)
          break;
        dst[i2 + offset2] = src2[i2];
      }
      return i2;
    }
    function isInstance(obj, type2) {
      return obj instanceof type2 || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type2.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i2 = 0; i2 < 16; ++i2) {
        const i16 = i2 * 16;
        for (let j2 = 0; j2 < 16; ++j2) {
          table[i16 + j2] = alphabet[i2] + alphabet[j2];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  })(buffer);
  function number$1(n2) {
    if (!Number.isSafeInteger(n2) || n2 < 0)
      throw new Error(`positive integer expected, not ${n2}`);
  }
  function isBytes$1(a2) {
    return a2 instanceof Uint8Array || a2 != null && typeof a2 === "object" && a2.constructor.name === "Uint8Array";
  }
  function bytes(b2, ...lengths) {
    if (!isBytes$1(b2))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b2.length))
      throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b2.length}`);
  }
  function hash(h2) {
    if (typeof h2 !== "function" || typeof h2.create !== "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number$1(h2.outputLen);
    number$1(h2.blockLen);
  }
  function exists(instance2, checkFinished = true) {
    if (instance2.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance2.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function output(out, instance2) {
    bytes(out);
    const min = instance2.outputLen;
    if (out.length < min) {
      throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
  }
  const crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  const rotr = (word, shift) => word << 32 - shift | word >>> shift;
  new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  function utf8ToBytes$1(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes$1(data);
    bytes(data);
    return data;
  }
  function concatBytes$1(...arrays) {
    let sum = 0;
    for (let i2 = 0; i2 < arrays.length; i2++) {
      const a2 = arrays[i2];
      bytes(a2);
      sum += a2.length;
    }
    const res = new Uint8Array(sum);
    for (let i2 = 0, pad = 0; i2 < arrays.length; i2++) {
      const a2 = arrays[i2];
      res.set(a2, pad);
      pad += a2.length;
    }
    return res;
  }
  class Hash {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  function randomBytes(bytesLength = 32) {
    if (crypto && typeof crypto.getRandomValues === "function") {
      return crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error("crypto.getRandomValues must be defined");
  }
  function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE);
    const _32n2 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n2 & _u32_max);
    const wl = Number(value & _u32_max);
    const h2 = isLE ? 4 : 0;
    const l2 = isLE ? 0 : 4;
    view.setUint32(byteOffset + h2, wh, isLE);
    view.setUint32(byteOffset + l2, wl, isLE);
  }
  const Chi = (a2, b2, c2) => a2 & b2 ^ ~a2 & c2;
  const Maj = (a2, b2, c2) => a2 & b2 ^ a2 & c2 ^ b2 & c2;
  class HashMD extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE) {
      super();
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE;
      this.finished = false;
      this.length = 0;
      this.pos = 0;
      this.destroyed = false;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView(this.buffer);
    }
    update(data) {
      exists(this);
      const { view, buffer: buffer2, blockLen } = this;
      data = toBytes(data);
      const len2 = data.length;
      for (let pos = 0; pos < len2; ) {
        const take = Math.min(blockLen - this.pos, len2 - pos);
        if (take === blockLen) {
          const dataView = createView(data);
          for (; blockLen <= len2 - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer2.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      exists(this);
      output(out, this);
      this.finished = true;
      const { buffer: buffer2, view, blockLen, isLE } = this;
      let { pos } = this;
      buffer2[pos++] = 128;
      this.buffer.subarray(pos).fill(0);
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i2 = pos; i2 < blockLen; i2++)
        buffer2[i2] = 0;
      setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
      this.process(view, 0);
      const oview = createView(out);
      const len2 = this.outputLen;
      if (len2 % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const outLen = len2 / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i2 = 0; i2 < outLen; i2++)
        oview.setUint32(4 * i2, state[i2], isLE);
    }
    digest() {
      const { buffer: buffer2, outputLen } = this;
      this.digestInto(buffer2);
      const res = buffer2.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to) {
      to || (to = new this.constructor());
      to.set(...this.get());
      const { blockLen, buffer: buffer2, length, finished: finished2, destroyed, pos } = this;
      to.length = length;
      to.pos = pos;
      to.finished = finished2;
      to.destroyed = destroyed;
      if (length % blockLen)
        to.buffer.set(buffer2);
      return to;
    }
  }
  const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  const _32n = /* @__PURE__ */ BigInt(32);
  function fromBig(n2, le2 = false) {
    if (le2)
      return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
    return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
  }
  function split(lst, le2 = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i2 = 0; i2 < lst.length; i2++) {
      const { h: h2, l: l2 } = fromBig(lst[i2], le2);
      [Ah[i2], Al[i2]] = [h2, l2];
    }
    return [Ah, Al];
  }
  const toBig = (h2, l2) => BigInt(h2 >>> 0) << _32n | BigInt(l2 >>> 0);
  const shrSH = (h2, _l, s2) => h2 >>> s2;
  const shrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
  const rotrSH = (h2, l2, s2) => h2 >>> s2 | l2 << 32 - s2;
  const rotrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
  const rotrBH = (h2, l2, s2) => h2 << 64 - s2 | l2 >>> s2 - 32;
  const rotrBL = (h2, l2, s2) => h2 >>> s2 - 32 | l2 << 64 - s2;
  const rotr32H = (_h, l2) => l2;
  const rotr32L = (h2, _l) => h2;
  const rotlSH = (h2, l2, s2) => h2 << s2 | l2 >>> 32 - s2;
  const rotlSL = (h2, l2, s2) => l2 << s2 | h2 >>> 32 - s2;
  const rotlBH = (h2, l2, s2) => l2 << s2 - 32 | h2 >>> 64 - s2;
  const rotlBL = (h2, l2, s2) => h2 << s2 - 32 | l2 >>> 64 - s2;
  function add(Ah, Al, Bh, Bl) {
    const l2 = (Al >>> 0) + (Bl >>> 0);
    return { h: Ah + Bh + (l2 / 2 ** 32 | 0) | 0, l: l2 | 0 };
  }
  const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
  const add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
  const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
  const add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
  const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
  const add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
  const u64$1 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
  };
  const u64$2 = u64$1;
  const [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => u64$2.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((n2) => BigInt(n2))))();
  const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
  const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
  class SHA512 extends HashMD {
    constructor() {
      super(128, 64, 16, false);
      this.Ah = 1779033703 | 0;
      this.Al = 4089235720 | 0;
      this.Bh = 3144134277 | 0;
      this.Bl = 2227873595 | 0;
      this.Ch = 1013904242 | 0;
      this.Cl = 4271175723 | 0;
      this.Dh = 2773480762 | 0;
      this.Dl = 1595750129 | 0;
      this.Eh = 1359893119 | 0;
      this.El = 2917565137 | 0;
      this.Fh = 2600822924 | 0;
      this.Fl = 725511199 | 0;
      this.Gh = 528734635 | 0;
      this.Gl = 4215389547 | 0;
      this.Hh = 1541459225 | 0;
      this.Hl = 327033209 | 0;
    }
    // prettier-ignore
    get() {
      const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
      this.Ah = Ah | 0;
      this.Al = Al | 0;
      this.Bh = Bh | 0;
      this.Bl = Bl | 0;
      this.Ch = Ch | 0;
      this.Cl = Cl | 0;
      this.Dh = Dh | 0;
      this.Dl = Dl | 0;
      this.Eh = Eh | 0;
      this.El = El | 0;
      this.Fh = Fh | 0;
      this.Fl = Fl | 0;
      this.Gh = Gh | 0;
      this.Gl = Gl | 0;
      this.Hh = Hh | 0;
      this.Hl = Hl | 0;
    }
    process(view, offset2) {
      for (let i2 = 0; i2 < 16; i2++, offset2 += 4) {
        SHA512_W_H[i2] = view.getUint32(offset2);
        SHA512_W_L[i2] = view.getUint32(offset2 += 4);
      }
      for (let i2 = 16; i2 < 80; i2++) {
        const W15h = SHA512_W_H[i2 - 15] | 0;
        const W15l = SHA512_W_L[i2 - 15] | 0;
        const s0h = u64$2.rotrSH(W15h, W15l, 1) ^ u64$2.rotrSH(W15h, W15l, 8) ^ u64$2.shrSH(W15h, W15l, 7);
        const s0l = u64$2.rotrSL(W15h, W15l, 1) ^ u64$2.rotrSL(W15h, W15l, 8) ^ u64$2.shrSL(W15h, W15l, 7);
        const W2h = SHA512_W_H[i2 - 2] | 0;
        const W2l = SHA512_W_L[i2 - 2] | 0;
        const s1h = u64$2.rotrSH(W2h, W2l, 19) ^ u64$2.rotrBH(W2h, W2l, 61) ^ u64$2.shrSH(W2h, W2l, 6);
        const s1l = u64$2.rotrSL(W2h, W2l, 19) ^ u64$2.rotrBL(W2h, W2l, 61) ^ u64$2.shrSL(W2h, W2l, 6);
        const SUMl = u64$2.add4L(s0l, s1l, SHA512_W_L[i2 - 7], SHA512_W_L[i2 - 16]);
        const SUMh = u64$2.add4H(SUMl, s0h, s1h, SHA512_W_H[i2 - 7], SHA512_W_H[i2 - 16]);
        SHA512_W_H[i2] = SUMh | 0;
        SHA512_W_L[i2] = SUMl | 0;
      }
      let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      for (let i2 = 0; i2 < 80; i2++) {
        const sigma1h = u64$2.rotrSH(Eh, El, 14) ^ u64$2.rotrSH(Eh, El, 18) ^ u64$2.rotrBH(Eh, El, 41);
        const sigma1l = u64$2.rotrSL(Eh, El, 14) ^ u64$2.rotrSL(Eh, El, 18) ^ u64$2.rotrBL(Eh, El, 41);
        const CHIh = Eh & Fh ^ ~Eh & Gh;
        const CHIl = El & Fl ^ ~El & Gl;
        const T1ll = u64$2.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i2], SHA512_W_L[i2]);
        const T1h = u64$2.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i2], SHA512_W_H[i2]);
        const T1l = T1ll | 0;
        const sigma0h = u64$2.rotrSH(Ah, Al, 28) ^ u64$2.rotrBH(Ah, Al, 34) ^ u64$2.rotrBH(Ah, Al, 39);
        const sigma0l = u64$2.rotrSL(Ah, Al, 28) ^ u64$2.rotrBL(Ah, Al, 34) ^ u64$2.rotrBL(Ah, Al, 39);
        const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
        const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
        Hh = Gh | 0;
        Hl = Gl | 0;
        Gh = Fh | 0;
        Gl = Fl | 0;
        Fh = Eh | 0;
        Fl = El | 0;
        ({ h: Eh, l: El } = u64$2.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
        Dh = Ch | 0;
        Dl = Cl | 0;
        Ch = Bh | 0;
        Cl = Bl | 0;
        Bh = Ah | 0;
        Bl = Al | 0;
        const All = u64$2.add3L(T1l, sigma0l, MAJl);
        Ah = u64$2.add3H(All, T1h, sigma0h, MAJh);
        Al = All | 0;
      }
      ({ h: Ah, l: Al } = u64$2.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
      ({ h: Bh, l: Bl } = u64$2.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
      ({ h: Ch, l: Cl } = u64$2.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
      ({ h: Dh, l: Dl } = u64$2.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
      ({ h: Eh, l: El } = u64$2.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
      ({ h: Fh, l: Fl } = u64$2.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
      ({ h: Gh, l: Gl } = u64$2.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
      ({ h: Hh, l: Hl } = u64$2.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
      this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
      SHA512_W_H.fill(0);
      SHA512_W_L.fill(0);
    }
    destroy() {
      this.buffer.fill(0);
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  const sha512 = /* @__PURE__ */ wrapConstructor(() => new SHA512());
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const _0n$4 = BigInt(0);
  const _1n$6 = BigInt(1);
  const _2n$4 = BigInt(2);
  function isBytes(a2) {
    return a2 instanceof Uint8Array || a2 != null && typeof a2 === "object" && a2.constructor.name === "Uint8Array";
  }
  function abytes(item) {
    if (!isBytes(item))
      throw new Error("Uint8Array expected");
  }
  const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i2) => i2.toString(16).padStart(2, "0"));
  function bytesToHex(bytes2) {
    abytes(bytes2);
    let hex = "";
    for (let i2 = 0; i2 < bytes2.length; i2++) {
      hex += hexes[bytes2[i2]];
    }
    return hex;
  }
  function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
  }
  function hexToNumber(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    return BigInt(hex === "" ? "0" : `0x${hex}`);
  }
  const asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9)
      return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F)
      return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f)
      return char - (asciis._a - 10);
    return;
  }
  function hexToBytes(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + hl);
    const array2 = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      const n1 = asciiToBase16(hex.charCodeAt(hi));
      const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
      if (n1 === void 0 || n2 === void 0) {
        const char = hex[hi] + hex[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array2[ai] = n1 * 16 + n2;
    }
    return array2;
  }
  function bytesToNumberBE(bytes2) {
    return hexToNumber(bytesToHex(bytes2));
  }
  function bytesToNumberLE(bytes2) {
    abytes(bytes2);
    return hexToNumber(bytesToHex(Uint8Array.from(bytes2).reverse()));
  }
  function numberToBytesBE(n2, len2) {
    return hexToBytes(n2.toString(16).padStart(len2 * 2, "0"));
  }
  function numberToBytesLE(n2, len2) {
    return numberToBytesBE(n2, len2).reverse();
  }
  function numberToVarBytesBE(n2) {
    return hexToBytes(numberToHexUnpadded(n2));
  }
  function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === "string") {
      try {
        res = hexToBytes(hex);
      } catch (e2) {
        throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e2}`);
      }
    } else if (isBytes(hex)) {
      res = Uint8Array.from(hex);
    } else {
      throw new Error(`${title} must be hex string or Uint8Array`);
    }
    const len2 = res.length;
    if (typeof expectedLength === "number" && len2 !== expectedLength)
      throw new Error(`${title} expected ${expectedLength} bytes, got ${len2}`);
    return res;
  }
  function concatBytes(...arrays) {
    let sum = 0;
    for (let i2 = 0; i2 < arrays.length; i2++) {
      const a2 = arrays[i2];
      abytes(a2);
      sum += a2.length;
    }
    const res = new Uint8Array(sum);
    for (let i2 = 0, pad = 0; i2 < arrays.length; i2++) {
      const a2 = arrays[i2];
      res.set(a2, pad);
      pad += a2.length;
    }
    return res;
  }
  function equalBytes(a2, b2) {
    if (a2.length !== b2.length)
      return false;
    let diff = 0;
    for (let i2 = 0; i2 < a2.length; i2++)
      diff |= a2[i2] ^ b2[i2];
    return diff === 0;
  }
  function utf8ToBytes(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function bitLen(n2) {
    let len2;
    for (len2 = 0; n2 > _0n$4; n2 >>= _1n$6, len2 += 1)
      ;
    return len2;
  }
  function bitGet(n2, pos) {
    return n2 >> BigInt(pos) & _1n$6;
  }
  function bitSet(n2, pos, value) {
    return n2 | (value ? _1n$6 : _0n$4) << BigInt(pos);
  }
  const bitMask = (n2) => (_2n$4 << BigInt(n2 - 1)) - _1n$6;
  const u8n = (data) => new Uint8Array(data);
  const u8fr = (arr) => Uint8Array.from(arr);
  function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== "number" || hashLen < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    if (typeof hmacFn !== "function")
      throw new Error("hmacFn must be a function");
    let v2 = u8n(hashLen);
    let k = u8n(hashLen);
    let i2 = 0;
    const reset = () => {
      v2.fill(1);
      k.fill(0);
      i2 = 0;
    };
    const h2 = (...b2) => hmacFn(k, v2, ...b2);
    const reseed = (seed = u8n()) => {
      k = h2(u8fr([0]), seed);
      v2 = h2();
      if (seed.length === 0)
        return;
      k = h2(u8fr([1]), seed);
      v2 = h2();
    };
    const gen = () => {
      if (i2++ >= 1e3)
        throw new Error("drbg: tried 1000 values");
      let len2 = 0;
      const out = [];
      while (len2 < qByteLen) {
        v2 = h2();
        const sl = v2.slice();
        out.push(sl);
        len2 += v2.length;
      }
      return concatBytes(...out);
    };
    const genUntil = (seed, pred) => {
      reset();
      reseed(seed);
      let res = void 0;
      while (!(res = pred(gen())))
        reseed();
      reset();
      return res;
    };
    return genUntil;
  }
  const validatorFns = {
    bigint: (val) => typeof val === "bigint",
    function: (val) => typeof val === "function",
    boolean: (val) => typeof val === "boolean",
    string: (val) => typeof val === "string",
    stringOrUint8Array: (val) => typeof val === "string" || isBytes(val),
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
  };
  function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type2, isOptional) => {
      const checkVal = validatorFns[type2];
      if (typeof checkVal !== "function")
        throw new Error(`Invalid validator "${type2}", expected function`);
      const val = object[fieldName];
      if (isOptional && val === void 0)
        return;
      if (!checkVal(val, object)) {
        throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type2}`);
      }
    };
    for (const [fieldName, type2] of Object.entries(validators))
      checkField(fieldName, type2, false);
    for (const [fieldName, type2] of Object.entries(optValidators))
      checkField(fieldName, type2, true);
    return object;
  }
  const ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    abytes,
    bitGet,
    bitLen,
    bitMask,
    bitSet,
    bytesToHex,
    bytesToNumberBE,
    bytesToNumberLE,
    concatBytes,
    createHmacDrbg,
    ensureBytes,
    equalBytes,
    hexToBytes,
    hexToNumber,
    isBytes,
    numberToBytesBE,
    numberToBytesLE,
    numberToHexUnpadded,
    numberToVarBytesBE,
    utf8ToBytes,
    validateObject
  }, Symbol.toStringTag, { value: "Module" }));
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const _0n$3 = BigInt(0), _1n$5 = BigInt(1), _2n$3 = BigInt(2), _3n$1 = BigInt(3);
  const _4n = BigInt(4), _5n$1 = BigInt(5), _8n$1 = BigInt(8);
  BigInt(9);
  BigInt(16);
  function mod(a2, b2) {
    const result = a2 % b2;
    return result >= _0n$3 ? result : b2 + result;
  }
  function pow(num, power, modulo) {
    if (modulo <= _0n$3 || power < _0n$3)
      throw new Error("Expected power/modulo > 0");
    if (modulo === _1n$5)
      return _0n$3;
    let res = _1n$5;
    while (power > _0n$3) {
      if (power & _1n$5)
        res = res * num % modulo;
      num = num * num % modulo;
      power >>= _1n$5;
    }
    return res;
  }
  function pow2(x, power, modulo) {
    let res = x;
    while (power-- > _0n$3) {
      res *= res;
      res %= modulo;
    }
    return res;
  }
  function invert(number2, modulo) {
    if (number2 === _0n$3 || modulo <= _0n$3) {
      throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
    }
    let a2 = mod(number2, modulo);
    let b2 = modulo;
    let x = _0n$3, u2 = _1n$5;
    while (a2 !== _0n$3) {
      const q2 = b2 / a2;
      const r2 = b2 % a2;
      const m2 = x - u2 * q2;
      b2 = a2, a2 = r2, x = u2, u2 = m2;
    }
    const gcd = b2;
    if (gcd !== _1n$5)
      throw new Error("invert: does not exist");
    return mod(x, modulo);
  }
  function tonelliShanks(P2) {
    const legendreC = (P2 - _1n$5) / _2n$3;
    let Q2, S2, Z2;
    for (Q2 = P2 - _1n$5, S2 = 0; Q2 % _2n$3 === _0n$3; Q2 /= _2n$3, S2++)
      ;
    for (Z2 = _2n$3; Z2 < P2 && pow(Z2, legendreC, P2) !== P2 - _1n$5; Z2++)
      ;
    if (S2 === 1) {
      const p1div4 = (P2 + _1n$5) / _4n;
      return function tonelliFast(Fp2, n2) {
        const root = Fp2.pow(n2, p1div4);
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    const Q1div2 = (Q2 + _1n$5) / _2n$3;
    return function tonelliSlow(Fp2, n2) {
      if (Fp2.pow(n2, legendreC) === Fp2.neg(Fp2.ONE))
        throw new Error("Cannot find square root");
      let r2 = S2;
      let g2 = Fp2.pow(Fp2.mul(Fp2.ONE, Z2), Q2);
      let x = Fp2.pow(n2, Q1div2);
      let b2 = Fp2.pow(n2, Q2);
      while (!Fp2.eql(b2, Fp2.ONE)) {
        if (Fp2.eql(b2, Fp2.ZERO))
          return Fp2.ZERO;
        let m2 = 1;
        for (let t2 = Fp2.sqr(b2); m2 < r2; m2++) {
          if (Fp2.eql(t2, Fp2.ONE))
            break;
          t2 = Fp2.sqr(t2);
        }
        const ge2 = Fp2.pow(g2, _1n$5 << BigInt(r2 - m2 - 1));
        g2 = Fp2.sqr(ge2);
        x = Fp2.mul(x, ge2);
        b2 = Fp2.mul(b2, g2);
        r2 = m2;
      }
      return x;
    };
  }
  function FpSqrt(P2) {
    if (P2 % _4n === _3n$1) {
      const p1div4 = (P2 + _1n$5) / _4n;
      return function sqrt3mod4(Fp2, n2) {
        const root = Fp2.pow(n2, p1div4);
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    if (P2 % _8n$1 === _5n$1) {
      const c1 = (P2 - _5n$1) / _8n$1;
      return function sqrt5mod8(Fp2, n2) {
        const n22 = Fp2.mul(n2, _2n$3);
        const v2 = Fp2.pow(n22, c1);
        const nv = Fp2.mul(n2, v2);
        const i2 = Fp2.mul(Fp2.mul(nv, _2n$3), v2);
        const root = Fp2.mul(nv, Fp2.sub(i2, Fp2.ONE));
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    return tonelliShanks(P2);
  }
  const isNegativeLE = (num, modulo) => (mod(num, modulo) & _1n$5) === _1n$5;
  const FIELD_FIELDS = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function validateField(field) {
    const initial = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
      map[val] = "function";
      return map;
    }, initial);
    return validateObject(field, opts);
  }
  function FpPow(f2, num, power) {
    if (power < _0n$3)
      throw new Error("Expected power > 0");
    if (power === _0n$3)
      return f2.ONE;
    if (power === _1n$5)
      return num;
    let p2 = f2.ONE;
    let d2 = num;
    while (power > _0n$3) {
      if (power & _1n$5)
        p2 = f2.mul(p2, d2);
      d2 = f2.sqr(d2);
      power >>= _1n$5;
    }
    return p2;
  }
  function FpInvertBatch(f2, nums) {
    const tmp = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i2) => {
      if (f2.is0(num))
        return acc;
      tmp[i2] = acc;
      return f2.mul(acc, num);
    }, f2.ONE);
    const inverted = f2.inv(lastMultiplied);
    nums.reduceRight((acc, num, i2) => {
      if (f2.is0(num))
        return acc;
      tmp[i2] = f2.mul(acc, tmp[i2]);
      return f2.mul(acc, num);
    }, inverted);
    return tmp;
  }
  function nLength(n2, nBitLength) {
    const _nBitLength = nBitLength !== void 0 ? nBitLength : n2.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
  }
  function Field(ORDER, bitLen2, isLE = false, redef = {}) {
    if (ORDER <= _0n$3)
      throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
    if (BYTES > 2048)
      throw new Error("Field lengths over 2048 bytes are not supported");
    const sqrtP = FpSqrt(ORDER);
    const f2 = Object.freeze({
      ORDER,
      BITS,
      BYTES,
      MASK: bitMask(BITS),
      ZERO: _0n$3,
      ONE: _1n$5,
      create: (num) => mod(num, ORDER),
      isValid: (num) => {
        if (typeof num !== "bigint")
          throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
        return _0n$3 <= num && num < ORDER;
      },
      is0: (num) => num === _0n$3,
      isOdd: (num) => (num & _1n$5) === _1n$5,
      neg: (num) => mod(-num, ORDER),
      eql: (lhs, rhs) => lhs === rhs,
      sqr: (num) => mod(num * num, ORDER),
      add: (lhs, rhs) => mod(lhs + rhs, ORDER),
      sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
      mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
      pow: (num, power) => FpPow(f2, num, power),
      div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
      // Same as above, but doesn't normalize
      sqrN: (num) => num * num,
      addN: (lhs, rhs) => lhs + rhs,
      subN: (lhs, rhs) => lhs - rhs,
      mulN: (lhs, rhs) => lhs * rhs,
      inv: (num) => invert(num, ORDER),
      sqrt: redef.sqrt || ((n2) => sqrtP(f2, n2)),
      invertBatch: (lst) => FpInvertBatch(f2, lst),
      // TODO: do we really need constant cmov?
      // We don't have const-time bigints anyway, so probably will be not very useful
      cmov: (a2, b2, c2) => c2 ? b2 : a2,
      toBytes: (num) => isLE ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
      fromBytes: (bytes2) => {
        if (bytes2.length !== BYTES)
          throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes2.length}`);
        return isLE ? bytesToNumberLE(bytes2) : bytesToNumberBE(bytes2);
      }
    });
    return Object.freeze(f2);
  }
  function FpSqrtEven(Fp2, elm) {
    if (!Fp2.isOdd)
      throw new Error(`Field doesn't have isOdd`);
    const root = Fp2.sqrt(elm);
    return Fp2.isOdd(root) ? Fp2.neg(root) : root;
  }
  function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== "bigint")
      throw new Error("field order must be bigint");
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
  }
  function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
  }
  function mapHashToField(key, fieldOrder, isLE = false) {
    const len2 = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    if (len2 < 16 || len2 < minLen || len2 > 1024)
      throw new Error(`expected ${minLen}-1024 bytes of input, got ${len2}`);
    const num = isLE ? bytesToNumberBE(key) : bytesToNumberLE(key);
    const reduced = mod(num, fieldOrder - _1n$5) + _1n$5;
    return isLE ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const _0n$2 = BigInt(0);
  const _1n$4 = BigInt(1);
  function wNAF(c2, bits) {
    const constTimeNegate = (condition, item) => {
      const neg = item.negate();
      return condition ? neg : item;
    };
    const opts = (W2) => {
      const windows = Math.ceil(bits / W2) + 1;
      const windowSize = 2 ** (W2 - 1);
      return { windows, windowSize };
    };
    return {
      constTimeNegate,
      // non-const time multiplication ladder
      unsafeLadder(elm, n2) {
        let p2 = c2.ZERO;
        let d2 = elm;
        while (n2 > _0n$2) {
          if (n2 & _1n$4)
            p2 = p2.add(d2);
          d2 = d2.double();
          n2 >>= _1n$4;
        }
        return p2;
      },
      /**
       * Creates a wNAF precomputation window. Used for caching.
       * Default window size is set by `utils.precompute()` and is equal to 8.
       * Number of precomputed points depends on the curve size:
       * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
       * - 𝑊 is the window size
       * - 𝑛 is the bitlength of the curve order.
       * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
       * @returns precomputed point tables flattened to a single array
       */
      precomputeWindow(elm, W2) {
        const { windows, windowSize } = opts(W2);
        const points = [];
        let p2 = elm;
        let base2 = p2;
        for (let window2 = 0; window2 < windows; window2++) {
          base2 = p2;
          points.push(base2);
          for (let i2 = 1; i2 < windowSize; i2++) {
            base2 = base2.add(p2);
            points.push(base2);
          }
          p2 = base2.double();
        }
        return points;
      },
      /**
       * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @returns real and fake (for const-time) points
       */
      wNAF(W2, precomputes, n2) {
        const { windows, windowSize } = opts(W2);
        let p2 = c2.ZERO;
        let f2 = c2.BASE;
        const mask2 = BigInt(2 ** W2 - 1);
        const maxNumber = 2 ** W2;
        const shiftBy = BigInt(W2);
        for (let window2 = 0; window2 < windows; window2++) {
          const offset2 = window2 * windowSize;
          let wbits = Number(n2 & mask2);
          n2 >>= shiftBy;
          if (wbits > windowSize) {
            wbits -= maxNumber;
            n2 += _1n$4;
          }
          const offset1 = offset2;
          const offset22 = offset2 + Math.abs(wbits) - 1;
          const cond1 = window2 % 2 !== 0;
          const cond2 = wbits < 0;
          if (wbits === 0) {
            f2 = f2.add(constTimeNegate(cond1, precomputes[offset1]));
          } else {
            p2 = p2.add(constTimeNegate(cond2, precomputes[offset22]));
          }
        }
        return { p: p2, f: f2 };
      },
      wNAFCached(P2, precomputesMap, n2, transform) {
        const W2 = P2._WINDOW_SIZE || 1;
        let comp = precomputesMap.get(P2);
        if (!comp) {
          comp = this.precomputeWindow(P2, W2);
          if (W2 !== 1) {
            precomputesMap.set(P2, transform(comp));
          }
        }
        return this.wNAF(W2, comp, n2);
      }
    };
  }
  function validateBasic(curve) {
    validateField(curve.Fp);
    validateObject(curve, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    });
    return Object.freeze({
      ...nLength(curve.n, curve.nBitLength),
      ...curve,
      ...{ p: curve.Fp.ORDER }
    });
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const _0n$1 = BigInt(0), _1n$3 = BigInt(1), _2n$2 = BigInt(2), _8n = BigInt(8);
  const VERIFY_DEFAULT = { zip215: true };
  function validateOpts$1(curve) {
    const opts = validateBasic(curve);
    validateObject(curve, {
      hash: "function",
      a: "bigint",
      d: "bigint",
      randomBytes: "function"
    }, {
      adjustScalarBytes: "function",
      domain: "function",
      uvRatio: "function",
      mapToCurve: "function"
    });
    return Object.freeze({ ...opts });
  }
  function twistedEdwards(curveDef) {
    const CURVE = validateOpts$1(curveDef);
    const { Fp: Fp2, n: CURVE_ORDER, prehash, hash: cHash, randomBytes: randomBytes2, nByteLength, h: cofactor } = CURVE;
    const MASK = _2n$2 << BigInt(nByteLength * 8) - _1n$3;
    const modP = Fp2.create;
    const uvRatio2 = CURVE.uvRatio || ((u2, v2) => {
      try {
        return { isValid: true, value: Fp2.sqrt(u2 * Fp2.inv(v2)) };
      } catch (e2) {
        return { isValid: false, value: _0n$1 };
      }
    });
    const adjustScalarBytes2 = CURVE.adjustScalarBytes || ((bytes2) => bytes2);
    const domain = CURVE.domain || ((data, ctx, phflag) => {
      if (ctx.length || phflag)
        throw new Error("Contexts/pre-hash are not supported");
      return data;
    });
    const inBig = (n2) => typeof n2 === "bigint" && _0n$1 < n2;
    const inRange2 = (n2, max) => inBig(n2) && inBig(max) && n2 < max;
    const in0MaskRange = (n2) => n2 === _0n$1 || inRange2(n2, MASK);
    function assertInRange(n2, max) {
      if (inRange2(n2, max))
        return n2;
      throw new Error(`Expected valid scalar < ${max}, got ${typeof n2} ${n2}`);
    }
    function assertGE0(n2) {
      return n2 === _0n$1 ? n2 : assertInRange(n2, CURVE_ORDER);
    }
    const pointPrecomputes = /* @__PURE__ */ new Map();
    function isPoint(other) {
      if (!(other instanceof Point))
        throw new Error("ExtendedPoint expected");
    }
    class Point {
      constructor(ex, ey, ez, et2) {
        this.ex = ex;
        this.ey = ey;
        this.ez = ez;
        this.et = et2;
        if (!in0MaskRange(ex))
          throw new Error("x required");
        if (!in0MaskRange(ey))
          throw new Error("y required");
        if (!in0MaskRange(ez))
          throw new Error("z required");
        if (!in0MaskRange(et2))
          throw new Error("t required");
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      static fromAffine(p2) {
        if (p2 instanceof Point)
          throw new Error("extended point not allowed");
        const { x, y: y2 } = p2 || {};
        if (!in0MaskRange(x) || !in0MaskRange(y2))
          throw new Error("invalid affine point");
        return new Point(x, y2, _1n$3, modP(x * y2));
      }
      static normalizeZ(points) {
        const toInv = Fp2.invertBatch(points.map((p2) => p2.ez));
        return points.map((p2, i2) => p2.toAffine(toInv[i2])).map(Point.fromAffine);
      }
      // "Private method", don't use it directly
      _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes.delete(this);
      }
      // Not required for fromHex(), which always creates valid points.
      // Could be useful for fromAffine().
      assertValidity() {
        const { a: a2, d: d2 } = CURVE;
        if (this.is0())
          throw new Error("bad point: ZERO");
        const { ex: X2, ey: Y2, ez: Z2, et: T2 } = this;
        const X22 = modP(X2 * X2);
        const Y22 = modP(Y2 * Y2);
        const Z22 = modP(Z2 * Z2);
        const Z4 = modP(Z22 * Z22);
        const aX2 = modP(X22 * a2);
        const left = modP(Z22 * modP(aX2 + Y22));
        const right = modP(Z4 + modP(d2 * modP(X22 * Y22)));
        if (left !== right)
          throw new Error("bad point: equation left != right (1)");
        const XY = modP(X2 * Y2);
        const ZT = modP(Z2 * T2);
        if (XY !== ZT)
          throw new Error("bad point: equation left != right (2)");
      }
      // Compare one point to another.
      equals(other) {
        isPoint(other);
        const { ex: X1, ey: Y1, ez: Z1 } = this;
        const { ex: X2, ey: Y2, ez: Z2 } = other;
        const X1Z2 = modP(X1 * Z2);
        const X2Z1 = modP(X2 * Z1);
        const Y1Z2 = modP(Y1 * Z2);
        const Y2Z1 = modP(Y2 * Z1);
        return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
      }
      is0() {
        return this.equals(Point.ZERO);
      }
      negate() {
        return new Point(modP(-this.ex), this.ey, this.ez, modP(-this.et));
      }
      // Fast algo for doubling Extended Point.
      // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
      // Cost: 4M + 4S + 1*a + 6add + 1*2.
      double() {
        const { a: a2 } = CURVE;
        const { ex: X1, ey: Y1, ez: Z1 } = this;
        const A2 = modP(X1 * X1);
        const B2 = modP(Y1 * Y1);
        const C2 = modP(_2n$2 * modP(Z1 * Z1));
        const D2 = modP(a2 * A2);
        const x1y1 = X1 + Y1;
        const E2 = modP(modP(x1y1 * x1y1) - A2 - B2);
        const G3 = D2 + B2;
        const F2 = G3 - C2;
        const H2 = D2 - B2;
        const X3 = modP(E2 * F2);
        const Y3 = modP(G3 * H2);
        const T3 = modP(E2 * H2);
        const Z3 = modP(F2 * G3);
        return new Point(X3, Y3, Z3, T3);
      }
      // Fast algo for adding 2 Extended Points.
      // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
      // Cost: 9M + 1*a + 1*d + 7add.
      add(other) {
        isPoint(other);
        const { a: a2, d: d2 } = CURVE;
        const { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
        const { ex: X2, ey: Y2, ez: Z2, et: T2 } = other;
        if (a2 === BigInt(-1)) {
          const A3 = modP((Y1 - X1) * (Y2 + X2));
          const B3 = modP((Y1 + X1) * (Y2 - X2));
          const F3 = modP(B3 - A3);
          if (F3 === _0n$1)
            return this.double();
          const C3 = modP(Z1 * _2n$2 * T2);
          const D3 = modP(T1 * _2n$2 * Z2);
          const E3 = D3 + C3;
          const G4 = B3 + A3;
          const H3 = D3 - C3;
          const X32 = modP(E3 * F3);
          const Y32 = modP(G4 * H3);
          const T32 = modP(E3 * H3);
          const Z32 = modP(F3 * G4);
          return new Point(X32, Y32, Z32, T32);
        }
        const A2 = modP(X1 * X2);
        const B2 = modP(Y1 * Y2);
        const C2 = modP(T1 * d2 * T2);
        const D2 = modP(Z1 * Z2);
        const E2 = modP((X1 + Y1) * (X2 + Y2) - A2 - B2);
        const F2 = D2 - C2;
        const G3 = D2 + C2;
        const H2 = modP(B2 - a2 * A2);
        const X3 = modP(E2 * F2);
        const Y3 = modP(G3 * H2);
        const T3 = modP(E2 * H2);
        const Z3 = modP(F2 * G3);
        return new Point(X3, Y3, Z3, T3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      wNAF(n2) {
        return wnaf.wNAFCached(this, pointPrecomputes, n2, Point.normalizeZ);
      }
      // Constant-time multiplication.
      multiply(scalar) {
        const { p: p2, f: f2 } = this.wNAF(assertInRange(scalar, CURVE_ORDER));
        return Point.normalizeZ([p2, f2])[0];
      }
      // Non-constant-time multiplication. Uses double-and-add algorithm.
      // It's faster, but should only be used when you don't care about
      // an exposed private key e.g. sig verification.
      // Does NOT allow scalars higher than CURVE.n.
      multiplyUnsafe(scalar) {
        let n2 = assertGE0(scalar);
        if (n2 === _0n$1)
          return I2;
        if (this.equals(I2) || n2 === _1n$3)
          return this;
        if (this.equals(G2))
          return this.wNAF(n2).p;
        return wnaf.unsafeLadder(this, n2);
      }
      // Checks if point is of small order.
      // If you add something to small order point, you will have "dirty"
      // point with torsion component.
      // Multiplies point by cofactor and checks if the result is 0.
      isSmallOrder() {
        return this.multiplyUnsafe(cofactor).is0();
      }
      // Multiplies point by curve order and checks if the result is 0.
      // Returns `false` is the point is dirty.
      isTorsionFree() {
        return wnaf.unsafeLadder(this, CURVE_ORDER).is0();
      }
      // Converts Extended point to default (x, y) coordinates.
      // Can accept precomputed Z^-1 - for example, from invertBatch.
      toAffine(iz) {
        const { ex: x, ey: y2, ez: z2 } = this;
        const is0 = this.is0();
        if (iz == null)
          iz = is0 ? _8n : Fp2.inv(z2);
        const ax = modP(x * iz);
        const ay = modP(y2 * iz);
        const zz = modP(z2 * iz);
        if (is0)
          return { x: _0n$1, y: _1n$3 };
        if (zz !== _1n$3)
          throw new Error("invZ was invalid");
        return { x: ax, y: ay };
      }
      clearCofactor() {
        const { h: cofactor2 } = CURVE;
        if (cofactor2 === _1n$3)
          return this;
        return this.multiplyUnsafe(cofactor2);
      }
      // Converts hash string or Uint8Array to Point.
      // Uses algo from RFC8032 5.1.3.
      static fromHex(hex, zip215 = false) {
        const { d: d2, a: a2 } = CURVE;
        const len2 = Fp2.BYTES;
        hex = ensureBytes("pointHex", hex, len2);
        const normed = hex.slice();
        const lastByte = hex[len2 - 1];
        normed[len2 - 1] = lastByte & ~128;
        const y2 = bytesToNumberLE(normed);
        if (y2 === _0n$1)
          ;
        else {
          if (zip215)
            assertInRange(y2, MASK);
          else
            assertInRange(y2, Fp2.ORDER);
        }
        const y22 = modP(y2 * y2);
        const u2 = modP(y22 - _1n$3);
        const v2 = modP(d2 * y22 - a2);
        let { isValid, value: x } = uvRatio2(u2, v2);
        if (!isValid)
          throw new Error("Point.fromHex: invalid y coordinate");
        const isXOdd = (x & _1n$3) === _1n$3;
        const isLastByteOdd = (lastByte & 128) !== 0;
        if (!zip215 && x === _0n$1 && isLastByteOdd)
          throw new Error("Point.fromHex: x=0 and x_0=1");
        if (isLastByteOdd !== isXOdd)
          x = modP(-x);
        return Point.fromAffine({ x, y: y2 });
      }
      static fromPrivateKey(privKey) {
        return getExtendedPublicKey(privKey).point;
      }
      toRawBytes() {
        const { x, y: y2 } = this.toAffine();
        const bytes2 = numberToBytesLE(y2, Fp2.BYTES);
        bytes2[bytes2.length - 1] |= x & _1n$3 ? 128 : 0;
        return bytes2;
      }
      toHex() {
        return bytesToHex(this.toRawBytes());
      }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, _1n$3, modP(CURVE.Gx * CURVE.Gy));
    Point.ZERO = new Point(_0n$1, _1n$3, _1n$3, _0n$1);
    const { BASE: G2, ZERO: I2 } = Point;
    const wnaf = wNAF(Point, nByteLength * 8);
    function modN(a2) {
      return mod(a2, CURVE_ORDER);
    }
    function modN_LE(hash2) {
      return modN(bytesToNumberLE(hash2));
    }
    function getExtendedPublicKey(key) {
      const len2 = nByteLength;
      key = ensureBytes("private key", key, len2);
      const hashed = ensureBytes("hashed private key", cHash(key), 2 * len2);
      const head = adjustScalarBytes2(hashed.slice(0, len2));
      const prefix = hashed.slice(len2, 2 * len2);
      const scalar = modN_LE(head);
      const point = G2.multiply(scalar);
      const pointBytes = point.toRawBytes();
      return { head, prefix, scalar, point, pointBytes };
    }
    function getPublicKey2(privKey) {
      return getExtendedPublicKey(privKey).pointBytes;
    }
    function hashDomainToScalar(context = new Uint8Array(), ...msgs) {
      const msg = concatBytes(...msgs);
      return modN_LE(cHash(domain(msg, ensureBytes("context", context), !!prehash)));
    }
    function sign(msg, privKey, options = {}) {
      msg = ensureBytes("message", msg);
      if (prehash)
        msg = prehash(msg);
      const { prefix, scalar, pointBytes } = getExtendedPublicKey(privKey);
      const r2 = hashDomainToScalar(options.context, prefix, msg);
      const R2 = G2.multiply(r2).toRawBytes();
      const k = hashDomainToScalar(options.context, R2, pointBytes, msg);
      const s2 = modN(r2 + k * scalar);
      assertGE0(s2);
      const res = concatBytes(R2, numberToBytesLE(s2, Fp2.BYTES));
      return ensureBytes("result", res, nByteLength * 2);
    }
    const verifyOpts = VERIFY_DEFAULT;
    function verify(sig, msg, publicKey2, options = verifyOpts) {
      const { context, zip215 } = options;
      const len2 = Fp2.BYTES;
      sig = ensureBytes("signature", sig, 2 * len2);
      msg = ensureBytes("message", msg);
      if (prehash)
        msg = prehash(msg);
      const s2 = bytesToNumberLE(sig.slice(len2, 2 * len2));
      let A2, R2, SB;
      try {
        A2 = Point.fromHex(publicKey2, zip215);
        R2 = Point.fromHex(sig.slice(0, len2), zip215);
        SB = G2.multiplyUnsafe(s2);
      } catch (error) {
        return false;
      }
      if (!zip215 && A2.isSmallOrder())
        return false;
      const k = hashDomainToScalar(context, R2.toRawBytes(), A2.toRawBytes(), msg);
      const RkA = R2.add(A2.multiplyUnsafe(k));
      return RkA.subtract(SB).clearCofactor().equals(Point.ZERO);
    }
    G2._setWindowSize(8);
    const utils2 = {
      getExtendedPublicKey,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => randomBytes2(Fp2.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(windowSize = 8, point = Point.BASE) {
        point._setWindowSize(windowSize);
        point.multiply(BigInt(3));
        return point;
      }
    };
    return {
      CURVE,
      getPublicKey: getPublicKey2,
      sign,
      verify,
      ExtendedPoint: Point,
      utils: utils2
    };
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const ED25519_P = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
  const ED25519_SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
  BigInt(0);
  const _1n$2 = BigInt(1), _2n$1 = BigInt(2), _5n = BigInt(5);
  const _10n = BigInt(10), _20n = BigInt(20), _40n = BigInt(40), _80n = BigInt(80);
  function ed25519_pow_2_252_3(x) {
    const P2 = ED25519_P;
    const x2 = x * x % P2;
    const b2 = x2 * x % P2;
    const b4 = pow2(b2, _2n$1, P2) * b2 % P2;
    const b5 = pow2(b4, _1n$2, P2) * x % P2;
    const b10 = pow2(b5, _5n, P2) * b5 % P2;
    const b20 = pow2(b10, _10n, P2) * b10 % P2;
    const b40 = pow2(b20, _20n, P2) * b20 % P2;
    const b80 = pow2(b40, _40n, P2) * b40 % P2;
    const b160 = pow2(b80, _80n, P2) * b80 % P2;
    const b240 = pow2(b160, _80n, P2) * b80 % P2;
    const b250 = pow2(b240, _10n, P2) * b10 % P2;
    const pow_p_5_8 = pow2(b250, _2n$1, P2) * x % P2;
    return { pow_p_5_8, b2 };
  }
  function adjustScalarBytes(bytes2) {
    bytes2[0] &= 248;
    bytes2[31] &= 127;
    bytes2[31] |= 64;
    return bytes2;
  }
  function uvRatio(u2, v2) {
    const P2 = ED25519_P;
    const v32 = mod(v2 * v2 * v2, P2);
    const v7 = mod(v32 * v32 * v2, P2);
    const pow3 = ed25519_pow_2_252_3(u2 * v7).pow_p_5_8;
    let x = mod(u2 * v32 * pow3, P2);
    const vx2 = mod(v2 * x * x, P2);
    const root1 = x;
    const root2 = mod(x * ED25519_SQRT_M1, P2);
    const useRoot1 = vx2 === u2;
    const useRoot2 = vx2 === mod(-u2, P2);
    const noRoot = vx2 === mod(-u2 * ED25519_SQRT_M1, P2);
    if (useRoot1)
      x = root1;
    if (useRoot2 || noRoot)
      x = root2;
    if (isNegativeLE(x, P2))
      x = mod(-x, P2);
    return { isValid: useRoot1 || useRoot2, value: x };
  }
  const Fp$1 = Field(ED25519_P, void 0, true);
  const ed25519Defaults = {
    // Param: a
    a: BigInt(-1),
    // Fp.create(-1) is proper; our way still works and is faster
    // d is equal to -121665/121666 over finite field.
    // Negative number is P - number, and division is invert(number, P)
    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
    // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
    Fp: Fp$1,
    // Subgroup order: how many points curve has
    // 2n**252n + 27742317777372353535851937790883648493n;
    n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
    // Cofactor
    h: BigInt(8),
    // Base point (x, y) aka generator point
    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
    hash: sha512,
    randomBytes,
    adjustScalarBytes,
    // dom2
    // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
    // Constant-time, u/√v
    uvRatio
  };
  const ed25519 = /* @__PURE__ */ twistedEdwards(ed25519Defaults);
  function ed25519_domain(data, ctx, phflag) {
    if (ctx.length > 255)
      throw new Error("Context is too big");
    return concatBytes$1(utf8ToBytes$1("SigEd25519 no Ed25519 collisions"), new Uint8Array([phflag ? 1 : 0, ctx.length]), ctx, data);
  }
  /* @__PURE__ */ twistedEdwards({
    ...ed25519Defaults,
    domain: ed25519_domain
  });
  /* @__PURE__ */ twistedEdwards({
    ...ed25519Defaults,
    domain: ed25519_domain,
    prehash: sha512
  });
  const ELL2_C1 = (Fp$1.ORDER + BigInt(3)) / BigInt(8);
  Fp$1.pow(_2n$1, ELL2_C1);
  Fp$1.sqrt(Fp$1.neg(Fp$1.ONE));
  (Fp$1.ORDER - BigInt(5)) / BigInt(8);
  BigInt(486662);
  FpSqrtEven(Fp$1, Fp$1.neg(BigInt(486664)));
  BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
  BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
  BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
  BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
  BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  var bn = { exports: {} };
  const __viteBrowserExternal = new Proxy({}, {
    get(_2, key) {
      throw new Error(`Module "" has been externalized for browser compatibility. Cannot access ".${key}" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
    }
  });
  const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
  bn.exports;
  (function(module) {
    (function(module2, exports) {
      function assert2(val, msg) {
        if (!val)
          throw new Error(msg || "Assertion failed");
      }
      function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
      function BN2(number2, base2, endian) {
        if (BN2.isBN(number2)) {
          return number2;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (number2 !== null) {
          if (base2 === "le" || base2 === "be") {
            endian = base2;
            base2 = 10;
          }
          this._init(number2 || 0, base2 || 10, endian || "be");
        }
      }
      if (typeof module2 === "object") {
        module2.exports = BN2;
      } else {
        exports.BN = BN2;
      }
      BN2.BN = BN2;
      BN2.wordSize = 26;
      var Buffer2;
      try {
        if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
          Buffer2 = window.Buffer;
        } else {
          Buffer2 = require$$0$1.Buffer;
        }
      } catch (e2) {
      }
      BN2.isBN = function isBN(num) {
        if (num instanceof BN2) {
          return true;
        }
        return num !== null && typeof num === "object" && num.constructor.wordSize === BN2.wordSize && Array.isArray(num.words);
      };
      BN2.max = function max(left, right) {
        if (left.cmp(right) > 0)
          return left;
        return right;
      };
      BN2.min = function min(left, right) {
        if (left.cmp(right) < 0)
          return left;
        return right;
      };
      BN2.prototype._init = function init(number2, base2, endian) {
        if (typeof number2 === "number") {
          return this._initNumber(number2, base2, endian);
        }
        if (typeof number2 === "object") {
          return this._initArray(number2, base2, endian);
        }
        if (base2 === "hex") {
          base2 = 16;
        }
        assert2(base2 === (base2 | 0) && base2 >= 2 && base2 <= 36);
        number2 = number2.toString().replace(/\s+/g, "");
        var start = 0;
        if (number2[0] === "-") {
          start++;
          this.negative = 1;
        }
        if (start < number2.length) {
          if (base2 === 16) {
            this._parseHex(number2, start, endian);
          } else {
            this._parseBase(number2, base2, start);
            if (endian === "le") {
              this._initArray(this.toArray(), base2, endian);
            }
          }
        }
      };
      BN2.prototype._initNumber = function _initNumber(number2, base2, endian) {
        if (number2 < 0) {
          this.negative = 1;
          number2 = -number2;
        }
        if (number2 < 67108864) {
          this.words = [number2 & 67108863];
          this.length = 1;
        } else if (number2 < 4503599627370496) {
          this.words = [
            number2 & 67108863,
            number2 / 67108864 & 67108863
          ];
          this.length = 2;
        } else {
          assert2(number2 < 9007199254740992);
          this.words = [
            number2 & 67108863,
            number2 / 67108864 & 67108863,
            1
          ];
          this.length = 3;
        }
        if (endian !== "le")
          return;
        this._initArray(this.toArray(), base2, endian);
      };
      BN2.prototype._initArray = function _initArray(number2, base2, endian) {
        assert2(typeof number2.length === "number");
        if (number2.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(number2.length / 3);
        this.words = new Array(this.length);
        for (var i2 = 0; i2 < this.length; i2++) {
          this.words[i2] = 0;
        }
        var j2, w2;
        var off = 0;
        if (endian === "be") {
          for (i2 = number2.length - 1, j2 = 0; i2 >= 0; i2 -= 3) {
            w2 = number2[i2] | number2[i2 - 1] << 8 | number2[i2 - 2] << 16;
            this.words[j2] |= w2 << off & 67108863;
            this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j2++;
            }
          }
        } else if (endian === "le") {
          for (i2 = 0, j2 = 0; i2 < number2.length; i2 += 3) {
            w2 = number2[i2] | number2[i2 + 1] << 8 | number2[i2 + 2] << 16;
            this.words[j2] |= w2 << off & 67108863;
            this.words[j2 + 1] = w2 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j2++;
            }
          }
        }
        return this._strip();
      };
      function parseHex4Bits(string2, index) {
        var c2 = string2.charCodeAt(index);
        if (c2 >= 48 && c2 <= 57) {
          return c2 - 48;
        } else if (c2 >= 65 && c2 <= 70) {
          return c2 - 55;
        } else if (c2 >= 97 && c2 <= 102) {
          return c2 - 87;
        } else {
          assert2(false, "Invalid character in " + string2);
        }
      }
      function parseHexByte(string2, lowerBound, index) {
        var r2 = parseHex4Bits(string2, index);
        if (index - 1 >= lowerBound) {
          r2 |= parseHex4Bits(string2, index - 1) << 4;
        }
        return r2;
      }
      BN2.prototype._parseHex = function _parseHex(number2, start, endian) {
        this.length = Math.ceil((number2.length - start) / 6);
        this.words = new Array(this.length);
        for (var i2 = 0; i2 < this.length; i2++) {
          this.words[i2] = 0;
        }
        var off = 0;
        var j2 = 0;
        var w2;
        if (endian === "be") {
          for (i2 = number2.length - 1; i2 >= start; i2 -= 2) {
            w2 = parseHexByte(number2, start, i2) << off;
            this.words[j2] |= w2 & 67108863;
            if (off >= 18) {
              off -= 18;
              j2 += 1;
              this.words[j2] |= w2 >>> 26;
            } else {
              off += 8;
            }
          }
        } else {
          var parseLength = number2.length - start;
          for (i2 = parseLength % 2 === 0 ? start + 1 : start; i2 < number2.length; i2 += 2) {
            w2 = parseHexByte(number2, start, i2) << off;
            this.words[j2] |= w2 & 67108863;
            if (off >= 18) {
              off -= 18;
              j2 += 1;
              this.words[j2] |= w2 >>> 26;
            } else {
              off += 8;
            }
          }
        }
        this._strip();
      };
      function parseBase(str, start, end, mul) {
        var r2 = 0;
        var b2 = 0;
        var len2 = Math.min(str.length, end);
        for (var i2 = start; i2 < len2; i2++) {
          var c2 = str.charCodeAt(i2) - 48;
          r2 *= mul;
          if (c2 >= 49) {
            b2 = c2 - 49 + 10;
          } else if (c2 >= 17) {
            b2 = c2 - 17 + 10;
          } else {
            b2 = c2;
          }
          assert2(c2 >= 0 && b2 < mul, "Invalid character");
          r2 += b2;
        }
        return r2;
      }
      BN2.prototype._parseBase = function _parseBase(number2, base2, start) {
        this.words = [0];
        this.length = 1;
        for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base2) {
          limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base2 | 0;
        var total = number2.length - start;
        var mod2 = total % limbLen;
        var end = Math.min(total, total - mod2) + start;
        var word = 0;
        for (var i2 = start; i2 < end; i2 += limbLen) {
          word = parseBase(number2, i2, i2 + limbLen, base2);
          this.imuln(limbPow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        if (mod2 !== 0) {
          var pow3 = 1;
          word = parseBase(number2, i2, number2.length, base2);
          for (i2 = 0; i2 < mod2; i2++) {
            pow3 *= base2;
          }
          this.imuln(pow3);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        this._strip();
      };
      BN2.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for (var i2 = 0; i2 < this.length; i2++) {
          dest.words[i2] = this.words[i2];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };
      function move(dest, src2) {
        dest.words = src2.words;
        dest.length = src2.length;
        dest.negative = src2.negative;
        dest.red = src2.red;
      }
      BN2.prototype._move = function _move(dest) {
        move(dest, this);
      };
      BN2.prototype.clone = function clone() {
        var r2 = new BN2(null);
        this.copy(r2);
        return r2;
      };
      BN2.prototype._expand = function _expand(size) {
        while (this.length < size) {
          this.words[this.length++] = 0;
        }
        return this;
      };
      BN2.prototype._strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      };
      BN2.prototype._normSign = function _normSign() {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      };
      if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
        try {
          BN2.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect;
        } catch (e2) {
          BN2.prototype.inspect = inspect;
        }
      } else {
        BN2.prototype.inspect = inspect;
      }
      function inspect() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      var zeros = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ];
      var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ];
      var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      BN2.prototype.toString = function toString(base2, padding) {
        base2 = base2 || 10;
        padding = padding | 0 || 1;
        var out;
        if (base2 === 16 || base2 === "hex") {
          out = "";
          var off = 0;
          var carry = 0;
          for (var i2 = 0; i2 < this.length; i2++) {
            var w2 = this.words[i2];
            var word = ((w2 << off | carry) & 16777215).toString(16);
            carry = w2 >>> 24 - off & 16777215;
            off += 2;
            if (off >= 26) {
              off -= 26;
              i2--;
            }
            if (carry !== 0 || i2 !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }
          }
          if (carry !== 0) {
            out = carry.toString(16) + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        if (base2 === (base2 | 0) && base2 >= 2 && base2 <= 36) {
          var groupSize = groupSizes[base2];
          var groupBase = groupBases[base2];
          out = "";
          var c2 = this.clone();
          c2.negative = 0;
          while (!c2.isZero()) {
            var r2 = c2.modrn(groupBase).toString(base2);
            c2 = c2.idivn(groupBase);
            if (!c2.isZero()) {
              out = zeros[groupSize - r2.length] + r2 + out;
            } else {
              out = r2 + out;
            }
          }
          if (this.isZero()) {
            out = "0" + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        assert2(false, "Base should be between 2 and 36");
      };
      BN2.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
          ret += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          ret += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          assert2(false, "Number can only safely store up to 53 bits");
        }
        return this.negative !== 0 ? -ret : ret;
      };
      BN2.prototype.toJSON = function toJSON() {
        return this.toString(16, 2);
      };
      if (Buffer2) {
        BN2.prototype.toBuffer = function toBuffer2(endian, length) {
          return this.toArrayLike(Buffer2, endian, length);
        };
      }
      BN2.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };
      var allocate = function allocate2(ArrayType, size) {
        if (ArrayType.allocUnsafe) {
          return ArrayType.allocUnsafe(size);
        }
        return new ArrayType(size);
      };
      BN2.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        this._strip();
        var byteLength2 = this.byteLength();
        var reqLength = length || Math.max(1, byteLength2);
        assert2(byteLength2 <= reqLength, "byte array longer than desired length");
        assert2(reqLength > 0, "Requested array length <= 0");
        var res = allocate(ArrayType, reqLength);
        var postfix = endian === "le" ? "LE" : "BE";
        this["_toArrayLike" + postfix](res, byteLength2);
        return res;
      };
      BN2.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength2) {
        var position = 0;
        var carry = 0;
        for (var i2 = 0, shift = 0; i2 < this.length; i2++) {
          var word = this.words[i2] << shift | carry;
          res[position++] = word & 255;
          if (position < res.length) {
            res[position++] = word >> 8 & 255;
          }
          if (position < res.length) {
            res[position++] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position < res.length) {
              res[position++] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position < res.length) {
          res[position++] = carry;
          while (position < res.length) {
            res[position++] = 0;
          }
        }
      };
      BN2.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength2) {
        var position = res.length - 1;
        var carry = 0;
        for (var i2 = 0, shift = 0; i2 < this.length; i2++) {
          var word = this.words[i2] << shift | carry;
          res[position--] = word & 255;
          if (position >= 0) {
            res[position--] = word >> 8 & 255;
          }
          if (position >= 0) {
            res[position--] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position >= 0) {
              res[position--] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position >= 0) {
          res[position--] = carry;
          while (position >= 0) {
            res[position--] = 0;
          }
        }
      };
      if (Math.clz32) {
        BN2.prototype._countBits = function _countBits(w2) {
          return 32 - Math.clz32(w2);
        };
      } else {
        BN2.prototype._countBits = function _countBits(w2) {
          var t2 = w2;
          var r2 = 0;
          if (t2 >= 4096) {
            r2 += 13;
            t2 >>>= 13;
          }
          if (t2 >= 64) {
            r2 += 7;
            t2 >>>= 7;
          }
          if (t2 >= 8) {
            r2 += 4;
            t2 >>>= 4;
          }
          if (t2 >= 2) {
            r2 += 2;
            t2 >>>= 2;
          }
          return r2 + t2;
        };
      }
      BN2.prototype._zeroBits = function _zeroBits(w2) {
        if (w2 === 0)
          return 26;
        var t2 = w2;
        var r2 = 0;
        if ((t2 & 8191) === 0) {
          r2 += 13;
          t2 >>>= 13;
        }
        if ((t2 & 127) === 0) {
          r2 += 7;
          t2 >>>= 7;
        }
        if ((t2 & 15) === 0) {
          r2 += 4;
          t2 >>>= 4;
        }
        if ((t2 & 3) === 0) {
          r2 += 2;
          t2 >>>= 2;
        }
        if ((t2 & 1) === 0) {
          r2++;
        }
        return r2;
      };
      BN2.prototype.bitLength = function bitLength() {
        var w2 = this.words[this.length - 1];
        var hi = this._countBits(w2);
        return (this.length - 1) * 26 + hi;
      };
      function toBitArray(num) {
        var w2 = new Array(num.bitLength());
        for (var bit = 0; bit < w2.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w2[bit] = num.words[off] >>> wbit & 1;
        }
        return w2;
      }
      BN2.prototype.zeroBits = function zeroBits() {
        if (this.isZero())
          return 0;
        var r2 = 0;
        for (var i2 = 0; i2 < this.length; i2++) {
          var b2 = this._zeroBits(this.words[i2]);
          r2 += b2;
          if (b2 !== 26)
            break;
        }
        return r2;
      };
      BN2.prototype.byteLength = function byteLength2() {
        return Math.ceil(this.bitLength() / 8);
      };
      BN2.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
      };
      BN2.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
      };
      BN2.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      };
      BN2.prototype.neg = function neg() {
        return this.clone().ineg();
      };
      BN2.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      };
      BN2.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }
        for (var i2 = 0; i2 < num.length; i2++) {
          this.words[i2] = this.words[i2] | num.words[i2];
        }
        return this._strip();
      };
      BN2.prototype.ior = function ior(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuor(num);
      };
      BN2.prototype.or = function or(num) {
        if (this.length > num.length)
          return this.clone().ior(num);
        return num.clone().ior(this);
      };
      BN2.prototype.uor = function uor(num) {
        if (this.length > num.length)
          return this.clone().iuor(num);
        return num.clone().iuor(this);
      };
      BN2.prototype.iuand = function iuand(num) {
        var b2;
        if (this.length > num.length) {
          b2 = num;
        } else {
          b2 = this;
        }
        for (var i2 = 0; i2 < b2.length; i2++) {
          this.words[i2] = this.words[i2] & num.words[i2];
        }
        this.length = b2.length;
        return this._strip();
      };
      BN2.prototype.iand = function iand(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuand(num);
      };
      BN2.prototype.and = function and(num) {
        if (this.length > num.length)
          return this.clone().iand(num);
        return num.clone().iand(this);
      };
      BN2.prototype.uand = function uand(num) {
        if (this.length > num.length)
          return this.clone().iuand(num);
        return num.clone().iuand(this);
      };
      BN2.prototype.iuxor = function iuxor(num) {
        var a2;
        var b2;
        if (this.length > num.length) {
          a2 = this;
          b2 = num;
        } else {
          a2 = num;
          b2 = this;
        }
        for (var i2 = 0; i2 < b2.length; i2++) {
          this.words[i2] = a2.words[i2] ^ b2.words[i2];
        }
        if (this !== a2) {
          for (; i2 < a2.length; i2++) {
            this.words[i2] = a2.words[i2];
          }
        }
        this.length = a2.length;
        return this._strip();
      };
      BN2.prototype.ixor = function ixor(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuxor(num);
      };
      BN2.prototype.xor = function xor(num) {
        if (this.length > num.length)
          return this.clone().ixor(num);
        return num.clone().ixor(this);
      };
      BN2.prototype.uxor = function uxor(num) {
        if (this.length > num.length)
          return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      };
      BN2.prototype.inotn = function inotn(width) {
        assert2(typeof width === "number" && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
          bytesNeeded--;
        }
        for (var i2 = 0; i2 < bytesNeeded; i2++) {
          this.words[i2] = ~this.words[i2] & 67108863;
        }
        if (bitsLeft > 0) {
          this.words[i2] = ~this.words[i2] & 67108863 >> 26 - bitsLeft;
        }
        return this._strip();
      };
      BN2.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      };
      BN2.prototype.setn = function setn(bit, val) {
        assert2(typeof bit === "number" && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this._strip();
      };
      BN2.prototype.iadd = function iadd(num) {
        var r2;
        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r2 = this.isub(num);
          this.negative ^= 1;
          return this._normSign();
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r2 = this.isub(num);
          num.negative = 1;
          return r2._normSign();
        }
        var a2, b2;
        if (this.length > num.length) {
          a2 = this;
          b2 = num;
        } else {
          a2 = num;
          b2 = this;
        }
        var carry = 0;
        for (var i2 = 0; i2 < b2.length; i2++) {
          r2 = (a2.words[i2] | 0) + (b2.words[i2] | 0) + carry;
          this.words[i2] = r2 & 67108863;
          carry = r2 >>> 26;
        }
        for (; carry !== 0 && i2 < a2.length; i2++) {
          r2 = (a2.words[i2] | 0) + carry;
          this.words[i2] = r2 & 67108863;
          carry = r2 >>> 26;
        }
        this.length = a2.length;
        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++;
        } else if (a2 !== this) {
          for (; i2 < a2.length; i2++) {
            this.words[i2] = a2.words[i2];
          }
        }
        return this;
      };
      BN2.prototype.add = function add2(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }
        if (this.length > num.length)
          return this.clone().iadd(num);
        return num.clone().iadd(this);
      };
      BN2.prototype.isub = function isub(num) {
        if (num.negative !== 0) {
          num.negative = 0;
          var r2 = this.iadd(num);
          num.negative = 1;
          return r2._normSign();
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        }
        var cmp = this.cmp(num);
        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        var a2, b2;
        if (cmp > 0) {
          a2 = this;
          b2 = num;
        } else {
          a2 = num;
          b2 = this;
        }
        var carry = 0;
        for (var i2 = 0; i2 < b2.length; i2++) {
          r2 = (a2.words[i2] | 0) - (b2.words[i2] | 0) + carry;
          carry = r2 >> 26;
          this.words[i2] = r2 & 67108863;
        }
        for (; carry !== 0 && i2 < a2.length; i2++) {
          r2 = (a2.words[i2] | 0) + carry;
          carry = r2 >> 26;
          this.words[i2] = r2 & 67108863;
        }
        if (carry === 0 && i2 < a2.length && a2 !== this) {
          for (; i2 < a2.length; i2++) {
            this.words[i2] = a2.words[i2];
          }
        }
        this.length = Math.max(this.length, i2);
        if (a2 !== this) {
          this.negative = 1;
        }
        return this._strip();
      };
      BN2.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };
      function smallMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        var len2 = self2.length + num.length | 0;
        out.length = len2;
        len2 = len2 - 1 | 0;
        var a2 = self2.words[0] | 0;
        var b2 = num.words[0] | 0;
        var r2 = a2 * b2;
        var lo = r2 & 67108863;
        var carry = r2 / 67108864 | 0;
        out.words[0] = lo;
        for (var k = 1; k < len2; k++) {
          var ncarry = carry >>> 26;
          var rword = carry & 67108863;
          var maxJ = Math.min(k, num.length - 1);
          for (var j2 = Math.max(0, k - self2.length + 1); j2 <= maxJ; j2++) {
            var i2 = k - j2 | 0;
            a2 = self2.words[i2] | 0;
            b2 = num.words[j2] | 0;
            r2 = a2 * b2 + rword;
            ncarry += r2 / 67108864 | 0;
            rword = r2 & 67108863;
          }
          out.words[k] = rword | 0;
          carry = ncarry | 0;
        }
        if (carry !== 0) {
          out.words[k] = carry | 0;
        } else {
          out.length--;
        }
        return out._strip();
      }
      var comb10MulTo = function comb10MulTo2(self2, num, out) {
        var a2 = self2.words;
        var b2 = num.words;
        var o2 = out.words;
        var c2 = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a2[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a2[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a22 = a2[2] | 0;
        var al2 = a22 & 8191;
        var ah2 = a22 >>> 13;
        var a3 = a2[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a2[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a2[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a2[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a2[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a2[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a2[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b2[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b2[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b22 = b2[2] | 0;
        var bl2 = b22 & 8191;
        var bh2 = b22 >>> 13;
        var b3 = b2[3] | 0;
        var bl3 = b3 & 8191;
        var bh3 = b3 >>> 13;
        var b4 = b2[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b2[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b2[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b2[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b2[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b2[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self2.negative ^ num.negative;
        out.length = 19;
        lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c2 + lo | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o2[0] = w0;
        o2[1] = w1;
        o2[2] = w2;
        o2[3] = w3;
        o2[4] = w4;
        o2[5] = w5;
        o2[6] = w6;
        o2[7] = w7;
        o2[8] = w8;
        o2[9] = w9;
        o2[10] = w10;
        o2[11] = w11;
        o2[12] = w12;
        o2[13] = w13;
        o2[14] = w14;
        o2[15] = w15;
        o2[16] = w16;
        o2[17] = w17;
        o2[18] = w18;
        if (c2 !== 0) {
          o2[19] = c2;
          out.length++;
        }
        return out;
      };
      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }
      function bigMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        out.length = self2.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for (var k = 0; k < out.length - 1; k++) {
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 67108863;
          var maxJ = Math.min(k, num.length - 1);
          for (var j2 = Math.max(0, k - self2.length + 1); j2 <= maxJ; j2++) {
            var i2 = k - j2;
            var a2 = self2.words[i2] | 0;
            var b2 = num.words[j2] | 0;
            var r2 = a2 * b2;
            var lo = r2 & 67108863;
            ncarry = ncarry + (r2 / 67108864 | 0) | 0;
            lo = lo + rword | 0;
            rword = lo & 67108863;
            ncarry = ncarry + (lo >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 67108863;
          }
          out.words[k] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }
        if (carry !== 0) {
          out.words[k] = carry;
        } else {
          out.length--;
        }
        return out._strip();
      }
      function jumboMulTo(self2, num, out) {
        return bigMulTo(self2, num, out);
      }
      BN2.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len2 = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len2 < 63) {
          res = smallMulTo(this, num, out);
        } else if (len2 < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }
        return res;
      };
      BN2.prototype.mul = function mul(num) {
        var out = new BN2(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      };
      BN2.prototype.mulf = function mulf(num) {
        var out = new BN2(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      };
      BN2.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };
      BN2.prototype.imuln = function imuln(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert2(typeof num === "number");
        assert2(num < 67108864);
        var carry = 0;
        for (var i2 = 0; i2 < this.length; i2++) {
          var w2 = (this.words[i2] | 0) * num;
          var lo = (w2 & 67108863) + (carry & 67108863);
          carry >>= 26;
          carry += w2 / 67108864 | 0;
          carry += lo >>> 26;
          this.words[i2] = lo & 67108863;
        }
        if (carry !== 0) {
          this.words[i2] = carry;
          this.length++;
        }
        return isNegNum ? this.ineg() : this;
      };
      BN2.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      };
      BN2.prototype.sqr = function sqr() {
        return this.mul(this);
      };
      BN2.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      };
      BN2.prototype.pow = function pow3(num) {
        var w2 = toBitArray(num);
        if (w2.length === 0)
          return new BN2(1);
        var res = this;
        for (var i2 = 0; i2 < w2.length; i2++, res = res.sqr()) {
          if (w2[i2] !== 0)
            break;
        }
        if (++i2 < w2.length) {
          for (var q2 = res.sqr(); i2 < w2.length; i2++, q2 = q2.sqr()) {
            if (w2[i2] === 0)
              continue;
            res = res.mul(q2);
          }
        }
        return res;
      };
      BN2.prototype.iushln = function iushln(bits) {
        assert2(typeof bits === "number" && bits >= 0);
        var r2 = bits % 26;
        var s2 = (bits - r2) / 26;
        var carryMask = 67108863 >>> 26 - r2 << 26 - r2;
        var i2;
        if (r2 !== 0) {
          var carry = 0;
          for (i2 = 0; i2 < this.length; i2++) {
            var newCarry = this.words[i2] & carryMask;
            var c2 = (this.words[i2] | 0) - newCarry << r2;
            this.words[i2] = c2 | carry;
            carry = newCarry >>> 26 - r2;
          }
          if (carry) {
            this.words[i2] = carry;
            this.length++;
          }
        }
        if (s2 !== 0) {
          for (i2 = this.length - 1; i2 >= 0; i2--) {
            this.words[i2 + s2] = this.words[i2];
          }
          for (i2 = 0; i2 < s2; i2++) {
            this.words[i2] = 0;
          }
          this.length += s2;
        }
        return this._strip();
      };
      BN2.prototype.ishln = function ishln(bits) {
        assert2(this.negative === 0);
        return this.iushln(bits);
      };
      BN2.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert2(typeof bits === "number" && bits >= 0);
        var h2;
        if (hint) {
          h2 = (hint - hint % 26) / 26;
        } else {
          h2 = 0;
        }
        var r2 = bits % 26;
        var s2 = Math.min((bits - r2) / 26, this.length);
        var mask2 = 67108863 ^ 67108863 >>> r2 << r2;
        var maskedWords = extended;
        h2 -= s2;
        h2 = Math.max(0, h2);
        if (maskedWords) {
          for (var i2 = 0; i2 < s2; i2++) {
            maskedWords.words[i2] = this.words[i2];
          }
          maskedWords.length = s2;
        }
        if (s2 === 0)
          ;
        else if (this.length > s2) {
          this.length -= s2;
          for (i2 = 0; i2 < this.length; i2++) {
            this.words[i2] = this.words[i2 + s2];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var carry = 0;
        for (i2 = this.length - 1; i2 >= 0 && (carry !== 0 || i2 >= h2); i2--) {
          var word = this.words[i2] | 0;
          this.words[i2] = carry << 26 - r2 | word >>> r2;
          carry = word & mask2;
        }
        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this._strip();
      };
      BN2.prototype.ishrn = function ishrn(bits, hint, extended) {
        assert2(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      };
      BN2.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };
      BN2.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      };
      BN2.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };
      BN2.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      };
      BN2.prototype.testn = function testn(bit) {
        assert2(typeof bit === "number" && bit >= 0);
        var r2 = bit % 26;
        var s2 = (bit - r2) / 26;
        var q2 = 1 << r2;
        if (this.length <= s2)
          return false;
        var w2 = this.words[s2];
        return !!(w2 & q2);
      };
      BN2.prototype.imaskn = function imaskn(bits) {
        assert2(typeof bits === "number" && bits >= 0);
        var r2 = bits % 26;
        var s2 = (bits - r2) / 26;
        assert2(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= s2) {
          return this;
        }
        if (r2 !== 0) {
          s2++;
        }
        this.length = Math.min(s2, this.length);
        if (r2 !== 0) {
          var mask2 = 67108863 ^ 67108863 >>> r2 << r2;
          this.words[this.length - 1] &= mask2;
        }
        return this._strip();
      };
      BN2.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      };
      BN2.prototype.iaddn = function iaddn(num) {
        assert2(typeof num === "number");
        assert2(num < 67108864);
        if (num < 0)
          return this.isubn(-num);
        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) <= num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }
          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        }
        return this._iaddn(num);
      };
      BN2.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        for (var i2 = 0; i2 < this.length && this.words[i2] >= 67108864; i2++) {
          this.words[i2] -= 67108864;
          if (i2 === this.length - 1) {
            this.words[i2 + 1] = 1;
          } else {
            this.words[i2 + 1]++;
          }
        }
        this.length = Math.max(this.length, i2 + 1);
        return this;
      };
      BN2.prototype.isubn = function isubn(num) {
        assert2(typeof num === "number");
        assert2(num < 67108864);
        if (num < 0)
          return this.iaddn(-num);
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var i2 = 0; i2 < this.length && this.words[i2] < 0; i2++) {
            this.words[i2] += 67108864;
            this.words[i2 + 1] -= 1;
          }
        }
        return this._strip();
      };
      BN2.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };
      BN2.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };
      BN2.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };
      BN2.prototype.abs = function abs() {
        return this.clone().iabs();
      };
      BN2.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len2 = num.length + shift;
        var i2;
        this._expand(len2);
        var w2;
        var carry = 0;
        for (i2 = 0; i2 < num.length; i2++) {
          w2 = (this.words[i2 + shift] | 0) + carry;
          var right = (num.words[i2] | 0) * mul;
          w2 -= right & 67108863;
          carry = (w2 >> 26) - (right / 67108864 | 0);
          this.words[i2 + shift] = w2 & 67108863;
        }
        for (; i2 < this.length - shift; i2++) {
          w2 = (this.words[i2 + shift] | 0) + carry;
          carry = w2 >> 26;
          this.words[i2 + shift] = w2 & 67108863;
        }
        if (carry === 0)
          return this._strip();
        assert2(carry === -1);
        carry = 0;
        for (i2 = 0; i2 < this.length; i2++) {
          w2 = -(this.words[i2] | 0) + carry;
          carry = w2 >> 26;
          this.words[i2] = w2 & 67108863;
        }
        this.negative = 1;
        return this._strip();
      };
      BN2.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a2 = this.clone();
        var b2 = num;
        var bhi = b2.words[b2.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
          b2 = b2.ushln(shift);
          a2.iushln(shift);
          bhi = b2.words[b2.length - 1] | 0;
        }
        var m2 = a2.length - b2.length;
        var q2;
        if (mode !== "mod") {
          q2 = new BN2(null);
          q2.length = m2 + 1;
          q2.words = new Array(q2.length);
          for (var i2 = 0; i2 < q2.length; i2++) {
            q2.words[i2] = 0;
          }
        }
        var diff = a2.clone()._ishlnsubmul(b2, 1, m2);
        if (diff.negative === 0) {
          a2 = diff;
          if (q2) {
            q2.words[m2] = 1;
          }
        }
        for (var j2 = m2 - 1; j2 >= 0; j2--) {
          var qj = (a2.words[b2.length + j2] | 0) * 67108864 + (a2.words[b2.length + j2 - 1] | 0);
          qj = Math.min(qj / bhi | 0, 67108863);
          a2._ishlnsubmul(b2, qj, j2);
          while (a2.negative !== 0) {
            qj--;
            a2.negative = 0;
            a2._ishlnsubmul(b2, 1, j2);
            if (!a2.isZero()) {
              a2.negative ^= 1;
            }
          }
          if (q2) {
            q2.words[j2] = qj;
          }
        }
        if (q2) {
          q2._strip();
        }
        a2._strip();
        if (mode !== "div" && shift !== 0) {
          a2.iushrn(shift);
        }
        return {
          div: q2 || null,
          mod: a2
        };
      };
      BN2.prototype.divmod = function divmod(num, mode, positive) {
        assert2(!num.isZero());
        if (this.isZero()) {
          return {
            div: new BN2(0),
            mod: new BN2(0)
          };
        }
        var div, mod2, res;
        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          if (mode !== "div") {
            mod2 = res.mod.neg();
            if (positive && mod2.negative !== 0) {
              mod2.iadd(num);
            }
          }
          return {
            div,
            mod: mod2
          };
        }
        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          return {
            div,
            mod: res.mod
          };
        }
        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);
          if (mode !== "div") {
            mod2 = res.mod.neg();
            if (positive && mod2.negative !== 0) {
              mod2.isub(num);
            }
          }
          return {
            div: res.div,
            mod: mod2
          };
        }
        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN2(0),
            mod: this
          };
        }
        if (num.length === 1) {
          if (mode === "div") {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }
          if (mode === "mod") {
            return {
              div: null,
              mod: new BN2(this.modrn(num.words[0]))
            };
          }
          return {
            div: this.divn(num.words[0]),
            mod: new BN2(this.modrn(num.words[0]))
          };
        }
        return this._wordDiv(num, mode);
      };
      BN2.prototype.div = function div(num) {
        return this.divmod(num, "div", false).div;
      };
      BN2.prototype.mod = function mod2(num) {
        return this.divmod(num, "mod", false).mod;
      };
      BN2.prototype.umod = function umod(num) {
        return this.divmod(num, "mod", true).mod;
      };
      BN2.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        if (dm.mod.isZero())
          return dm.div;
        var mod2 = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod2.cmp(half);
        if (cmp < 0 || r2 === 1 && cmp === 0)
          return dm.div;
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };
      BN2.prototype.modrn = function modrn(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert2(num <= 67108863);
        var p2 = (1 << 26) % num;
        var acc = 0;
        for (var i2 = this.length - 1; i2 >= 0; i2--) {
          acc = (p2 * acc + (this.words[i2] | 0)) % num;
        }
        return isNegNum ? -acc : acc;
      };
      BN2.prototype.modn = function modn(num) {
        return this.modrn(num);
      };
      BN2.prototype.idivn = function idivn(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert2(num <= 67108863);
        var carry = 0;
        for (var i2 = this.length - 1; i2 >= 0; i2--) {
          var w2 = (this.words[i2] | 0) + carry * 67108864;
          this.words[i2] = w2 / num | 0;
          carry = w2 % num;
        }
        this._strip();
        return isNegNum ? this.ineg() : this;
      };
      BN2.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };
      BN2.prototype.egcd = function egcd(p2) {
        assert2(p2.negative === 0);
        assert2(!p2.isZero());
        var x = this;
        var y2 = p2.clone();
        if (x.negative !== 0) {
          x = x.umod(p2);
        } else {
          x = x.clone();
        }
        var A2 = new BN2(1);
        var B2 = new BN2(0);
        var C2 = new BN2(0);
        var D2 = new BN2(1);
        var g2 = 0;
        while (x.isEven() && y2.isEven()) {
          x.iushrn(1);
          y2.iushrn(1);
          ++g2;
        }
        var yp = y2.clone();
        var xp = x.clone();
        while (!x.isZero()) {
          for (var i2 = 0, im = 1; (x.words[0] & im) === 0 && i2 < 26; ++i2, im <<= 1)
            ;
          if (i2 > 0) {
            x.iushrn(i2);
            while (i2-- > 0) {
              if (A2.isOdd() || B2.isOdd()) {
                A2.iadd(yp);
                B2.isub(xp);
              }
              A2.iushrn(1);
              B2.iushrn(1);
            }
          }
          for (var j2 = 0, jm = 1; (y2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1)
            ;
          if (j2 > 0) {
            y2.iushrn(j2);
            while (j2-- > 0) {
              if (C2.isOdd() || D2.isOdd()) {
                C2.iadd(yp);
                D2.isub(xp);
              }
              C2.iushrn(1);
              D2.iushrn(1);
            }
          }
          if (x.cmp(y2) >= 0) {
            x.isub(y2);
            A2.isub(C2);
            B2.isub(D2);
          } else {
            y2.isub(x);
            C2.isub(A2);
            D2.isub(B2);
          }
        }
        return {
          a: C2,
          b: D2,
          gcd: y2.iushln(g2)
        };
      };
      BN2.prototype._invmp = function _invmp(p2) {
        assert2(p2.negative === 0);
        assert2(!p2.isZero());
        var a2 = this;
        var b2 = p2.clone();
        if (a2.negative !== 0) {
          a2 = a2.umod(p2);
        } else {
          a2 = a2.clone();
        }
        var x1 = new BN2(1);
        var x2 = new BN2(0);
        var delta = b2.clone();
        while (a2.cmpn(1) > 0 && b2.cmpn(1) > 0) {
          for (var i2 = 0, im = 1; (a2.words[0] & im) === 0 && i2 < 26; ++i2, im <<= 1)
            ;
          if (i2 > 0) {
            a2.iushrn(i2);
            while (i2-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }
              x1.iushrn(1);
            }
          }
          for (var j2 = 0, jm = 1; (b2.words[0] & jm) === 0 && j2 < 26; ++j2, jm <<= 1)
            ;
          if (j2 > 0) {
            b2.iushrn(j2);
            while (j2-- > 0) {
              if (x2.isOdd()) {
                x2.iadd(delta);
              }
              x2.iushrn(1);
            }
          }
          if (a2.cmp(b2) >= 0) {
            a2.isub(b2);
            x1.isub(x2);
          } else {
            b2.isub(a2);
            x2.isub(x1);
          }
        }
        var res;
        if (a2.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x2;
        }
        if (res.cmpn(0) < 0) {
          res.iadd(p2);
        }
        return res;
      };
      BN2.prototype.gcd = function gcd(num) {
        if (this.isZero())
          return num.abs();
        if (num.isZero())
          return this.abs();
        var a2 = this.clone();
        var b2 = num.clone();
        a2.negative = 0;
        b2.negative = 0;
        for (var shift = 0; a2.isEven() && b2.isEven(); shift++) {
          a2.iushrn(1);
          b2.iushrn(1);
        }
        do {
          while (a2.isEven()) {
            a2.iushrn(1);
          }
          while (b2.isEven()) {
            b2.iushrn(1);
          }
          var r2 = a2.cmp(b2);
          if (r2 < 0) {
            var t2 = a2;
            a2 = b2;
            b2 = t2;
          } else if (r2 === 0 || b2.cmpn(1) === 0) {
            break;
          }
          a2.isub(b2);
        } while (true);
        return b2.iushln(shift);
      };
      BN2.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };
      BN2.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };
      BN2.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      };
      BN2.prototype.andln = function andln(num) {
        return this.words[0] & num;
      };
      BN2.prototype.bincn = function bincn(bit) {
        assert2(typeof bit === "number");
        var r2 = bit % 26;
        var s2 = (bit - r2) / 26;
        var q2 = 1 << r2;
        if (this.length <= s2) {
          this._expand(s2 + 1);
          this.words[s2] |= q2;
          return this;
        }
        var carry = q2;
        for (var i2 = s2; carry !== 0 && i2 < this.length; i2++) {
          var w2 = this.words[i2] | 0;
          w2 += carry;
          carry = w2 >>> 26;
          w2 &= 67108863;
          this.words[i2] = w2;
        }
        if (carry !== 0) {
          this.words[i2] = carry;
          this.length++;
        }
        return this;
      };
      BN2.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };
      BN2.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative)
          return -1;
        if (this.negative === 0 && negative)
          return 1;
        this._strip();
        var res;
        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }
          assert2(num <= 67108863, "Number is too big");
          var w2 = this.words[0] | 0;
          res = w2 === num ? 0 : w2 < num ? -1 : 1;
        }
        if (this.negative !== 0)
          return -res | 0;
        return res;
      };
      BN2.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0)
          return -1;
        if (this.negative === 0 && num.negative !== 0)
          return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0)
          return -res | 0;
        return res;
      };
      BN2.prototype.ucmp = function ucmp(num) {
        if (this.length > num.length)
          return 1;
        if (this.length < num.length)
          return -1;
        var res = 0;
        for (var i2 = this.length - 1; i2 >= 0; i2--) {
          var a2 = this.words[i2] | 0;
          var b2 = num.words[i2] | 0;
          if (a2 === b2)
            continue;
          if (a2 < b2) {
            res = -1;
          } else if (a2 > b2) {
            res = 1;
          }
          break;
        }
        return res;
      };
      BN2.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };
      BN2.prototype.gt = function gt2(num) {
        return this.cmp(num) === 1;
      };
      BN2.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };
      BN2.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };
      BN2.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };
      BN2.prototype.lt = function lt2(num) {
        return this.cmp(num) === -1;
      };
      BN2.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };
      BN2.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };
      BN2.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };
      BN2.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      };
      BN2.red = function red(num) {
        return new Red(num);
      };
      BN2.prototype.toRed = function toRed(ctx) {
        assert2(!this.red, "Already a number in reduction context");
        assert2(this.negative === 0, "red works only with positives");
        return ctx.convertTo(this)._forceRed(ctx);
      };
      BN2.prototype.fromRed = function fromRed() {
        assert2(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      };
      BN2.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };
      BN2.prototype.forceRed = function forceRed(ctx) {
        assert2(!this.red, "Already a number in reduction context");
        return this._forceRed(ctx);
      };
      BN2.prototype.redAdd = function redAdd(num) {
        assert2(this.red, "redAdd works only with red numbers");
        return this.red.add(this, num);
      };
      BN2.prototype.redIAdd = function redIAdd(num) {
        assert2(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, num);
      };
      BN2.prototype.redSub = function redSub(num) {
        assert2(this.red, "redSub works only with red numbers");
        return this.red.sub(this, num);
      };
      BN2.prototype.redISub = function redISub(num) {
        assert2(this.red, "redISub works only with red numbers");
        return this.red.isub(this, num);
      };
      BN2.prototype.redShl = function redShl(num) {
        assert2(this.red, "redShl works only with red numbers");
        return this.red.shl(this, num);
      };
      BN2.prototype.redMul = function redMul(num) {
        assert2(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.mul(this, num);
      };
      BN2.prototype.redIMul = function redIMul(num) {
        assert2(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.imul(this, num);
      };
      BN2.prototype.redSqr = function redSqr() {
        assert2(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      };
      BN2.prototype.redISqr = function redISqr() {
        assert2(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      };
      BN2.prototype.redSqrt = function redSqrt() {
        assert2(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      };
      BN2.prototype.redInvm = function redInvm() {
        assert2(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      };
      BN2.prototype.redNeg = function redNeg() {
        assert2(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      };
      BN2.prototype.redPow = function redPow(num) {
        assert2(this.red && !num.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, num);
      };
      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function MPrime(name, p2) {
        this.name = name;
        this.p = new BN2(p2, 16);
        this.n = this.p.bitLength();
        this.k = new BN2(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN2(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };
      MPrime.prototype.ireduce = function ireduce(num) {
        var r2 = num;
        var rlen;
        do {
          this.split(r2, this.tmp);
          r2 = this.imulK(r2);
          r2 = r2.iadd(this.tmp);
          rlen = r2.bitLength();
        } while (rlen > this.n);
        var cmp = rlen < this.n ? -1 : r2.ucmp(this.p);
        if (cmp === 0) {
          r2.words[0] = 0;
          r2.length = 1;
        } else if (cmp > 0) {
          r2.isub(this.p);
        } else {
          if (r2.strip !== void 0) {
            r2.strip();
          } else {
            r2._strip();
          }
        }
        return r2;
      };
      MPrime.prototype.split = function split2(input, out) {
        input.iushrn(this.n, 0, out);
      };
      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };
      function K256() {
        MPrime.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      inherits2(K256, MPrime);
      K256.prototype.split = function split2(input, output2) {
        var mask2 = 4194303;
        var outLen = Math.min(input.length, 9);
        for (var i2 = 0; i2 < outLen; i2++) {
          output2.words[i2] = input.words[i2];
        }
        output2.length = outLen;
        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        }
        var prev = input.words[9];
        output2.words[output2.length++] = prev & mask2;
        for (i2 = 10; i2 < input.length; i2++) {
          var next = input.words[i2] | 0;
          input.words[i2 - 10] = (next & mask2) << 4 | prev >>> 22;
          prev = next;
        }
        prev >>>= 22;
        input.words[i2 - 10] = prev;
        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };
      K256.prototype.imulK = function imulK(num) {
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        var lo = 0;
        for (var i2 = 0; i2 < num.length; i2++) {
          var w2 = num.words[i2] | 0;
          lo += w2 * 977;
          num.words[i2] = lo & 67108863;
          lo = w2 * 64 + (lo / 67108864 | 0);
        }
        if (num.words[num.length - 1] === 0) {
          num.length--;
          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }
        return num;
      };
      function P224() {
        MPrime.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      inherits2(P224, MPrime);
      function P192() {
        MPrime.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      inherits2(P192, MPrime);
      function P25519() {
        MPrime.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      inherits2(P25519, MPrime);
      P25519.prototype.imulK = function imulK(num) {
        var carry = 0;
        for (var i2 = 0; i2 < num.length; i2++) {
          var hi = (num.words[i2] | 0) * 19 + carry;
          var lo = hi & 67108863;
          hi >>>= 26;
          num.words[i2] = lo;
          carry = hi;
        }
        if (carry !== 0) {
          num.words[num.length++] = carry;
        }
        return num;
      };
      BN2._prime = function prime(name) {
        if (primes[name])
          return primes[name];
        var prime2;
        if (name === "k256") {
          prime2 = new K256();
        } else if (name === "p224") {
          prime2 = new P224();
        } else if (name === "p192") {
          prime2 = new P192();
        } else if (name === "p25519") {
          prime2 = new P25519();
        } else {
          throw new Error("Unknown prime " + name);
        }
        primes[name] = prime2;
        return prime2;
      };
      function Red(m2) {
        if (typeof m2 === "string") {
          var prime = BN2._prime(m2);
          this.m = prime.p;
          this.prime = prime;
        } else {
          assert2(m2.gtn(1), "modulus must be greater than 1");
          this.m = m2;
          this.prime = null;
        }
      }
      Red.prototype._verify1 = function _verify1(a2) {
        assert2(a2.negative === 0, "red works only with positives");
        assert2(a2.red, "red works only with red numbers");
      };
      Red.prototype._verify2 = function _verify2(a2, b2) {
        assert2((a2.negative | b2.negative) === 0, "red works only with positives");
        assert2(
          a2.red && a2.red === b2.red,
          "red works only with red numbers"
        );
      };
      Red.prototype.imod = function imod(a2) {
        if (this.prime)
          return this.prime.ireduce(a2)._forceRed(this);
        move(a2, a2.umod(this.m)._forceRed(this));
        return a2;
      };
      Red.prototype.neg = function neg(a2) {
        if (a2.isZero()) {
          return a2.clone();
        }
        return this.m.sub(a2)._forceRed(this);
      };
      Red.prototype.add = function add2(a2, b2) {
        this._verify2(a2, b2);
        var res = a2.add(b2);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.iadd = function iadd(a2, b2) {
        this._verify2(a2, b2);
        var res = a2.iadd(b2);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res;
      };
      Red.prototype.sub = function sub(a2, b2) {
        this._verify2(a2, b2);
        var res = a2.sub(b2);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.isub = function isub(a2, b2) {
        this._verify2(a2, b2);
        var res = a2.isub(b2);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res;
      };
      Red.prototype.shl = function shl(a2, num) {
        this._verify1(a2);
        return this.imod(a2.ushln(num));
      };
      Red.prototype.imul = function imul(a2, b2) {
        this._verify2(a2, b2);
        return this.imod(a2.imul(b2));
      };
      Red.prototype.mul = function mul(a2, b2) {
        this._verify2(a2, b2);
        return this.imod(a2.mul(b2));
      };
      Red.prototype.isqr = function isqr(a2) {
        return this.imul(a2, a2.clone());
      };
      Red.prototype.sqr = function sqr(a2) {
        return this.mul(a2, a2);
      };
      Red.prototype.sqrt = function sqrt(a2) {
        if (a2.isZero())
          return a2.clone();
        var mod3 = this.m.andln(3);
        assert2(mod3 % 2 === 1);
        if (mod3 === 3) {
          var pow3 = this.m.add(new BN2(1)).iushrn(2);
          return this.pow(a2, pow3);
        }
        var q2 = this.m.subn(1);
        var s2 = 0;
        while (!q2.isZero() && q2.andln(1) === 0) {
          s2++;
          q2.iushrn(1);
        }
        assert2(!q2.isZero());
        var one = new BN2(1).toRed(this);
        var nOne = one.redNeg();
        var lpow = this.m.subn(1).iushrn(1);
        var z2 = this.m.bitLength();
        z2 = new BN2(2 * z2 * z2).toRed(this);
        while (this.pow(z2, lpow).cmp(nOne) !== 0) {
          z2.redIAdd(nOne);
        }
        var c2 = this.pow(z2, q2);
        var r2 = this.pow(a2, q2.addn(1).iushrn(1));
        var t2 = this.pow(a2, q2);
        var m2 = s2;
        while (t2.cmp(one) !== 0) {
          var tmp = t2;
          for (var i2 = 0; tmp.cmp(one) !== 0; i2++) {
            tmp = tmp.redSqr();
          }
          assert2(i2 < m2);
          var b2 = this.pow(c2, new BN2(1).iushln(m2 - i2 - 1));
          r2 = r2.redMul(b2);
          c2 = b2.redSqr();
          t2 = t2.redMul(c2);
          m2 = i2;
        }
        return r2;
      };
      Red.prototype.invm = function invm(a2) {
        var inv = a2._invmp(this.m);
        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };
      Red.prototype.pow = function pow3(a2, num) {
        if (num.isZero())
          return new BN2(1).toRed(this);
        if (num.cmpn(1) === 0)
          return a2.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN2(1).toRed(this);
        wnd[1] = a2;
        for (var i2 = 2; i2 < wnd.length; i2++) {
          wnd[i2] = this.mul(wnd[i2 - 1], a2);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
          start = 26;
        }
        for (i2 = num.length - 1; i2 >= 0; i2--) {
          var word = num.words[i2];
          for (var j2 = start - 1; j2 >= 0; j2--) {
            var bit = word >> j2 & 1;
            if (res !== wnd[0]) {
              res = this.sqr(res);
            }
            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }
            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i2 !== 0 || j2 !== 0))
              continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }
          start = 26;
        }
        return res;
      };
      Red.prototype.convertTo = function convertTo(num) {
        var r2 = num.umod(this.m);
        return r2 === num ? r2.clone() : r2;
      };
      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      };
      BN2.mont = function mont(num) {
        return new Mont(num);
      };
      function Mont(m2) {
        Red.call(this, m2);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new BN2(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      inherits2(Mont, Red);
      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };
      Mont.prototype.convertFrom = function convertFrom(num) {
        var r2 = this.imod(num.mul(this.rinv));
        r2.red = null;
        return r2;
      };
      Mont.prototype.imul = function imul(a2, b2) {
        if (a2.isZero() || b2.isZero()) {
          a2.words[0] = 0;
          a2.length = 1;
          return a2;
        }
        var t2 = a2.imul(b2);
        var c2 = t2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u2 = t2.isub(c2).iushrn(this.shift);
        var res = u2;
        if (u2.cmp(this.m) >= 0) {
          res = u2.isub(this.m);
        } else if (u2.cmpn(0) < 0) {
          res = u2.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.mul = function mul(a2, b2) {
        if (a2.isZero() || b2.isZero())
          return new BN2(0)._forceRed(this);
        var t2 = a2.mul(b2);
        var c2 = t2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u2 = t2.isub(c2).iushrn(this.shift);
        var res = u2;
        if (u2.cmp(this.m) >= 0) {
          res = u2.isub(this.m);
        } else if (u2.cmpn(0) < 0) {
          res = u2.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.invm = function invm(a2) {
        var res = this.imod(a2._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })(module, commonjsGlobal);
  })(bn);
  var bnExports = bn.exports;
  const BN = /* @__PURE__ */ getDefaultExportFromCjs(bnExports);
  var safeBuffer = { exports: {} };
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  (function(module, exports) {
    var buffer$1 = buffer;
    var Buffer2 = buffer$1.Buffer;
    function copyProps(src2, dst) {
      for (var key in src2) {
        dst[key] = src2[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer$1;
    } else {
      copyProps(buffer$1, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding2) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding2 === "string") {
          buf.fill(fill, encoding2);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer$1.SlowBuffer(size);
    };
  })(safeBuffer, safeBuffer.exports);
  var safeBufferExports = safeBuffer.exports;
  var _Buffer$1 = safeBufferExports.Buffer;
  function base$1(ALPHABET2) {
    if (ALPHABET2.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j2 = 0; j2 < BASE_MAP.length; j2++) {
      BASE_MAP[j2] = 255;
    }
    for (var i2 = 0; i2 < ALPHABET2.length; i2++) {
      var x = ALPHABET2.charAt(i2);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i2;
    }
    var BASE = ALPHABET2.length;
    var LEADER = ALPHABET2.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode(source) {
      if (Array.isArray(source) || source instanceof Uint8Array) {
        source = _Buffer$1.from(source);
      }
      if (!_Buffer$1.isBuffer(source)) {
        throw new TypeError("Expected Buffer");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i3 = 0;
        for (var it1 = size - 1; (carry !== 0 || i3 < length) && it1 !== -1; it1--, i3++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i3;
        pbegin++;
      }
      var it2 = size - length;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET2.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return _Buffer$1.alloc(0);
      }
      var psz = 0;
      var zeroes = 0;
      var length = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i3 = 0;
        for (var it3 = size - 1; (carry !== 0 || i3 < length) && it3 !== -1; it3--, i3++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i3;
        psz++;
      }
      var it4 = size - length;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = _Buffer$1.allocUnsafe(zeroes + (size - it4));
      vch.fill(0, 0, zeroes);
      var j3 = zeroes;
      while (it4 !== size) {
        vch[j3++] = b256[it4++];
      }
      return vch;
    }
    function decode(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error("Non-base" + BASE + " character");
    }
    return {
      encode,
      decodeUnsafe,
      decode
    };
  }
  var src$1 = base$1;
  var basex$1 = src$1;
  var ALPHABET$1 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var bs58$1 = basex$1(ALPHABET$1);
  const bs58$2 = /* @__PURE__ */ getDefaultExportFromCjs(bs58$1);
  const SHA256_K = /* @__PURE__ */ new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  const SHA256_IV = /* @__PURE__ */ new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  class SHA256 extends HashMD {
    constructor() {
      super(64, 32, 8, false);
      this.A = SHA256_IV[0] | 0;
      this.B = SHA256_IV[1] | 0;
      this.C = SHA256_IV[2] | 0;
      this.D = SHA256_IV[3] | 0;
      this.E = SHA256_IV[4] | 0;
      this.F = SHA256_IV[5] | 0;
      this.G = SHA256_IV[6] | 0;
      this.H = SHA256_IV[7] | 0;
    }
    get() {
      const { A: A2, B: B2, C: C2, D: D2, E: E2, F: F2, G: G2, H: H2 } = this;
      return [A2, B2, C2, D2, E2, F2, G2, H2];
    }
    // prettier-ignore
    set(A2, B2, C2, D2, E2, F2, G2, H2) {
      this.A = A2 | 0;
      this.B = B2 | 0;
      this.C = C2 | 0;
      this.D = D2 | 0;
      this.E = E2 | 0;
      this.F = F2 | 0;
      this.G = G2 | 0;
      this.H = H2 | 0;
    }
    process(view, offset2) {
      for (let i2 = 0; i2 < 16; i2++, offset2 += 4)
        SHA256_W[i2] = view.getUint32(offset2, false);
      for (let i2 = 16; i2 < 64; i2++) {
        const W15 = SHA256_W[i2 - 15];
        const W2 = SHA256_W[i2 - 2];
        const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
        SHA256_W[i2] = s1 + SHA256_W[i2 - 7] + s0 + SHA256_W[i2 - 16] | 0;
      }
      let { A: A2, B: B2, C: C2, D: D2, E: E2, F: F2, G: G2, H: H2 } = this;
      for (let i2 = 0; i2 < 64; i2++) {
        const sigma1 = rotr(E2, 6) ^ rotr(E2, 11) ^ rotr(E2, 25);
        const T1 = H2 + sigma1 + Chi(E2, F2, G2) + SHA256_K[i2] + SHA256_W[i2] | 0;
        const sigma0 = rotr(A2, 2) ^ rotr(A2, 13) ^ rotr(A2, 22);
        const T2 = sigma0 + Maj(A2, B2, C2) | 0;
        H2 = G2;
        G2 = F2;
        F2 = E2;
        E2 = D2 + T1 | 0;
        D2 = C2;
        C2 = B2;
        B2 = A2;
        A2 = T1 + T2 | 0;
      }
      A2 = A2 + this.A | 0;
      B2 = B2 + this.B | 0;
      C2 = C2 + this.C | 0;
      D2 = D2 + this.D | 0;
      E2 = E2 + this.E | 0;
      F2 = F2 + this.F | 0;
      G2 = G2 + this.G | 0;
      H2 = H2 + this.H | 0;
      this.set(A2, B2, C2, D2, E2, F2, G2, H2);
    }
    roundClean() {
      SHA256_W.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      this.buffer.fill(0);
    }
  }
  const sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());
  var lib = {};
  var _Buffer = safeBufferExports.Buffer;
  function base(ALPHABET2) {
    if (ALPHABET2.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j2 = 0; j2 < BASE_MAP.length; j2++) {
      BASE_MAP[j2] = 255;
    }
    for (var i2 = 0; i2 < ALPHABET2.length; i2++) {
      var x = ALPHABET2.charAt(i2);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i2;
    }
    var BASE = ALPHABET2.length;
    var LEADER = ALPHABET2.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode(source) {
      if (Array.isArray(source) || source instanceof Uint8Array) {
        source = _Buffer.from(source);
      }
      if (!_Buffer.isBuffer(source)) {
        throw new TypeError("Expected Buffer");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i3 = 0;
        for (var it1 = size - 1; (carry !== 0 || i3 < length) && it1 !== -1; it1--, i3++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i3;
        pbegin++;
      }
      var it2 = size - length;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET2.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return _Buffer.alloc(0);
      }
      var psz = 0;
      var zeroes = 0;
      var length = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i3 = 0;
        for (var it3 = size - 1; (carry !== 0 || i3 < length) && it3 !== -1; it3--, i3++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i3;
        psz++;
      }
      var it4 = size - length;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
      vch.fill(0, 0, zeroes);
      var j3 = zeroes;
      while (it4 !== size) {
        vch[j3++] = b256[it4++];
      }
      return vch;
    }
    function decode(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error("Non-base" + BASE + " character");
    }
    return {
      encode,
      decodeUnsafe,
      decode
    };
  }
  var src = base;
  var basex = src;
  var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var bs58 = basex(ALPHABET);
  function inRange(a2, min, max) {
    return min <= a2 && a2 <= max;
  }
  function ToDictionary(o2) {
    if (o2 === void 0)
      return {};
    if (o2 === Object(o2))
      return o2;
    throw TypeError("Could not convert argument to dictionary");
  }
  function stringToCodePoints(string2) {
    var s2 = String(string2);
    var n2 = s2.length;
    var i2 = 0;
    var u2 = [];
    while (i2 < n2) {
      var c2 = s2.charCodeAt(i2);
      if (c2 < 55296 || c2 > 57343) {
        u2.push(c2);
      } else if (56320 <= c2 && c2 <= 57343) {
        u2.push(65533);
      } else if (55296 <= c2 && c2 <= 56319) {
        if (i2 === n2 - 1) {
          u2.push(65533);
        } else {
          var d2 = string2.charCodeAt(i2 + 1);
          if (56320 <= d2 && d2 <= 57343) {
            var a2 = c2 & 1023;
            var b2 = d2 & 1023;
            u2.push(65536 + (a2 << 10) + b2);
            i2 += 1;
          } else {
            u2.push(65533);
          }
        }
      }
      i2 += 1;
    }
    return u2;
  }
  function codePointsToString(code_points) {
    var s2 = "";
    for (var i2 = 0; i2 < code_points.length; ++i2) {
      var cp = code_points[i2];
      if (cp <= 65535) {
        s2 += String.fromCharCode(cp);
      } else {
        cp -= 65536;
        s2 += String.fromCharCode(
          (cp >> 10) + 55296,
          (cp & 1023) + 56320
        );
      }
    }
    return s2;
  }
  var end_of_stream = -1;
  function Stream(tokens) {
    this.tokens = [].slice.call(tokens);
  }
  Stream.prototype = {
    /**
     * @return {boolean} True if end-of-stream has been hit.
     */
    endOfStream: function() {
      return !this.tokens.length;
    },
    /**
     * When a token is read from a stream, the first token in the
     * stream must be returned and subsequently removed, and
     * end-of-stream must be returned otherwise.
     *
     * @return {number} Get the next token from the stream, or
     * end_of_stream.
     */
    read: function() {
      if (!this.tokens.length)
        return end_of_stream;
      return this.tokens.shift();
    },
    /**
     * When one or more tokens are prepended to a stream, those tokens
     * must be inserted, in given order, before the first token in the
     * stream.
     *
     * @param {(number|!Array.<number>)} token The token(s) to prepend to the stream.
     */
    prepend: function(token) {
      if (Array.isArray(token)) {
        var tokens = (
          /**@type {!Array.<number>}*/
          token
        );
        while (tokens.length)
          this.tokens.unshift(tokens.pop());
      } else {
        this.tokens.unshift(token);
      }
    },
    /**
     * When one or more tokens are pushed to a stream, those tokens
     * must be inserted, in given order, after the last token in the
     * stream.
     *
     * @param {(number|!Array.<number>)} token The tokens(s) to prepend to the stream.
     */
    push: function(token) {
      if (Array.isArray(token)) {
        var tokens = (
          /**@type {!Array.<number>}*/
          token
        );
        while (tokens.length)
          this.tokens.push(tokens.shift());
      } else {
        this.tokens.push(token);
      }
    }
  };
  var finished = -1;
  function decoderError(fatal, opt_code_point) {
    if (fatal)
      throw TypeError("Decoder error");
    return opt_code_point || 65533;
  }
  var DEFAULT_ENCODING = "utf-8";
  function TextDecoder$1(encoding2, options) {
    if (!(this instanceof TextDecoder$1)) {
      return new TextDecoder$1(encoding2, options);
    }
    encoding2 = encoding2 !== void 0 ? String(encoding2).toLowerCase() : DEFAULT_ENCODING;
    if (encoding2 !== DEFAULT_ENCODING) {
      throw new Error("Encoding not supported. Only utf-8 is supported");
    }
    options = ToDictionary(options);
    this._streaming = false;
    this._BOMseen = false;
    this._decoder = null;
    this._fatal = Boolean(options["fatal"]);
    this._ignoreBOM = Boolean(options["ignoreBOM"]);
    Object.defineProperty(this, "encoding", { value: "utf-8" });
    Object.defineProperty(this, "fatal", { value: this._fatal });
    Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
  }
  TextDecoder$1.prototype = {
    /**
     * @param {ArrayBufferView=} input The buffer of bytes to decode.
     * @param {Object=} options
     * @return {string} The decoded string.
     */
    decode: function decode(input, options) {
      var bytes2;
      if (typeof input === "object" && input instanceof ArrayBuffer) {
        bytes2 = new Uint8Array(input);
      } else if (typeof input === "object" && "buffer" in input && input.buffer instanceof ArrayBuffer) {
        bytes2 = new Uint8Array(
          input.buffer,
          input.byteOffset,
          input.byteLength
        );
      } else {
        bytes2 = new Uint8Array(0);
      }
      options = ToDictionary(options);
      if (!this._streaming) {
        this._decoder = new UTF8Decoder({ fatal: this._fatal });
        this._BOMseen = false;
      }
      this._streaming = Boolean(options["stream"]);
      var input_stream = new Stream(bytes2);
      var code_points = [];
      var result;
      while (!input_stream.endOfStream()) {
        result = this._decoder.handler(input_stream, input_stream.read());
        if (result === finished)
          break;
        if (result === null)
          continue;
        if (Array.isArray(result))
          code_points.push.apply(
            code_points,
            /**@type {!Array.<number>}*/
            result
          );
        else
          code_points.push(result);
      }
      if (!this._streaming) {
        do {
          result = this._decoder.handler(input_stream, input_stream.read());
          if (result === finished)
            break;
          if (result === null)
            continue;
          if (Array.isArray(result))
            code_points.push.apply(
              code_points,
              /**@type {!Array.<number>}*/
              result
            );
          else
            code_points.push(result);
        } while (!input_stream.endOfStream());
        this._decoder = null;
      }
      if (code_points.length) {
        if (["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen) {
          if (code_points[0] === 65279) {
            this._BOMseen = true;
            code_points.shift();
          } else {
            this._BOMseen = true;
          }
        }
      }
      return codePointsToString(code_points);
    }
  };
  function TextEncoder$1(encoding2, options) {
    if (!(this instanceof TextEncoder$1))
      return new TextEncoder$1(encoding2, options);
    encoding2 = encoding2 !== void 0 ? String(encoding2).toLowerCase() : DEFAULT_ENCODING;
    if (encoding2 !== DEFAULT_ENCODING) {
      throw new Error("Encoding not supported. Only utf-8 is supported");
    }
    options = ToDictionary(options);
    this._streaming = false;
    this._encoder = null;
    this._options = { fatal: Boolean(options["fatal"]) };
    Object.defineProperty(this, "encoding", { value: "utf-8" });
  }
  TextEncoder$1.prototype = {
    /**
     * @param {string=} opt_string The string to encode.
     * @param {Object=} options
     * @return {Uint8Array} Encoded bytes, as a Uint8Array.
     */
    encode: function encode(opt_string, options) {
      opt_string = opt_string ? String(opt_string) : "";
      options = ToDictionary(options);
      if (!this._streaming)
        this._encoder = new UTF8Encoder(this._options);
      this._streaming = Boolean(options["stream"]);
      var bytes2 = [];
      var input_stream = new Stream(stringToCodePoints(opt_string));
      var result;
      while (!input_stream.endOfStream()) {
        result = this._encoder.handler(input_stream, input_stream.read());
        if (result === finished)
          break;
        if (Array.isArray(result))
          bytes2.push.apply(
            bytes2,
            /**@type {!Array.<number>}*/
            result
          );
        else
          bytes2.push(result);
      }
      if (!this._streaming) {
        while (true) {
          result = this._encoder.handler(input_stream, input_stream.read());
          if (result === finished)
            break;
          if (Array.isArray(result))
            bytes2.push.apply(
              bytes2,
              /**@type {!Array.<number>}*/
              result
            );
          else
            bytes2.push(result);
        }
        this._encoder = null;
      }
      return new Uint8Array(bytes2);
    }
  };
  function UTF8Decoder(options) {
    var fatal = options.fatal;
    var utf8_code_point = 0, utf8_bytes_seen = 0, utf8_bytes_needed = 0, utf8_lower_boundary = 128, utf8_upper_boundary = 191;
    this.handler = function(stream, bite) {
      if (bite === end_of_stream && utf8_bytes_needed !== 0) {
        utf8_bytes_needed = 0;
        return decoderError(fatal);
      }
      if (bite === end_of_stream)
        return finished;
      if (utf8_bytes_needed === 0) {
        if (inRange(bite, 0, 127)) {
          return bite;
        }
        if (inRange(bite, 194, 223)) {
          utf8_bytes_needed = 1;
          utf8_code_point = bite - 192;
        } else if (inRange(bite, 224, 239)) {
          if (bite === 224)
            utf8_lower_boundary = 160;
          if (bite === 237)
            utf8_upper_boundary = 159;
          utf8_bytes_needed = 2;
          utf8_code_point = bite - 224;
        } else if (inRange(bite, 240, 244)) {
          if (bite === 240)
            utf8_lower_boundary = 144;
          if (bite === 244)
            utf8_upper_boundary = 143;
          utf8_bytes_needed = 3;
          utf8_code_point = bite - 240;
        } else {
          return decoderError(fatal);
        }
        utf8_code_point = utf8_code_point << 6 * utf8_bytes_needed;
        return null;
      }
      if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) {
        utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
        utf8_lower_boundary = 128;
        utf8_upper_boundary = 191;
        stream.prepend(bite);
        return decoderError(fatal);
      }
      utf8_lower_boundary = 128;
      utf8_upper_boundary = 191;
      utf8_bytes_seen += 1;
      utf8_code_point += bite - 128 << 6 * (utf8_bytes_needed - utf8_bytes_seen);
      if (utf8_bytes_seen !== utf8_bytes_needed)
        return null;
      var code_point = utf8_code_point;
      utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
      return code_point;
    };
  }
  function UTF8Encoder(options) {
    options.fatal;
    this.handler = function(stream, code_point) {
      if (code_point === end_of_stream)
        return finished;
      if (inRange(code_point, 0, 127))
        return code_point;
      var count, offset2;
      if (inRange(code_point, 128, 2047)) {
        count = 1;
        offset2 = 192;
      } else if (inRange(code_point, 2048, 65535)) {
        count = 2;
        offset2 = 224;
      } else if (inRange(code_point, 65536, 1114111)) {
        count = 3;
        offset2 = 240;
      }
      var bytes2 = [(code_point >> 6 * count) + offset2];
      while (count > 0) {
        var temp = code_point >> 6 * (count - 1);
        bytes2.push(128 | temp & 63);
        count -= 1;
      }
      return bytes2;
    };
  }
  const encoding$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    TextDecoder: TextDecoder$1,
    TextEncoder: TextEncoder$1
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$2 = /* @__PURE__ */ getAugmentedNamespace(encoding$1);
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === void 0)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o2, v2) {
    Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
  } : function(o2, v2) {
    o2["default"] = v2;
  });
  var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
    var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r2 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i2 = decorators.length - 1; i2 >= 0; i2--)
        if (d2 = decorators[i2])
          r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
    return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
  };
  var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod2) {
    if (mod2 && mod2.__esModule)
      return mod2;
    var result = {};
    if (mod2 != null) {
      for (var k in mod2)
        if (k !== "default" && Object.hasOwnProperty.call(mod2, k))
          __createBinding(result, mod2, k);
    }
    __setModuleDefault(result, mod2);
    return result;
  };
  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod2) {
    return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
  };
  Object.defineProperty(lib, "__esModule", { value: true });
  var deserializeUnchecked_1 = lib.deserializeUnchecked = deserialize_1 = lib.deserialize = serialize_1 = lib.serialize = lib.BinaryReader = lib.BinaryWriter = lib.BorshError = lib.baseDecode = lib.baseEncode = void 0;
  const bn_js_1 = __importDefault(bnExports);
  const bs58_1 = __importDefault(bs58);
  const encoding = __importStar(require$$2);
  const ResolvedTextDecoder = typeof TextDecoder !== "function" ? encoding.TextDecoder : TextDecoder;
  const textDecoder = new ResolvedTextDecoder("utf-8", { fatal: true });
  function baseEncode(value) {
    if (typeof value === "string") {
      value = Buffer.from(value, "utf8");
    }
    return bs58_1.default.encode(Buffer.from(value));
  }
  lib.baseEncode = baseEncode;
  function baseDecode(value) {
    return Buffer.from(bs58_1.default.decode(value));
  }
  lib.baseDecode = baseDecode;
  const INITIAL_LENGTH = 1024;
  class BorshError extends Error {
    constructor(message) {
      super(message);
      this.fieldPath = [];
      this.originalMessage = message;
    }
    addToFieldPath(fieldName) {
      this.fieldPath.splice(0, 0, fieldName);
      this.message = this.originalMessage + ": " + this.fieldPath.join(".");
    }
  }
  lib.BorshError = BorshError;
  class BinaryWriter {
    constructor() {
      this.buf = Buffer.alloc(INITIAL_LENGTH);
      this.length = 0;
    }
    maybeResize() {
      if (this.buf.length < 16 + this.length) {
        this.buf = Buffer.concat([this.buf, Buffer.alloc(INITIAL_LENGTH)]);
      }
    }
    writeU8(value) {
      this.maybeResize();
      this.buf.writeUInt8(value, this.length);
      this.length += 1;
    }
    writeU16(value) {
      this.maybeResize();
      this.buf.writeUInt16LE(value, this.length);
      this.length += 2;
    }
    writeU32(value) {
      this.maybeResize();
      this.buf.writeUInt32LE(value, this.length);
      this.length += 4;
    }
    writeU64(value) {
      this.maybeResize();
      this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 8)));
    }
    writeU128(value) {
      this.maybeResize();
      this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 16)));
    }
    writeU256(value) {
      this.maybeResize();
      this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 32)));
    }
    writeU512(value) {
      this.maybeResize();
      this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 64)));
    }
    writeBuffer(buffer2) {
      this.buf = Buffer.concat([
        Buffer.from(this.buf.subarray(0, this.length)),
        buffer2,
        Buffer.alloc(INITIAL_LENGTH)
      ]);
      this.length += buffer2.length;
    }
    writeString(str) {
      this.maybeResize();
      const b2 = Buffer.from(str, "utf8");
      this.writeU32(b2.length);
      this.writeBuffer(b2);
    }
    writeFixedArray(array2) {
      this.writeBuffer(Buffer.from(array2));
    }
    writeArray(array2, fn) {
      this.maybeResize();
      this.writeU32(array2.length);
      for (const elem of array2) {
        this.maybeResize();
        fn(elem);
      }
    }
    toArray() {
      return this.buf.subarray(0, this.length);
    }
  }
  lib.BinaryWriter = BinaryWriter;
  function handlingRangeError(target, propertyKey, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function(...args) {
      try {
        return originalMethod.apply(this, args);
      } catch (e2) {
        if (e2 instanceof RangeError) {
          const code2 = e2.code;
          if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(code2) >= 0) {
            throw new BorshError("Reached the end of buffer when deserializing");
          }
        }
        throw e2;
      }
    };
  }
  class BinaryReader {
    constructor(buf) {
      this.buf = buf;
      this.offset = 0;
    }
    readU8() {
      const value = this.buf.readUInt8(this.offset);
      this.offset += 1;
      return value;
    }
    readU16() {
      const value = this.buf.readUInt16LE(this.offset);
      this.offset += 2;
      return value;
    }
    readU32() {
      const value = this.buf.readUInt32LE(this.offset);
      this.offset += 4;
      return value;
    }
    readU64() {
      const buf = this.readBuffer(8);
      return new bn_js_1.default(buf, "le");
    }
    readU128() {
      const buf = this.readBuffer(16);
      return new bn_js_1.default(buf, "le");
    }
    readU256() {
      const buf = this.readBuffer(32);
      return new bn_js_1.default(buf, "le");
    }
    readU512() {
      const buf = this.readBuffer(64);
      return new bn_js_1.default(buf, "le");
    }
    readBuffer(len2) {
      if (this.offset + len2 > this.buf.length) {
        throw new BorshError(`Expected buffer length ${len2} isn't within bounds`);
      }
      const result = this.buf.slice(this.offset, this.offset + len2);
      this.offset += len2;
      return result;
    }
    readString() {
      const len2 = this.readU32();
      const buf = this.readBuffer(len2);
      try {
        return textDecoder.decode(buf);
      } catch (e2) {
        throw new BorshError(`Error decoding UTF-8 string: ${e2}`);
      }
    }
    readFixedArray(len2) {
      return new Uint8Array(this.readBuffer(len2));
    }
    readArray(fn) {
      const len2 = this.readU32();
      const result = Array();
      for (let i2 = 0; i2 < len2; ++i2) {
        result.push(fn());
      }
      return result;
    }
  }
  __decorate([
    handlingRangeError
  ], BinaryReader.prototype, "readU8", null);
  __decorate([
    handlingRangeError
  ], BinaryReader.prototype, "readU16", null);
  __decorate([
    handlingRangeError
  ], BinaryReader.prototype, "readU32", null);
  __decorate([
    handlingRangeError
  ], BinaryReader.prototype, "readU64", null);
  __decorate([
    handlingRangeError
  ], BinaryReader.prototype, "readU128", null);
  __decorate([
    handlingRangeError
  ], BinaryReader.prototype, "readU256", null);
  __decorate([
    handlingRangeError
  ], BinaryReader.prototype, "readU512", null);
  __decorate([
    handlingRangeError
  ], BinaryReader.prototype, "readString", null);
  __decorate([
    handlingRangeError
  ], BinaryReader.prototype, "readFixedArray", null);
  __decorate([
    handlingRangeError
  ], BinaryReader.prototype, "readArray", null);
  lib.BinaryReader = BinaryReader;
  function capitalizeFirstLetter(string2) {
    return string2.charAt(0).toUpperCase() + string2.slice(1);
  }
  function serializeField(schema, fieldName, value, fieldType, writer) {
    try {
      if (typeof fieldType === "string") {
        writer[`write${capitalizeFirstLetter(fieldType)}`](value);
      } else if (fieldType instanceof Array) {
        if (typeof fieldType[0] === "number") {
          if (value.length !== fieldType[0]) {
            throw new BorshError(`Expecting byte array of length ${fieldType[0]}, but got ${value.length} bytes`);
          }
          writer.writeFixedArray(value);
        } else if (fieldType.length === 2 && typeof fieldType[1] === "number") {
          if (value.length !== fieldType[1]) {
            throw new BorshError(`Expecting byte array of length ${fieldType[1]}, but got ${value.length} bytes`);
          }
          for (let i2 = 0; i2 < fieldType[1]; i2++) {
            serializeField(schema, null, value[i2], fieldType[0], writer);
          }
        } else {
          writer.writeArray(value, (item) => {
            serializeField(schema, fieldName, item, fieldType[0], writer);
          });
        }
      } else if (fieldType.kind !== void 0) {
        switch (fieldType.kind) {
          case "option": {
            if (value === null || value === void 0) {
              writer.writeU8(0);
            } else {
              writer.writeU8(1);
              serializeField(schema, fieldName, value, fieldType.type, writer);
            }
            break;
          }
          case "map": {
            writer.writeU32(value.size);
            value.forEach((val, key) => {
              serializeField(schema, fieldName, key, fieldType.key, writer);
              serializeField(schema, fieldName, val, fieldType.value, writer);
            });
            break;
          }
          default:
            throw new BorshError(`FieldType ${fieldType} unrecognized`);
        }
      } else {
        serializeStruct(schema, value, writer);
      }
    } catch (error) {
      if (error instanceof BorshError) {
        error.addToFieldPath(fieldName);
      }
      throw error;
    }
  }
  function serializeStruct(schema, obj, writer) {
    if (typeof obj.borshSerialize === "function") {
      obj.borshSerialize(writer);
      return;
    }
    const structSchema = schema.get(obj.constructor);
    if (!structSchema) {
      throw new BorshError(`Class ${obj.constructor.name} is missing in schema`);
    }
    if (structSchema.kind === "struct") {
      structSchema.fields.map(([fieldName, fieldType]) => {
        serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
      });
    } else if (structSchema.kind === "enum") {
      const name = obj[structSchema.field];
      for (let idx = 0; idx < structSchema.values.length; ++idx) {
        const [fieldName, fieldType] = structSchema.values[idx];
        if (fieldName === name) {
          writer.writeU8(idx);
          serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
          break;
        }
      }
    } else {
      throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${obj.constructor.name}`);
    }
  }
  function serialize(schema, obj, Writer = BinaryWriter) {
    const writer = new Writer();
    serializeStruct(schema, obj, writer);
    return writer.toArray();
  }
  var serialize_1 = lib.serialize = serialize;
  function deserializeField(schema, fieldName, fieldType, reader) {
    try {
      if (typeof fieldType === "string") {
        return reader[`read${capitalizeFirstLetter(fieldType)}`]();
      }
      if (fieldType instanceof Array) {
        if (typeof fieldType[0] === "number") {
          return reader.readFixedArray(fieldType[0]);
        } else if (typeof fieldType[1] === "number") {
          const arr = [];
          for (let i2 = 0; i2 < fieldType[1]; i2++) {
            arr.push(deserializeField(schema, null, fieldType[0], reader));
          }
          return arr;
        } else {
          return reader.readArray(() => deserializeField(schema, fieldName, fieldType[0], reader));
        }
      }
      if (fieldType.kind === "option") {
        const option = reader.readU8();
        if (option) {
          return deserializeField(schema, fieldName, fieldType.type, reader);
        }
        return void 0;
      }
      if (fieldType.kind === "map") {
        let map = /* @__PURE__ */ new Map();
        const length = reader.readU32();
        for (let i2 = 0; i2 < length; i2++) {
          const key = deserializeField(schema, fieldName, fieldType.key, reader);
          const val = deserializeField(schema, fieldName, fieldType.value, reader);
          map.set(key, val);
        }
        return map;
      }
      return deserializeStruct(schema, fieldType, reader);
    } catch (error) {
      if (error instanceof BorshError) {
        error.addToFieldPath(fieldName);
      }
      throw error;
    }
  }
  function deserializeStruct(schema, classType, reader) {
    if (typeof classType.borshDeserialize === "function") {
      return classType.borshDeserialize(reader);
    }
    const structSchema = schema.get(classType);
    if (!structSchema) {
      throw new BorshError(`Class ${classType.name} is missing in schema`);
    }
    if (structSchema.kind === "struct") {
      const result = {};
      for (const [fieldName, fieldType] of schema.get(classType).fields) {
        result[fieldName] = deserializeField(schema, fieldName, fieldType, reader);
      }
      return new classType(result);
    }
    if (structSchema.kind === "enum") {
      const idx = reader.readU8();
      if (idx >= structSchema.values.length) {
        throw new BorshError(`Enum index: ${idx} is out of range`);
      }
      const [fieldName, fieldType] = structSchema.values[idx];
      const fieldValue = deserializeField(schema, fieldName, fieldType, reader);
      return new classType({ [fieldName]: fieldValue });
    }
    throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${classType.constructor.name}`);
  }
  function deserialize(schema, classType, buffer2, Reader = BinaryReader) {
    const reader = new Reader(buffer2);
    const result = deserializeStruct(schema, classType, reader);
    if (reader.offset < buffer2.length) {
      throw new BorshError(`Unexpected ${buffer2.length - reader.offset} bytes after deserialized data`);
    }
    return result;
  }
  var deserialize_1 = lib.deserialize = deserialize;
  function deserializeUnchecked(schema, classType, buffer2, Reader = BinaryReader) {
    const reader = new Reader(buffer2);
    return deserializeStruct(schema, classType, reader);
  }
  deserializeUnchecked_1 = lib.deserializeUnchecked = deserializeUnchecked;
  var Layout$1 = {};
  Object.defineProperty(Layout$1, "__esModule", { value: true });
  Layout$1.s16 = Layout$1.s8 = Layout$1.nu64be = Layout$1.u48be = Layout$1.u40be = Layout$1.u32be = Layout$1.u24be = Layout$1.u16be = nu64 = Layout$1.nu64 = Layout$1.u48 = Layout$1.u40 = u32 = Layout$1.u32 = Layout$1.u24 = u16 = Layout$1.u16 = u8 = Layout$1.u8 = offset = Layout$1.offset = Layout$1.greedy = Layout$1.Constant = Layout$1.UTF8 = Layout$1.CString = Layout$1.Blob = Layout$1.Boolean = Layout$1.BitField = Layout$1.BitStructure = Layout$1.VariantLayout = Layout$1.Union = Layout$1.UnionLayoutDiscriminator = Layout$1.UnionDiscriminator = Layout$1.Structure = Layout$1.Sequence = Layout$1.DoubleBE = Layout$1.Double = Layout$1.FloatBE = Layout$1.Float = Layout$1.NearInt64BE = Layout$1.NearInt64 = Layout$1.NearUInt64BE = Layout$1.NearUInt64 = Layout$1.IntBE = Layout$1.Int = Layout$1.UIntBE = Layout$1.UInt = Layout$1.OffsetLayout = Layout$1.GreedyCount = Layout$1.ExternalLayout = Layout$1.bindConstructorLayout = Layout$1.nameWithProperty = Layout$1.Layout = Layout$1.uint8ArrayToBuffer = Layout$1.checkUint8Array = void 0;
  Layout$1.constant = Layout$1.utf8 = Layout$1.cstr = blob = Layout$1.blob = Layout$1.unionLayoutDiscriminator = Layout$1.union = seq = Layout$1.seq = Layout$1.bits = struct = Layout$1.struct = Layout$1.f64be = Layout$1.f64 = Layout$1.f32be = Layout$1.f32 = Layout$1.ns64be = Layout$1.s48be = Layout$1.s40be = Layout$1.s32be = Layout$1.s24be = Layout$1.s16be = ns64 = Layout$1.ns64 = Layout$1.s48 = Layout$1.s40 = Layout$1.s32 = Layout$1.s24 = void 0;
  const buffer_1 = buffer;
  function checkUint8Array(b2) {
    if (!(b2 instanceof Uint8Array)) {
      throw new TypeError("b must be a Uint8Array");
    }
  }
  Layout$1.checkUint8Array = checkUint8Array;
  function uint8ArrayToBuffer(b2) {
    checkUint8Array(b2);
    return buffer_1.Buffer.from(b2.buffer, b2.byteOffset, b2.length);
  }
  Layout$1.uint8ArrayToBuffer = uint8ArrayToBuffer;
  class Layout {
    constructor(span, property) {
      if (!Number.isInteger(span)) {
        throw new TypeError("span must be an integer");
      }
      this.span = span;
      this.property = property;
    }
    /** Function to create an Object into which decoded properties will
     * be written.
     *
     * Used only for layouts that {@link Layout#decode|decode} to Object
     * instances, which means:
     * * {@link Structure}
     * * {@link Union}
     * * {@link VariantLayout}
     * * {@link BitStructure}
     *
     * If left undefined the JavaScript representation of these layouts
     * will be Object instances.
     *
     * See {@link bindConstructorLayout}.
     */
    makeDestinationObject() {
      return {};
    }
    /**
     * Calculate the span of a specific instance of a layout.
     *
     * @param {Uint8Array} b - the buffer that contains an encoded instance.
     *
     * @param {Number} [offset] - the offset at which the encoded instance
     * starts.  If absent a zero offset is inferred.
     *
     * @return {Number} - the number of bytes covered by the layout
     * instance.  If this method is not overridden in a subclass the
     * definition-time constant {@link Layout#span|span} will be
     * returned.
     *
     * @throws {RangeError} - if the length of the value cannot be
     * determined.
     */
    getSpan(b2, offset2) {
      if (0 > this.span) {
        throw new RangeError("indeterminate span");
      }
      return this.span;
    }
    /**
     * Replicate the layout using a new property.
     *
     * This function must be used to get a structurally-equivalent layout
     * with a different name since all {@link Layout} instances are
     * immutable.
     *
     * **NOTE** This is a shallow copy.  All fields except {@link
     * Layout#property|property} are strictly equal to the origin layout.
     *
     * @param {String} property - the value for {@link
     * Layout#property|property} in the replica.
     *
     * @returns {Layout} - the copy with {@link Layout#property|property}
     * set to `property`.
     */
    replicate(property) {
      const rv = Object.create(this.constructor.prototype);
      Object.assign(rv, this);
      rv.property = property;
      return rv;
    }
    /**
     * Create an object from layout properties and an array of values.
     *
     * **NOTE** This function returns `undefined` if invoked on a layout
     * that does not return its value as an Object.  Objects are
     * returned for things that are a {@link Structure}, which includes
     * {@link VariantLayout|variant layouts} if they are structures, and
     * excludes {@link Union}s.  If you want this feature for a union
     * you must use {@link Union.getVariant|getVariant} to select the
     * desired layout.
     *
     * @param {Array} values - an array of values that correspond to the
     * default order for properties.  As with {@link Layout#decode|decode}
     * layout elements that have no property name are skipped when
     * iterating over the array values.  Only the top-level properties are
     * assigned; arguments are not assigned to properties of contained
     * layouts.  Any unused values are ignored.
     *
     * @return {(Object|undefined)}
     */
    fromArray(values) {
      return void 0;
    }
  }
  Layout$1.Layout = Layout;
  function nameWithProperty(name, lo) {
    if (lo.property) {
      return name + "[" + lo.property + "]";
    }
    return name;
  }
  Layout$1.nameWithProperty = nameWithProperty;
  function bindConstructorLayout(Class, layout) {
    if ("function" !== typeof Class) {
      throw new TypeError("Class must be constructor");
    }
    if (Object.prototype.hasOwnProperty.call(Class, "layout_")) {
      throw new Error("Class is already bound to a layout");
    }
    if (!(layout && layout instanceof Layout)) {
      throw new TypeError("layout must be a Layout");
    }
    if (Object.prototype.hasOwnProperty.call(layout, "boundConstructor_")) {
      throw new Error("layout is already bound to a constructor");
    }
    Class.layout_ = layout;
    layout.boundConstructor_ = Class;
    layout.makeDestinationObject = () => new Class();
    Object.defineProperty(Class.prototype, "encode", {
      value(b2, offset2) {
        return layout.encode(this, b2, offset2);
      },
      writable: true
    });
    Object.defineProperty(Class, "decode", {
      value(b2, offset2) {
        return layout.decode(b2, offset2);
      },
      writable: true
    });
  }
  Layout$1.bindConstructorLayout = bindConstructorLayout;
  class ExternalLayout extends Layout {
    /**
     * Return `true` iff the external layout decodes to an unsigned
     * integer layout.
     *
     * In that case it can be used as the source of {@link
     * Sequence#count|Sequence counts}, {@link Blob#length|Blob lengths},
     * or as {@link UnionLayoutDiscriminator#layout|external union
     * discriminators}.
     *
     * @abstract
     */
    isCount() {
      throw new Error("ExternalLayout is abstract");
    }
  }
  Layout$1.ExternalLayout = ExternalLayout;
  class GreedyCount extends ExternalLayout {
    constructor(elementSpan = 1, property) {
      if (!Number.isInteger(elementSpan) || 0 >= elementSpan) {
        throw new TypeError("elementSpan must be a (positive) integer");
      }
      super(-1, property);
      this.elementSpan = elementSpan;
    }
    /** @override */
    isCount() {
      return true;
    }
    /** @override */
    decode(b2, offset2 = 0) {
      checkUint8Array(b2);
      const rem = b2.length - offset2;
      return Math.floor(rem / this.elementSpan);
    }
    /** @override */
    encode(src2, b2, offset2) {
      return 0;
    }
  }
  Layout$1.GreedyCount = GreedyCount;
  class OffsetLayout extends ExternalLayout {
    constructor(layout, offset2 = 0, property) {
      if (!(layout instanceof Layout)) {
        throw new TypeError("layout must be a Layout");
      }
      if (!Number.isInteger(offset2)) {
        throw new TypeError("offset must be integer or undefined");
      }
      super(layout.span, property || layout.property);
      this.layout = layout;
      this.offset = offset2;
    }
    /** @override */
    isCount() {
      return this.layout instanceof UInt || this.layout instanceof UIntBE;
    }
    /** @override */
    decode(b2, offset2 = 0) {
      return this.layout.decode(b2, offset2 + this.offset);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      return this.layout.encode(src2, b2, offset2 + this.offset);
    }
  }
  Layout$1.OffsetLayout = OffsetLayout;
  class UInt extends Layout {
    constructor(span, property) {
      super(span, property);
      if (6 < this.span) {
        throw new RangeError("span must not exceed 6 bytes");
      }
    }
    /** @override */
    decode(b2, offset2 = 0) {
      return uint8ArrayToBuffer(b2).readUIntLE(offset2, this.span);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      uint8ArrayToBuffer(b2).writeUIntLE(src2, offset2, this.span);
      return this.span;
    }
  }
  Layout$1.UInt = UInt;
  class UIntBE extends Layout {
    constructor(span, property) {
      super(span, property);
      if (6 < this.span) {
        throw new RangeError("span must not exceed 6 bytes");
      }
    }
    /** @override */
    decode(b2, offset2 = 0) {
      return uint8ArrayToBuffer(b2).readUIntBE(offset2, this.span);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      uint8ArrayToBuffer(b2).writeUIntBE(src2, offset2, this.span);
      return this.span;
    }
  }
  Layout$1.UIntBE = UIntBE;
  class Int extends Layout {
    constructor(span, property) {
      super(span, property);
      if (6 < this.span) {
        throw new RangeError("span must not exceed 6 bytes");
      }
    }
    /** @override */
    decode(b2, offset2 = 0) {
      return uint8ArrayToBuffer(b2).readIntLE(offset2, this.span);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      uint8ArrayToBuffer(b2).writeIntLE(src2, offset2, this.span);
      return this.span;
    }
  }
  Layout$1.Int = Int;
  class IntBE extends Layout {
    constructor(span, property) {
      super(span, property);
      if (6 < this.span) {
        throw new RangeError("span must not exceed 6 bytes");
      }
    }
    /** @override */
    decode(b2, offset2 = 0) {
      return uint8ArrayToBuffer(b2).readIntBE(offset2, this.span);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      uint8ArrayToBuffer(b2).writeIntBE(src2, offset2, this.span);
      return this.span;
    }
  }
  Layout$1.IntBE = IntBE;
  const V2E32 = Math.pow(2, 32);
  function divmodInt64(src2) {
    const hi32 = Math.floor(src2 / V2E32);
    const lo32 = src2 - hi32 * V2E32;
    return { hi32, lo32 };
  }
  function roundedInt64(hi32, lo32) {
    return hi32 * V2E32 + lo32;
  }
  class NearUInt64 extends Layout {
    constructor(property) {
      super(8, property);
    }
    /** @override */
    decode(b2, offset2 = 0) {
      const buffer2 = uint8ArrayToBuffer(b2);
      const lo32 = buffer2.readUInt32LE(offset2);
      const hi32 = buffer2.readUInt32LE(offset2 + 4);
      return roundedInt64(hi32, lo32);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      const split2 = divmodInt64(src2);
      const buffer2 = uint8ArrayToBuffer(b2);
      buffer2.writeUInt32LE(split2.lo32, offset2);
      buffer2.writeUInt32LE(split2.hi32, offset2 + 4);
      return 8;
    }
  }
  Layout$1.NearUInt64 = NearUInt64;
  class NearUInt64BE extends Layout {
    constructor(property) {
      super(8, property);
    }
    /** @override */
    decode(b2, offset2 = 0) {
      const buffer2 = uint8ArrayToBuffer(b2);
      const hi32 = buffer2.readUInt32BE(offset2);
      const lo32 = buffer2.readUInt32BE(offset2 + 4);
      return roundedInt64(hi32, lo32);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      const split2 = divmodInt64(src2);
      const buffer2 = uint8ArrayToBuffer(b2);
      buffer2.writeUInt32BE(split2.hi32, offset2);
      buffer2.writeUInt32BE(split2.lo32, offset2 + 4);
      return 8;
    }
  }
  Layout$1.NearUInt64BE = NearUInt64BE;
  class NearInt64 extends Layout {
    constructor(property) {
      super(8, property);
    }
    /** @override */
    decode(b2, offset2 = 0) {
      const buffer2 = uint8ArrayToBuffer(b2);
      const lo32 = buffer2.readUInt32LE(offset2);
      const hi32 = buffer2.readInt32LE(offset2 + 4);
      return roundedInt64(hi32, lo32);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      const split2 = divmodInt64(src2);
      const buffer2 = uint8ArrayToBuffer(b2);
      buffer2.writeUInt32LE(split2.lo32, offset2);
      buffer2.writeInt32LE(split2.hi32, offset2 + 4);
      return 8;
    }
  }
  Layout$1.NearInt64 = NearInt64;
  class NearInt64BE extends Layout {
    constructor(property) {
      super(8, property);
    }
    /** @override */
    decode(b2, offset2 = 0) {
      const buffer2 = uint8ArrayToBuffer(b2);
      const hi32 = buffer2.readInt32BE(offset2);
      const lo32 = buffer2.readUInt32BE(offset2 + 4);
      return roundedInt64(hi32, lo32);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      const split2 = divmodInt64(src2);
      const buffer2 = uint8ArrayToBuffer(b2);
      buffer2.writeInt32BE(split2.hi32, offset2);
      buffer2.writeUInt32BE(split2.lo32, offset2 + 4);
      return 8;
    }
  }
  Layout$1.NearInt64BE = NearInt64BE;
  class Float extends Layout {
    constructor(property) {
      super(4, property);
    }
    /** @override */
    decode(b2, offset2 = 0) {
      return uint8ArrayToBuffer(b2).readFloatLE(offset2);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      uint8ArrayToBuffer(b2).writeFloatLE(src2, offset2);
      return 4;
    }
  }
  Layout$1.Float = Float;
  class FloatBE extends Layout {
    constructor(property) {
      super(4, property);
    }
    /** @override */
    decode(b2, offset2 = 0) {
      return uint8ArrayToBuffer(b2).readFloatBE(offset2);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      uint8ArrayToBuffer(b2).writeFloatBE(src2, offset2);
      return 4;
    }
  }
  Layout$1.FloatBE = FloatBE;
  class Double extends Layout {
    constructor(property) {
      super(8, property);
    }
    /** @override */
    decode(b2, offset2 = 0) {
      return uint8ArrayToBuffer(b2).readDoubleLE(offset2);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      uint8ArrayToBuffer(b2).writeDoubleLE(src2, offset2);
      return 8;
    }
  }
  Layout$1.Double = Double;
  class DoubleBE extends Layout {
    constructor(property) {
      super(8, property);
    }
    /** @override */
    decode(b2, offset2 = 0) {
      return uint8ArrayToBuffer(b2).readDoubleBE(offset2);
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      uint8ArrayToBuffer(b2).writeDoubleBE(src2, offset2);
      return 8;
    }
  }
  Layout$1.DoubleBE = DoubleBE;
  class Sequence extends Layout {
    constructor(elementLayout, count, property) {
      if (!(elementLayout instanceof Layout)) {
        throw new TypeError("elementLayout must be a Layout");
      }
      if (!(count instanceof ExternalLayout && count.isCount() || Number.isInteger(count) && 0 <= count)) {
        throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
      }
      let span = -1;
      if (!(count instanceof ExternalLayout) && 0 < elementLayout.span) {
        span = count * elementLayout.span;
      }
      super(span, property);
      this.elementLayout = elementLayout;
      this.count = count;
    }
    /** @override */
    getSpan(b2, offset2 = 0) {
      if (0 <= this.span) {
        return this.span;
      }
      let span = 0;
      let count = this.count;
      if (count instanceof ExternalLayout) {
        count = count.decode(b2, offset2);
      }
      if (0 < this.elementLayout.span) {
        span = count * this.elementLayout.span;
      } else {
        let idx = 0;
        while (idx < count) {
          span += this.elementLayout.getSpan(b2, offset2 + span);
          ++idx;
        }
      }
      return span;
    }
    /** @override */
    decode(b2, offset2 = 0) {
      const rv = [];
      let i2 = 0;
      let count = this.count;
      if (count instanceof ExternalLayout) {
        count = count.decode(b2, offset2);
      }
      while (i2 < count) {
        rv.push(this.elementLayout.decode(b2, offset2));
        offset2 += this.elementLayout.getSpan(b2, offset2);
        i2 += 1;
      }
      return rv;
    }
    /** Implement {@link Layout#encode|encode} for {@link Sequence}.
     *
     * **NOTE** If `src` is shorter than {@link Sequence#count|count} then
     * the unused space in the buffer is left unchanged.  If `src` is
     * longer than {@link Sequence#count|count} the unneeded elements are
     * ignored.
     *
     * **NOTE** If {@link Layout#count|count} is an instance of {@link
     * ExternalLayout} then the length of `src` will be encoded as the
     * count after `src` is encoded. */
    encode(src2, b2, offset2 = 0) {
      const elo = this.elementLayout;
      const span = src2.reduce((span2, v2) => {
        return span2 + elo.encode(v2, b2, offset2 + span2);
      }, 0);
      if (this.count instanceof ExternalLayout) {
        this.count.encode(src2.length, b2, offset2);
      }
      return span;
    }
  }
  Layout$1.Sequence = Sequence;
  class Structure extends Layout {
    constructor(fields, property, decodePrefixes) {
      if (!(Array.isArray(fields) && fields.reduce((acc, v2) => acc && v2 instanceof Layout, true))) {
        throw new TypeError("fields must be array of Layout instances");
      }
      if ("boolean" === typeof property && void 0 === decodePrefixes) {
        decodePrefixes = property;
        property = void 0;
      }
      for (const fd of fields) {
        if (0 > fd.span && void 0 === fd.property) {
          throw new Error("fields cannot contain unnamed variable-length layout");
        }
      }
      let span = -1;
      try {
        span = fields.reduce((span2, fd) => span2 + fd.getSpan(), 0);
      } catch (e2) {
      }
      super(span, property);
      this.fields = fields;
      this.decodePrefixes = !!decodePrefixes;
    }
    /** @override */
    getSpan(b2, offset2 = 0) {
      if (0 <= this.span) {
        return this.span;
      }
      let span = 0;
      try {
        span = this.fields.reduce((span2, fd) => {
          const fsp = fd.getSpan(b2, offset2);
          offset2 += fsp;
          return span2 + fsp;
        }, 0);
      } catch (e2) {
        throw new RangeError("indeterminate span");
      }
      return span;
    }
    /** @override */
    decode(b2, offset2 = 0) {
      checkUint8Array(b2);
      const dest = this.makeDestinationObject();
      for (const fd of this.fields) {
        if (void 0 !== fd.property) {
          dest[fd.property] = fd.decode(b2, offset2);
        }
        offset2 += fd.getSpan(b2, offset2);
        if (this.decodePrefixes && b2.length === offset2) {
          break;
        }
      }
      return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link Structure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the buffer is
     * left unmodified. */
    encode(src2, b2, offset2 = 0) {
      const firstOffset = offset2;
      let lastOffset = 0;
      let lastWrote = 0;
      for (const fd of this.fields) {
        let span = fd.span;
        lastWrote = 0 < span ? span : 0;
        if (void 0 !== fd.property) {
          const fv = src2[fd.property];
          if (void 0 !== fv) {
            lastWrote = fd.encode(fv, b2, offset2);
            if (0 > span) {
              span = fd.getSpan(b2, offset2);
            }
          }
        }
        lastOffset = offset2;
        offset2 += span;
      }
      return lastOffset + lastWrote - firstOffset;
    }
    /** @override */
    fromArray(values) {
      const dest = this.makeDestinationObject();
      for (const fd of this.fields) {
        if (void 0 !== fd.property && 0 < values.length) {
          dest[fd.property] = values.shift();
        }
      }
      return dest;
    }
    /**
     * Get access to the layout of a given property.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Layout} - the layout associated with `property`, or
     * undefined if there is no such property.
     */
    layoutFor(property) {
      if ("string" !== typeof property) {
        throw new TypeError("property must be string");
      }
      for (const fd of this.fields) {
        if (fd.property === property) {
          return fd;
        }
      }
      return void 0;
    }
    /**
     * Get the offset of a structure member.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Number} - the offset in bytes to the start of `property`
     * within the structure, or undefined if `property` is not a field
     * within the structure.  If the property is a member but follows a
     * variable-length structure member a negative number will be
     * returned.
     */
    offsetOf(property) {
      if ("string" !== typeof property) {
        throw new TypeError("property must be string");
      }
      let offset2 = 0;
      for (const fd of this.fields) {
        if (fd.property === property) {
          return offset2;
        }
        if (0 > fd.span) {
          offset2 = -1;
        } else if (0 <= offset2) {
          offset2 += fd.span;
        }
      }
      return void 0;
    }
  }
  Layout$1.Structure = Structure;
  class UnionDiscriminator {
    constructor(property) {
      this.property = property;
    }
    /** Analog to {@link Layout#decode|Layout decode} for union discriminators.
     *
     * The implementation of this method need not reference the buffer if
     * variant information is available through other means. */
    decode(b2, offset2) {
      throw new Error("UnionDiscriminator is abstract");
    }
    /** Analog to {@link Layout#decode|Layout encode} for union discriminators.
     *
     * The implementation of this method need not store the value if
     * variant information is maintained through other means. */
    encode(src2, b2, offset2) {
      throw new Error("UnionDiscriminator is abstract");
    }
  }
  Layout$1.UnionDiscriminator = UnionDiscriminator;
  class UnionLayoutDiscriminator extends UnionDiscriminator {
    constructor(layout, property) {
      if (!(layout instanceof ExternalLayout && layout.isCount())) {
        throw new TypeError("layout must be an unsigned integer ExternalLayout");
      }
      super(property || layout.property || "variant");
      this.layout = layout;
    }
    /** Delegate decoding to {@link UnionLayoutDiscriminator#layout|layout}. */
    decode(b2, offset2) {
      return this.layout.decode(b2, offset2);
    }
    /** Delegate encoding to {@link UnionLayoutDiscriminator#layout|layout}. */
    encode(src2, b2, offset2) {
      return this.layout.encode(src2, b2, offset2);
    }
  }
  Layout$1.UnionLayoutDiscriminator = UnionLayoutDiscriminator;
  class Union extends Layout {
    constructor(discr, defaultLayout, property) {
      let discriminator;
      if (discr instanceof UInt || discr instanceof UIntBE) {
        discriminator = new UnionLayoutDiscriminator(new OffsetLayout(discr));
      } else if (discr instanceof ExternalLayout && discr.isCount()) {
        discriminator = new UnionLayoutDiscriminator(discr);
      } else if (!(discr instanceof UnionDiscriminator)) {
        throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
      } else {
        discriminator = discr;
      }
      if (void 0 === defaultLayout) {
        defaultLayout = null;
      }
      if (!(null === defaultLayout || defaultLayout instanceof Layout)) {
        throw new TypeError("defaultLayout must be null or a Layout");
      }
      if (null !== defaultLayout) {
        if (0 > defaultLayout.span) {
          throw new Error("defaultLayout must have constant span");
        }
        if (void 0 === defaultLayout.property) {
          defaultLayout = defaultLayout.replicate("content");
        }
      }
      let span = -1;
      if (defaultLayout) {
        span = defaultLayout.span;
        if (0 <= span && (discr instanceof UInt || discr instanceof UIntBE)) {
          span += discriminator.layout.span;
        }
      }
      super(span, property);
      this.discriminator = discriminator;
      this.usesPrefixDiscriminator = discr instanceof UInt || discr instanceof UIntBE;
      this.defaultLayout = defaultLayout;
      this.registry = {};
      let boundGetSourceVariant = this.defaultGetSourceVariant.bind(this);
      this.getSourceVariant = function(src2) {
        return boundGetSourceVariant(src2);
      };
      this.configGetSourceVariant = function(gsv) {
        boundGetSourceVariant = gsv.bind(this);
      };
    }
    /** @override */
    getSpan(b2, offset2 = 0) {
      if (0 <= this.span) {
        return this.span;
      }
      const vlo = this.getVariant(b2, offset2);
      if (!vlo) {
        throw new Error("unable to determine span for unrecognized variant");
      }
      return vlo.getSpan(b2, offset2);
    }
    /**
     * Method to infer a registered Union variant compatible with `src`.
     *
     * The first satisfied rule in the following sequence defines the
     * return value:
     * * If `src` has properties matching the Union discriminator and
     *   the default layout, `undefined` is returned regardless of the
     *   value of the discriminator property (this ensures the default
     *   layout will be used);
     * * If `src` has a property matching the Union discriminator, the
     *   value of the discriminator identifies a registered variant, and
     *   either (a) the variant has no layout, or (b) `src` has the
     *   variant's property, then the variant is returned (because the
     *   source satisfies the constraints of the variant it identifies);
     * * If `src` does not have a property matching the Union
     *   discriminator, but does have a property matching a registered
     *   variant, then the variant is returned (because the source
     *   matches a variant without an explicit conflict);
     * * An error is thrown (because we either can't identify a variant,
     *   or we were explicitly told the variant but can't satisfy it).
     *
     * @param {Object} src - an object presumed to be compatible with
     * the content of the Union.
     *
     * @return {(undefined|VariantLayout)} - as described above.
     *
     * @throws {Error} - if `src` cannot be associated with a default or
     * registered variant.
     */
    defaultGetSourceVariant(src2) {
      if (Object.prototype.hasOwnProperty.call(src2, this.discriminator.property)) {
        if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(src2, this.defaultLayout.property)) {
          return void 0;
        }
        const vlo = this.registry[src2[this.discriminator.property]];
        if (vlo && (!vlo.layout || vlo.property && Object.prototype.hasOwnProperty.call(src2, vlo.property))) {
          return vlo;
        }
      } else {
        for (const tag in this.registry) {
          const vlo = this.registry[tag];
          if (vlo.property && Object.prototype.hasOwnProperty.call(src2, vlo.property)) {
            return vlo;
          }
        }
      }
      throw new Error("unable to infer src variant");
    }
    /** Implement {@link Layout#decode|decode} for {@link Union}.
     *
     * If the variant is {@link Union#addVariant|registered} the return
     * value is an instance of that variant, with no explicit
     * discriminator.  Otherwise the {@link Union#defaultLayout|default
     * layout} is used to decode the content. */
    decode(b2, offset2 = 0) {
      let dest;
      const dlo = this.discriminator;
      const discr = dlo.decode(b2, offset2);
      const clo = this.registry[discr];
      if (void 0 === clo) {
        const defaultLayout = this.defaultLayout;
        let contentOffset = 0;
        if (this.usesPrefixDiscriminator) {
          contentOffset = dlo.layout.span;
        }
        dest = this.makeDestinationObject();
        dest[dlo.property] = discr;
        dest[defaultLayout.property] = defaultLayout.decode(b2, offset2 + contentOffset);
      } else {
        dest = clo.decode(b2, offset2);
      }
      return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link Union}.
     *
     * This API assumes the `src` object is consistent with the union's
     * {@link Union#defaultLayout|default layout}.  To encode variants
     * use the appropriate variant-specific {@link VariantLayout#encode}
     * method. */
    encode(src2, b2, offset2 = 0) {
      const vlo = this.getSourceVariant(src2);
      if (void 0 === vlo) {
        const dlo = this.discriminator;
        const clo = this.defaultLayout;
        let contentOffset = 0;
        if (this.usesPrefixDiscriminator) {
          contentOffset = dlo.layout.span;
        }
        dlo.encode(src2[dlo.property], b2, offset2);
        return contentOffset + clo.encode(src2[clo.property], b2, offset2 + contentOffset);
      }
      return vlo.encode(src2, b2, offset2);
    }
    /** Register a new variant structure within a union.  The newly
     * created variant is returned.
     *
     * @param {Number} variant - initializer for {@link
     * VariantLayout#variant|variant}.
     *
     * @param {Layout} layout - initializer for {@link
     * VariantLayout#layout|layout}.
     *
     * @param {String} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {VariantLayout} */
    addVariant(variant, layout, property) {
      const rv = new VariantLayout(this, variant, layout, property);
      this.registry[variant] = rv;
      return rv;
    }
    /**
     * Get the layout associated with a registered variant.
     *
     * If `vb` does not produce a registered variant the function returns
     * `undefined`.
     *
     * @param {(Number|Uint8Array)} vb - either the variant number, or a
     * buffer from which the discriminator is to be read.
     *
     * @param {Number} offset - offset into `vb` for the start of the
     * union.  Used only when `vb` is an instance of {Uint8Array}.
     *
     * @return {({VariantLayout}|undefined)}
     */
    getVariant(vb, offset2 = 0) {
      let variant;
      if (vb instanceof Uint8Array) {
        variant = this.discriminator.decode(vb, offset2);
      } else {
        variant = vb;
      }
      return this.registry[variant];
    }
  }
  Layout$1.Union = Union;
  class VariantLayout extends Layout {
    constructor(union2, variant, layout, property) {
      if (!(union2 instanceof Union)) {
        throw new TypeError("union must be a Union");
      }
      if (!Number.isInteger(variant) || 0 > variant) {
        throw new TypeError("variant must be a (non-negative) integer");
      }
      if ("string" === typeof layout && void 0 === property) {
        property = layout;
        layout = null;
      }
      if (layout) {
        if (!(layout instanceof Layout)) {
          throw new TypeError("layout must be a Layout");
        }
        if (null !== union2.defaultLayout && 0 <= layout.span && layout.span > union2.defaultLayout.span) {
          throw new Error("variant span exceeds span of containing union");
        }
        if ("string" !== typeof property) {
          throw new TypeError("variant must have a String property");
        }
      }
      let span = union2.span;
      if (0 > union2.span) {
        span = layout ? layout.span : 0;
        if (0 <= span && union2.usesPrefixDiscriminator) {
          span += union2.discriminator.layout.span;
        }
      }
      super(span, property);
      this.union = union2;
      this.variant = variant;
      this.layout = layout || null;
    }
    /** @override */
    getSpan(b2, offset2 = 0) {
      if (0 <= this.span) {
        return this.span;
      }
      let contentOffset = 0;
      if (this.union.usesPrefixDiscriminator) {
        contentOffset = this.union.discriminator.layout.span;
      }
      let span = 0;
      if (this.layout) {
        span = this.layout.getSpan(b2, offset2 + contentOffset);
      }
      return contentOffset + span;
    }
    /** @override */
    decode(b2, offset2 = 0) {
      const dest = this.makeDestinationObject();
      if (this !== this.union.getVariant(b2, offset2)) {
        throw new Error("variant mismatch");
      }
      let contentOffset = 0;
      if (this.union.usesPrefixDiscriminator) {
        contentOffset = this.union.discriminator.layout.span;
      }
      if (this.layout) {
        dest[this.property] = this.layout.decode(b2, offset2 + contentOffset);
      } else if (this.property) {
        dest[this.property] = true;
      } else if (this.union.usesPrefixDiscriminator) {
        dest[this.union.discriminator.property] = this.variant;
      }
      return dest;
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      let contentOffset = 0;
      if (this.union.usesPrefixDiscriminator) {
        contentOffset = this.union.discriminator.layout.span;
      }
      if (this.layout && !Object.prototype.hasOwnProperty.call(src2, this.property)) {
        throw new TypeError("variant lacks property " + this.property);
      }
      this.union.discriminator.encode(this.variant, b2, offset2);
      let span = contentOffset;
      if (this.layout) {
        this.layout.encode(src2[this.property], b2, offset2 + contentOffset);
        span += this.layout.getSpan(b2, offset2 + contentOffset);
        if (0 <= this.union.span && span > this.union.span) {
          throw new Error("encoded variant overruns containing union");
        }
      }
      return span;
    }
    /** Delegate {@link Layout#fromArray|fromArray} to {@link
     * VariantLayout#layout|layout}. */
    fromArray(values) {
      if (this.layout) {
        return this.layout.fromArray(values);
      }
      return void 0;
    }
  }
  Layout$1.VariantLayout = VariantLayout;
  function fixBitwiseResult(v2) {
    if (0 > v2) {
      v2 += 4294967296;
    }
    return v2;
  }
  class BitStructure extends Layout {
    constructor(word, msb, property) {
      if (!(word instanceof UInt || word instanceof UIntBE)) {
        throw new TypeError("word must be a UInt or UIntBE layout");
      }
      if ("string" === typeof msb && void 0 === property) {
        property = msb;
        msb = false;
      }
      if (4 < word.span) {
        throw new RangeError("word cannot exceed 32 bits");
      }
      super(word.span, property);
      this.word = word;
      this.msb = !!msb;
      this.fields = [];
      let value = 0;
      this._packedSetValue = function(v2) {
        value = fixBitwiseResult(v2);
        return this;
      };
      this._packedGetValue = function() {
        return value;
      };
    }
    /** @override */
    decode(b2, offset2 = 0) {
      const dest = this.makeDestinationObject();
      const value = this.word.decode(b2, offset2);
      this._packedSetValue(value);
      for (const fd of this.fields) {
        if (void 0 !== fd.property) {
          dest[fd.property] = fd.decode(b2);
        }
      }
      return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link BitStructure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the packed
     * value is left unmodified.  Unused bits are also left unmodified. */
    encode(src2, b2, offset2 = 0) {
      const value = this.word.decode(b2, offset2);
      this._packedSetValue(value);
      for (const fd of this.fields) {
        if (void 0 !== fd.property) {
          const fv = src2[fd.property];
          if (void 0 !== fv) {
            fd.encode(fv);
          }
        }
      }
      return this.word.encode(this._packedGetValue(), b2, offset2);
    }
    /** Register a new bitfield with a containing bit structure.  The
     * resulting bitfield is returned.
     *
     * @param {Number} bits - initializer for {@link BitField#bits|bits}.
     *
     * @param {string} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {BitField} */
    addField(bits, property) {
      const bf = new BitField(this, bits, property);
      this.fields.push(bf);
      return bf;
    }
    /** As with {@link BitStructure#addField|addField} for single-bit
     * fields with `boolean` value representation.
     *
     * @param {string} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {Boolean} */
    // `Boolean` conflicts with the native primitive type
    // eslint-disable-next-line @typescript-eslint/ban-types
    addBoolean(property) {
      const bf = new Boolean$1(this, property);
      this.fields.push(bf);
      return bf;
    }
    /**
     * Get access to the bit field for a given property.
     *
     * @param {String} property - the bit field of interest.
     *
     * @return {BitField} - the field associated with `property`, or
     * undefined if there is no such property.
     */
    fieldFor(property) {
      if ("string" !== typeof property) {
        throw new TypeError("property must be string");
      }
      for (const fd of this.fields) {
        if (fd.property === property) {
          return fd;
        }
      }
      return void 0;
    }
  }
  Layout$1.BitStructure = BitStructure;
  class BitField {
    constructor(container, bits, property) {
      if (!(container instanceof BitStructure)) {
        throw new TypeError("container must be a BitStructure");
      }
      if (!Number.isInteger(bits) || 0 >= bits) {
        throw new TypeError("bits must be positive integer");
      }
      const totalBits = 8 * container.span;
      const usedBits = container.fields.reduce((sum, fd) => sum + fd.bits, 0);
      if (bits + usedBits > totalBits) {
        throw new Error("bits too long for span remainder (" + (totalBits - usedBits) + " of " + totalBits + " remain)");
      }
      this.container = container;
      this.bits = bits;
      this.valueMask = (1 << bits) - 1;
      if (32 === bits) {
        this.valueMask = 4294967295;
      }
      this.start = usedBits;
      if (this.container.msb) {
        this.start = totalBits - usedBits - bits;
      }
      this.wordMask = fixBitwiseResult(this.valueMask << this.start);
      this.property = property;
    }
    /** Store a value into the corresponding subsequence of the containing
     * bit field. */
    decode(b2, offset2) {
      const word = this.container._packedGetValue();
      const wordValue = fixBitwiseResult(word & this.wordMask);
      const value = wordValue >>> this.start;
      return value;
    }
    /** Store a value into the corresponding subsequence of the containing
     * bit field.
     *
     * **NOTE** This is not a specialization of {@link
     * Layout#encode|Layout.encode} and there is no return value. */
    encode(value) {
      if ("number" !== typeof value || !Number.isInteger(value) || value !== fixBitwiseResult(value & this.valueMask)) {
        throw new TypeError(nameWithProperty("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
      }
      const word = this.container._packedGetValue();
      const wordValue = fixBitwiseResult(value << this.start);
      this.container._packedSetValue(fixBitwiseResult(word & ~this.wordMask) | wordValue);
    }
  }
  Layout$1.BitField = BitField;
  let Boolean$1 = class Boolean extends BitField {
    constructor(container, property) {
      super(container, 1, property);
    }
    /** Override {@link BitField#decode|decode} for {@link Boolean|Boolean}.
     *
     * @returns {boolean} */
    decode(b2, offset2) {
      return !!super.decode(b2, offset2);
    }
    /** @override */
    encode(value) {
      if ("boolean" === typeof value) {
        value = +value;
      }
      super.encode(value);
    }
  };
  Layout$1.Boolean = Boolean$1;
  class Blob extends Layout {
    constructor(length, property) {
      if (!(length instanceof ExternalLayout && length.isCount() || Number.isInteger(length) && 0 <= length)) {
        throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
      }
      let span = -1;
      if (!(length instanceof ExternalLayout)) {
        span = length;
      }
      super(span, property);
      this.length = length;
    }
    /** @override */
    getSpan(b2, offset2) {
      let span = this.span;
      if (0 > span) {
        span = this.length.decode(b2, offset2);
      }
      return span;
    }
    /** @override */
    decode(b2, offset2 = 0) {
      let span = this.span;
      if (0 > span) {
        span = this.length.decode(b2, offset2);
      }
      return uint8ArrayToBuffer(b2).slice(offset2, offset2 + span);
    }
    /** Implement {@link Layout#encode|encode} for {@link Blob}.
     *
     * **NOTE** If {@link Layout#count|count} is an instance of {@link
     * ExternalLayout} then the length of `src` will be encoded as the
     * count after `src` is encoded. */
    encode(src2, b2, offset2) {
      let span = this.length;
      if (this.length instanceof ExternalLayout) {
        span = src2.length;
      }
      if (!(src2 instanceof Uint8Array && span === src2.length)) {
        throw new TypeError(nameWithProperty("Blob.encode", this) + " requires (length " + span + ") Uint8Array as src");
      }
      if (offset2 + span > b2.length) {
        throw new RangeError("encoding overruns Uint8Array");
      }
      const srcBuffer = uint8ArrayToBuffer(src2);
      uint8ArrayToBuffer(b2).write(srcBuffer.toString("hex"), offset2, span, "hex");
      if (this.length instanceof ExternalLayout) {
        this.length.encode(span, b2, offset2);
      }
      return span;
    }
  }
  Layout$1.Blob = Blob;
  class CString extends Layout {
    constructor(property) {
      super(-1, property);
    }
    /** @override */
    getSpan(b2, offset2 = 0) {
      checkUint8Array(b2);
      let idx = offset2;
      while (idx < b2.length && 0 !== b2[idx]) {
        idx += 1;
      }
      return 1 + idx - offset2;
    }
    /** @override */
    decode(b2, offset2 = 0) {
      const span = this.getSpan(b2, offset2);
      return uint8ArrayToBuffer(b2).slice(offset2, offset2 + span - 1).toString("utf-8");
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      if ("string" !== typeof src2) {
        src2 = String(src2);
      }
      const srcb = buffer_1.Buffer.from(src2, "utf8");
      const span = srcb.length;
      if (offset2 + span > b2.length) {
        throw new RangeError("encoding overruns Buffer");
      }
      const buffer2 = uint8ArrayToBuffer(b2);
      srcb.copy(buffer2, offset2);
      buffer2[offset2 + span] = 0;
      return span + 1;
    }
  }
  Layout$1.CString = CString;
  class UTF8 extends Layout {
    constructor(maxSpan, property) {
      if ("string" === typeof maxSpan && void 0 === property) {
        property = maxSpan;
        maxSpan = void 0;
      }
      if (void 0 === maxSpan) {
        maxSpan = -1;
      } else if (!Number.isInteger(maxSpan)) {
        throw new TypeError("maxSpan must be an integer");
      }
      super(-1, property);
      this.maxSpan = maxSpan;
    }
    /** @override */
    getSpan(b2, offset2 = 0) {
      checkUint8Array(b2);
      return b2.length - offset2;
    }
    /** @override */
    decode(b2, offset2 = 0) {
      const span = this.getSpan(b2, offset2);
      if (0 <= this.maxSpan && this.maxSpan < span) {
        throw new RangeError("text length exceeds maxSpan");
      }
      return uint8ArrayToBuffer(b2).slice(offset2, offset2 + span).toString("utf-8");
    }
    /** @override */
    encode(src2, b2, offset2 = 0) {
      if ("string" !== typeof src2) {
        src2 = String(src2);
      }
      const srcb = buffer_1.Buffer.from(src2, "utf8");
      const span = srcb.length;
      if (0 <= this.maxSpan && this.maxSpan < span) {
        throw new RangeError("text length exceeds maxSpan");
      }
      if (offset2 + span > b2.length) {
        throw new RangeError("encoding overruns Buffer");
      }
      srcb.copy(uint8ArrayToBuffer(b2), offset2);
      return span;
    }
  }
  Layout$1.UTF8 = UTF8;
  class Constant extends Layout {
    constructor(value, property) {
      super(0, property);
      this.value = value;
    }
    /** @override */
    decode(b2, offset2) {
      return this.value;
    }
    /** @override */
    encode(src2, b2, offset2) {
      return 0;
    }
  }
  Layout$1.Constant = Constant;
  Layout$1.greedy = (elementSpan, property) => new GreedyCount(elementSpan, property);
  var offset = Layout$1.offset = (layout, offset2, property) => new OffsetLayout(layout, offset2, property);
  var u8 = Layout$1.u8 = (property) => new UInt(1, property);
  var u16 = Layout$1.u16 = (property) => new UInt(2, property);
  Layout$1.u24 = (property) => new UInt(3, property);
  var u32 = Layout$1.u32 = (property) => new UInt(4, property);
  Layout$1.u40 = (property) => new UInt(5, property);
  Layout$1.u48 = (property) => new UInt(6, property);
  var nu64 = Layout$1.nu64 = (property) => new NearUInt64(property);
  Layout$1.u16be = (property) => new UIntBE(2, property);
  Layout$1.u24be = (property) => new UIntBE(3, property);
  Layout$1.u32be = (property) => new UIntBE(4, property);
  Layout$1.u40be = (property) => new UIntBE(5, property);
  Layout$1.u48be = (property) => new UIntBE(6, property);
  Layout$1.nu64be = (property) => new NearUInt64BE(property);
  Layout$1.s8 = (property) => new Int(1, property);
  Layout$1.s16 = (property) => new Int(2, property);
  Layout$1.s24 = (property) => new Int(3, property);
  Layout$1.s32 = (property) => new Int(4, property);
  Layout$1.s40 = (property) => new Int(5, property);
  Layout$1.s48 = (property) => new Int(6, property);
  var ns64 = Layout$1.ns64 = (property) => new NearInt64(property);
  Layout$1.s16be = (property) => new IntBE(2, property);
  Layout$1.s24be = (property) => new IntBE(3, property);
  Layout$1.s32be = (property) => new IntBE(4, property);
  Layout$1.s40be = (property) => new IntBE(5, property);
  Layout$1.s48be = (property) => new IntBE(6, property);
  Layout$1.ns64be = (property) => new NearInt64BE(property);
  Layout$1.f32 = (property) => new Float(property);
  Layout$1.f32be = (property) => new FloatBE(property);
  Layout$1.f64 = (property) => new Double(property);
  Layout$1.f64be = (property) => new DoubleBE(property);
  var struct = Layout$1.struct = (fields, property, decodePrefixes) => new Structure(fields, property, decodePrefixes);
  Layout$1.bits = (word, msb, property) => new BitStructure(word, msb, property);
  var seq = Layout$1.seq = (elementLayout, count, property) => new Sequence(elementLayout, count, property);
  Layout$1.union = (discr, defaultLayout, property) => new Union(discr, defaultLayout, property);
  Layout$1.unionLayoutDiscriminator = (layout, property) => new UnionLayoutDiscriminator(layout, property);
  var blob = Layout$1.blob = (length, property) => new Blob(length, property);
  Layout$1.cstr = (property) => new CString(property);
  Layout$1.utf8 = (maxSpan, property) => new UTF8(maxSpan, property);
  Layout$1.constant = (value, property) => new Constant(value, property);
  var browser = {};
  Object.defineProperty(browser, "__esModule", { value: true });
  function toBigIntLE(buf) {
    {
      const reversed = Buffer.from(buf);
      reversed.reverse();
      const hex = reversed.toString("hex");
      if (hex.length === 0) {
        return BigInt(0);
      }
      return BigInt(`0x${hex}`);
    }
  }
  var toBigIntLE_1 = browser.toBigIntLE = toBigIntLE;
  function toBigIntBE(buf) {
    {
      const hex = buf.toString("hex");
      if (hex.length === 0) {
        return BigInt(0);
      }
      return BigInt(`0x${hex}`);
    }
  }
  browser.toBigIntBE = toBigIntBE;
  function toBufferLE(num, width) {
    {
      const hex = num.toString(16);
      const buffer2 = Buffer.from(hex.padStart(width * 2, "0").slice(0, width * 2), "hex");
      buffer2.reverse();
      return buffer2;
    }
  }
  var toBufferLE_1 = browser.toBufferLE = toBufferLE;
  function toBufferBE(num, width) {
    {
      const hex = num.toString(16);
      return Buffer.from(hex.padStart(width * 2, "0").slice(0, width * 2), "hex");
    }
  }
  browser.toBufferBE = toBufferBE;
  class StructError extends TypeError {
    constructor(failure, failures) {
      let cached;
      const {
        message,
        ...rest
      } = failure;
      const {
        path
      } = failure;
      const msg = path.length === 0 ? message : "At path: " + path.join(".") + " -- " + message;
      super(msg);
      Object.assign(this, rest);
      this.name = this.constructor.name;
      this.failures = () => {
        var _cached;
        return (_cached = cached) != null ? _cached : cached = [failure, ...failures()];
      };
    }
  }
  function isIterable(x) {
    return isObject(x) && typeof x[Symbol.iterator] === "function";
  }
  function isObject(x) {
    return typeof x === "object" && x != null;
  }
  function print(value) {
    return typeof value === "string" ? JSON.stringify(value) : "" + value;
  }
  function shiftIterator(input) {
    const {
      done,
      value
    } = input.next();
    return done ? void 0 : value;
  }
  function toFailure(result, context, struct2, value) {
    if (result === true) {
      return;
    } else if (result === false) {
      result = {};
    } else if (typeof result === "string") {
      result = {
        message: result
      };
    }
    const {
      path,
      branch
    } = context;
    const {
      type: type2
    } = struct2;
    const {
      refinement,
      message = "Expected a value of type `" + type2 + "`" + (refinement ? " with refinement `" + refinement + "`" : "") + ", but received: `" + print(value) + "`"
    } = result;
    return {
      value,
      type: type2,
      refinement,
      key: path[path.length - 1],
      path,
      branch,
      ...result,
      message
    };
  }
  function* toFailures(result, context, struct2, value) {
    if (!isIterable(result)) {
      result = [result];
    }
    for (const r2 of result) {
      const failure = toFailure(r2, context, struct2, value);
      if (failure) {
        yield failure;
      }
    }
  }
  function* run(value, struct2, options = {}) {
    const {
      path = [],
      branch = [value],
      coerce: coerce2 = false,
      mask: mask2 = false
    } = options;
    const ctx = {
      path,
      branch
    };
    if (coerce2) {
      value = struct2.coercer(value, ctx);
      if (mask2 && struct2.type !== "type" && isObject(struct2.schema) && isObject(value) && !Array.isArray(value)) {
        for (const key in value) {
          if (struct2.schema[key] === void 0) {
            delete value[key];
          }
        }
      }
    }
    let valid = true;
    for (const failure of struct2.validator(value, ctx)) {
      valid = false;
      yield [failure, void 0];
    }
    for (let [k, v2, s2] of struct2.entries(value, ctx)) {
      const ts2 = run(v2, s2, {
        path: k === void 0 ? path : [...path, k],
        branch: k === void 0 ? branch : [...branch, v2],
        coerce: coerce2,
        mask: mask2
      });
      for (const t2 of ts2) {
        if (t2[0]) {
          valid = false;
          yield [t2[0], void 0];
        } else if (coerce2) {
          v2 = t2[1];
          if (k === void 0) {
            value = v2;
          } else if (value instanceof Map) {
            value.set(k, v2);
          } else if (value instanceof Set) {
            value.add(v2);
          } else if (isObject(value)) {
            value[k] = v2;
          }
        }
      }
    }
    if (valid) {
      for (const failure of struct2.refiner(value, ctx)) {
        valid = false;
        yield [failure, void 0];
      }
    }
    if (valid) {
      yield [void 0, value];
    }
  }
  let Struct$1 = class Struct {
    constructor(props) {
      const {
        type: type2,
        schema,
        validator,
        refiner,
        coercer = (value) => value,
        entries = function* () {
        }
      } = props;
      this.type = type2;
      this.schema = schema;
      this.entries = entries;
      this.coercer = coercer;
      if (validator) {
        this.validator = (value, context) => {
          const result = validator(value, context);
          return toFailures(result, context, this, value);
        };
      } else {
        this.validator = () => [];
      }
      if (refiner) {
        this.refiner = (value, context) => {
          const result = refiner(value, context);
          return toFailures(result, context, this, value);
        };
      } else {
        this.refiner = () => [];
      }
    }
    /**
     * Assert that a value passes the struct's validation, throwing if it doesn't.
     */
    assert(value) {
      return assert(value, this);
    }
    /**
     * Create a value with the struct's coercion logic, then validate it.
     */
    create(value) {
      return create(value, this);
    }
    /**
     * Check if a value passes the struct's validation.
     */
    is(value) {
      return is(value, this);
    }
    /**
     * Mask a value, coercing and validating it, but returning only the subset of
     * properties defined by the struct's schema.
     */
    mask(value) {
      return mask(value, this);
    }
    /**
     * Validate a value with the struct's validation logic, returning a tuple
     * representing the result.
     *
     * You may optionally pass `true` for the `withCoercion` argument to coerce
     * the value before attempting to validate it. If you do, the result will
     * contain the coerced result when successful.
     */
    validate(value, options = {}) {
      return validate$1(value, this, options);
    }
  };
  function assert(value, struct2) {
    const result = validate$1(value, struct2);
    if (result[0]) {
      throw result[0];
    }
  }
  function create(value, struct2) {
    const result = validate$1(value, struct2, {
      coerce: true
    });
    if (result[0]) {
      throw result[0];
    } else {
      return result[1];
    }
  }
  function mask(value, struct2) {
    const result = validate$1(value, struct2, {
      coerce: true,
      mask: true
    });
    if (result[0]) {
      throw result[0];
    } else {
      return result[1];
    }
  }
  function is(value, struct2) {
    const result = validate$1(value, struct2);
    return !result[0];
  }
  function validate$1(value, struct2, options = {}) {
    const tuples = run(value, struct2, options);
    const tuple2 = shiftIterator(tuples);
    if (tuple2[0]) {
      const error = new StructError(tuple2[0], function* () {
        for (const t2 of tuples) {
          if (t2[0]) {
            yield t2[0];
          }
        }
      });
      return [error, void 0];
    } else {
      const v2 = tuple2[1];
      return [void 0, v2];
    }
  }
  function define(name, validator) {
    return new Struct$1({
      type: name,
      schema: null,
      validator
    });
  }
  function any() {
    return define("any", () => true);
  }
  function array(Element) {
    return new Struct$1({
      type: "array",
      schema: Element,
      *entries(value) {
        if (Element && Array.isArray(value)) {
          for (const [i2, v2] of value.entries()) {
            yield [i2, v2, Element];
          }
        }
      },
      coercer(value) {
        return Array.isArray(value) ? value.slice() : value;
      },
      validator(value) {
        return Array.isArray(value) || "Expected an array value, but received: " + print(value);
      }
    });
  }
  function boolean() {
    return define("boolean", (value) => {
      return typeof value === "boolean";
    });
  }
  function instance(Class) {
    return define("instance", (value) => {
      return value instanceof Class || "Expected a `" + Class.name + "` instance, but received: " + print(value);
    });
  }
  function literal(constant) {
    const description = print(constant);
    const t2 = typeof constant;
    return new Struct$1({
      type: "literal",
      schema: t2 === "string" || t2 === "number" || t2 === "boolean" ? constant : null,
      validator(value) {
        return value === constant || "Expected the literal `" + description + "`, but received: " + print(value);
      }
    });
  }
  function never() {
    return define("never", () => false);
  }
  function nullable(struct2) {
    return new Struct$1({
      ...struct2,
      validator: (value, ctx) => value === null || struct2.validator(value, ctx),
      refiner: (value, ctx) => value === null || struct2.refiner(value, ctx)
    });
  }
  function number() {
    return define("number", (value) => {
      return typeof value === "number" && !isNaN(value) || "Expected a number, but received: " + print(value);
    });
  }
  function optional(struct2) {
    return new Struct$1({
      ...struct2,
      validator: (value, ctx) => value === void 0 || struct2.validator(value, ctx),
      refiner: (value, ctx) => value === void 0 || struct2.refiner(value, ctx)
    });
  }
  function record(Key, Value) {
    return new Struct$1({
      type: "record",
      schema: null,
      *entries(value) {
        if (isObject(value)) {
          for (const k in value) {
            const v2 = value[k];
            yield [k, k, Key];
            yield [k, v2, Value];
          }
        }
      },
      validator(value) {
        return isObject(value) || "Expected an object, but received: " + print(value);
      }
    });
  }
  function string() {
    return define("string", (value) => {
      return typeof value === "string" || "Expected a string, but received: " + print(value);
    });
  }
  function tuple(Elements) {
    const Never = never();
    return new Struct$1({
      type: "tuple",
      schema: null,
      *entries(value) {
        if (Array.isArray(value)) {
          const length = Math.max(Elements.length, value.length);
          for (let i2 = 0; i2 < length; i2++) {
            yield [i2, value[i2], Elements[i2] || Never];
          }
        }
      },
      validator(value) {
        return Array.isArray(value) || "Expected an array, but received: " + print(value);
      }
    });
  }
  function type(schema) {
    const keys = Object.keys(schema);
    return new Struct$1({
      type: "type",
      schema,
      *entries(value) {
        if (isObject(value)) {
          for (const k of keys) {
            yield [k, value[k], schema[k]];
          }
        }
      },
      validator(value) {
        return isObject(value) || "Expected an object, but received: " + print(value);
      }
    });
  }
  function union(Structs) {
    const description = Structs.map((s2) => s2.type).join(" | ");
    return new Struct$1({
      type: "union",
      schema: null,
      validator(value, ctx) {
        const failures = [];
        for (const S2 of Structs) {
          const [...tuples] = run(value, S2, ctx);
          const [first] = tuples;
          if (!first[0]) {
            return [];
          } else {
            for (const [failure] of tuples) {
              if (failure) {
                failures.push(failure);
              }
            }
          }
        }
        return ["Expected the value to satisfy a union of `" + description + "`, but received: " + print(value), ...failures];
      }
    });
  }
  function unknown() {
    return define("unknown", () => true);
  }
  function coerce(struct2, condition, coercer) {
    return new Struct$1({
      ...struct2,
      coercer: (value, ctx) => {
        return is(value, condition) ? struct2.coercer(coercer(value, ctx), ctx) : struct2.coercer(value, ctx);
      }
    });
  }
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof $inject_window_crypto !== "undefined" && $inject_window_crypto.getRandomValues && $inject_window_crypto.getRandomValues.bind($inject_window_crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }
  const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  function validate(uuid2) {
    return typeof uuid2 === "string" && REGEX.test(uuid2);
  }
  var byteToHex = [];
  for (var i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).substr(1));
  }
  function stringify(arr) {
    var offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid2 = (byteToHex[arr[offset2 + 0]] + byteToHex[arr[offset2 + 1]] + byteToHex[arr[offset2 + 2]] + byteToHex[arr[offset2 + 3]] + "-" + byteToHex[arr[offset2 + 4]] + byteToHex[arr[offset2 + 5]] + "-" + byteToHex[arr[offset2 + 6]] + byteToHex[arr[offset2 + 7]] + "-" + byteToHex[arr[offset2 + 8]] + byteToHex[arr[offset2 + 9]] + "-" + byteToHex[arr[offset2 + 10]] + byteToHex[arr[offset2 + 11]] + byteToHex[arr[offset2 + 12]] + byteToHex[arr[offset2 + 13]] + byteToHex[arr[offset2 + 14]] + byteToHex[arr[offset2 + 15]]).toLowerCase();
    if (!validate(uuid2)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid2;
  }
  var _nodeId;
  var _clockseq;
  var _lastMSecs = 0;
  var _lastNSecs = 0;
  function v1(options, buf, offset2) {
    var i2 = buf && offset2 || 0;
    var b2 = buf || new Array(16);
    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
    if (node == null || clockseq == null) {
      var seedBytes = options.random || (options.rng || rng)();
      if (node == null) {
        node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
      }
      if (clockseq == null) {
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
      }
    }
    var msecs = options.msecs !== void 0 ? options.msecs : Date.now();
    var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
    var dt2 = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
    if (dt2 < 0 && options.clockseq === void 0) {
      clockseq = clockseq + 1 & 16383;
    }
    if ((dt2 < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
      nsecs = 0;
    }
    if (nsecs >= 1e4) {
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    msecs += 122192928e5;
    var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
    b2[i2++] = tl >>> 24 & 255;
    b2[i2++] = tl >>> 16 & 255;
    b2[i2++] = tl >>> 8 & 255;
    b2[i2++] = tl & 255;
    var tmh = msecs / 4294967296 * 1e4 & 268435455;
    b2[i2++] = tmh >>> 8 & 255;
    b2[i2++] = tmh & 255;
    b2[i2++] = tmh >>> 24 & 15 | 16;
    b2[i2++] = tmh >>> 16 & 255;
    b2[i2++] = clockseq >>> 8 | 128;
    b2[i2++] = clockseq & 255;
    for (var n2 = 0; n2 < 6; ++n2) {
      b2[i2 + n2] = node[n2];
    }
    return buf || stringify(b2);
  }
  function parse(uuid2) {
    if (!validate(uuid2)) {
      throw TypeError("Invalid UUID");
    }
    var v2;
    var arr = new Uint8Array(16);
    arr[0] = (v2 = parseInt(uuid2.slice(0, 8), 16)) >>> 24;
    arr[1] = v2 >>> 16 & 255;
    arr[2] = v2 >>> 8 & 255;
    arr[3] = v2 & 255;
    arr[4] = (v2 = parseInt(uuid2.slice(9, 13), 16)) >>> 8;
    arr[5] = v2 & 255;
    arr[6] = (v2 = parseInt(uuid2.slice(14, 18), 16)) >>> 8;
    arr[7] = v2 & 255;
    arr[8] = (v2 = parseInt(uuid2.slice(19, 23), 16)) >>> 8;
    arr[9] = v2 & 255;
    arr[10] = (v2 = parseInt(uuid2.slice(24, 36), 16)) / 1099511627776 & 255;
    arr[11] = v2 / 4294967296 & 255;
    arr[12] = v2 >>> 24 & 255;
    arr[13] = v2 >>> 16 & 255;
    arr[14] = v2 >>> 8 & 255;
    arr[15] = v2 & 255;
    return arr;
  }
  function stringToBytes(str) {
    str = unescape(encodeURIComponent(str));
    var bytes2 = [];
    for (var i2 = 0; i2 < str.length; ++i2) {
      bytes2.push(str.charCodeAt(i2));
    }
    return bytes2;
  }
  var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  function v35(name, version2, hashfunc) {
    function generateUUID(value, namespace, buf, offset2) {
      if (typeof value === "string") {
        value = stringToBytes(value);
      }
      if (typeof namespace === "string") {
        namespace = parse(namespace);
      }
      if (namespace.length !== 16) {
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      }
      var bytes2 = new Uint8Array(16 + value.length);
      bytes2.set(namespace);
      bytes2.set(value, namespace.length);
      bytes2 = hashfunc(bytes2);
      bytes2[6] = bytes2[6] & 15 | version2;
      bytes2[8] = bytes2[8] & 63 | 128;
      if (buf) {
        offset2 = offset2 || 0;
        for (var i2 = 0; i2 < 16; ++i2) {
          buf[offset2 + i2] = bytes2[i2];
        }
        return buf;
      }
      return stringify(bytes2);
    }
    try {
      generateUUID.name = name;
    } catch (err) {
    }
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
  }
  function md5(bytes2) {
    if (typeof bytes2 === "string") {
      var msg = unescape(encodeURIComponent(bytes2));
      bytes2 = new Uint8Array(msg.length);
      for (var i2 = 0; i2 < msg.length; ++i2) {
        bytes2[i2] = msg.charCodeAt(i2);
      }
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes2), bytes2.length * 8));
  }
  function md5ToHexEncodedArray(input) {
    var output2 = [];
    var length32 = input.length * 32;
    var hexTab = "0123456789abcdef";
    for (var i2 = 0; i2 < length32; i2 += 8) {
      var x = input[i2 >> 5] >>> i2 % 32 & 255;
      var hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
      output2.push(hex);
    }
    return output2;
  }
  function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
  }
  function wordsToMd5(x, len2) {
    x[len2 >> 5] |= 128 << len2 % 32;
    x[getOutputLength(len2) - 1] = len2;
    var a2 = 1732584193;
    var b2 = -271733879;
    var c2 = -1732584194;
    var d2 = 271733878;
    for (var i2 = 0; i2 < x.length; i2 += 16) {
      var olda = a2;
      var oldb = b2;
      var oldc = c2;
      var oldd = d2;
      a2 = md5ff(a2, b2, c2, d2, x[i2], 7, -680876936);
      d2 = md5ff(d2, a2, b2, c2, x[i2 + 1], 12, -389564586);
      c2 = md5ff(c2, d2, a2, b2, x[i2 + 2], 17, 606105819);
      b2 = md5ff(b2, c2, d2, a2, x[i2 + 3], 22, -1044525330);
      a2 = md5ff(a2, b2, c2, d2, x[i2 + 4], 7, -176418897);
      d2 = md5ff(d2, a2, b2, c2, x[i2 + 5], 12, 1200080426);
      c2 = md5ff(c2, d2, a2, b2, x[i2 + 6], 17, -1473231341);
      b2 = md5ff(b2, c2, d2, a2, x[i2 + 7], 22, -45705983);
      a2 = md5ff(a2, b2, c2, d2, x[i2 + 8], 7, 1770035416);
      d2 = md5ff(d2, a2, b2, c2, x[i2 + 9], 12, -1958414417);
      c2 = md5ff(c2, d2, a2, b2, x[i2 + 10], 17, -42063);
      b2 = md5ff(b2, c2, d2, a2, x[i2 + 11], 22, -1990404162);
      a2 = md5ff(a2, b2, c2, d2, x[i2 + 12], 7, 1804603682);
      d2 = md5ff(d2, a2, b2, c2, x[i2 + 13], 12, -40341101);
      c2 = md5ff(c2, d2, a2, b2, x[i2 + 14], 17, -1502002290);
      b2 = md5ff(b2, c2, d2, a2, x[i2 + 15], 22, 1236535329);
      a2 = md5gg(a2, b2, c2, d2, x[i2 + 1], 5, -165796510);
      d2 = md5gg(d2, a2, b2, c2, x[i2 + 6], 9, -1069501632);
      c2 = md5gg(c2, d2, a2, b2, x[i2 + 11], 14, 643717713);
      b2 = md5gg(b2, c2, d2, a2, x[i2], 20, -373897302);
      a2 = md5gg(a2, b2, c2, d2, x[i2 + 5], 5, -701558691);
      d2 = md5gg(d2, a2, b2, c2, x[i2 + 10], 9, 38016083);
      c2 = md5gg(c2, d2, a2, b2, x[i2 + 15], 14, -660478335);
      b2 = md5gg(b2, c2, d2, a2, x[i2 + 4], 20, -405537848);
      a2 = md5gg(a2, b2, c2, d2, x[i2 + 9], 5, 568446438);
      d2 = md5gg(d2, a2, b2, c2, x[i2 + 14], 9, -1019803690);
      c2 = md5gg(c2, d2, a2, b2, x[i2 + 3], 14, -187363961);
      b2 = md5gg(b2, c2, d2, a2, x[i2 + 8], 20, 1163531501);
      a2 = md5gg(a2, b2, c2, d2, x[i2 + 13], 5, -1444681467);
      d2 = md5gg(d2, a2, b2, c2, x[i2 + 2], 9, -51403784);
      c2 = md5gg(c2, d2, a2, b2, x[i2 + 7], 14, 1735328473);
      b2 = md5gg(b2, c2, d2, a2, x[i2 + 12], 20, -1926607734);
      a2 = md5hh(a2, b2, c2, d2, x[i2 + 5], 4, -378558);
      d2 = md5hh(d2, a2, b2, c2, x[i2 + 8], 11, -2022574463);
      c2 = md5hh(c2, d2, a2, b2, x[i2 + 11], 16, 1839030562);
      b2 = md5hh(b2, c2, d2, a2, x[i2 + 14], 23, -35309556);
      a2 = md5hh(a2, b2, c2, d2, x[i2 + 1], 4, -1530992060);
      d2 = md5hh(d2, a2, b2, c2, x[i2 + 4], 11, 1272893353);
      c2 = md5hh(c2, d2, a2, b2, x[i2 + 7], 16, -155497632);
      b2 = md5hh(b2, c2, d2, a2, x[i2 + 10], 23, -1094730640);
      a2 = md5hh(a2, b2, c2, d2, x[i2 + 13], 4, 681279174);
      d2 = md5hh(d2, a2, b2, c2, x[i2], 11, -358537222);
      c2 = md5hh(c2, d2, a2, b2, x[i2 + 3], 16, -722521979);
      b2 = md5hh(b2, c2, d2, a2, x[i2 + 6], 23, 76029189);
      a2 = md5hh(a2, b2, c2, d2, x[i2 + 9], 4, -640364487);
      d2 = md5hh(d2, a2, b2, c2, x[i2 + 12], 11, -421815835);
      c2 = md5hh(c2, d2, a2, b2, x[i2 + 15], 16, 530742520);
      b2 = md5hh(b2, c2, d2, a2, x[i2 + 2], 23, -995338651);
      a2 = md5ii(a2, b2, c2, d2, x[i2], 6, -198630844);
      d2 = md5ii(d2, a2, b2, c2, x[i2 + 7], 10, 1126891415);
      c2 = md5ii(c2, d2, a2, b2, x[i2 + 14], 15, -1416354905);
      b2 = md5ii(b2, c2, d2, a2, x[i2 + 5], 21, -57434055);
      a2 = md5ii(a2, b2, c2, d2, x[i2 + 12], 6, 1700485571);
      d2 = md5ii(d2, a2, b2, c2, x[i2 + 3], 10, -1894986606);
      c2 = md5ii(c2, d2, a2, b2, x[i2 + 10], 15, -1051523);
      b2 = md5ii(b2, c2, d2, a2, x[i2 + 1], 21, -2054922799);
      a2 = md5ii(a2, b2, c2, d2, x[i2 + 8], 6, 1873313359);
      d2 = md5ii(d2, a2, b2, c2, x[i2 + 15], 10, -30611744);
      c2 = md5ii(c2, d2, a2, b2, x[i2 + 6], 15, -1560198380);
      b2 = md5ii(b2, c2, d2, a2, x[i2 + 13], 21, 1309151649);
      a2 = md5ii(a2, b2, c2, d2, x[i2 + 4], 6, -145523070);
      d2 = md5ii(d2, a2, b2, c2, x[i2 + 11], 10, -1120210379);
      c2 = md5ii(c2, d2, a2, b2, x[i2 + 2], 15, 718787259);
      b2 = md5ii(b2, c2, d2, a2, x[i2 + 9], 21, -343485551);
      a2 = safeAdd(a2, olda);
      b2 = safeAdd(b2, oldb);
      c2 = safeAdd(c2, oldc);
      d2 = safeAdd(d2, oldd);
    }
    return [a2, b2, c2, d2];
  }
  function bytesToWords(input) {
    if (input.length === 0) {
      return [];
    }
    var length8 = input.length * 8;
    var output2 = new Uint32Array(getOutputLength(length8));
    for (var i2 = 0; i2 < length8; i2 += 8) {
      output2[i2 >> 5] |= (input[i2 / 8] & 255) << i2 % 32;
    }
    return output2;
  }
  function safeAdd(x, y2) {
    var lsw = (x & 65535) + (y2 & 65535);
    var msw = (x >> 16) + (y2 >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  }
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  function md5cmn(q2, a2, b2, x, s2, t2) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a2, q2), safeAdd(x, t2)), s2), b2);
  }
  function md5ff(a2, b2, c2, d2, x, s2, t2) {
    return md5cmn(b2 & c2 | ~b2 & d2, a2, b2, x, s2, t2);
  }
  function md5gg(a2, b2, c2, d2, x, s2, t2) {
    return md5cmn(b2 & d2 | c2 & ~d2, a2, b2, x, s2, t2);
  }
  function md5hh(a2, b2, c2, d2, x, s2, t2) {
    return md5cmn(b2 ^ c2 ^ d2, a2, b2, x, s2, t2);
  }
  function md5ii(a2, b2, c2, d2, x, s2, t2) {
    return md5cmn(c2 ^ (b2 | ~d2), a2, b2, x, s2, t2);
  }
  var v3 = v35("v3", 48, md5);
  const v3$1 = v3;
  function v4(options, buf, offset2) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset2 = offset2 || 0;
      for (var i2 = 0; i2 < 16; ++i2) {
        buf[offset2 + i2] = rnds[i2];
      }
      return buf;
    }
    return stringify(rnds);
  }
  function f(s2, x, y2, z2) {
    switch (s2) {
      case 0:
        return x & y2 ^ ~x & z2;
      case 1:
        return x ^ y2 ^ z2;
      case 2:
        return x & y2 ^ x & z2 ^ y2 & z2;
      case 3:
        return x ^ y2 ^ z2;
    }
  }
  function ROTL(x, n2) {
    return x << n2 | x >>> 32 - n2;
  }
  function sha1(bytes2) {
    var K2 = [1518500249, 1859775393, 2400959708, 3395469782];
    var H2 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof bytes2 === "string") {
      var msg = unescape(encodeURIComponent(bytes2));
      bytes2 = [];
      for (var i2 = 0; i2 < msg.length; ++i2) {
        bytes2.push(msg.charCodeAt(i2));
      }
    } else if (!Array.isArray(bytes2)) {
      bytes2 = Array.prototype.slice.call(bytes2);
    }
    bytes2.push(128);
    var l2 = bytes2.length / 4 + 2;
    var N2 = Math.ceil(l2 / 16);
    var M2 = new Array(N2);
    for (var _i = 0; _i < N2; ++_i) {
      var arr = new Uint32Array(16);
      for (var j2 = 0; j2 < 16; ++j2) {
        arr[j2] = bytes2[_i * 64 + j2 * 4] << 24 | bytes2[_i * 64 + j2 * 4 + 1] << 16 | bytes2[_i * 64 + j2 * 4 + 2] << 8 | bytes2[_i * 64 + j2 * 4 + 3];
      }
      M2[_i] = arr;
    }
    M2[N2 - 1][14] = (bytes2.length - 1) * 8 / Math.pow(2, 32);
    M2[N2 - 1][14] = Math.floor(M2[N2 - 1][14]);
    M2[N2 - 1][15] = (bytes2.length - 1) * 8 & 4294967295;
    for (var _i2 = 0; _i2 < N2; ++_i2) {
      var W2 = new Uint32Array(80);
      for (var t2 = 0; t2 < 16; ++t2) {
        W2[t2] = M2[_i2][t2];
      }
      for (var _t2 = 16; _t2 < 80; ++_t2) {
        W2[_t2] = ROTL(W2[_t2 - 3] ^ W2[_t2 - 8] ^ W2[_t2 - 14] ^ W2[_t2 - 16], 1);
      }
      var a2 = H2[0];
      var b2 = H2[1];
      var c2 = H2[2];
      var d2 = H2[3];
      var e2 = H2[4];
      for (var _t22 = 0; _t22 < 80; ++_t22) {
        var s2 = Math.floor(_t22 / 20);
        var T2 = ROTL(a2, 5) + f(s2, b2, c2, d2) + e2 + K2[s2] + W2[_t22] >>> 0;
        e2 = d2;
        d2 = c2;
        c2 = ROTL(b2, 30) >>> 0;
        b2 = a2;
        a2 = T2;
      }
      H2[0] = H2[0] + a2 >>> 0;
      H2[1] = H2[1] + b2 >>> 0;
      H2[2] = H2[2] + c2 >>> 0;
      H2[3] = H2[3] + d2 >>> 0;
      H2[4] = H2[4] + e2 >>> 0;
    }
    return [H2[0] >> 24 & 255, H2[0] >> 16 & 255, H2[0] >> 8 & 255, H2[0] & 255, H2[1] >> 24 & 255, H2[1] >> 16 & 255, H2[1] >> 8 & 255, H2[1] & 255, H2[2] >> 24 & 255, H2[2] >> 16 & 255, H2[2] >> 8 & 255, H2[2] & 255, H2[3] >> 24 & 255, H2[3] >> 16 & 255, H2[3] >> 8 & 255, H2[3] & 255, H2[4] >> 24 & 255, H2[4] >> 16 & 255, H2[4] >> 8 & 255, H2[4] & 255];
  }
  var v5 = v35("v5", 80, sha1);
  const v5$1 = v5;
  const nil = "00000000-0000-0000-0000-000000000000";
  function version(uuid2) {
    if (!validate(uuid2)) {
      throw TypeError("Invalid UUID");
    }
    return parseInt(uuid2.substr(14, 1), 16);
  }
  const esmBrowser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    NIL: nil,
    parse,
    stringify,
    v1,
    v3: v3$1,
    v4,
    v5: v5$1,
    validate,
    version
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$0 = /* @__PURE__ */ getAugmentedNamespace(esmBrowser);
  const uuid$1 = require$$0.v4;
  const generateRequest$1 = function(method, params, id, options) {
    if (typeof method !== "string") {
      throw new TypeError(method + " must be a string");
    }
    options = options || {};
    const version2 = typeof options.version === "number" ? options.version : 2;
    if (version2 !== 1 && version2 !== 2) {
      throw new TypeError(version2 + " must be 1 or 2");
    }
    const request = {
      method
    };
    if (version2 === 2) {
      request.jsonrpc = "2.0";
    }
    if (params) {
      if (typeof params !== "object" && !Array.isArray(params)) {
        throw new TypeError(params + " must be an object, array or omitted");
      }
      request.params = params;
    }
    if (typeof id === "undefined") {
      const generator = typeof options.generator === "function" ? options.generator : function() {
        return uuid$1();
      };
      request.id = generator(request, options);
    } else if (version2 === 2 && id === null) {
      if (options.notificationIdNull) {
        request.id = null;
      }
    } else {
      request.id = id;
    }
    return request;
  };
  var generateRequest_1 = generateRequest$1;
  const uuid = require$$0.v4;
  const generateRequest = generateRequest_1;
  const ClientBrowser = function(callServer, options) {
    if (!(this instanceof ClientBrowser)) {
      return new ClientBrowser(callServer, options);
    }
    if (!options) {
      options = {};
    }
    this.options = {
      reviver: typeof options.reviver !== "undefined" ? options.reviver : null,
      replacer: typeof options.replacer !== "undefined" ? options.replacer : null,
      generator: typeof options.generator !== "undefined" ? options.generator : function() {
        return uuid();
      },
      version: typeof options.version !== "undefined" ? options.version : 2,
      notificationIdNull: typeof options.notificationIdNull === "boolean" ? options.notificationIdNull : false
    };
    this.callServer = callServer;
  };
  ClientBrowser.prototype.request = function(method, params, id, callback) {
    const self2 = this;
    let request = null;
    const isBatch = Array.isArray(method) && typeof params === "function";
    if (this.options.version === 1 && isBatch) {
      throw new TypeError("JSON-RPC 1.0 does not support batching");
    }
    const isRaw = !isBatch && method && typeof method === "object" && typeof params === "function";
    if (isBatch || isRaw) {
      callback = params;
      request = method;
    } else {
      if (typeof id === "function") {
        callback = id;
        id = void 0;
      }
      const hasCallback = typeof callback === "function";
      try {
        request = generateRequest(method, params, id, {
          generator: this.options.generator,
          version: this.options.version,
          notificationIdNull: this.options.notificationIdNull
        });
      } catch (err) {
        if (hasCallback) {
          return callback(err);
        }
        throw err;
      }
      if (!hasCallback) {
        return request;
      }
    }
    let message;
    try {
      message = JSON.stringify(request, this.options.replacer);
    } catch (err) {
      return callback(err);
    }
    this.callServer(message, function(err, response) {
      self2._parseResponse(err, response, callback);
    });
    return request;
  };
  ClientBrowser.prototype._parseResponse = function(err, responseText, callback) {
    if (err) {
      callback(err);
      return;
    }
    if (!responseText) {
      return callback();
    }
    let response;
    try {
      response = JSON.parse(responseText, this.options.reviver);
    } catch (err2) {
      return callback(err2);
    }
    if (callback.length === 3) {
      if (Array.isArray(response)) {
        const isError = function(res) {
          return typeof res.error !== "undefined";
        };
        const isNotError = function(res) {
          return !isError(res);
        };
        return callback(null, response.filter(isError), response.filter(isNotError));
      } else {
        return callback(null, response.error, response.result);
      }
    }
    callback(null, response);
  };
  var client = {};
  var interopRequireDefault = { exports: {} };
  (function(module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(interopRequireDefault);
  var interopRequireDefaultExports = interopRequireDefault.exports;
  var regeneratorRuntime$1 = { exports: {} };
  var _typeof = { exports: {} };
  var hasRequired_typeof;
  function require_typeof() {
    if (hasRequired_typeof)
      return _typeof.exports;
    hasRequired_typeof = 1;
    (function(module) {
      function _typeof2(o2) {
        "@babel/helpers - typeof";
        return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
          return typeof o3;
        } : function(o3) {
          return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o2);
      }
      module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(_typeof);
    return _typeof.exports;
  }
  var hasRequiredRegeneratorRuntime;
  function requireRegeneratorRuntime() {
    if (hasRequiredRegeneratorRuntime)
      return regeneratorRuntime$1.exports;
    hasRequiredRegeneratorRuntime = 1;
    (function(module) {
      var _typeof2 = require_typeof()["default"];
      function _regeneratorRuntime() {
        module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
          return e2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        var t2, e2 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o2 = Object.defineProperty || function(t3, e3, r3) {
          t3[e3] = r3.value;
        }, i2 = "function" == typeof Symbol ? Symbol : {}, a2 = i2.iterator || "@@iterator", c2 = i2.asyncIterator || "@@asyncIterator", u2 = i2.toStringTag || "@@toStringTag";
        function define2(t3, e3, r3) {
          return Object.defineProperty(t3, e3, {
            value: r3,
            enumerable: true,
            configurable: true,
            writable: true
          }), t3[e3];
        }
        try {
          define2({}, "");
        } catch (t3) {
          define2 = function define3(t4, e3, r3) {
            return t4[e3] = r3;
          };
        }
        function wrap(t3, e3, r3, n3) {
          var i3 = e3 && e3.prototype instanceof Generator ? e3 : Generator, a3 = Object.create(i3.prototype), c3 = new Context(n3 || []);
          return o2(a3, "_invoke", {
            value: makeInvokeMethod(t3, r3, c3)
          }), a3;
        }
        function tryCatch(t3, e3, r3) {
          try {
            return {
              type: "normal",
              arg: t3.call(e3, r3)
            };
          } catch (t4) {
            return {
              type: "throw",
              arg: t4
            };
          }
        }
        e2.wrap = wrap;
        var h2 = "suspendedStart", l2 = "suspendedYield", f2 = "executing", s2 = "completed", y2 = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        var p2 = {};
        define2(p2, a2, function() {
          return this;
        });
        var d2 = Object.getPrototypeOf, v2 = d2 && d2(d2(values([])));
        v2 && v2 !== r2 && n2.call(v2, a2) && (p2 = v2);
        var g2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p2);
        function defineIteratorMethods(t3) {
          ["next", "throw", "return"].forEach(function(e3) {
            define2(t3, e3, function(t4) {
              return this._invoke(e3, t4);
            });
          });
        }
        function AsyncIterator(t3, e3) {
          function invoke(r4, o3, i3, a3) {
            var c3 = tryCatch(t3[r4], t3, o3);
            if ("throw" !== c3.type) {
              var u3 = c3.arg, h3 = u3.value;
              return h3 && "object" == _typeof2(h3) && n2.call(h3, "__await") ? e3.resolve(h3.__await).then(function(t4) {
                invoke("next", t4, i3, a3);
              }, function(t4) {
                invoke("throw", t4, i3, a3);
              }) : e3.resolve(h3).then(function(t4) {
                u3.value = t4, i3(u3);
              }, function(t4) {
                return invoke("throw", t4, i3, a3);
              });
            }
            a3(c3.arg);
          }
          var r3;
          o2(this, "_invoke", {
            value: function value(t4, n3) {
              function callInvokeWithMethodAndArg() {
                return new e3(function(e4, r4) {
                  invoke(t4, n3, e4, r4);
                });
              }
              return r3 = r3 ? r3.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e3, r3, n3) {
          var o3 = h2;
          return function(i3, a3) {
            if (o3 === f2)
              throw Error("Generator is already running");
            if (o3 === s2) {
              if ("throw" === i3)
                throw a3;
              return {
                value: t2,
                done: true
              };
            }
            for (n3.method = i3, n3.arg = a3; ; ) {
              var c3 = n3.delegate;
              if (c3) {
                var u3 = maybeInvokeDelegate(c3, n3);
                if (u3) {
                  if (u3 === y2)
                    continue;
                  return u3;
                }
              }
              if ("next" === n3.method)
                n3.sent = n3._sent = n3.arg;
              else if ("throw" === n3.method) {
                if (o3 === h2)
                  throw o3 = s2, n3.arg;
                n3.dispatchException(n3.arg);
              } else
                "return" === n3.method && n3.abrupt("return", n3.arg);
              o3 = f2;
              var p3 = tryCatch(e3, r3, n3);
              if ("normal" === p3.type) {
                if (o3 = n3.done ? s2 : l2, p3.arg === y2)
                  continue;
                return {
                  value: p3.arg,
                  done: n3.done
                };
              }
              "throw" === p3.type && (o3 = s2, n3.method = "throw", n3.arg = p3.arg);
            }
          };
        }
        function maybeInvokeDelegate(e3, r3) {
          var n3 = r3.method, o3 = e3.iterator[n3];
          if (o3 === t2)
            return r3.delegate = null, "throw" === n3 && e3.iterator["return"] && (r3.method = "return", r3.arg = t2, maybeInvokeDelegate(e3, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y2;
          var i3 = tryCatch(o3, e3.iterator, r3.arg);
          if ("throw" === i3.type)
            return r3.method = "throw", r3.arg = i3.arg, r3.delegate = null, y2;
          var a3 = i3.arg;
          return a3 ? a3.done ? (r3[e3.resultName] = a3.value, r3.next = e3.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t2), r3.delegate = null, y2) : a3 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y2);
        }
        function pushTryEntry(t3) {
          var e3 = {
            tryLoc: t3[0]
          };
          1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
        }
        function resetTryEntry(t3) {
          var e3 = t3.completion || {};
          e3.type = "normal", delete e3.arg, t3.completion = e3;
        }
        function Context(t3) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t3.forEach(pushTryEntry, this), this.reset(true);
        }
        function values(e3) {
          if (e3 || "" === e3) {
            var r3 = e3[a2];
            if (r3)
              return r3.call(e3);
            if ("function" == typeof e3.next)
              return e3;
            if (!isNaN(e3.length)) {
              var o3 = -1, i3 = function next() {
                for (; ++o3 < e3.length; )
                  if (n2.call(e3, o3))
                    return next.value = e3[o3], next.done = false, next;
                return next.value = t2, next.done = true, next;
              };
              return i3.next = i3;
            }
          }
          throw new TypeError(_typeof2(e3) + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o2(g2, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: true
        }), o2(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: true
        }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u2, "GeneratorFunction"), e2.isGeneratorFunction = function(t3) {
          var e3 = "function" == typeof t3 && t3.constructor;
          return !!e3 && (e3 === GeneratorFunction || "GeneratorFunction" === (e3.displayName || e3.name));
        }, e2.mark = function(t3) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t3, GeneratorFunctionPrototype) : (t3.__proto__ = GeneratorFunctionPrototype, define2(t3, u2, "GeneratorFunction")), t3.prototype = Object.create(g2), t3;
        }, e2.awrap = function(t3) {
          return {
            __await: t3
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c2, function() {
          return this;
        }), e2.AsyncIterator = AsyncIterator, e2.async = function(t3, r3, n3, o3, i3) {
          void 0 === i3 && (i3 = Promise);
          var a3 = new AsyncIterator(wrap(t3, r3, n3, o3), i3);
          return e2.isGeneratorFunction(r3) ? a3 : a3.next().then(function(t4) {
            return t4.done ? t4.value : a3.next();
          });
        }, defineIteratorMethods(g2), define2(g2, u2, "Generator"), define2(g2, a2, function() {
          return this;
        }), define2(g2, "toString", function() {
          return "[object Generator]";
        }), e2.keys = function(t3) {
          var e3 = Object(t3), r3 = [];
          for (var n3 in e3)
            r3.push(n3);
          return r3.reverse(), function next() {
            for (; r3.length; ) {
              var t4 = r3.pop();
              if (t4 in e3)
                return next.value = t4, next.done = false, next;
            }
            return next.done = true, next;
          };
        }, e2.values = values, Context.prototype = {
          constructor: Context,
          reset: function reset(e3) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(resetTryEntry), !e3)
              for (var r3 in this)
                "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t2);
          },
          stop: function stop() {
            this.done = true;
            var t3 = this.tryEntries[0].completion;
            if ("throw" === t3.type)
              throw t3.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(e3) {
            if (this.done)
              throw e3;
            var r3 = this;
            function handle(n3, o4) {
              return a3.type = "throw", a3.arg = e3, r3.next = n3, o4 && (r3.method = "next", r3.arg = t2), !!o4;
            }
            for (var o3 = this.tryEntries.length - 1; o3 >= 0; --o3) {
              var i3 = this.tryEntries[o3], a3 = i3.completion;
              if ("root" === i3.tryLoc)
                return handle("end");
              if (i3.tryLoc <= this.prev) {
                var c3 = n2.call(i3, "catchLoc"), u3 = n2.call(i3, "finallyLoc");
                if (c3 && u3) {
                  if (this.prev < i3.catchLoc)
                    return handle(i3.catchLoc, true);
                  if (this.prev < i3.finallyLoc)
                    return handle(i3.finallyLoc);
                } else if (c3) {
                  if (this.prev < i3.catchLoc)
                    return handle(i3.catchLoc, true);
                } else {
                  if (!u3)
                    throw Error("try statement without catch or finally");
                  if (this.prev < i3.finallyLoc)
                    return handle(i3.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(t3, e3) {
            for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
              var o3 = this.tryEntries[r3];
              if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
                var i3 = o3;
                break;
              }
            }
            i3 && ("break" === t3 || "continue" === t3) && i3.tryLoc <= e3 && e3 <= i3.finallyLoc && (i3 = null);
            var a3 = i3 ? i3.completion : {};
            return a3.type = t3, a3.arg = e3, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
          },
          complete: function complete(t3, e3) {
            if ("throw" === t3.type)
              throw t3.arg;
            return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), y2;
          },
          finish: function finish(t3) {
            for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
              var r3 = this.tryEntries[e3];
              if (r3.finallyLoc === t3)
                return this.complete(r3.completion, r3.afterLoc), resetTryEntry(r3), y2;
            }
          },
          "catch": function _catch(t3) {
            for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
              var r3 = this.tryEntries[e3];
              if (r3.tryLoc === t3) {
                var n3 = r3.completion;
                if ("throw" === n3.type) {
                  var o3 = n3.arg;
                  resetTryEntry(r3);
                }
                return o3;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(e3, r3, n3) {
            return this.delegate = {
              iterator: values(e3),
              resultName: r3,
              nextLoc: n3
            }, "next" === this.method && (this.arg = t2), y2;
          }
        }, e2;
      }
      module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(regeneratorRuntime$1);
    return regeneratorRuntime$1.exports;
  }
  var regenerator;
  var hasRequiredRegenerator;
  function requireRegenerator() {
    if (hasRequiredRegenerator)
      return regenerator;
    hasRequiredRegenerator = 1;
    var runtime = requireRegeneratorRuntime()();
    regenerator = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
    return regenerator;
  }
  var asyncToGenerator = { exports: {} };
  var hasRequiredAsyncToGenerator;
  function requireAsyncToGenerator() {
    if (hasRequiredAsyncToGenerator)
      return asyncToGenerator.exports;
    hasRequiredAsyncToGenerator = 1;
    (function(module) {
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self2 = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self2, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(asyncToGenerator);
    return asyncToGenerator.exports;
  }
  var classCallCheck = { exports: {} };
  var hasRequiredClassCallCheck;
  function requireClassCallCheck() {
    if (hasRequiredClassCallCheck)
      return classCallCheck.exports;
    hasRequiredClassCallCheck = 1;
    (function(module) {
      function _classCallCheck(instance2, Constructor) {
        if (!(instance2 instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(classCallCheck);
    return classCallCheck.exports;
  }
  var createClass = { exports: {} };
  var toPropertyKey = { exports: {} };
  var toPrimitive = { exports: {} };
  var hasRequiredToPrimitive;
  function requireToPrimitive() {
    if (hasRequiredToPrimitive)
      return toPrimitive.exports;
    hasRequiredToPrimitive = 1;
    (function(module) {
      var _typeof2 = require_typeof()["default"];
      function toPrimitive2(t2, r2) {
        if ("object" != _typeof2(t2) || !t2)
          return t2;
        var e2 = t2[Symbol.toPrimitive];
        if (void 0 !== e2) {
          var i2 = e2.call(t2, r2 || "default");
          if ("object" != _typeof2(i2))
            return i2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r2 ? String : Number)(t2);
      }
      module.exports = toPrimitive2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(toPrimitive);
    return toPrimitive.exports;
  }
  var hasRequiredToPropertyKey;
  function requireToPropertyKey() {
    if (hasRequiredToPropertyKey)
      return toPropertyKey.exports;
    hasRequiredToPropertyKey = 1;
    (function(module) {
      var _typeof2 = require_typeof()["default"];
      var toPrimitive2 = requireToPrimitive();
      function toPropertyKey2(t2) {
        var i2 = toPrimitive2(t2, "string");
        return "symbol" == _typeof2(i2) ? i2 : i2 + "";
      }
      module.exports = toPropertyKey2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(toPropertyKey);
    return toPropertyKey.exports;
  }
  var hasRequiredCreateClass;
  function requireCreateClass() {
    if (hasRequiredCreateClass)
      return createClass.exports;
    hasRequiredCreateClass = 1;
    (function(module) {
      var toPropertyKey2 = requireToPropertyKey();
      function _defineProperties(target, props) {
        for (var i2 = 0; i2 < props.length; i2++) {
          var descriptor = props[i2];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, toPropertyKey2(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(createClass);
    return createClass.exports;
  }
  var possibleConstructorReturn = { exports: {} };
  var assertThisInitialized = { exports: {} };
  var hasRequiredAssertThisInitialized;
  function requireAssertThisInitialized() {
    if (hasRequiredAssertThisInitialized)
      return assertThisInitialized.exports;
    hasRequiredAssertThisInitialized = 1;
    (function(module) {
      function _assertThisInitialized(self2) {
        if (self2 === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self2;
      }
      module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(assertThisInitialized);
    return assertThisInitialized.exports;
  }
  var hasRequiredPossibleConstructorReturn;
  function requirePossibleConstructorReturn() {
    if (hasRequiredPossibleConstructorReturn)
      return possibleConstructorReturn.exports;
    hasRequiredPossibleConstructorReturn = 1;
    (function(module) {
      var _typeof2 = require_typeof()["default"];
      var assertThisInitialized2 = requireAssertThisInitialized();
      function _possibleConstructorReturn(self2, call) {
        if (call && (_typeof2(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return assertThisInitialized2(self2);
      }
      module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(possibleConstructorReturn);
    return possibleConstructorReturn.exports;
  }
  var getPrototypeOf = { exports: {} };
  var hasRequiredGetPrototypeOf;
  function requireGetPrototypeOf() {
    if (hasRequiredGetPrototypeOf)
      return getPrototypeOf.exports;
    hasRequiredGetPrototypeOf = 1;
    (function(module) {
      function _getPrototypeOf(o2) {
        module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
          return o3.__proto__ || Object.getPrototypeOf(o3);
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        return _getPrototypeOf(o2);
      }
      module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(getPrototypeOf);
    return getPrototypeOf.exports;
  }
  var inherits = { exports: {} };
  var setPrototypeOf = { exports: {} };
  var hasRequiredSetPrototypeOf;
  function requireSetPrototypeOf() {
    if (hasRequiredSetPrototypeOf)
      return setPrototypeOf.exports;
    hasRequiredSetPrototypeOf = 1;
    (function(module) {
      function _setPrototypeOf(o2, p2) {
        module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
          o3.__proto__ = p3;
          return o3;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        return _setPrototypeOf(o2, p2);
      }
      module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(setPrototypeOf);
    return setPrototypeOf.exports;
  }
  var hasRequiredInherits;
  function requireInherits() {
    if (hasRequiredInherits)
      return inherits.exports;
    hasRequiredInherits = 1;
    (function(module) {
      var setPrototypeOf2 = requireSetPrototypeOf();
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(subClass, "prototype", {
          writable: false
        });
        if (superClass)
          setPrototypeOf2(subClass, superClass);
      }
      module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(inherits);
    return inherits.exports;
  }
  var eventemitter3 = { exports: {} };
  var hasRequiredEventemitter3;
  function requireEventemitter3() {
    if (hasRequiredEventemitter3)
      return eventemitter3.exports;
    hasRequiredEventemitter3 = 1;
    (function(module) {
      var has = Object.prototype.hasOwnProperty, prefix = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = /* @__PURE__ */ Object.create(null);
        if (!new Events().__proto__)
          prefix = false;
      }
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt])
          emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn)
          emitter._events[evt].push(listener);
        else
          emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0)
          emitter._events = new Events();
        else
          delete emitter._events[evt];
      }
      function EventEmitter() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        var names = [], events, name;
        if (this._eventsCount === 0)
          return names;
        for (name in events = this._events) {
          if (has.call(events, name))
            names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };
      EventEmitter.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers)
          return [];
        if (handlers.fn)
          return [handlers.fn];
        for (var i2 = 0, l2 = handlers.length, ee2 = new Array(l2); i2 < l2; i2++) {
          ee2[i2] = handlers[i2].fn;
        }
        return ee2;
      };
      EventEmitter.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners)
          return 0;
        if (listeners.fn)
          return 1;
        return listeners.length;
      };
      EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
          return false;
        var listeners = this._events[evt], len2 = arguments.length, args, i2;
        if (listeners.fn) {
          if (listeners.once)
            this.removeListener(event, listeners.fn, void 0, true);
          switch (len2) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i2 = 1, args = new Array(len2 - 1); i2 < len2; i2++) {
            args[i2 - 1] = arguments[i2];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length, j2;
          for (i2 = 0; i2 < length; i2++) {
            if (listeners[i2].once)
              this.removeListener(event, listeners[i2].fn, void 0, true);
            switch (len2) {
              case 1:
                listeners[i2].fn.call(listeners[i2].context);
                break;
              case 2:
                listeners[i2].fn.call(listeners[i2].context, a1);
                break;
              case 3:
                listeners[i2].fn.call(listeners[i2].context, a1, a2);
                break;
              case 4:
                listeners[i2].fn.call(listeners[i2].context, a1, a2, a3);
                break;
              default:
                if (!args)
                  for (j2 = 1, args = new Array(len2 - 1); j2 < len2; j2++) {
                    args[j2 - 1] = arguments[j2];
                  }
                listeners[i2].fn.apply(listeners[i2].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      EventEmitter.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
          return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i2 = 0, events = [], length = listeners.length; i2 < length; i2++) {
            if (listeners[i2].fn !== fn || once && !listeners[i2].once || context && listeners[i2].context !== context) {
              events.push(listeners[i2]);
            }
          }
          if (events.length)
            this._events[evt] = events.length === 1 ? events[0] : events;
          else
            clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt])
            clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.addListener = EventEmitter.prototype.on;
      EventEmitter.prefixed = prefix;
      EventEmitter.EventEmitter = EventEmitter;
      {
        module.exports = EventEmitter;
      }
    })(eventemitter3);
    return eventemitter3.exports;
  }
  var utils = {};
  var hasRequiredUtils;
  function requireUtils() {
    if (hasRequiredUtils)
      return utils;
    hasRequiredUtils = 1;
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(utils, "__esModule", {
      value: true
    });
    utils.DefaultDataPack = void 0;
    utils.createError = createError;
    var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault(requireCreateClass());
    var errors = /* @__PURE__ */ new Map([[-32e3, "Event not provided"], [-32600, "Invalid Request"], [-32601, "Method not found"], [-32602, "Invalid params"], [-32603, "Internal error"], [-32604, "Params not found"], [-32605, "Method forbidden"], [-32606, "Event forbidden"], [-32700, "Parse error"]]);
    utils.DefaultDataPack = /* @__PURE__ */ function() {
      function DefaultDataPack() {
        (0, _classCallCheck2["default"])(this, DefaultDataPack);
      }
      return (0, _createClass2["default"])(DefaultDataPack, [{
        key: "encode",
        value: function encode(value) {
          return JSON.stringify(value);
        }
      }, {
        key: "decode",
        value: function decode(value) {
          return JSON.parse(value);
        }
      }]);
    }();
    function createError(code2, details) {
      var error = {
        code: code2,
        message: errors.get(code2) || "Internal Server Error"
      };
      if (details)
        error["data"] = details;
      return error;
    }
    return utils;
  }
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _regenerator = _interopRequireDefault(requireRegenerator());
    var _asyncToGenerator2 = _interopRequireDefault(requireAsyncToGenerator());
    var _typeof2 = _interopRequireDefault(require_typeof());
    var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(requireGetPrototypeOf());
    var _inherits2 = _interopRequireDefault(requireInherits());
    var _eventemitter = requireEventemitter3();
    var _utils = requireUtils();
    function _callSuper(t2, o2, e2) {
      return o2 = (0, _getPrototypeOf2["default"])(o2), (0, _possibleConstructorReturn2["default"])(t2, _isNativeReflectConstruct() ? Reflect.construct(o2, e2 || [], (0, _getPrototypeOf2["default"])(t2).constructor) : o2.apply(t2, e2));
    }
    function _isNativeReflectConstruct() {
      try {
        var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (t3) {
      }
      return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
        return !!t2;
      })();
    }
    var __rest = function(s2, e2) {
      var t2 = {};
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
          t2[p2] = s2[p2];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
          if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
            t2[p2[i2]] = s2[p2[i2]];
        }
      return t2;
    };
    exports["default"] = /* @__PURE__ */ function(_EventEmitter) {
      function CommonClient(webSocketFactory) {
        var _this;
        var address = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080";
        var _a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var generate_request_id = arguments.length > 3 ? arguments[3] : void 0;
        var dataPack = arguments.length > 4 ? arguments[4] : void 0;
        (0, _classCallCheck2["default"])(this, CommonClient);
        var _a$autoconnect = _a.autoconnect, autoconnect = _a$autoconnect === void 0 ? true : _a$autoconnect, _a$reconnect = _a.reconnect, reconnect = _a$reconnect === void 0 ? true : _a$reconnect, _a$reconnect_interval = _a.reconnect_interval, reconnect_interval = _a$reconnect_interval === void 0 ? 1e3 : _a$reconnect_interval, _a$max_reconnects = _a.max_reconnects, max_reconnects = _a$max_reconnects === void 0 ? 5 : _a$max_reconnects, rest_options = __rest(_a, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
        _this = _callSuper(this, CommonClient);
        _this.webSocketFactory = webSocketFactory;
        _this.queue = {};
        _this.rpc_id = 0;
        _this.address = address;
        _this.autoconnect = autoconnect;
        _this.ready = false;
        _this.reconnect = reconnect;
        _this.reconnect_timer_id = void 0;
        _this.reconnect_interval = reconnect_interval;
        _this.max_reconnects = max_reconnects;
        _this.rest_options = rest_options;
        _this.current_reconnects = 0;
        _this.generate_request_id = generate_request_id || function() {
          return ++_this.rpc_id;
        };
        if (!dataPack)
          _this.dataPack = new _utils.DefaultDataPack();
        else
          _this.dataPack = dataPack;
        if (_this.autoconnect)
          _this._connect(_this.address, Object.assign({
            autoconnect: _this.autoconnect,
            reconnect: _this.reconnect,
            reconnect_interval: _this.reconnect_interval,
            max_reconnects: _this.max_reconnects
          }, _this.rest_options));
        return _this;
      }
      (0, _inherits2["default"])(CommonClient, _EventEmitter);
      return (0, _createClass2["default"])(CommonClient, [{
        key: "connect",
        value: function connect() {
          if (this.socket)
            return;
          this._connect(this.address, Object.assign({
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects
          }, this.rest_options));
        }
        /**
         * Calls a registered RPC method on server.
         * @method
         * @param {String} method - RPC method name
         * @param {Object|Array} params - optional method parameters
         * @param {Number} timeout - RPC reply timeout value
         * @param {Object} ws_opts - options passed to ws
         * @return {Promise}
         */
      }, {
        key: "call",
        value: function call(method, params, timeout, ws_opts) {
          var _this2 = this;
          if (!ws_opts && "object" === (0, _typeof2["default"])(timeout)) {
            ws_opts = timeout;
            timeout = null;
          }
          return new Promise(function(resolve, reject) {
            if (!_this2.ready)
              return reject(new Error("socket not ready"));
            var rpc_id = _this2.generate_request_id(method, params);
            var message = {
              jsonrpc: "2.0",
              method,
              params: params || void 0,
              id: rpc_id
            };
            _this2.socket.send(_this2.dataPack.encode(message), ws_opts, function(error) {
              if (error)
                return reject(error);
              _this2.queue[rpc_id] = {
                promise: [resolve, reject]
              };
              if (timeout) {
                _this2.queue[rpc_id].timeout = setTimeout(function() {
                  delete _this2.queue[rpc_id];
                  reject(new Error("reply timeout"));
                }, timeout);
              }
            });
          });
        }
        /**
         * Logins with the other side of the connection.
         * @method
         * @param {Object} params - Login credentials object
         * @return {Promise}
         */
      }, {
        key: "login",
        value: function() {
          var _login = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee(params) {
            var resp;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1)
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.call("rpc.login", params);
                  case 2:
                    resp = _context.sent;
                    if (resp) {
                      _context.next = 5;
                      break;
                    }
                    throw new Error("authentication failed");
                  case 5:
                    return _context.abrupt("return", resp);
                  case 6:
                  case "end":
                    return _context.stop();
                }
            }, _callee, this);
          }));
          function login(_x) {
            return _login.apply(this, arguments);
          }
          return login;
        }()
      }, {
        key: "listMethods",
        value: function() {
          var _listMethods = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee2() {
            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1)
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.call("__listMethods");
                  case 2:
                    return _context2.abrupt("return", _context2.sent);
                  case 3:
                  case "end":
                    return _context2.stop();
                }
            }, _callee2, this);
          }));
          function listMethods() {
            return _listMethods.apply(this, arguments);
          }
          return listMethods;
        }()
      }, {
        key: "notify",
        value: function notify(method, params) {
          var _this3 = this;
          return new Promise(function(resolve, reject) {
            if (!_this3.ready)
              return reject(new Error("socket not ready"));
            var message = {
              jsonrpc: "2.0",
              method,
              params
            };
            _this3.socket.send(_this3.dataPack.encode(message), function(error) {
              if (error)
                return reject(error);
              resolve();
            });
          });
        }
        /**
         * Subscribes for a defined event.
         * @method
         * @param {String|Array} event - event name
         * @return {Undefined}
         * @throws {Error}
         */
      }, {
        key: "subscribe",
        value: function() {
          var _subscribe = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee3(event) {
            var result;
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1)
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (typeof event === "string")
                      event = [event];
                    _context3.next = 3;
                    return this.call("rpc.on", event);
                  case 3:
                    result = _context3.sent;
                    if (!(typeof event === "string" && result[event] !== "ok")) {
                      _context3.next = 6;
                      break;
                    }
                    throw new Error("Failed subscribing to an event '" + event + "' with: " + result[event]);
                  case 6:
                    return _context3.abrupt("return", result);
                  case 7:
                  case "end":
                    return _context3.stop();
                }
            }, _callee3, this);
          }));
          function subscribe(_x2) {
            return _subscribe.apply(this, arguments);
          }
          return subscribe;
        }()
      }, {
        key: "unsubscribe",
        value: function() {
          var _unsubscribe = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee4(event) {
            var result;
            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1)
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (typeof event === "string")
                      event = [event];
                    _context4.next = 3;
                    return this.call("rpc.off", event);
                  case 3:
                    result = _context4.sent;
                    if (!(typeof event === "string" && result[event] !== "ok")) {
                      _context4.next = 6;
                      break;
                    }
                    throw new Error("Failed unsubscribing from an event with: " + result);
                  case 6:
                    return _context4.abrupt("return", result);
                  case 7:
                  case "end":
                    return _context4.stop();
                }
            }, _callee4, this);
          }));
          function unsubscribe(_x3) {
            return _unsubscribe.apply(this, arguments);
          }
          return unsubscribe;
        }()
      }, {
        key: "close",
        value: function close(code2, data) {
          this.socket.close(code2 || 1e3, data);
        }
        /**
         * Enable / disable automatic reconnection.
         * @method
         * @param {Boolean} reconnect - enable / disable reconnection
         * @return {Undefined}
         */
      }, {
        key: "setAutoReconnect",
        value: function setAutoReconnect(reconnect) {
          this.reconnect = reconnect;
        }
        /**
         * Set the interval between reconnection attempts.
         * @method
         * @param {Number} interval - reconnection interval in milliseconds
         * @return {Undefined}
         */
      }, {
        key: "setReconnectInterval",
        value: function setReconnectInterval(interval) {
          this.reconnect_interval = interval;
        }
        /**
         * Set the maximum number of reconnection attempts.
         * @method
         * @param {Number} max_reconnects - maximum reconnection attempts
         * @return {Undefined}
         */
      }, {
        key: "setMaxReconnects",
        value: function setMaxReconnects(max_reconnects) {
          this.max_reconnects = max_reconnects;
        }
        /**
         * Connection/Message handler.
         * @method
         * @private
         * @param {String} address - WebSocket API address
         * @param {Object} options - ws options object
         * @return {Undefined}
         */
      }, {
        key: "_connect",
        value: function _connect(address, options) {
          var _this4 = this;
          clearTimeout(this.reconnect_timer_id);
          this.socket = this.webSocketFactory(address, options);
          this.socket.addEventListener("open", function() {
            _this4.ready = true;
            _this4.emit("open");
            _this4.current_reconnects = 0;
          });
          this.socket.addEventListener("message", function(_ref) {
            var message = _ref.data;
            if (message instanceof ArrayBuffer)
              message = Buffer.from(message).toString();
            try {
              message = _this4.dataPack.decode(message);
            } catch (error) {
              return;
            }
            if (message.notification && _this4.listeners(message.notification).length) {
              if (!Object.keys(message.params).length)
                return _this4.emit(message.notification);
              var args = [message.notification];
              if (message.params.constructor === Object)
                args.push(message.params);
              else
                for (var i2 = 0; i2 < message.params.length; i2++)
                  args.push(message.params[i2]);
              return Promise.resolve().then(function() {
                _this4.emit.apply(_this4, args);
              });
            }
            if (!_this4.queue[message.id]) {
              if (message.method) {
                return Promise.resolve().then(function() {
                  _this4.emit(message.method, message === null || message === void 0 ? void 0 : message.params);
                });
              }
              return;
            }
            if ("error" in message === "result" in message)
              _this4.queue[message.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.'));
            if (_this4.queue[message.id].timeout)
              clearTimeout(_this4.queue[message.id].timeout);
            if (message.error)
              _this4.queue[message.id].promise[1](message.error);
            else
              _this4.queue[message.id].promise[0](message.result);
            delete _this4.queue[message.id];
          });
          this.socket.addEventListener("error", function(error) {
            return _this4.emit("error", error);
          });
          this.socket.addEventListener("close", function(_ref2) {
            var code2 = _ref2.code, reason = _ref2.reason;
            if (_this4.ready)
              setTimeout(function() {
                return _this4.emit("close", code2, reason);
              }, 0);
            _this4.ready = false;
            _this4.socket = void 0;
            if (code2 === 1e3)
              return;
            _this4.current_reconnects++;
            if (_this4.reconnect && (_this4.max_reconnects > _this4.current_reconnects || _this4.max_reconnects === 0))
              _this4.reconnect_timer_id = setTimeout(function() {
                return _this4._connect(address, options);
              }, _this4.reconnect_interval);
          });
        }
      }]);
    }(_eventemitter.EventEmitter);
  })(client);
  var websocket_browser = {};
  (function(exports) {
    var _interopRequireDefault = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = _default;
    var _classCallCheck2 = _interopRequireDefault(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(requireGetPrototypeOf());
    var _inherits2 = _interopRequireDefault(requireInherits());
    var _eventemitter = requireEventemitter3();
    function _callSuper(t2, o2, e2) {
      return o2 = (0, _getPrototypeOf2["default"])(o2), (0, _possibleConstructorReturn2["default"])(t2, _isNativeReflectConstruct() ? Reflect.construct(o2, e2 || [], (0, _getPrototypeOf2["default"])(t2).constructor) : o2.apply(t2, e2));
    }
    function _isNativeReflectConstruct() {
      try {
        var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (t3) {
      }
      return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
        return !!t2;
      })();
    }
    var WebSocketBrowserImpl = /* @__PURE__ */ function(_EventEmitter) {
      function WebSocketBrowserImpl2(address, options, protocols) {
        var _this;
        (0, _classCallCheck2["default"])(this, WebSocketBrowserImpl2);
        _this = _callSuper(this, WebSocketBrowserImpl2);
        _this.socket = new window.WebSocket(address, protocols);
        _this.socket.onopen = function() {
          return _this.emit("open");
        };
        _this.socket.onmessage = function(event) {
          return _this.emit("message", event.data);
        };
        _this.socket.onerror = function(error) {
          return _this.emit("error", error);
        };
        _this.socket.onclose = function(event) {
          _this.emit("close", event.code, event.reason);
        };
        return _this;
      }
      (0, _inherits2["default"])(WebSocketBrowserImpl2, _EventEmitter);
      return (0, _createClass2["default"])(WebSocketBrowserImpl2, [{
        key: "send",
        value: function send(data, optionsOrCallback, callback) {
          var cb = callback || optionsOrCallback;
          try {
            this.socket.send(data);
            cb();
          } catch (error) {
            cb(error);
          }
        }
        /**
         * Closes an underlying socket
         * @method
         * @param {Number} code - status code explaining why the connection is being closed
         * @param {String} reason - a description why the connection is closing
         * @return {Undefined}
         * @throws {Error}
         */
      }, {
        key: "close",
        value: function close(code2, reason) {
          this.socket.close(code2, reason);
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(type2, listener, options) {
          this.socket.addEventListener(type2, listener, options);
        }
      }]);
    }(_eventemitter.EventEmitter);
    function _default(address, options) {
      return new WebSocketBrowserImpl(address, options);
    }
  })(websocket_browser);
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  function validatePointOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      a: "field",
      b: "field"
    }, {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function"
    });
    const { endo, Fp: Fp2, a: a2 } = opts;
    if (endo) {
      if (!Fp2.eql(a2, Fp2.ZERO)) {
        throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
      }
      if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
        throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
      }
    }
    return Object.freeze({ ...opts });
  }
  const { bytesToNumberBE: b2n, hexToBytes: h2b } = ut;
  const DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
      constructor(m2 = "") {
        super(m2);
      }
    },
    _parseInt(data) {
      const { Err: E2 } = DER;
      if (data.length < 2 || data[0] !== 2)
        throw new E2("Invalid signature integer tag");
      const len2 = data[1];
      const res = data.subarray(2, len2 + 2);
      if (!len2 || res.length !== len2)
        throw new E2("Invalid signature integer: wrong length");
      if (res[0] & 128)
        throw new E2("Invalid signature integer: negative");
      if (res[0] === 0 && !(res[1] & 128))
        throw new E2("Invalid signature integer: unnecessary leading zero");
      return { d: b2n(res), l: data.subarray(len2 + 2) };
    },
    toSig(hex) {
      const { Err: E2 } = DER;
      const data = typeof hex === "string" ? h2b(hex) : hex;
      abytes(data);
      let l2 = data.length;
      if (l2 < 2 || data[0] != 48)
        throw new E2("Invalid signature tag");
      if (data[1] !== l2 - 2)
        throw new E2("Invalid signature: incorrect length");
      const { d: r2, l: sBytes } = DER._parseInt(data.subarray(2));
      const { d: s2, l: rBytesLeft } = DER._parseInt(sBytes);
      if (rBytesLeft.length)
        throw new E2("Invalid signature: left bytes after parsing");
      return { r: r2, s: s2 };
    },
    hexFromSig(sig) {
      const slice = (s3) => Number.parseInt(s3[0], 16) & 8 ? "00" + s3 : s3;
      const h2 = (num) => {
        const hex = num.toString(16);
        return hex.length & 1 ? `0${hex}` : hex;
      };
      const s2 = slice(h2(sig.s));
      const r2 = slice(h2(sig.r));
      const shl = s2.length / 2;
      const rhl = r2.length / 2;
      const sl = h2(shl);
      const rl = h2(rhl);
      return `30${h2(rhl + shl + 4)}02${rl}${r2}02${sl}${s2}`;
    }
  };
  const _0n = BigInt(0), _1n$1 = BigInt(1);
  BigInt(2);
  const _3n = BigInt(3);
  BigInt(4);
  function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp: Fp2 } = CURVE;
    const toBytes2 = CURVE.toBytes || ((_c, point, _isCompressed) => {
      const a2 = point.toAffine();
      return concatBytes(Uint8Array.from([4]), Fp2.toBytes(a2.x), Fp2.toBytes(a2.y));
    });
    const fromBytes = CURVE.fromBytes || ((bytes2) => {
      const tail = bytes2.subarray(1);
      const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
      const y2 = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
      return { x, y: y2 };
    });
    function weierstrassEquation(x) {
      const { a: a2, b: b2 } = CURVE;
      const x2 = Fp2.sqr(x);
      const x3 = Fp2.mul(x2, x);
      return Fp2.add(Fp2.add(x3, Fp2.mul(x, a2)), b2);
    }
    if (!Fp2.eql(Fp2.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
      throw new Error("bad generator point: equation left != right");
    function isWithinCurveOrder(num) {
      return typeof num === "bigint" && _0n < num && num < CURVE.n;
    }
    function assertGE(num) {
      if (!isWithinCurveOrder(num))
        throw new Error("Expected valid bigint: 0 < bigint < curve.n");
    }
    function normPrivateKeyToScalar(key) {
      const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: n2 } = CURVE;
      if (lengths && typeof key !== "bigint") {
        if (isBytes(key))
          key = bytesToHex(key);
        if (typeof key !== "string" || !lengths.includes(key.length))
          throw new Error("Invalid key");
        key = key.padStart(nByteLength * 2, "0");
      }
      let num;
      try {
        num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
      } catch (error) {
        throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
      }
      if (wrapPrivateKey)
        num = mod(num, n2);
      assertGE(num);
      return num;
    }
    const pointPrecomputes = /* @__PURE__ */ new Map();
    function assertPrjPoint(other) {
      if (!(other instanceof Point))
        throw new Error("ProjectivePoint expected");
    }
    class Point {
      constructor(px, py, pz) {
        this.px = px;
        this.py = py;
        this.pz = pz;
        if (px == null || !Fp2.isValid(px))
          throw new Error("x required");
        if (py == null || !Fp2.isValid(py))
          throw new Error("y required");
        if (pz == null || !Fp2.isValid(pz))
          throw new Error("z required");
      }
      // Does not validate if the point is on-curve.
      // Use fromHex instead, or call assertValidity() later.
      static fromAffine(p2) {
        const { x, y: y2 } = p2 || {};
        if (!p2 || !Fp2.isValid(x) || !Fp2.isValid(y2))
          throw new Error("invalid affine point");
        if (p2 instanceof Point)
          throw new Error("projective point not allowed");
        const is0 = (i2) => Fp2.eql(i2, Fp2.ZERO);
        if (is0(x) && is0(y2))
          return Point.ZERO;
        return new Point(x, y2, Fp2.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      /**
       * Takes a bunch of Projective Points but executes only one
       * inversion on all of them. Inversion is very slow operation,
       * so this improves performance massively.
       * Optimization: converts a list of projective points to a list of identical points with Z=1.
       */
      static normalizeZ(points) {
        const toInv = Fp2.invertBatch(points.map((p2) => p2.pz));
        return points.map((p2, i2) => p2.toAffine(toInv[i2])).map(Point.fromAffine);
      }
      /**
       * Converts hash string or Uint8Array to Point.
       * @param hex short/long ECDSA hex
       */
      static fromHex(hex) {
        const P2 = Point.fromAffine(fromBytes(ensureBytes("pointHex", hex)));
        P2.assertValidity();
        return P2;
      }
      // Multiplies generator point by privateKey.
      static fromPrivateKey(privateKey) {
        return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
      }
      // "Private method", don't use it directly
      _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes.delete(this);
      }
      // A point on curve is valid if it conforms to equation.
      assertValidity() {
        if (this.is0()) {
          if (CURVE.allowInfinityPoint && !Fp2.is0(this.py))
            return;
          throw new Error("bad point: ZERO");
        }
        const { x, y: y2 } = this.toAffine();
        if (!Fp2.isValid(x) || !Fp2.isValid(y2))
          throw new Error("bad point: x or y not FE");
        const left = Fp2.sqr(y2);
        const right = weierstrassEquation(x);
        if (!Fp2.eql(left, right))
          throw new Error("bad point: equation left != right");
        if (!this.isTorsionFree())
          throw new Error("bad point: not in prime-order subgroup");
      }
      hasEvenY() {
        const { y: y2 } = this.toAffine();
        if (Fp2.isOdd)
          return !Fp2.isOdd(y2);
        throw new Error("Field doesn't support isOdd");
      }
      /**
       * Compare one point to another.
       */
      equals(other) {
        assertPrjPoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        const U1 = Fp2.eql(Fp2.mul(X1, Z2), Fp2.mul(X2, Z1));
        const U2 = Fp2.eql(Fp2.mul(Y1, Z2), Fp2.mul(Y2, Z1));
        return U1 && U2;
      }
      /**
       * Flips point to one corresponding to (x, -y) in Affine coordinates.
       */
      negate() {
        return new Point(this.px, Fp2.neg(this.py), this.pz);
      }
      // Renes-Costello-Batina exception-free doubling formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 3
      // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
      double() {
        const { a: a2, b: b2 } = CURVE;
        const b3 = Fp2.mul(b2, _3n);
        const { px: X1, py: Y1, pz: Z1 } = this;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        let t0 = Fp2.mul(X1, X1);
        let t1 = Fp2.mul(Y1, Y1);
        let t2 = Fp2.mul(Z1, Z1);
        let t3 = Fp2.mul(X1, Y1);
        t3 = Fp2.add(t3, t3);
        Z3 = Fp2.mul(X1, Z1);
        Z3 = Fp2.add(Z3, Z3);
        X3 = Fp2.mul(a2, Z3);
        Y3 = Fp2.mul(b3, t2);
        Y3 = Fp2.add(X3, Y3);
        X3 = Fp2.sub(t1, Y3);
        Y3 = Fp2.add(t1, Y3);
        Y3 = Fp2.mul(X3, Y3);
        X3 = Fp2.mul(t3, X3);
        Z3 = Fp2.mul(b3, Z3);
        t2 = Fp2.mul(a2, t2);
        t3 = Fp2.sub(t0, t2);
        t3 = Fp2.mul(a2, t3);
        t3 = Fp2.add(t3, Z3);
        Z3 = Fp2.add(t0, t0);
        t0 = Fp2.add(Z3, t0);
        t0 = Fp2.add(t0, t2);
        t0 = Fp2.mul(t0, t3);
        Y3 = Fp2.add(Y3, t0);
        t2 = Fp2.mul(Y1, Z1);
        t2 = Fp2.add(t2, t2);
        t0 = Fp2.mul(t2, t3);
        X3 = Fp2.sub(X3, t0);
        Z3 = Fp2.mul(t2, t1);
        Z3 = Fp2.add(Z3, Z3);
        Z3 = Fp2.add(Z3, Z3);
        return new Point(X3, Y3, Z3);
      }
      // Renes-Costello-Batina exception-free addition formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 1
      // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
      add(other) {
        assertPrjPoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        const a2 = CURVE.a;
        const b3 = Fp2.mul(CURVE.b, _3n);
        let t0 = Fp2.mul(X1, X2);
        let t1 = Fp2.mul(Y1, Y2);
        let t2 = Fp2.mul(Z1, Z2);
        let t3 = Fp2.add(X1, Y1);
        let t4 = Fp2.add(X2, Y2);
        t3 = Fp2.mul(t3, t4);
        t4 = Fp2.add(t0, t1);
        t3 = Fp2.sub(t3, t4);
        t4 = Fp2.add(X1, Z1);
        let t5 = Fp2.add(X2, Z2);
        t4 = Fp2.mul(t4, t5);
        t5 = Fp2.add(t0, t2);
        t4 = Fp2.sub(t4, t5);
        t5 = Fp2.add(Y1, Z1);
        X3 = Fp2.add(Y2, Z2);
        t5 = Fp2.mul(t5, X3);
        X3 = Fp2.add(t1, t2);
        t5 = Fp2.sub(t5, X3);
        Z3 = Fp2.mul(a2, t4);
        X3 = Fp2.mul(b3, t2);
        Z3 = Fp2.add(X3, Z3);
        X3 = Fp2.sub(t1, Z3);
        Z3 = Fp2.add(t1, Z3);
        Y3 = Fp2.mul(X3, Z3);
        t1 = Fp2.add(t0, t0);
        t1 = Fp2.add(t1, t0);
        t2 = Fp2.mul(a2, t2);
        t4 = Fp2.mul(b3, t4);
        t1 = Fp2.add(t1, t2);
        t2 = Fp2.sub(t0, t2);
        t2 = Fp2.mul(a2, t2);
        t4 = Fp2.add(t4, t2);
        t0 = Fp2.mul(t1, t4);
        Y3 = Fp2.add(Y3, t0);
        t0 = Fp2.mul(t5, t4);
        X3 = Fp2.mul(t3, X3);
        X3 = Fp2.sub(X3, t0);
        t0 = Fp2.mul(t3, t1);
        Z3 = Fp2.mul(t5, Z3);
        Z3 = Fp2.add(Z3, t0);
        return new Point(X3, Y3, Z3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      is0() {
        return this.equals(Point.ZERO);
      }
      wNAF(n2) {
        return wnaf.wNAFCached(this, pointPrecomputes, n2, (comp) => {
          const toInv = Fp2.invertBatch(comp.map((p2) => p2.pz));
          return comp.map((p2, i2) => p2.toAffine(toInv[i2])).map(Point.fromAffine);
        });
      }
      /**
       * Non-constant-time multiplication. Uses double-and-add algorithm.
       * It's faster, but should only be used when you don't care about
       * an exposed private key e.g. sig verification, which works over *public* keys.
       */
      multiplyUnsafe(n2) {
        const I2 = Point.ZERO;
        if (n2 === _0n)
          return I2;
        assertGE(n2);
        if (n2 === _1n$1)
          return this;
        const { endo } = CURVE;
        if (!endo)
          return wnaf.unsafeLadder(this, n2);
        let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n2);
        let k1p = I2;
        let k2p = I2;
        let d2 = this;
        while (k1 > _0n || k2 > _0n) {
          if (k1 & _1n$1)
            k1p = k1p.add(d2);
          if (k2 & _1n$1)
            k2p = k2p.add(d2);
          d2 = d2.double();
          k1 >>= _1n$1;
          k2 >>= _1n$1;
        }
        if (k1neg)
          k1p = k1p.negate();
        if (k2neg)
          k2p = k2p.negate();
        k2p = new Point(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        return k1p.add(k2p);
      }
      /**
       * Constant time multiplication.
       * Uses wNAF method. Windowed method may be 10% faster,
       * but takes 2x longer to generate and consumes 2x memory.
       * Uses precomputes when available.
       * Uses endomorphism for Koblitz curves.
       * @param scalar by which the point would be multiplied
       * @returns New point
       */
      multiply(scalar) {
        assertGE(scalar);
        let n2 = scalar;
        let point, fake;
        const { endo } = CURVE;
        if (endo) {
          const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n2);
          let { p: k1p, f: f1p } = this.wNAF(k1);
          let { p: k2p, f: f2p } = this.wNAF(k2);
          k1p = wnaf.constTimeNegate(k1neg, k1p);
          k2p = wnaf.constTimeNegate(k2neg, k2p);
          k2p = new Point(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
          point = k1p.add(k2p);
          fake = f1p.add(f2p);
        } else {
          const { p: p2, f: f2 } = this.wNAF(n2);
          point = p2;
          fake = f2;
        }
        return Point.normalizeZ([point, fake])[0];
      }
      /**
       * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
       * Not using Strauss-Shamir trick: precomputation tables are faster.
       * The trick could be useful if both P and Q are not G (not in our case).
       * @returns non-zero affine point
       */
      multiplyAndAddUnsafe(Q2, a2, b2) {
        const G2 = Point.BASE;
        const mul = (P2, a3) => a3 === _0n || a3 === _1n$1 || !P2.equals(G2) ? P2.multiplyUnsafe(a3) : P2.multiply(a3);
        const sum = mul(this, a2).add(mul(Q2, b2));
        return sum.is0() ? void 0 : sum;
      }
      // Converts Projective point to affine (x, y) coordinates.
      // Can accept precomputed Z^-1 - for example, from invertBatch.
      // (x, y, z) ∋ (x=x/z, y=y/z)
      toAffine(iz) {
        const { px: x, py: y2, pz: z2 } = this;
        const is0 = this.is0();
        if (iz == null)
          iz = is0 ? Fp2.ONE : Fp2.inv(z2);
        const ax = Fp2.mul(x, iz);
        const ay = Fp2.mul(y2, iz);
        const zz = Fp2.mul(z2, iz);
        if (is0)
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        if (!Fp2.eql(zz, Fp2.ONE))
          throw new Error("invZ was invalid");
        return { x: ax, y: ay };
      }
      isTorsionFree() {
        const { h: cofactor, isTorsionFree } = CURVE;
        if (cofactor === _1n$1)
          return true;
        if (isTorsionFree)
          return isTorsionFree(Point, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: cofactor, clearCofactor } = CURVE;
        if (cofactor === _1n$1)
          return this;
        if (clearCofactor)
          return clearCofactor(Point, this);
        return this.multiplyUnsafe(CURVE.h);
      }
      toRawBytes(isCompressed = true) {
        this.assertValidity();
        return toBytes2(Point, this, isCompressed);
      }
      toHex(isCompressed = true) {
        return bytesToHex(this.toRawBytes(isCompressed));
      }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp2.ONE);
    Point.ZERO = new Point(Fp2.ZERO, Fp2.ONE, Fp2.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = wNAF(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    return {
      CURVE,
      ProjectivePoint: Point,
      normPrivateKeyToScalar,
      weierstrassEquation,
      isWithinCurveOrder
    };
  }
  function validateOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    });
    return Object.freeze({ lowS: true, ...opts });
  }
  function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp: Fp2, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp2.BYTES + 1;
    const uncompressedLen = 2 * Fp2.BYTES + 1;
    function isValidFieldElement(num) {
      return _0n < num && num < Fp2.ORDER;
    }
    function modN(a2) {
      return mod(a2, CURVE_ORDER);
    }
    function invN(a2) {
      return invert(a2, CURVE_ORDER);
    }
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
      ...CURVE,
      toBytes(_c, point, isCompressed) {
        const a2 = point.toAffine();
        const x = Fp2.toBytes(a2.x);
        const cat = concatBytes;
        if (isCompressed) {
          return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
        } else {
          return cat(Uint8Array.from([4]), x, Fp2.toBytes(a2.y));
        }
      },
      fromBytes(bytes2) {
        const len2 = bytes2.length;
        const head = bytes2[0];
        const tail = bytes2.subarray(1);
        if (len2 === compressedLen && (head === 2 || head === 3)) {
          const x = bytesToNumberBE(tail);
          if (!isValidFieldElement(x))
            throw new Error("Point is not on curve");
          const y2 = weierstrassEquation(x);
          let y3;
          try {
            y3 = Fp2.sqrt(y2);
          } catch (sqrtError) {
            const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
            throw new Error("Point is not on curve" + suffix);
          }
          const isYOdd = (y3 & _1n$1) === _1n$1;
          const isHeadOdd = (head & 1) === 1;
          if (isHeadOdd !== isYOdd)
            y3 = Fp2.neg(y3);
          return { x, y: y3 };
        } else if (len2 === uncompressedLen && head === 4) {
          const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
          const y2 = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
          return { x, y: y2 };
        } else {
          throw new Error(`Point of length ${len2} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
        }
      }
    });
    const numToNByteStr = (num) => bytesToHex(numberToBytesBE(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number2) {
      const HALF = CURVE_ORDER >> _1n$1;
      return number2 > HALF;
    }
    function normalizeS(s2) {
      return isBiggerThanHalfOrder(s2) ? modN(-s2) : s2;
    }
    const slcNum = (b2, from, to) => bytesToNumberBE(b2.slice(from, to));
    class Signature {
      constructor(r2, s2, recovery) {
        this.r = r2;
        this.s = s2;
        this.recovery = recovery;
        this.assertValidity();
      }
      // pair (bytes of r, bytes of s)
      static fromCompact(hex) {
        const l2 = CURVE.nByteLength;
        hex = ensureBytes("compactSignature", hex, l2 * 2);
        return new Signature(slcNum(hex, 0, l2), slcNum(hex, l2, 2 * l2));
      }
      // DER encoded ECDSA signature
      // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
      static fromDER(hex) {
        const { r: r2, s: s2 } = DER.toSig(ensureBytes("DER", hex));
        return new Signature(r2, s2);
      }
      assertValidity() {
        if (!isWithinCurveOrder(this.r))
          throw new Error("r must be 0 < r < CURVE.n");
        if (!isWithinCurveOrder(this.s))
          throw new Error("s must be 0 < s < CURVE.n");
      }
      addRecoveryBit(recovery) {
        return new Signature(this.r, this.s, recovery);
      }
      recoverPublicKey(msgHash) {
        const { r: r2, s: s2, recovery: rec } = this;
        const h2 = bits2int_modN(ensureBytes("msgHash", msgHash));
        if (rec == null || ![0, 1, 2, 3].includes(rec))
          throw new Error("recovery id invalid");
        const radj = rec === 2 || rec === 3 ? r2 + CURVE.n : r2;
        if (radj >= Fp2.ORDER)
          throw new Error("recovery id 2 or 3 invalid");
        const prefix = (rec & 1) === 0 ? "02" : "03";
        const R2 = Point.fromHex(prefix + numToNByteStr(radj));
        const ir = invN(radj);
        const u1 = modN(-h2 * ir);
        const u2 = modN(s2 * ir);
        const Q2 = Point.BASE.multiplyAndAddUnsafe(R2, u1, u2);
        if (!Q2)
          throw new Error("point at infinify");
        Q2.assertValidity();
        return Q2;
      }
      // Signatures should be low-s, to prevent malleability.
      hasHighS() {
        return isBiggerThanHalfOrder(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
      }
      // DER-encoded
      toDERRawBytes() {
        return hexToBytes(this.toDERHex());
      }
      toDERHex() {
        return DER.hexFromSig({ r: this.r, s: this.s });
      }
      // padded bytes of r, then padded bytes of s
      toCompactRawBytes() {
        return hexToBytes(this.toCompactHex());
      }
      toCompactHex() {
        return numToNByteStr(this.r) + numToNByteStr(this.s);
      }
    }
    const utils2 = {
      isValidPrivateKey(privateKey) {
        try {
          normPrivateKeyToScalar(privateKey);
          return true;
        } catch (error) {
          return false;
        }
      },
      normPrivateKeyToScalar,
      /**
       * Produces cryptographically secure private key from random of size
       * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
       */
      randomPrivateKey: () => {
        const length = getMinHashLength(CURVE.n);
        return mapHashToField(CURVE.randomBytes(length), CURVE.n);
      },
      /**
       * Creates precompute table for an arbitrary EC point. Makes point "cached".
       * Allows to massively speed-up `point.multiply(scalar)`.
       * @returns cached point
       * @example
       * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
       * fast.multiply(privKey); // much faster ECDH now
       */
      precompute(windowSize = 8, point = Point.BASE) {
        point._setWindowSize(windowSize);
        point.multiply(BigInt(3));
        return point;
      }
    };
    function getPublicKey2(privateKey, isCompressed = true) {
      return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    function isProbPub(item) {
      const arr = isBytes(item);
      const str = typeof item === "string";
      const len2 = (arr || str) && item.length;
      if (arr)
        return len2 === compressedLen || len2 === uncompressedLen;
      if (str)
        return len2 === 2 * compressedLen || len2 === 2 * uncompressedLen;
      if (item instanceof Point)
        return true;
      return false;
    }
    function getSharedSecret(privateA, publicB, isCompressed = true) {
      if (isProbPub(privateA))
        throw new Error("first arg must be private key");
      if (!isProbPub(publicB))
        throw new Error("second arg must be public key");
      const b2 = Point.fromHex(publicB);
      return b2.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    const bits2int = CURVE.bits2int || function(bytes2) {
      const num = bytesToNumberBE(bytes2);
      const delta = bytes2.length * 8 - CURVE.nBitLength;
      return delta > 0 ? num >> BigInt(delta) : num;
    };
    const bits2int_modN = CURVE.bits2int_modN || function(bytes2) {
      return modN(bits2int(bytes2));
    };
    const ORDER_MASK = bitMask(CURVE.nBitLength);
    function int2octets(num) {
      if (typeof num !== "bigint")
        throw new Error("bigint expected");
      if (!(_0n <= num && num < ORDER_MASK))
        throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
      return numberToBytesBE(num, CURVE.nByteLength);
    }
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
      if (["recovered", "canonical"].some((k) => k in opts))
        throw new Error("sign() legacy options not supported");
      const { hash: hash2, randomBytes: randomBytes2 } = CURVE;
      let { lowS, prehash, extraEntropy: ent } = opts;
      if (lowS == null)
        lowS = true;
      msgHash = ensureBytes("msgHash", msgHash);
      if (prehash)
        msgHash = ensureBytes("prehashed msgHash", hash2(msgHash));
      const h1int = bits2int_modN(msgHash);
      const d2 = normPrivateKeyToScalar(privateKey);
      const seedArgs = [int2octets(d2), int2octets(h1int)];
      if (ent != null && ent !== false) {
        const e2 = ent === true ? randomBytes2(Fp2.BYTES) : ent;
        seedArgs.push(ensureBytes("extraEntropy", e2));
      }
      const seed = concatBytes(...seedArgs);
      const m2 = h1int;
      function k2sig(kBytes) {
        const k = bits2int(kBytes);
        if (!isWithinCurveOrder(k))
          return;
        const ik = invN(k);
        const q2 = Point.BASE.multiply(k).toAffine();
        const r2 = modN(q2.x);
        if (r2 === _0n)
          return;
        const s2 = modN(ik * modN(m2 + r2 * d2));
        if (s2 === _0n)
          return;
        let recovery = (q2.x === r2 ? 0 : 2) | Number(q2.y & _1n$1);
        let normS = s2;
        if (lowS && isBiggerThanHalfOrder(s2)) {
          normS = normalizeS(s2);
          recovery ^= 1;
        }
        return new Signature(r2, normS, recovery);
      }
      return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    function sign(msgHash, privKey, opts = defaultSigOpts) {
      const { seed, k2sig } = prepSig(msgHash, privKey, opts);
      const C2 = CURVE;
      const drbg = createHmacDrbg(C2.hash.outputLen, C2.nByteLength, C2.hmac);
      return drbg(seed, k2sig);
    }
    Point.BASE._setWindowSize(8);
    function verify(signature, msgHash, publicKey2, opts = defaultVerOpts) {
      var _a;
      const sg = signature;
      msgHash = ensureBytes("msgHash", msgHash);
      publicKey2 = ensureBytes("publicKey", publicKey2);
      if ("strict" in opts)
        throw new Error("options.strict was renamed to lowS");
      const { lowS, prehash } = opts;
      let _sig = void 0;
      let P2;
      try {
        if (typeof sg === "string" || isBytes(sg)) {
          try {
            _sig = Signature.fromDER(sg);
          } catch (derError) {
            if (!(derError instanceof DER.Err))
              throw derError;
            _sig = Signature.fromCompact(sg);
          }
        } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
          const { r: r3, s: s3 } = sg;
          _sig = new Signature(r3, s3);
        } else {
          throw new Error("PARSE");
        }
        P2 = Point.fromHex(publicKey2);
      } catch (error) {
        if (error.message === "PARSE")
          throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
        return false;
      }
      if (lowS && _sig.hasHighS())
        return false;
      if (prehash)
        msgHash = CURVE.hash(msgHash);
      const { r: r2, s: s2 } = _sig;
      const h2 = bits2int_modN(msgHash);
      const is2 = invN(s2);
      const u1 = modN(h2 * is2);
      const u2 = modN(r2 * is2);
      const R2 = (_a = Point.BASE.multiplyAndAddUnsafe(P2, u1, u2)) == null ? void 0 : _a.toAffine();
      if (!R2)
        return false;
      const v2 = modN(R2.x);
      return v2 === r2;
    }
    return {
      CURVE,
      getPublicKey: getPublicKey2,
      getSharedSecret,
      sign,
      verify,
      ProjectivePoint: Point,
      Signature,
      utils: utils2
    };
  }
  class HMAC extends Hash {
    constructor(hash$1, _key) {
      super();
      this.finished = false;
      this.destroyed = false;
      hash(hash$1);
      const key = toBytes(_key);
      this.iHash = hash$1.create();
      if (typeof this.iHash.update !== "function")
        throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen;
      this.outputLen = this.iHash.outputLen;
      const blockLen = this.blockLen;
      const pad = new Uint8Array(blockLen);
      pad.set(key.length > blockLen ? hash$1.create().update(key).digest() : key);
      for (let i2 = 0; i2 < pad.length; i2++)
        pad[i2] ^= 54;
      this.iHash.update(pad);
      this.oHash = hash$1.create();
      for (let i2 = 0; i2 < pad.length; i2++)
        pad[i2] ^= 54 ^ 92;
      this.oHash.update(pad);
      pad.fill(0);
    }
    update(buf) {
      exists(this);
      this.iHash.update(buf);
      return this;
    }
    digestInto(out) {
      exists(this);
      bytes(out, this.outputLen);
      this.finished = true;
      this.iHash.digestInto(out);
      this.oHash.update(out);
      this.oHash.digestInto(out);
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.oHash.outputLen);
      this.digestInto(out);
      return out;
    }
    _cloneInto(to) {
      to || (to = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash, iHash, finished: finished2, destroyed, blockLen, outputLen } = this;
      to = to;
      to.finished = finished2;
      to.destroyed = destroyed;
      to.blockLen = blockLen;
      to.outputLen = outputLen;
      to.oHash = oHash._cloneInto(to.oHash);
      to.iHash = iHash._cloneInto(to.iHash);
      return to;
    }
    destroy() {
      this.destroyed = true;
      this.oHash.destroy();
      this.iHash.destroy();
    }
  }
  const hmac = (hash2, key, message) => new HMAC(hash2, key).update(message).digest();
  hmac.create = (hash2, key) => new HMAC(hash2, key);
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  function getHash(hash2) {
    return {
      hash: hash2,
      hmac: (key, ...msgs) => hmac(hash2, key, concatBytes$1(...msgs)),
      randomBytes
    };
  }
  function createCurve(curveDef, defHash) {
    const create2 = (hash2) => weierstrass({ ...curveDef, ...getHash(hash2) });
    return Object.freeze({ ...create2(defHash), create: create2 });
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
  const secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
  const _1n = BigInt(1);
  const _2n = BigInt(2);
  const divNearest = (a2, b2) => (a2 + b2 / _2n) / b2;
  function sqrtMod(y2) {
    const P2 = secp256k1P;
    const _3n2 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = y2 * y2 * y2 % P2;
    const b3 = b2 * b2 * y2 % P2;
    const b6 = pow2(b3, _3n2, P2) * b3 % P2;
    const b9 = pow2(b6, _3n2, P2) * b3 % P2;
    const b11 = pow2(b9, _2n, P2) * b2 % P2;
    const b22 = pow2(b11, _11n, P2) * b11 % P2;
    const b44 = pow2(b22, _22n, P2) * b22 % P2;
    const b88 = pow2(b44, _44n, P2) * b44 % P2;
    const b176 = pow2(b88, _88n, P2) * b88 % P2;
    const b220 = pow2(b176, _44n, P2) * b44 % P2;
    const b223 = pow2(b220, _3n2, P2) * b3 % P2;
    const t1 = pow2(b223, _23n, P2) * b22 % P2;
    const t2 = pow2(t1, _6n, P2) * b2 % P2;
    const root = pow2(t2, _2n, P2);
    if (!Fp.eql(Fp.sqr(root), y2))
      throw new Error("Cannot find square root");
    return root;
  }
  const Fp = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
  const secp256k1 = createCurve({
    a: BigInt(0),
    // equation params: a, b
    b: BigInt(7),
    // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
    Fp,
    // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
    n: secp256k1N,
    // Curve order, total count of valid points in the field
    // Base point (x, y) aka generator point
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    // Cofactor
    lowS: true,
    // Allow only low-S signatures by default in sign() and verify()
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (k) => {
        const n2 = secp256k1N;
        const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
        const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
        const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
        const b2 = a1;
        const POW_2_128 = BigInt("0x100000000000000000000000000000000");
        const c1 = divNearest(b2 * k, n2);
        const c2 = divNearest(-b1 * k, n2);
        let k1 = mod(k - c1 * a1 - c2 * a2, n2);
        let k2 = mod(-c1 * b1 - c2 * b2, n2);
        const k1neg = k1 > POW_2_128;
        const k2neg = k2 > POW_2_128;
        if (k1neg)
          k1 = n2 - k1;
        if (k2neg)
          k2 = n2 - k2;
        if (k1 > POW_2_128 || k2 > POW_2_128) {
          throw new Error("splitScalar: Endomorphism failed, k=" + k);
        }
        return { k1neg, k1, k2neg, k2 };
      }
    }
  }, sha256);
  BigInt(0);
  secp256k1.ProjectivePoint;
  ed25519.utils.randomPrivateKey;
  const generateKeypair = () => {
    const privateScalar = ed25519.utils.randomPrivateKey();
    const publicKey2 = getPublicKey(privateScalar);
    const secretKey = new Uint8Array(64);
    secretKey.set(privateScalar);
    secretKey.set(publicKey2, 32);
    return {
      publicKey: publicKey2,
      secretKey
    };
  };
  const getPublicKey = ed25519.getPublicKey;
  function isOnCurve(publicKey2) {
    try {
      ed25519.ExtendedPoint.fromHex(publicKey2);
      return true;
    } catch {
      return false;
    }
  }
  const toBuffer = (arr) => {
    if (buffer.Buffer.isBuffer(arr)) {
      return arr;
    } else if (arr instanceof Uint8Array) {
      return buffer.Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
    } else {
      return buffer.Buffer.from(arr);
    }
  };
  class Struct {
    constructor(properties) {
      Object.assign(this, properties);
    }
    encode() {
      return buffer.Buffer.from(serialize_1(SOLANA_SCHEMA, this));
    }
    static decode(data) {
      return deserialize_1(SOLANA_SCHEMA, this, data);
    }
    static decodeUnchecked(data) {
      return deserializeUnchecked_1(SOLANA_SCHEMA, this, data);
    }
  }
  const SOLANA_SCHEMA = /* @__PURE__ */ new Map();
  var _class;
  let _Symbol$toStringTag;
  const MAX_SEED_LENGTH = 32;
  const PUBLIC_KEY_LENGTH = 32;
  function isPublicKeyData(value) {
    return value._bn !== void 0;
  }
  let uniquePublicKeyCounter = 1;
  _Symbol$toStringTag = Symbol.toStringTag;
  class PublicKey extends Struct {
    /**
     * Create a new PublicKey object
     * @param value ed25519 public key as buffer or base-58 encoded string
     */
    constructor(value) {
      super({});
      this._bn = void 0;
      if (isPublicKeyData(value)) {
        this._bn = value._bn;
      } else {
        if (typeof value === "string") {
          const decoded = bs58$2.decode(value);
          if (decoded.length != PUBLIC_KEY_LENGTH) {
            throw new Error(`Invalid public key input`);
          }
          this._bn = new BN(decoded);
        } else {
          this._bn = new BN(value);
        }
        if (this._bn.byteLength() > PUBLIC_KEY_LENGTH) {
          throw new Error(`Invalid public key input`);
        }
      }
    }
    /**
     * Returns a unique PublicKey for tests and benchmarks using a counter
     */
    static unique() {
      const key = new PublicKey(uniquePublicKeyCounter);
      uniquePublicKeyCounter += 1;
      return new PublicKey(key.toBuffer());
    }
    /**
     * Default public key value. The base58-encoded string representation is all ones (as seen below)
     * The underlying BN number is 32 bytes that are all zeros
     */
    /**
     * Checks if two publicKeys are equal
     */
    equals(publicKey2) {
      return this._bn.eq(publicKey2._bn);
    }
    /**
     * Return the base-58 representation of the public key
     */
    toBase58() {
      return bs58$2.encode(this.toBytes());
    }
    toJSON() {
      return this.toBase58();
    }
    /**
     * Return the byte array representation of the public key in big endian
     */
    toBytes() {
      const buf = this.toBuffer();
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    /**
     * Return the Buffer representation of the public key in big endian
     */
    toBuffer() {
      const b2 = this._bn.toArrayLike(buffer.Buffer);
      if (b2.length === PUBLIC_KEY_LENGTH) {
        return b2;
      }
      const zeroPad = buffer.Buffer.alloc(32);
      b2.copy(zeroPad, 32 - b2.length);
      return zeroPad;
    }
    get [_Symbol$toStringTag]() {
      return `PublicKey(${this.toString()})`;
    }
    /**
     * Return the base-58 representation of the public key
     */
    toString() {
      return this.toBase58();
    }
    /**
     * Derive a public key from another key, a seed, and a program ID.
     * The program ID will also serve as the owner of the public key, giving
     * it permission to write data to the account.
     */
    /* eslint-disable require-await */
    static async createWithSeed(fromPublicKey, seed, programId) {
      const buffer$1 = buffer.Buffer.concat([fromPublicKey.toBuffer(), buffer.Buffer.from(seed), programId.toBuffer()]);
      const publicKeyBytes = sha256(buffer$1);
      return new PublicKey(publicKeyBytes);
    }
    /**
     * Derive a program address from seeds and a program ID.
     */
    /* eslint-disable require-await */
    static createProgramAddressSync(seeds, programId) {
      let buffer$1 = buffer.Buffer.alloc(0);
      seeds.forEach(function(seed) {
        if (seed.length > MAX_SEED_LENGTH) {
          throw new TypeError(`Max seed length exceeded`);
        }
        buffer$1 = buffer.Buffer.concat([buffer$1, toBuffer(seed)]);
      });
      buffer$1 = buffer.Buffer.concat([buffer$1, programId.toBuffer(), buffer.Buffer.from("ProgramDerivedAddress")]);
      const publicKeyBytes = sha256(buffer$1);
      if (isOnCurve(publicKeyBytes)) {
        throw new Error(`Invalid seeds, address must fall off the curve`);
      }
      return new PublicKey(publicKeyBytes);
    }
    /**
     * Async version of createProgramAddressSync
     * For backwards compatibility
     *
     * @deprecated Use {@link createProgramAddressSync} instead
     */
    /* eslint-disable require-await */
    static async createProgramAddress(seeds, programId) {
      return this.createProgramAddressSync(seeds, programId);
    }
    /**
     * Find a valid program address
     *
     * Valid program addresses must fall off the ed25519 curve.  This function
     * iterates a nonce until it finds one that when combined with the seeds
     * results in a valid program address.
     */
    static findProgramAddressSync(seeds, programId) {
      let nonce = 255;
      let address;
      while (nonce != 0) {
        try {
          const seedsWithNonce = seeds.concat(buffer.Buffer.from([nonce]));
          address = this.createProgramAddressSync(seedsWithNonce, programId);
        } catch (err) {
          if (err instanceof TypeError) {
            throw err;
          }
          nonce--;
          continue;
        }
        return [address, nonce];
      }
      throw new Error(`Unable to find a viable program address nonce`);
    }
    /**
     * Async version of findProgramAddressSync
     * For backwards compatibility
     *
     * @deprecated Use {@link findProgramAddressSync} instead
     */
    static async findProgramAddress(seeds, programId) {
      return this.findProgramAddressSync(seeds, programId);
    }
    /**
     * Check that a pubkey is on the ed25519 curve.
     */
    static isOnCurve(pubkeyData) {
      const pubkey = new PublicKey(pubkeyData);
      return isOnCurve(pubkey.toBytes());
    }
  }
  _class = PublicKey;
  PublicKey.default = new _class("11111111111111111111111111111111");
  SOLANA_SCHEMA.set(PublicKey, {
    kind: "struct",
    fields: [["_bn", "u256"]]
  });
  new PublicKey("BPFLoader1111111111111111111111111111111111");
  const SIGNATURE_LENGTH_IN_BYTES = 64;
  const publicKey = (property = "publicKey") => {
    return blob(32, property);
  };
  const rustString = (property = "string") => {
    const rsl = struct([u32("length"), u32("lengthPadding"), blob(offset(u32(), -8), "chars")], property);
    const _decode = rsl.decode.bind(rsl);
    const _encode = rsl.encode.bind(rsl);
    const rslShim = rsl;
    rslShim.decode = (b2, offset2) => {
      const data = _decode(b2, offset2);
      return data["chars"].toString();
    };
    rslShim.encode = (str, b2, offset2) => {
      const data = {
        chars: buffer.Buffer.from(str, "utf8")
      };
      return _encode(data, b2, offset2);
    };
    rslShim.alloc = (str) => {
      return u32().span + u32().span + buffer.Buffer.from(str, "utf8").length;
    };
    return rslShim;
  };
  const authorized = (property = "authorized") => {
    return struct([publicKey("staker"), publicKey("withdrawer")], property);
  };
  const lockup = (property = "lockup") => {
    return struct([ns64("unixTimestamp"), ns64("epoch"), publicKey("custodian")], property);
  };
  const voteInit = (property = "voteInit") => {
    return struct([publicKey("nodePubkey"), publicKey("authorizedVoter"), publicKey("authorizedWithdrawer"), u8("commission")], property);
  };
  const voteAuthorizeWithSeedArgs = (property = "voteAuthorizeWithSeedArgs") => {
    return struct([u32("voteAuthorizationType"), publicKey("currentAuthorityDerivedKeyOwnerPubkey"), rustString("currentAuthorityDerivedKeySeed"), publicKey("newAuthorized")], property);
  };
  buffer.Buffer.alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0);
  new PublicKey("SysvarC1ock11111111111111111111111111111111");
  new PublicKey("SysvarEpochSchedu1e111111111111111111111111");
  new PublicKey("Sysvar1nstructions1111111111111111111111111");
  new PublicKey("SysvarRecentB1ockHashes11111111111111111111");
  new PublicKey("SysvarRent111111111111111111111111111111111");
  new PublicKey("SysvarRewards111111111111111111111111111111");
  new PublicKey("SysvarS1otHashes111111111111111111111111111");
  new PublicKey("SysvarS1otHistory11111111111111111111111111");
  new PublicKey("SysvarStakeHistory1111111111111111111111111");
  const FeeCalculatorLayout = nu64("lamportsPerSignature");
  const NonceAccountLayout = struct([u32("version"), u32("state"), publicKey("authorizedPubkey"), publicKey("nonce"), struct([FeeCalculatorLayout], "feeCalculator")]);
  NonceAccountLayout.span;
  const encodeDecode = (layout) => {
    const decode = layout.decode.bind(layout);
    const encode = layout.encode.bind(layout);
    return {
      decode,
      encode
    };
  };
  const bigInt = (length) => (property) => {
    const layout = blob(length, property);
    const {
      encode,
      decode
    } = encodeDecode(layout);
    const bigIntLayout = layout;
    bigIntLayout.decode = (buffer$1, offset2) => {
      const src2 = decode(buffer$1, offset2);
      return toBigIntLE_1(buffer.Buffer.from(src2));
    };
    bigIntLayout.encode = (bigInt2, buffer2, offset2) => {
      const src2 = toBufferLE_1(bigInt2, length);
      return encode(src2, buffer2, offset2);
    };
    return bigIntLayout;
  };
  const u64 = bigInt(8);
  Object.freeze({
    Create: {
      index: 0,
      layout: struct([u32("instruction"), ns64("lamports"), ns64("space"), publicKey("programId")])
    },
    Assign: {
      index: 1,
      layout: struct([u32("instruction"), publicKey("programId")])
    },
    Transfer: {
      index: 2,
      layout: struct([u32("instruction"), u64("lamports")])
    },
    CreateWithSeed: {
      index: 3,
      layout: struct([u32("instruction"), publicKey("base"), rustString("seed"), ns64("lamports"), ns64("space"), publicKey("programId")])
    },
    AdvanceNonceAccount: {
      index: 4,
      layout: struct([u32("instruction")])
    },
    WithdrawNonceAccount: {
      index: 5,
      layout: struct([u32("instruction"), ns64("lamports")])
    },
    InitializeNonceAccount: {
      index: 6,
      layout: struct([u32("instruction"), publicKey("authorized")])
    },
    AuthorizeNonceAccount: {
      index: 7,
      layout: struct([u32("instruction"), publicKey("authorized")])
    },
    Allocate: {
      index: 8,
      layout: struct([u32("instruction"), ns64("space")])
    },
    AllocateWithSeed: {
      index: 9,
      layout: struct([u32("instruction"), publicKey("base"), rustString("seed"), ns64("space"), publicKey("programId")])
    },
    AssignWithSeed: {
      index: 10,
      layout: struct([u32("instruction"), publicKey("base"), rustString("seed"), publicKey("programId")])
    },
    TransferWithSeed: {
      index: 11,
      layout: struct([u32("instruction"), u64("lamports"), rustString("seed"), publicKey("programId")])
    },
    UpgradeNonceAccount: {
      index: 12,
      layout: struct([u32("instruction")])
    }
  });
  new PublicKey("11111111111111111111111111111111");
  new PublicKey("BPFLoader2111111111111111111111111111111111");
  ({
    index: 1,
    layout: struct([
      u32("typeIndex"),
      u64("deactivationSlot"),
      nu64("lastExtendedSlot"),
      u8("lastExtendedStartIndex"),
      u8(),
      // option
      seq(publicKey(), offset(u8(), -1), "authority")
    ])
  });
  const PublicKeyFromString = coerce(instance(PublicKey), string(), (value) => new PublicKey(value));
  const RawAccountDataResult = tuple([string(), literal("base64")]);
  const BufferFromRawAccountData = coerce(instance(buffer.Buffer), RawAccountDataResult, (value) => buffer.Buffer.from(value[0], "base64"));
  function createRpcResult(result) {
    return union([type({
      jsonrpc: literal("2.0"),
      id: string(),
      result
    }), type({
      jsonrpc: literal("2.0"),
      id: string(),
      error: type({
        code: unknown(),
        message: string(),
        data: optional(any())
      })
    })]);
  }
  const UnknownRpcResult = createRpcResult(unknown());
  function jsonRpcResult(schema) {
    return coerce(createRpcResult(schema), UnknownRpcResult, (value) => {
      if ("error" in value) {
        return value;
      } else {
        return {
          ...value,
          result: create(value.result, schema)
        };
      }
    });
  }
  function jsonRpcResultAndContext(value) {
    return jsonRpcResult(type({
      context: type({
        slot: number()
      }),
      value
    }));
  }
  function notificationResultAndContext(value) {
    return type({
      context: type({
        slot: number()
      }),
      value
    });
  }
  const GetInflationGovernorResult = type({
    foundation: number(),
    foundationTerm: number(),
    initial: number(),
    taper: number(),
    terminal: number()
  });
  jsonRpcResult(array(nullable(type({
    epoch: number(),
    effectiveSlot: number(),
    amount: number(),
    postBalance: number(),
    commission: optional(nullable(number()))
  }))));
  const GetRecentPrioritizationFeesResult = array(type({
    slot: number(),
    prioritizationFee: number()
  }));
  const GetInflationRateResult = type({
    total: number(),
    validator: number(),
    foundation: number(),
    epoch: number()
  });
  const GetEpochInfoResult = type({
    epoch: number(),
    slotIndex: number(),
    slotsInEpoch: number(),
    absoluteSlot: number(),
    blockHeight: optional(number()),
    transactionCount: optional(number())
  });
  const GetEpochScheduleResult = type({
    slotsPerEpoch: number(),
    leaderScheduleSlotOffset: number(),
    warmup: boolean(),
    firstNormalEpoch: number(),
    firstNormalSlot: number()
  });
  const GetLeaderScheduleResult = record(string(), array(number()));
  const TransactionErrorResult = nullable(union([type({}), string()]));
  const SignatureStatusResult = type({
    err: TransactionErrorResult
  });
  const SignatureReceivedResult = literal("receivedSignature");
  type({
    "solana-core": string(),
    "feature-set": optional(number())
  });
  jsonRpcResultAndContext(type({
    err: nullable(union([type({}), string()])),
    logs: nullable(array(string())),
    accounts: optional(nullable(array(nullable(type({
      executable: boolean(),
      owner: string(),
      lamports: number(),
      data: array(string()),
      rentEpoch: optional(number())
    }))))),
    unitsConsumed: optional(number()),
    returnData: optional(nullable(type({
      programId: string(),
      data: tuple([string(), literal("base64")])
    })))
  }));
  jsonRpcResultAndContext(type({
    byIdentity: record(string(), array(number())),
    range: type({
      firstSlot: number(),
      lastSlot: number()
    })
  }));
  jsonRpcResult(GetInflationGovernorResult);
  jsonRpcResult(GetInflationRateResult);
  jsonRpcResult(GetRecentPrioritizationFeesResult);
  jsonRpcResult(GetEpochInfoResult);
  jsonRpcResult(GetEpochScheduleResult);
  jsonRpcResult(GetLeaderScheduleResult);
  jsonRpcResult(number());
  jsonRpcResultAndContext(type({
    total: number(),
    circulating: number(),
    nonCirculating: number(),
    nonCirculatingAccounts: array(PublicKeyFromString)
  }));
  const TokenAmountResult = type({
    amount: string(),
    uiAmount: nullable(number()),
    decimals: number(),
    uiAmountString: optional(string())
  });
  jsonRpcResultAndContext(array(type({
    address: PublicKeyFromString,
    amount: string(),
    uiAmount: nullable(number()),
    decimals: number(),
    uiAmountString: optional(string())
  })));
  jsonRpcResultAndContext(array(type({
    pubkey: PublicKeyFromString,
    account: type({
      executable: boolean(),
      owner: PublicKeyFromString,
      lamports: number(),
      data: BufferFromRawAccountData,
      rentEpoch: number()
    })
  })));
  const ParsedAccountDataResult = type({
    program: string(),
    parsed: unknown(),
    space: number()
  });
  jsonRpcResultAndContext(array(type({
    pubkey: PublicKeyFromString,
    account: type({
      executable: boolean(),
      owner: PublicKeyFromString,
      lamports: number(),
      data: ParsedAccountDataResult,
      rentEpoch: number()
    })
  })));
  jsonRpcResultAndContext(array(type({
    lamports: number(),
    address: PublicKeyFromString
  })));
  const AccountInfoResult = type({
    executable: boolean(),
    owner: PublicKeyFromString,
    lamports: number(),
    data: BufferFromRawAccountData,
    rentEpoch: number()
  });
  type({
    pubkey: PublicKeyFromString,
    account: AccountInfoResult
  });
  const ParsedOrRawAccountData = coerce(union([instance(buffer.Buffer), ParsedAccountDataResult]), union([RawAccountDataResult, ParsedAccountDataResult]), (value) => {
    if (Array.isArray(value)) {
      return create(value, BufferFromRawAccountData);
    } else {
      return value;
    }
  });
  const ParsedAccountInfoResult = type({
    executable: boolean(),
    owner: PublicKeyFromString,
    lamports: number(),
    data: ParsedOrRawAccountData,
    rentEpoch: number()
  });
  type({
    pubkey: PublicKeyFromString,
    account: ParsedAccountInfoResult
  });
  type({
    state: union([literal("active"), literal("inactive"), literal("activating"), literal("deactivating")]),
    active: number(),
    inactive: number()
  });
  jsonRpcResult(array(type({
    signature: string(),
    slot: number(),
    err: TransactionErrorResult,
    memo: nullable(string()),
    blockTime: optional(nullable(number()))
  })));
  jsonRpcResult(array(type({
    signature: string(),
    slot: number(),
    err: TransactionErrorResult,
    memo: nullable(string()),
    blockTime: optional(nullable(number()))
  })));
  type({
    subscription: number(),
    result: notificationResultAndContext(AccountInfoResult)
  });
  const ProgramAccountInfoResult = type({
    pubkey: PublicKeyFromString,
    account: AccountInfoResult
  });
  type({
    subscription: number(),
    result: notificationResultAndContext(ProgramAccountInfoResult)
  });
  const SlotInfoResult = type({
    parent: number(),
    slot: number(),
    root: number()
  });
  type({
    subscription: number(),
    result: SlotInfoResult
  });
  const SlotUpdateResult = union([type({
    type: union([literal("firstShredReceived"), literal("completed"), literal("optimisticConfirmation"), literal("root")]),
    slot: number(),
    timestamp: number()
  }), type({
    type: literal("createdBank"),
    parent: number(),
    slot: number(),
    timestamp: number()
  }), type({
    type: literal("frozen"),
    slot: number(),
    timestamp: number(),
    stats: type({
      numTransactionEntries: number(),
      numSuccessfulTransactions: number(),
      numFailedTransactions: number(),
      maxTransactionsPerEntry: number()
    })
  }), type({
    type: literal("dead"),
    slot: number(),
    timestamp: number(),
    err: string()
  })]);
  type({
    subscription: number(),
    result: SlotUpdateResult
  });
  type({
    subscription: number(),
    result: notificationResultAndContext(union([SignatureStatusResult, SignatureReceivedResult]))
  });
  type({
    subscription: number(),
    result: number()
  });
  type({
    pubkey: string(),
    gossip: nullable(string()),
    tpu: nullable(string()),
    rpc: nullable(string()),
    version: nullable(string())
  });
  const VoteAccountInfoResult = type({
    votePubkey: string(),
    nodePubkey: string(),
    activatedStake: number(),
    epochVoteAccount: boolean(),
    epochCredits: array(tuple([number(), number(), number()])),
    commission: number(),
    lastVote: number(),
    rootSlot: nullable(number())
  });
  jsonRpcResult(type({
    current: array(VoteAccountInfoResult),
    delinquent: array(VoteAccountInfoResult)
  }));
  const ConfirmationStatus = union([literal("processed"), literal("confirmed"), literal("finalized")]);
  const SignatureStatusResponse = type({
    slot: number(),
    confirmations: nullable(number()),
    err: TransactionErrorResult,
    confirmationStatus: optional(ConfirmationStatus)
  });
  jsonRpcResultAndContext(array(nullable(SignatureStatusResponse)));
  jsonRpcResult(number());
  const AddressTableLookupStruct = type({
    accountKey: PublicKeyFromString,
    writableIndexes: array(number()),
    readonlyIndexes: array(number())
  });
  const ConfirmedTransactionResult = type({
    signatures: array(string()),
    message: type({
      accountKeys: array(string()),
      header: type({
        numRequiredSignatures: number(),
        numReadonlySignedAccounts: number(),
        numReadonlyUnsignedAccounts: number()
      }),
      instructions: array(type({
        accounts: array(number()),
        data: string(),
        programIdIndex: number()
      })),
      recentBlockhash: string(),
      addressTableLookups: optional(array(AddressTableLookupStruct))
    })
  });
  const AnnotatedAccountKey = type({
    pubkey: PublicKeyFromString,
    signer: boolean(),
    writable: boolean(),
    source: optional(union([literal("transaction"), literal("lookupTable")]))
  });
  const ConfirmedTransactionAccountsModeResult = type({
    accountKeys: array(AnnotatedAccountKey),
    signatures: array(string())
  });
  const ParsedInstructionResult = type({
    parsed: unknown(),
    program: string(),
    programId: PublicKeyFromString
  });
  const RawInstructionResult = type({
    accounts: array(PublicKeyFromString),
    data: string(),
    programId: PublicKeyFromString
  });
  const InstructionResult = union([RawInstructionResult, ParsedInstructionResult]);
  const UnknownInstructionResult = union([type({
    parsed: unknown(),
    program: string(),
    programId: string()
  }), type({
    accounts: array(string()),
    data: string(),
    programId: string()
  })]);
  const ParsedOrRawInstruction = coerce(InstructionResult, UnknownInstructionResult, (value) => {
    if ("accounts" in value) {
      return create(value, RawInstructionResult);
    } else {
      return create(value, ParsedInstructionResult);
    }
  });
  const ParsedConfirmedTransactionResult = type({
    signatures: array(string()),
    message: type({
      accountKeys: array(AnnotatedAccountKey),
      instructions: array(ParsedOrRawInstruction),
      recentBlockhash: string(),
      addressTableLookups: optional(nullable(array(AddressTableLookupStruct)))
    })
  });
  const TokenBalanceResult = type({
    accountIndex: number(),
    mint: string(),
    owner: optional(string()),
    uiTokenAmount: TokenAmountResult
  });
  const LoadedAddressesResult = type({
    writable: array(PublicKeyFromString),
    readonly: array(PublicKeyFromString)
  });
  const ConfirmedTransactionMetaResult = type({
    err: TransactionErrorResult,
    fee: number(),
    innerInstructions: optional(nullable(array(type({
      index: number(),
      instructions: array(type({
        accounts: array(number()),
        data: string(),
        programIdIndex: number()
      }))
    })))),
    preBalances: array(number()),
    postBalances: array(number()),
    logMessages: optional(nullable(array(string()))),
    preTokenBalances: optional(nullable(array(TokenBalanceResult))),
    postTokenBalances: optional(nullable(array(TokenBalanceResult))),
    loadedAddresses: optional(LoadedAddressesResult),
    computeUnitsConsumed: optional(number())
  });
  const ParsedConfirmedTransactionMetaResult = type({
    err: TransactionErrorResult,
    fee: number(),
    innerInstructions: optional(nullable(array(type({
      index: number(),
      instructions: array(ParsedOrRawInstruction)
    })))),
    preBalances: array(number()),
    postBalances: array(number()),
    logMessages: optional(nullable(array(string()))),
    preTokenBalances: optional(nullable(array(TokenBalanceResult))),
    postTokenBalances: optional(nullable(array(TokenBalanceResult))),
    loadedAddresses: optional(LoadedAddressesResult),
    computeUnitsConsumed: optional(number())
  });
  const TransactionVersionStruct = union([literal(0), literal("legacy")]);
  const RewardsResult = type({
    pubkey: string(),
    lamports: number(),
    postBalance: nullable(number()),
    rewardType: nullable(string()),
    commission: optional(nullable(number()))
  });
  jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    transactions: array(type({
      transaction: ConfirmedTransactionResult,
      meta: nullable(ConfirmedTransactionMetaResult),
      version: optional(TransactionVersionStruct)
    })),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    transactions: array(type({
      transaction: ConfirmedTransactionAccountsModeResult,
      meta: nullable(ConfirmedTransactionMetaResult),
      version: optional(TransactionVersionStruct)
    })),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    transactions: array(type({
      transaction: ParsedConfirmedTransactionResult,
      meta: nullable(ParsedConfirmedTransactionMetaResult),
      version: optional(TransactionVersionStruct)
    })),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    transactions: array(type({
      transaction: ConfirmedTransactionAccountsModeResult,
      meta: nullable(ParsedConfirmedTransactionMetaResult),
      version: optional(TransactionVersionStruct)
    })),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    transactions: array(type({
      transaction: ConfirmedTransactionResult,
      meta: nullable(ConfirmedTransactionMetaResult)
    })),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number())
  })));
  jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    signatures: array(string()),
    blockTime: nullable(number())
  })));
  jsonRpcResult(nullable(type({
    slot: number(),
    meta: nullable(ConfirmedTransactionMetaResult),
    blockTime: optional(nullable(number())),
    transaction: ConfirmedTransactionResult,
    version: optional(TransactionVersionStruct)
  })));
  jsonRpcResult(nullable(type({
    slot: number(),
    transaction: ParsedConfirmedTransactionResult,
    meta: nullable(ParsedConfirmedTransactionMetaResult),
    blockTime: optional(nullable(number())),
    version: optional(TransactionVersionStruct)
  })));
  jsonRpcResultAndContext(type({
    blockhash: string(),
    feeCalculator: type({
      lamportsPerSignature: number()
    })
  }));
  jsonRpcResultAndContext(type({
    blockhash: string(),
    lastValidBlockHeight: number()
  }));
  jsonRpcResultAndContext(boolean());
  const PerfSampleResult = type({
    slot: number(),
    numTransactions: number(),
    numSlots: number(),
    samplePeriodSecs: number()
  });
  jsonRpcResult(array(PerfSampleResult));
  jsonRpcResultAndContext(nullable(type({
    feeCalculator: type({
      lamportsPerSignature: number()
    })
  })));
  jsonRpcResult(string());
  jsonRpcResult(string());
  const LogsResult = type({
    err: TransactionErrorResult,
    logs: array(string()),
    signature: string()
  });
  type({
    result: notificationResultAndContext(LogsResult),
    subscription: number()
  });
  class Keypair {
    /**
     * Create a new keypair instance.
     * Generate random keypair if no {@link Ed25519Keypair} is provided.
     *
     * @param {Ed25519Keypair} keypair ed25519 keypair
     */
    constructor(keypair) {
      this._keypair = void 0;
      this._keypair = keypair ?? generateKeypair();
    }
    /**
     * Generate a new random keypair
     *
     * @returns {Keypair} Keypair
     */
    static generate() {
      return new Keypair(generateKeypair());
    }
    /**
     * Create a keypair from a raw secret key byte array.
     *
     * This method should only be used to recreate a keypair from a previously
     * generated secret key. Generating keypairs from a random seed should be done
     * with the {@link Keypair.fromSeed} method.
     *
     * @throws error if the provided secret key is invalid and validation is not skipped.
     *
     * @param secretKey secret key byte array
     * @param options skip secret key validation
     *
     * @returns {Keypair} Keypair
     */
    static fromSecretKey(secretKey, options) {
      if (secretKey.byteLength !== 64) {
        throw new Error("bad secret key size");
      }
      const publicKey2 = secretKey.slice(32, 64);
      if (!options || !options.skipValidation) {
        const privateScalar = secretKey.slice(0, 32);
        const computedPublicKey = getPublicKey(privateScalar);
        for (let ii = 0; ii < 32; ii++) {
          if (publicKey2[ii] !== computedPublicKey[ii]) {
            throw new Error("provided secretKey is invalid");
          }
        }
      }
      return new Keypair({
        publicKey: publicKey2,
        secretKey
      });
    }
    /**
     * Generate a keypair from a 32 byte seed.
     *
     * @param seed seed byte array
     *
     * @returns {Keypair} Keypair
     */
    static fromSeed(seed) {
      const publicKey2 = getPublicKey(seed);
      const secretKey = new Uint8Array(64);
      secretKey.set(seed);
      secretKey.set(publicKey2, 32);
      return new Keypair({
        publicKey: publicKey2,
        secretKey
      });
    }
    /**
     * The public key for this keypair
     *
     * @returns {PublicKey} PublicKey
     */
    get publicKey() {
      return new PublicKey(this._keypair.publicKey);
    }
    /**
     * The raw secret key for this keypair
     * @returns {Uint8Array} Secret key in an array of Uint8 bytes
     */
    get secretKey() {
      return new Uint8Array(this._keypair.secretKey);
    }
  }
  Object.freeze({
    CreateLookupTable: {
      index: 0,
      layout: struct([u32("instruction"), u64("recentSlot"), u8("bumpSeed")])
    },
    FreezeLookupTable: {
      index: 1,
      layout: struct([u32("instruction")])
    },
    ExtendLookupTable: {
      index: 2,
      layout: struct([u32("instruction"), u64(), seq(publicKey(), offset(u32(), -8), "addresses")])
    },
    DeactivateLookupTable: {
      index: 3,
      layout: struct([u32("instruction")])
    },
    CloseLookupTable: {
      index: 4,
      layout: struct([u32("instruction")])
    }
  });
  new PublicKey("AddressLookupTab1e1111111111111111111111111");
  Object.freeze({
    RequestUnits: {
      index: 0,
      layout: struct([u8("instruction"), u32("units"), u32("additionalFee")])
    },
    RequestHeapFrame: {
      index: 1,
      layout: struct([u8("instruction"), u32("bytes")])
    },
    SetComputeUnitLimit: {
      index: 2,
      layout: struct([u8("instruction"), u32("units")])
    },
    SetComputeUnitPrice: {
      index: 3,
      layout: struct([u8("instruction"), u64("microLamports")])
    }
  });
  new PublicKey("ComputeBudget111111111111111111111111111111");
  struct([u8("numSignatures"), u8("padding"), u16("signatureOffset"), u16("signatureInstructionIndex"), u16("publicKeyOffset"), u16("publicKeyInstructionIndex"), u16("messageDataOffset"), u16("messageDataSize"), u16("messageInstructionIndex")]);
  new PublicKey("Ed25519SigVerify111111111111111111111111111");
  secp256k1.utils.isValidPrivateKey;
  secp256k1.getPublicKey;
  struct([u8("numSignatures"), u16("signatureOffset"), u8("signatureInstructionIndex"), u16("ethAddressOffset"), u8("ethAddressInstructionIndex"), u16("messageDataOffset"), u16("messageDataSize"), u8("messageInstructionIndex"), blob(20, "ethAddress"), blob(64, "signature"), u8("recoveryId")]);
  new PublicKey("KeccakSecp256k11111111111111111111111111111");
  var _class2;
  new PublicKey("StakeConfig11111111111111111111111111111111");
  class Lockup {
    /**
     * Create a new Lockup object
     */
    constructor(unixTimestamp, epoch, custodian) {
      this.unixTimestamp = void 0;
      this.epoch = void 0;
      this.custodian = void 0;
      this.unixTimestamp = unixTimestamp;
      this.epoch = epoch;
      this.custodian = custodian;
    }
    /**
     * Default, inactive Lockup value
     */
  }
  _class2 = Lockup;
  Lockup.default = new _class2(0, 0, PublicKey.default);
  Object.freeze({
    Initialize: {
      index: 0,
      layout: struct([u32("instruction"), authorized(), lockup()])
    },
    Authorize: {
      index: 1,
      layout: struct([u32("instruction"), publicKey("newAuthorized"), u32("stakeAuthorizationType")])
    },
    Delegate: {
      index: 2,
      layout: struct([u32("instruction")])
    },
    Split: {
      index: 3,
      layout: struct([u32("instruction"), ns64("lamports")])
    },
    Withdraw: {
      index: 4,
      layout: struct([u32("instruction"), ns64("lamports")])
    },
    Deactivate: {
      index: 5,
      layout: struct([u32("instruction")])
    },
    Merge: {
      index: 7,
      layout: struct([u32("instruction")])
    },
    AuthorizeWithSeed: {
      index: 8,
      layout: struct([u32("instruction"), publicKey("newAuthorized"), u32("stakeAuthorizationType"), rustString("authoritySeed"), publicKey("authorityOwner")])
    }
  });
  new PublicKey("Stake11111111111111111111111111111111111111");
  Object.freeze({
    InitializeAccount: {
      index: 0,
      layout: struct([u32("instruction"), voteInit()])
    },
    Authorize: {
      index: 1,
      layout: struct([u32("instruction"), publicKey("newAuthorized"), u32("voteAuthorizationType")])
    },
    Withdraw: {
      index: 3,
      layout: struct([u32("instruction"), ns64("lamports")])
    },
    UpdateValidatorIdentity: {
      index: 4,
      layout: struct([u32("instruction")])
    },
    AuthorizeWithSeed: {
      index: 10,
      layout: struct([u32("instruction"), voteAuthorizeWithSeedArgs()])
    }
  });
  new PublicKey("Vote111111111111111111111111111111111111111");
  new PublicKey("Va1idator1nfo111111111111111111111111111111");
  type({
    name: string(),
    website: optional(string()),
    details: optional(string()),
    keybaseUsername: optional(string())
  });
  new PublicKey("Vote111111111111111111111111111111111111111");
  struct([
    publicKey("nodePubkey"),
    publicKey("authorizedWithdrawer"),
    u8("commission"),
    nu64(),
    // votes.length
    seq(struct([nu64("slot"), u32("confirmationCount")]), offset(u32(), -8), "votes"),
    u8("rootSlotValid"),
    nu64("rootSlot"),
    nu64(),
    // authorizedVoters.length
    seq(struct([nu64("epoch"), publicKey("authorizedVoter")]), offset(u32(), -8), "authorizedVoters"),
    struct([seq(struct([publicKey("authorizedPubkey"), nu64("epochOfLastAuthorizedSwitch"), nu64("targetEpoch")]), 32, "buf"), nu64("idx"), u8("isEmpty")], "priorVoters"),
    nu64(),
    // epochCredits.length
    seq(struct([nu64("epoch"), nu64("credits"), nu64("prevCredits")]), offset(u32(), -8), "epochCredits"),
    struct([nu64("slot"), nu64("timestamp")], "lastTimestamp")
  ]);
  const _sfc_main$1 = {
    data() {
      return {
        chooseCoin: 0,
        coins: [{
          value: 0,
          text: "SOL"
        }],
        count: "10",
        adds: []
      };
    },
    methods: {
      change(e2) {
        this.chooseCoin = e2;
        formatAppLog("log", "at pages/adds_manager/adds_manager.vue:62", "e:", e2);
      },
      async createAdds() {
        try {
          uni.showLoading({
            title: "正在创建中..."
          });
          var data = [];
          for (var i2 = 0; i2 < parseInt(this.count); i2++) {
            const randomBytes2 = new Uint8Array(32);
            $inject_window_crypto.getRandomValues(randomBytes2);
            uni.showLoading({
              title: data
            });
            var pair = Keypair.fromSeed(randomBytes2);
            var prvBytes = this.byteToHex(pair.secretKey);
            var info = {
              "coin": this.coins[this.chooseCoin].text,
              "adds": pair.publicKey.toBase58(),
              "prv": prvBytes
            };
            data.push(info);
          }
          this.adds = data;
          formatAppLog("log", "at pages/adds_manager/adds_manager.vue:87", data);
          uni.hideLoading();
        } catch (e2) {
          uni.hideLoading();
          uni.showToast({
            "icon": "fail",
            title: e2.message
          });
        }
      },
      exportAdds() {
        if (this.adds.length == 0) {
          uni.showToast({
            title: "请先生成地址",
            icon: "error"
          });
          return;
        }
        const jsonData = JSON.stringify(this.adds);
        formatAppLog("log", "at pages/adds_manager/adds_manager.vue:107", jsonData);
        this.exportToExcel(jsonData, "Sheet1", "地址数据");
      },
      byteToHex(byte) {
        const key = "0123456789abcdef";
        let bytes2 = new Uint8Array(byte);
        let newHex = "";
        let currentChar = 0;
        for (let i2 = 0; i2 < bytes2.length; i2++) {
          currentChar = bytes2[i2] >> 4;
          newHex += key[currentChar];
          currentChar = bytes2[i2] & 15;
          newHex += key[currentChar];
        }
        return newHex;
      },
      exportToExcel(data, sheetName, fileName) {
        uni.saveFile({});
        uni.shareWithSystem({
          summary: data
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_0);
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1);
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("div", { style: { "margin-left": "20px", "margin-right": "20px", "margin-bottom": "20px" } }, [
      vue.createVNode(_component_uni_section, {
        title: "选择链",
        type: "line"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_data_select, {
            clear: false,
            modelValue: $data.chooseCoin,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.chooseCoin = $event),
            localdata: $data.coins,
            onChange: $options.change
          }, null, 8, ["modelValue", "localdata", "onChange"])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_uni_section, {
        title: "钱包数量",
        type: "line"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_easyinput, {
            type: "number",
            modelValue: $data.count,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.count = $event),
            placeholder: "钱包数量"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("div", { style: { "display": "flex" } }, [
        vue.createElementVNode("button", {
          style: { "margin-top": "20px" },
          type: "primary",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.createAdds && $options.createAdds(...args))
        }, "创建地址"),
        vue.createElementVNode("button", {
          style: { "margin-top": "20px" },
          type: "primary",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.exportAdds && $options.exportAdds(...args))
        }, "导出地址")
      ]),
      vue.createVNode(_component_uni_section, {
        title: "地址数据",
        type: "line"
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.adds, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                style: { "background-color": "aliceblue", "margin-bottom": "20px", "display": "flex" },
                key: index
              }, [
                vue.createElementVNode(
                  "div",
                  { class: "index-text" },
                  vue.toDisplayString(index + 1),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("div", { style: { "background-color": "transparent", "padding": "20px" } }, [
                  vue.createElementVNode("div", { style: { "display": "flex" } }, [
                    vue.createElementVNode(
                      "div",
                      { class: "long-text" },
                      " 地址：" + vue.toDisplayString(item.adds),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode(
                    "div",
                    { class: "long-text" },
                    " 128私钥：" + vue.toDisplayString(item.prv),
                    1
                    /* TEXT */
                  )
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesAdds_managerAdds_manager = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/windpro/Documents/Code/cryptorobot_frontend/pages/adds_manager/adds_manager.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/adds_manager/adds_manager", PagesAdds_managerAdds_manager);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/windpro/Documents/Code/cryptorobot_frontend/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
