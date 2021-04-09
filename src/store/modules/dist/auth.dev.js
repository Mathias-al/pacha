"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = require("@/api/user");

var _router = _interopRequireDefault(require("@/router"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = {
  isLoading: false,
  creditStatus: false,
  token: null,
  refreshToken: null,
  userData: '',
  cartList: [],
  cartLength: '',
  favList: [],
  showEmailBox: false,
  avatar64: '',
  userCity: '桃園市',
  userDistrict: '中壢區',
  userAddress: '',
  location: []
};
var getters = {
  isLoading: function isLoading(state) {
    return state.isLoading;
  },
  creditStatus: function creditStatus(state) {
    return state.creditStatus;
  },
  isAuthenticated: function isAuthenticated(state) {
    return state.token !== null;
  },
  token: function token(state) {
    return state.token;
  },
  refreshToken: function refreshToken(state) {
    return state.refreshToken;
  },
  userData: function userData(state) {
    return state.userData;
  },
  cartList: function cartList(state) {
    return state.cartList;
  },
  couponList: function couponList(state) {
    return state.userData.couponList;
  },
  cartLength: function cartLength(state) {
    return state.cartLength;
  },
  favList: function favList(state) {
    return state.favList;
  },
  showEmailBox: function showEmailBox(state) {
    return state.showEmailBox;
  },
  avatar64: function avatar64(state) {
    return state.avatar64;
  },
  userAddress: function userAddress(state) {
    return state.userAddress;
  },
  userDistrict: function userDistrict(state) {
    return state.userDistrict;
  },
  userCity: function userCity(state) {
    return state.userCity;
  },
  cityList: function cityList(state) {
    return state.location.map(function (item) {
      return item.name;
    });
  },
  districtList: function districtList(state) {
    return state.location.filter(function (item) {
      if (item.name === state.userCity) {
        return item.name === state.userCity;
      }
    }).map(function (d) {
      return d.districts;
    });
  }
};
var actions = {
  signInOrUp: function signInOrUp(_ref, data) {
    var commit, state, alertText, res, _res$data$result, token, refreshToken, user, error;

    return regeneratorRuntime.async(function signInOrUp$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state;
            _context.prev = 1;
            alertText = data.captchaText ? 'logged in!' : 'registered';

            if (!data.captchaText) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return regeneratorRuntime.awrap((0, _user.userLogin)(data));

          case 6:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return regeneratorRuntime.awrap((0, _user.userRegister)(data));

          case 11:
            _context.t0 = _context.sent;

          case 12:
            res = _context.t0;
            _res$data$result = res.data.result, token = _res$data$result.token, refreshToken = _res$data$result.refreshToken, user = _res$data$result.user;

            _jsCookie["default"].set('token', token, {
              expires: 6
            });

            _jsCookie["default"].set('refreshToken', refreshToken, {
              expires: 29
            });

            commit('setToken', token);
            commit('setRefreshToken', refreshToken);
            commit('setUserData', user);
            commit('setCart', state.userData.cartList);
            commit('setCartLength', state.userData.cartList.length);
            commit('setFavList', state.userData.favList);

            this._vm.$swal({
              icon: 'success',
              title: 'Success',
              text: "You have successfully ".concat(alertText)
            });

            _router["default"].push('/');

            _context.next = 31;
            break;

          case 26:
            _context.prev = 26;
            _context.t1 = _context["catch"](1);

            if (!_context.t1.response) {
              _context.next = 31;
              break;
            }

            error = _context.t1.response.data.msg;
            throw error;

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, null, this, [[1, 26]]);
  },
  logout: function logout(_ref2) {
    var commit;
    return regeneratorRuntime.async(function logout$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            commit("clearAll");

            _jsCookie["default"].remove("token");

            _jsCookie["default"].remove("refreshToken");

            this._vm.$swal({
              icon: 'success',
              title: 'SUCCESS!',
              text: 'You have been successfully logged out! '
            });

            _router["default"].push('/');

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this);
  }
};
var mutations = {
  setLocation: function setLocation(state, data) {
    state.location = data;
  },
  setLoading: function setLoading(state, data) {
    state.isLoading = data;
  },
  setCreditStatus: function setCreditStatus(state, data) {
    state.creditStatus = data;
  },
  setUserAddress: function setUserAddress(state, data) {
    state.userAddress = data;
  },
  setUserCity: function setUserCity(state, data) {
    state.userCity = data;
  },
  setUserDistrict: function setUserDistrict(state, data) {
    state.userDistrict = data;
  },
  setAvatar: function setAvatar(state, data) {
    state.avatar64 = data;
  },
  toggleEmailBox: function toggleEmailBox(state, data) {
    state.showEmailBox = data;
  },
  setToken: function setToken(state, token) {
    state.token = token;
  },
  setRefreshToken: function setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken;
  },
  setUserData: function setUserData(state, userData) {
    state.userData = userData;
  },
  clearAll: function clearAll(state) {
    state.token = null;
    state.cartList = [];
    state.cartLength = '';
    state.favList = [];
    state.refreshToken = null;
    state.userData = null;
    state.avatar64 = null;
  },
  setCart: function setCart(state, cart) {
    state.cartList = cart;
  },
  setCartLength: function setCartLength(state, length) {
    state.cartLength = length;
  },
  setFavList: function setFavList(state, data) {
    state.favList = data;
  }
};
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  namespaced: true
};
exports["default"] = _default;