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
  function formatAppLog(type2, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type2, filename, ...args);
    } else {
      console[type2].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom2) {
    return typeof component === "string" ? easycom2 : component;
  }
  const icons = {
    "uicon-level": "",
    "uicon-column-line": "",
    "uicon-checkbox-mark": "",
    "uicon-folder": "",
    "uicon-movie": "",
    "uicon-star-fill": "",
    "uicon-star": "",
    "uicon-phone-fill": "",
    "uicon-phone": "",
    "uicon-apple-fill": "",
    "uicon-chrome-circle-fill": "",
    "uicon-backspace": "",
    "uicon-attach": "",
    "uicon-cut": "",
    "uicon-empty-car": "",
    "uicon-empty-coupon": "",
    "uicon-empty-address": "",
    "uicon-empty-favor": "",
    "uicon-empty-permission": "",
    "uicon-empty-news": "",
    "uicon-empty-search": "",
    "uicon-github-circle-fill": "",
    "uicon-rmb": "",
    "uicon-person-delete-fill": "",
    "uicon-reload": "",
    "uicon-order": "",
    "uicon-server-man": "",
    "uicon-search": "",
    "uicon-fingerprint": "",
    "uicon-more-dot-fill": "",
    "uicon-scan": "",
    "uicon-share-square": "",
    "uicon-map": "",
    "uicon-map-fill": "",
    "uicon-tags": "",
    "uicon-tags-fill": "",
    "uicon-bookmark-fill": "",
    "uicon-bookmark": "",
    "uicon-eye": "",
    "uicon-eye-fill": "",
    "uicon-mic": "",
    "uicon-mic-off": "",
    "uicon-calendar": "",
    "uicon-calendar-fill": "",
    "uicon-trash": "",
    "uicon-trash-fill": "",
    "uicon-play-left": "",
    "uicon-play-right": "",
    "uicon-minus": "",
    "uicon-plus": "",
    "uicon-info": "",
    "uicon-info-circle": "",
    "uicon-info-circle-fill": "",
    "uicon-question": "",
    "uicon-error": "",
    "uicon-close": "",
    "uicon-checkmark": "",
    "uicon-android-circle-fill": "",
    "uicon-android-fill": "",
    "uicon-ie": "",
    "uicon-IE-circle-fill": "",
    "uicon-google": "",
    "uicon-google-circle-fill": "",
    "uicon-setting-fill": "",
    "uicon-setting": "",
    "uicon-minus-square-fill": "",
    "uicon-plus-square-fill": "",
    "uicon-heart": "",
    "uicon-heart-fill": "",
    "uicon-camera": "",
    "uicon-camera-fill": "",
    "uicon-more-circle": "",
    "uicon-more-circle-fill": "",
    "uicon-chat": "",
    "uicon-chat-fill": "",
    "uicon-bag-fill": "",
    "uicon-bag": "",
    "uicon-error-circle-fill": "",
    "uicon-error-circle": "",
    "uicon-close-circle": "",
    "uicon-close-circle-fill": "",
    "uicon-checkmark-circle": "",
    "uicon-checkmark-circle-fill": "",
    "uicon-question-circle-fill": "",
    "uicon-question-circle": "",
    "uicon-share": "",
    "uicon-share-fill": "",
    "uicon-shopping-cart": "",
    "uicon-shopping-cart-fill": "",
    "uicon-bell": "",
    "uicon-bell-fill": "",
    "uicon-list": "",
    "uicon-list-dot": "",
    "uicon-zhihu": "",
    "uicon-zhihu-circle-fill": "",
    "uicon-zhifubao": "",
    "uicon-zhifubao-circle-fill": "",
    "uicon-weixin-circle-fill": "",
    "uicon-weixin-fill": "",
    "uicon-twitter-circle-fill": "",
    "uicon-twitter": "",
    "uicon-taobao-circle-fill": "",
    "uicon-taobao": "",
    "uicon-weibo-circle-fill": "",
    "uicon-weibo": "",
    "uicon-qq-fill": "",
    "uicon-qq-circle-fill": "",
    "uicon-moments-circel-fill": "",
    "uicon-moments": "",
    "uicon-qzone": "",
    "uicon-qzone-circle-fill": "",
    "uicon-baidu-circle-fill": "",
    "uicon-baidu": "",
    "uicon-facebook-circle-fill": "",
    "uicon-facebook": "",
    "uicon-car": "",
    "uicon-car-fill": "",
    "uicon-warning-fill": "",
    "uicon-warning": "",
    "uicon-clock-fill": "",
    "uicon-clock": "",
    "uicon-edit-pen": "",
    "uicon-edit-pen-fill": "",
    "uicon-email": "",
    "uicon-email-fill": "",
    "uicon-minus-circle": "",
    "uicon-minus-circle-fill": "",
    "uicon-plus-circle": "",
    "uicon-plus-circle-fill": "",
    "uicon-file-text": "",
    "uicon-file-text-fill": "",
    "uicon-pushpin": "",
    "uicon-pushpin-fill": "",
    "uicon-grid": "",
    "uicon-grid-fill": "",
    "uicon-play-circle": "",
    "uicon-play-circle-fill": "",
    "uicon-pause-circle-fill": "",
    "uicon-pause": "",
    "uicon-pause-circle": "",
    "uicon-eye-off": "",
    "uicon-eye-off-outline": "",
    "uicon-gift-fill": "",
    "uicon-gift": "",
    "uicon-rmb-circle-fill": "",
    "uicon-rmb-circle": "",
    "uicon-kefu-ermai": "",
    "uicon-server-fill": "",
    "uicon-coupon-fill": "",
    "uicon-coupon": "",
    "uicon-integral": "",
    "uicon-integral-fill": "",
    "uicon-home-fill": "",
    "uicon-home": "",
    "uicon-hourglass-half-fill": "",
    "uicon-hourglass": "",
    "uicon-account": "",
    "uicon-plus-people-fill": "",
    "uicon-minus-people-fill": "",
    "uicon-account-fill": "",
    "uicon-thumb-down-fill": "",
    "uicon-thumb-down": "",
    "uicon-thumb-up": "",
    "uicon-thumb-up-fill": "",
    "uicon-lock-fill": "",
    "uicon-lock-open": "",
    "uicon-lock-opened-fill": "",
    "uicon-lock": "",
    "uicon-red-packet-fill": "",
    "uicon-photo-fill": "",
    "uicon-photo": "",
    "uicon-volume-off-fill": "",
    "uicon-volume-off": "",
    "uicon-volume-fill": "",
    "uicon-volume": "",
    "uicon-red-packet": "",
    "uicon-download": "",
    "uicon-arrow-up-fill": "",
    "uicon-arrow-down-fill": "",
    "uicon-play-left-fill": "",
    "uicon-play-right-fill": "",
    "uicon-rewind-left-fill": "",
    "uicon-rewind-right-fill": "",
    "uicon-arrow-downward": "",
    "uicon-arrow-leftward": "",
    "uicon-arrow-rightward": "",
    "uicon-arrow-upward": "",
    "uicon-arrow-down": "",
    "uicon-arrow-right": "",
    "uicon-arrow-left": "",
    "uicon-arrow-up": "",
    "uicon-skip-back-left": "",
    "uicon-skip-forward-right": "",
    "uicon-rewind-right": "",
    "uicon-rewind-left": "",
    "uicon-arrow-right-double": "",
    "uicon-arrow-left-double": "",
    "uicon-wifi-off": "",
    "uicon-wifi": "",
    "uicon-empty-data": "",
    "uicon-empty-history": "",
    "uicon-empty-list": "",
    "uicon-empty-page": "",
    "uicon-empty-order": "",
    "uicon-man": "",
    "uicon-woman": "",
    "uicon-man-add": "",
    "uicon-man-add-fill": "",
    "uicon-man-delete": "",
    "uicon-man-delete-fill": "",
    "uicon-zh": "",
    "uicon-en": ""
  };
  const defineMixin = (options) => {
    return options;
  };
  const version = "3";
  {
    formatAppLog("log", "at node_modules/uview-plus/libs/config/config.js:5", `
 %c uview-plus V${version} %c https://ijry.github.io/uview-plus/ 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  const config = {
    v: version,
    version,
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc"
    },
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
  };
  const ActionSheet = {
    // action-sheet组件
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0
    }
  };
  const Album = {
    // album 组件
    album: {
      urls: [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true
    }
  };
  const Alert = {
    // alert警告组件
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  const Avatar = {
    // avatar 组件
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  const AvatarGroup = {
    // avatarGroup 组件
    avatarGroup: {
      urls: [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  const Backtop = {
    // backtop组件
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: {
        color: "#909399",
        fontSize: "19px"
      }
    }
  };
  const Badge = {
    // 徽标数组件
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: [],
      inverted: false,
      absolute: false
    }
  };
  const Button = {
    // button组件
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  const Calendar$1 = {
    // calendar 组件
    calendar: {
      title: "日期选择",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "开始",
      endText: "结束",
      customList: [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      // Infinity
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "确定",
      confirmDisabledText: "确定",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      // Infinity
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  const CarKeyboard = {
    // 车牌号键盘
    carKeyboard: {
      random: false
    }
  };
  const Cell = {
    // cell组件的props
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  const CellGroup = {
    // cell-group组件的props
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  const Checkbox = {
    // checkbox组件
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  const CheckboxGroup = {
    // checkbox-group组件
    checkboxGroup: {
      name: "",
      value: [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  const CircleProgress = {
    // circleProgress 组件
    circleProgress: {
      percentage: 30
    }
  };
  const Code = {
    // code 组件
    code: {
      seconds: 60,
      startText: "获取验证码",
      changeText: "X秒重新获取",
      endText: "重新获取",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  const CodeInput = {
    // codeInput 组件
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  const Col = {
    // col 组件
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  const Collapse = {
    // collapse 组件
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  const CollapseItem = {
    // collapseItem 组件
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300
    }
  };
  const ColumnNotice = {
    // columnNotice 组件
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  const CountDown = {
    // u-count-down 计时器组件
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  const CountTo = {
    // countTo 组件
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  const DatetimePicker = {
    // datetimePicker 组件
    datetimePicker: {
      show: false,
      popupMode: "bottom",
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: []
    }
  };
  const Divider = {
    // divider组件
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  const Empty = {
    // empty组件
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  const Form = {
    // form 组件
    form: {
      model: {},
      rules: {},
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: {}
    }
  };
  const GormItem = {
    // formItem 组件
    formItem: {
      label: "",
      prop: "",
      rule: "",
      borderBottom: "",
      labelPosition: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  const Gap = {
    // gap组件
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  const Grid = {
    // grid组件
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  const GridItem = {
    // grid-item组件
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$5
  } = config;
  const Icon = {
    // icon组件
    icon: {
      name: "",
      color: color$5["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$5["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  const Image = {
    // image组件
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  const IndexAnchor = {
    // indexAnchor 组件
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  const IndexList = {
    // indexList 组件
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: [],
      sticky: true,
      customNavHeight: 0
    }
  };
  const Input = {
    // index 组件
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: -1,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  const Keyboard = {
    // 键盘组件
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "取消",
      confirmText: "确定",
      autoChange: false
    }
  };
  const Line = {
    // line组件
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  const LineProgress = {
    // lineProgress 组件
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$4
  } = config;
  const Link = {
    // link超链接组件props参数
    link: {
      color: color$4["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "链接已复制，请在浏览器打开",
      lineColor: "",
      text: ""
    }
  };
  const List = {
    // list 组件
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  const ListItem = {
    // listItem 组件
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$3
  } = config;
  const LoadingIcon = {
    // loading-icon加载中图标组件
    loadingIcon: {
      show: true,
      color: color$3["u-tips-color"],
      textColor: color$3["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  const LoadingPage = {
    // loading-page组件
    loadingPage: {
      loadingText: "正在加载",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8"
    }
  };
  const Loadmore = {
    // loadmore 组件
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "加载更多",
      loadingText: "正在加载...",
      nomoreText: "没有更多了",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  const Modal = {
    // modal 组件
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "确认",
      cancelText: "取消",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: ""
    }
  };
  const color$2 = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  const Navbar = {
    // navbar 组件
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color$2.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  const NoNetwork = {
    // noNetwork
    noNetwork: {
      tips: "哎呀，网络信号丢失",
      zIndex: "",
      image: "data:image/png;base64,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"
    }
  };
  const NoticeBar = {
    // noticeBar
    noticeBar: {
      text: [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  const Notify = {
    // notify组件
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  const NumberBox = {
    // 步进器组件
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  const NumberKeyboard = {
    // 数字键盘
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  const Overlay = {
    // overlay组件
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  const Parse = {
    // parse
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  const Picker = {
    // picker
    picker: {
      show: false,
      popupMode: "bottom",
      showToolbar: true,
      title: "",
      columns: [],
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确定",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: [],
      immediateChange: true
    }
  };
  const Popup = {
    // popup组件
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: {},
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  const Radio = {
    // radio组件
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  const RadioGroup = {
    // radio-group组件
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  const Rate = {
    // rate组件
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  const ReadMore = {
    // readMore
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "展开阅读全文",
      openText: "收起",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  const Row = {
    // row
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  const RowNotice = {
    // rowNotice
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  const ScrollList = {
    // scrollList
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  const Search = {
    // search
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "请输入关键字",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: {},
      actionText: "搜索",
      inputAlign: "left",
      inputStyle: {},
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  const Section = {
    // u-section组件
    section: {
      title: "",
      subTitle: "更多",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  const Skeleton = {
    // skeleton
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  const Slider = {
    // slider组件
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: {}
    }
  };
  const StatusBar = {
    // statusBar
    statusBar: {
      bgColor: "transparent"
    }
  };
  const Steps = {
    // steps组件
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  const StepsItem = {
    // steps-item组件
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  const Sticky = {
    // sticky组件
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  const Subsection = {
    // subsection组件
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  const SwipeAction = {
    // swipe-action组件
    swipeAction: {
      autoClose: true
    }
  };
  const SwipeActionItem = {
    // swipeActionItem 组件
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  const Swiper = {
    // swiper 组件
    swiper: {
      list: [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  const SwipterIndicator = {
    // swiperIndicator 组件
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  const Switch = {
    // switch
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  const Tabbar = {
    // tabbar
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  const TabbarItem = {
    //
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  const Tabs = {
    //
    tabs: {
      duration: 300,
      list: [],
      lineColor: "#3c9cff",
      activeStyle: {
        color: "#303133"
      },
      inactiveStyle: {
        color: "#606266"
      },
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: {
        height: "44px"
      },
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  const Tag = {
    // tag 组件
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: "",
      iconColor: ""
    }
  };
  const Text = {
    // text 组件
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: {
        fontSize: "15px"
      },
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  const Textarea = {
    // textarea 组件
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "done",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  const Toast = {
    // toast组件
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: {},
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  const Toolbar = {
    // toolbar 组件
    toolbar: {
      show: true,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  const Tooltip = {
    // tooltip 组件
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: [],
      overlay: true,
      showToast: true
    }
  };
  const Transition = {
    // transition动画组件的props
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  const Upload = {
    // upload组件
    upload: {
      accept: "image",
      extension: [],
      capture: ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  const props$w = {
    ...ActionSheet,
    ...Album,
    ...Alert,
    ...Avatar,
    ...AvatarGroup,
    ...Backtop,
    ...Badge,
    ...Button,
    ...Calendar$1,
    ...CarKeyboard,
    ...Cell,
    ...CellGroup,
    ...Checkbox,
    ...CheckboxGroup,
    ...CircleProgress,
    ...Code,
    ...CodeInput,
    ...Col,
    ...Collapse,
    ...CollapseItem,
    ...ColumnNotice,
    ...CountDown,
    ...CountTo,
    ...DatetimePicker,
    ...Divider,
    ...Empty,
    ...Form,
    ...GormItem,
    ...Gap,
    ...Grid,
    ...GridItem,
    ...Icon,
    ...Image,
    ...IndexAnchor,
    ...IndexList,
    ...Input,
    ...Keyboard,
    ...Line,
    ...LineProgress,
    ...Link,
    ...List,
    ...ListItem,
    ...LoadingIcon,
    ...LoadingPage,
    ...Loadmore,
    ...Modal,
    ...Navbar,
    ...NoNetwork,
    ...NoticeBar,
    ...Notify,
    ...NumberBox,
    ...NumberKeyboard,
    ...Overlay,
    ...Parse,
    ...Picker,
    ...Popup,
    ...Radio,
    ...RadioGroup,
    ...Rate,
    ...ReadMore,
    ...Row,
    ...RowNotice,
    ...ScrollList,
    ...Search,
    ...Section,
    ...Skeleton,
    ...Slider,
    ...StatusBar,
    ...Steps,
    ...StepsItem,
    ...Sticky,
    ...Subsection,
    ...SwipeAction,
    ...SwipeActionItem,
    ...Swiper,
    ...SwipterIndicator,
    ...Switch,
    ...Tabbar,
    ...TabbarItem,
    ...Tabs,
    ...Tag,
    ...Text,
    ...Textarea,
    ...Toast,
    ...Toolbar,
    ...Tooltip,
    ...Transition,
    ...Upload
  };
  const props$v = defineMixin({
    props: {
      // 图标类名
      name: {
        type: String,
        default: () => props$w.icon.name
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: () => props$w.icon.color
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: () => props$w.icon.size
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: () => props$w.icon.bold
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: () => props$w.icon.index
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: () => props$w.icon.hoverClass
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: () => props$w.icon.customPrefix
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: () => props$w.icon.label
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: () => props$w.icon.labelPos
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: () => props$w.icon.labelSize
      },
      // label的颜色
      labelColor: {
        type: String,
        default: () => props$w.icon.labelColor
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: () => props$w.icon.space
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: () => props$w.icon.imgMode
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: () => props$w.icon.width
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: () => props$w.icon.height
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: () => props$w.icon.top
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: () => props$w.icon.stop
      }
    }
  });
  const mpMixin = defineMixin({});
  function email(value2) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value2);
  }
  function mobile(value2) {
    return /^1[23456789]\d{9}$/.test(value2);
  }
  function url(value2) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value2);
  }
  function date(value2) {
    if (!value2)
      return false;
    if (number(value2))
      value2 = +value2;
    return !/Invalid|NaN/.test(new Date(value2).toString());
  }
  function dateISO(value2) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value2);
  }
  function number(value2) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value2);
  }
  function string$1(value2) {
    return typeof value2 === "string";
  }
  function digits(value2) {
    return /^\d+$/.test(value2);
  }
  function idCard(value2) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value2
    );
  }
  function carNo(value2) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value2.length === 7) {
      return creg.test(value2);
    }
    if (value2.length === 8) {
      return xreg.test(value2);
    }
    return false;
  }
  function amount(value2) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value2);
  }
  function chinese(value2) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value2);
  }
  function letter(value2) {
    return /^[a-zA-Z]*$/.test(value2);
  }
  function enOrNum(value2) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value2);
  }
  function contains(value2, param) {
    return value2.indexOf(param) >= 0;
  }
  function range$2(value2, param) {
    return value2 >= param[0] && value2 <= param[1];
  }
  function rangeLength(value2, param) {
    return value2.length >= param[0] && value2.length <= param[1];
  }
  function landline(value2) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value2);
  }
  function empty(value2) {
    switch (typeof value2) {
      case "undefined":
        return true;
      case "string":
        if (value2.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value2)
          return true;
        break;
      case "number":
        if (value2 === 0 || isNaN(value2))
          return true;
        break;
      case "object":
        if (value2 === null || value2.length === 0)
          return true;
        for (const i2 in value2) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value2) {
    if (typeof value2 === "string") {
      try {
        const obj = JSON.parse(value2);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e2) {
        return false;
      }
    }
    return false;
  }
  function array(value2) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value2);
    }
    return Object.prototype.toString.call(value2) === "[object Array]";
  }
  function object(value2) {
    return Object.prototype.toString.call(value2) === "[object Object]";
  }
  function code(value2, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value2);
  }
  function func(value2) {
    return typeof value2 === "function";
  }
  function promise(value2) {
    return object(value2) && func(value2.then) && func(value2.catch);
  }
  function image(value2) {
    const newValue = value2.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value2) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value2);
  }
  function regExp(o2) {
    return o2 && Object.prototype.toString.call(o2) === "[object RegExp]";
  }
  const test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$2,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string: string$1
  };
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at node_modules/uview-plus/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range$1(min = 0, max = 0, value2 = 0) {
    return Math.max(min, Math.min(max, Number(value2)));
  }
  function getPx(value2, unit = false) {
    if (number(value2)) {
      return unit ? `${value2}px` : Number(value2);
    }
    if (/(rpx|upx)$/.test(value2)) {
      return unit ? `${uni.upx2px(parseInt(value2))}px` : Number(uni.upx2px(parseInt(value2)));
    }
    return unit ? `${parseInt(value2)}px` : parseInt(value2);
  }
  function sleep(value2 = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value2);
    });
  }
  function os$1() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i2 = 0; i2 < len; i2++)
        uuid[i2] = chars[0 | Math.random() * radix];
    } else {
      let r2;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i2 = 0; i2 < 36; i2++) {
        if (!uuid[i2]) {
          r2 = 0 | Math.random() * 16;
          uuid[i2] = chars[i2 == 19 ? r2 & 3 | 8 : r2];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i2 = 0; i2 < styleArray.length; i2++) {
        if (styleArray[i2]) {
          const item = styleArray[i2].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    if (typeof customStyle === "object") {
      customStyle.forEach((val, i2) => {
        const key = i2.replace(/([A-Z])/g, "-$1").toLowerCase();
        string2 += `${key}:${val};`;
      });
    }
    return trim(string2);
  }
  function addUnit(value2 = "auto", unit = "") {
    if (!unit) {
      unit = config.unit || "px";
    }
    value2 = String(value2);
    return number(value2) ? `${value2}${unit}` : value2;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o2 = array(obj) ? [] : {};
    for (const i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        o2[i2] = typeof obj[i2] === "object" ? deepClone(obj[i2]) : obj[i2];
      }
    }
    return o2;
  }
  function deepMerge$3(targetOrigin = {}, source = {}) {
    let target = deepClone(targetOrigin);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (source[prop] == null) {
          target[prop] = source[prop];
        } else if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge$3(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function shallowMerge(target, source = {}) {
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (source[prop] == null) {
          target[prop] = source[prop];
        } else if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = shallowMerge(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at node_modules/uview-plus/libs/function/index.js:275", `uView提示：${err}`);
    }
  }
  function randomArray(array3 = []) {
    return array3.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date3;
    if (!dateTime) {
      date3 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
      date3 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date3 = new Date(Number(dateTime));
    } else {
      date3 = new Date(
        typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime
      );
    }
    const timeSource = {
      "y": date3.getFullYear().toString(),
      // 年
      "m": (date3.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date3.getDate().toString().padStart(2, "0"),
      // 日
      "h": date3.getHours().toString().padStart(2, "0"),
      // 时
      "M": date3.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date3.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format2 = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format2 === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format2);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value2 = data[key];
      if (["", void 0, null].indexOf(value2) >= 0) {
        continue;
      }
      if (value2.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i2 = 0; i2 < value2.length; i2++) {
              _result.push(`${key}[${i2}]=${value2[i2]}`);
            }
            break;
          case "brackets":
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value2.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value2.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value2}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type2 = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type2) == -1)
      type2 = "success";
    let iconName = "";
    switch (type2) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number3, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number3 = `${number3}`.replace(/[^0-9+-Ee.]/g, "");
    const n2 = !isFinite(+number3) ? 0 : +number3;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s2 = "";
    s2 = (prec ? round(n2, prec) + "" : `${Math.round(n2)}`).split(".");
    const re2 = /(-?\d+)(\d{3})/;
    while (re2.test(s2[0])) {
      s2[0] = s2[0].replace(re2, `$1${sep}$2`);
    }
    if ((s2[1] || "").length < prec) {
      s2[1] = s2[1] || "";
      s2[1] += new Array(prec - s2[1].length + 1).join("0");
    }
    return s2.join(dec);
  }
  function getDuration(value2, unit = true) {
    const valueNum = parseInt(value2);
    if (unit) {
      if (/s$/.test(value2))
        return value2;
      return value2 > 30 ? `${value2}ms` : `${value2}s`;
    }
    if (/ms$/.test(value2))
      return valueNum;
    if (/s$/.test(value2))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value2) {
    return `00${value2}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "u-form-item");
    const form = $parent.call(instance, "u-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (typeof obj !== "object" || null == obj) {
      return "";
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i2 = 1; i2 < keys.length; i2++) {
        if (firstObj) {
          firstObj = firstObj[keys[i2]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value2) {
    if (typeof obj !== "object" || null == obj) {
      return;
    }
    const inFn = function(_obj, keys, v2) {
      if (keys.length === 1) {
        _obj[keys[0]] = v2;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v2);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value2);
    } else {
      obj[key] = value2;
    }
  }
  function page() {
    const pages2 = getCurrentPages();
    return `/${pages2[pages2.length - 1].route || ""}`;
  }
  function pages$1() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  const index = {
    range: range$1,
    getPx,
    sleep,
    os: os$1,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge: deepMerge$3,
    shallowMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages: pages$1
    // setConfig
  };
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false
        // 是否需要拦截
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = deepMerge$3(this.config, options);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = deepMerge$3(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type: type2,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  const mixin = defineMixin({
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
      // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
      // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
      $u() {
        return deepMerge$3(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          route({ type: this.linkType, url: url2 });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = $parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e2) {
        e2 && typeof e2.stopPropagation === "function" && e2.stopPropagation();
      },
      // 空操作
      noop(e2) {
        this.preventEvent(e2);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeUnmount() {
      if (this.parent && test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  });
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$W = {
    name: "u-icon",
    data() {
      return {};
    },
    emits: ["click"],
    mixins: [mpMixin, mixin, props$v],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.customPrefix == "uicon") {
          classes.push("u-iconfont");
        } else {
          classes.push(this.customPrefix);
        }
        if (this.color && config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: addUnit(this.size),
          lineHeight: addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: addUnit(this.top)
        };
        if (this.color && !config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? addUnit(this.width) : addUnit(this.size);
        style.height = this.height ? addUnit(this.height) : addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        if (this.customPrefix !== "uicon")
          return "";
        return icons["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      addStyle,
      addUnit,
      clickHandler(e2) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e2);
      }
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "u-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: vue.normalizeStyle([$options.imgStyle, $options.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: vue.normalizeClass(["u-icon__icon", $options.uClasses]),
          style: vue.normalizeStyle([$options.iconStyle, $options.addStyle(_ctx.customStyle)]),
          "hover-class": _ctx.hoverClass
        }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
        _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 2,
            class: "u-icon__label",
            style: vue.normalizeStyle({
              color: _ctx.labelColor,
              fontSize: $options.addUnit(_ctx.labelSize),
              marginLeft: _ctx.labelPos == "right" ? $options.addUnit(_ctx.space) : 0,
              marginTop: _ctx.labelPos == "bottom" ? $options.addUnit(_ctx.space) : 0,
              marginRight: _ctx.labelPos == "left" ? $options.addUnit(_ctx.space) : 0,
              marginBottom: _ctx.labelPos == "top" ? $options.addUnit(_ctx.space) : 0
            })
          },
          vue.toDisplayString(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1$b = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$J], ["__scopeId", "data-v-1c933a9a"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-icon/u-icon.vue"]]);
  const props$u = defineMixin({
    props: {
      // 文字颜色
      color: {
        type: String,
        default: () => props$w.link.color
      },
      // 字体大小，单位px
      fontSize: {
        type: [String, Number],
        default: () => props$w.link.fontSize
      },
      // 是否显示下划线
      underLine: {
        type: Boolean,
        default: () => props$w.link.underLine
      },
      // 要跳转的链接
      href: {
        type: String,
        default: () => props$w.link.href
      },
      // 小程序中复制到粘贴板的提示语
      mpTips: {
        type: String,
        default: () => props$w.link.mpTips
      },
      // 下划线颜色
      lineColor: {
        type: String,
        default: () => props$w.link.lineColor
      },
      // 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
      text: {
        type: String,
        default: () => props$w.link.text
      }
    }
  });
  const _sfc_main$V = {
    name: "u-link",
    mixins: [mpMixin, mixin, props$u],
    computed: {
      linkStyle() {
        const style = {
          color: this.color,
          fontSize: addUnit(this.fontSize),
          // line-height设置为比字体大小多2px
          lineHeight: addUnit(getPx(this.fontSize) + 2),
          textDecoration: this.underLine ? "underline" : "none"
        };
        return style;
      }
    },
    emits: ["click"],
    methods: {
      addStyle,
      openLink() {
        plus.runtime.openURL(this.href);
        this.$emit("click");
      }
    }
  };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        class: "u-link",
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.openLink && $options.openLink(...args), ["stop"])),
        style: vue.normalizeStyle([$options.linkStyle, $options.addStyle(_ctx.customStyle)])
      },
      vue.toDisplayString(_ctx.text),
      5
      /* TEXT, STYLE */
    );
  }
  const __easycom_1$a = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$I], ["__scopeId", "data-v-dedad317"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-link/u-link.vue"]]);
  const props$t = defineMixin({
    props: {
      // 主题颜色
      type: {
        type: String,
        default: () => props$w.text.type
      },
      // 是否显示
      show: {
        type: Boolean,
        default: () => props$w.text.show
      },
      // 显示的值
      text: {
        type: [String, Number],
        default: () => props$w.text.text
      },
      // 前置图标
      prefixIcon: {
        type: String,
        default: () => props$w.text.prefixIcon
      },
      // 后置图标
      suffixIcon: {
        type: String,
        default: () => props$w.text.suffixIcon
      },
      // 文本处理的匹配模式
      // text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接
      mode: {
        type: String,
        default: () => props$w.text.mode
      },
      // mode=link下，配置的链接
      href: {
        type: String,
        default: () => props$w.text.href
      },
      // 格式化规则
      format: {
        type: [String, Function],
        default: () => props$w.text.format
      },
      // mode=phone时，点击文本是否拨打电话
      call: {
        type: Boolean,
        default: () => props$w.text.call
      },
      // 小程序的打开方式
      openType: {
        type: String,
        default: () => props$w.text.openType
      },
      // 是否粗体，默认normal
      bold: {
        type: Boolean,
        default: () => props$w.text.bold
      },
      // 是否块状
      block: {
        type: Boolean,
        default: () => props$w.text.block
      },
      // 文本显示的行数，如果设置，超出此行数，将会显示省略号
      lines: {
        type: [String, Number],
        default: () => props$w.text.lines
      },
      // 文本颜色
      color: {
        type: String,
        default: () => props$w.text.color
      },
      // 字体大小
      size: {
        type: [String, Number],
        default: () => props$w.text.size
      },
      // 图标的样式
      iconStyle: {
        type: [Object, String],
        default: () => props$w.text.iconStyle
      },
      // 文字装饰，下划线，中划线等，可选值 none|underline|line-through
      decoration: {
        tepe: String,
        default: () => props$w.text.decoration
      },
      // 外边距，对象、字符串，数值形式均可
      margin: {
        type: [Object, String, Number],
        default: () => props$w.text.margin
      },
      // 文本行高
      lineHeight: {
        type: [String, Number],
        default: () => props$w.text.lineHeight
      },
      // 文本对齐方式，可选值left|center|right
      align: {
        type: String,
        default: () => props$w.text.align
      },
      // 文字换行，可选值break-word|normal|anywhere
      wordWrap: {
        type: String,
        default: () => props$w.text.wordWrap
      }
    }
  });
  const value = {
    computed: {
      // 经处理后需要显示的值
      value() {
        const {
          text,
          mode,
          format: format2,
          href
        } = this;
        if (mode === "price") {
          if (!/^\d+(\.\d+)?$/.test(text)) {
            error("金额模式下，text参数需要为金额格式");
          }
          if (test.func(format2)) {
            return format2(text);
          }
          return priceFormat(text, 2);
        }
        if (mode === "date") {
          !test.date(text) && error("日期模式下，text参数需要为日期或时间戳格式");
          if (test.func(format2)) {
            return format2(text);
          }
          if (format2) {
            return timeFormat(text, format2);
          }
          return timeFormat(text, "yyyy-mm-dd");
        }
        if (mode === "phone") {
          if (test.func(format2)) {
            return format2(text);
          }
          if (format2 === "encrypt") {
            return `${text.substr(0, 3)}****${text.substr(7)}`;
          }
          return text;
        }
        if (mode === "name") {
          !(typeof text === "string") && error("姓名模式下，text参数需要为字符串格式");
          if (test.func(format2)) {
            return format2(text);
          }
          if (format2 === "encrypt") {
            return this.formatName(text);
          }
          return text;
        }
        if (mode === "link") {
          !test.url(href) && error("超链接模式下，href参数需要为URL格式");
          return text;
        }
        return text;
      }
    },
    methods: {
      // 默认的姓名脱敏规则
      formatName(name) {
        let value2 = "";
        if (name.length === 2) {
          value2 = name.substr(0, 1) + "*";
        } else if (name.length > 2) {
          let char = "";
          for (let i2 = 0, len = name.length - 2; i2 < len; i2++) {
            char += "*";
          }
          value2 = name.substr(0, 1) + char + name.substr(-1, 1);
        } else {
          value2 = name;
        }
        return value2;
      }
    }
  };
  const _sfc_main$U = {
    name: "up-text",
    mixins: [mpMixin, mixin, value, props$t],
    emits: ["click"],
    computed: {
      valueStyle() {
        const style = {
          textDecoration: this.decoration,
          fontWeight: this.bold ? "bold" : "normal",
          wordWrap: this.wordWrap,
          fontSize: addUnit(this.size)
        };
        !this.type && (style.color = this.color);
        this.isNvue && this.lines && (style.lines = this.lines);
        this.lineHeight && (style.lineHeight = addUnit(this.lineHeight));
        !this.isNvue && this.block && (style.display = "block");
        return deepMerge$3(style, addStyle(this.customStyle));
      },
      isNvue() {
        let nvue = false;
        return nvue;
      },
      isMp() {
        let mp = false;
        return mp;
      }
    },
    data() {
      return {};
    },
    methods: {
      addStyle,
      clickHandler() {
        if (this.call && this.mode === "phone") {
          uni.makePhoneCall({
            phoneNumber: this.text
          });
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    const _component_u_link = resolveEasycom(vue.resolveDynamicComponent("u-link"), __easycom_1$a);
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-text", [_ctx.customClass]]),
        style: vue.normalizeStyle({
          margin: _ctx.margin,
          justifyContent: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end"
        }),
        onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        _ctx.mode === "price" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: vue.normalizeClass(["u-text__price", _ctx.type && `u-text__value--${_ctx.type}`]),
            style: vue.normalizeStyle([$options.valueStyle])
          },
          "￥",
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "u-text__prefix-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.prefixIcon,
            customStyle: $options.addStyle(_ctx.iconStyle)
          }, null, 8, ["name", "customStyle"])
        ])) : vue.createCommentVNode("v-if", true),
        _ctx.mode === "link" ? (vue.openBlock(), vue.createBlock(_component_u_link, {
          key: 2,
          class: vue.normalizeClass(["u-text__value", [_ctx.type && `u-text__value--${_ctx.type}`, _ctx.lines && `u-line-${_ctx.lines}`]]),
          style: vue.normalizeStyle({ fontWeight: $options.valueStyle.fontWeight, wordWrap: $options.valueStyle.wordWrap, fontSize: $options.valueStyle.fontSize }),
          text: _ctx.value,
          href: _ctx.href,
          underLine: ""
        }, null, 8, ["style", "class", "text", "href"])) : _ctx.openType && $options.isMp ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 3,
          class: "u-reset-button u-text__value",
          style: vue.normalizeStyle([$options.valueStyle]),
          "data-index": _ctx.index,
          openType: _ctx.openType,
          onGetuserinfo: _cache[0] || (_cache[0] = (...args) => _ctx.onGetUserInfo && _ctx.onGetUserInfo(...args)),
          onContact: _cache[1] || (_cache[1] = (...args) => _ctx.onContact && _ctx.onContact(...args)),
          onGetphonenumber: _cache[2] || (_cache[2] = (...args) => _ctx.onGetPhoneNumber && _ctx.onGetPhoneNumber(...args)),
          onError: _cache[3] || (_cache[3] = (...args) => _ctx.onError && _ctx.onError(...args)),
          onLaunchapp: _cache[4] || (_cache[4] = (...args) => _ctx.onLaunchApp && _ctx.onLaunchApp(...args)),
          onOpensetting: _cache[5] || (_cache[5] = (...args) => _ctx.onOpenSetting && _ctx.onOpenSetting(...args)),
          lang: _ctx.lang,
          "session-from": _ctx.sessionFrom,
          "send-message-title": _ctx.sendMessageTitle,
          "send-message-path": _ctx.sendMessagePath,
          "send-message-img": _ctx.sendMessageImg,
          "show-message-card": _ctx.showMessageCard,
          "app-parameter": _ctx.appParameter
        }, vue.toDisplayString(_ctx.value), 45, ["data-index", "openType", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])) : (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 4,
            class: vue.normalizeClass(["u-text__value", [
              _ctx.type && `u-text__value--${_ctx.type}`,
              _ctx.lines && `u-line-${_ctx.lines}`
            ]]),
            style: vue.normalizeStyle([$options.valueStyle])
          },
          vue.toDisplayString(_ctx.value),
          7
          /* TEXT, CLASS, STYLE */
        )),
        _ctx.suffixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 5,
          class: "u-text__suffix-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.suffixIcon,
            customStyle: $options.addStyle(_ctx.iconStyle)
          }, null, 8, ["name", "customStyle"])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$9 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$H], ["__scopeId", "data-v-5fec1d8b"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-text/u-text.vue"]]);
  const props$s = defineMixin({
    props: {
      // 头像图片路径(不能为相对路径)
      src: {
        type: String,
        default: () => props$w.avatar.src
      },
      // 头像形状，circle-圆形，square-方形
      shape: {
        type: String,
        default: () => props$w.avatar.shape
      },
      // 头像尺寸
      size: {
        type: [String, Number],
        default: () => props$w.avatar.size
      },
      // 裁剪模式
      mode: {
        type: String,
        default: () => props$w.avatar.mode
      },
      // 显示的文字
      text: {
        type: String,
        default: () => props$w.avatar.text
      },
      // 背景色
      bgColor: {
        type: String,
        default: () => props$w.avatar.bgColor
      },
      // 文字颜色
      color: {
        type: String,
        default: () => props$w.avatar.color
      },
      // 文字大小
      fontSize: {
        type: [String, Number],
        default: () => props$w.avatar.fontSize
      },
      // 显示的图标
      icon: {
        type: String,
        default: () => props$w.avatar.icon
      },
      // 显示小程序头像，只对百度，微信，QQ小程序有效
      mpAvatar: {
        type: Boolean,
        default: () => props$w.avatar.mpAvatar
      },
      // 是否使用随机背景色
      randomBgColor: {
        type: Boolean,
        default: () => props$w.avatar.randomBgColor
      },
      // 加载失败的默认头像(组件有内置默认图片)
      defaultUrl: {
        type: String,
        default: () => props$w.avatar.defaultUrl
      },
      // 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间
      colorIndex: {
        type: [String, Number],
        // 校验参数规则，索引在0-19之间
        validator(n2) {
          return test.range(n2, [0, 19]) || n2 === "";
        },
        default: () => props$w.avatar.colorIndex
      },
      // 组件标识符
      name: {
        type: String,
        default: () => props$w.avatar.name
      }
    }
  });
  const base64Avatar = "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADIAMgDAREAAhEBAxEB/8QAcQABAQEAAwEBAAAAAAAAAAAAAAUEAQMGAgcBAQAAAAAAAAAAAAAAAAAAAAAQAAIBAwICBgkDBQAAAAAAAAABAhEDBCEFMVFBYXGREiKBscHRMkJSEyOh4XLxYjNDFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHbHFyZ/Dam+yLA+Z2L0Pjtyj2poD4AAAAAAAAAAAAAAAAAAAAAAAAKWFs9y6lcvvwQeqj8z9wFaziY1n/HbUX9XF97A7QAGXI23EvJ1goyfzR0YEfN269jeZ+a03pNe0DIAAAAAAAAAAAAAAAAAAAACvtO3RcVkXlWutuL9YFYAAAAAOJRjKLjJVi9GmB5/csH/mu1h/in8PU+QGMAAAAAAAAAAAAAAAAAAaMDG/6MmMH8C80+xAelSSVFolwQAAAAAAAHVlWI37ErUulaPk+hgeYnCUJuElSUXRrrQHAAAAAAAAAAAAAAAAABa2Oz4bM7r4zdF2ICmAAAAAAAAAg7zZ8GX41wuJP0rRgYAAAAAAAAAAAAAAAAAD0m2R8ODaXU33tsDSAAAAAAAAAlb9HyWZcnJd9PcBHAAAAAAAAAAAAAAAAAPS7e64Vn+KA0AAAAAAAAAJm+v8Ftf3ewCKAAAAAAAAAAAAAAAAAX9muqeGo9NttP06+0DcAAAAAAAAAjb7dTu2ra+VOT9P8AQCWAAAAAAAAAAAAAAAAAUNmyPt5Ltv4bui/kuAF0AAAAAAADiUlGLlJ0SVW+oDzOXfd/Ind6JPRdS0QHSAAAAAAAAAAAAAAAAAE2nVaNcGB6Lbs6OTao9LsF51z60BrAAAAAABJ3jOVHjW3r/sa9QEgAAAAAAAAAAAAAAAAAAAPu1duWriuW34ZR4MC9hbnZyEoy8l36XwfYBsAAADaSq9EuLAlZ+7xSdrGdW9Hc5dgEdtt1erfFgAAAAAAAAAAAAAAAAADVjbblX6NR8MH80tEBRs7HYivyzlN8lovaBPzduvY0m6eK10TXtAyAarO55lpJK54orolr+4GqO/Xaea1FvqbXvA+Z77kNeW3GPbV+4DJfzcm/pcm3H6Vou5AdAFLC2ed2Pjv1txa8sV8T6wOL+yZEKu1JXFy4MDBOE4ScZxcZLinoB8gAAAAAAAAAAAB242LeyJ+C3GvN9C7QLmJtePYpKS+5c+p8F2IDYAANJqj1T4oCfk7Nj3G5Wn9qXJax7gJ93Z82D8sVNc4v30A6Xg5i42Z+iLfqARwcyT0sz9MWvWBps7LlTf5Grce9/oBTxdtxseklHxT+uWr9AGoAB138ezfj4bsFJdD6V2MCPm7RdtJzs1uW1xXzL3gTgAAAAAAAAADRhYc8q74I6RWs5ckB6GxYtWLat21SK731sDsAAAAAAAAAAAAAAAASt021NO/YjrxuQXT1oCOAAAAAAABzGLlJRSq26JAelwsWONYjbXxcZvmwO8AAAAAAAAAAAAAAAAAAef3TEWPkVivx3NY9T6UBiAAAAAABo2+VmGXblddIJ8eivRUD0oAAAAAAAAAAAAAAAAAAAYt4tKeFKVNYNSXfRgefAAAAAAAAr7VuSSWPedKaW5v1MCsAAAAAAAAAAAAAAAAAAIe6bj96Ts2n+JPzSXzP3ATgAAAAAAAAFbbt1UUrOQ9FpC4/UwK6aaqtU+DAAAAAAAAAAAAAAA4lKMIuUmoxWrb4ARNx3R3q2rLpa4Sl0y/YCcAAAAAAAAAAANmFud7G8r89r6X0dgFvGzLGRGtuWvTF6NAdwAAAAAAAAAAAy5W442PVN+K59EePp5ARMvOv5MvO6QXCC4AZwAAAAAAAAAAAAAcxlKLUotprg1owN+PvORborq+7Hnwl3gUbO74VzRydt8pKn68ANcJwmqwkpLmnUDkAAAAfNy9atqtyagut0AxXt5xIV8Fbj6lRd7Am5G65V6qUvtwfyx94GMAAAAAAAAAAAAAAAAAAAOU2nVOj5gdsc3LiqRvTpyqwOxbnnrhdfpSfrQB7pnv/AGvuS9gHXPMy5/Fem1yq0v0A6W29XqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z";
  const _sfc_main$T = {
    name: "u-avatar",
    mixins: [mpMixin, mixin, props$s],
    data() {
      return {
        // 如果配置randomBgColor参数为true，在图标或者文字的模式下，会随机从中取出一个颜色值当做背景色
        colors: [
          "#ffb34b",
          "#f2bba9",
          "#f7a196",
          "#f18080",
          "#88a867",
          "#bfbf39",
          "#89c152",
          "#94d554",
          "#f19ec2",
          "#afaae4",
          "#e1b0df",
          "#c38cc1",
          "#72dcdc",
          "#9acdcb",
          "#77b1cc",
          "#448aca",
          "#86cefa",
          "#98d1ee",
          "#73d1f1",
          "#80a7dc"
        ],
        avatarUrl: this.src,
        allowMp: false
      };
    },
    watch: {
      // 监听头像src的变化，赋值给内部的avatarUrl变量，因为图片加载失败时，需要修改图片的src为默认值
      // 而组件内部不能直接修改props的值，所以需要一个中间变量
      src: {
        immediate: true,
        handler(newVal) {
          this.avatarUrl = newVal;
          if (!newVal) {
            this.errorHandler();
          }
        }
      }
    },
    computed: {
      imageStyle() {
        const style = {};
        return style;
      }
    },
    created() {
      this.init();
    },
    emits: ["click"],
    methods: {
      addStyle,
      addUnit,
      random,
      init() {
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.src.indexOf("/") !== -1;
      },
      // 图片加载时失败时触发
      errorHandler() {
        this.avatarUrl = this.defaultUrl || base64Avatar;
      },
      clickHandler() {
        this.$emit("click", this.name);
      }
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    const _component_up_text = resolveEasycom(vue.resolveDynamicComponent("up-text"), __easycom_1$9);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-avatar", [`u-avatar--${_ctx.shape}`]]),
        style: vue.normalizeStyle([{
          backgroundColor: _ctx.text || _ctx.icon ? _ctx.randomBgColor ? $data.colors[_ctx.colorIndex !== "" ? _ctx.colorIndex : $options.random(0, 19)] : _ctx.bgColor : "transparent",
          width: $options.addUnit(_ctx.size),
          height: $options.addUnit(_ctx.size)
        }, $options.addStyle(_ctx.customStyle)]),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          _ctx.mpAvatar && $data.allowMp ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            [],
            64
            /* STABLE_FRAGMENT */
          )) : _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 1,
            name: _ctx.icon,
            size: _ctx.fontSize,
            color: _ctx.color
          }, null, 8, ["name", "size", "color"])) : _ctx.text ? (vue.openBlock(), vue.createBlock(_component_up_text, {
            key: 2,
            text: _ctx.text,
            size: _ctx.fontSize,
            color: _ctx.color,
            align: "center",
            customStyle: "justify-content: center"
          }, null, 8, ["text", "size", "color"])) : (vue.openBlock(), vue.createElementBlock("image", {
            key: 3,
            class: vue.normalizeClass(["u-avatar__image", [`u-avatar__image--${_ctx.shape}`]]),
            src: $data.avatarUrl || _ctx.defaultUrl,
            mode: _ctx.mode,
            onError: _cache[0] || (_cache[0] = (...args) => $options.errorHandler && $options.errorHandler(...args)),
            style: vue.normalizeStyle([{
              width: $options.addUnit(_ctx.size),
              height: $options.addUnit(_ctx.size)
            }])
          }, null, 46, ["src", "mode"]))
        ], true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2$6 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$G], ["__scopeId", "data-v-14a988f2"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-avatar/u-avatar.vue"]]);
  const props$r = defineMixin({
    props: {
      // 占父容器宽度的多少等分，总分为12份
      span: {
        type: [String, Number],
        default: () => props$w.col.span
      },
      // 指定栅格左侧的间隔数(总12栏)
      offset: {
        type: [String, Number],
        default: () => props$w.col.offset
      },
      // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
      justify: {
        type: String,
        default: () => props$w.col.justify
      },
      // 垂直对齐方式，可选值为top、center、bottom、stretch
      align: {
        type: String,
        default: () => props$w.col.align
      },
      // 文字对齐方式
      textAlign: {
        type: String,
        default: () => props$w.col.textAlign
      }
    }
  });
  const _sfc_main$S = {
    name: "u-col",
    mixins: [mpMixin, mixin, props$r],
    data() {
      return {
        width: 0,
        parentData: {
          gutter: 0
        },
        gridNum: 12
      };
    },
    //  微信小程序中 options 选项
    options: {
      virtualHost: true
      // 将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等
    },
    computed: {
      uJustify() {
        if (this.justify == "end" || this.justify == "start")
          return "flex-" + this.justify;
        else if (this.justify == "around" || this.justify == "between")
          return "space-" + this.justify;
        else
          return this.justify;
      },
      uAlignItem() {
        if (this.align == "top")
          return "flex-start";
        if (this.align == "bottom")
          return "flex-end";
        else
          return this.align;
      },
      colStyle() {
        const style = {
          // 这里写成"padding: 0 10px"的形式是因为nvue的需要
          paddingLeft: addUnit(getPx(this.parentData.gutter) / 2),
          paddingRight: addUnit(getPx(this.parentData.gutter) / 2),
          alignItems: this.uAlignItem,
          justifyContent: this.uJustify,
          textAlign: this.textAlign,
          // 在非nvue上，使用百分比形式
          flex: `0 0 ${100 / this.gridNum * this.span}%`,
          marginLeft: 100 / 12 * this.offset + "%"
        };
        return deepMerge$3(style, addStyle(this.customStyle));
      }
    },
    mounted() {
      this.init();
    },
    emits: ["click"],
    methods: {
      async init() {
        this.updateParentData();
        this.width = await this.parent.getComponentWidth();
      },
      updateParentData() {
        this.getParentData("u-row");
      },
      clickHandler(e2) {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-col", [
          "u-col-" + _ctx.span
        ]]),
        ref: "u-col",
        style: vue.normalizeStyle([$options.colStyle]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$8 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$F], ["__scopeId", "data-v-3677f292"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-col/u-col.vue"]]);
  const props$q = defineMixin({
    props: {
      // 搜索框形状，round-圆形，square-方形
      shape: {
        type: String,
        default: () => props$w.search.shape
      },
      // 搜索框背景色，默认值#f2f2f2
      bgColor: {
        type: String,
        default: () => props$w.search.bgColor
      },
      // 占位提示文字
      placeholder: {
        type: String,
        default: () => props$w.search.placeholder
      },
      // 是否启用清除控件
      clearabled: {
        type: Boolean,
        default: () => props$w.search.clearabled
      },
      // 是否自动聚焦
      focus: {
        type: Boolean,
        default: () => props$w.search.focus
      },
      // 是否在搜索框右侧显示取消按钮
      showAction: {
        type: Boolean,
        default: () => props$w.search.showAction
      },
      // 右边控件的样式
      actionStyle: {
        type: Object,
        default: () => props$w.search.actionStyle
      },
      // 取消按钮文字
      actionText: {
        type: String,
        default: () => props$w.search.actionText
      },
      // 输入框内容对齐方式，可选值为 left|center|right
      inputAlign: {
        type: String,
        default: () => props$w.search.inputAlign
      },
      // input输入框的样式，可以定义文字颜色，大小等，对象形式
      inputStyle: {
        type: Object,
        default: () => props$w.search.inputStyle
      },
      // 是否启用输入框
      disabled: {
        type: Boolean,
        default: () => props$w.search.disabled
      },
      // 边框颜色
      borderColor: {
        type: String,
        default: () => props$w.search.borderColor
      },
      // 搜索图标的颜色，默认同输入框字体颜色
      searchIconColor: {
        type: String,
        default: () => props$w.search.searchIconColor
      },
      // 输入框字体颜色
      color: {
        type: String,
        default: () => props$w.search.color
      },
      // placeholder的颜色
      placeholderColor: {
        type: String,
        default: () => props$w.search.placeholderColor
      },
      // 左边输入框的图标，可以为uView图标名称或图片路径
      searchIcon: {
        type: String,
        default: () => props$w.search.searchIcon
      },
      searchIconSize: {
        type: [Number, String],
        default: () => props$w.search.searchIconSize
      },
      // 组件与其他上下左右元素之间的距离，带单位的字符串形式，如"30px"、"30px 20px"等写法
      margin: {
        type: String,
        default: () => props$w.search.margin
      },
      // 开启showAction时，是否在input获取焦点时才显示
      animation: {
        type: Boolean,
        default: () => props$w.search.animation
      },
      // 输入框的初始化内容
      modelValue: {
        type: String,
        default: () => props$w.search.value
      },
      value: {
        type: String,
        default: () => props$w.search.value
      },
      // 输入框最大能输入的长度，-1为不限制长度(来自uniapp文档)
      maxlength: {
        type: [String, Number],
        default: () => props$w.search.maxlength
      },
      // 搜索框高度，单位px
      height: {
        type: [String, Number],
        default: () => props$w.search.height
      },
      // 搜索框左侧文本
      label: {
        type: [String, Number, null],
        default: () => props$w.search.label
      },
      // 键盘弹起时，是否自动上推页面	
      adjustPosition: {
        type: Boolean,
        default: () => true
      },
      // 键盘收起时，是否自动失去焦点	
      autoBlur: {
        type: Boolean,
        default: () => false
      }
    }
  });
  const _sfc_main$R = {
    name: "u-search",
    mixins: [mpMixin, mixin, props$q],
    data() {
      return {
        keyword: "",
        showClear: false,
        // 是否显示右边的清除图标
        show: false,
        // 标记input当前状态是否处于聚焦中，如果是，才会显示右侧的清除控件
        focused: this.focus
        // 绑定输入框的值
        // inputValue: this.value
      };
    },
    watch: {
      keyword(nVal) {
        this.$emit("update:modelValue", nVal);
        this.$emit("change", nVal);
      },
      modelValue: {
        immediate: true,
        handler(nVal) {
          this.keyword = nVal;
        }
      }
    },
    computed: {
      showActionBtn() {
        return !this.animation && this.showAction;
      }
    },
    emits: ["clear", "search", "custom", "focus", "blur", "click", "clickIcon", "update:modelValue", "change"],
    methods: {
      addStyle,
      addUnit,
      // 目前HX2.6.9 v-model双向绑定无效，故监听input事件获取输入框内容的变化
      inputChange(e2) {
        this.keyword = e2.detail.value;
      },
      // 清空输入
      // 也可以作为用户通过this.$refs形式调用清空输入框内容
      clear() {
        this.keyword = "";
        this.$nextTick(() => {
          this.$emit("clear");
        });
      },
      // 确定搜索
      search(e2) {
        this.$emit("search", e2.detail.value);
        try {
          uni.hideKeyboard();
        } catch (e3) {
        }
      },
      // 点击右边自定义按钮的事件
      custom() {
        this.$emit("custom", this.keyword);
        try {
          uni.hideKeyboard();
        } catch (e2) {
        }
      },
      // 获取焦点
      getFocus() {
        this.focused = true;
        if (this.animation && this.showAction)
          this.show = true;
        this.$emit("focus", this.keyword);
      },
      // 失去焦点
      blur() {
        setTimeout(() => {
          this.focused = false;
        }, 100);
        this.show = false;
        this.$emit("blur", this.keyword);
      },
      // 点击搜索框，只有disabled=true时才发出事件，因为禁止了输入，意味着是想跳转真正的搜索页
      clickHandler() {
        if (this.disabled)
          this.$emit("click");
      },
      // 点击左边图标
      clickIcon(e2) {
        this.$emit("clickIcon", this.keyword);
        try {
          uni.hideKeyboard();
        } catch (e3) {
        }
      }
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-search",
        onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
        style: vue.normalizeStyle([{
          margin: _ctx.margin
        }, $options.addStyle(_ctx.customStyle)])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: "u-search__content",
            style: vue.normalizeStyle({
              backgroundColor: _ctx.bgColor,
              borderRadius: _ctx.shape == "round" ? "100px" : "4px",
              borderColor: _ctx.borderColor
            })
          },
          [
            _ctx.$slots.label || _ctx.label !== null ? vue.renderSlot(_ctx.$slots, "label", { key: 0 }, () => [
              vue.createElementVNode(
                "text",
                { class: "u-search__content__label" },
                vue.toDisplayString(_ctx.label),
                1
                /* TEXT */
              )
            ], true) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "u-search__content__icon" }, [
              vue.createVNode(_component_u_icon, {
                onClick: $options.clickIcon,
                size: _ctx.searchIconSize,
                name: _ctx.searchIcon,
                color: _ctx.searchIconColor ? _ctx.searchIconColor : _ctx.color
              }, null, 8, ["onClick", "size", "name", "color"])
            ]),
            vue.createElementVNode("input", {
              "confirm-type": "search",
              onBlur: _cache[0] || (_cache[0] = (...args) => $options.blur && $options.blur(...args)),
              value: $data.keyword,
              onConfirm: _cache[1] || (_cache[1] = (...args) => $options.search && $options.search(...args)),
              onInput: _cache[2] || (_cache[2] = (...args) => $options.inputChange && $options.inputChange(...args)),
              disabled: _ctx.disabled,
              onFocus: _cache[3] || (_cache[3] = (...args) => $options.getFocus && $options.getFocus(...args)),
              focus: _ctx.focus,
              maxlength: _ctx.maxlength,
              "adjust-position": _ctx.adjustPosition,
              "auto-blur": _ctx.autoBlur,
              "placeholder-class": "u-search__content__input--placeholder",
              placeholder: _ctx.placeholder,
              "placeholder-style": `color: ${_ctx.placeholderColor}`,
              class: "u-search__content__input",
              type: "text",
              style: vue.normalizeStyle([{
                textAlign: _ctx.inputAlign,
                color: _ctx.color,
                backgroundColor: _ctx.bgColor,
                height: $options.addUnit(_ctx.height)
              }, _ctx.inputStyle])
            }, null, 44, ["value", "disabled", "focus", "maxlength", "adjust-position", "auto-blur", "placeholder", "placeholder-style"]),
            $data.keyword && _ctx.clearabled && $data.focused ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "u-search__content__icon u-search__content__close",
              onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.createVNode(_component_u_icon, {
                name: "close",
                size: "11",
                color: "#ffffff",
                customStyle: "line-height: 12px"
              })
            ])) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode(
          "text",
          {
            style: vue.normalizeStyle([_ctx.actionStyle]),
            class: vue.normalizeClass(["u-search__action", [($options.showActionBtn || $data.show) && "u-search__action--active"]]),
            onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.custom && $options.custom(...args), ["stop", "prevent"]))
          },
          vue.toDisplayString(_ctx.actionText),
          7
          /* TEXT, CLASS, STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_2$5 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$E], ["__scopeId", "data-v-ed789780"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-search/u-search.vue"]]);
  const props$p = defineMixin({
    props: {
      // 给col添加间距，左右边距各占一半
      gutter: {
        type: [String, Number],
        default: () => props$w.row.gutter
      },
      // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
      justify: {
        type: String,
        default: () => props$w.row.justify
      },
      // 垂直对齐方式，可选值为top、center、bottom
      align: {
        type: String,
        default: () => props$w.row.align
      }
    }
  });
  const _sfc_main$Q = {
    name: "u-row",
    mixins: [mpMixin, mixin, props$p],
    data() {
      return {};
    },
    computed: {
      uJustify() {
        if (this.justify == "end" || this.justify == "start")
          return "flex-" + this.justify;
        else if (this.justify == "around" || this.justify == "between")
          return "space-" + this.justify;
        else
          return this.justify;
      },
      uAlignItem() {
        if (this.align == "top")
          return "flex-start";
        if (this.align == "bottom")
          return "flex-end";
        else
          return this.align;
      },
      rowStyle() {
        const style = {
          alignItems: this.uAlignItem,
          justifyContent: this.uJustify
        };
        if (this.gutter) {
          style.marginLeft = addUnit(-Number(this.gutter) / 2);
          style.marginRight = addUnit(-Number(this.gutter) / 2);
        }
        return deepMerge$3(style, addStyle(this.customStyle));
      }
    },
    emits: ["click"],
    methods: {
      clickHandler(e2) {
        this.$emit("click");
      },
      async getComponentWidth() {
        await sleep();
        return new Promise((resolve) => {
          this.$uGetRect(".u-row").then((res) => {
            resolve(res.width);
          });
        });
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-row",
        ref: "u-row",
        style: vue.normalizeStyle([$options.rowStyle]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_3$4 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$D], ["__scopeId", "data-v-f8e42af4"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-row/u-row.vue"]]);
  const props$o = defineMixin({
    props: {
      // 是否展示组件
      show: {
        type: Boolean,
        default: () => props$w.transition.show
      },
      // 使用的动画模式
      mode: {
        type: String,
        default: () => props$w.transition.mode
      },
      // 动画的执行时间，单位ms
      duration: {
        type: [String, Number],
        default: () => props$w.transition.duration
      },
      // 使用的动画过渡函数
      timingFunction: {
        type: String,
        default: () => props$w.transition.timingFunction
      }
    }
  });
  const getClassNames = (name) => ({
    enter: `u-${name}-enter u-${name}-enter-active`,
    "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
    leave: `u-${name}-leave u-${name}-leave-active`,
    "leave-to": `u-${name}-leave-to u-${name}-leave-active`
  });
  const transition = {
    methods: {
      // 组件被点击发出事件
      clickHandler() {
        this.$emit("click");
      },
      // vue版本的组件进场处理
      async vueEnter() {
        const classNames = getClassNames(this.mode);
        this.status = "enter";
        this.$emit("beforeEnter");
        this.inited = true;
        this.display = true;
        this.classes = classNames.enter;
        await vue.nextTick();
        {
          await sleep(20);
          this.$emit("enter");
          this.transitionEnded = false;
          this.$emit("afterEnter");
          this.classes = classNames["enter-to"];
        }
      },
      // 动画离场处理
      async vueLeave() {
        if (!this.display)
          return;
        const classNames = getClassNames(this.mode);
        this.status = "leave";
        this.$emit("beforeLeave");
        this.classes = classNames.leave;
        await vue.nextTick();
        {
          this.transitionEnded = false;
          this.$emit("leave");
          setTimeout(this.onTransitionEnd, this.duration);
          this.classes = classNames["leave-to"];
        }
      },
      // 完成过渡后触发
      onTransitionEnd() {
        if (this.transitionEnded)
          return;
        this.transitionEnded = true;
        this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
        if (!this.show && this.display) {
          this.display = false;
          this.inited = false;
        }
      }
    }
  };
  const _sfc_main$P = {
    name: "u-transition",
    data() {
      return {
        inited: false,
        // 是否显示/隐藏组件
        viewStyle: {},
        // 组件内部的样式
        status: "",
        // 记录组件动画的状态
        transitionEnded: false,
        // 组件是否结束的标记
        display: false,
        // 组件是否展示
        classes: ""
        // 应用的类名
      };
    },
    emits: ["click", "beforeEnter", "enter", "afterEnter", "beforeLeave", "leave", "afterLeave"],
    computed: {
      mergeStyle() {
        const { viewStyle, customStyle } = this;
        return {
          transitionDuration: `${this.duration}ms`,
          // display: `${this.display ? '' : 'none'}`,
          transitionTimingFunction: this.timingFunction,
          // 避免自定义样式影响到动画属性，所以写在viewStyle前面
          ...addStyle(customStyle),
          ...viewStyle
        };
      }
    },
    // 将mixin挂在到组件中，实际上为一个vue格式对象。
    mixins: [mpMixin, mixin, transition, props$o],
    watch: {
      show: {
        handler(newVal) {
          newVal ? this.vueEnter() : this.vueLeave();
        },
        // 表示同时监听初始化时的props的show的意思
        immediate: true
      }
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.inited ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-transition", $data.classes]),
        ref: "u-transition",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
        style: vue.normalizeStyle([$options.mergeStyle]),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.noop && _ctx.noop(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$7 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$C], ["__scopeId", "data-v-0573594d"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-transition/u-transition.vue"]]);
  const props$n = defineMixin({
    props: {
      // 图片地址
      src: {
        type: String,
        default: () => props$w.image.src
      },
      // 裁剪模式
      mode: {
        type: String,
        default: () => props$w.image.mode
      },
      // 宽度，单位任意
      width: {
        type: [String, Number],
        default: () => props$w.image.width
      },
      // 高度，单位任意
      height: {
        type: [String, Number],
        default: () => props$w.image.height
      },
      // 图片形状，circle-圆形，square-方形
      shape: {
        type: String,
        default: () => props$w.image.shape
      },
      // 圆角，单位任意
      radius: {
        type: [String, Number],
        default: () => props$w.image.radius
      },
      // 是否懒加载，微信小程序、App、百度小程序、字节跳动小程序
      lazyLoad: {
        type: Boolean,
        default: () => props$w.image.lazyLoad
      },
      // 开启长按图片显示识别微信小程序码菜单
      showMenuByLongpress: {
        type: Boolean,
        default: () => props$w.image.showMenuByLongpress
      },
      // 加载中的图标，或者小图片
      loadingIcon: {
        type: String,
        default: () => props$w.image.loadingIcon
      },
      // 加载失败的图标，或者小图片
      errorIcon: {
        type: String,
        default: () => props$w.image.errorIcon
      },
      // 是否显示加载中的图标或者自定义的slot
      showLoading: {
        type: Boolean,
        default: () => props$w.image.showLoading
      },
      // 是否显示加载错误的图标或者自定义的slot
      showError: {
        type: Boolean,
        default: () => props$w.image.showError
      },
      // 是否需要淡入效果
      fade: {
        type: Boolean,
        default: () => props$w.image.fade
      },
      // 只支持网络资源，只对微信小程序有效
      webp: {
        type: Boolean,
        default: () => props$w.image.webp
      },
      // 过渡时间，单位ms
      duration: {
        type: [String, Number],
        default: () => props$w.image.duration
      },
      // 背景颜色，用于深色页面加载图片时，为了和背景色融合
      bgColor: {
        type: String,
        default: () => props$w.image.bgColor
      }
    }
  });
  const _sfc_main$O = {
    name: "u-image",
    mixins: [mpMixin, mixin, props$n],
    data() {
      return {
        // 图片是否加载错误，如果是，则显示错误占位图
        isError: false,
        // 初始化组件时，默认为加载中状态
        loading: true,
        // 不透明度，为了实现淡入淡出的效果
        opacity: 1,
        // 过渡时间，因为props的值无法修改，故需要一个中间值
        durationTime: this.duration,
        // 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
        backgroundStyle: {},
        // 用于fade模式的控制组件显示与否
        show: false
      };
    },
    watch: {
      src: {
        immediate: true,
        handler(n2) {
          if (!n2) {
            this.isError = true;
          } else {
            this.isError = false;
            this.loading = true;
          }
        }
      }
    },
    computed: {
      wrapStyle() {
        let style = {};
        style.width = addUnit(this.width);
        style.height = addUnit(this.height);
        style.borderRadius = this.shape == "circle" ? "10000px" : addUnit(this.radius);
        style.overflow = this.radius > 0 ? "hidden" : "visible";
        return deepMerge$3(style, addStyle(this.customStyle));
      }
    },
    mounted() {
      this.show = true;
    },
    emits: ["click", "error", "load"],
    methods: {
      addUnit,
      // 点击图片
      onClick() {
        this.$emit("click");
      },
      // 图片加载失败
      onErrorHandler(err) {
        this.loading = false;
        this.isError = true;
        this.$emit("error", err);
      },
      // 图片加载完成，标记loading结束
      onLoadHandler(event) {
        this.loading = false;
        this.isError = false;
        this.$emit("load", event);
        this.removeBgColor();
      },
      // 移除图片的背景色
      removeBgColor() {
        this.backgroundStyle = {
          backgroundColor: "transparent"
        };
      }
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_1$7);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      mode: "fade",
      show: $data.show,
      duration: _ctx.fade ? 1e3 : 0
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode(
          "view",
          {
            class: "u-image",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onClick && $options.onClick(...args)),
            style: vue.normalizeStyle([$options.wrapStyle, $data.backgroundStyle])
          },
          [
            !$data.isError ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              src: _ctx.src,
              mode: _ctx.mode,
              onError: _cache[0] || (_cache[0] = (...args) => $options.onErrorHandler && $options.onErrorHandler(...args)),
              onLoad: _cache[1] || (_cache[1] = (...args) => $options.onLoadHandler && $options.onLoadHandler(...args)),
              "show-menu-by-longpress": _ctx.showMenuByLongpress,
              "lazy-load": _ctx.lazyLoad,
              class: "u-image__image",
              style: vue.normalizeStyle({
                borderRadius: _ctx.shape == "circle" ? "10000px" : $options.addUnit(_ctx.radius),
                width: $options.addUnit(_ctx.width),
                height: $options.addUnit(_ctx.height)
              })
            }, null, 44, ["src", "mode", "show-menu-by-longpress", "lazy-load"])) : vue.createCommentVNode("v-if", true),
            _ctx.showLoading && $data.loading ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "u-image__loading",
                style: vue.normalizeStyle({
                  borderRadius: _ctx.shape == "circle" ? "50%" : $options.addUnit(_ctx.radius),
                  backgroundColor: this.bgColor,
                  width: $options.addUnit(_ctx.width),
                  height: $options.addUnit(_ctx.height)
                })
              },
              [
                vue.renderSlot(_ctx.$slots, "loading", {}, () => [
                  vue.createVNode(_component_u_icon, {
                    name: _ctx.loadingIcon,
                    width: _ctx.width,
                    height: _ctx.height
                  }, null, 8, ["name", "width", "height"])
                ], true)
              ],
              4
              /* STYLE */
            )) : vue.createCommentVNode("v-if", true),
            _ctx.showError && $data.isError && !$data.loading ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 2,
                class: "u-image__error",
                style: vue.normalizeStyle({
                  borderRadius: _ctx.shape == "circle" ? "50%" : $options.addUnit(_ctx.radius),
                  width: $options.addUnit(_ctx.width),
                  height: $options.addUnit(_ctx.height)
                })
              },
              [
                vue.renderSlot(_ctx.$slots, "error", {}, () => [
                  vue.createVNode(_component_u_icon, {
                    name: _ctx.errorIcon,
                    width: _ctx.width,
                    height: _ctx.height
                  }, null, 8, ["name", "width", "height"])
                ], true)
              ],
              4
              /* STYLE */
            )) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        )
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "duration"]);
  }
  const __easycom_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$B], ["__scopeId", "data-v-9d58ba7c"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-image/u-image.vue"]]);
  const _imports_0$1 = "/assets/icon_main_setting.4e3550e8.png";
  const _imports_1$1 = "/assets/icon_main_study_plan.8ff29304.png";
  const _imports_2$2 = "/assets/icon_main_study_route.a4440583.png";
  const _imports_3 = "/assets/icon_main_work_plan.b54a1098.png";
  const _imports_4 = "/assets/icon_main_data_analyze.3c49a76c.png";
  const _imports_5 = "/assets/icon_main_news.1a163f87.png";
  const _imports_6 = "/assets/icon_main_pay.3a5c0a1f.png";
  const _imports_7 = "/assets/icon_main_star.8c72fa49.png";
  const _imports_8 = "/assets/icon_main_custom.71b7d6d4.png";
  var toString$1 = Object.prototype.toString;
  function isArray$1(val) {
    return toString$1.call(val) === "[object Array]";
  }
  function isObject$2(val) {
    return val !== null && typeof val === "object";
  }
  function isDate$1(val) {
    return toString$1.call(val) === "[object Date]";
  }
  function isURLSearchParams$1(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach$1(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray$1(obj)) {
      for (var i2 = 0, l2 = obj.length; i2 < l2; i2++) {
        fn.call(null, obj[i2], i2, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject$1(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge$2() {
    let result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge$2(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge$2({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
      forEach$1(arguments[i2], assignValue);
    }
    return result;
  }
  function isUndefined$2(val) {
    return typeof val === "undefined";
  }
  function encode$1(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL$1(url2, params, paramsSerializer) {
    if (!params) {
      return url2;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (isURLSearchParams$1(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      forEach$1(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray$1(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        forEach$1(val, function parseValue(v2) {
          if (isDate$1(v2)) {
            v2 = v2.toISOString();
          } else if (isObject$2(v2)) {
            v2 = JSON.stringify(v2);
          }
          parts.push(encode$1(key) + "=" + encode$1(v2));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL$1(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs$1(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  function buildFullPath$1(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL$1(requestedURL)) {
      return combineURLs$1(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle$1(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$3 = (keys, config2) => {
    let config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined$2(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  const adapter$1 = (config2) => {
    return new Promise((resolve, reject) => {
      let fullPath = buildURL$1(buildFullPath$1(config2.baseURL, config2.url), config2.params, config2.paramsSerializer);
      const _config = {
        url: fullPath,
        header: config2.header,
        complete: (response) => {
          config2.fullPath = fullPath;
          response.config = config2;
          response.rawData = response.data;
          try {
            let jsonParseHandle = false;
            const forcedJSONParsingType = typeof config2.forcedJSONParsing;
            if (forcedJSONParsingType === "boolean") {
              jsonParseHandle = config2.forcedJSONParsing;
            } else if (forcedJSONParsingType === "object") {
              const includesMethod = config2.forcedJSONParsing.include || [];
              jsonParseHandle = includesMethod.includes(config2.method);
            }
            if (jsonParseHandle && typeof response.data === "string") {
              response.data = JSON.parse(response.data);
            }
          } catch (e2) {
          }
          settle$1(resolve, reject, response);
        }
      };
      let requestTask;
      if (config2.method === "UPLOAD") {
        delete _config.header["content-type"];
        delete _config.header["Content-Type"];
        let otherConfig = {
          filePath: config2.filePath,
          name: config2.name
        };
        const optionalKeys = [
          "files",
          "timeout",
          "formData"
        ];
        requestTask = uni.uploadFile({ ..._config, ...otherConfig, ...mergeKeys$3(optionalKeys, config2) });
      } else if (config2.method === "DOWNLOAD") {
        const optionalKeys = [
          "timeout"
        ];
        requestTask = uni.downloadFile({ ..._config, ...mergeKeys$3(optionalKeys, config2) });
      } else {
        const optionalKeys = [
          "data",
          "method",
          "timeout",
          "dataType",
          "responseType",
          "sslVerify",
          "firstIpv4"
        ];
        requestTask = uni.request({ ..._config, ...mergeKeys$3(optionalKeys, config2) });
      }
      if (config2.getTask) {
        config2.getTask(requestTask, config2);
      }
    });
  };
  const dispatchRequest$1 = (config2) => {
    return adapter$1(config2);
  };
  function InterceptorManager$1() {
    this.handlers = [];
  }
  InterceptorManager$1.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager$1.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager$1.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h2) => {
      if (h2 !== null) {
        fn(h2);
      }
    });
  };
  const mergeKeys$2 = (keys, globalsConfig, config2) => {
    let config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined$2(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined$2(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  const mergeConfig$1 = (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: config2.baseURL || globalsConfig.baseURL || "",
      method,
      url: config2.url || "",
      params: config2.params || {},
      custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
      header: deepMerge$2(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus", "paramsSerializer", "forcedJSONParsing"];
    config3 = { ...config3, ...mergeKeys$2(defaultToConfig2Keys, globalsConfig, config2) };
    if (method === "DOWNLOAD") {
      const downloadKeys = [
        "timeout"
      ];
      config3 = { ...config3, ...mergeKeys$2(downloadKeys, globalsConfig, config2) };
    } else if (method === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined$2(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined$2(config3.timeout) && !isUndefined$2(globalsConfig.timeout)) {
        config3["timeout"] = globalsConfig["timeout"];
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = { ...config3, ...mergeKeys$2(defaultsKeys, globalsConfig, config2) };
    }
    return config3;
  };
  const defaults$1 = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    paramsSerializer: null,
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    // 是否尝试将响应数据json化
    forcedJSONParsing: true
  };
  var clone$1 = function() {
    function _instanceof(obj, type2) {
      return type2 != null && obj instanceof type2;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_2) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_2) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_2) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto2;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value2) {
              resolve(_clone(value2, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto2 = Object.getPrototypeOf(parent2);
            child = Object.create(proto2);
          } else {
            child = Object.create(prototype);
            proto2 = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value2, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value2, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value2) {
            var entryChild = _clone(value2, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i2 in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i2);
          if (attrs) {
            child[i2] = _clone(parent2[i2], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i2);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i2] = _clone(parent2[i2], depth2 - 1);
          } catch (e2) {
            if (e2 instanceof TypeError) {
              continue;
            } else if (e2 instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            var symbol = symbols[i2];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i2 = 0; i2 < allPropertyNames.length; i2++) {
            var propertyName = allPropertyNames[i2];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c2 = function() {
      };
      c2.prototype = parent;
      return new c2();
    };
    function __objToStr(o2) {
      return Object.prototype.toString.call(o2);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o2) {
      return typeof o2 === "object" && __objToStr(o2) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o2) {
      return typeof o2 === "object" && __objToStr(o2) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o2) {
      return typeof o2 === "object" && __objToStr(o2) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re2) {
      var flags = "";
      if (re2.global)
        flags += "g";
      if (re2.ignoreCase)
        flags += "i";
      if (re2.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  let Request$1 = class Request {
    /**
     * @param {Object} arg - 全局配置
     * @param {String} arg.baseURL - 全局根路径
     * @param {Object} arg.header - 全局header
     * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
     * @param {String} arg.dataType = [json] - 全局默认的dataType
     * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
     * @param {Object} arg.custom - 全局默认的自定义参数
     * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
     * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
     * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
     * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
     * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
     */
    constructor(arg = {}) {
      if (!isPlainObject$1(arg)) {
        arg = {};
        formatAppLog("warn", "at node_modules/luch-request/src/lib/core/Request.js:37", "设置全局参数必须接收一个Object");
      }
      this.config = clone$1({ ...defaults$1, ...arg });
      this.interceptors = {
        request: new InterceptorManager$1(),
        response: new InterceptorManager$1()
      };
    }
    /**
     * @Function
     * @param {Request~setConfigCallback} f - 设置全局默认配置
     */
    setConfig(f2) {
      this.config = f2(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig$1(this.config, config2);
      let chain = [dispatchRequest$1, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    /**
     * @Function
     * @param {Object} config - 请求配置项
     * @prop {String} options.url - 请求路径
     * @prop {Object} options.data - 请求参数
     * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
     * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
     * @prop {Object} [options.header = config.header] - 请求header
     * @prop {Object} [options.method = config.method] - 请求方法
     * @returns {Promise<unknown>}
     */
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware({
        url: url2,
        method: "GET",
        ...options
      });
    }
    post(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "POST",
        ...options
      });
    }
    put(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "PUT",
        ...options
      });
    }
    delete(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "DELETE",
        ...options
      });
    }
    options(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "OPTIONS",
        ...options
      });
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
    get version() {
      return "3.1.0";
    }
  };
  const http$1 = new Request$1({
    baseURL: "http://8.138.115.27:8886",
    // 基地址
    timeout: 1500
    // 超时时间
  });
  http$1.interceptors.request.use((config2) => {
    const defaultHeader = {};
    const token = uni.getStorageSync("token");
    if (token) {
      defaultHeader.Authorization = token;
    }
    config2.header = {
      ...defaultHeader,
      ...config2.header
    };
    return config2;
  }, (config2) => {
    return Promise.reject(config2);
  });
  http$1.interceptors.response.use((response) => {
    return response.data;
  }, (response) => {
    if (response.statusCode === 401) {
      uni.redirectTo({
        url: "/pages/user/login/index"
      });
    } else if (response.statusCode === 404) {
      uni.showToast({
        title: "请求地址不存在...",
        duration: 2e3
      });
    }
    return Promise.reject(response);
  });
  const getNewsListAPI = () => {
    return http$1.request({
      url: "/news/get-list",
      method: "GET"
    });
  };
  const timestampToTime = (timestamp) => {
    timestamp = timestamp ? timestamp : null;
    const date3 = new Date(timestamp * 1e3);
    const Y2 = date3.getFullYear() + "-";
    const M2 = (date3.getMonth() + 1 < 10 ? "0" + (date3.getMonth() + 1) : date3.getMonth() + 1) + "-";
    const D2 = (date3.getDate() < 10 ? "0" + date3.getDate() : date3.getDate()) + " ";
    const h2 = (date3.getHours() < 10 ? "0" + date3.getHours() : date3.getHours()) + ":";
    const m2 = (date3.getMinutes() < 10 ? "0" + date3.getMinutes() : date3.getMinutes()) + ":";
    const s2 = date3.getSeconds() < 10 ? "0" + date3.getSeconds() : date3.getSeconds();
    return Y2 + M2 + D2 + h2 + m2 + s2;
  };
  const timestampToDate = (timestamp) => {
    timestamp = timestamp ? timestamp : null;
    const date3 = new Date(timestamp * 1e3);
    const Y2 = date3.getFullYear() + "-";
    const M2 = (date3.getMonth() + 1 < 10 ? "0" + (date3.getMonth() + 1) : date3.getMonth() + 1) + "-";
    const D2 = date3.getDate() < 10 ? "0" + date3.getDate() : date3.getDate();
    return Y2 + M2 + D2;
  };
  const timeToTimestamp = (time) => {
    const date3 = /* @__PURE__ */ new Date(time + "T00:00:00Z");
    const timestamp = Math.floor(date3.getTime() / 1e3);
    return timestamp;
  };
  const _sfc_main$N = {
    __name: "index",
    setup(__props) {
      const search = vue.ref("");
      const newsList = vue.ref([]);
      vue.onMounted(async () => {
        await getNewsList();
      });
      const getNewsList = async () => {
        await getNewsListAPI().then((res) => {
          newsList.value = res;
          newsList.value.forEach((item) => {
            item.date = timestampToTime(Number(item.date));
          });
          formatAppLog("log", "at pages/home/index.vue:150", newsList.value);
        }).catch((err) => {
          formatAppLog("log", "at pages/home/index.vue:153", err);
        });
      };
      const toCareer = () => {
        uni.navigateTo({
          url: "/pages/career/index"
        });
      };
      const toTree = () => {
        uni.navigateTo({
          url: "/pages/tree/index"
        });
      };
      const toPlan = () => {
        uni.navigateTo({
          url: "/pages/plan/index"
        });
      };
      const toNews = () => {
        uni.navigateTo({
          url: "/pages/news/index"
        });
      };
      const toNewsDetail = (news_id) => {
        uni.navigateTo({
          url: "/pages/news/detail?news_id=" + news_id
        });
      };
      const toAnalyze = () => {
        uni.navigateTo({
          url: "/pages/analyze/index"
        });
      };
      return (_ctx, _cache) => {
        const _component_up_avatar = resolveEasycom(vue.resolveDynamicComponent("up-avatar"), __easycom_2$6);
        const _component_up_col = resolveEasycom(vue.resolveDynamicComponent("up-col"), __easycom_1$8);
        const _component_up_search = resolveEasycom(vue.resolveDynamicComponent("up-search"), __easycom_2$5);
        const _component_up_row = resolveEasycom(vue.resolveDynamicComponent("up-row"), __easycom_3$4);
        const _component_up_image = resolveEasycom(vue.resolveDynamicComponent("up-image"), __easycom_1$6);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_row, {
                justify: "space-between",
                gutter: "10"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_up_col, { span: "4" }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "nav-layout nav-left" }, [
                        vue.createVNode(_component_up_avatar, {
                          src: "https://xtionai-storage-test.oss-cn-shenzhen.aliyuncs.com/20240315/ai_photo/2eb1714d5d914510b10df7d443110be2.png",
                          size: "30"
                        }),
                        vue.createElementVNode("view", { class: "right" }, [
                          vue.createElementVNode("span", { class: "font-red" }, "WELCOME!"),
                          vue.createElementVNode("span", null, "用户名")
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_up_col, { span: "6" }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "nav-layout" }, [
                        vue.createVNode(_component_up_search, {
                          modelValue: search.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event),
                          showAction: false,
                          bgColor: "#D4D4D4",
                          height: "55rpx"
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_up_col, {
                    span: "2",
                    style: { "padding": "0" }
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "nav-layout" }, [
                        vue.createElementVNode("image", {
                          src: _imports_0$1,
                          mode: "aspectFit",
                          style: { "width": "40rpx", "height": "40rpx" }
                        })
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "status_bar" }),
              vue.createElementVNode("view", { class: "top-grid" }, [
                vue.createVNode(_component_up_row, {
                  justify: "space-between",
                  gutter: "10"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_up_col, { span: "4" }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("view", {
                          onClick: toPlan,
                          class: "grid-layout"
                        }, [
                          vue.createElementVNode("image", {
                            src: _imports_1$1,
                            mode: "aspectFit",
                            style: { "width": "50rpx", "height": "50rpx" }
                          }),
                          vue.createElementVNode("view", null, [
                            vue.createTextVNode(" 学习"),
                            vue.createElementVNode("br"),
                            vue.createElementVNode("span", { class: "font-red" }, "记录")
                          ])
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_col, { span: "8" }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("view", {
                          onClick: toTree,
                          class: "grid-layout big-grid-layout"
                        }, [
                          vue.createElementVNode("image", {
                            src: _imports_2$2,
                            mode: "aspectFit",
                            style: { "width": "50rpx", "height": "50rpx" }
                          }),
                          vue.createElementVNode("view", null, [
                            vue.createTextVNode(" 学习路线"),
                            vue.createElementVNode("br"),
                            vue.createElementVNode("span", { class: "font-red" }, "技能树")
                          ])
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_up_row, {
                  justify: "space-between",
                  gutter: "10"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_up_col, { span: "8" }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("view", {
                          onClick: toCareer,
                          class: "grid-layout big-grid-layout"
                        }, [
                          vue.createElementVNode("image", {
                            src: _imports_3,
                            mode: "aspectFit",
                            style: { "width": "50rpx", "height": "50rpx" }
                          }),
                          vue.createElementVNode("view", null, [
                            vue.createTextVNode(" 专业介绍"),
                            vue.createElementVNode("br"),
                            vue.createElementVNode("span", { class: "font-red" }, "就业规划")
                          ])
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_col, { span: "4" }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("view", {
                          onClick: toAnalyze,
                          class: "grid-layout"
                        }, [
                          vue.createElementVNode("image", {
                            src: _imports_4,
                            mode: "aspectFit",
                            style: { "width": "50rpx", "height": "50rpx" }
                          }),
                          vue.createElementVNode("view", null, [
                            vue.createTextVNode(" 数据"),
                            vue.createElementVNode("br"),
                            vue.createElementVNode("span", { class: "font-red" }, "分析")
                          ])
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createElementVNode("view", { class: "line-box" }, [
                  vue.createElementVNode("view", {
                    class: "line-content",
                    onClick: toNews
                  }, [
                    vue.createElementVNode("view", { class: "line-item-top" }, [
                      vue.createElementVNode("image", {
                        src: _imports_5,
                        mode: "aspectFit",
                        style: { "width": "46rpx", "height": "40rpx" }
                      })
                    ]),
                    vue.createElementVNode("span", null, "新闻")
                  ]),
                  vue.createElementVNode("view", { class: "line-content" }, [
                    vue.createElementVNode("view", { class: "line-item-top" }, [
                      vue.createElementVNode("image", {
                        src: _imports_6,
                        mode: "aspectFit",
                        style: { "width": "46rpx", "height": "40rpx" }
                      })
                    ]),
                    vue.createElementVNode("span", null, "薪资")
                  ]),
                  vue.createElementVNode("view", { class: "line-content" }, [
                    vue.createElementVNode("view", { class: "line-item-top" }, [
                      vue.createElementVNode("image", {
                        src: _imports_7,
                        mode: "aspectFit",
                        style: { "width": "46rpx", "height": "40rpx" }
                      })
                    ]),
                    vue.createElementVNode("span", null, "收藏")
                  ]),
                  vue.createElementVNode("view", { class: "line-content" }, [
                    vue.createElementVNode("view", { class: "line-item-top" }, [
                      vue.createElementVNode("image", {
                        src: _imports_8,
                        mode: "aspectFit",
                        style: { "width": "46rpx", "height": "40rpx" }
                      })
                    ]),
                    vue.createElementVNode("span", null, "客服")
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "news-container" }, [
                vue.createElementVNode("span", { class: "title" }, "最新消息 "),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(newsList.value, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index2,
                      class: "new-box",
                      onClick: ($event) => toNewsDetail(item.news_id)
                    }, [
                      vue.createElementVNode("view", { class: "img" }, [
                        vue.createVNode(_component_up_image, {
                          radius: "20rpx",
                          "show-loading": true,
                          src: item.icon_url,
                          width: "260rpx",
                          height: "180rpx",
                          mode: "scaleToFill"
                        }, null, 8, ["src"])
                      ]),
                      vue.createElementVNode("view", { class: "new-right" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "title" },
                          vue.toDisplayString(item.title),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "date font-red" },
                          " NEWS " + vue.toDisplayString(item.date),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "content font-red" },
                          vue.toDisplayString(item.intro),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesHomeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__file", "D:/subject-analyze/pages/home/index.vue"]]);
  const props$m = defineMixin({
    props: {
      bgColor: {
        type: String,
        default: () => props$w.statusBar.bgColor
      }
    }
  });
  const _sfc_main$M = {
    name: "u-status-bar",
    mixins: [mpMixin, mixin, props$m],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = addUnit(sys().statusBarHeight, "px");
        style.backgroundColor = this.bgColor;
        return deepMerge$3(style, addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle([$options.style]),
        class: "u-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$A], ["__scopeId", "data-v-c0b45a48"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-status-bar/u-status-bar.vue"]]);
  const props$l = defineMixin({
    props: {
      // 是否开启顶部安全区适配
      safeAreaInsetTop: {
        type: Boolean,
        default: () => props$w.navbar.safeAreaInsetTop
      },
      // 固定在顶部时，是否生成一个等高元素，以防止塌陷
      placeholder: {
        type: Boolean,
        default: () => props$w.navbar.placeholder
      },
      // 是否固定在顶部
      fixed: {
        type: Boolean,
        default: () => props$w.navbar.fixed
      },
      // 是否显示下边框
      border: {
        type: Boolean,
        default: () => props$w.navbar.border
      },
      // 左边的图标
      leftIcon: {
        type: String,
        default: () => props$w.navbar.leftIcon
      },
      // 左边的提示文字
      leftText: {
        type: String,
        default: () => props$w.navbar.leftText
      },
      // 左右的提示文字
      rightText: {
        type: String,
        default: () => props$w.navbar.rightText
      },
      // 右边的图标
      rightIcon: {
        type: String,
        default: () => props$w.navbar.rightIcon
      },
      // 标题
      title: {
        type: [String, Number],
        default: () => props$w.navbar.title
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: () => props$w.navbar.bgColor
      },
      // 标题的宽度
      titleWidth: {
        type: [String, Number],
        default: () => props$w.navbar.titleWidth
      },
      // 导航栏高度
      height: {
        type: [String, Number],
        default: () => props$w.navbar.height
      },
      // 左侧返回图标的大小
      leftIconSize: {
        type: [String, Number],
        default: () => props$w.navbar.leftIconSize
      },
      // 左侧返回图标的颜色
      leftIconColor: {
        type: String,
        default: () => props$w.navbar.leftIconColor
      },
      // 点击左侧区域(返回图标)，是否自动返回上一页
      autoBack: {
        type: Boolean,
        default: () => props$w.navbar.autoBack
      },
      // 标题的样式，对象或字符串
      titleStyle: {
        type: [String, Object],
        default: () => props$w.navbar.titleStyle
      }
    }
  });
  const _sfc_main$L = {
    name: "u-navbar",
    mixins: [mpMixin, mixin, props$l],
    data() {
      return {};
    },
    emits: ["leftClick", "rightClick"],
    methods: {
      addStyle,
      addUnit,
      sys,
      getPx,
      // 点击左侧区域
      leftClick() {
        this.$emit("leftClick");
        if (this.autoBack) {
          uni.navigateBack();
        }
      },
      // 点击右侧区域
      rightClick() {
        this.$emit("rightClick");
      }
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_1$5);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-navbar", [_ctx.customClass]])
      },
      [
        _ctx.fixed && _ctx.placeholder ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "u-navbar__placeholder",
            style: vue.normalizeStyle({
              height: $options.addUnit($options.getPx(_ctx.height) + $options.sys().statusBarHeight, "px")
            })
          },
          null,
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([_ctx.fixed && "u-navbar--fixed"])
          },
          [
            _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, {
              key: 0,
              bgColor: _ctx.bgColor
            }, null, 8, ["bgColor"])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["u-navbar__content", [_ctx.border && "u-border-bottom"]]),
                style: vue.normalizeStyle({
                  height: $options.addUnit(_ctx.height),
                  backgroundColor: _ctx.bgColor
                })
              },
              [
                vue.createElementVNode("view", {
                  class: "u-navbar__content__left",
                  "hover-class": "u-navbar__content__left--hover",
                  "hover-start-time": "150",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.leftClick && $options.leftClick(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "left", {}, () => [
                    _ctx.leftIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                      key: 0,
                      name: _ctx.leftIcon,
                      size: _ctx.leftIconSize,
                      color: _ctx.leftIconColor
                    }, null, 8, ["name", "size", "color"])) : vue.createCommentVNode("v-if", true),
                    _ctx.leftText ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        style: vue.normalizeStyle({
                          color: _ctx.leftIconColor
                        }),
                        class: "u-navbar__content__left__text"
                      },
                      vue.toDisplayString(_ctx.leftText),
                      5
                      /* TEXT, STYLE */
                    )) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.renderSlot(_ctx.$slots, "center", {}, () => [
                  vue.createElementVNode(
                    "text",
                    {
                      class: "u-line-1 u-navbar__content__title",
                      style: vue.normalizeStyle([{
                        width: $options.addUnit(_ctx.titleWidth)
                      }, $options.addStyle(_ctx.titleStyle)])
                    },
                    vue.toDisplayString(_ctx.title),
                    5
                    /* TEXT, STYLE */
                  )
                ], true),
                _ctx.$slots.right || _ctx.rightIcon || _ctx.rightText ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "u-navbar__content__right",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.rightClick && $options.rightClick(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "right", {}, () => [
                    _ctx.rightIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                      key: 0,
                      name: _ctx.rightIcon,
                      size: "20"
                    }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
                    _ctx.rightText ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        class: "u-navbar__content__right__text"
                      },
                      vue.toDisplayString(_ctx.rightText),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ], true)
                ])) : vue.createCommentVNode("v-if", true)
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$z], ["__scopeId", "data-v-9d9e7ee2"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-navbar/u-navbar.vue"]]);
  const props$k = defineMixin({
    props: {
      // 绑定的值
      modelValue: {
        type: [String, Number],
        default: () => props$w.input.value
      },
      // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
      // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
      // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
      // text-文本输入键盘
      type: {
        type: String,
        default: () => props$w.input.type
      },
      // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
      // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
      fixed: {
        type: Boolean,
        default: () => props$w.input.fixed
      },
      // 是否禁用输入框
      disabled: {
        type: Boolean,
        default: () => props$w.input.disabled
      },
      // 禁用状态时的背景色
      disabledColor: {
        type: String,
        default: () => props$w.input.disabledColor
      },
      // 是否显示清除控件
      clearable: {
        type: Boolean,
        default: () => props$w.input.clearable
      },
      // 是否密码类型
      password: {
        type: Boolean,
        default: () => props$w.input.password
      },
      // 最大输入长度，设置为 -1 的时候不限制最大长度
      maxlength: {
        type: [String, Number],
        default: () => props$w.input.maxlength
      },
      // 	输入框为空时的占位符
      placeholder: {
        type: String,
        default: () => props$w.input.placeholder
      },
      // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
      placeholderClass: {
        type: String,
        default: () => props$w.input.placeholderClass
      },
      // 指定placeholder的样式
      placeholderStyle: {
        type: [String, Object],
        default: () => props$w.input.placeholderStyle
      },
      // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
      showWordLimit: {
        type: Boolean,
        default: () => props$w.input.showWordLimit
      },
      // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
      // https://uniapp.dcloud.io/component/input
      // https://uniapp.dcloud.io/component/textarea
      confirmType: {
        type: String,
        default: () => props$w.input.confirmType
      },
      // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
      confirmHold: {
        type: Boolean,
        default: () => props$w.input.confirmHold
      },
      // focus时，点击页面的时候不收起键盘，微信小程序有效
      holdKeyboard: {
        type: Boolean,
        default: () => props$w.input.holdKeyboard
      },
      // 自动获取焦点
      // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
      focus: {
        type: Boolean,
        default: () => props$w.input.focus
      },
      // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
      autoBlur: {
        type: Boolean,
        default: () => props$w.input.autoBlur
      },
      // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
      disableDefaultPadding: {
        type: Boolean,
        default: () => props$w.input.disableDefaultPadding
      },
      // 指定focus时光标的位置
      cursor: {
        type: [String, Number],
        default: () => props$w.input.cursor
      },
      // 输入框聚焦时底部与键盘的距离
      cursorSpacing: {
        type: [String, Number],
        default: () => props$w.input.cursorSpacing
      },
      // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
      selectionStart: {
        type: [String, Number],
        default: () => props$w.input.selectionStart
      },
      // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
      selectionEnd: {
        type: [String, Number],
        default: () => props$w.input.selectionEnd
      },
      // 键盘弹起时，是否自动上推页面
      adjustPosition: {
        type: Boolean,
        default: () => props$w.input.adjustPosition
      },
      // 输入框内容对齐方式，可选值为：left|center|right
      inputAlign: {
        type: String,
        default: () => props$w.input.inputAlign
      },
      // 输入框字体的大小
      fontSize: {
        type: [String, Number],
        default: () => props$w.input.fontSize
      },
      // 输入框字体颜色
      color: {
        type: String,
        default: () => props$w.input.color
      },
      // 输入框前置图标
      prefixIcon: {
        type: String,
        default: () => props$w.input.prefixIcon
      },
      // 前置图标样式，对象或字符串
      prefixIconStyle: {
        type: [String, Object],
        default: () => props$w.input.prefixIconStyle
      },
      // 输入框后置图标
      suffixIcon: {
        type: String,
        default: () => props$w.input.suffixIcon
      },
      // 后置图标样式，对象或字符串
      suffixIconStyle: {
        type: [String, Object],
        default: () => props$w.input.suffixIconStyle
      },
      // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
      border: {
        type: String,
        default: () => props$w.input.border
      },
      // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
      readonly: {
        type: Boolean,
        default: () => props$w.input.readonly
      },
      // 输入框形状，circle-圆形，square-方形
      shape: {
        type: String,
        default: () => props$w.input.shape
      },
      // 用于处理或者过滤输入框内容的方法
      formatter: {
        type: [Function, null],
        default: () => props$w.input.formatter
      },
      // 是否忽略组件内对文本合成系统事件的处理
      ignoreCompositionEvent: {
        type: Boolean,
        default: true
      }
    }
  });
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  const _sfc_main$K = {
    name: "u-input",
    mixins: [mpMixin, mixin, props$k],
    data() {
      return {
        // 清除操作
        clearInput: false,
        // 输入框的值
        innerValue: "",
        // 是否处于获得焦点状态
        focused: false,
        // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
        firstChange: true,
        // value绑定值的变化是由内部还是外部引起的
        changeFromInner: false,
        // 过滤处理方法
        innerFormatter: (value2) => value2
      };
    },
    created() {
      if (this.formatter) {
        this.innerFormatter = this.formatter;
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          formatAppLog("log", "at node_modules/uview-plus/components/u-input/u-input.vue:154", newVal, oldVal);
          if (this.changeFromInner || this.innerValue === newVal) {
            return;
          }
          this.innerValue = newVal;
          if (this.firstChange === false && this.changeFromInner === false) {
            this.valueChange(this.innerValue);
          } else {
            if (!this.firstChange)
              formValidate(this, "change");
          }
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      // 是否显示清除控件
      isShowClear() {
        const { clearable, readonly, focused, innerValue } = this;
        return !!clearable && !readonly && !!focused && innerValue !== "";
      },
      // 组件的类名
      inputClass() {
        let classes = [], { border, disabled, shape } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-input--radius"]));
        classes.push(`u-input--${shape}`);
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-input--no-radius"
        ]));
        return classes.join(" ");
      },
      // 组件的样式
      wrapperStyle() {
        const style = {};
        if (this.disabled) {
          style.backgroundColor = this.disabledColor;
        }
        if (this.border === "none") {
          style.padding = "0";
        } else {
          style.paddingTop = "6px";
          style.paddingBottom = "6px";
          style.paddingLeft = "9px";
          style.paddingRight = "9px";
        }
        return deepMerge$3(style, addStyle(this.customStyle));
      },
      // 输入框的样式
      inputStyle() {
        const style = {
          color: this.color,
          fontSize: addUnit(this.fontSize),
          textAlign: this.inputAlign
        };
        return style;
      }
    },
    emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"],
    methods: {
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e2) {
        this.innerFormatter = e2;
      },
      // 当键盘输入时，触发input事件
      onInput(e2) {
        let { value: value2 = "" } = e2.detail || {};
        this.innerValue = value2;
        this.$nextTick(() => {
          let formatValue = this.innerFormatter(value2);
          this.innerValue = formatValue;
          this.valueChange(formatValue);
        });
      },
      // 输入框失去焦点时触发
      onBlur(event) {
        this.$emit("blur", event.detail.value);
        sleep(150).then(() => {
          this.focused = false;
        });
        formValidate(this, "blur");
      },
      // 输入框聚焦时触发
      onFocus(event) {
        this.focused = true;
        this.$emit("focus");
      },
      // 点击完成按钮时触发
      onConfirm(event) {
        this.$emit("confirm", this.innerValue);
      },
      // 键盘高度发生变化的时候触发此事件
      // 兼容性：微信小程序2.7.0+、App 3.1.0+
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      // 内容发生变化，进行处理
      valueChange(value2, isOut = false) {
        if (this.clearInput) {
          this.innerValue = "";
          this.clearInput = false;
        }
        this.$nextTick(() => {
          if (!isOut || this.clearInput) {
            this.changeFromInner = true;
            this.$emit("change", value2);
            this.$emit("update:modelValue", value2);
          }
          formValidate(this, "change");
        });
      },
      // 点击清除控件
      onClear() {
        this.clearInput = true;
        this.innerValue = "";
        this.$nextTick(() => {
          this.valueChange("");
          this.$emit("clear");
        });
      },
      /**
       * 在安卓nvue上，事件无法冒泡
       * 在某些时间，我们希望监听u-from-item的点击事件，此时会导致点击u-form-item内的u-input后
       * 无法触发u-form-item的点击事件，这里通过手动调用u-form-item的方法进行触发
       */
      clickHandler() {
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-input", $options.inputClass]),
        style: vue.normalizeStyle([$options.wrapperStyle])
      },
      [
        vue.createElementVNode("view", { class: "u-input__content" }, [
          _ctx.prefixIcon || _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-input__content__prefix-icon"
          }, [
            vue.renderSlot(_ctx.$slots, "prefix", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.prefixIcon,
                size: "18",
                customStyle: _ctx.prefixIconStyle
              }, null, 8, ["name", "customStyle"])
            ], true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", {
            class: "u-input__content__field-wrapper",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
          }, [
            vue.createCommentVNode(" 根据uni-app的input组件文档，H5和APP中只要声明了password参数(无论true还是false)，type均失效，此时\r\n					为了防止type=number时，又存在password属性，type无效，此时需要设置password为undefined\r\n				 "),
            vue.createElementVNode("input", {
              class: "u-input__content__field-wrapper__field",
              style: vue.normalizeStyle([$options.inputStyle]),
              type: _ctx.type,
              focus: _ctx.focus,
              cursor: _ctx.cursor,
              value: $data.innerValue,
              "auto-blur": _ctx.autoBlur,
              disabled: _ctx.disabled || _ctx.readonly,
              maxlength: _ctx.maxlength,
              placeholder: _ctx.placeholder,
              "placeholder-style": _ctx.placeholderStyle,
              "placeholder-class": _ctx.placeholderClass,
              "confirm-type": _ctx.confirmType,
              "confirm-hold": _ctx.confirmHold,
              "hold-keyboard": _ctx.holdKeyboard,
              "cursor-spacing": _ctx.cursorSpacing,
              "adjust-position": _ctx.adjustPosition,
              "selection-end": _ctx.selectionEnd,
              "selection-start": _ctx.selectionStart,
              password: _ctx.password || _ctx.type === "password" || false,
              ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
              onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
              onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
              onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "focus", "cursor", "value", "auto-blur", "disabled", "maxlength", "placeholder", "placeholder-style", "placeholder-class", "confirm-type", "confirm-hold", "hold-keyboard", "cursor-spacing", "adjust-position", "selection-end", "selection-start", "password", "ignoreCompositionEvent"])
          ]),
          $options.isShowClear ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-input__content__clear",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.onClear && $options.onClear(...args))
          }, [
            vue.createVNode(_component_u_icon, {
              name: "close",
              size: "11",
              color: "#ffffff",
              customStyle: "line-height: 12px"
            })
          ])) : vue.createCommentVNode("v-if", true),
          _ctx.suffixIcon || _ctx.$slots.suffix ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "u-input__content__subfix-icon"
          }, [
            vue.renderSlot(_ctx.$slots, "suffix", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.suffixIcon,
                size: "18",
                customStyle: _ctx.suffixIconStyle
              }, null, 8, ["name", "customStyle"])
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$y], ["__scopeId", "data-v-5904192e"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-input/u-input.vue"]]);
  const props$j = defineMixin({
    props: {
      color: {
        type: String,
        default: () => props$w.line.color
      },
      // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
      length: {
        type: [String, Number],
        default: () => props$w.line.length
      },
      // 线条方向，col-竖向，row-横向
      direction: {
        type: String,
        default: () => props$w.line.direction
      },
      // 是否显示细边框
      hairline: {
        type: Boolean,
        default: () => props$w.line.hairline
      },
      // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
      margin: {
        type: [String, Number],
        default: () => props$w.line.margin
      },
      // 是否虚线，true-虚线，false-实线
      dashed: {
        type: Boolean,
        default: () => props$w.line.dashed
      }
    }
  });
  const _sfc_main$J = {
    name: "u-line",
    mixins: [mpMixin, mixin, props$j],
    computed: {
      lineStyle() {
        const style = {};
        style.margin = this.margin;
        if (this.direction === "row") {
          style.borderBottomWidth = "1px";
          style.borderBottomStyle = this.dashed ? "dashed" : "solid";
          style.width = addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleY(0.5)";
        } else {
          style.borderLeftWidth = "1px";
          style.borderLeftStyle = this.dashed ? "dashed" : "solid";
          style.height = addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleX(0.5)";
        }
        style.borderColor = this.color;
        return deepMerge$3(style, addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-line",
        style: vue.normalizeStyle([$options.lineStyle])
      },
      null,
      4
      /* STYLE */
    );
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$x], ["__scopeId", "data-v-bbd9963c"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-line/u-line.vue"]]);
  const props$i = defineMixin({
    props: {
      // input的label提示语
      label: {
        type: String,
        default: () => props$w.formItem.label
      },
      // 绑定的值
      prop: {
        type: String,
        default: () => props$w.formItem.prop
      },
      // 绑定的规则
      rule: {
        type: String,
        default: () => props$w.formItem.rule
      },
      // 是否显示表单域的下划线边框
      borderBottom: {
        type: [String, Boolean],
        default: () => props$w.formItem.borderBottom
      },
      // label的位置，left-左边，top-上边
      labelPosition: {
        type: String,
        default: () => props$w.formItem.labelPosition
      },
      // label的宽度，单位px
      labelWidth: {
        type: [String, Number],
        default: () => props$w.formItem.labelWidth
      },
      // 右侧图标
      rightIcon: {
        type: String,
        default: () => props$w.formItem.rightIcon
      },
      // 左侧图标
      leftIcon: {
        type: String,
        default: () => props$w.formItem.leftIcon
      },
      // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
      required: {
        type: Boolean,
        default: () => props$w.formItem.required
      },
      leftIconStyle: {
        type: [String, Object],
        default: () => props$w.formItem.leftIconStyle
      }
    }
  });
  const _sfc_main$I = {
    name: "u-form-item",
    mixins: [mpMixin, mixin, props$i],
    data() {
      return {
        // 错误提示语
        message: "",
        parentData: {
          // 提示文本的位置
          labelPosition: "left",
          // 提示文本对齐方式
          labelAlign: "left",
          // 提示文本的样式
          labelStyle: {},
          // 提示文本的宽度
          labelWidth: 45,
          // 错误提示方式
          errorType: "message"
        },
        color: color$2
      };
    },
    // 组件创建完成时，将当前实例保存到u-form中
    computed: {
      propsLine() {
        return props$w.line;
      }
    },
    mounted() {
      this.init();
    },
    emits: ["click"],
    methods: {
      addStyle,
      addUnit,
      init() {
        this.updateParentData();
        if (!this.parent) {
          error("u-form-item需要结合u-form组件使用");
        }
      },
      // 获取父组件的参数
      updateParentData() {
        this.getParentData("u-form");
      },
      // 移除u-form-item的校验结果
      clearValidate() {
        this.message = null;
      },
      // 清空当前的组件的校验结果，并重置为初始值
      resetField() {
        const value2 = getProperty(this.parent.originalModel, this.prop);
        setProperty(this.parent.model, this.prop, value2);
        this.message = null;
      },
      // 点击组件
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form-item" }, [
      vue.createElementVNode(
        "view",
        {
          class: "u-form-item__body",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
          style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle), {
            flexDirection: (_ctx.labelPosition || $data.parentData.labelPosition) === "left" ? "row" : "column"
          }])
        },
        [
          vue.createCommentVNode(' 微信小程序中，将一个参数设置空字符串，结果会变成字符串"true" '),
          vue.renderSlot(_ctx.$slots, "label", {}, () => [
            vue.createCommentVNode(" {{required}} "),
            _ctx.required || _ctx.leftIcon || _ctx.label ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: "u-form-item__body__left",
                style: vue.normalizeStyle({
                  width: $options.addUnit(_ctx.labelWidth || $data.parentData.labelWidth),
                  marginBottom: $data.parentData.labelPosition === "left" ? 0 : "5px"
                })
              },
              [
                vue.createCommentVNode(" 为了块对齐 "),
                vue.createElementVNode("view", { class: "u-form-item__body__left__content" }, [
                  vue.createCommentVNode(" nvue不支持伪元素before "),
                  _ctx.required ? (vue.openBlock(), vue.createElementBlock("text", {
                    key: 0,
                    class: "u-form-item__body__left__content__required"
                  }, "*")) : vue.createCommentVNode("v-if", true),
                  _ctx.leftIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "u-form-item__body__left__content__icon"
                  }, [
                    vue.createVNode(_component_u_icon, {
                      name: _ctx.leftIcon,
                      "custom-style": _ctx.leftIconStyle
                    }, null, 8, ["name", "custom-style"])
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode(
                    "text",
                    {
                      class: "u-form-item__body__left__content__label",
                      style: vue.normalizeStyle([$data.parentData.labelStyle, {
                        justifyContent: $data.parentData.labelAlign === "left" ? "flex-start" : $data.parentData.labelAlign === "center" ? "center" : "flex-end"
                      }])
                    },
                    vue.toDisplayString(_ctx.label),
                    5
                    /* TEXT, STYLE */
                  )
                ])
              ],
              4
              /* STYLE */
            )) : vue.createCommentVNode("v-if", true)
          ], true),
          vue.createElementVNode("view", { class: "u-form-item__body__right" }, [
            vue.createElementVNode("view", { class: "u-form-item__body__right__content" }, [
              vue.createElementVNode("view", { class: "u-form-item__body__right__content__slot" }, [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ]),
              _ctx.$slots.right ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "item__body__right__content__icon"
              }, [
                vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ],
        4
        /* STYLE */
      ),
      vue.renderSlot(_ctx.$slots, "error", {}, () => [
        !!$data.message && $data.parentData.errorType === "message" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: "u-form-item__body__right__message",
            style: vue.normalizeStyle({
              marginLeft: $options.addUnit($data.parentData.labelPosition === "top" ? 0 : _ctx.labelWidth || $data.parentData.labelWidth)
            })
          },
          vue.toDisplayString($data.message),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ], true),
      _ctx.borderBottom ? (vue.openBlock(), vue.createBlock(_component_u_line, {
        key: 0,
        color: $data.message && $data.parentData.errorType === "border-bottom" ? $data.color.error : $options.propsLine.color,
        customStyle: `margin-top: ${$data.message && $data.parentData.errorType === "message" ? "5px" : 0}`
      }, null, 8, ["color", "customStyle"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$w], ["__scopeId", "data-v-b4fd400b"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-form-item/u-form-item.vue"]]);
  const props$h = defineMixin({
    props: {
      // 当前form的需要验证字段的集合
      model: {
        type: Object,
        default: () => props$w.form.model
      },
      // 验证规则
      rules: {
        type: [Object, Function, Array],
        default: () => props$w.form.rules
      },
      // 有错误时的提示方式，message-提示信息，toast-进行toast提示
      // border-bottom-下边框呈现红色，none-无提示
      errorType: {
        type: String,
        default: () => props$w.form.errorType
      },
      // 是否显示表单域的下划线边框
      borderBottom: {
        type: Boolean,
        default: () => props$w.form.borderBottom
      },
      // label的位置，left-左边，top-上边
      labelPosition: {
        type: String,
        default: () => props$w.form.labelPosition
      },
      // label的宽度，单位px
      labelWidth: {
        type: [String, Number],
        default: () => props$w.form.labelWidth
      },
      // lable字体的对齐方式
      labelAlign: {
        type: String,
        default: () => props$w.form.labelAlign
      },
      // lable的样式，对象形式
      labelStyle: {
        type: Object,
        default: () => props$w.form.labelStyle
      }
    }
  });
  var define_process_env_default = {};
  const formatRegExp = /%[sdj%]/g;
  let warning = function warning2() {
  };
  if (typeof process !== "undefined" && define_process_env_default && true && typeof window !== "undefined" && typeof document !== "undefined") {
    warning = function warning3(type2, errors) {
      if (typeof console !== "undefined" && console.warn) {
        if (errors.every((e2) => typeof e2 === "string")) {
          formatAppLog("warn", "at node_modules/uview-plus/libs/util/async-validator.js:28", type2, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length)
      return null;
    const fields = {};
    errors.forEach((error2) => {
      const { field } = error2;
      fields[field] = fields[field] || [];
      fields[field].push(error2);
    });
    return fields;
  }
  function format() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    let i2 = 1;
    const f2 = args[0];
    const len = args.length;
    if (typeof f2 === "function") {
      return f2.apply(null, args.slice(1));
    }
    if (typeof f2 === "string") {
      let str = String(f2).replace(formatRegExp, (x) => {
        if (x === "%%") {
          return "%";
        }
        if (i2 >= len) {
          return x;
        }
        switch (x) {
          case "%s":
            return String(args[i2++]);
          case "%d":
            return Number(args[i2++]);
          case "%j":
            try {
              return JSON.stringify(args[i2++]);
            } catch (_2) {
              return "[Circular]";
            }
            break;
          default:
            return x;
        }
      });
      for (let arg = args[i2]; i2 < len; arg = args[++i2]) {
        str += ` ${arg}`;
      }
      return str;
    }
    return f2;
  }
  function isNativeStringType(type2) {
    return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "pattern";
  }
  function isEmptyValue(value2, type2) {
    if (value2 === void 0 || value2 === null) {
      return true;
    }
    if (type2 === "array" && Array.isArray(value2) && !value2.length) {
      return true;
    }
    if (isNativeStringType(type2) && typeof value2 === "string" && !value2) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func2, callback) {
    const results = [];
    let total = 0;
    const arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach((a2) => {
      func2(a2, count);
    });
  }
  function asyncSerialArray(arr, func2, callback) {
    let index2 = 0;
    const arrLength = arr.length;
    function next(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      const original = index2;
      index2 += 1;
      if (original < arrLength) {
        func2(arr[original], next);
      } else {
        callback([]);
      }
    }
    next([]);
  }
  function flattenObjArr(objArr) {
    const ret = [];
    Object.keys(objArr).forEach((k) => {
      ret.push.apply(ret, objArr[k]);
    });
    return ret;
  }
  function asyncMap(objArr, option, func2, callback) {
    if (option.first) {
      const _pending = new Promise((resolve, reject) => {
        const next = function next2(errors) {
          callback(errors);
          return errors.length ? reject({
            errors,
            fields: convertFieldsError(errors)
          }) : resolve();
        };
        const flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func2, next);
      });
      _pending.catch((e2) => e2);
      return _pending;
    }
    let firstFields = option.firstFields || [];
    if (firstFields === true) {
      firstFields = Object.keys(objArr);
    }
    const objArrKeys = Object.keys(objArr);
    const objArrLength = objArrKeys.length;
    let total = 0;
    const results = [];
    const pending = new Promise((resolve, reject) => {
      const next = function next2(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject({
            errors: results,
            fields: convertFieldsError(results)
          }) : resolve();
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve();
      }
      objArrKeys.forEach((key) => {
        const arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func2, next);
        } else {
          asyncParallelArray(arr, func2, next);
        }
      });
    });
    pending.catch((e2) => e2);
    return pending;
  }
  function complementError(rule) {
    return function(oe2) {
      if (oe2 && oe2.message) {
        oe2.field = oe2.field || rule.fullField;
        return oe2;
      }
      return {
        message: typeof oe2 === "function" ? oe2() : oe2,
        field: oe2.field || rule.fullField
      };
    };
  }
  function deepMerge$1(target, source) {
    if (source) {
      for (const s2 in source) {
        if (source.hasOwnProperty(s2)) {
          const value2 = source[s2];
          if (typeof value2 === "object" && typeof target[s2] === "object") {
            target[s2] = { ...target[s2], ...value2 };
          } else {
            target[s2] = value2;
          }
        }
      }
    }
    return target;
  }
  function required(rule, value2, source, errors, options, type2) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value2, type2 || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  }
  function whitespace(rule, value2, source, errors, options) {
    if (/^\s+$/.test(value2) || value2 === "") {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  }
  const pattern = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer(value2) {
      return /^(-)?\d+$/.test(value2);
    },
    float: function float(value2) {
      return /^(-)?\d+(\.\d+)?$/.test(value2);
    },
    array: function array3(value2) {
      return Array.isArray(value2);
    },
    regexp: function regexp(value2) {
      if (value2 instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value2);
      } catch (e2) {
        return false;
      }
    },
    date: function date3(value2) {
      return typeof value2.getTime === "function" && typeof value2.getMonth === "function" && typeof value2.getYear === "function";
    },
    number: function number3(value2) {
      if (isNaN(value2)) {
        return false;
      }
      return typeof +value2 === "number";
    },
    object: function object3(value2) {
      return typeof value2 === "object" && !types.array(value2);
    },
    method: function method(value2) {
      return typeof value2 === "function";
    },
    email: function email2(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.email) && value2.length < 255;
    },
    url: function url2(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.url);
    },
    hex: function hex(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.hex);
    }
  };
  function type(rule, value2, source, errors, options) {
    if (rule.required && value2 === void 0) {
      required(rule, value2, source, errors, options);
      return;
    }
    const custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    const ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value2)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && typeof value2 !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  }
  function range(rule, value2, source, errors, options) {
    const len = typeof rule.len === "number";
    const min = typeof rule.min === "number";
    const max = typeof rule.max === "number";
    const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    let val = value2;
    let key = null;
    const num = typeof value2 === "number";
    const str = typeof value2 === "string";
    const arr = Array.isArray(value2);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value2.length;
    }
    if (str) {
      val = value2.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  }
  const ENUM = "enum";
  function enumerable(rule, value2, source, errors, options) {
    rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
    if (rule[ENUM].indexOf(value2) === -1) {
      errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
    }
  }
  function pattern$1(rule, value2, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value2)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value2, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        const _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value2)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value2, rule.pattern));
        }
      }
    }
  }
  const rules = {
    required,
    whitespace,
    type,
    range,
    enum: enumerable,
    pattern: pattern$1
  };
  function string(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options, "string");
      if (!isEmptyValue(value2, "string")) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
        rules.pattern(rule, value2, source, errors, options);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value2, source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function method2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function number2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (value2 === "") {
        value2 = void 0;
      }
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function _boolean(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function regexp2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (!isEmptyValue(value2)) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function integer2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function floatFn(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function array2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2, "array") && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options, "array");
      if (!isEmptyValue(value2, "array")) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function object2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  const ENUM$1 = "enum";
  function enumerable$1(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules[ENUM$1](rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function pattern$2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (!isEmptyValue(value2, "string")) {
        rules.pattern(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function date2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (!isEmptyValue(value2)) {
        let dateObject;
        if (typeof value2 === "number") {
          dateObject = new Date(value2);
        } else {
          dateObject = value2;
        }
        rules.type(rule, dateObject, source, errors, options);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function required$1(rule, value2, callback, source, options) {
    const errors = [];
    const type2 = Array.isArray(value2) ? "array" : typeof value2;
    rules.required(rule, value2, source, errors, options, type2);
    callback(errors);
  }
  function type$1(rule, value2, callback, source, options) {
    const ruleType = rule.type;
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options, ruleType);
      if (!isEmptyValue(value2, ruleType)) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function any(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
    }
    callback(errors);
  }
  const validators = {
    string,
    method: method2,
    number: number2,
    boolean: _boolean,
    regexp: regexp2,
    integer: integer2,
    float: floatFn,
    array: array2,
    object: object2,
    enum: enumerable$1,
    pattern: pattern$2,
    date: date2,
    url: type$1,
    hex: type$1,
    email: type$1,
    required: required$1,
    any
  };
  function newMessages() {
    return {
      default: "Validation error on field %s",
      required: "%s is required",
      enum: "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        boolean: "%s is not a %s",
        integer: "%s is not an %s",
        float: "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone2() {
        const cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  const messages$1 = newMessages();
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages$1;
    this.define(descriptor);
  }
  Schema.prototype = {
    messages: function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge$1(newMessages(), _messages);
      }
      return this._messages;
    },
    define: function define(rules2) {
      if (!rules2) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (typeof rules2 !== "object" || Array.isArray(rules2)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      let z2;
      let item;
      for (z2 in rules2) {
        if (rules2.hasOwnProperty(z2)) {
          item = rules2[z2];
          this.rules[z2] = Array.isArray(item) ? item : [item];
        }
      }
    },
    validate: function validate(source_, o2, oc) {
      const _this = this;
      if (o2 === void 0) {
        o2 = {};
      }
      if (oc === void 0) {
        oc = function oc2() {
        };
      }
      let source = source_;
      let options = o2;
      let callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback();
        }
        return Promise.resolve();
      }
      function complete(results) {
        let i2;
        let errors = [];
        let fields = {};
        function add(e2) {
          if (Array.isArray(e2)) {
            let _errors;
            errors = (_errors = errors).concat.apply(_errors, e2);
          } else {
            errors.push(e2);
          }
        }
        for (i2 = 0; i2 < results.length; i2++) {
          add(results[i2]);
        }
        if (!errors.length) {
          errors = null;
          fields = null;
        } else {
          fields = convertFieldsError(errors);
        }
        callback(errors, fields);
      }
      if (options.messages) {
        let messages$1$1 = this.messages();
        if (messages$1$1 === messages$1) {
          messages$1$1 = newMessages();
        }
        deepMerge$1(messages$1$1, options.messages);
        options.messages = messages$1$1;
      } else {
        options.messages = this.messages();
      }
      let arr;
      let value2;
      const series = {};
      const keys = options.keys || Object.keys(this.rules);
      keys.forEach((z2) => {
        arr = _this.rules[z2];
        value2 = source[z2];
        arr.forEach((r2) => {
          let rule = r2;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = { ...source };
            }
            value2 = source[z2] = rule.transform(value2);
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = { ...rule };
          }
          rule.validator = _this.getValidationMethod(rule);
          rule.field = z2;
          rule.fullField = rule.fullField || z2;
          rule.type = _this.getType(rule);
          if (!rule.validator) {
            return;
          }
          series[z2] = series[z2] || [];
          series[z2].push({
            rule,
            value: value2,
            source,
            field: z2
          });
        });
      });
      const errorFields = {};
      return asyncMap(series, options, (data, doIt) => {
        const { rule } = data;
        let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullfield(key, schema) {
          return { ...schema, fullField: `${rule.fullField}.${key}` };
        }
        function cb(e2) {
          if (e2 === void 0) {
            e2 = [];
          }
          let errors = e2;
          if (!Array.isArray(errors)) {
            errors = [errors];
          }
          if (!options.suppressWarning && errors.length) {
            Schema.warning("async-validator:", errors);
          }
          if (errors.length && rule.message) {
            errors = [].concat(rule.message);
          }
          errors = errors.map(complementError(rule));
          if (options.first && errors.length) {
            errorFields[rule.field] = 1;
            return doIt(errors);
          }
          if (!deep) {
            doIt(errors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message) {
                errors = [].concat(rule.message).map(complementError(rule));
              } else if (options.error) {
                errors = [options.error(rule, format(options.messages.required, rule.field))];
              } else {
                errors = [];
              }
              return doIt(errors);
            }
            let fieldsSchema = {};
            if (rule.defaultField) {
              for (const k in data.value) {
                if (data.value.hasOwnProperty(k)) {
                  fieldsSchema[k] = rule.defaultField;
                }
              }
            }
            fieldsSchema = { ...fieldsSchema, ...data.rule.fields };
            for (const f2 in fieldsSchema) {
              if (fieldsSchema.hasOwnProperty(f2)) {
                const fieldSchema = Array.isArray(fieldsSchema[f2]) ? fieldsSchema[f2] : [fieldsSchema[f2]];
                fieldsSchema[f2] = fieldSchema.map(addFullfield.bind(null, f2));
              }
            }
            const schema = new Schema(fieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, (errs) => {
              const finalErrors = [];
              if (errors && errors.length) {
                finalErrors.push.apply(finalErrors, errors);
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, errs);
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        let res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          res = rule.validator(rule, data.value, cb, data.source, options);
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(rule.message || `${rule.field} fails`);
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(() => cb(), (e2) => cb(e2));
        }
      }, (results) => {
        complete(results);
      });
    },
    getType: function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    },
    getValidationMethod: function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      const keys = Object.keys(rule);
      const messageIndex = keys.indexOf("message");
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
      }
      return validators[this.getType(rule)] || false;
    }
  };
  Schema.register = function register(type2, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type2] = validator;
  };
  Schema.warning = warning;
  Schema.messages = messages$1;
  Schema.warning = function() {
  };
  const _sfc_main$H = {
    name: "u-form",
    mixins: [mpMixin, mixin, props$h],
    provide() {
      return {
        uForm: this
      };
    },
    data() {
      return {
        formRules: {},
        // 规则校验器
        validator: {},
        // 原始的model快照，用于resetFields方法重置表单时使用
        originalModel: null
      };
    },
    watch: {
      // 监听规则的变化
      rules: {
        immediate: true,
        handler(n2) {
          this.setRules(n2);
        }
      },
      // 监听属性的变化，通知子组件u-form-item重新获取信息
      propsChange(n2) {
        var _a;
        if ((_a = this.children) == null ? void 0 : _a.length) {
          this.children.map((child) => {
            typeof child.updateParentData == "function" && child.updateParentData();
          });
        }
      },
      // 监听model的初始值作为重置表单的快照
      model: {
        immediate: true,
        handler(n2) {
          if (!this.originalModel) {
            this.originalModel = deepClone(n2);
          }
        }
      }
    },
    computed: {
      propsChange() {
        return [
          this.errorType,
          this.borderBottom,
          this.labelPosition,
          this.labelWidth,
          this.labelAlign,
          this.labelStyle
        ];
      }
    },
    created() {
      this.children = [];
    },
    methods: {
      // 手动设置校验的规则，如果规则中有函数的话，微信小程序中会过滤掉，所以只能手动调用设置规则
      setRules(rules2) {
        if (Object.keys(rules2).length === 0)
          return;
        if (Object.keys(this.model).length === 0) {
          error("设置rules，model必须设置！如果已经设置，请刷新页面。");
          return;
        }
        this.formRules = rules2;
        this.validator = new Schema(rules2);
      },
      // 清空所有u-form-item组件的内容，本质上是调用了u-form-item组件中的resetField()方法
      resetFields() {
        this.resetModel();
      },
      // 重置model为初始值的快照
      resetModel(obj) {
        this.children.map((child) => {
          const prop = child == null ? void 0 : child.prop;
          const value2 = getProperty(this.originalModel, prop);
          setProperty(this.model, prop, value2);
        });
      },
      // 清空校验结果
      clearValidate(props2) {
        props2 = [].concat(props2);
        this.children.map((child) => {
          if (props2[0] === void 0 || props2.includes(child.prop)) {
            child.message = null;
          }
        });
      },
      // 对部分表单字段进行校验
      async validateField(value2, callback, event = null) {
        this.$nextTick(() => {
          const errorsRes = [];
          value2 = [].concat(value2);
          this.children.map((child) => {
            const childErrors = [];
            if (value2.includes(child.prop)) {
              const propertyVal = getProperty(
                this.model,
                child.prop
              );
              const propertyChain = child.prop.split(".");
              const propertyName = propertyChain[propertyChain.length - 1];
              const rule = this.formRules[child.rule || child.prop];
              if (!rule)
                return;
              const rules2 = [].concat(rule);
              for (let i2 = 0; i2 < rules2.length; i2++) {
                const ruleItem = rules2[i2];
                const trigger = [].concat(ruleItem == null ? void 0 : ruleItem.trigger);
                if (event && !trigger.includes(event))
                  continue;
                const validator = new Schema({
                  [propertyName]: ruleItem
                });
                validator.validate(
                  {
                    [propertyName]: propertyVal
                  },
                  (errors, fields) => {
                    var _a;
                    if (test.array(errors)) {
                      errorsRes.push(...errors);
                      childErrors.push(...errors);
                    }
                    child.message = ((_a = childErrors[0]) == null ? void 0 : _a.message) ? childErrors[0].message : null;
                  }
                );
              }
            }
          });
          typeof callback === "function" && callback(errorsRes);
        });
      },
      // 校验全部数据
      validate(callback) {
        if (Object.keys(this.formRules).length === 0) {
          error("未设置rules，请看文档说明！如果已经设置，请刷新页面。");
          return;
        }
        return new Promise((resolve, reject) => {
          this.$nextTick(() => {
            const formItemProps = this.children.map(
              (item) => item.prop
            );
            this.validateField(formItemProps, (errors) => {
              if (errors.length) {
                this.errorType === "toast" && toast(errors[0].message);
                reject(errors);
              } else {
                resolve(true);
              }
            });
          });
        });
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form" }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$v], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-form/u-form.vue"]]);
  const props$g = defineMixin({
    props: {
      // 是否显示组件
      show: {
        type: Boolean,
        default: () => props$w.loadingIcon.show
      },
      // 颜色
      color: {
        type: String,
        default: () => props$w.loadingIcon.color
      },
      // 提示文字颜色
      textColor: {
        type: String,
        default: () => props$w.loadingIcon.textColor
      },
      // 文字和图标是否垂直排列
      vertical: {
        type: Boolean,
        default: () => props$w.loadingIcon.vertical
      },
      // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
      mode: {
        type: String,
        default: () => props$w.loadingIcon.mode
      },
      // 图标大小，单位默认px
      size: {
        type: [String, Number],
        default: () => props$w.loadingIcon.size
      },
      // 文字大小
      textSize: {
        type: [String, Number],
        default: () => props$w.loadingIcon.textSize
      },
      // 文字内容
      text: {
        type: [String, Number],
        default: () => props$w.loadingIcon.text
      },
      // 动画模式
      timingFunction: {
        type: String,
        default: () => props$w.loadingIcon.timingFunction
      },
      // 动画执行周期时间
      duration: {
        type: [String, Number],
        default: () => props$w.loadingIcon.duration
      },
      // mode=circle时的暗边颜色
      inactiveColor: {
        type: String,
        default: () => props$w.loadingIcon.inactiveColor
      }
    }
  });
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i2 = 0; i2 < step; i2++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i2 + startR)},${Math.round(sG * i2 + startG)},${Math.round(sB * i2 + startB)})`);
      if (i2 === 0)
        hex = rgbToHex(startColor);
      if (i2 === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i2 = 1; i2 < 4; i2 += 1) {
          sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i2 = 1; i2 < 7; i2 += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i2, i2 + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i2 = 0; i2 < aColor.length; i2++) {
        let hex = Number(aColor[i2]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i2 = 0; i2 < aNum.length; i2 += 1) {
          numHex += aNum[i2] + aNum[i2];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i2 = 1; i2 < 4; i2 += 1) {
          sColorNew += sColor.slice(i2, i2 + 1).concat(sColor.slice(i2, i2 + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i2 = 1; i2 < 7; i2 += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i2, i2 + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  const colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  const _sfc_main$G = {
    name: "u-loading-icon",
    mixins: [mpMixin, mixin, props$g],
    data() {
      return {
        // Array.form可以通过一个伪数组对象创建指定长度的数组
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        array12: Array.from({
          length: 12
        }),
        // 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行
        // 在iOS nvue上，则会一开始默认执行两个周期的动画
        aniAngel: 360,
        // 动画旋转角度
        webviewHide: false,
        // 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗
        loading: false
        // 是否运行中，针对nvue使用
      };
    },
    computed: {
      // 当为circle类型时，给其另外三边设置一个更轻一些的颜色
      // 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色
      // 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)
      otherBorderColor() {
        const lightColor = colorGradient(this.color, "#ffffff", 100)[80];
        if (this.mode === "circle") {
          return this.inactiveColor ? this.inactiveColor : lightColor;
        } else {
          return "transparent";
        }
      }
    },
    watch: {
      show(n2) {
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      addUnit,
      addStyle,
      init() {
        setTimeout(() => {
          this.show && this.addEventListenerToWebview();
        }, 20);
      },
      // 监听webview的显示与隐藏
      addEventListenerToWebview() {
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const currentWebview = page2.$getAppWebview();
        currentWebview.addEventListener("hide", () => {
          this.webviewHide = true;
        });
        currentWebview.addEventListener("show", () => {
          this.webviewHide = false;
        });
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-loading-icon", [_ctx.vertical && "u-loading-icon--vertical"]]),
        style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)])
      },
      [
        !$data.webviewHide ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["u-loading-icon__spinner", [`u-loading-icon__spinner--${_ctx.mode}`]]),
            ref: "ani",
            style: vue.normalizeStyle({
              color: _ctx.color,
              width: $options.addUnit(_ctx.size),
              height: $options.addUnit(_ctx.size),
              borderTopColor: _ctx.color,
              borderBottomColor: $options.otherBorderColor,
              borderLeftColor: $options.otherBorderColor,
              borderRightColor: $options.otherBorderColor,
              "animation-duration": `${_ctx.duration}ms`,
              "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
            })
          },
          [
            _ctx.mode === "spinner" ? (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              vue.renderList($data.array12, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index2,
                  class: "u-loading-icon__dot"
                });
              }),
              128
              /* KEYED_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        _ctx.text ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 1,
            class: "u-loading-icon__text",
            style: vue.normalizeStyle({
              fontSize: $options.addUnit(_ctx.textSize),
              color: _ctx.textColor
            })
          },
          vue.toDisplayString(_ctx.text),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$u], ["__scopeId", "data-v-00752c6d"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-loading-icon/u-loading-icon.vue"]]);
  const props$f = defineMixin({
    props: {
      // 是否细边框
      hairline: {
        type: Boolean,
        default: () => props$w.button.hairline
      },
      // 按钮的预置样式，info，primary，error，warning，success
      type: {
        type: String,
        default: () => props$w.button.type
      },
      // 按钮尺寸，large，normal，small，mini
      size: {
        type: String,
        default: () => props$w.button.size
      },
      // 按钮形状，circle（两边为半圆），square（带圆角）
      shape: {
        type: String,
        default: () => props$w.button.shape
      },
      // 按钮是否镂空
      plain: {
        type: Boolean,
        default: () => props$w.button.plain
      },
      // 是否禁止状态
      disabled: {
        type: Boolean,
        default: () => props$w.button.disabled
      },
      // 是否加载中
      loading: {
        type: Boolean,
        default: () => props$w.button.loading
      },
      // 加载中提示文字
      loadingText: {
        type: [String, Number],
        default: () => props$w.button.loadingText
      },
      // 加载状态图标类型
      loadingMode: {
        type: String,
        default: () => props$w.button.loadingMode
      },
      // 加载图标大小
      loadingSize: {
        type: [String, Number],
        default: () => props$w.button.loadingSize
      },
      // 开放能力，具体请看uniapp稳定关于button组件部分说明
      // https://uniapp.dcloud.io/component/button
      openType: {
        type: String,
        default: () => props$w.button.openType
      },
      // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
      // 取值为submit（提交表单），reset（重置表单）
      formType: {
        type: String,
        default: () => props$w.button.formType
      },
      // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
      // 只微信小程序、QQ小程序有效
      appParameter: {
        type: String,
        default: () => props$w.button.appParameter
      },
      // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
      hoverStopPropagation: {
        type: Boolean,
        default: () => props$w.button.hoverStopPropagation
      },
      // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
      lang: {
        type: String,
        default: () => props$w.button.lang
      },
      // 会话来源，open-type="contact"时有效。只微信小程序有效
      sessionFrom: {
        type: String,
        default: () => props$w.button.sessionFrom
      },
      // 会话内消息卡片标题，open-type="contact"时有效
      // 默认当前标题，只微信小程序有效
      sendMessageTitle: {
        type: String,
        default: () => props$w.button.sendMessageTitle
      },
      // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
      // 默认当前分享路径，只微信小程序有效
      sendMessagePath: {
        type: String,
        default: () => props$w.button.sendMessagePath
      },
      // 会话内消息卡片图片，open-type="contact"时有效
      // 默认当前页面截图，只微信小程序有效
      sendMessageImg: {
        type: String,
        default: () => props$w.button.sendMessageImg
      },
      // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
      // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
      showMessageCard: {
        type: Boolean,
        default: () => props$w.button.showMessageCard
      },
      // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
      dataName: {
        type: String,
        default: () => props$w.button.dataName
      },
      // 节流，一定时间内只能触发一次
      throttleTime: {
        type: [String, Number],
        default: () => props$w.button.throttleTime
      },
      // 按住后多久出现点击态，单位毫秒
      hoverStartTime: {
        type: [String, Number],
        default: () => props$w.button.hoverStartTime
      },
      // 手指松开后点击态保留时间，单位毫秒
      hoverStayTime: {
        type: [String, Number],
        default: () => props$w.button.hoverStayTime
      },
      // 按钮文字，之所以通过props传入，是因为slot传入的话
      // nvue中无法控制文字的样式
      text: {
        type: [String, Number],
        default: () => props$w.button.text
      },
      // 按钮图标
      icon: {
        type: String,
        default: () => props$w.button.icon
      },
      // 按钮图标
      iconColor: {
        type: String,
        default: () => props$w.button.icon
      },
      // 按钮颜色，支持传入linear-gradient渐变色
      color: {
        type: String,
        default: () => props$w.button.color
      }
    }
  });
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  const _sfc_main$F = {
    name: "u-button",
    mixins: [mpMixin, mixin, props$f],
    data() {
      return {};
    },
    computed: {
      // 生成bem风格的类名
      bemClass() {
        if (!this.color) {
          return this.bem(
            "button",
            ["type", "shape", "size"],
            ["disabled", "plain", "hairline"]
          );
        } else {
          return this.bem(
            "button",
            ["shape", "size"],
            ["disabled", "plain", "hairline"]
          );
        }
      },
      loadingColor() {
        if (this.plain) {
          return this.color ? this.color : color$2[`u-${this.type}`];
        }
        if (this.type === "info") {
          return "#c9c9c9";
        }
        return "rgb(200, 200, 200)";
      },
      iconColorCom() {
        if (this.iconColor)
          return this.iconColor;
        if (this.plain) {
          return this.color ? this.color : this.type;
        } else {
          return this.type === "info" ? "#000000" : "#ffffff";
        }
      },
      baseColor() {
        let style = {};
        if (this.color) {
          style.color = this.plain ? this.color : "white";
          if (!this.plain) {
            style["background-color"] = this.color;
          }
          if (this.color.indexOf("gradient") !== -1) {
            style.borderTopWidth = 0;
            style.borderRightWidth = 0;
            style.borderBottomWidth = 0;
            style.borderLeftWidth = 0;
            if (!this.plain) {
              style.backgroundImage = this.color;
            }
          } else {
            style.borderColor = this.color;
            style.borderWidth = "1px";
            style.borderStyle = "solid";
          }
        }
        return style;
      },
      // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置
      nvueTextStyle() {
        let style = {};
        if (this.type === "info") {
          style.color = "#323233";
        }
        if (this.color) {
          style.color = this.plain ? this.color : "white";
        }
        style.fontSize = this.textSize + "px";
        return style;
      },
      // 字体大小
      textSize() {
        let fontSize = 14, { size } = this;
        if (size === "large")
          fontSize = 16;
        if (size === "normal")
          fontSize = 14;
        if (size === "small")
          fontSize = 12;
        if (size === "mini")
          fontSize = 10;
        return fontSize;
      }
    },
    emits: [
      "click",
      "getphonenumber",
      "getuserinfo",
      "error",
      "opensetting",
      "launchapp",
      "agreeprivacyauthorization"
    ],
    methods: {
      addStyle,
      clickHandler() {
        if (!this.disabled && !this.loading) {
          throttle(() => {
            this.$emit("click");
          }, this.throttleTime);
        }
      },
      // 下面为对接uniapp官方按钮开放能力事件回调的对接
      getphonenumber(res) {
        this.$emit("getphonenumber", res);
      },
      getuserinfo(res) {
        this.$emit("getuserinfo", res);
      },
      error(res) {
        this.$emit("error", res);
      },
      opensetting(res) {
        this.$emit("opensetting", res);
      },
      launchapp(res) {
        this.$emit("launchapp", res);
      },
      agreeprivacyauthorization(res) {
        this.$emit("agreeprivacyauthorization", res);
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$3);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    return vue.openBlock(), vue.createElementBlock("button", {
      "hover-start-time": Number(_ctx.hoverStartTime),
      "hover-stay-time": Number(_ctx.hoverStayTime),
      "form-type": _ctx.formType,
      "open-type": _ctx.openType,
      "app-parameter": _ctx.appParameter,
      "hover-stop-propagation": _ctx.hoverStopPropagation,
      "send-message-title": _ctx.sendMessageTitle,
      "send-message-path": _ctx.sendMessagePath,
      lang: _ctx.lang,
      "data-name": _ctx.dataName,
      "session-from": _ctx.sessionFrom,
      "send-message-img": _ctx.sendMessageImg,
      "show-message-card": _ctx.showMessageCard,
      onGetphonenumber: _cache[0] || (_cache[0] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
      onGetuserinfo: _cache[1] || (_cache[1] = (...args) => $options.getuserinfo && $options.getuserinfo(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      onOpensetting: _cache[3] || (_cache[3] = (...args) => $options.opensetting && $options.opensetting(...args)),
      onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.launchapp && $options.launchapp(...args)),
      onAgreeprivacyauthorization: _cache[5] || (_cache[5] = (...args) => $options.agreeprivacyauthorization && $options.agreeprivacyauthorization(...args)),
      "hover-class": !_ctx.disabled && !_ctx.loading ? "u-button--active" : "",
      class: vue.normalizeClass(["u-button u-reset-button", $options.bemClass]),
      style: vue.normalizeStyle([$options.baseColor, $options.addStyle(_ctx.customStyle)]),
      onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createVNode(_component_u_loading_icon, {
            mode: _ctx.loadingMode,
            size: _ctx.loadingSize * 1.15,
            color: $options.loadingColor
          }, null, 8, ["mode", "size", "color"]),
          vue.createElementVNode(
            "text",
            {
              class: "u-button__loading-text",
              style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
            },
            vue.toDisplayString(_ctx.loadingText || _ctx.text),
            5
            /* TEXT, STYLE */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 0,
            name: _ctx.icon,
            color: $options.iconColorCom,
            size: $options.textSize * 1.35,
            customStyle: { marginRight: "2px" }
          }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode(
              "text",
              {
                class: "u-button__text",
                style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
              },
              vue.toDisplayString(_ctx.text),
              5
              /* TEXT, STYLE */
            )
          ], true)
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ], 46, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class"]);
  }
  const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$t], ["__scopeId", "data-v-461e713c"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-button/u-button.vue"]]);
  const getCodeIdAPI = () => {
    return http$1.request({
      url: "/captcha",
      method: "GET"
    });
  };
  const getCodeImgAPI = (id) => {
    return http$1.request({
      url: `/captcha/${id}`,
      responseType: "arraybuffer"
    });
  };
  const registerAPI = (params) => {
    return http$1.request({
      url: `/signup`,
      method: "POST",
      data: params
    });
  };
  const loginAPI = (params) => {
    return http$1.request({
      url: `/login`,
      method: "POST",
      data: params
    });
  };
  const _sfc_main$E = {
    __name: "index",
    setup(__props) {
      vue.onMounted(async () => {
        await updateCode();
      });
      const codeImgSrc = vue.ref("");
      const formData = vue.ref({
        email: "",
        username: "",
        password: "",
        confirmPSW: "",
        value: "",
        captchaId: ""
      });
      const showPSW = vue.ref(true);
      const showComfirmPSW = vue.ref(true);
      const rules2 = {
        "email": [
          {
            type: "string",
            required: true,
            message: "请输入邮箱",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/,
            message: "请输入正确的邮箱格式",
            trigger: ["blur", "change"]
          }
        ],
        "username": [
          {
            type: "string",
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^[0-9a-zA-Z]*$/g,
            transform(value2) {
              return String(value2);
            },
            message: "只能包含字母或数字",
            trigger: ["blur", "change"]
          }
        ],
        "password": [
          {
            type: "string",
            required: true,
            message: "请输入密码",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/,
            transform(value2) {
              return String(value2);
            },
            message: "6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种",
            trigger: ["blur", "change"]
          }
        ],
        "confirmPSW": [
          {
            type: "string",
            required: true,
            message: "请再次输入密码",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/,
            transform(value2) {
              return String(value2);
            },
            message: "6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种",
            trigger: ["blur", "change"]
          },
          {
            validator: (rule, value2, callback) => {
              formatAppLog("log", "at pages/user/register/index.vue:176", formData.value.password);
              formatAppLog("log", "at pages/user/register/index.vue:177", value2);
              if (value2 !== formData.value.password) {
                callback(new Error());
              } else {
                callback();
              }
            },
            message: "两次输入的密码不一致",
            trigger: ["blur", "change"]
          }
        ],
        "value": {
          type: "string",
          required: true,
          len: 6,
          message: "请输入6位验证码",
          trigger: ["blur", "change"]
        }
      };
      const updateCode = async () => {
        const getCodeID = async () => {
          await getCodeIdAPI().then((res) => {
            formData.value.captchaId = res.captchaId;
          }).catch((err) => {
            formatAppLog("log", "at pages/user/register/index.vue:210", err);
          });
        };
        const getCodeImg = async () => {
          await getCodeImgAPI(formData.value.captchaId).then((res) => {
            const arrayBuffer = new Uint8Array(res);
            const base64 = "data:image/png;base64," + uni.arrayBufferToBase64(arrayBuffer);
            codeImgSrc.value = base64 || "";
          }).catch((err) => {
            formatAppLog("log", "at pages/user/register/index.vue:224", err);
          });
        };
        await getCodeID();
        await getCodeImg();
      };
      const showPSWBtn = (type2) => {
        if (type2 === 1) {
          showPSW.value = !showPSW.value;
        } else {
          showComfirmPSW.value = !showComfirmPSW.value;
        }
      };
      const submit = () => {
        formData.value.validate().then(async (valid) => {
          if (valid) {
            const params = {
              email: formData.value.email,
              username: formData.value.username,
              password: formData.value.password,
              value: formData.value.value,
              captchaId: formData.value.captchaId
            };
            await registerAPI(params).then((res) => {
              if (res.session_token) {
                uni.setStorageSync("token", res.session_token);
                uni.reLaunch({
                  url: "/pages/home/index"
                });
              } else {
                formatAppLog("log", "at pages/user/register/index.vue:265", res.error);
                if (res.error === "Username already exists")
                  uni.$u.toast("用户名已存在");
                else
                  uni.$u.toast("注册失败");
              }
            }).catch((err) => {
              formatAppLog("log", "at pages/user/register/index.vue:273", err);
              uni.$u.toast("注册失败");
            });
          }
        }).catch(() => {
        });
      };
      return (_ctx, _cache) => {
        const _component_up_image = resolveEasycom(vue.resolveDynamicComponent("up-image"), __easycom_1$6);
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        const _component_up_input = resolveEasycom(vue.resolveDynamicComponent("up-input"), __easycom_1$4);
        const _component_up_form_item = resolveEasycom(vue.resolveDynamicComponent("up-form-item"), __easycom_2$4);
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_1$b);
        const _component_up_form = resolveEasycom(vue.resolveDynamicComponent("up-form"), __easycom_6);
        const _component_up_button = resolveEasycom(vue.resolveDynamicComponent("up-button"), __easycom_7);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: "注册",
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createVNode(_component_up_image, {
                    src: "/assets/icon/icon_top_bar_back.png",
                    width: "50rpx",
                    height: "50rpx"
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createVNode(_component_up_image, {
                    src: "/assets/icon/icon_top_bar_list.png",
                    width: "50rpx",
                    height: "50rpx"
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "title font-red" }, " 注册 "),
              vue.createElementVNode("view", { class: "form" }, [
                vue.createVNode(_component_up_form, {
                  model: formData.value,
                  ref_key: "formData",
                  ref: formData,
                  labelWidth: "140rpx",
                  rules: rules2
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_up_form_item, {
                      label: "邮箱",
                      prop: "email"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.email,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.email = $event)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, {
                      label: "用户名",
                      prop: "username"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.username,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.username = $event)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, {
                      label: "密码",
                      prop: "password"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.password,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.password = $event),
                          password: showPSW.value
                        }, {
                          suffix: vue.withCtx(() => [
                            vue.createVNode(_component_up_icon, {
                              size: "16",
                              onClick: _cache[2] || (_cache[2] = ($event) => showPSWBtn(1)),
                              name: showPSW.value ? "eye-off" : "eye-fill"
                            }, null, 8, ["name"])
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "password"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, {
                      label: "确认密码",
                      prop: "confirmPSW"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.confirmPSW,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.confirmPSW = $event),
                          password: showComfirmPSW.value
                        }, {
                          suffix: vue.withCtx(() => [
                            vue.createVNode(_component_up_icon, {
                              size: "16",
                              onClick: _cache[4] || (_cache[4] = ($event) => showPSWBtn(2)),
                              name: showComfirmPSW.value ? "eye-off" : "eye-fill"
                            }, null, 8, ["name"])
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "password"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, {
                      label: "验证码",
                      prop: "value"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.value,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.value.value = $event),
                          class: "codeBox"
                        }, {
                          suffix: vue.withCtx(() => [
                            vue.createVNode(_component_up_image, {
                              onClick: updateCode,
                              src: "/assets/icon/icon_register_reload.png",
                              height: "32rpx",
                              width: "32rpx"
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue"]),
                        vue.createVNode(_component_up_image, {
                          class: "codeImg",
                          src: codeImgSrc.value,
                          height: "66rpx",
                          width: "150rpx",
                          mode: "aspectFit"
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["model"]),
                vue.createVNode(_component_up_button, {
                  onClick: submit,
                  class: "btn font-red",
                  shape: "circle",
                  text: "注册"
                })
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesUserRegisterIndex = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__file", "D:/subject-analyze/pages/user/register/index.vue"]]);
  const _sfc_main$D = {
    __name: "index",
    setup(__props) {
      const formData = vue.ref({
        username: "",
        password: ""
      });
      const rules2 = {
        "username": [
          {
            type: "string",
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^[0-9a-zA-Z]*$/g,
            transform(value2) {
              return String(value2);
            },
            message: "只能包含字母或数字",
            trigger: ["blur", "change"]
          }
        ],
        "password": [
          {
            type: "string",
            required: true,
            message: "请输入密码",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/,
            transform(value2) {
              return String(value2);
            },
            message: "6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种",
            trigger: ["blur", "change"]
          }
        ]
      };
      const toRegister = () => {
        uni.navigateTo({
          url: "/pages/user/register/index"
        });
      };
      const showPSW = vue.ref(true);
      const showPSWBtn = () => {
        showPSW.value = !showPSW.value;
      };
      const submit = () => {
        formData.value.validate().then(async (valid) => {
          if (valid) {
            const params = {
              username: formData.value.username,
              password: formData.value.password
            };
            await loginAPI(params).then((res) => {
              if (res.session_token) {
                uni.setStorageSync("token", res.session_token);
                uni.reLaunch({
                  url: "/pages/home/index"
                });
              } else {
                if (res.error === "Username does not exist")
                  uni.$u.toast("用户名不存在");
                else if (res.error === "Username and password do not match")
                  uni.$u.toast("密码错误");
                else
                  uni.$u.toast("登录失败");
              }
            }).catch((err) => {
              formatAppLog("log", "at pages/user/login/index.vue:147", err);
              uni.$u.toast("登录失败");
            });
          }
        }).catch(() => {
        });
      };
      return (_ctx, _cache) => {
        const _component_up_image = resolveEasycom(vue.resolveDynamicComponent("up-image"), __easycom_1$6);
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        const _component_up_input = resolveEasycom(vue.resolveDynamicComponent("up-input"), __easycom_1$4);
        const _component_up_form_item = resolveEasycom(vue.resolveDynamicComponent("up-form-item"), __easycom_2$4);
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_1$b);
        const _component_up_form = resolveEasycom(vue.resolveDynamicComponent("up-form"), __easycom_6);
        const _component_up_button = resolveEasycom(vue.resolveDynamicComponent("up-button"), __easycom_7);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: "登录",
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createVNode(_component_up_image, {
                    src: "/assets/icon/icon_top_bar_back.png",
                    width: "50rpx",
                    height: "50rpx"
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createVNode(_component_up_image, {
                    src: "/assets/icon/icon_top_bar_list.png",
                    width: "50rpx",
                    height: "50rpx"
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "title font-red" }, " 登录 "),
              vue.createElementVNode("view", { class: "form" }, [
                vue.createVNode(_component_up_form, {
                  model: formData.value,
                  ref_key: "formData",
                  ref: formData,
                  labelWidth: "140rpx",
                  rules: rules2
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_up_form_item, {
                      label: "用户名",
                      prop: "username"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.username,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.username = $event)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, {
                      label: "密码",
                      prop: "password"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.password,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.password = $event),
                          password: showPSW.value
                        }, {
                          suffix: vue.withCtx(() => [
                            vue.createVNode(_component_up_icon, {
                              size: "16",
                              onClick: _cache[1] || (_cache[1] = ($event) => showPSWBtn()),
                              name: showPSW.value ? "eye-off" : "eye-fill"
                            }, null, 8, ["name"])
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "password"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["model"]),
                vue.createElementVNode("view", {
                  class: "tips",
                  onClick: _cache[3] || (_cache[3] = ($event) => toRegister())
                }, [
                  vue.createTextVNode(" 没有账号？ "),
                  vue.createElementVNode("span", { style: { "color": "#6a6b6b" } }, "注册"),
                  vue.createCommentVNode(' <span class="forget" style="color: #6a6b6b;">忘记密码</span> ')
                ]),
                vue.createVNode(_component_up_button, {
                  onClick: submit,
                  class: "btn font-red",
                  shape: "circle",
                  text: "登录"
                })
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesUserLoginIndex = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__file", "D:/subject-analyze/pages/user/login/index.vue"]]);
  const props$e = defineMixin({
    props: {
      // 是否为加载中状态
      loading: {
        type: Boolean,
        default: () => props$w.switch.loading
      },
      // 是否为禁用装填
      disabled: {
        type: Boolean,
        default: () => props$w.switch.disabled
      },
      // 开关尺寸，单位px
      size: {
        type: [String, Number],
        default: () => props$w.switch.size
      },
      // 打开时的背景颜色
      activeColor: {
        type: String,
        default: () => props$w.switch.activeColor
      },
      // 关闭时的背景颜色
      inactiveColor: {
        type: String,
        default: () => props$w.switch.inactiveColor
      },
      // 通过v-model双向绑定的值
      modelValue: {
        type: [Boolean, String, Number],
        default: () => props$w.switch.value
      },
      // switch打开时的值
      activeValue: {
        type: [String, Number, Boolean],
        default: () => props$w.switch.activeValue
      },
      // switch关闭时的值
      inactiveValue: {
        type: [String, Number, Boolean],
        default: () => props$w.switch.inactiveValue
      },
      // 是否开启异步变更，开启后需要手动控制输入值
      asyncChange: {
        type: Boolean,
        default: () => props$w.switch.asyncChange
      },
      // 圆点与外边框的距离
      space: {
        type: [String, Number],
        default: () => props$w.switch.space
      }
    }
  });
  const _sfc_main$C = {
    name: "u-switch",
    mixins: [mpMixin, mixin, props$e],
    watch: {
      modelValue: {
        immediate: true,
        handler(n2) {
          if (n2 !== this.inactiveValue && n2 !== this.activeValue) {
            error("v-model绑定的值必须为inactiveValue、activeValue二者之一");
          }
        }
      }
    },
    data() {
      return {
        bgColor: "#ffffff"
      };
    },
    computed: {
      isActive() {
        return this.modelValue === this.activeValue;
      },
      switchStyle() {
        let style = {};
        style.width = addUnit(this.size * 2 + 2);
        style.height = addUnit(Number(this.size) + 2);
        if (this.customInactiveColor) {
          style.borderColor = "rgba(0, 0, 0, 0)";
        }
        style.backgroundColor = this.isActive ? this.activeColor : this.inactiveColor;
        return style;
      },
      nodeStyle() {
        let style = {};
        style.width = addUnit(this.size - this.space);
        style.height = addUnit(this.size - this.space);
        const translateX = this.isActive ? addUnit(this.space) : addUnit(this.size);
        style.transform = `translateX(-${translateX})`;
        return style;
      },
      bgStyle() {
        let style = {};
        style.width = addUnit(Number(this.size) * 2 - this.size / 2);
        style.height = addUnit(this.size);
        style.backgroundColor = this.inactiveColor;
        style.transform = `scale(${this.isActive ? 0 : 1})`;
        return style;
      },
      customInactiveColor() {
        return this.inactiveColor !== "#fff" && this.inactiveColor !== "#ffffff";
      }
    },
    emits: ["update:modelValue", "change"],
    methods: {
      addStyle,
      clickHandler() {
        if (!this.disabled && !this.loading) {
          const oldValue = this.isActive ? this.inactiveValue : this.activeValue;
          if (!this.asyncChange) {
            this.$emit("update:modelValue", oldValue);
          }
          this.$nextTick(() => {
            this.$emit("change", oldValue);
          });
        }
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-switch cursor-pointer", [_ctx.disabled && "u-switch--disabled"]]),
        style: vue.normalizeStyle([$options.switchStyle, $options.addStyle(_ctx.customStyle)]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: "u-switch__bg",
            style: vue.normalizeStyle([$options.bgStyle])
          },
          null,
          4
          /* STYLE */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["u-switch__node", [_ctx.modelValue && "u-switch__node--on"]]),
            style: vue.normalizeStyle([$options.nodeStyle]),
            ref: "u-switch__node"
          },
          [
            vue.createVNode(_component_u_loading_icon, {
              show: _ctx.loading,
              mode: "circle",
              timingFunction: "linear",
              color: _ctx.modelValue ? _ctx.activeColor : "#AAABAD",
              size: _ctx.size * 0.6
            }, null, 8, ["show", "color", "size"])
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$s], ["__scopeId", "data-v-1e6bcefd"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-switch/u-switch.vue"]]);
  const _sfc_main$B = {
    props: {
      mode: {
        type: String,
        default: "common"
      },
      button: {
        type: String,
        default: "outside"
      },
      isFixedSearchBtn: {
        type: Boolean,
        default: true
      },
      radius: {
        type: String,
        default: "60"
      },
      placeholder: {
        type: String,
        default: "请输入搜索内容"
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      },
      showMore: {
        type: Boolean,
        default: false
      },
      border: { type: String, default: "1px #f5f5f5 solid" }
    },
    data() {
      return {
        active: false,
        inputVal: "",
        searchName: "取消",
        isDelShow: false,
        isFocus: false,
        timer: 0
      };
    },
    methods: {
      focus() {
        this.active = true;
      },
      blur() {
        this.isFocus = false;
        if (!this.inputVal) {
          this.active = false;
        }
      },
      input() {
        clearInterval(this.timer);
        this.timer = setTimeout(() => {
          this.$emit("input", this.inputVal);
        }, 500);
      },
      clear() {
        this.inputVal = "";
        this.active = false;
        this.$emit("input", this.inputVal);
        this.$emit("search", "");
      },
      getFocus() {
        this.isFocus = true;
      },
      search() {
        if (!this.inputVal)
          return;
        this.$emit("search", this.inputVal);
      },
      selectMore() {
        this.$emit("moreClick");
      }
    },
    created() {
      this.$watch(() => this.inputVal, (newVal) => {
        if (newVal) {
          this.searchName = "搜索";
          this.isDelShow = true;
        } else {
          this.searchName = "取消";
          this.isDelShow = false;
        }
      });
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "next-search-more" }, [
      vue.createElementVNode(
        "view",
        {
          class: "search",
          style: vue.normalizeStyle({ backgroundColor: $props.backgroundColor })
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "content",
              style: vue.normalizeStyle({ "border-radius": $props.radius + "px", border: $props.border })
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["content-box", { center: $props.mode === "center" }])
                },
                [
                  vue.createElementVNode("text", { class: "icon icon-search" }, ""),
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: vue.normalizeClass(["input", { center: !$data.active && $props.mode === "center" }]),
                    focus: $data.isFocus,
                    placeholder: $props.placeholder,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.inputVal = $event),
                    onInput: _cache[1] || (_cache[1] = (...args) => $options.input && $options.input(...args)),
                    onFocus: _cache[2] || (_cache[2] = (...args) => $options.focus && $options.focus(...args)),
                    onBlur: _cache[3] || (_cache[3] = (...args) => $options.blur && $options.blur(...args))
                  }, null, 42, ["focus", "placeholder"]), [
                    [vue.vModelText, $data.inputVal]
                  ]),
                  $data.isDelShow ? (vue.openBlock(), vue.createElementBlock("text", {
                    key: 0,
                    class: "icon icon-del",
                    onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
                  }, "")) : vue.createCommentVNode("v-if", true)
                ],
                2
                /* CLASS */
              ),
              vue.withDirectives(vue.createElementVNode(
                "view",
                {
                  class: "searchBtn",
                  onClick: _cache[5] || (_cache[5] = (...args) => $options.search && $options.search(...args))
                },
                "搜索",
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, $data.active && $props.isFixedSearchBtn && $props.button === "inside" || $data.isDelShow && $props.button === "inside"]
              ])
            ],
            4
            /* STYLE */
          ),
          $props.mode === "common" || $props.mode === "center" ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            [
              $props.button === "outside" ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: vue.normalizeClass(["button", { active: $props.isFixedSearchBtn || $data.active }]),
                  onClick: _cache[6] || (_cache[6] = (...args) => $options.search && $options.search(...args))
                },
                [
                  vue.createElementVNode(
                    "view",
                    { class: "button-item" },
                    vue.toDisplayString(!$props.isFixedSearchBtn ? $data.searchName : "搜索"),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )) : vue.createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : $props.mode === "more" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "button active",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.selectMore && $options.selectMore(...args))
          }, [
            vue.createElementVNode("view", { class: "button-item" }, [
              vue.createElementVNode("text", { class: "icon icon-more" }, "")
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode("view", { class: "more-container-parent" }, [
        $props.mode === "more" && $props.showMore ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "more-container"
        }, [
          vue.renderSlot(_ctx.$slots, "more", {}, void 0, true)
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$r], ["__scopeId", "data-v-ed1d4e04"], ["__file", "D:/subject-analyze/uni_modules/next-search-more/components/next-search-more/next-search-more.vue"]]);
  const _sfc_main$A = {
    name: "next-tree",
    props: {
      uiMode: {
        type: String,
        default: "popup"
        // popup(弹窗), page(页面)
      },
      funcMode: {
        type: String,
        default: "radio"
        // display(展示模式), edit(编辑模式), checkbox(多选模式), radio(单选模式)
      },
      treeData: {
        type: Array,
        default: function() {
          return [];
        }
      },
      valueKey: {
        type: String,
        default: "id"
      },
      labelKey: {
        type: String,
        default: "label"
      },
      disabledKey: {
        type: String,
        default: "disabled"
      },
      childrenKey: {
        type: String,
        default: "children"
      },
      title: {
        type: [String, Function],
        default: ""
      },
      selectParent: {
        //是否可以选父级
        type: Boolean,
        default: false
      },
      foldAll: {
        //折叠时关闭所有已经打开的子集，再次打开时需要一级一级打开
        type: Boolean,
        default: false
      },
      themeColor: {
        // 主题颜色
        type: String,
        default: "#f9ae3d"
        // #f9ae3d
      },
      cancelColor: {
        // 取消按钮颜色
        type: String,
        default: ""
        // #757575
      },
      titleColor: {
        // 标题颜色
        type: String,
        default: ""
        // #757575
      },
      currentIcon: {
        // 展开时候的ic
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQ0QTM0MzQ1Q0RBMTFFOUE0MjY4NzI1Njc1RjI1ODIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQ0QTM0MzU1Q0RBMTFFOUE0MjY4NzI1Njc1RjI1ODIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDRBMzQzMjVDREExMUU5QTQyNjg3MjU2NzVGMjU4MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDRBMzQzMzVDREExMUU5QTQyNjg3MjU2NzVGMjU4MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PidwepsAAAK0SURBVHja7JxbTsJAFIYHww7ciStgCeoGvGxAiOsgURegoL5720AXYLiIr0aJviq3Zx3PhIEnKG3ndtr+f3KixrSUj/ZjzjClIqUUiFm2gAAQAREQEUAEREAERAQQAREQAREBREAEREBEEqa67h9RFDWllDv0awWYlqlQHmu1WjMRRMoV1QFttA12y3xRtdNczq8EsE4/f8FumX2q77ROvNXk8UGMEKdUz6tYJHljaZAbuyUH+UR1to5BEohTuqwPCeS4pAA/qY6o/kyHOAMCeRK3owJnj+rH1jjxhqpVsstaebCz6TmnHWyXyY+xHjSBWBY/bvSgadtXBj9u9KCN3rnIfkzkQVsTEEX0Y2IP2oKo/HhMICcFAThUcwVZNGU6FdbX/XURzkbVF4+ybGhjPrFdgP66QdXNurGtSdk6Xdb9nAJ8oDo3OQlsQZzkdPw41ONBo6vI5scDefRjZg+6gpg3Pxp50CXEvPjR2IOuIXL3oxUPuobI3Y9WPOgDIlc/WvOgL4iL/vqFCcD7LH0xB4hj7cfQ/fWH9qCT+FhG0tN+DBk1PzjOM0SVllixcsBT1AvYc/kAPhc0hRg/3uvxoCgKRN9+dOrBUBB9+9GpB0NC9OVH5x4MDdG1H714kANEV3705kEOEBf9dcPi/lQnsuvLg1wgSu3Ha0v7Uh4MMgUXeuG71H407a+VBy9CPQkOdw+MtB+nGbd/D+FBbhBNxo9SjwcngJjNj0E9yBFiFj8G9SBXiGn8GNyDnCEm8SMLD3KHGOdHNh7kDjHOj2w8mAeIi/5arX+c6b/fxHz9oADEdGdjR/fXCw/OOB5oVfCOgnepz8IB14PMw03jCmTE+QBx5z0gAmKSqK9OUF+hcAeIhu/QYr4Qie8rjW83hhMBERARQAREQAREBBABERCLnH8BBgA+TQI7U4t53AAAAABJRU5ErkJggg=="
      },
      defaultIcon: {
        // 折叠时候的ic
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAACE0lEQVR4Xu3c200DMRCF4XEltJAOkEugA+ggpUAHoQMqiFMCdEAJUMEiS4mEELlIO7bPOeN9i6K1rG/952myyea1WiCtXmEuYBPR4RBMxInoIOCwhOtJLKVszWyXc/5y2BvNEq6I+/3+kFK6M7OHnPM7jcLKjbZAvD/uaZtzflm5P4rbWyJWgDcze1LPuzVihfxUz7sH4ilJ2bx7Isrm3RtRMu8RiHJ5j0SUyXs0okTeCIj0eSMh0uaNhkiZNyIiXd7IiDR5oyNS5M2ACJ83EyJs3myIkHkzIsLlzYwIkzc7IkTeCojD81ZCHJa3GuKQvBURu+etjNgtb3XELnlHQGyedyTEZnlHQ2ySd0RE97wjI7rlHR3RJe+JeIrbLOecD6ePpZQ6W1kn2epo4MUrPOKyLN8ppYq1+y1VStncOjIdGnFZlo+U0uOtWOeOY2TE12Ouq//pEA7xXL7XfvcufR8K0Svfv6CREN3yDYfYIt9QiK3yjYTYLF95xB75SiP2ylcZsVu+cogj8pVCHJWvEuKwfOkREfKlRkTJlxkRJl86RMR8qRBR82VChM0XHpEhX2hElnyREWnyhUNkzBcKkTVfJETafIcjKuQ7FFEl35GIMvl2R1TMtyuiar49EWXzbY5oZpv/hibXTF2h3+s60FRKeT6+3TjMS3nrA3ZFRD8xrfY3ER1kJ+JEdBBwWGKeRAfEH1wS5WFZSDB/AAAAAElFTkSuQmCC"
      },
      lastIcon: {
        // 没有子集的ic
        type: String,
        default: ""
      },
      border: {
        // 是否有分割线
        type: Boolean,
        default: false
      },
      checkStrictly: {
        // 只有在funcMode为checkbox状态下生效； 状态下节点选择完全受控（父子节点选中状态不再关联）
        type: Boolean,
        default: false
      },
      checkStrictlyModel: {
        // 关联模式 weak: 弱关联；strong: 强关联
        type: String,
        default: "weak"
      },
      showHalfCheckedTips: {
        // 只有在funcMode为checkbox, checkStrictly为false状态下生效； 父子节点选中状态不再关联，显示半选提示
        type: Boolean,
        default: true
      },
      ifSearch: {
        // 是否开启search模式
        type: Boolean,
        default: true
      },
      searchModel: {
        // 搜索模式配置
        type: String,
        default: "common"
        // depHighlight: 从属高亮；common: 一般；remote：远程
      },
      showAuxiliaryLine: {
        // 辅助线模式
        type: Boolean,
        default: false
      },
      loadData: {
        type: Function
      },
      height: {
        type: Number,
        default: 500
      },
      changeVerify: {
        type: Function
      },
      expandedKeys: {
        // (Controlled) Specifies the keys of the expanded treeNodes
        type: Array,
        default: () => []
      },
      expandedMode: {
        // common:  一般模式；singe: 单一模式；
        type: String,
        default: "common"
      }
    },
    data() {
      return {
        showTree: false,
        treeList: [],
        currentTreeData: [],
        selectIndex: -1,
        keywords: "",
        nodeInitContrl: {},
        top: "",
        initNum: 1
      };
    },
    options: {
      styleIsolation: "shared"
    },
    computed: {
      _showTreeBar() {
        return this.uiMode === "popup";
      },
      _themeColor() {
        return this.themeColor || "#f9ae3d";
      },
      _treeList() {
        if (this.ifSearch && this.keywords) {
          return this.treeList.filter((item) => {
            return item.name && item.name.indexOf(this.keywords) !== -1;
          }).map((item) => {
            const o2 = JSON.parse(JSON.stringify(item));
            if (o2.showChild === false) {
              o2.showChild = true;
            }
            if (o2.show === false) {
              o2.show = true;
            }
            return o2;
          });
        } else {
          return this.treeList;
        }
      },
      customTitle() {
        if (typeof this.title === "function") {
          return this.title(this._getCheckedParams());
        } else {
          return this.title;
        }
      },
      multiple() {
        if (this.funcMode === "checkbox") {
          return true;
        } else if (this.funcMode === "radio") {
          return false;
        } else {
          return true;
        }
      }
    },
    methods: {
      _show() {
        this.showTree = true;
      },
      _hide() {
        this.showTree = false;
      },
      _cancel() {
        this._hide();
        this.$emit("cancel", "");
      },
      _confirm() {
        let rt2 = this._getCheckedParams();
        this._hide();
        this.$emit("confirm", rt2);
      },
      _getLabelSlotData(item) {
        const _it = this.getItemFromTreeData(this.currentTreeData, item.id);
        const it2 = Object.assign({}, _it);
        delete it2[this.childrenKey];
        return it2;
      },
      _getCheckedParams() {
        let rt2 = [], obj = {};
        this.treeList.forEach((v2, i2) => {
          if (this.treeList[i2].checked) {
            obj = {};
            obj.parents = this.treeList[i2].parents;
            obj = Object.assign(obj, this.treeList[i2].source);
            delete obj.children;
            rt2.push(obj);
          }
        });
        return rt2;
      },
      _addSubItem(item) {
        if (item.disabled)
          return;
        const it2 = Object.assign({}, item);
        if (item.lastRank) {
          item.lastRank = false;
          item.showChild = true;
        }
        this.$nextTick(() => {
          this.initNum++;
          const parentId = item.parentId.concat([]);
          const parents = item.parents.concat([]);
          parentId.push(item.id);
          parents.push(item);
          it2.disabled = false;
          it2.rank = it2.rank + 1;
          it2.id = `next-tree-${this.initNum}`;
          it2.parentId = [...parentId];
          it2.parents = [...parents];
          it2.show = true;
          it2.showChild = false;
          it2.open = false;
          it2.name = "";
          it2.status = "edit";
          it2.source = {};
          it2.hideArr = [];
          it2.lastRank = true;
          let index2 = -1;
          for (let i2 = this.treeList.length - 1; i2 >= 0; i2--) {
            if (this.treeList[i2].id === item.id) {
              index2 = i2;
              break;
            }
          }
          if (index2 !== -1) {
            this.treeList.splice(index2 + 1, 0, it2);
          }
        });
      },
      _addSameItem(item) {
        if (item.disabled)
          return;
        const it2 = Object.assign({}, item);
        let index2 = -1;
        for (let i2 = this.treeList.length - 1; i2 >= 0; i2--) {
          if (this.treeList[i2].id === item.id || this.treeList[i2].parentId.indexOf(item.id) !== -1) {
            index2 = i2;
            break;
          }
        }
        this.initNum++;
        it2.id = `next-tree-${this.initNum}`;
        it2.source = {};
        it2.hideArr = [];
        it2.name = "";
        it2.status = "edit";
        if (index2 !== -1) {
          this.treeList.splice(index2 + 1, 0, it2);
        }
      },
      async _complete(item) {
        if (item.name) {
          item.status = "loading";
          if (item.operateCallback) {
            await item.operateCallback("complete", item);
            await this.$nextTick();
          }
          item.status = "";
        } else {
          uni.showToast({
            title: "请先完善内容",
            icon: "none"
          });
        }
      },
      _editItem(item) {
        if (item.disabled)
          return;
        item.status = "edit";
      },
      _revert() {
        this.uiModeInit();
      },
      async _delItem(item) {
        if (item.disabled)
          return;
        item.status = "loading";
        if (item.operateCallback) {
          await item.operateCallback("delete", item);
          await this.$nextTick();
        }
        this.delItemFunc(item);
      },
      delItemFunc(item) {
        const id = item && item.id ? item.id : "";
        const ids = [];
        this.treeList.map((it2, index2) => {
          if (it2.id === id) {
            ids.push(index2);
          } else if (it2.parentId.indexOf(id) !== -1) {
            ids.push(index2);
          }
        });
        ids.sort((a2, b2) => b2 - a2);
        ids.forEach((index2) => {
          this.treeList.splice(index2, 1);
        });
      },
      checkedFunc(values, state = true) {
        if (values instanceof Array) {
          values.map((id) => {
            const item = this.treeList.find((it2) => it2.id === id);
            if (item) {
              item.checked = !!state;
            }
          });
        } else {
          const _item = this.treeList.find((it2) => it2.id === values);
          if (_item) {
            _item.checked = !!state;
          }
        }
      },
      getRenderTreeList(list = [], rank = 0, parentId = [], parents = []) {
        const treeList = [];
        list.forEach((item) => {
          const halfChecked = this.getHalfCheckedFormTreeData(item);
          let ouputText = "";
          if (this.searchModel === "depHighlight") {
            if (parents && parents.length) {
              ouputText = parents.map((item2) => item2[this.labelKey]).join(" > ");
              ouputText = ouputText + " > " + item[this.labelKey];
            } else {
              ouputText = item[this.labelKey];
            }
          }
          const bool1 = this.expandedKeys.indexOf(item[this.valueKey]) !== -1;
          const len = parentId.length;
          const bool2 = len > 0 ? this.expandedKeys.indexOf(parentId[len - 1]) !== -1 : bool1;
          treeList.push({
            id: item[this.valueKey],
            name: item[this.labelKey],
            source: item,
            parentId,
            // 父级id数组
            parents,
            // 父级id数组
            rank,
            // 层级
            showChild: bool1,
            //子级是否显示
            open: bool1,
            //是否打开
            show: bool1 || bool2 || rank === 0,
            // 自身是否显示
            hideArr: [],
            ouputText,
            orChecked: item.checked ? item.checked : false,
            checked: item.checked ? item.checked : false,
            halfChecked,
            disabled: this.disabledKey && item[this.disabledKey] === true,
            status: "",
            operateCallback: typeof item.operateCallback === "function" ? item.operateCallback : void 0
          });
          if (bool1) {
            this.nodeInitContrl[item[this.valueKey]] = true;
          } else {
            this.nodeInitContrl[item[this.valueKey]] = void 0;
          }
          if (Array.isArray(item[this.childrenKey]) && item[this.childrenKey].length > 0 || this.loadData && Array.isArray(item[this.childrenKey]) && item[this.childrenKey].length === 0) {
            let parentid = [...parentId], parentArr = [...parents];
            delete parentArr.children;
            parentid.push(item[this.valueKey]);
            parentArr.push({
              [this.valueKey]: item[this.valueKey],
              [this.labelKey]: item[this.labelKey]
            });
          } else if (item[this.childrenKey] === null) {
            treeList[treeList.length - 1].lastRank = true;
          } else {
            treeList[treeList.length - 1].lastRank = true;
          }
        });
        return treeList;
      },
      //扁平化树结构
      _renderTreeList(list = [], rank = 0, parentId = [], parents = []) {
        list.forEach((item) => {
          const halfChecked = this.getHalfCheckedFormTreeData(item);
          let ouputText = "";
          if (this.searchModel === "depHighlight") {
            if (parents && parents.length) {
              ouputText = parents.map((item2) => item2[this.labelKey]).join(" > ");
              ouputText = ouputText + " > " + item[this.labelKey];
            } else {
              ouputText = item[this.labelKey];
            }
          }
          const bool1 = this.expandedKeys.indexOf(item[this.valueKey]) !== -1;
          const len = parentId.length;
          const bool2 = len > 0 ? this.expandedKeys.indexOf(parentId[len - 1]) !== -1 : bool1;
          this.treeList.push({
            id: item[this.valueKey],
            name: item[this.labelKey],
            source: item,
            parentId,
            // 父级id数组
            parents,
            // 父级id数组
            rank,
            // 层级
            showChild: bool1,
            //子级是否显示
            open: bool1,
            //是否打开
            show: bool1 || bool2 || rank === 0,
            // 自身是否显示
            hideArr: [],
            ouputText,
            orChecked: item.checked ? item.checked : false,
            checked: item.checked ? item.checked : false,
            halfChecked,
            disabled: this.disabledKey && item[this.disabledKey] === true,
            status: "",
            operateCallback: typeof item.operateCallback === "function" ? item.operateCallback : void 0
          });
          if (bool1) {
            this.nodeInitContrl[item[this.valueKey]] = true;
          } else {
            this.nodeInitContrl[item[this.valueKey]] = void 0;
          }
          if (Array.isArray(item[this.childrenKey]) && item[this.childrenKey].length > 0 || this.loadData && Array.isArray(item[this.childrenKey]) && item[this.childrenKey].length === 0) {
            let parentid = [...parentId], parentArr = [...parents];
            delete parentArr.children;
            parentid.push(item[this.valueKey]);
            parentArr.push({
              [this.valueKey]: item[this.valueKey],
              [this.labelKey]: item[this.labelKey]
            });
            this._renderTreeList(item[this.childrenKey], rank + 1, parentid, parentArr);
          } else if (item[this.childrenKey] === null) {
            this.treeList[this.treeList.length - 1].lastRank = true;
          } else {
            this.treeList[this.treeList.length - 1].lastRank = true;
          }
        });
      },
      // 处理默认选择
      _defaultSelect() {
        this.treeList.forEach((v2, i2) => {
          if (v2.checked) {
            this.treeList.forEach((v22, i22) => {
              if (v2.parentId.toString().indexOf(v22.parentId.toString()) >= 0) {
                v22.show = true;
                if (v2.parentId.includes(v22.id)) {
                  v22.showChild = true;
                  v22.open = true;
                }
              }
            });
          }
        });
      },
      // 点击
      async _treeItemTap(item, _index) {
        const index2 = this.treeList.findIndex((it2) => it2.id === item.id);
        if (item.lastRank === true) {
          if (item.disabled === true)
            return;
          if (["checkbox", "radio"].indexOf(this.funcMode) === -1)
            return;
          this.treeList[index2].checked = !this.treeList[index2].checked;
          if (this.changeVerify && typeof this.changeVerify === "function") {
            const current = Object.assign({}, item.source);
            current.checked = item.checked;
            const tip = this.changeVerify(current, this.multiple ? this._getCheckedParams() : [current]);
            if (tip) {
              this.treeList[index2].checked = !this.treeList[index2].checked;
              uni.showToast({
                title: tip,
                icon: "none"
              });
              return;
            }
          }
          this.treeList[index2].halfChecked = false;
          if (this.multiple && !this.checkStrictly && this.showHalfCheckedTips) {
            this.updateHalfChecked(index2);
          } else if (this.multiple && this.checkStrictly) {
            this.updateParentChecked(index2);
          }
          this._fixMultiple(index2);
          this.$emit("change", this._getCheckedParams());
          return;
        } else if (this.ifSearch && this.keywords) {
          return;
        }
        const isLoadData = this.loadData && !this.nodeInitContrl[item.id];
        if (isLoadData) {
          uni && uni.showLoading({ title: "请稍后..." });
          const newChild = await this.loadData({ $type: "nodeLoad", source: this.treeList[index2].source });
          const treeItem = this.getItemFromTreeData(this.currentTreeData, item.id);
          treeItem[this.childrenKey] = newChild && newChild.length ? newChild : void 0;
          const parentId = item.parentId || [];
          const lists = this.getRenderTreeList(newChild || [], item.rank + 1, parentId.concat([item.id]), [{ [this.valueKey]: item[this.valueKey], [this.labelKey]: item[this.labelKey] }]);
          this.nodeInitContrl[item.id] = true;
          this.treeList.splice(index2 + 1, 0, ...lists);
        }
        const childLen = this.treeList.filter((it2) => it2.parentId.includes(item.id)).length;
        if (!isLoadData && childLen > 50) {
          uni && uni.showLoading({ title: "请稍后..." });
        }
        let list = this.treeList;
        let id = item.id;
        item.showChild = !item.showChild;
        item.open = item.showChild ? true : !item.open;
        list.forEach((childItem, i2) => {
          if (item.showChild === false) {
            if (!childItem.parentId.includes(id)) {
              return;
            } else {
              if (!this.foldAll) {
                if (childItem.lastRank !== true && !childItem.open) {
                  childItem.showChild = false;
                }
                if (childItem.show) {
                  childItem.hideArr[item.rank] = id;
                }
              } else {
                if (childItem.lastRank !== true) {
                  childItem.showChild = false;
                }
              }
              childItem.show = false;
            }
          } else {
            if (childItem.parentId[childItem.parentId.length - 1] === id) {
              childItem.show = true;
            }
            if (childItem.parentId.includes(id) && !this.foldAll) {
              if (childItem.hideArr[item.rank] === id) {
                childItem.show = true;
                if (childItem.open && childItem.showChild) {
                  childItem.showChild = true;
                } else {
                  childItem.showChild = false;
                }
                childItem.hideArr[item.rank] = null;
              }
            } else if (this.expandedMode === "singe" && !childItem.parentId.includes(id)) {
              if (childItem.id !== id) {
                const bool1 = item.parentId.some((id2) => {
                  return childItem.parentId && childItem.parentId.indexOf(id2) !== -1 || childItem.rank === 0;
                });
                const childItemParentId = [...childItem.parentId];
                const _id = childItemParentId ? childItemParentId.pop() : "";
                const nodeList = [item, { parentId: childItemParentId.length ? childItemParentId : [] }];
                if (!childItem.lastRank) {
                  if (item.parentId.indexOf(childItem.id) === -1) {
                    childItem.showChild = false;
                  }
                  if (!bool1 && !this.isSiblingNode([item, childItem])) {
                    childItem.show = false;
                  } else if (childItem.rank !== 0 && _id !== id && this.isSiblingNode(nodeList)) {
                    childItem.show = false;
                  } else if (childItem.rank !== 0 && _id !== id && !this.isSiblingNode(nodeList) && this.isParentSiblingNode(nodeList)) {
                    childItem.show = false;
                  }
                } else {
                  if (!this.isSiblingNode([item, childItem]) && !bool1) {
                    childItem.show = false;
                  } else if (_id !== id && this.isSiblingNode(nodeList)) {
                    childItem.show = false;
                  } else if (_id !== id && !this.isSiblingNode(nodeList) && this.isParentSiblingNode(nodeList)) {
                    childItem.show = false;
                  }
                }
              }
            }
          }
        });
        setTimeout(() => {
          uni && uni.hideLoading();
        });
      },
      isSiblingNode(targetArr = []) {
        const target1 = targetArr && targetArr.length ? targetArr[0] : {};
        let target1Id = "";
        if (target1.parentId && target1.parentId.length) {
          target1Id = target1.parentId[target1.parentId.length - 1];
        }
        return targetArr.every((item) => {
          if (item && item.parentId && item.parentId.length) {
            return target1Id === item.parentId[item.parentId.length - 1];
          } else {
            return target1Id === "";
          }
        });
      },
      isParentSiblingNode(targetArr = []) {
        const target1 = targetArr && targetArr.length ? targetArr[0] : {};
        let target1Id = "";
        if (target1.parentId && target1.parentId.length) {
          target1Id = target1.parentId[target1.parentId.length - 1];
        }
        return targetArr.every((item) => {
          if (item && item.parentId && item.parentId.length) {
            return item.parentId.some((id) => id === target1Id) && target1Id !== "";
          } else {
            return target1Id === "";
          }
        });
      },
      getThemeNodes(text) {
        (text || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`(${text || ""})`, "gi");
        return text ? text.replace(regex, `<span style="color: ${this._themeColor}">$1</span>`) : "";
      },
      getNodes(ouputText) {
        if (this.keywords && ouputText) {
          const key = (this.keywords || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const regex = new RegExp(`(${key})`, "gi");
          return ouputText.replace(regex, `<span style="color: ${this._themeColor}">$1</span>`);
        }
        return ouputText;
      },
      getHalfCheckedFormTreeData(item) {
        if (this.checkStrictly) {
          return false;
        } else if (!this.showHalfCheckedTips) {
          return false;
        } else {
          if (item[this.childrenKey] && item[this.childrenKey].length) {
            return item[this.childrenKey].some((it2) => {
              if (it2.checked === true) {
                return true;
              } else if (it2[this.childrenKey] && it2[this.childrenKey].length) {
                return this.getHalfCheckedFormTreeData(it2);
              } else {
                return false;
              }
            });
          } else {
            return false;
          }
        }
      },
      getItemFromTreeData(treeData, id) {
        if (id) {
          let item = null;
          (treeData || []).some((it2) => {
            if (it2[this.valueKey] === id) {
              item = it2;
              return true;
            } else if (it2[this.childrenKey] && it2[this.childrenKey].length) {
              item = this.getItemFromTreeData(it2[this.childrenKey], id);
              return !!item;
            } else {
              return false;
            }
          });
          return item;
        }
        return null;
      },
      _treeItemSelect(item, _index) {
        const index2 = this.treeList.findIndex((it2) => it2.id === item.id);
        if (item.disabled === true)
          return;
        this.treeList[index2].checked = !this.treeList[index2].checked;
        if (this.changeVerify && typeof this.changeVerify === "function") {
          const current = Object.assign({}, item.source);
          current.checked = item.checked;
          const tip = this.changeVerify(current, this.multiple ? this._getCheckedParams() : [current]);
          if (tip) {
            this.treeList[index2].checked = !this.treeList[index2].checked;
            uni.showToast({
              title: tip,
              icon: "none"
            });
            return;
          }
        }
        this.treeList[index2].halfChecked = false;
        if (this.multiple && this.checkStrictly) {
          if (!item.lastRank) {
            const source = item.source || {};
            const children = source[this.childrenKey] || [];
            const checkedKeyList = this.getChildrenKeys(children);
            this.treeList.forEach((v2, i2) => {
              if (checkedKeyList.indexOf(v2.id) !== -1) {
                if (this.checkStrictlyModel === "weak") {
                  if (!this.treeList[i2].disabled) {
                    this.treeList[i2].checked = this.treeList[index2].checked;
                  }
                } else if (this.checkStrictlyModel === "strong") {
                  this.treeList[i2].checked = this.treeList[index2].checked;
                }
              }
            });
          }
          this.updateParentChecked(index2);
        } else if (this.multiple && !this.checkStrictly && this.showHalfCheckedTips) {
          this.updateHalfChecked(index2);
        } else {
          this._fixMultiple(index2);
        }
        this.$emit("change", this._getCheckedParams());
      },
      updateParentChecked(index2) {
        const parentId = (this.treeList[index2].parentId || []).concat([]).reverse();
        if (parentId && parentId.length) {
          parentId.map((id) => {
            const parentTreeDataItem = this.getItemFromTreeData(this.currentTreeData, id);
            const childrenIds = (parentTreeDataItem[this.childrenKey] || []).map((item) => item[this.valueKey]);
            const bool = this.treeList.filter((it2) => childrenIds.indexOf(it2.id) !== -1).every((it2) => it2.checked === true);
            const _bool = this.treeList.filter((it2) => childrenIds.indexOf(it2.id) !== -1).every((it2) => it2.checked === false);
            const parentItem = this.treeList.find((it2) => it2.id === id);
            if (parentItem) {
              if (this.checkStrictlyModel === "weak") {
                if (bool && !parentItem.disabled) {
                  parentItem.checked = true;
                } else if (_bool && !parentItem.disabled) {
                  parentItem.checked = false;
                }
              } else if (this.checkStrictlyModel === "strong") {
                if (bool) {
                  parentItem.checked = true;
                } else {
                  parentItem.checked = false;
                }
              }
            }
          });
        }
      },
      updateHalfChecked(index2) {
        const _parentId = this.treeList[index2].parentId || [];
        const parentId = _parentId.concat([]).reverse();
        if (parentId && parentId.length) {
          parentId.map((id) => {
            const parentTreeDataItem = this.getItemFromTreeData(this.currentTreeData, id);
            const childrenIds = (parentTreeDataItem[this.childrenKey] || []).map((item) => item[this.valueKey]);
            const bool = this.treeList.filter((it2) => childrenIds.indexOf(it2.id) !== -1).every((it2) => it2.checked === false && it2.halfChecked === false);
            const _bool = this.treeList.filter((it2) => childrenIds.indexOf(it2.id) !== -1).some((it2) => it2.checked === true || it2.halfChecked === true);
            const parentItem = this.treeList.find((it2) => it2.id === id);
            if (parentItem) {
              if (!parentItem.checked) {
                if (bool) {
                  parentItem.halfChecked = false;
                } else if (_bool) {
                  parentItem.halfChecked = true;
                } else {
                  parentItem.halfChecked = false;
                }
              }
            }
          });
        }
        if (this.treeList[index2].checked == false) {
          const source = this.treeList[index2].source || {};
          const children = source[this.childrenKey] || [];
          const checkedKeyList = this.getChildrenKeys(children);
          const bool = this.treeList.filter((item) => checkedKeyList.indexOf(item.id) !== -1).some((item) => item.checked);
          if (bool) {
            this.treeList[index2].halfChecked = true;
          }
        }
      },
      showHalfChecked(item) {
        if (this.multiple && !this.checkStrictly && item.halfChecked === true) {
          return true;
        } else {
          return false;
        }
      },
      getChildrenKeys(children) {
        let keys = [];
        (children || []).map((item) => {
          keys.push(item[this.valueKey]);
          if (item[this.childrenKey] && item[this.childrenKey].length) {
            keys = keys.concat(this.getChildrenKeys(item[this.childrenKey]));
          }
        });
        return keys;
      },
      // 处理单选多选
      _fixMultiple(index2) {
        if (!this.multiple) {
          this.treeList.forEach((v2, i2) => {
            if (i2 != index2) {
              this.treeList[i2].checked = false;
            } else {
              this.treeList[i2].checked = true;
            }
          });
        }
      },
      // 重置数据
      _reTreeList() {
        this.treeList.forEach((v2, i2) => {
          this.treeList[i2].checked = v2.orChecked;
        });
      },
      _initTree() {
        this.treeList.length = 0;
        if (this.loadData) {
          this.currentTreeData = JSON.parse(JSON.stringify(this.treeData));
        } else {
          this.currentTreeData = this.treeData;
        }
        this._renderTreeList(this.currentTreeData);
        this.$nextTick(() => {
          this._defaultSelect();
        });
      },
      _clear() {
        this.treeList.map((item) => {
          if (this.multiple && this.checkStrictly) {
            if (this.checkStrictlyModel === "strong") {
              item.checked = false;
            } else if (this.checkStrictlyModel === "weak") {
              if (!item.disabled) {
                item.checked = false;
              }
            } else {
              item.checked = false;
            }
          } else {
            if (!item.disabled) {
              item.checked = false;
            }
          }
          item.halfChecked = false;
        });
        this.$emit("change", this._getCheckedParams());
        this.$emit("clear");
      },
      async onSearch(val) {
        if (this.searchModel === "remote") {
          if (this.loadData) {
            if (val) {
              const newChild = await this.loadData({ $type: "remoteSearch", source: val });
              const lists = this.getRenderTreeList(newChild);
              this.treeList = [...lists];
            } else {
              this._initTree();
            }
          } else {
            uni.showToast({
              title: "使用远程搜索模式，需要配置loadData函数；",
              icon: "none"
            });
          }
        } else {
          this.keywords = val;
        }
      },
      initUiModePopup(watched) {
        uni.getSystemInfo({
          success: (res) => {
            this.top = res.windowHeight - this.height + "px";
          }
        });
        watched && watched();
        watched = this.$watch(() => this.showTree, (bool) => {
          if (bool) {
            this._initTree();
          } else {
            this.$nextTick(() => {
              setTimeout(() => {
                this.treeList.length = 0;
                this.nodeInitContrl = {};
              });
            });
          }
        }, { immediate: true });
      },
      initUiModePage(watched) {
        this.top = "0px";
        watched && watched();
        watched = this.$watch(() => this.treeData, () => {
          this.treeList.length = 0;
          this.nodeInitContrl = {};
          this.$nextTick(() => {
            this._initTree();
          });
        }, { immediate: true, deep: true });
        this.$nextTick(() => {
          this.showTree = true;
        });
      },
      uiModeInit() {
        let watched = null;
        if (this.uiMode === "popup") {
          this.initUiModePopup(watched);
        } else if (this.uiMode === "page") {
          this.initUiModePage(watched);
        } else {
          this.initUiModePopup(watched);
        }
      }
    },
    mounted() {
      formatAppLog("log", "at uni_modules/next-tree/components/next-tree/next-tree.vue:1029", "----------next-tree组件完成挂载demo------------");
      this.uiModeInit();
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_next_search_more = resolveEasycom(vue.resolveDynamicComponent("next-search-more"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "next-tree" }, [
      vue.createCommentVNode(` <view class="next-tree-mask" :class="{'show':showTree}" @tap="_cancel"></view> `),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["next-tree-cnt", { "show": $data.showTree, "next-tree-cnt-page": $props.uiMode === "page" }])
        },
        [
          $options._showTreeBar ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "next-tree-bar"
          }, [
            vue.createElementVNode(
              "view",
              {
                class: "next-tree-bar-cancel",
                style: vue.normalizeStyle({ "color": $props.cancelColor }),
                "hover-class": "hover-c",
                onClick: _cache[0] || (_cache[0] = (...args) => $options._cancel && $options._cancel(...args))
              },
              "取消",
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              {
                class: "next-tree-bar-title",
                style: vue.normalizeStyle({ "color": $props.titleColor })
              },
              vue.toDisplayString($options.customTitle),
              5
              /* TEXT, STYLE */
            ),
            vue.createElementVNode("view", { class: "next-tree-bar-btns" }, [
              ["checkbox", "radio"].indexOf($props.funcMode) !== -1 ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "next-tree-bar-cancel",
                  style: vue.normalizeStyle({ "color": $props.cancelColor }),
                  "hover-class": "hover-c",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options._clear && $options._clear(...args))
                },
                "清空",
                4
                /* STYLE */
              )) : $props.funcMode === "edit" ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  class: "next-tree-bar-cancel",
                  style: vue.normalizeStyle({ "color": $props.cancelColor }),
                  "hover-class": "hover-c",
                  onClick: _cache[2] || (_cache[2] = (...args) => $options._revert && $options._revert(...args))
                },
                "还原",
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "btn-divid" }),
              vue.createElementVNode(
                "view",
                {
                  class: "next-tree-bar-confirm",
                  style: vue.normalizeStyle({ "color": $options._themeColor }),
                  "hover-class": "hover-c",
                  onClick: _cache[3] || (_cache[3] = (...args) => $options._confirm && $options._confirm(...args))
                },
                "确定",
                4
                /* STYLE */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "next-tree-view",
              style: vue.normalizeStyle("top:" + ($options._showTreeBar ? "72rpx" : "0rpx"))
            },
            [
              $props.ifSearch ? (vue.openBlock(), vue.createBlock(_component_next_search_more, {
                key: 0,
                onSearch: $options.onSearch,
                mode: "center",
                placeholder: "请输入关键字",
                isFixedSearchBtn: false
              }, null, 8, ["onSearch"])) : vue.createCommentVNode("v-if", true),
              vue.renderSlot(_ctx.$slots, "topBar", {}, void 0, true),
              vue.createElementVNode("view", { class: "next-tree-view-sc" }, [
                $options._treeList.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($options._treeList, (item, index2) => {
                      return vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        { key: index2 },
                        [
                          item.show ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 0,
                            class: "next-tree-item-block"
                          }, [
                            vue.createElementVNode(
                              "view",
                              {
                                class: vue.normalizeClass(["next-tree-item", {
                                  border: $props.border === true,
                                  show: item.show,
                                  last: item.lastRank,
                                  showchild: item.showChild,
                                  open: item.open,
                                  disabled: item.disabled === true
                                }]),
                                style: vue.normalizeStyle([{
                                  paddingLeft: item.rank * 15 + "px",
                                  zIndex: item.rank * -1 + 50
                                }])
                              },
                              [
                                $props.showAuxiliaryLine ? (vue.openBlock(), vue.createElementBlock(
                                  vue.Fragment,
                                  { key: 0 },
                                  [
                                    item.rank > 1 ? (vue.openBlock(true), vue.createElementBlock(
                                      vue.Fragment,
                                      { key: 0 },
                                      vue.renderList(item.rank - 1, (i2) => {
                                        return vue.openBlock(), vue.createElementBlock(
                                          "view",
                                          {
                                            key: i2,
                                            style: vue.normalizeStyle({ left: 6 * (2 * i2 - 1) + 3 * (i2 - 1) + "px" }),
                                            class: "parent-horizontal-line"
                                          },
                                          null,
                                          4
                                          /* STYLE */
                                        );
                                      }),
                                      128
                                      /* KEYED_FRAGMENT */
                                    )) : vue.createCommentVNode("v-if", true),
                                    vue.createElementVNode("view", { class: "left-line" }, [
                                      item.lastRank ? (vue.openBlock(), vue.createElementBlock("view", {
                                        key: 0,
                                        class: "horizontal-line"
                                      })) : vue.createCommentVNode("v-if", true)
                                    ])
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createElementVNode("view", {
                                  class: "next-tree-label",
                                  onClick: vue.withModifiers(($event) => $options._treeItemTap(item, index2), ["stop"])
                                }, [
                                  vue.createElementVNode("image", {
                                    class: "next-tree-icon",
                                    src: item.lastRank ? $props.lastIcon : item.showChild ? $props.currentIcon : $props.defaultIcon
                                  }, null, 8, ["src"]),
                                  $props.funcMode === "edit" && item.status === "edit" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                                    key: 0,
                                    onClick: [
                                      _cache[4] || (_cache[4] = vue.withModifiers(() => {
                                      }, ["stop"])),
                                      _cache[5] || (_cache[5] = vue.withModifiers(() => {
                                      }, ["stop"]))
                                    ],
                                    class: "label-input",
                                    placeholder: "请输入",
                                    "onUpdate:modelValue": ($event) => item.name = $event
                                  }, null, 8, ["onUpdate:modelValue"])), [
                                    [vue.vModelText, item.name]
                                  ]) : $props.ifSearch && $props.searchModel === "depHighlight" && $data.keywords ? (vue.openBlock(), vue.createElementBlock("rich-text", {
                                    key: 1,
                                    nodes: $options.getNodes(item.ouputText),
                                    selectable: false
                                  }, null, 8, ["nodes"])) : _ctx.$slots.label ? vue.renderSlot(_ctx.$slots, "label", {
                                    key: 2,
                                    data: $options._getLabelSlotData(item)
                                  }, void 0, true) : item.checked && !item.disabled ? (vue.openBlock(), vue.createElementBlock("rich-text", {
                                    key: 3,
                                    nodes: $options.getThemeNodes(item.name)
                                  }, null, 8, ["nodes"])) : (vue.openBlock(), vue.createElementBlock(
                                    "text",
                                    { key: 4 },
                                    vue.toDisplayString(item.name),
                                    1
                                    /* TEXT */
                                  ))
                                ], 8, ["onClick"]),
                                ["checkbox", "radio"].indexOf($props.funcMode) !== -1 ? (vue.openBlock(), vue.createElementBlock(
                                  vue.Fragment,
                                  { key: 1 },
                                  [
                                    ($props.selectParent === true ? true : item.lastRank) ? (vue.openBlock(), vue.createElementBlock("view", {
                                      key: 0,
                                      class: "next-tree-check",
                                      onClick: vue.withModifiers(($event) => $options._treeItemSelect(item, index2), ["stop"])
                                    }, [
                                      item.checked ? (vue.openBlock(), vue.createElementBlock(
                                        "view",
                                        {
                                          key: 0,
                                          class: vue.normalizeClass(["next-tree-check-yes", { "radio": !$options.multiple }]),
                                          style: vue.normalizeStyle({ "border-color": item.disabled ? "#ccc" : $options._themeColor, "background-color": item.disabled ? "#ccc" : $options._themeColor })
                                        },
                                        [
                                          vue.createElementVNode(
                                            "view",
                                            {
                                              class: "next-tree-check-yes-b",
                                              style: vue.normalizeStyle({ "background-color": item.disabled ? "#ccc" : $options._themeColor })
                                            },
                                            [
                                              item.checked ? (vue.openBlock(), vue.createElementBlock("text", {
                                                key: 0,
                                                class: "icon-text"
                                              }, "✔")) : vue.createCommentVNode("v-if", true)
                                            ],
                                            4
                                            /* STYLE */
                                          )
                                        ],
                                        6
                                        /* CLASS, STYLE */
                                      )) : (vue.openBlock(), vue.createElementBlock(
                                        "view",
                                        {
                                          key: 1,
                                          class: vue.normalizeClass(["next-tree-check-no", { "radio": !$options.multiple }]),
                                          style: vue.normalizeStyle({ "border-color": item.disabled ? "#ccc" : $options._themeColor })
                                        },
                                        [
                                          $options.showHalfChecked(item) && $props.showHalfCheckedTips ? (vue.openBlock(), vue.createElementBlock(
                                            "text",
                                            {
                                              key: 0,
                                              style: vue.normalizeStyle({ "color": item.disabled ? "#ccc" : $options._themeColor, "font-weight": "blod", "font-size": "10px" }),
                                              class: "icon-text"
                                            },
                                            "一",
                                            4
                                            /* STYLE */
                                          )) : vue.createCommentVNode("v-if", true)
                                        ],
                                        6
                                        /* CLASS, STYLE */
                                      ))
                                    ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                )) : $props.funcMode === "edit" ? (vue.openBlock(), vue.createElementBlock(
                                  vue.Fragment,
                                  { key: 2 },
                                  [
                                    item.status === "loading" ? (vue.openBlock(), vue.createElementBlock("text", {
                                      key: 0,
                                      style: { "color": "#ccc" },
                                      class: "iconfont-loading icon-btn"
                                    }, "")) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                                      item.status === "edit" ? (vue.openBlock(), vue.createElementBlock("text", {
                                        key: 0,
                                        onClick: ($event) => $options._complete(item),
                                        style: vue.normalizeStyle({ "color": item.disabled ? "#ccc" : $options._themeColor }),
                                        class: "iconfont icon-btn"
                                      }, "", 12, ["onClick"])) : (vue.openBlock(), vue.createElementBlock(
                                        vue.Fragment,
                                        { key: 1 },
                                        [
                                          vue.createElementVNode("text", {
                                            onClick: ($event) => $options._editItem(item),
                                            style: vue.normalizeStyle({ "color": item.disabled ? "#ccc" : $options._themeColor }),
                                            class: "iconfont icon-btn"
                                          }, "", 12, ["onClick"]),
                                          vue.createElementVNode("text", {
                                            onClick: ($event) => $options._addSubItem(item),
                                            style: vue.normalizeStyle({ "color": item.disabled ? "#ccc" : "#333" }),
                                            class: "iconfont icon-btn"
                                          }, "", 12, ["onClick"]),
                                          vue.createElementVNode("text", {
                                            onClick: ($event) => $options._addSameItem(item),
                                            style: vue.normalizeStyle({ "color": item.disabled ? "#ccc" : "#333" }),
                                            class: "iconfont icon-btn"
                                          }, "", 12, ["onClick"])
                                        ],
                                        64
                                        /* STABLE_FRAGMENT */
                                      )),
                                      vue.createElementVNode("text", {
                                        onClick: ($event) => $options._delItem(item),
                                        style: vue.normalizeStyle({ "color": item.disabled ? "#ccc" : "#ff4d4f" }),
                                        class: "iconfont icon-btn"
                                      }, "", 12, ["onClick"])
                                    ]))
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                )) : vue.createCommentVNode("v-if", true)
                              ],
                              6
                              /* CLASS, STYLE */
                            )
                          ])) : vue.createCommentVNode("v-if", true)
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                  _ctx.$slots.empty ? vue.renderSlot(_ctx.$slots, "empty", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "empty"
                  }, [
                    vue.createElementVNode("text", null, "暂无数据")
                  ]))
                ])),
                $props.ifSearch ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  style: { "height": "80rpx" }
                })) : vue.createCommentVNode("v-if", true),
                vue.renderSlot(_ctx.$slots, "bottomBar", {}, void 0, true)
              ])
            ],
            4
            /* STYLE */
          )
        ],
        2
        /* CLASS */
      ),
      vue.createElementVNode("view", { class: "fixed-bottom-bar" }, [
        vue.renderSlot(_ctx.$slots, "fixedBottomBar", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$q], ["__scopeId", "data-v-30524442"], ["__file", "D:/subject-analyze/uni_modules/next-tree/components/next-tree/next-tree.vue"]]);
  const _imports_0 = "/assets/icon_top_bar_back.0c78be6b.png";
  const _imports_1 = "/assets/icon_top_bar_list.052a3544.png";
  const GetMyTreeAPI = () => {
    return http$1.request({
      url: "/study/get-learned-map",
      method: "GET"
    });
  };
  const addPlanAPI = (params) => {
    return http$1.request({
      url: "/study/add-plan",
      method: "POST",
      data: params
    });
  };
  const ChangePlanAPI = (params) => {
    return http$1.request({
      url: "/study/change-plan",
      method: "POST",
      data: params
    });
  };
  const getPlanAPI = () => {
    return http$1.request({
      url: "/study/get-data",
      method: "GET"
    });
  };
  const GetPlanListAPI = (params) => {
    return http$1.request({
      url: "/study/get-plan-list",
      method: "GET",
      data: params
    });
  };
  const GetPlanDetailAPI = (query) => {
    return http$1.request({
      url: "/study/get-plan-detail?" + query,
      method: "GET"
    });
  };
  const GetSubjectMapAPI = () => {
    return http$1.request({
      url: "/study/get-subject-map",
      method: "GET"
    });
  };
  const _sfc_main$z = {
    __name: "index",
    setup(__props) {
      vue.onMounted(async () => {
        await GetMyTreeData();
      });
      const isAll = vue.ref(false);
      const skillTree = vue.ref([{
        id: 1,
        label: "全部",
        children: []
      }]);
      const allTreeList = vue.ref([]);
      const myTreeList = vue.ref([]);
      const change = (e2) => {
        if (e2) {
          getAllTreeData();
        } else {
          GetMyTreeData();
        }
      };
      const buildTree = (dataList, type2) => {
        skillTree.value[0].children = [];
        let children = [];
        if (dataList) {
          let id = 2;
          for (const key in dataList) {
            let secondTree = {
              id,
              label: key,
              children: []
            };
            id++;
            const item = dataList[key];
            for (const secondKey in item) {
              let thirdTree = {
                id,
                label: secondKey,
                children: []
              };
              id++;
              const thirdList = item[secondKey];
              thirdList.forEach((third) => {
                thirdTree.children.push({
                  id,
                  label: third,
                  children: []
                });
                id++;
              });
              secondTree.children.push(thirdTree);
            }
            children.push(secondTree);
          }
          if (type2 == 0) {
            allTreeList.value = children;
          } else {
            myTreeList.value = children;
          }
        } else {
          formatAppLog("log", "at pages/tree/index.vue:122", "exist");
          if (type2 == 0) {
            children = allTreeList.value;
          } else {
            children = myTreeList.value;
          }
        }
        children.forEach((item) => {
          skillTree.value[0].children.push(item);
        });
      };
      const getAllTreeData = async () => {
        if (allTreeList.value.length === 0) {
          await GetSubjectMapAPI().then((res) => {
            buildTree(res, 0);
          }).catch((err) => {
            formatAppLog("log", "at pages/tree/index.vue:146", err);
          });
        } else {
          buildTree(null, 0);
        }
      };
      const GetMyTreeData = async () => {
        if (myTreeList.value.length === 0) {
          await GetMyTreeAPI().then((res) => {
            buildTree(res, 1);
          }).catch((err) => {
            formatAppLog("log", "at pages/tree/index.vue:164", err);
          });
        } else {
          buildTree(null, 1);
        }
      };
      const toBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        const _component_up_switch = resolveEasycom(vue.resolveDynamicComponent("up-switch"), __easycom_1$2);
        const _component_next_tree = resolveEasycom(vue.resolveDynamicComponent("next-tree"), __easycom_2$3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: "学习路线&技能树",
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    onClick: toBack,
                    src: _imports_0,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_1,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "top" }, [
                vue.createElementVNode("view", { class: "title" }, " 我的技能树 "),
                vue.createElementVNode("view", { class: "chooseAll" }, [
                  vue.createTextVNode(" 展示全部"),
                  vue.createElementVNode("span", { class: "font-red" }, "技术栈"),
                  vue.createVNode(_component_up_switch, {
                    class: "switchBtn",
                    modelValue: isAll.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isAll.value = $event),
                    onChange: change,
                    activeColor: "#AC0404",
                    inactiveColor: "#272727",
                    size: "20"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              vue.createElementVNode("view", { class: "tree-box" }, [
                vue.createVNode(_component_next_tree, {
                  ref: "nextTreeRef",
                  treeData: skillTree.value,
                  uiMode: "page",
                  funcMode: "display",
                  ifSearch: false
                }, {
                  label: vue.withCtx(({ data: { label } }) => [
                    vue.createElementVNode(
                      "view",
                      { class: "line-block" },
                      vue.toDisplayString(label),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["treeData"])
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesTreeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__file", "D:/subject-analyze/pages/tree/index.vue"]]);
  const getMajorListAPI = () => {
    return http$1.request({
      url: "/major/get-list",
      method: "GET"
    });
  };
  const getMajorDetailAPI = (query) => {
    return http$1.request({
      url: "/major/get-detail?" + query,
      method: "GET"
    });
  };
  const _sfc_main$y = {
    __name: "index",
    setup(__props) {
      vue.onMounted(async () => {
        await getMajorList();
      });
      const allMajorList = vue.ref([]);
      const getMajorList = async () => {
        let majorMap = {};
        const buildTree = (dataList) => {
          dataList.forEach((item) => {
            if (item.major_type in majorMap) {
              majorMap[item.major_type].push({ "major_id": item.major_id, "major_name": item.major_name });
            } else {
              majorMap[item.major_type] = [{ "major_id": item.major_id, "major_name": item.major_name }];
            }
          });
          for (const item in majorMap) {
            allMajorList.value.push({ "major_type": item, "majorList": majorMap[item] });
          }
        };
        await getMajorListAPI().then((res) => {
          buildTree(res);
        }).catch((err) => {
          formatAppLog("log", "at pages/career/index.vue:68", err);
        });
      };
      const toDetail = (major_id) => {
        uni.navigateTo({
          url: "/pages/career/detail?major_id=" + major_id
        });
      };
      const toBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: "就业规划-学科分类",
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    onClick: toBack,
                    src: _imports_0,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_1,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "main-container" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(allMajorList.value, (type2, typeIndex) => {
                    return vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      { key: typeIndex },
                      [
                        vue.createElementVNode(
                          "view",
                          { class: "title" },
                          vue.toDisplayString(type2.major_type),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("view", { class: "major-box" }, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(type2.majorList, (major, index2) => {
                              return vue.openBlock(), vue.createElementBlock("view", {
                                class: "major",
                                key: index2,
                                onClick: ($event) => toDetail(major.major_id)
                              }, [
                                vue.createElementVNode(
                                  "span",
                                  { class: "text" },
                                  vue.toDisplayString(major.major_name),
                                  1
                                  /* TEXT */
                                )
                              ], 8, ["onClick"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesCareerIndex = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__file", "D:/subject-analyze/pages/career/index.vue"]]);
  const props$d = defineMixin({
    props: {
      // 用于v-model双向绑定选中的星星数量
      modelValue: {
        type: [String, Number],
        default: () => props$w.rate.value
      },
      // 要显示的星星数量
      count: {
        type: [String, Number],
        default: () => props$w.rate.count
      },
      // 是否不可选中
      disabled: {
        type: Boolean,
        default: () => props$w.rate.disabled
      },
      // 是否只读
      readonly: {
        type: Boolean,
        default: () => props$w.rate.readonly
      },
      // 星星的大小，单位px
      size: {
        type: [String, Number],
        default: () => props$w.rate.size
      },
      // 未选中时的颜色
      inactiveColor: {
        type: String,
        default: () => props$w.rate.inactiveColor
      },
      // 选中的颜色
      activeColor: {
        type: String,
        default: () => props$w.rate.activeColor
      },
      // 星星之间的间距，单位px
      gutter: {
        type: [String, Number],
        default: () => props$w.rate.gutter
      },
      // 最少能选择的星星个数
      minCount: {
        type: [String, Number],
        default: () => props$w.rate.minCount
      },
      // 是否允许半星
      allowHalf: {
        type: Boolean,
        default: () => props$w.rate.allowHalf
      },
      // 选中时的图标(星星)
      activeIcon: {
        type: String,
        default: () => props$w.rate.activeIcon
      },
      // 未选中时的图标(星星)
      inactiveIcon: {
        type: String,
        default: () => props$w.rate.inactiveIcon
      },
      // 是否可以通过滑动手势选择评分
      touchable: {
        type: Boolean,
        default: () => props$w.rate.touchable
      }
    }
  });
  const _sfc_main$x = {
    name: "u-rate",
    mixins: [mpMixin, mixin, props$d],
    data() {
      return {
        // 生成一个唯一id，否则一个页面多个评分组件，会造成冲突
        elId: guid(),
        elClass: guid(),
        rateBoxLeft: 0,
        // 评分盒子左边到屏幕左边的距离，用于滑动选择时计算距离
        activeIndex: this.modelValue,
        rateWidth: 0,
        // 每个星星的宽度
        // 标识是否正在滑动，由于iOS事件上touch比click先触发，导致快速滑动结束后，接着触发click，导致事件混乱而出错
        moving: false
      };
    },
    watch: {
      modelValue(val) {
        this.activeIndex = val;
      },
      activeIndex: "emitEvent"
    },
    emits: ["update:modelValue", "change"],
    methods: {
      addStyle,
      addUnit,
      init() {
        sleep().then(() => {
          this.getRateItemRect();
          this.getRateIconWrapRect();
        });
      },
      // 获取评分组件盒子的布局信息
      async getRateItemRect() {
        await sleep();
        this.$uGetRect("#" + this.elId).then((res) => {
          this.rateBoxLeft = res.left;
        });
      },
      // 获取单个星星的尺寸
      getRateIconWrapRect() {
        this.$uGetRect("." + this.elClass).then((res) => {
          this.rateWidth = res.width;
        });
      },
      // 手指滑动
      touchMove(e2) {
        if (!this.touchable) {
          return;
        }
        this.preventEvent(e2);
        const x = e2.changedTouches[0].pageX;
        this.getActiveIndex(x);
      },
      // 停止滑动
      touchEnd(e2) {
        if (!this.touchable) {
          return;
        }
        this.preventEvent(e2);
        const x = e2.changedTouches[0].pageX;
        this.getActiveIndex(x);
      },
      // 通过点击，直接选中
      clickHandler(e2, index2) {
        if (os$1() === "ios" && this.moving) {
          return;
        }
        this.preventEvent(e2);
        let x = 0;
        x = e2.changedTouches[0].pageX;
        this.getActiveIndex(x, true);
      },
      // 发出事件
      emitEvent() {
        this.$emit("change", this.activeIndex);
        this.$emit("update:modelValue", this.activeIndex);
      },
      // 获取当前激活的评分图标
      getActiveIndex(x, isClick = false) {
        if (this.disabled || this.readonly) {
          return;
        }
        const allRateWidth = this.rateWidth * this.count + this.rateBoxLeft;
        x = range$1(this.rateBoxLeft, allRateWidth, x) - this.rateBoxLeft;
        const distance = x;
        let index2;
        if (this.allowHalf) {
          index2 = Math.floor(distance / this.rateWidth);
          const decimal = distance % this.rateWidth;
          if (decimal <= this.rateWidth / 2 && decimal > 0) {
            index2 += 0.5;
          } else if (decimal > this.rateWidth / 2) {
            index2++;
          }
        } else {
          index2 = Math.floor(distance / this.rateWidth);
          const decimal = distance % this.rateWidth;
          if (isClick) {
            if (decimal > 0)
              index2++;
          } else {
            if (decimal > this.rateWidth / 2)
              index2++;
          }
        }
        this.activeIndex = Math.min(index2, this.count);
        if (this.activeIndex < this.minCount) {
          this.activeIndex = this.minCount;
        }
        setTimeout(() => {
          this.moving = true;
        }, 10);
        setTimeout(() => {
          this.moving = false;
        }, 10);
      }
    },
    mounted() {
      this.init();
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-rate",
      id: $data.elId,
      ref: "u-rate",
      style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)])
    }, [
      vue.createElementVNode(
        "view",
        {
          class: "u-rate__content",
          onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchMove && $options.touchMove(...args), ["stop"])),
          onTouchend: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchEnd && $options.touchEnd(...args), ["stop"]))
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(Number(_ctx.count), (item, index2) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["u-rate__content__item cursor-pointer", [$data.elClass]]),
                  key: index2
                },
                [
                  vue.createElementVNode("view", {
                    class: "u-rate__content__item__icon-wrap",
                    ref_for: true,
                    ref: "u-rate__content__item__icon-wrap",
                    onClick: vue.withModifiers(($event) => $options.clickHandler($event, index2 + 1), ["stop"])
                  }, [
                    vue.createVNode(_component_u_icon, {
                      name: Math.floor($data.activeIndex) > index2 ? _ctx.activeIcon : _ctx.inactiveIcon,
                      color: _ctx.disabled ? "#c8c9cc" : Math.floor($data.activeIndex) > index2 ? _ctx.activeColor : _ctx.inactiveColor,
                      "custom-style": {
                        padding: `0 ${$options.addUnit(_ctx.gutter / 2)}`
                      },
                      size: _ctx.size
                    }, null, 8, ["name", "color", "custom-style", "size"])
                  ], 8, ["onClick"]),
                  _ctx.allowHalf ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    onClick: vue.withModifiers(($event) => $options.clickHandler($event, index2 + 1), ["stop"]),
                    class: "u-rate__content__item__icon-wrap u-rate__content__item__icon-wrap--half",
                    style: vue.normalizeStyle([{
                      width: $options.addUnit($data.rateWidth / 2)
                    }]),
                    ref_for: true,
                    ref: "u-rate__content__item__icon-wrap"
                  }, [
                    vue.createVNode(_component_u_icon, {
                      name: Math.ceil($data.activeIndex) > index2 ? _ctx.activeIcon : _ctx.inactiveIcon,
                      color: _ctx.disabled ? "#c8c9cc" : Math.ceil($data.activeIndex) > index2 ? _ctx.activeColor : _ctx.inactiveColor,
                      "custom-style": {
                        padding: `0 ${$options.addUnit(_ctx.gutter / 2)}`
                      },
                      size: _ctx.size
                    }, null, 8, ["name", "color", "custom-style", "size"])
                  ], 12, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                2
                /* CLASS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        32
        /* NEED_HYDRATION */
      )
    ], 12, ["id"]);
  }
  const __easycom_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$p], ["__scopeId", "data-v-f2e3c29d"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-rate/u-rate.vue"]]);
  const _imports_2$1 = "/assets/icon_major_detail_star.0e332872.png";
  const _sfc_main$w = {
    __name: "detail",
    setup(__props) {
      vue.onMounted(async () => {
        const options = vue.getCurrentInstance();
        if (options.attrs.major_id)
          major_id.value = options.attrs.major_id;
        else if (options.attrs.__pageInstance)
          major_id.value = options.attrs.__pageInstance.options.major_id;
        getMajorDetail();
      });
      const major_id = vue.ref();
      const major_info = vue.ref({});
      const comment_list = vue.ref({});
      const getMajorDetail = async () => {
        const query = "major_id=" + major_id.value;
        formatAppLog("log", "at pages/career/detail.vue:86", query);
        await getMajorDetailAPI(query).then((res) => {
          formatAppLog("log", "at pages/career/detail.vue:89", res);
          major_info.value = res.major_info;
          comment_list.value = res.commen_list;
        }).catch((err) => {
          formatAppLog("log", "at pages/career/detail.vue:94", err);
        });
      };
      const toBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        const _component_up_image = resolveEasycom(vue.resolveDynamicComponent("up-image"), __easycom_1$6);
        const _component_up_avatar = resolveEasycom(vue.resolveDynamicComponent("up-avatar"), __easycom_2$6);
        const _component_up_rate = resolveEasycom(vue.resolveDynamicComponent("up-rate"), __easycom_3$3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: "就业规划-" + major_info.value.name,
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    onClick: toBack,
                    src: _imports_0,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_1,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "imgBox" }, [
                vue.createVNode(_component_up_image, {
                  src: major_info.value.pic_url,
                  width: "100%",
                  height: "320rpx"
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "introBox" }, [
                vue.createElementVNode(
                  "view",
                  { class: "intro" },
                  vue.toDisplayString(major_info.value.intro),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "starImg" }, [
                  vue.createElementVNode("image", {
                    src: _imports_2$1,
                    style: { "width": "70rpx", "height": "70rpx" }
                  }),
                  vue.createTextVNode(" 收藏 ")
                ])
              ]),
              vue.createElementVNode("view", { class: "commentList" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(comment_list.value, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "commentBox",
                      key: index2
                    }, [
                      vue.createElementVNode("view", { class: "top" }, [
                        vue.createElementVNode("view", { class: "left" }, [
                          vue.createVNode(_component_up_avatar, {
                            text: "头",
                            fontSize: "32rpx",
                            randomBgColor: "",
                            size: "64rpx"
                          })
                        ]),
                        vue.createElementVNode("view", { class: "center" }, [
                          vue.createTextVNode(
                            vue.toDisplayString(item.user) + " ",
                            1
                            /* TEXT */
                          ),
                          vue.createVNode(_component_up_rate, {
                            size: "28rpx",
                            count: "5",
                            modelValue: item.star,
                            "onUpdate:modelValue": ($event) => item.star = $event,
                            gutter: "0",
                            readonly: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        vue.createElementVNode("view", { class: "right font-red" }, " 2021-01-01 ")
                      ]),
                      vue.createElementVNode("view", { class: "bottom" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "title" },
                          vue.toDisplayString(item.title),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "content" },
                          vue.toDisplayString(item.body),
                          1
                          /* TEXT */
                        )
                      ])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesCareerDetail = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "D:/subject-analyze/pages/career/detail.vue"]]);
  const props$c = defineMixin({
    props: {
      // 标题
      title: {
        type: [String, Number],
        default: () => props$w.cell.title
      },
      // 标题下方的描述信息
      label: {
        type: [String, Number],
        default: () => props$w.cell.label
      },
      // 右侧的内容
      value: {
        type: [String, Number],
        default: () => props$w.cell.value
      },
      // 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
      icon: {
        type: String,
        default: () => props$w.cell.icon
      },
      // 是否禁用cell
      disabled: {
        type: Boolean,
        default: () => props$w.cell.disabled
      },
      // 是否显示下边框
      border: {
        type: Boolean,
        default: () => props$w.cell.border
      },
      // 内容是否垂直居中(主要是针对右侧的value部分)
      center: {
        type: Boolean,
        default: () => props$w.cell.center
      },
      // 点击后跳转的URL地址
      url: {
        type: String,
        default: () => props$w.cell.url
      },
      // 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作
      linkType: {
        type: String,
        default: () => props$w.cell.linkType
      },
      // 是否开启点击反馈(表现为点击时加上灰色背景)
      clickable: {
        type: Boolean,
        default: () => props$w.cell.clickable
      },
      // 是否展示右侧箭头并开启点击反馈
      isLink: {
        type: Boolean,
        default: () => props$w.cell.isLink
      },
      // 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)
      required: {
        type: Boolean,
        default: () => props$w.cell.required
      },
      // 右侧的图标箭头
      rightIcon: {
        type: String,
        default: () => props$w.cell.rightIcon
      },
      // 右侧箭头的方向，可选值为：left，up，down
      arrowDirection: {
        type: String,
        default: () => props$w.cell.arrowDirection
      },
      // 左侧图标样式
      iconStyle: {
        type: [Object, String],
        default: () => {
          return props$w.cell.iconStyle;
        }
      },
      // 右侧箭头图标的样式
      rightIconStyle: {
        type: [Object, String],
        default: () => {
          return props$w.cell.rightIconStyle;
        }
      },
      // 标题的样式
      titleStyle: {
        type: [Object, String],
        default: () => {
          return props$w.cell.titleStyle;
        }
      },
      // 单位元的大小，可选值为large
      size: {
        type: String,
        default: () => props$w.cell.size
      },
      // 点击cell是否阻止事件传播
      stop: {
        type: Boolean,
        default: () => props$w.cell.stop
      },
      // 标识符，cell被点击时返回
      name: {
        type: [Number, String],
        default: () => props$w.cell.name
      }
    }
  });
  const _sfc_main$v = {
    name: "u-cell",
    data() {
      return {};
    },
    mixins: [mpMixin, mixin, props$c],
    computed: {
      titleTextStyle() {
        return addStyle(this.titleStyle);
      }
    },
    emits: ["click"],
    methods: {
      addStyle,
      testEmpty: test.empty,
      // 点击cell
      clickHandler(e2) {
        if (this.disabled)
          return;
        this.$emit("click", {
          name: this.name
        });
        this.openPage();
        this.stop && this.preventEvent(e2);
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-cell", [_ctx.customClass]]),
      style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)]),
      "hover-class": !_ctx.disabled && (_ctx.clickable || _ctx.isLink) ? "u-cell--clickable" : "",
      "hover-stay-time": 250,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-cell__body", [_ctx.center && "u-cell--center", _ctx.size === "large" && "u-cell__body--large"]])
        },
        [
          vue.createElementVNode("view", { class: "u-cell__body__content" }, [
            _ctx.$slots.icon || _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "u-cell__left-icon-wrap"
            }, [
              _ctx.$slots.icon ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 1,
                name: _ctx.icon,
                "custom-style": _ctx.iconStyle,
                size: _ctx.size === "large" ? 22 : 18
              }, null, 8, ["name", "custom-style", "size"]))
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "u-cell__title" }, [
              vue.createCommentVNode(" 将slot与默认内容用if/else分开主要是因为微信小程序不支持slot嵌套传递，这样才能解决collapse组件的slot不失效问题，label暂时未用到。 "),
              _ctx.$slots.title || !_ctx.title ? vue.renderSlot(_ctx.$slots, "title", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 1,
                  class: vue.normalizeClass(["u-cell__title-text", [_ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__title-text--large"]]),
                  style: vue.normalizeStyle([$options.titleTextStyle])
                },
                vue.toDisplayString(_ctx.title),
                7
                /* TEXT, CLASS, STYLE */
              )),
              vue.renderSlot(_ctx.$slots, "label", {}, () => [
                _ctx.label ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["u-cell__label", [_ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__label--large"]])
                  },
                  vue.toDisplayString(_ctx.label),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true)
              ], true)
            ])
          ]),
          vue.renderSlot(_ctx.$slots, "value", {}, () => [
            !$options.testEmpty(_ctx.value) ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass(["u-cell__value", [_ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__value--large"]])
              },
              vue.toDisplayString(_ctx.value),
              3
              /* TEXT, CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ], true),
          _ctx.$slots["right-icon"] || _ctx.isLink ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: vue.normalizeClass(["u-cell__right-icon-wrap", [`u-cell__right-icon-wrap--${_ctx.arrowDirection}`]])
            },
            [
              _ctx.rightIcon && !_ctx.$slots["right-icon"] ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: _ctx.rightIcon,
                "custom-style": _ctx.rightIconStyle,
                color: _ctx.disabled ? "#c8c9cc" : "info",
                size: _ctx.size === "large" ? 18 : 16
              }, null, 8, ["name", "custom-style", "color", "size"])) : vue.renderSlot(_ctx.$slots, "right-icon", { key: 1 }, void 0, true)
            ],
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true),
          _ctx.$slots["righticon"] ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 1,
              class: vue.normalizeClass(["u-cell__right-icon-wrap", [`u-cell__right-icon-wrap--${_ctx.arrowDirection}`]])
            },
            [
              vue.renderSlot(_ctx.$slots, "righticon", {}, void 0, true)
            ],
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ),
      _ctx.border ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$o], ["__scopeId", "data-v-b4243719"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-cell/u-cell.vue"]]);
  const props$b = defineMixin({
    props: {
      // 分组标题
      title: {
        type: String,
        default: () => props$w.cellGroup.title
      },
      // 是否显示外边框
      border: {
        type: Boolean,
        default: () => props$w.cellGroup.border
      }
    }
  });
  const _sfc_main$u = {
    name: "u-cell-group",
    mixins: [mpMixin, mixin, props$b],
    methods: {
      addStyle
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)]),
        class: vue.normalizeClass([[_ctx.customClass], "u-cell-group"])
      },
      [
        _ctx.title ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-cell-group__title"
        }, [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createElementVNode(
              "text",
              { class: "u-cell-group__title__text" },
              vue.toDisplayString(_ctx.title),
              1
              /* TEXT */
            )
          ], true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "u-cell-group__wrapper" }, [
          _ctx.border ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$n], ["__scopeId", "data-v-30c8e4c7"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-cell-group/u-cell-group.vue"]]);
  const props$a = defineMixin({
    props: {
      // 当前选中项的value值
      modelValue: {
        type: [Number, String, Array],
        default: ""
      },
      // 菜单项标题
      title: {
        type: [String, Number],
        default: ""
      },
      // 选项数据，如果传入了默认slot，此参数无效
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      // 是否禁用此菜单项
      disabled: {
        type: Boolean,
        default: false
      },
      // 下拉弹窗的高度
      height: {
        type: [Number, String],
        default: "auto"
      },
      // 点击遮罩是否可以收起弹窗
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      }
    }
  });
  const _sfc_main$t = {
    name: "u-dropdown-item",
    mixins: [mpMixin, mixin, props$a],
    options: {
      styleIsolation: "shared"
    },
    data() {
      return {
        active: false,
        // 当前项是否处于展开状态
        activeColor: "#2979ff",
        // 激活时左边文字和右边对勾图标的颜色
        inactiveColor: "#606266"
        // 未激活时左边文字和右边对勾图标的颜色
      };
    },
    computed: {
      // 监听props是否发生了变化，有些值需要传递给父组件u-dropdown，无法双向绑定
      propsChange() {
        return `${this.title}-${this.disabled}`;
      }
    },
    watch: {
      propsChange(n2) {
        if (this.parent)
          this.parent.init();
      }
    },
    created() {
      this.parent = false;
    },
    emits: ["update:modelValue", "change"],
    methods: {
      addUnit,
      init() {
        let parent = $parent.call(this, "u-dropdown");
        if (parent) {
          this.parent = parent;
          this.activeColor = parent.activeColor;
          this.inactiveColor = parent.inactiveColor;
          let exist = parent.children.find((val) => {
            return this === val;
          });
          if (!exist)
            parent.children.push(this);
          if (parent.children.length == 1)
            this.active = true;
          parent.menuList.push({
            title: this.title,
            disabled: this.disabled
          });
        }
      },
      // cell被点击
      cellClick(value2) {
        this.$emit("update:modelValue", value2);
        this.parent.close();
        this.$emit("change", value2);
      }
    },
    mounted() {
      this.init();
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_1$b);
    const _component_up_cell = resolveEasycom(vue.resolveDynamicComponent("up-cell"), __easycom_1$1);
    const _component_up_cell_group = resolveEasycom(vue.resolveDynamicComponent("up-cell-group"), __easycom_2$2);
    return $data.active ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: "u-dropdown-item",
        onTouchmove: vue.withModifiers(() => {
        }, ["stop", "prevent"]),
        onClick: vue.withModifiers(() => {
        }, ["stop", "prevent"])
      },
      [
        !_ctx.$slots.default && !_ctx.$slots.$default ? (vue.openBlock(), vue.createElementBlock(
          "scroll-view",
          {
            key: 0,
            class: "u-dropdown-item__scroll",
            "scroll-y": "true",
            style: vue.normalizeStyle({
              height: $options.addUnit(_ctx.height)
            })
          },
          [
            vue.createElementVNode("view", { class: "u-dropdown-item__options" }, [
              vue.createVNode(_component_up_cell_group, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(_ctx.options, (item, index2) => {
                      return vue.openBlock(), vue.createBlock(_component_up_cell, {
                        onClick: ($event) => $options.cellClick(item.value),
                        arrow: false,
                        title: item.label,
                        key: index2,
                        "title-style": {
                          color: _ctx.modelValue == item.value ? $data.activeColor : $data.inactiveColor
                        }
                      }, {
                        default: vue.withCtx(() => [
                          _ctx.modelValue == item.value ? (vue.openBlock(), vue.createBlock(_component_up_icon, {
                            key: 0,
                            name: "checkbox-mark",
                            color: $data.activeColor,
                            size: "32"
                          }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onClick", "title", "title-style"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ],
          4
          /* STYLE */
        )) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)
      ],
      32
      /* NEED_HYDRATION */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$m], ["__scopeId", "data-v-243060d4"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-dropdown-item/u-dropdown-item.vue"]]);
  const props$9 = defineMixin({
    props: {
      // 菜单标题和选项的激活态颜色
      activeColor: {
        type: String,
        default: "#2979ff"
      },
      // 菜单标题和选项的未激活态颜色
      inactiveColor: {
        type: String,
        default: "#606266"
      },
      // 点击遮罩是否关闭菜单
      closeOnClickMask: {
        type: Boolean,
        default: true
      },
      // 点击当前激活项标题是否关闭菜单
      closeOnClickSelf: {
        type: Boolean,
        default: true
      },
      // 过渡时间
      duration: {
        type: [Number, String],
        default: 300
      },
      // 标题菜单的高度
      height: {
        type: [Number, String],
        default: 40
      },
      // 是否显示下边框
      borderBottom: {
        type: Boolean,
        default: false
      },
      // 标题的字体大小
      titleSize: {
        type: [Number, String],
        default: 14
      },
      // 下拉出来的内容部分的圆角值
      borderRadius: {
        type: [Number, String],
        default: 0
      },
      // 菜单右侧的icon图标
      menuIcon: {
        type: String,
        default: "arrow-down"
      },
      // 菜单右侧图标的大小
      menuIconSize: {
        type: [Number, String],
        default: 14
      }
    }
  });
  const _sfc_main$s = {
    name: "u-dropdown",
    mixins: [mpMixin, mixin, props$9],
    data() {
      return {
        showDropdown: true,
        // 是否打开下来菜单,
        menuList: [],
        // 显示的菜单
        active: false,
        // 下拉菜单的状态
        // 当前是第几个菜单处于激活状态，小程序中此处不能写成false或者""，否则后续将current赋值为0，
        // 无能的TX没有使用===而是使用==判断，导致程序认为前后二者没有变化，从而不会触发视图更新
        current: 99999,
        // 外层内容的样式，初始时处于底层，且透明
        contentStyle: {
          zIndex: -1,
          opacity: 0
        },
        // 让某个菜单保持高亮的状态
        highlightIndex: 99999,
        contentHeight: 0
      };
    },
    computed: {
      // 下拉出来部分的样式
      popupStyle() {
        let style = {};
        style.transform = `translateY(${this.active ? 0 : "-100%"})`;
        style["transition-duration"] = this.duration / 1e3 + "s";
        style.borderRadius = `0 0 ${addUnit(this.borderRadius)} ${addUnit(this.borderRadius)}`;
        return style;
      }
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.getContentHeight();
    },
    emits: ["open", "close"],
    methods: {
      addUnit,
      init() {
        this.menuList = [];
        this.children.map((child) => {
          child.init();
        });
      },
      // 点击菜单
      menuClick(index2) {
        if (this.menuList[index2].disabled)
          return;
        if (index2 === this.current && this.closeOnClickSelf) {
          this.close();
          setTimeout(() => {
            this.children[index2].active = false;
          }, this.duration);
          return;
        }
        this.open(index2);
      },
      // 打开下拉菜单
      open(index2) {
        if (this.contentHeight < 1)
          this.getContentHeight();
        this.contentStyle = {
          zIndex: 11
        };
        this.active = true;
        this.current = index2;
        this.children.map((val, idx) => {
          val.active = index2 == idx ? true : false;
        });
        this.$emit("open", this.current);
      },
      // 设置下拉菜单处于收起状态
      close() {
        this.$emit("close", this.current);
        this.active = false;
        this.current = 99999;
        this.contentStyle = {
          zIndex: -1,
          opacity: 0
        };
      },
      // 点击遮罩
      maskClick() {
        if (!this.closeOnClickMask)
          return;
        this.close();
      },
      // 外部手动设置某个菜单高亮
      highlight(index2 = void 0) {
        this.highlightIndex = index2 !== void 0 ? index2 : 99999;
      },
      // 获取下拉菜单内容的高度
      getContentHeight() {
        let windowHeight = sys().windowHeight;
        this.$uGetRect(".u-dropdown__menu").then((res) => {
          this.contentHeight = windowHeight - res.bottom;
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-dropdown" }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-dropdown__menu", {
            "u-border-bottom": _ctx.borderBottom
          }]),
          style: vue.normalizeStyle({
            height: $options.addUnit(_ctx.height)
          })
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.menuList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "u-dropdown__menu__item",
                key: index2,
                onClick: vue.withModifiers(($event) => $options.menuClick(index2), ["stop"])
              }, [
                vue.createElementVNode("view", { class: "u-flex u-flex-row" }, [
                  vue.createElementVNode(
                    "text",
                    {
                      class: "u-dropdown__menu__item__text",
                      style: vue.normalizeStyle({
                        color: item.disabled ? "#c0c4cc" : index2 === $data.current || $data.highlightIndex == index2 ? _ctx.activeColor : _ctx.inactiveColor,
                        fontSize: $options.addUnit(_ctx.titleSize)
                      })
                    },
                    vue.toDisplayString(item.title),
                    5
                    /* TEXT, STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["u-dropdown__menu__item__arrow", {
                        "u-dropdown__menu__item__arrow--rotate": index2 === $data.current
                      }])
                    },
                    [
                      vue.createVNode(_component_u_icon, {
                        "custom-style": { display: "flex" },
                        name: _ctx.menuIcon,
                        size: $options.addUnit(_ctx.menuIconSize),
                        color: index2 === $data.current || $data.highlightIndex == index2 ? _ctx.activeColor : "#c0c4cc"
                      }, null, 8, ["name", "size", "color"])
                    ],
                    2
                    /* CLASS */
                  )
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        6
        /* CLASS, STYLE */
      ),
      vue.createElementVNode(
        "view",
        {
          class: "u-dropdown__content",
          style: vue.normalizeStyle([$data.contentStyle, {
            transition: `opacity ${_ctx.duration / 1e3}s linear`,
            top: $options.addUnit(_ctx.height),
            height: $data.contentHeight + "px"
          }]),
          onClick: _cache[1] || (_cache[1] = (...args) => $options.maskClick && $options.maskClick(...args)),
          onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers(() => {
          }, ["stop", "prevent"]))
        },
        [
          vue.createElementVNode(
            "view",
            {
              onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
              }, ["stop", "prevent"])),
              class: "u-dropdown__content__popup",
              style: vue.normalizeStyle([$options.popupStyle])
            },
            [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode("view", { class: "u-dropdown__content__mask" })
        ],
        36
        /* STYLE, NEED_HYDRATION */
      )
    ]);
  }
  const __easycom_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$l], ["__scopeId", "data-v-d45d1d94"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-dropdown/u-dropdown.vue"]]);
  const easycom = {
    autoscan: true,
    custom: {
      "^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue"
    }
  };
  const pages = [
    {
      path: "pages/home/index",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/user/register/index",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/user/login/index",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/tree/index",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/career/index",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/career/detail",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/plan/index",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/plan/addPlan",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/plan/allPlan",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/news/index",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/news/detail",
      style: {
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/analyze/index",
      style: {
        navigationStyle: "custom"
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#F8F8F8",
    backgroundColor: "#F8F8F8"
  };
  const uniIdRouter = {};
  const e = {
    easycom,
    pages,
    globalStyle,
    uniIdRouter
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t$1(e2) {
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
      var n3 = Object.create || /* @__PURE__ */ function() {
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
  }), r = s, i = (n(function(e2, t2) {
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
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], A2 = e4[t4 + 14], C2 = e4[t4 + 15], P2 = i3[0], T2 = i3[1], x2 = i3[2], O2 = i3[3];
        P2 = u2(P2, T2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, P2, T2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, P2, T2, p2, 17, a2[2]), T2 = u2(T2, x2, O2, P2, f2, 22, a2[3]), P2 = u2(P2, T2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, P2, T2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, P2, T2, y2, 17, a2[6]), T2 = u2(T2, x2, O2, P2, _2, 22, a2[7]), P2 = u2(P2, T2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, P2, T2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, P2, T2, I2, 17, a2[10]), T2 = u2(T2, x2, O2, P2, S2, 22, a2[11]), P2 = u2(P2, T2, x2, O2, b2, 7, a2[12]), O2 = u2(O2, P2, T2, x2, k2, 12, a2[13]), x2 = u2(x2, O2, P2, T2, A2, 17, a2[14]), P2 = h2(P2, T2 = u2(T2, x2, O2, P2, C2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = h2(O2, P2, T2, x2, y2, 9, a2[17]), x2 = h2(x2, O2, P2, T2, S2, 14, a2[18]), T2 = h2(T2, x2, O2, P2, o3, 20, a2[19]), P2 = h2(P2, T2, x2, O2, m2, 5, a2[20]), O2 = h2(O2, P2, T2, x2, I2, 9, a2[21]), x2 = h2(x2, O2, P2, T2, C2, 14, a2[22]), T2 = h2(T2, x2, O2, P2, g2, 20, a2[23]), P2 = h2(P2, T2, x2, O2, v2, 5, a2[24]), O2 = h2(O2, P2, T2, x2, A2, 9, a2[25]), x2 = h2(x2, O2, P2, T2, f2, 14, a2[26]), T2 = h2(T2, x2, O2, P2, w2, 20, a2[27]), P2 = h2(P2, T2, x2, O2, k2, 5, a2[28]), O2 = h2(O2, P2, T2, x2, p2, 9, a2[29]), x2 = h2(x2, O2, P2, T2, _2, 14, a2[30]), P2 = l2(P2, T2 = h2(T2, x2, O2, P2, b2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = l2(O2, P2, T2, x2, w2, 11, a2[33]), x2 = l2(x2, O2, P2, T2, S2, 16, a2[34]), T2 = l2(T2, x2, O2, P2, A2, 23, a2[35]), P2 = l2(P2, T2, x2, O2, c3, 4, a2[36]), O2 = l2(O2, P2, T2, x2, g2, 11, a2[37]), x2 = l2(x2, O2, P2, T2, _2, 16, a2[38]), T2 = l2(T2, x2, O2, P2, I2, 23, a2[39]), P2 = l2(P2, T2, x2, O2, k2, 4, a2[40]), O2 = l2(O2, P2, T2, x2, o3, 11, a2[41]), x2 = l2(x2, O2, P2, T2, f2, 16, a2[42]), T2 = l2(T2, x2, O2, P2, y2, 23, a2[43]), P2 = l2(P2, T2, x2, O2, v2, 4, a2[44]), O2 = l2(O2, P2, T2, x2, b2, 11, a2[45]), x2 = l2(x2, O2, P2, T2, C2, 16, a2[46]), P2 = d2(P2, T2 = l2(T2, x2, O2, P2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = d2(O2, P2, T2, x2, _2, 10, a2[49]), x2 = d2(x2, O2, P2, T2, A2, 15, a2[50]), T2 = d2(T2, x2, O2, P2, m2, 21, a2[51]), P2 = d2(P2, T2, x2, O2, b2, 6, a2[52]), O2 = d2(O2, P2, T2, x2, f2, 10, a2[53]), x2 = d2(x2, O2, P2, T2, I2, 15, a2[54]), T2 = d2(T2, x2, O2, P2, c3, 21, a2[55]), P2 = d2(P2, T2, x2, O2, w2, 6, a2[56]), O2 = d2(O2, P2, T2, x2, C2, 10, a2[57]), x2 = d2(x2, O2, P2, T2, y2, 15, a2[58]), T2 = d2(T2, x2, O2, P2, k2, 21, a2[59]), P2 = d2(P2, T2, x2, O2, g2, 6, a2[60]), O2 = d2(O2, P2, T2, x2, S2, 10, a2[61]), x2 = d2(x2, O2, P2, T2, p2, 15, a2[62]), T2 = d2(T2, x2, O2, P2, v2, 21, a2[63]), i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + T2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
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
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
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
  const S$1 = true, b = "app", A = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default), C = b, P = I(""), T = I("[]") || [];
  let O = "";
  try {
    O = "__UNI__79FB2D9";
  } catch (e2) {
  }
  let E = {};
  function L$1(e2, t2 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t2), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const R = ["invoke", "success", "fail", "complete"], U$1 = L$1("_globalUniCloudInterceptor");
  function N(e2, t2) {
    U$1[e2] || (U$1[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U$1[e3][t3];
        s2 || (s2 = U$1[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function D$1(e2, t2) {
    U$1[e2] || (U$1[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U$1[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete U$1[e2];
  }
  function M$1(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t2) {
    return U$1[e2] && U$1[e2][t2] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  const K = L$1("_globalUniCloudListener"), j = "response", $ = "needLogin", B = "refreshToken", W$1 = "clientdb", H$1 = "cloudfunction", z = "cloudobject";
  function J(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function V(e2, t2) {
    const n2 = J(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function G(e2, t2) {
    const n2 = J(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y$1(e2, t2) {
    const n2 = J(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let Q$1, X = false;
  function Z() {
    return Q$1 || (Q$1 = new Promise((e2) => {
      X && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Q$1);
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
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
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
  let he = {};
  function le() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return { ...he, ...ae, locale: e2, LOCALE: e2 };
    const t2 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (const e3 in t2)
      Object.hasOwnProperty.call(t2, e3) && -1 === o2.indexOf(e3) && delete t2[e3];
    return ae = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...ue(), ...t2 }, { ...he, ...ae, locale: e2, LOCALE: e2 };
  }
  var de = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new te({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var pe = class {
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
      return de.wrappedRequest(e2, this.adapter.request);
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
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = de.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
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
      if ("string" !== f(t2))
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
        _2.callback = de.toBase64(e3);
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
  var fe = { init(e2) {
    const t2 = new pe(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const ge = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var me;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(me || (me = {}));
  var ye = function() {
  }, _e = n(function(e2, t2) {
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
  }), we = _e, ve = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const Ie = () => {
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
  function Se(e2) {
    return void 0 === e2;
  }
  function be(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var ke;
  function Ae(e2) {
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
  }(ke || (ke = {}));
  const Ce = { adapter: null, runtime: void 0 }, Pe = ["anonymousUuidKey"];
  class Te extends ye {
    constructor() {
      super(), Ce.adapter.root.tcbObject || (Ce.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ce.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ce.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ce.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ce.adapter.root.tcbObject;
    }
  }
  function xe(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t2.sessionStorage || new Te();
    }
  }
  class Oe {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ce.adapter.primaryStorage || e2.persistence, this._storage = xe(this._persistence, Ce.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = xe(e2, Ce.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Se(r2) || be(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
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
  const Ee = {}, Le = {};
  function Re(e2) {
    return Ee[e2];
  }
  class Ue {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ne extends Ue {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const De = new class {
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
      if (e2 instanceof Ne)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Ue(e2, t2 || {}) : e2;
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
  function Me(e2, t2) {
    De.on(e2, t2);
  }
  function qe(e2, t2 = {}) {
    De.fire(e2, t2);
  }
  function Fe(e2, t2) {
    De.off(e2, t2);
  }
  const Ke = "loginStateChanged", je = "loginStateExpire", $e = "loginTypeChanged", Be = "anonymousConverted", We = "refreshAccessToken";
  var He;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(He || (He = {}));
  const ze = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Je = { "X-SDK-Version": "1.3.5" };
  function Ve(e2, t2, n2) {
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
    return { data: { seqId: e2 }, headers: { ...Je, "x-seqid": e2 } };
  }
  class Ye {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ce.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Re(this.config.env), this._localCache = (t2 = this.config.env, Le[t2]), Ve(this._reqClass, "post", [Ge]), Ve(this._reqClass, "upload", [Ge]), Ve(this._reqClass, "download", [Ge]);
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
          if (this._cache.getStore(s2) === He.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          qe(je), this._cache.removeStore(n2);
        }
        throw new te({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return qe(We), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
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
      if (-1 === ze.indexOf(e2)) {
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
      }(ge, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new te({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}) {
      const n2 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === ze.indexOf(e2)) {
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
  const Qe = {};
  function Xe(e2) {
    return Qe[e2];
  }
  class Ze {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env);
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
  class et {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Re(this._envId), this._request = Xe(this._envId), this.setUserInfo();
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
  class tt {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Re(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new et(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === He.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === He.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === He.WECHAT || this.loginType === He.WECHAT_OPEN || this.loginType === He.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class nt extends Ze {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), qe(Ke), qe($e, { env: this.config.env, loginType: He.ANONYMOUS, persistence: "local" });
        const e3 = new tt(this.config.env);
        return await e3.user.refresh(), e3;
      }
      throw new te({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), qe(Be, { env: this.config.env }), qe($e, { loginType: He.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new te({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, He.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class st extends Ze {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), qe(Ke), qe($e, { env: this.config.env, loginType: He.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new tt(this.config.env);
      throw new te({ message: "自定义登录失败" });
    }
  }
  class rt extends Ze {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), qe(Ke), qe($e, { env: this.config.env, loginType: He.EMAIL, persistence: this.config.persistence }), new tt(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new te({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class it extends Ze {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: He.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), qe(Ke), qe($e, { env: this.config.env, loginType: He.USERNAME, persistence: this.config.persistence }), new tt(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new te({ message: "用户名密码登录失败" });
    }
  }
  class ot {
    constructor(e2) {
      this.config = e2, this._cache = Re(e2.env), this._request = Xe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Me($e, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new nt(this.config);
    }
    customAuthProvider() {
      return new st(this.config);
    }
    emailAuthProvider() {
      return new rt(this.config);
    }
    usernameAuthProvider() {
      return new it(this.config);
    }
    async signInAnonymously() {
      return new nt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new rt(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new it(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new nt(this.config)), Me(Be, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === He.ANONYMOUS)
        throw new te({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), qe(Ke), qe($e, { env: this.config.env, loginType: He.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      Me(Ke, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      Me(je, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      Me(We, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      Me(Be, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      Me($e, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new tt(this.config.env) : null;
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
      return new st(this.config).signIn(e2);
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
  const at = function(e2, t2) {
    t2 = t2 || Ie();
    const n2 = Xe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
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
  }, ct = function(e2, t2) {
    t2 = t2 || Ie();
    const n2 = Xe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ut = function({ fileList: e2 }, t2) {
    if (t2 = t2 || Ie(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return Xe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ht = function({ fileList: e2 }, t2) {
    t2 = t2 || Ie(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Xe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, lt = async function({ fileID: e2 }, t2) {
    const n2 = (await ht.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = Xe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, dt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || Ie();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Xe(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
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
  }, pt = { timeout: 15e3, persistence: "session" }, ft = {};
  class gt {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ce.adapter || (this.requestClient = new Ce.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...pt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new gt(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ce.adapter.primaryStorage || pt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Ee[t3] = new Oe(e3), Le[t3] = new Oe({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, Qe[n2.env] = new Ye(n2), this.authObj = new ot(this.config), this.authObj;
    }
    on(e2, t2) {
      return Me.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return Fe.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return dt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return ut.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ht.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return at.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return ct.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      ft[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = ft[e2];
      if (!n2)
        throw new te({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = Ae(e2) || {};
      t2 && (Ce.adapter = t2), n2 && (Ce.runtime = n2);
    }
  }
  var mt = new gt();
  function yt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class _t {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        ne.request({ url: yt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: yt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
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
  const wt = { setItem(e2, t2) {
    ne.setStorageSync(e2, t2);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var vt = { genAdapter: function() {
    return { root: {}, reqClass: _t, localStorage: wt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  mt.useAdapters(vt);
  const It = mt, St = It.init;
  It.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = St.call(this, e2);
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
  var bt = It;
  var kt = class extends pe {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret);
      const r2 = le();
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
  var At = { init(e2) {
    const t2 = new kt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, Ct = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Pt() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t2 = 16 * Math.random() | 0;
      return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
    });
  }
  function Tt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = Date.now(), u2 = Pt(), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = we(e3.body).toString(Ct), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = we(r3).toString(Ct), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = ve(o3, e3.secretKey).toString(Ct);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function xt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {} }) {
    return new Promise((r2, i2) => {
      ne.request({ url: e2, method: n2, data: "object" == typeof t2 ? JSON.stringify(t2) : t2, header: s2, dataType: "json", complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return i2(new te({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        r2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Ot(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Tt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return xt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function Et(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function Lt(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  class Rt {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t2 = {}) {
      const n2 = `/ws/function/${e2}`, s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Pt(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), `host:${s2}`].join("\n"), o2 = ["HMAC-SHA256", we(i2).toString(Ct)].join("\n"), a2 = ve(o2, this.config.secretKey).toString(Ct), c2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
      return `${this.config.wsEndpoint}${n2}?${c2}&signature=${a2}`;
    }
  }
  var Ut = class {
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
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn`, wsEndpoint: e2.wsEndpoint || `wss://${e2.spaceId}.api-hz.cloudbasefunction.cn` }), this._websocket = new Rt(this.config);
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2, async: r2 = false } = e3, i2 = "POST", o2 = { "x-to-function-name": n2 };
        r2 && (o2["x-function-invoke-type"] = "async");
        const { url: a2, headers: c2 } = Tt("/functions/invokeFunction", { functionName: n2, data: s2, method: i2, headers: o2, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return xt({ url: a2, data: s2, method: i2, headers: c2 }).then((e4) => {
          let t3 = 0;
          if (r2) {
            const n3 = e4.data || {};
            t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
          }
          if (0 !== t3)
            throw new te({ code: t3, message: e4.errMsg, requestId: e4.requestId });
          return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
        }).catch((e4) => {
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
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await Ot({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList不能为空数组" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList数组长度不能超过50" }));
        const s2 = [];
        for (const t3 of e2) {
          "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList的元素必须是非空的字符串" }));
          const e3 = Et.call(this, t3);
          s2.push({ file_id: e3, expire: 600 });
        }
        Ot({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: Lt.call(this, e4.file_id), tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
    async connectWebSocket(e2) {
      const { name: t2, query: n2 } = e2;
      return ne.connectSocket({ url: this._websocket.signedURL(t2, n2), complete: () => {
      } });
    }
  };
  var Nt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new Ut(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Dt({ data: e2 }) {
    let t2;
    t2 = le();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Mt({ name: e2, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
    return new Promise((t3, n3) => {
      ne.request({ method: "POST", url: o2, data: { name: e2, platform: C, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
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
          case "NETWORK_ERROR":
            console.error(s3 || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
            break;
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
        const s4 = Dt.call(this, { data: t2 });
        ne.request({ method: "POST", url: a2, data: { provider: r2, platform: C, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new te({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
          n4(new te({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const qt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var Ft = /[\\^$.*+?()[\]{}|]/g, Kt = RegExp(Ft.source);
  function jt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Kt.test(s2) ? s2.replace(Ft, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Bt = "request", Wt = "response", Ht = "both";
  const Tn = { code: 2e4, message: "System error" }, xn = { code: 20101, message: "Invalid client" };
  function Ln(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || Tn.code, message: r2 || o2, cause: a2 });
  }
  let Un;
  function Fn({ secretType: e2 } = {}) {
    return e2 === Bt || e2 === Wt || e2 === Ht;
  }
  function Kn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function jn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
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
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), Ln(xn);
  }
  function $n({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Bn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Dt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay" }[this.config.provider], i2 = Fn(n3), o2 = Kn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && $n.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && $n.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = jt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = jt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: qt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && T ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Mt), o2 = Mt) : o2 = n2, o2 = o2.bind(e2), Kn(t3))
        a2 = n2.call(e2, t3);
      else if (Fn(t3)) {
        a2 = new Un({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (jn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new Un({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => ("undefined" != typeof UTSJSONObject && (e3.result = new UTSJSONObject(e3.result)), e3));
    };
  }
  Un = class {
    constructor() {
      throw Ln({ message: `Platform ${C} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const Wn = Symbol("CLIENT_DB_INTERNAL");
  function Hn(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Wn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
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
  function zn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const Jn = ["db.Geo", "db.command", "command.aggregate"];
  function Vn(e2, t2) {
    return Jn.indexOf(`${e2}.${t2}`) > -1;
  }
  function Gn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => Gn(e3));
      case "object":
        return e2._internalType === Wn || Object.keys(e2).forEach((t2) => {
          e2[t2] = Gn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Yn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class Qn {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: Gn(e3.$param) })) };
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
        const t2 = Yn(e2), n2 = Yn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Yn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Yn(e2), n2 = Yn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return Xn({ $method: e2, $param: Gn(Array.from(arguments)) }, t2, t2._database);
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
      if (s2.$db.push({ $method: e2, $param: Gn(t2) }), S$1) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Xn(e2, t2, n2) {
    return Hn(new Qn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Vn(s2, t3) ? Xn({ $method: t3 }, e3, n2) : function() {
        return Xn({ $method: t3, $param: Gn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Zn({ path: e2, method: t2 }) {
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
  function es(e2, t2 = {}) {
    return Hn(new e2(t2), { get: (e3, t3) => Vn("db", t3) ? Xn({ $method: t3 }, null, e3) : function() {
      return Xn({ $method: t3, $param: Gn(Array.from(arguments)) }, null, e3);
    } });
  }
  class ts extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L$1("_globalUniCloudDatabaseCallback")), t2 || (this.auth = zn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, zn(this._dbCallBacks)), this.env = Hn({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = Hn({}, { get: (e3, t3) => Zn({ path: ["Geo"], method: t3 }) }), this.serverDate = Zn({ path: [], method: "serverDate" }), this.RegExp = Zn({ path: [], method: "RegExp" });
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
        return i2._callback("error", [e3]), M$1(q(o2, "fail"), e3).then(() => M$1(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y$1(j, { type: W$1, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M$1(q(o2, "invoke")), u2 = this._uniClient;
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
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y$1(B, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M$1(q(o2, "success"), e4).then(() => M$1(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y$1(j, { type: W$1, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const ns = "token无效，跳转登录页面", ss = "token过期，跳转登录页面", rs = { TOKEN_INVALID_TOKEN_EXPIRED: ss, TOKEN_INVALID_INVALID_CLIENTID: ns, TOKEN_INVALID: ns, TOKEN_INVALID_WRONG_TOKEN: ns, TOKEN_INVALID_ANONYMOUS_USER: ns }, is = { "uni-id-token-expired": ss, "uni-id-check-token-failed": ns, "uni-id-token-not-exist": ns, "uni-id-check-device-feature-failed": ns };
  function os(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function as(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(os(t2, e3.path)) : false === e3.needLogin && s2.push(os(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function cs(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function us() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function hs() {
    return cs(us());
  }
  function ls(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = cs(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const ds = !!e.uniIdRouter;
  const { loginPage: ps, routerNeedLogin: fs, resToLogin: gs, needLoginPage: ms, notNeedLoginPage: ys, loginPageInTabBar: _s } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = as(t2), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = as(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: ls(i2, r2) };
  }();
  if (ms.indexOf(ps) > -1)
    throw new Error(`Login page [${ps}] should not be "needLogin", please check your pages.json`);
  function ws(e2) {
    const t2 = hs();
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
  function vs(e2) {
    const t2 = cs(ws(e2));
    return !(ys.indexOf(t2) > -1) && (ms.indexOf(t2) > -1 || fs.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function Is({ redirect: e2 }) {
    const t2 = cs(e2), n2 = cs(ps);
    return hs() !== n2 && t2 !== n2;
  }
  function Ss({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !Is({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(ps, t2);
    _s ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function bs({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: is[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: is[e4] };
      }
      return n3;
    }();
    if (vs(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (J($).length > 0)
        return setTimeout(() => {
          Y$1($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function ks() {
    !function() {
      const e3 = us(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = bs({ url: e3 });
      t2 || n2 && Ss({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = bs({ url: e3.url });
        return t3 ? e3 : s2 ? (Ss({ api: n2, redirect: ws(e3.url) }), false) : e3;
      } });
    }
  }
  function As() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in is;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in rs;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = J($);
        Z().then(() => {
          const n3 = us();
          if (n3 && Is({ redirect: n3 }))
            return t3.length > 0 ? Y$1($, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (ps && Ss({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function Cs(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        V(j, e4);
      }, e3.offResponse = function(e4) {
        G(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        V($, e4);
      }, e3.offNeedLogin = function(e4) {
        G($, e4);
      }, ds && (L$1("_globalUniCloudStatus").needLoginInit || (L$1("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        ks.call(e3);
      }), gs && As.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        V(B, e4);
      }, e3.offRefreshToken = function(e4) {
        G(B, e4);
      };
    }(e2);
  }
  let Ps;
  const Ts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", xs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Os() {
    const e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(Ps(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  Ps = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !xs.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = Ts.indexOf(e2.charAt(i2++)) << 18 | Ts.indexOf(e2.charAt(i2++)) << 12 | (n2 = Ts.indexOf(e2.charAt(i2++))) << 6 | (s2 = Ts.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Es = n(function(e2, t2) {
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
  }), Ls$1 = t$1(Es);
  const Rs = "manual";
  function Us(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === Rs)
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
  function Ns(e2) {
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
              return await M$1(q(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await M$1(q(t3, "success"), { ...r3, result: i3 }), i3;
            } catch (e4) {
              throw o3 = e4, await M$1(q(t3, "fail"), { ...r3, error: o3 }), o3;
            } finally {
              await M$1(q(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
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
          if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y$1(B, { ...y2 })), g2) {
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
            throw n3.detail = l2.result, Y$1(j, { type: z, content: n3 }), n3;
          }
          return Y$1(j, { type: z, content: l2.result }), l2.result;
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Ds(e2) {
    return L$1("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Ms({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Ds(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${C}\``);
  }
  async function qs(e2) {
    const t2 = Ds(this);
    return t2.initPromise || (t2.initPromise = Ms.call(this, e2).then((e3) => e3).catch((e3) => {
      throw delete t2.initPromise, e3;
    })), t2.initPromise;
  }
  function Fs(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return qs.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Ks(e2) {
    !function(e3) {
      he = e3;
    }(e2);
  }
  function js(e2) {
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
  class $s extends class {
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
      return Promise.all([js("getSystemInfo")(), js("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
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
  async function Bs(e2, t2) {
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
  async function Ws(e2) {
    {
      const { osName: e3, osVersion: t3 } = ce();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e3, t3) {
      let n3;
      for (let s3 = 0; s3 < e3.length; s3++) {
        const r3 = e3[s3];
        if (await Bs(r3, t3)) {
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
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === C.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function Hs(e2) {
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
  const zs = { tcb: bt, tencent: bt, aliyun: fe, private: At, alipay: Nt };
  let Js = new class {
    init(e2) {
      let t2 = {};
      const n2 = zs[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === C;
        const n3 = P;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Ws(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), Hs(t2), Bn(t2), function(e3) {
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
          const n3 = es(ts, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = es(ts, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Os, e3.chooseAndUploadFile = Ls$1.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Us(e3);
        } }), e3.SSEChannel = $s, e3.initSecureNetworkByWeixin = Fs(e3), e3.setCustomClientInfo = Ks, e3.importObject = Ns(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), h2 = i2.then(() => s2 ? Promise.resolve() : M$1(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M$1(q(t3, "success"), e5).then(() => M$1(q(t3, "complete"), e5)).then(() => (r2 && Y$1(j, { type: H$1, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M$1(q(t3, "fail"), e5).then(() => M$1(q(t3, "complete"), e5)).then(() => (Y$1(j, { type: H$1, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y$1(j, { type: H$1, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y$1(j, { type: H$1, content: e5 });
            });
          };
        }(t2[e3], e3)).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = T;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], Js = Js.init(t2), Js._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e3) => {
        Js[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Js, { get mixinDatacom() {
      return Us(Js);
    } }), Cs(Js), Js.addInterceptor = N, Js.removeInterceptor = D$1, Js.interceptObject = F;
  })();
  var Vs = Js;
  const _sfc_main$r = {
    name: "loading1",
    data() {
      return {};
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container loading1" }, [
      vue.createElementVNode("view", { class: "shape shape1" }),
      vue.createElementVNode("view", { class: "shape shape2" }),
      vue.createElementVNode("view", { class: "shape shape3" }),
      vue.createElementVNode("view", { class: "shape shape4" })
    ]);
  }
  const Loading1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$k], ["__scopeId", "data-v-0e645258"], ["__file", "D:/subject-analyze/uni_modules/qiun-data-charts/components/qiun-loading/loading1.vue"]]);
  const _sfc_main$q = {
    name: "loading2",
    data() {
      return {};
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container loading2" }, [
      vue.createElementVNode("view", { class: "shape shape1" }),
      vue.createElementVNode("view", { class: "shape shape2" }),
      vue.createElementVNode("view", { class: "shape shape3" }),
      vue.createElementVNode("view", { class: "shape shape4" })
    ]);
  }
  const Loading2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$j], ["__scopeId", "data-v-3df48dc2"], ["__file", "D:/subject-analyze/uni_modules/qiun-data-charts/components/qiun-loading/loading2.vue"]]);
  const _sfc_main$p = {
    name: "loading3",
    data() {
      return {};
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container loading3" }, [
      vue.createElementVNode("view", { class: "shape shape1" }),
      vue.createElementVNode("view", { class: "shape shape2" }),
      vue.createElementVNode("view", { class: "shape shape3" }),
      vue.createElementVNode("view", { class: "shape shape4" })
    ]);
  }
  const Loading3 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$i], ["__scopeId", "data-v-27a8293c"], ["__file", "D:/subject-analyze/uni_modules/qiun-data-charts/components/qiun-loading/loading3.vue"]]);
  const _sfc_main$o = {
    name: "loading5",
    data() {
      return {};
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container loading5" }, [
      vue.createElementVNode("view", { class: "shape shape1" }),
      vue.createElementVNode("view", { class: "shape shape2" }),
      vue.createElementVNode("view", { class: "shape shape3" }),
      vue.createElementVNode("view", { class: "shape shape4" })
    ]);
  }
  const Loading4 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$h], ["__scopeId", "data-v-2e7deb83"], ["__file", "D:/subject-analyze/uni_modules/qiun-data-charts/components/qiun-loading/loading4.vue"]]);
  const _sfc_main$n = {
    name: "loading6",
    data() {
      return {};
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container loading6" }, [
      vue.createElementVNode("view", { class: "shape shape1" }),
      vue.createElementVNode("view", { class: "shape shape2" }),
      vue.createElementVNode("view", { class: "shape shape3" }),
      vue.createElementVNode("view", { class: "shape shape4" })
    ]);
  }
  const Loading5 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$g], ["__scopeId", "data-v-ef674bbb"], ["__file", "D:/subject-analyze/uni_modules/qiun-data-charts/components/qiun-loading/loading5.vue"]]);
  const _sfc_main$m = {
    components: { Loading1, Loading2, Loading3, Loading4, Loading5 },
    name: "qiun-loading",
    props: {
      loadingType: {
        type: Number,
        default: 2
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Loading1 = vue.resolveComponent("Loading1");
    const _component_Loading2 = vue.resolveComponent("Loading2");
    const _component_Loading3 = vue.resolveComponent("Loading3");
    const _component_Loading4 = vue.resolveComponent("Loading4");
    const _component_Loading5 = vue.resolveComponent("Loading5");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $props.loadingType == 1 ? (vue.openBlock(), vue.createBlock(_component_Loading1, { key: 0 })) : vue.createCommentVNode("v-if", true),
      $props.loadingType == 2 ? (vue.openBlock(), vue.createBlock(_component_Loading2, { key: 1 })) : vue.createCommentVNode("v-if", true),
      $props.loadingType == 3 ? (vue.openBlock(), vue.createBlock(_component_Loading3, { key: 2 })) : vue.createCommentVNode("v-if", true),
      $props.loadingType == 4 ? (vue.openBlock(), vue.createBlock(_component_Loading4, { key: 3 })) : vue.createCommentVNode("v-if", true),
      $props.loadingType == 5 ? (vue.openBlock(), vue.createBlock(_component_Loading5, { key: 4 })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$f], ["__file", "D:/subject-analyze/uni_modules/qiun-data-charts/components/qiun-loading/qiun-loading.vue"]]);
  const _sfc_main$l = {
    name: "qiun-error",
    props: {
      errorMessage: {
        type: String,
        default: null
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "chartsview" }, [
      vue.createElementVNode("view", { class: "charts-error" }),
      vue.createElementVNode(
        "view",
        { class: "charts-font" },
        vue.toDisplayString($props.errorMessage == null ? "请点击重试" : $props.errorMessage),
        1
        /* TEXT */
      )
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$e], ["__scopeId", "data-v-a99d579b"], ["__file", "D:/subject-analyze/uni_modules/qiun-data-charts/components/qiun-error/qiun-error.vue"]]);
  const color$1 = ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"];
  const formatDateTime = (timeStamp, returnType) => {
    var date3 = /* @__PURE__ */ new Date();
    date3.setTime(timeStamp * 1e3);
    var y2 = date3.getFullYear();
    var m2 = date3.getMonth() + 1;
    m2 = m2 < 10 ? "0" + m2 : m2;
    var d2 = date3.getDate();
    d2 = d2 < 10 ? "0" + d2 : d2;
    var h2 = date3.getHours();
    h2 = h2 < 10 ? "0" + h2 : h2;
    var minute = date3.getMinutes();
    var second = date3.getSeconds();
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    if (returnType == "full") {
      return y2 + "-" + m2 + "-" + d2 + " " + h2 + ":" + minute + ":" + second;
    }
    if (returnType == "y-m-d") {
      return y2 + "-" + m2 + "-" + d2;
    }
    if (returnType == "h:m") {
      return h2 + ":" + minute;
    }
    if (returnType == "h:m:s") {
      return h2 + ":" + minute + ":" + second;
    }
    return [y2, m2, d2, h2, minute, second];
  };
  const cfu = {
    //demotype为自定义图表类型，一般不需要自定义图表类型，只需要改根节点上对应的类型即可
    "type": ["pie", "ring", "rose", "word", "funnel", "map", "arcbar", "line", "column", "mount", "bar", "area", "radar", "gauge", "candle", "mix", "tline", "tarea", "scatter", "bubble", "demotype"],
    "range": ["饼状图", "圆环图", "玫瑰图", "词云图", "漏斗图", "地图", "圆弧进度条", "折线图", "柱状图", "山峰图", "条状图", "区域图", "雷达图", "仪表盘", "K线图", "混合图", "时间轴折线", "时间轴区域", "散点图", "气泡图", "自定义类型"],
    //增加自定义图表类型，如果需要categories，请在这里加入您的图表类型，例如最后的"demotype"
    //自定义类型时需要注意"tline","tarea","scatter","bubble"等时间轴（矢量x轴）类图表，没有categories，不需要加入categories
    "categories": ["line", "column", "mount", "bar", "area", "radar", "gauge", "candle", "mix", "demotype"],
    //instance为实例变量承载属性，不要删除
    "instance": {},
    //option为opts及eopts承载属性，不要删除
    "option": {},
    //下面是自定义format配置，因除H5端外的其他端无法通过props传递函数，只能通过此属性对应下标的方式来替换
    "formatter": {
      "yAxisDemo1": function(val, index2, opts) {
        return val + "元";
      },
      "yAxisDemo2": function(val, index2, opts) {
        return val.toFixed(2);
      },
      "xAxisDemo1": function(val, index2, opts) {
        return val + "年";
      },
      "xAxisDemo2": function(val, index2, opts) {
        return formatDateTime(val, "h:m");
      },
      "seriesDemo1": function(val, index2, series, opts) {
        return val + "元";
      },
      "tooltipDemo1": function(item, category, index2, opts) {
        if (index2 == 0) {
          return "随便用" + item.data + "年";
        } else {
          return "其他我没改" + item.data + "天";
        }
      },
      "pieDemo": function(val, index2, series, opts) {
        if (index2 !== void 0) {
          return series[index2].name + "：" + series[index2].data + "元";
        }
      }
    },
    //这里演示了自定义您的图表类型的option，可以随意命名，之后在组件上 type="demotype" 后，组件会调用这个花括号里的option，如果组件上还存在opts参数，会将demotype与opts中option合并后渲染图表。
    "demotype": {
      //我这里把曲线图当做了自定义图表类型，您可以根据需要随意指定类型或配置
      "type": "line",
      "color": color$1,
      "padding": [15, 10, 0, 15],
      "xAxis": {
        "disableGrid": true
      },
      "yAxis": {
        "gridType": "dash",
        "dashLength": 2
      },
      "legend": {},
      "extra": {
        "line": {
          "type": "curve",
          "width": 2
        }
      }
    },
    //下面是自定义配置，请添加项目所需的通用配置
    "pie": {
      "type": "pie",
      "color": color$1,
      "padding": [5, 5, 5, 5],
      "extra": {
        "pie": {
          "activeOpacity": 0.5,
          "activeRadius": 10,
          "offsetAngle": 0,
          "labelWidth": 15,
          "border": true,
          "borderWidth": 3,
          "borderColor": "#FFFFFF"
        }
      }
    },
    "ring": {
      "type": "ring",
      "color": color$1,
      "padding": [5, 5, 5, 5],
      "rotate": false,
      "dataLabel": true,
      "legend": {
        "show": true,
        "position": "right",
        "lineHeight": 25
      },
      "title": {
        "name": "收益率",
        "fontSize": 15,
        "color": "#666666"
      },
      "subtitle": {
        "name": "70%",
        "fontSize": 25,
        "color": "#7cb5ec"
      },
      "extra": {
        "ring": {
          "ringWidth": 30,
          "activeOpacity": 0.5,
          "activeRadius": 10,
          "offsetAngle": 0,
          "labelWidth": 15,
          "border": true,
          "borderWidth": 3,
          "borderColor": "#FFFFFF"
        }
      }
    },
    "rose": {
      "type": "rose",
      "color": color$1,
      "padding": [5, 5, 5, 5],
      "legend": {
        "show": true,
        "position": "left",
        "lineHeight": 25
      },
      "extra": {
        "rose": {
          "type": "area",
          "minRadius": 50,
          "activeOpacity": 0.5,
          "activeRadius": 10,
          "offsetAngle": 0,
          "labelWidth": 15,
          "border": false,
          "borderWidth": 2,
          "borderColor": "#FFFFFF"
        }
      }
    },
    "word": {
      "type": "word",
      "color": color$1,
      "extra": {
        "word": {
          "type": "normal",
          "autoColors": false
        }
      }
    },
    "funnel": {
      "type": "funnel",
      "color": color$1,
      "padding": [15, 15, 0, 15],
      "extra": {
        "funnel": {
          "activeOpacity": 0.3,
          "activeWidth": 10,
          "border": true,
          "borderWidth": 2,
          "borderColor": "#FFFFFF",
          "fillOpacity": 1,
          "labelAlign": "right"
        }
      }
    },
    "map": {
      "type": "map",
      "color": color$1,
      "padding": [0, 0, 0, 0],
      "dataLabel": true,
      "extra": {
        "map": {
          "border": true,
          "borderWidth": 1,
          "borderColor": "#666666",
          "fillOpacity": 0.6,
          "activeBorderColor": "#F04864",
          "activeFillColor": "#FACC14",
          "activeFillOpacity": 1
        }
      }
    },
    "arcbar": {
      "type": "arcbar",
      "color": color$1,
      "title": {
        "name": "百分比",
        "fontSize": 25,
        "color": "#00FF00"
      },
      "subtitle": {
        "name": "默认标题",
        "fontSize": 15,
        "color": "#666666"
      },
      "extra": {
        "arcbar": {
          "type": "default",
          "width": 12,
          "backgroundColor": "#E9E9E9",
          "startAngle": 0.75,
          "endAngle": 0.25,
          "gap": 2
        }
      }
    },
    "line": {
      "type": "line",
      "color": color$1,
      "padding": [15, 10, 0, 15],
      "xAxis": {
        "disableGrid": true
      },
      "yAxis": {
        "gridType": "dash",
        "dashLength": 2
      },
      "legend": {},
      "extra": {
        "line": {
          "type": "straight",
          "width": 2,
          "activeType": "hollow"
        }
      }
    },
    "tline": {
      "type": "line",
      "color": color$1,
      "padding": [15, 10, 0, 15],
      "xAxis": {
        "disableGrid": false,
        "boundaryGap": "justify"
      },
      "yAxis": {
        "gridType": "dash",
        "dashLength": 2,
        "data": [
          {
            "min": 0,
            "max": 80
          }
        ]
      },
      "legend": {},
      "extra": {
        "line": {
          "type": "curve",
          "width": 2,
          "activeType": "hollow"
        }
      }
    },
    "tarea": {
      "type": "area",
      "color": color$1,
      "padding": [15, 10, 0, 15],
      "xAxis": {
        "disableGrid": true,
        "boundaryGap": "justify"
      },
      "yAxis": {
        "gridType": "dash",
        "dashLength": 2,
        "data": [
          {
            "min": 0,
            "max": 80
          }
        ]
      },
      "legend": {},
      "extra": {
        "area": {
          "type": "curve",
          "opacity": 0.2,
          "addLine": true,
          "width": 2,
          "gradient": true,
          "activeType": "hollow"
        }
      }
    },
    "column": {
      "type": "column",
      "color": color$1,
      "padding": [15, 15, 0, 5],
      "xAxis": {
        "disableGrid": true
      },
      "yAxis": {
        "data": [{ "min": 0 }]
      },
      "legend": {},
      "extra": {
        "column": {
          "type": "group",
          "width": 30,
          "activeBgColor": "#000000",
          "activeBgOpacity": 0.08
        }
      }
    },
    "mount": {
      "type": "mount",
      "color": color$1,
      "padding": [15, 15, 0, 5],
      "xAxis": {
        "disableGrid": true
      },
      "yAxis": {
        "data": [{ "min": 0 }]
      },
      "legend": {},
      "extra": {
        "mount": {
          "type": "mount",
          "widthRatio": 1.5
        }
      }
    },
    "bar": {
      "type": "bar",
      "color": color$1,
      "padding": [15, 30, 0, 5],
      "xAxis": {
        "boundaryGap": "justify",
        "disableGrid": false,
        "min": 0,
        "axisLine": false
      },
      "yAxis": {},
      "legend": {},
      "extra": {
        "bar": {
          "type": "group",
          "width": 30,
          "meterBorde": 1,
          "meterFillColor": "#FFFFFF",
          "activeBgColor": "#000000",
          "activeBgOpacity": 0.08
        }
      }
    },
    "area": {
      "type": "area",
      "color": color$1,
      "padding": [15, 15, 0, 15],
      "xAxis": {
        "disableGrid": true
      },
      "yAxis": {
        "gridType": "dash",
        "dashLength": 2
      },
      "legend": {},
      "extra": {
        "area": {
          "type": "straight",
          "opacity": 0.2,
          "addLine": true,
          "width": 2,
          "gradient": false,
          "activeType": "hollow"
        }
      }
    },
    "radar": {
      "type": "radar",
      "color": color$1,
      "padding": [5, 5, 5, 5],
      "dataLabel": false,
      "legend": {
        "show": true,
        "position": "right",
        "lineHeight": 25
      },
      "extra": {
        "radar": {
          "gridType": "radar",
          "gridColor": "#CCCCCC",
          "gridCount": 3,
          "opacity": 0.2,
          "max": 200,
          "labelShow": true
        }
      }
    },
    "gauge": {
      "type": "gauge",
      "color": color$1,
      "title": {
        "name": "66Km/H",
        "fontSize": 25,
        "color": "#2fc25b",
        "offsetY": 50
      },
      "subtitle": {
        "name": "实时速度",
        "fontSize": 15,
        "color": "#1890ff",
        "offsetY": -50
      },
      "extra": {
        "gauge": {
          "type": "default",
          "width": 30,
          "labelColor": "#666666",
          "startAngle": 0.75,
          "endAngle": 0.25,
          "startNumber": 0,
          "endNumber": 100,
          "labelFormat": "",
          "splitLine": {
            "fixRadius": 0,
            "splitNumber": 10,
            "width": 30,
            "color": "#FFFFFF",
            "childNumber": 5,
            "childWidth": 12
          },
          "pointer": {
            "width": 24,
            "color": "auto"
          }
        }
      }
    },
    "candle": {
      "type": "candle",
      "color": color$1,
      "padding": [15, 15, 0, 15],
      "enableScroll": true,
      "enableMarkLine": true,
      "dataLabel": false,
      "xAxis": {
        "labelCount": 4,
        "itemCount": 40,
        "disableGrid": true,
        "gridColor": "#CCCCCC",
        "gridType": "solid",
        "dashLength": 4,
        "scrollShow": true,
        "scrollAlign": "left",
        "scrollColor": "#A6A6A6",
        "scrollBackgroundColor": "#EFEBEF"
      },
      "yAxis": {},
      "legend": {},
      "extra": {
        "candle": {
          "color": {
            "upLine": "#f04864",
            "upFill": "#f04864",
            "downLine": "#2fc25b",
            "downFill": "#2fc25b"
          },
          "average": {
            "show": true,
            "name": ["MA5", "MA10", "MA30"],
            "day": [5, 10, 20],
            "color": ["#1890ff", "#2fc25b", "#facc14"]
          }
        },
        "markLine": {
          "type": "dash",
          "dashLength": 5,
          "data": [
            {
              "value": 2150,
              "lineColor": "#f04864",
              "showLabel": true
            },
            {
              "value": 2350,
              "lineColor": "#f04864",
              "showLabel": true
            }
          ]
        }
      }
    },
    "mix": {
      "type": "mix",
      "color": color$1,
      "padding": [15, 15, 0, 15],
      "xAxis": {
        "disableGrid": true
      },
      "yAxis": {
        "disabled": false,
        "disableGrid": false,
        "splitNumber": 5,
        "gridType": "dash",
        "dashLength": 4,
        "gridColor": "#CCCCCC",
        "padding": 10,
        "showTitle": true,
        "data": []
      },
      "legend": {},
      "extra": {
        "mix": {
          "column": {
            "width": 20
          }
        }
      }
    },
    "scatter": {
      "type": "scatter",
      "color": color$1,
      "padding": [15, 15, 0, 15],
      "dataLabel": false,
      "xAxis": {
        "disableGrid": false,
        "gridType": "dash",
        "splitNumber": 5,
        "boundaryGap": "justify",
        "min": 0
      },
      "yAxis": {
        "disableGrid": false,
        "gridType": "dash"
      },
      "legend": {},
      "extra": {
        "scatter": {}
      }
    },
    "bubble": {
      "type": "bubble",
      "color": color$1,
      "padding": [15, 15, 0, 15],
      "xAxis": {
        "disableGrid": false,
        "gridType": "dash",
        "splitNumber": 5,
        "boundaryGap": "justify",
        "min": 0,
        "max": 250
      },
      "yAxis": {
        "disableGrid": false,
        "gridType": "dash",
        "data": [{
          "min": 0,
          "max": 150
        }]
      },
      "legend": {},
      "extra": {
        "bubble": {
          "border": 2,
          "opacity": 0.5
        }
      }
    }
  };
  const color = ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"];
  const cfe = {
    //demotype为自定义图表类型
    "type": ["pie", "ring", "rose", "funnel", "line", "column", "area", "radar", "gauge", "candle", "demotype"],
    //增加自定义图表类型，如果需要categories，请在这里加入您的图表类型例如最后的"demotype"
    "categories": ["line", "column", "area", "radar", "gauge", "candle", "demotype"],
    //instance为实例变量承载属性，option为eopts承载属性，不要删除
    "instance": {},
    "option": {},
    //下面是自定义format配置，因除H5端外的其他端无法通过props传递函数，只能通过此属性对应下标的方式来替换
    "formatter": {
      "tooltipDemo1": function(res) {
        let result = "";
        for (let i2 in res) {
          if (i2 == 0) {
            result += res[i2].axisValueLabel + "年销售额";
          }
          let value2 = "--";
          if (res[i2].data !== null) {
            value2 = res[i2].data;
          }
          result += "<br/>" + res[i2].marker + res[i2].seriesName + "：" + value2 + " 万元";
        }
        return result;
      },
      legendFormat: function(name) {
        return "自定义图例+" + name;
      },
      yAxisFormatDemo: function(value2, index2) {
        return value2 + "元";
      },
      seriesFormatDemo: function(res) {
        return res.name + "年" + res.value + "元";
      }
    },
    //这里演示了自定义您的图表类型的option，可以随意命名，之后在组件上 type="demotype" 后，组件会调用这个花括号里的option，如果组件上还存在eopts参数，会将demotype与eopts中option合并后渲染图表。
    "demotype": {
      "color": color
      //在这里填写echarts的option即可
    },
    //下面是自定义配置，请添加项目所需的通用配置
    "column": {
      "color": color,
      "title": {
        "text": ""
      },
      "tooltip": {
        "trigger": "axis"
      },
      "grid": {
        "top": 30,
        "bottom": 50,
        "right": 15,
        "left": 40
      },
      "legend": {
        "bottom": "left"
      },
      "toolbox": {
        "show": false
      },
      "xAxis": {
        "type": "category",
        "axisLabel": {
          "color": "#666666"
        },
        "axisLine": {
          "lineStyle": {
            "color": "#CCCCCC"
          }
        },
        "boundaryGap": true,
        "data": []
      },
      "yAxis": {
        "type": "value",
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "color": "#666666"
        },
        "axisLine": {
          "lineStyle": {
            "color": "#CCCCCC"
          }
        }
      },
      "seriesTemplate": {
        "name": "",
        "type": "bar",
        "data": [],
        "barwidth": 20,
        "label": {
          "show": true,
          "color": "#666666",
          "position": "top"
        }
      }
    },
    "line": {
      "color": color,
      "title": {
        "text": ""
      },
      "tooltip": {
        "trigger": "axis"
      },
      "grid": {
        "top": 30,
        "bottom": 50,
        "right": 15,
        "left": 40
      },
      "legend": {
        "bottom": "left"
      },
      "toolbox": {
        "show": false
      },
      "xAxis": {
        "type": "category",
        "axisLabel": {
          "color": "#666666"
        },
        "axisLine": {
          "lineStyle": {
            "color": "#CCCCCC"
          }
        },
        "boundaryGap": true,
        "data": []
      },
      "yAxis": {
        "type": "value",
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "color": "#666666"
        },
        "axisLine": {
          "lineStyle": {
            "color": "#CCCCCC"
          }
        }
      },
      "seriesTemplate": {
        "name": "",
        "type": "line",
        "data": [],
        "barwidth": 20,
        "label": {
          "show": true,
          "color": "#666666",
          "position": "top"
        }
      }
    },
    "area": {
      "color": color,
      "title": {
        "text": ""
      },
      "tooltip": {
        "trigger": "axis"
      },
      "grid": {
        "top": 30,
        "bottom": 50,
        "right": 15,
        "left": 40
      },
      "legend": {
        "bottom": "left"
      },
      "toolbox": {
        "show": false
      },
      "xAxis": {
        "type": "category",
        "axisLabel": {
          "color": "#666666"
        },
        "axisLine": {
          "lineStyle": {
            "color": "#CCCCCC"
          }
        },
        "boundaryGap": true,
        "data": []
      },
      "yAxis": {
        "type": "value",
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "color": "#666666"
        },
        "axisLine": {
          "lineStyle": {
            "color": "#CCCCCC"
          }
        }
      },
      "seriesTemplate": {
        "name": "",
        "type": "line",
        "data": [],
        "areaStyle": {},
        "label": {
          "show": true,
          "color": "#666666",
          "position": "top"
        }
      }
    },
    "pie": {
      "color": color,
      "title": {
        "text": ""
      },
      "tooltip": {
        "trigger": "item"
      },
      "grid": {
        "top": 40,
        "bottom": 30,
        "right": 15,
        "left": 15
      },
      "legend": {
        "bottom": "left"
      },
      "seriesTemplate": {
        "name": "",
        "type": "pie",
        "data": [],
        "radius": "50%",
        "label": {
          "show": true,
          "color": "#666666",
          "position": "top"
        }
      }
    },
    "ring": {
      "color": color,
      "title": {
        "text": ""
      },
      "tooltip": {
        "trigger": "item"
      },
      "grid": {
        "top": 40,
        "bottom": 30,
        "right": 15,
        "left": 15
      },
      "legend": {
        "bottom": "left"
      },
      "seriesTemplate": {
        "name": "",
        "type": "pie",
        "data": [],
        "radius": ["40%", "70%"],
        "avoidLabelOverlap": false,
        "label": {
          "show": true,
          "color": "#666666",
          "position": "top"
        },
        "labelLine": {
          "show": true
        }
      }
    },
    "rose": {
      "color": color,
      "title": {
        "text": ""
      },
      "tooltip": {
        "trigger": "item"
      },
      "legend": {
        "top": "bottom"
      },
      "seriesTemplate": {
        "name": "",
        "type": "pie",
        "data": [],
        "radius": "55%",
        "center": ["50%", "50%"],
        "roseType": "area"
      }
    },
    "funnel": {
      "color": color,
      "title": {
        "text": ""
      },
      "tooltip": {
        "trigger": "item",
        "formatter": "{b} : {c}%"
      },
      "legend": {
        "top": "bottom"
      },
      "seriesTemplate": {
        "name": "",
        "type": "funnel",
        "left": "10%",
        "top": 60,
        "bottom": 60,
        "width": "80%",
        "min": 0,
        "max": 100,
        "minSize": "0%",
        "maxSize": "100%",
        "sort": "descending",
        "gap": 2,
        "label": {
          "show": true,
          "position": "inside"
        },
        "labelLine": {
          "length": 10,
          "lineStyle": {
            "width": 1,
            "type": "solid"
          }
        },
        "itemStyle": {
          "bordercolor": "#fff",
          "borderwidth": 1
        },
        "emphasis": {
          "label": {
            "fontSize": 20
          }
        },
        "data": []
      }
    },
    "gauge": {
      "color": color,
      "tooltip": {
        "formatter": "{a} <br/>{b} : {c}%"
      },
      "seriesTemplate": {
        "name": "业务指标",
        "type": "gauge",
        "detail": { "formatter": "{value}%" },
        "data": [{ "value": 50, "name": "完成率" }]
      }
    },
    "candle": {
      "xAxis": {
        "data": []
      },
      "yAxis": {},
      "color": color,
      "title": {
        "text": ""
      },
      "dataZoom": [
        {
          "type": "inside",
          "xAxisIndex": [0, 1],
          "start": 10,
          "end": 100
        },
        {
          "show": true,
          "xAxisIndex": [0, 1],
          "type": "slider",
          "bottom": 10,
          "start": 10,
          "end": 100
        }
      ],
      "seriesTemplate": {
        "name": "",
        "type": "k",
        "data": []
      }
    }
  };
  const block0 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("rdcharts");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["rdcharts"] = "f9cb76fc";
  };
  function deepCloneAssign(origin = {}, ...args) {
    for (let i2 in args) {
      for (let key in args[i2]) {
        if (args[i2].hasOwnProperty(key)) {
          origin[key] = args[i2][key] && typeof args[i2][key] === "object" ? deepCloneAssign(Array.isArray(args[i2][key]) ? [] : {}, origin[key], args[i2][key]) : args[i2][key];
        }
      }
    }
    return origin;
  }
  function formatterAssign(args, formatter) {
    for (let key in args) {
      if (args.hasOwnProperty(key) && args[key] !== null && typeof args[key] === "object") {
        formatterAssign(args[key], formatter);
      } else if (key === "format" && typeof args[key] === "string") {
        args["formatter"] = formatter[args[key]] ? formatter[args[key]] : void 0;
      }
    }
    return args;
  }
  function getFormatDate(date3) {
    var seperator = "-";
    var year = date3.getFullYear();
    var month = date3.getMonth() + 1;
    var strDate = date3.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = year + seperator + month + seperator + strDate;
    return currentdate;
  }
  const _sfc_main$k = {
    name: "qiun-data-charts",
    mixins: [Vs.mixinDatacom],
    props: {
      type: {
        type: String,
        default: null
      },
      canvasId: {
        type: String,
        default: "uchartsid"
      },
      canvas2d: {
        type: Boolean,
        default: false
      },
      background: {
        type: String,
        default: "rgba(0,0,0,0)"
      },
      animation: {
        type: Boolean,
        default: true
      },
      chartData: {
        type: Object,
        default() {
          return {
            categories: [],
            series: []
          };
        }
      },
      opts: {
        type: Object,
        default() {
          return {};
        }
      },
      eopts: {
        type: Object,
        default() {
          return {};
        }
      },
      loadingType: {
        type: Number,
        default: 2
      },
      errorShow: {
        type: Boolean,
        default: true
      },
      errorReload: {
        type: Boolean,
        default: true
      },
      errorMessage: {
        type: String,
        default: null
      },
      inScrollView: {
        type: Boolean,
        default: false
      },
      reshow: {
        type: Boolean,
        default: false
      },
      reload: {
        type: Boolean,
        default: false
      },
      disableScroll: {
        type: Boolean,
        default: false
      },
      optsWatch: {
        type: Boolean,
        default: true
      },
      onzoom: {
        type: Boolean,
        default: false
      },
      ontap: {
        type: Boolean,
        default: true
      },
      ontouch: {
        type: Boolean,
        default: false
      },
      onmouse: {
        type: Boolean,
        default: true
      },
      onmovetip: {
        type: Boolean,
        default: false
      },
      echartsH5: {
        type: Boolean,
        default: false
      },
      echartsApp: {
        type: Boolean,
        default: false
      },
      tooltipShow: {
        type: Boolean,
        default: true
      },
      tooltipFormat: {
        type: String,
        default: void 0
      },
      tooltipCustom: {
        type: Object,
        default: void 0
      },
      startDate: {
        type: String,
        default: void 0
      },
      endDate: {
        type: String,
        default: void 0
      },
      textEnum: {
        type: Array,
        default() {
          return [];
        }
      },
      groupEnum: {
        type: Array,
        default() {
          return [];
        }
      },
      pageScrollTop: {
        type: Number,
        default: 0
      },
      directory: {
        type: String,
        default: "/"
      },
      tapLegend: {
        type: Boolean,
        default: true
      },
      menus: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        cid: "uchartsid",
        inWx: false,
        inAli: false,
        inTt: false,
        inBd: false,
        inH5: false,
        inApp: false,
        inWin: false,
        type2d: true,
        disScroll: false,
        openmouse: false,
        pixel: 1,
        cWidth: 375,
        cHeight: 250,
        showchart: false,
        echarts: false,
        echartsResize: {
          state: false
        },
        uchartsOpts: {},
        echartsOpts: {},
        drawData: {},
        lastDrawTime: null
      };
    },
    created() {
      this.cid = this.canvasId;
      if (this.canvasId == "uchartsid" || this.canvasId == "") {
        let t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let len = t2.length;
        let id = "";
        for (let i2 = 0; i2 < 32; i2++) {
          id += t2.charAt(Math.floor(Math.random() * len));
        }
        this.cid = id;
      }
      const systemInfo = uni.getSystemInfoSync();
      if (systemInfo.platform === "windows" || systemInfo.platform === "mac") {
        this.inWin = true;
      }
      this.type2d = false;
      this.disScroll = this.disableScroll;
    },
    mounted() {
      this.inApp = true;
      if (this.echartsApp === true) {
        this.echarts = true;
        this.openmouse = false;
      }
      this.$nextTick(() => {
        this.beforeInit();
      });
    },
    destroyed() {
      if (this.echarts === true) {
        delete cfe.option[this.cid];
        delete cfe.instance[this.cid];
      } else {
        delete cfu.option[this.cid];
        delete cfu.instance[this.cid];
      }
      uni.offWindowResize(() => {
      });
    },
    watch: {
      chartDataProps: {
        handler(val, oldval) {
          if (typeof val === "object") {
            if (JSON.stringify(val) !== JSON.stringify(oldval)) {
              this._clearChart();
              if (val.series && val.series.length > 0) {
                this.beforeInit();
              } else {
                this.mixinDatacomLoading = true;
                this.showchart = false;
                this.mixinDatacomErrorMessage = null;
              }
            }
          } else {
            this.mixinDatacomLoading = false;
            this._clearChart();
            this.showchart = false;
            this.mixinDatacomErrorMessage = "参数错误：chartData数据类型错误";
          }
        },
        immediate: false,
        deep: true
      },
      localdata: {
        handler(val, oldval) {
          if (JSON.stringify(val) !== JSON.stringify(oldval)) {
            if (val.length > 0) {
              this.beforeInit();
            } else {
              this.mixinDatacomLoading = true;
              this._clearChart();
              this.showchart = false;
              this.mixinDatacomErrorMessage = null;
            }
          }
        },
        immediate: false,
        deep: true
      },
      optsProps: {
        handler(val, oldval) {
          if (typeof val === "object") {
            if (JSON.stringify(val) !== JSON.stringify(oldval) && this.echarts === false && this.optsWatch == true) {
              this.checkData(this.drawData);
            }
          } else {
            this.mixinDatacomLoading = false;
            this._clearChart();
            this.showchart = false;
            this.mixinDatacomErrorMessage = "参数错误：opts数据类型错误";
          }
        },
        immediate: false,
        deep: true
      },
      eoptsProps: {
        handler(val, oldval) {
          if (typeof val === "object") {
            if (JSON.stringify(val) !== JSON.stringify(oldval) && this.echarts === true) {
              this.checkData(this.drawData);
            }
          } else {
            this.mixinDatacomLoading = false;
            this.showchart = false;
            this.mixinDatacomErrorMessage = "参数错误：eopts数据类型错误";
          }
        },
        immediate: false,
        deep: true
      },
      reshow(val, oldval) {
        if (val === true && this.mixinDatacomLoading === false) {
          setTimeout(() => {
            this.mixinDatacomErrorMessage = null;
            this.echartsResize.state = !this.echartsResize.state;
            this.checkData(this.drawData);
          }, 200);
        }
      },
      reload(val, oldval) {
        if (val === true) {
          this.showchart = false;
          this.mixinDatacomErrorMessage = null;
          this.reloading();
        }
      },
      mixinDatacomErrorMessage(val, oldval) {
        if (val) {
          this.emitMsg({ name: "error", params: { type: "error", errorShow: this.errorShow, msg: val, id: this.cid } });
          if (this.errorShow) {
            formatAppLog("log", "at uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue:611", "[秋云图表组件]" + val);
          }
        }
      },
      errorMessage(val, oldval) {
        if (val && this.errorShow && val !== null && val !== "null" && val !== "") {
          this.showchart = false;
          this.mixinDatacomLoading = false;
          this.mixinDatacomErrorMessage = val;
        } else {
          this.showchart = false;
          this.mixinDatacomErrorMessage = null;
          this.reloading();
        }
      }
    },
    computed: {
      optsProps() {
        return JSON.parse(JSON.stringify(this.opts));
      },
      eoptsProps() {
        return JSON.parse(JSON.stringify(this.eopts));
      },
      chartDataProps() {
        return JSON.parse(JSON.stringify(this.chartData));
      }
    },
    methods: {
      beforeInit() {
        this.mixinDatacomErrorMessage = null;
        if (typeof this.chartData === "object" && this.chartData != null && this.chartData.series !== void 0 && this.chartData.series.length > 0) {
          this.drawData = deepCloneAssign({}, this.chartData);
          this.mixinDatacomLoading = false;
          this.showchart = true;
          this.checkData(this.chartData);
        } else if (this.localdata.length > 0) {
          this.mixinDatacomLoading = false;
          this.showchart = true;
          this.localdataInit(this.localdata);
        } else if (this.collection !== "") {
          this.mixinDatacomLoading = false;
          this.getCloudData();
        } else {
          this.mixinDatacomLoading = true;
        }
      },
      localdataInit(resdata) {
        if (this.groupEnum.length > 0) {
          for (let i2 = 0; i2 < resdata.length; i2++) {
            for (let j2 = 0; j2 < this.groupEnum.length; j2++) {
              if (resdata[i2].group === this.groupEnum[j2].value) {
                resdata[i2].group = this.groupEnum[j2].text;
              }
            }
          }
        }
        if (this.textEnum.length > 0) {
          for (let i2 = 0; i2 < resdata.length; i2++) {
            for (let j2 = 0; j2 < this.textEnum.length; j2++) {
              if (resdata[i2].text === this.textEnum[j2].value) {
                resdata[i2].text = this.textEnum[j2].text;
              }
            }
          }
        }
        let needCategories = false;
        let tmpData = { categories: [], series: [] };
        let tmpcategories = [];
        let tmpseries = [];
        if (this.echarts === true) {
          needCategories = cfe.categories.includes(this.type);
        } else {
          needCategories = cfu.categories.includes(this.type);
        }
        if (needCategories === true) {
          if (this.chartData && this.chartData.categories && this.chartData.categories.length > 0) {
            tmpcategories = this.chartData.categories;
          } else {
            if (this.startDate && this.endDate) {
              let idate = new Date(this.startDate);
              let edate = new Date(this.endDate);
              while (idate <= edate) {
                tmpcategories.push(getFormatDate(idate));
                idate = idate.setDate(idate.getDate() + 1);
                idate = new Date(idate);
              }
            } else {
              let tempckey = {};
              resdata.map(function(item, index2) {
                if (item.text != void 0 && !tempckey[item.text]) {
                  tmpcategories.push(item.text);
                  tempckey[item.text] = true;
                }
              });
            }
          }
          tmpData.categories = tmpcategories;
        }
        let tempskey = {};
        resdata.map(function(item, index2) {
          if (item.group != void 0 && !tempskey[item.group]) {
            tmpseries.push({ name: item.group, data: [] });
            tempskey[item.group] = true;
          }
        });
        if (tmpseries.length == 0) {
          tmpseries = [{ name: "默认分组", data: [] }];
          if (needCategories === true) {
            for (let j2 = 0; j2 < tmpcategories.length; j2++) {
              let seriesdata = 0;
              for (let i2 = 0; i2 < resdata.length; i2++) {
                if (resdata[i2].text == tmpcategories[j2]) {
                  seriesdata = resdata[i2].value;
                }
              }
              tmpseries[0].data.push(seriesdata);
            }
          } else {
            for (let i2 = 0; i2 < resdata.length; i2++) {
              tmpseries[0].data.push({ "name": resdata[i2].text, "value": resdata[i2].value });
            }
          }
        } else {
          for (let k = 0; k < tmpseries.length; k++) {
            if (tmpcategories.length > 0) {
              for (let j2 = 0; j2 < tmpcategories.length; j2++) {
                let seriesdata = 0;
                for (let i2 = 0; i2 < resdata.length; i2++) {
                  if (tmpseries[k].name == resdata[i2].group && resdata[i2].text == tmpcategories[j2]) {
                    seriesdata = resdata[i2].value;
                  }
                }
                tmpseries[k].data.push(seriesdata);
              }
            } else {
              for (let i2 = 0; i2 < resdata.length; i2++) {
                if (tmpseries[k].name == resdata[i2].group) {
                  tmpseries[k].data.push(resdata[i2].value);
                }
              }
            }
          }
        }
        tmpData.series = tmpseries;
        this.drawData = deepCloneAssign({}, tmpData);
        this.checkData(tmpData);
      },
      reloading() {
        if (this.errorReload === false) {
          return;
        }
        this.showchart = false;
        this.mixinDatacomErrorMessage = null;
        if (this.collection !== "") {
          this.mixinDatacomLoading = false;
          this.onMixinDatacomPropsChange(true);
        } else {
          this.beforeInit();
        }
      },
      checkData(anyData) {
        let cid = this.cid;
        if (this.echarts === true) {
          cfe.option[cid] = deepCloneAssign({}, this.eopts);
          cfe.option[cid].id = cid;
          cfe.option[cid].type = this.type;
        } else {
          if (this.type && cfu.type.includes(this.type)) {
            cfu.option[cid] = deepCloneAssign({}, cfu[this.type], this.opts);
            cfu.option[cid].canvasId = cid;
          } else {
            this.mixinDatacomLoading = false;
            this.showchart = false;
            this.mixinDatacomErrorMessage = "参数错误：props参数中type类型不正确";
          }
        }
        let newData = deepCloneAssign({}, anyData);
        if (newData.series !== void 0 && newData.series.length > 0) {
          this.mixinDatacomErrorMessage = null;
          if (this.echarts === true) {
            cfe.option[cid].chartData = newData;
            this.$nextTick(() => {
              this.init();
            });
          } else {
            cfu.option[cid].categories = newData.categories;
            cfu.option[cid].series = newData.series;
            this.$nextTick(() => {
              this.init();
            });
          }
        }
      },
      resizeHandler() {
        let currTime = Date.now();
        let lastDrawTime = this.lastDrawTime ? this.lastDrawTime : currTime - 3e3;
        let duration = currTime - lastDrawTime;
        if (duration < 1e3)
          return;
        uni.createSelectorQuery().in(this).select("#ChartBoxId" + this.cid).boundingClientRect((data) => {
          this.showchart = true;
          if (data.width > 0 && data.height > 0) {
            if (data.width !== this.cWidth || data.height !== this.cHeight) {
              this.checkData(this.drawData);
            }
          }
        }).exec();
      },
      getCloudData() {
        if (this.mixinDatacomLoading == true) {
          return;
        }
        this.mixinDatacomLoading = true;
        this.mixinDatacomGet().then((res) => {
          this.mixinDatacomResData = res.result.data;
          this.localdataInit(this.mixinDatacomResData);
        }).catch((err) => {
          this.mixinDatacomLoading = false;
          this.showchart = false;
          this.mixinDatacomErrorMessage = "请求错误：" + err;
        });
      },
      onMixinDatacomPropsChange(needReset, changed) {
        if (needReset == true && this.collection !== "") {
          this.showchart = false;
          this.mixinDatacomErrorMessage = null;
          this._clearChart();
          this.getCloudData();
        }
      },
      _clearChart() {
        let cid = this.cid;
        if (this.echarts !== true && cfu.option[cid] && cfu.option[cid].context) {
          const ctx = cfu.option[cid].context;
          if (typeof ctx === "object" && !!!cfu.option[cid].update) {
            ctx.clearRect(0, 0, this.cWidth * this.pixel, this.cHeight * this.pixel);
            ctx.draw();
          }
        }
      },
      init() {
        let cid = this.cid;
        uni.createSelectorQuery().in(this).select("#ChartBoxId" + cid).boundingClientRect((data) => {
          if (data.width > 0 && data.height > 0) {
            this.mixinDatacomLoading = false;
            this.showchart = true;
            this.lastDrawTime = Date.now();
            this.cWidth = data.width;
            this.cHeight = data.height;
            if (this.echarts !== true) {
              cfu.option[cid].background = this.background == "rgba(0,0,0,0)" ? "#FFFFFF" : this.background;
              cfu.option[cid].canvas2d = this.type2d;
              cfu.option[cid].pixelRatio = this.pixel;
              cfu.option[cid].animation = this.animation;
              cfu.option[cid].width = data.width * this.pixel;
              cfu.option[cid].height = data.height * this.pixel;
              cfu.option[cid].onzoom = this.onzoom;
              cfu.option[cid].ontap = this.ontap;
              cfu.option[cid].ontouch = this.ontouch;
              cfu.option[cid].onmouse = this.openmouse;
              cfu.option[cid].onmovetip = this.onmovetip;
              cfu.option[cid].tooltipShow = this.tooltipShow;
              cfu.option[cid].tooltipFormat = this.tooltipFormat;
              cfu.option[cid].tooltipCustom = this.tooltipCustom;
              cfu.option[cid].inScrollView = this.inScrollView;
              cfu.option[cid].lastDrawTime = this.lastDrawTime;
              cfu.option[cid].tapLegend = this.tapLegend;
            }
            if (this.inH5 || this.inApp) {
              if (this.echarts == true) {
                cfe.option[cid].ontap = this.ontap;
                cfe.option[cid].onmouse = this.openmouse;
                cfe.option[cid].tooltipShow = this.tooltipShow;
                cfe.option[cid].tooltipFormat = this.tooltipFormat;
                cfe.option[cid].tooltipCustom = this.tooltipCustom;
                cfe.option[cid].lastDrawTime = this.lastDrawTime;
                this.echartsOpts = deepCloneAssign({}, cfe.option[cid]);
              } else {
                cfu.option[cid].rotateLock = cfu.option[cid].rotate;
                this.uchartsOpts = deepCloneAssign({}, cfu.option[cid]);
              }
            } else {
              cfu.option[cid] = formatterAssign(cfu.option[cid], cfu.formatter);
              this.mixinDatacomErrorMessage = null;
              this.mixinDatacomLoading = false;
              this.showchart = true;
              this.$nextTick(() => {
                if (this.type2d === true) {
                  const query = uni.createSelectorQuery().in(this);
                  query.select("#" + cid).fields({ node: true, size: true }).exec((res) => {
                    if (res[0]) {
                      const canvas = res[0].node;
                      const ctx = canvas.getContext("2d");
                      cfu.option[cid].context = ctx;
                      cfu.option[cid].rotateLock = cfu.option[cid].rotate;
                      if (cfu.instance[cid] && cfu.option[cid] && cfu.option[cid].update === true) {
                        this._updataUChart(cid);
                      } else {
                        canvas.width = data.width * this.pixel;
                        canvas.height = data.height * this.pixel;
                        canvas._width = data.width * this.pixel;
                        canvas._height = data.height * this.pixel;
                        setTimeout(() => {
                          cfu.option[cid].context.restore();
                          cfu.option[cid].context.save();
                          this._newChart(cid);
                        }, 100);
                      }
                    } else {
                      this.showchart = false;
                      this.mixinDatacomErrorMessage = "参数错误：开启2d模式后，未获取到dom节点，canvas-id:" + cid;
                    }
                  });
                } else {
                  if (this.inAli) {
                    cfu.option[cid].rotateLock = cfu.option[cid].rotate;
                  }
                  cfu.option[cid].context = uni.createCanvasContext(cid, this);
                  if (cfu.instance[cid] && cfu.option[cid] && cfu.option[cid].update === true) {
                    this._updataUChart(cid);
                  } else {
                    setTimeout(() => {
                      cfu.option[cid].context.restore();
                      cfu.option[cid].context.save();
                      this._newChart(cid);
                    }, 100);
                  }
                }
              });
            }
          } else {
            this.mixinDatacomLoading = false;
            this.showchart = false;
            if (this.reshow == true) {
              this.mixinDatacomErrorMessage = "布局错误：未获取到父元素宽高尺寸！canvas-id:" + cid;
            }
          }
        }).exec();
      },
      saveImage() {
        uni.canvasToTempFilePath({
          canvasId: this.cid,
          success: (res) => {
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function() {
                uni.showToast({
                  title: "保存成功",
                  duration: 2e3
                });
              }
            });
          }
        }, this);
      },
      getImage() {
        if (this.type2d == false) {
          uni.canvasToTempFilePath({
            canvasId: this.cid,
            success: (res) => {
              this.emitMsg({ name: "getImage", params: { type: "getImage", base64: res.tempFilePath } });
            }
          }, this);
        } else {
          const query = uni.createSelectorQuery().in(this);
          query.select("#" + this.cid).fields({ node: true, size: true }).exec((res) => {
            if (res[0]) {
              const canvas = res[0].node;
              this.emitMsg({ name: "getImage", params: { type: "getImage", base64: canvas.toDataURL("image/png") } });
            }
          });
        }
      },
      _error(e2) {
        this.mixinDatacomErrorMessage = e2.detail.errMsg;
      },
      emitMsg(msg) {
        this.$emit(msg.name, msg.params);
      },
      getRenderType() {
        if (this.echarts === true && this.mixinDatacomLoading === false) {
          this.beforeInit();
        }
      },
      toJSON() {
        return this;
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_qiun_loading = resolveEasycom(vue.resolveDynamicComponent("qiun-loading"), __easycom_0$3);
    const _component_qiun_error = resolveEasycom(vue.resolveDynamicComponent("qiun-error"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "chartsview",
      id: "ChartBoxId" + $data.cid
    }, [
      _ctx.mixinDatacomLoading ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
        vue.createCommentVNode(" 自定义加载状态，请改这里 "),
        vue.createVNode(_component_qiun_loading, { loadingType: $props.loadingType }, null, 8, ["loadingType"])
      ])) : vue.createCommentVNode("v-if", true),
      _ctx.mixinDatacomErrorMessage && $props.errorShow ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.reloading && $options.reloading(...args))
      }, [
        vue.createCommentVNode(" 自定义错误提示，请改这里 "),
        vue.createVNode(_component_qiun_error, { errorMessage: $props.errorMessage }, null, 8, ["errorMessage"])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" APP和H5采用renderjs渲染图表 "),
      $data.echarts ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        style: vue.normalizeStyle([{ background: $props.background }, { "width": "100%", "height": "100%" }]),
        "data-directory": $props.directory,
        id: "EC" + $data.cid,
        prop: vue.wp($data.echartsOpts),
        "change:prop": _ctx.rdcharts.ecinit,
        resize: vue.wp($data.echartsResize),
        "change:resize": _ctx.rdcharts.ecresize
      }, null, 12, ["data-directory", "id", "prop", "change:prop", "resize", "change:resize"])), [
        [vue.vShow, $data.showchart]
      ]) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 3,
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.rdcharts.tap && _ctx.rdcharts.tap(...args)),
        onMousemove: _cache[3] || (_cache[3] = (...args) => _ctx.rdcharts.mouseMove && _ctx.rdcharts.mouseMove(...args)),
        onMousedown: _cache[4] || (_cache[4] = (...args) => _ctx.rdcharts.mouseDown && _ctx.rdcharts.mouseDown(...args)),
        onMouseup: _cache[5] || (_cache[5] = (...args) => _ctx.rdcharts.mouseUp && _ctx.rdcharts.mouseUp(...args)),
        onTouchstart: _cache[6] || (_cache[6] = (...args) => _ctx.rdcharts.touchStart && _ctx.rdcharts.touchStart(...args)),
        onTouchmove: _cache[7] || (_cache[7] = (...args) => _ctx.rdcharts.touchMove && _ctx.rdcharts.touchMove(...args)),
        onTouchend: _cache[8] || (_cache[8] = (...args) => _ctx.rdcharts.touchEnd && _ctx.rdcharts.touchEnd(...args)),
        id: "UC" + $data.cid,
        prop: vue.wp($data.uchartsOpts),
        "change:prop": _ctx.rdcharts.ucinit
      }, [
        vue.withDirectives(vue.createElementVNode("canvas", {
          id: $data.cid,
          canvasId: $data.cid,
          style: vue.normalizeStyle({ width: $data.cWidth + "px", height: $data.cHeight + "px", background: $props.background }),
          "disable-scroll": $props.disableScroll,
          onError: _cache[1] || (_cache[1] = (...args) => $options._error && $options._error(...args))
        }, null, 44, ["id", "canvasId", "disable-scroll"]), [
          [vue.vShow, $data.showchart]
        ])
      ], 40, ["id", "prop", "change:prop"])),
      vue.createCommentVNode(" 支付宝小程序 "),
      vue.createCommentVNode(" 其他小程序通过vue渲染图表 ")
    ], 8, ["id"]);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$k);
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$d], ["__scopeId", "data-v-0ca34aee"], ["__file", "D:/subject-analyze/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue"]]);
  const _imports_2 = "/assets/icon_plan_add.242799e6.png";
  const _sfc_main$j = {
    __name: "index",
    setup(__props) {
      vue.onMounted(async () => {
        await getChartData();
        await getPlanList();
      });
      const chartData = vue.ref();
      const opts = vue.ref(
        {
          color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
          padding: [15, 10, 0, 15],
          enableScroll: false,
          legend: {},
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            gridType: "dash",
            dashLength: 2
          },
          extra: {
            line: {
              type: "straight",
              width: 2,
              activeType: "hollow"
            }
          }
        }
      );
      const pageInfo = vue.ref({
        page: 1,
        pagesize: 3
      });
      const timeOption = vue.ref([
        {
          label: "本周",
          value: "本周"
        },
        {
          label: "本月",
          value: "本月"
        }
      ]);
      const timeChoose = vue.ref("本周");
      const averageTime = vue.ref(0);
      const subjectNum = vue.ref(0);
      vue.ref();
      const recordList = vue.ref([]);
      const tags = vue.ref([
        {
          text: "有问题",
          value: 1
        },
        {
          text: "新知识",
          value: 2
        },
        {
          text: "待总结",
          value: 3
        },
        {
          text: "没看懂",
          value: 4
        },
        {
          text: "有点问题",
          value: 5
        },
        {
          text: "其他",
          value: 6
        }
      ]);
      vue.ref([]);
      const haveData = vue.ref(false);
      const getChartData = async () => {
        const formatData = (data) => {
          averageTime.value = data.average_time;
          subjectNum.value = data.subjects_info.length;
          formatAppLog("log", "at pages/plan/index.vue:173", data);
          let finData = {
            categories: data.xAxis
          };
          let series = [];
          data.subjects_info.forEach((item) => {
            series.push({ name: item.subject_name, data: item.data });
          });
          finData.series = series;
          chartData.value = JSON.parse(JSON.stringify(finData));
        };
        await getPlanAPI().then((res) => {
          formatAppLog("log", "at pages/plan/index.vue:187", res);
          formatData(res);
        }).catch((err) => {
          formatAppLog("log", "at pages/plan/index.vue:191", err);
        });
      };
      const getPlanList = async () => {
        const buildList = (dataObj) => {
          const mergedData = { ...dataObj };
          recordList.value = Object.keys(mergedData).map((key) => ({ date: [key][0], dataList: mergedData[key] })).sort((a2, b2) => {
            const dateA = new Date(a2.date);
            const dateB = new Date(b2.date);
            return dateB - dateA;
          });
          recordList.value.forEach((item) => {
            item.dataList.forEach((dataDetail) => {
              let tagList = [];
              dataDetail.tags.forEach((tag) => {
                if (tag == 0)
                  ;
                else {
                  tagList.push(tags.value[tag - 1].text);
                }
              });
              dataDetail.tags = tagList;
            });
          });
          recordList.value = recordList.value[0];
          const nowDate = /* @__PURE__ */ new Date();
          const valueDate = new Date(recordList.value.date);
          const nowDateStr = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
          const valueDateStr = `${valueDate.getFullYear()}-${valueDate.getMonth() + 1}-${valueDate.getDate()}`;
          const areDatesEqual = nowDateStr === valueDateStr;
          if (areDatesEqual) {
            haveData.value = true;
          }
          formatAppLog("log", "at pages/plan/index.vue:236", recordList.value);
        };
        const params = {
          page: pageInfo.value.page,
          pagesize: pageInfo.value.pagesize
        };
        await GetPlanListAPI(params).then((res) => {
          buildList(res);
        }).catch((err) => {
          formatAppLog("log", "at pages/plan/index.vue:248", err);
        });
      };
      const addPlan = (plan_id) => {
        uni.navigateTo({
          url: "/pages/plan/addPlan?plan_id=" + plan_id
        });
      };
      const toBack = () => {
        uni.navigateBack();
      };
      const toALl = () => {
        uni.navigateTo({
          url: "/pages/plan/allPlan"
        });
      };
      return (_ctx, _cache) => {
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        const _component_up_avatar = resolveEasycom(vue.resolveDynamicComponent("up-avatar"), __easycom_2$6);
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_1$b);
        const _component_u_dropdown_item = resolveEasycom(vue.resolveDynamicComponent("u-dropdown-item"), __easycom_3$2);
        const _component_u_dropdown = resolveEasycom(vue.resolveDynamicComponent("u-dropdown"), __easycom_4$2);
        const _component_qiun_data_charts = resolveEasycom(vue.resolveDynamicComponent("qiun-data-charts"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: "学习记录",
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    onClick: toBack,
                    src: _imports_0,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_1,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "planData" }, [
                vue.createElementVNode("view", { class: "title" }, "今日学习记录"),
                vue.createElementVNode("view", { class: "planList" }, [
                  haveData.value ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(recordList.value.dataList, (data, dataIndex) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key: dataIndex,
                          onClick: ($event) => addPlan(data.plan_id),
                          class: "planBox"
                        }, [
                          vue.createVNode(_component_up_avatar, {
                            text: " ",
                            randomBgColor: "",
                            size: "10"
                          }),
                          vue.createElementVNode(
                            "span",
                            { class: "plan-title" },
                            vue.toDisplayString(data.subject),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode("view", { class: "plan-time-tags" }, [
                            vue.createElementVNode(
                              "span",
                              { class: "plan-time" },
                              vue.toDisplayString(data.spend_time) + "小时",
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("view", { class: "tagsList" }, [
                              (vue.openBlock(true), vue.createElementBlock(
                                vue.Fragment,
                                null,
                                vue.renderList(data.tags, (tags2, tagIndex) => {
                                  return vue.openBlock(), vue.createElementBlock(
                                    "view",
                                    {
                                      key: tagIndex,
                                      class: "tagBox"
                                    },
                                    vue.toDisplayString(tags2),
                                    1
                                    /* TEXT */
                                  );
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])
                          ]),
                          vue.createVNode(_component_up_icon, {
                            name: "arrow-right",
                            color: "#ac0404",
                            size: "20"
                          })
                        ], 8, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "noData"
                  }, " 今日暂无数据，快去学习吧! ")),
                  vue.createElementVNode("view", {
                    onClick: toALl,
                    class: "checkMore"
                  }, [
                    vue.createElementVNode("span", null, "查看更多"),
                    vue.createVNode(_component_up_icon, {
                      name: "arrow-right",
                      color: "black",
                      size: "14"
                    })
                  ])
                ]),
                vue.createElementVNode("view", { class: "add" }, [
                  vue.createElementVNode("span", null, "添加记录"),
                  vue.createElementVNode("view", {
                    onClick: _cache[0] || (_cache[0] = ($event) => addPlan(0)),
                    class: "addBtn"
                  }, [
                    vue.createElementVNode("image", {
                      src: _imports_2,
                      style: { "width": "40rpx", "height": "40rpx" }
                    })
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "studyData" }, [
                vue.createElementVNode("view", { class: "title" }, " 我的学习数据 "),
                vue.createElementVNode("view", { class: "dataChartBox" }, [
                  vue.createElementVNode("view", { class: "top" }, [
                    vue.createElementVNode("span", null, "每日平均学习时长"),
                    vue.createElementVNode("view", { class: "choose" }, [
                      vue.createVNode(_component_u_dropdown, {
                        "active-color": "#AC0404",
                        "title-size": "30rpx"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_u_dropdown_item, {
                            modelValue: timeChoose.value,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => timeChoose.value = $event),
                            title: timeChoose.value,
                            options: timeOption.value
                          }, null, 8, ["modelValue", "title", "options"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "time font-red" },
                    vue.toDisplayString(averageTime.value) + "小时 ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "num" },
                    " 共" + vue.toDisplayString(subjectNum.value) + "个学科 ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "content" }, [
                    vue.createVNode(_component_qiun_data_charts, {
                      type: "line",
                      opts: opts.value,
                      chartData: chartData.value
                    }, null, 8, ["opts", "chartData"])
                  ])
                ])
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesPlanIndex = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "D:/subject-analyze/pages/plan/index.vue"]]);
  const props$8 = defineMixin({
    props: {
      // 输入框的内容
      value: {
        type: [String, Number],
        default: () => props$w.textarea.value
      },
      // 输入框的内容
      modelValue: {
        type: [String, Number],
        default: () => props$w.textarea.value
      },
      // 输入框为空时占位符
      placeholder: {
        type: [String, Number],
        default: () => props$w.textarea.placeholder
      },
      // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
      placeholderClass: {
        type: String,
        default: () => props$w.input.placeholderClass
      },
      // 指定placeholder的样式
      placeholderStyle: {
        type: [String, Object],
        default: () => props$w.input.placeholderStyle
      },
      // 输入框高度
      height: {
        type: [String, Number],
        default: () => props$w.textarea.height
      },
      // 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效
      confirmType: {
        type: String,
        default: () => props$w.textarea.confirmType
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: () => props$w.textarea.disabled
      },
      // 是否显示统计字数
      count: {
        type: Boolean,
        default: () => props$w.textarea.count
      },
      // 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现
      focus: {
        type: Boolean,
        default: () => props$w.textarea.focus
      },
      // 是否自动增加高度
      autoHeight: {
        type: Boolean,
        default: () => props$w.textarea.autoHeight
      },
      // 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true
      fixed: {
        type: Boolean,
        default: () => props$w.textarea.fixed
      },
      // 指定光标与键盘的距离
      cursorSpacing: {
        type: Number,
        default: () => props$w.textarea.cursorSpacing
      },
      // 指定focus时的光标位置
      cursor: {
        type: [String, Number],
        default: () => props$w.textarea.cursor
      },
      // 是否显示键盘上方带有”完成“按钮那一栏，
      showConfirmBar: {
        type: Boolean,
        default: () => props$w.textarea.showConfirmBar
      },
      // 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
      selectionStart: {
        type: Number,
        default: () => props$w.textarea.selectionStart
      },
      // 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
      selectionEnd: {
        type: Number,
        default: () => props$w.textarea.selectionEnd
      },
      // 键盘弹起时，是否自动上推页面
      adjustPosition: {
        type: Boolean,
        default: () => props$w.textarea.adjustPosition
      },
      // 是否去掉 iOS 下的默认内边距，只微信小程序有效
      disableDefaultPadding: {
        type: Boolean,
        default: () => props$w.textarea.disableDefaultPadding
      },
      // focus时，点击页面的时候不收起键盘，只微信小程序有效
      holdKeyboard: {
        type: Boolean,
        default: () => props$w.textarea.holdKeyboard
      },
      // 最大输入长度，设置为 -1 的时候不限制最大长度
      maxlength: {
        type: [String, Number],
        default: () => props$w.textarea.maxlength
      },
      // 边框类型，surround-四周边框，bottom-底部边框
      border: {
        type: String,
        default: () => props$w.textarea.border
      },
      // 用于处理或者过滤输入框内容的方法
      formatter: {
        type: [Function, null],
        default: () => props$w.textarea.formatter
      },
      // 是否忽略组件内对文本合成系统事件的处理
      ignoreCompositionEvent: {
        type: Boolean,
        default: true
      }
    }
  });
  const _sfc_main$i = {
    name: "u-textarea",
    mixins: [mpMixin, mixin, props$8],
    data() {
      return {
        // 输入框的值
        innerValue: "",
        // 是否处于获得焦点状态
        focused: false,
        // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
        firstChange: true,
        // value绑定值的变化是由内部还是外部引起的
        changeFromInner: false,
        // 过滤处理方法
        innerFormatter: (value2) => value2
      };
    },
    created() {
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          this.innerValue = newVal;
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      // 组件的类名
      textareaClass() {
        let classes = [], { border, disabled } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-textarea--radius"]));
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-textarea--no-radius"
        ]));
        disabled && classes.push("u-textarea--disabled");
        return classes.join(" ");
      },
      // 组件的样式
      textareaStyle() {
        const style = {};
        return deepMerge$3(style, addStyle(this.customStyle));
      }
    },
    emits: ["update:modelValue", "linechange", "focus", "blur", "change", "confirm", "keyboardheightchange"],
    methods: {
      addStyle,
      addUnit,
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e2) {
        this.innerFormatter = e2;
      },
      onFocus(e2) {
        this.$emit("focus", e2);
      },
      onBlur(e2) {
        this.$emit("blur", e2);
        formValidate(this, "blur");
      },
      onLinechange(e2) {
        this.$emit("linechange", e2);
      },
      onInput(e2) {
        let { value: value2 = "" } = e2.detail || {};
        const formatter = this.formatter || this.innerFormatter;
        const formatValue = formatter(value2);
        this.innerValue = value2;
        this.$nextTick(() => {
          this.innerValue = formatValue;
          this.valueChange();
        });
      },
      // 内容发生变化，进行处理
      valueChange() {
        const value2 = this.innerValue;
        this.$nextTick(() => {
          this.$emit("update:modelValue", value2);
          this.changeFromInner = true;
          this.$emit("change", value2);
          formValidate(this, "change");
        });
      },
      onConfirm(e2) {
        this.$emit("confirm", e2);
      },
      onKeyboardheightchange(e2) {
        this.$emit("keyboardheightchange", e2);
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-textarea", $options.textareaClass]),
        style: vue.normalizeStyle([$options.textareaStyle])
      },
      [
        vue.createElementVNode("textarea", {
          class: "u-textarea__field",
          value: $data.innerValue,
          style: vue.normalizeStyle({ height: $options.addUnit(_ctx.height) }),
          placeholder: _ctx.placeholder,
          "placeholder-style": $options.addStyle(_ctx.placeholderStyle, "string"),
          "placeholder-class": _ctx.placeholderClass,
          disabled: _ctx.disabled,
          focus: _ctx.focus,
          autoHeight: _ctx.autoHeight,
          fixed: _ctx.fixed,
          cursorSpacing: _ctx.cursorSpacing,
          cursor: _ctx.cursor,
          showConfirmBar: _ctx.showConfirmBar,
          selectionStart: _ctx.selectionStart,
          selectionEnd: _ctx.selectionEnd,
          adjustPosition: _ctx.adjustPosition,
          disableDefaultPadding: _ctx.disableDefaultPadding,
          holdKeyboard: _ctx.holdKeyboard,
          maxlength: _ctx.maxlength,
          "confirm-type": _ctx.confirmType,
          ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
          onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onLinechange: _cache[2] || (_cache[2] = (...args) => $options.onLinechange && $options.onLinechange(...args)),
          onInput: _cache[3] || (_cache[3] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
          onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
        }, null, 44, ["value", "placeholder", "placeholder-style", "placeholder-class", "disabled", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "confirm-type", "ignoreCompositionEvent"]),
        _ctx.count ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: "u-textarea__count",
            style: vue.normalizeStyle({
              "background-color": _ctx.disabled ? "transparent" : "#fff"
            })
          },
          vue.toDisplayString($data.innerValue.length) + "/" + vue.toDisplayString(_ctx.maxlength),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$c], ["__scopeId", "data-v-31706dd7"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-textarea/u-textarea.vue"]]);
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format2, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format2.length) {
      let char = format2[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format2[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format2[position++];
        }
        const isClosed = char === endDelimiter;
        const type2 = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type: type2 });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en$1 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages = {
    en: en$1,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform$2;
  setTimeout(() => {
    platform$2 = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$h = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform: platform$2,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZV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"
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page2 = pages2[pages2.length - 1];
      var currentWebview = page2.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--android-MP"
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--ios-H5"
        },
        [
          vue.createElementVNode("image", {
            src: $data.imgBase64,
            mode: "widthFix"
          }, null, 8, ["src"])
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "uni-load-more__text",
          style: vue.normalizeStyle({ color: $props.color })
        },
        vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$b], ["__scopeId", "data-v-9245e42c"], ["__file", "D:/subject-analyze/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$g = {
    name: "uniDataChecklist",
    mixins: [Vs.mixinDatacom || {}],
    emits: ["input", "update:modelValue", "change"],
    props: {
      mode: {
        type: String,
        default: "default"
      },
      multiple: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      // TODO vue3
      modelValue: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      min: {
        type: [Number, String],
        default: ""
      },
      max: {
        type: [Number, String],
        default: ""
      },
      wrap: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: "left"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      selectedTextColor: {
        type: String,
        default: ""
      },
      emptyText: {
        type: String,
        default: "暂无数据"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    watch: {
      localdata: {
        handler(newVal) {
          this.range = newVal;
          this.dataList = this.getDataList(this.getSelectedValue(newVal));
        },
        deep: true
      },
      mixinDatacomResData(newVal) {
        this.range = newVal;
        this.dataList = this.getDataList(this.getSelectedValue(newVal));
      },
      value(newVal) {
        this.dataList = this.getDataList(newVal);
      },
      modelValue(newVal) {
        this.dataList = this.getDataList(newVal);
      }
    },
    data() {
      return {
        dataList: [],
        range: [],
        contentText: {
          contentdown: "查看更多",
          contentrefresh: "加载中",
          contentnomore: "没有更多"
        },
        isLocal: true,
        styles: {
          selectedColor: "#2979ff",
          selectedTextColor: "#666"
        },
        isTop: 0
      };
    },
    computed: {
      dataValue() {
        if (this.value === "")
          return this.modelValue;
        if (this.modelValue === "")
          return this.value;
        return this.value;
      }
    },
    created() {
      if (this.localdata && this.localdata.length !== 0) {
        this.isLocal = true;
        this.range = this.localdata;
        this.dataList = this.getDataList(this.getSelectedValue(this.range));
      } else {
        if (this.collection) {
          this.isLocal = false;
          this.loadData();
        }
      }
    },
    methods: {
      loadData() {
        this.mixinDatacomGet().then((res) => {
          this.mixinDatacomResData = res.result.data;
          if (this.mixinDatacomResData.length === 0) {
            this.isLocal = false;
            this.mixinDatacomErrorMessage = this.emptyText;
          } else {
            this.isLocal = true;
          }
        }).catch((err) => {
          this.mixinDatacomErrorMessage = err.message;
        });
      },
      /**
       * 获取父元素实例
       */
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      change(e2) {
        const values = e2.detail.value;
        let detail = {
          value: [],
          data: []
        };
        if (this.multiple) {
          this.range.forEach((item) => {
            if (values.includes(item[this.map.value] + "")) {
              detail.value.push(item[this.map.value]);
              detail.data.push(item);
            }
          });
        } else {
          const range2 = this.range.find((item) => item[this.map.value] + "" === values);
          if (range2) {
            detail = {
              value: range2[this.map.value],
              data: range2
            };
          }
        }
        this.$emit("input", detail.value);
        this.$emit("update:modelValue", detail.value);
        this.$emit("change", {
          detail
        });
        if (this.multiple) {
          this.dataList = this.getDataList(detail.value, true);
        } else {
          this.dataList = this.getDataList(detail.value);
        }
      },
      /**
       * 获取渲染的新数组
       * @param {Object} value 选中内容
       */
      getDataList(value2) {
        let dataList = JSON.parse(JSON.stringify(this.range));
        let list = [];
        if (this.multiple) {
          if (!Array.isArray(value2)) {
            value2 = [];
          }
        }
        dataList.forEach((item, index2) => {
          item.disabled = item.disable || item.disabled || false;
          if (this.multiple) {
            if (value2.length > 0) {
              let have = value2.find((val) => val === item[this.map.value]);
              item.selected = have !== void 0;
            } else {
              item.selected = false;
            }
          } else {
            item.selected = value2 === item[this.map.value];
          }
          list.push(item);
        });
        return this.setRange(list);
      },
      /**
       * 处理最大最小值
       * @param {Object} list
       */
      setRange(list) {
        let selectList = list.filter((item) => item.selected);
        let min = Number(this.min) || 0;
        let max = Number(this.max) || "";
        list.forEach((item, index2) => {
          if (this.multiple) {
            if (selectList.length <= min) {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have !== void 0) {
                item.disabled = true;
              }
            }
            if (selectList.length >= max && max !== "") {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have === void 0) {
                item.disabled = true;
              }
            }
          }
          this.setStyles(item, index2);
          list[index2] = item;
        });
        return list;
      },
      /**
       * 设置 class
       * @param {Object} item
       * @param {Object} index
       */
      setStyles(item, index2) {
        item.styleBackgroud = this.setStyleBackgroud(item);
        item.styleIcon = this.setStyleIcon(item);
        item.styleIconText = this.setStyleIconText(item);
        item.styleRightIcon = this.setStyleRightIcon(item);
      },
      /**
       * 获取选中值
       * @param {Object} range
       */
      getSelectedValue(range2) {
        if (!this.multiple)
          return this.dataValue;
        let selectedArr = [];
        range2.forEach((item) => {
          if (item.selected) {
            selectedArr.push(item[this.map.value]);
          }
        });
        return this.dataValue.length > 0 ? this.dataValue : selectedArr;
      },
      /**
       * 设置背景样式
       */
      setStyleBackgroud(item) {
        let styles = {};
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        if (this.selectedColor) {
          if (this.mode !== "list") {
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
          if (this.mode === "tag") {
            styles["background-color"] = item.selected ? selectedColor : "#f5f5f5";
          }
        }
        let classles = "";
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIcon(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          styles["background-color"] = item.selected ? selectedColor : "#fff";
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          if (!item.selected && item.disabled) {
            styles["background-color"] = "#F2F6FC";
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIconText(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          if (this.mode === "tag") {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : "#fff" : "#666";
          } else {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : selectedColor : "#666";
          }
          if (!item.selected && item.disabled) {
            styles.color = "#999";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleRightIcon(item) {
        let styles = {};
        let classles = "";
        if (this.mode === "list") {
          styles["border-color"] = item.selected ? this.styles.selectedColor : "#DCDFE6";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "uni-data-checklist",
        style: vue.normalizeStyle({ "margin-top": $data.isTop + "px" })
      },
      [
        !$data.isLocal ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-data-loading"
        }, [
          !_ctx.mixinDatacomErrorMessage ? (vue.openBlock(), vue.createBlock(_component_uni_load_more, {
            key: 0,
            status: "loading",
            iconType: "snow",
            iconSize: 18,
            "content-text": $data.contentText
          }, null, 8, ["content-text"])) : (vue.openBlock(), vue.createElementBlock(
            "text",
            { key: 1 },
            vue.toDisplayString(_ctx.mixinDatacomErrorMessage),
            1
            /* TEXT */
          ))
        ])) : (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 1 },
          [
            $props.multiple ? (vue.openBlock(), vue.createElementBlock(
              "checkbox-group",
              {
                key: 0,
                class: vue.normalizeClass(["checklist-group", { "is-list": $props.mode === "list" || $props.wrap }]),
                onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args))
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.dataList, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "label",
                      {
                        class: vue.normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index2 !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                        style: vue.normalizeStyle(item.styleBackgroud),
                        key: index2
                      },
                      [
                        vue.createElementVNode("checkbox", {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || !!item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "checkbox__inner",
                            style: vue.normalizeStyle(item.styleIcon)
                          },
                          [
                            vue.createElementVNode("view", { class: "checkbox__inner-icon" })
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            vue.createElementVNode(
                              "text",
                              {
                                class: "checklist-text",
                                style: vue.normalizeStyle(item.styleIconText)
                              },
                              vue.toDisplayString(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 0,
                                class: "checkobx__list",
                                style: vue.normalizeStyle(item.styleBackgroud)
                              },
                              null,
                              4
                              /* STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              34
              /* CLASS, NEED_HYDRATION */
            )) : (vue.openBlock(), vue.createElementBlock(
              "radio-group",
              {
                key: 1,
                class: vue.normalizeClass(["checklist-group", { "is-list": $props.mode === "list", "is-wrap": $props.wrap }]),
                onChange: _cache[1] || (_cache[1] = (...args) => $options.change && $options.change(...args))
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.dataList, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "label",
                      {
                        class: vue.normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index2 !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                        style: vue.normalizeStyle(item.styleBackgroud),
                        key: index2
                      },
                      [
                        vue.createElementVNode("radio", {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "radio__inner",
                            style: vue.normalizeStyle(item.styleBackgroud)
                          },
                          [
                            vue.createElementVNode(
                              "view",
                              {
                                class: "radio__inner-icon",
                                style: vue.normalizeStyle(item.styleIcon)
                              },
                              null,
                              4
                              /* STYLE */
                            )
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            vue.createElementVNode(
                              "text",
                              {
                                class: "checklist-text",
                                style: vue.normalizeStyle(item.styleIconText)
                              },
                              vue.toDisplayString(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 0,
                                style: vue.normalizeStyle(item.styleRightIcon),
                                class: "checkobx__list"
                              },
                              null,
                              4
                              /* STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              34
              /* CLASS, NEED_HYDRATION */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$a], ["__scopeId", "data-v-2f788efd"], ["__file", "D:/subject-analyze/uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue"]]);
  const props$7 = defineMixin({
    props: {
      // 是否显示遮罩
      show: {
        type: Boolean,
        default: () => props$w.overlay.show
      },
      // 层级z-index
      zIndex: {
        type: [String, Number],
        default: () => props$w.overlay.zIndex
      },
      // 遮罩的过渡时间，单位为ms
      duration: {
        type: [String, Number],
        default: () => props$w.overlay.duration
      },
      // 不透明度值，当做rgba的第四个参数
      opacity: {
        type: [String, Number],
        default: () => props$w.overlay.opacity
      }
    }
  });
  const _sfc_main$f = {
    name: "u-overlay",
    mixins: [mpMixin, mixin, props$7],
    computed: {
      overlayStyle() {
        const style = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: this.zIndex,
          bottom: 0,
          "background-color": `rgba(0, 0, 0, ${this.opacity})`
        };
        return deepMerge$3(style, addStyle(this.customStyle));
      }
    },
    emits: ["click"],
    methods: {
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_1$7);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      show: _ctx.show,
      "custom-class": "u-overlay",
      duration: _ctx.duration,
      "custom-style": $options.overlayStyle,
      onClick: $options.clickHandler
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "duration", "custom-style", "onClick"]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$9], ["__scopeId", "data-v-35f7c3e5"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-overlay/u-overlay.vue"]]);
  const props$6 = defineMixin({
    props: {}
  });
  const _sfc_main$e = {
    name: "u-safe-bottom",
    mixins: [mpMixin, mixin, props$6],
    data() {
      return {
        safeAreaBottomHeight: 0,
        isNvue: false
      };
    },
    computed: {
      style() {
        const style = {};
        return deepMerge$3(style, addStyle(this.customStyle));
      }
    },
    mounted() {
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-safe-bottom", [!$data.isNvue && "u-safe-area-inset-bottom"]]),
        style: vue.normalizeStyle([$options.style])
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$8], ["__scopeId", "data-v-3ec581de"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-safe-bottom/u-safe-bottom.vue"]]);
  const props$5 = defineMixin({
    props: {
      // 是否展示弹窗
      show: {
        type: Boolean,
        default: () => props$w.popup.show
      },
      // 是否显示遮罩
      overlay: {
        type: Boolean,
        default: () => props$w.popup.overlay
      },
      // 弹出的方向，可选值为 top bottom right left center
      mode: {
        type: String,
        default: () => props$w.popup.mode
      },
      // 动画时长，单位ms
      duration: {
        type: [String, Number],
        default: () => props$w.popup.duration
      },
      // 是否显示关闭图标
      closeable: {
        type: Boolean,
        default: () => props$w.popup.closeable
      },
      // 自定义遮罩的样式
      overlayStyle: {
        type: [Object, String],
        default: () => props$w.popup.overlayStyle
      },
      // 点击遮罩是否关闭弹窗
      closeOnClickOverlay: {
        type: Boolean,
        default: () => props$w.popup.closeOnClickOverlay
      },
      // 层级
      zIndex: {
        type: [String, Number],
        default: () => props$w.popup.zIndex
      },
      // 是否为iPhoneX留出底部安全距离
      safeAreaInsetBottom: {
        type: Boolean,
        default: () => props$w.popup.safeAreaInsetBottom
      },
      // 是否留出顶部安全距离（状态栏高度）
      safeAreaInsetTop: {
        type: Boolean,
        default: () => props$w.popup.safeAreaInsetTop
      },
      // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
      closeIconPos: {
        type: String,
        default: () => props$w.popup.closeIconPos
      },
      // 是否显示圆角
      round: {
        type: [Boolean, String, Number],
        default: () => props$w.popup.round
      },
      // mode=center，也即中部弹出时，是否使用缩放模式
      zoom: {
        type: Boolean,
        default: () => props$w.popup.zoom
      },
      // 弹窗背景色，设置为transparent可去除白色背景
      bgColor: {
        type: String,
        default: () => props$w.popup.bgColor
      },
      // 遮罩的透明度，0-1之间
      overlayOpacity: {
        type: [Number, String],
        default: () => props$w.popup.overlayOpacity
      }
    }
  });
  const _sfc_main$d = {
    name: "u-popup",
    mixins: [mpMixin, mixin, props$5],
    data() {
      return {
        overlayDuration: this.duration + 50
      };
    },
    watch: {
      show(newValue, oldValue) {
      }
    },
    computed: {
      transitionStyle() {
        const style = {
          zIndex: this.zIndex,
          position: "fixed",
          display: "flex"
        };
        style[this.mode] = 0;
        if (this.mode === "left") {
          return deepMerge$3(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "right") {
          return deepMerge$3(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "top") {
          return deepMerge$3(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "bottom") {
          return deepMerge$3(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "center") {
          return deepMerge$3(style, {
            alignItems: "center",
            "justify-content": "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          });
        }
      },
      contentStyle() {
        const style = {};
        sys();
        if (this.mode !== "center") {
          style.flex = 1;
        }
        if (this.bgColor) {
          style.backgroundColor = this.bgColor;
        }
        if (this.round) {
          const value2 = addUnit(this.round);
          if (this.mode === "top") {
            style.borderBottomLeftRadius = value2;
            style.borderBottomRightRadius = value2;
          } else if (this.mode === "bottom") {
            style.borderTopLeftRadius = value2;
            style.borderTopRightRadius = value2;
          } else if (this.mode === "center") {
            style.borderRadius = value2;
          }
        }
        return deepMerge$3(style, addStyle(this.customStyle));
      },
      position() {
        if (this.mode === "center") {
          return this.zoom ? "fade-zoom" : "fade";
        }
        if (this.mode === "left") {
          return "slide-left";
        }
        if (this.mode === "right") {
          return "slide-right";
        }
        if (this.mode === "bottom") {
          return "slide-up";
        }
        if (this.mode === "top") {
          return "slide-down";
        }
      }
    },
    emits: ["open", "close", "click"],
    methods: {
      // 点击遮罩
      overlayClick() {
        if (this.closeOnClickOverlay) {
          this.$emit("close");
        }
      },
      close(e2) {
        this.$emit("close");
      },
      afterEnter() {
        this.$emit("open");
      },
      clickHandler() {
        if (this.mode === "center") {
          this.overlayClick();
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_0$1);
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_1$5);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$b);
    const _component_u_safe_bottom = resolveEasycom(vue.resolveDynamicComponent("u-safe-bottom"), __easycom_3$1);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_1$7);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-popup", [_ctx.customClass]])
      },
      [
        _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_u_overlay, {
          key: 0,
          show: _ctx.show,
          onClick: $options.overlayClick,
          zIndex: _ctx.zIndex,
          duration: $data.overlayDuration,
          customStyle: _ctx.overlayStyle,
          opacity: _ctx.overlayOpacity
        }, null, 8, ["show", "onClick", "zIndex", "duration", "customStyle", "opacity"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_u_transition, {
          show: _ctx.show,
          customStyle: $options.transitionStyle,
          mode: $options.position,
          duration: _ctx.duration,
          onAfterEnter: $options.afterEnter,
          onClick: $options.clickHandler
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode(
              "view",
              {
                class: "u-popup__content",
                style: vue.normalizeStyle([$options.contentStyle]),
                onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop"]))
              },
              [
                _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
                _ctx.closeable ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 1,
                    onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.close && $options.close(...args), ["stop"])),
                    class: vue.normalizeClass(["u-popup__content__close", ["u-popup__content__close--" + _ctx.closeIconPos]]),
                    "hover-class": "u-popup__content__close--hover",
                    "hover-stay-time": "150"
                  },
                  [
                    vue.createVNode(_component_u_icon, {
                      name: "close",
                      color: "#909399",
                      size: "18",
                      bold: ""
                    })
                  ],
                  2
                  /* CLASS */
                )) : vue.createCommentVNode("v-if", true),
                _ctx.safeAreaInsetBottom ? (vue.openBlock(), vue.createBlock(_component_u_safe_bottom, { key: 2 })) : vue.createCommentVNode("v-if", true)
              ],
              4
              /* STYLE */
            )
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["show", "customStyle", "mode", "duration", "onAfterEnter", "onClick"])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$7], ["__scopeId", "data-v-74921bef"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-popup/u-popup.vue"]]);
  const _sfc_main$c = {
    name: "u-calendar-header",
    mixins: [mpMixin, mixin],
    props: {
      // 标题
      title: {
        type: String,
        default: ""
      },
      // 副标题
      subtitle: {
        type: String,
        default: ""
      },
      // 是否显示标题
      showTitle: {
        type: Boolean,
        default: true
      },
      // 是否显示副标题
      showSubtitle: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {};
    },
    methods: {
      name() {
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-calendar-header u-border-bottom" }, [
      $props.showTitle ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: "u-calendar-header__title"
        },
        vue.toDisplayString($props.title),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      $props.showSubtitle ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 1,
          class: "u-calendar-header__subtitle"
        },
        vue.toDisplayString($props.subtitle),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "u-calendar-header__weekdays" }, [
        vue.createElementVNode("text", { class: "u-calendar-header__weekdays__weekday" }, "一"),
        vue.createElementVNode("text", { class: "u-calendar-header__weekdays__weekday" }, "二"),
        vue.createElementVNode("text", { class: "u-calendar-header__weekdays__weekday" }, "三"),
        vue.createElementVNode("text", { class: "u-calendar-header__weekdays__weekday" }, "四"),
        vue.createElementVNode("text", { class: "u-calendar-header__weekdays__weekday" }, "五"),
        vue.createElementVNode("text", { class: "u-calendar-header__weekdays__weekday" }, "六"),
        vue.createElementVNode("text", { class: "u-calendar-header__weekdays__weekday" }, "日")
      ])
    ]);
  }
  const uHeader = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$6], ["__scopeId", "data-v-31c8bd61"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-calendar/header.vue"]]);
  var SECONDS_A_MINUTE = 60;
  var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
  var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
  var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
  var MILLISECONDS_A_SECOND = 1e3;
  var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
  var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
  var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
  var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
  var MS = "millisecond";
  var S = "second";
  var MIN = "minute";
  var H = "hour";
  var D = "day";
  var W = "week";
  var M = "month";
  var Q = "quarter";
  var Y = "year";
  var DATE = "date";
  var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
  var INVALID_DATE_STRING = "Invalid Date";
  var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
  var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
  const en = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    ordinal: function ordinal(n2) {
      var s2 = ["th", "st", "nd", "rd"];
      var v2 = n2 % 100;
      return "[" + n2 + (s2[(v2 - 20) % 10] || s2[v2] || s2[0]) + "]";
    }
  };
  var padStart = function padStart2(string2, length, pad) {
    var s2 = String(string2);
    if (!s2 || s2.length >= length)
      return string2;
    return "" + Array(length + 1 - s2.length).join(pad) + string2;
  };
  var padZoneStr = function padZoneStr2(instance) {
    var negMinutes = -instance.utcOffset();
    var minutes = Math.abs(negMinutes);
    var hourOffset = Math.floor(minutes / 60);
    var minuteOffset = minutes % 60;
    return (negMinutes <= 0 ? "+" : "-") + padStart(hourOffset, 2, "0") + ":" + padStart(minuteOffset, 2, "0");
  };
  var monthDiff = function monthDiff2(a2, b2) {
    if (a2.date() < b2.date())
      return -monthDiff2(b2, a2);
    var wholeMonthDiff = (b2.year() - a2.year()) * 12 + (b2.month() - a2.month());
    var anchor = a2.clone().add(wholeMonthDiff, M);
    var c2 = b2 - anchor < 0;
    var anchor2 = a2.clone().add(wholeMonthDiff + (c2 ? -1 : 1), M);
    return +(-(wholeMonthDiff + (b2 - anchor) / (c2 ? anchor - anchor2 : anchor2 - anchor)) || 0);
  };
  var absFloor = function absFloor2(n2) {
    return n2 < 0 ? Math.ceil(n2) || 0 : Math.floor(n2);
  };
  var prettyUnit = function prettyUnit2(u2) {
    var special = {
      M,
      y: Y,
      w: W,
      d: D,
      D: DATE,
      h: H,
      m: MIN,
      s: S,
      ms: MS,
      Q
    };
    return special[u2] || String(u2 || "").toLowerCase().replace(/s$/, "");
  };
  var isUndefined$1 = function isUndefined2(s2) {
    return s2 === void 0;
  };
  const U = {
    s: padStart,
    z: padZoneStr,
    m: monthDiff,
    a: absFloor,
    p: prettyUnit,
    u: isUndefined$1
  };
  var L = "en";
  var Ls = {};
  Ls[L] = en;
  var IS_DAYJS = "$isDayjsObject";
  var isDayjs = function isDayjs2(d2) {
    return d2 instanceof Dayjs || !!(d2 && d2[IS_DAYJS]);
  };
  var parseLocale = function parseLocale2(preset, object3, isLocal) {
    var l2;
    if (!preset)
      return L;
    if (typeof preset === "string") {
      var presetLower = preset.toLowerCase();
      if (Ls[presetLower]) {
        l2 = presetLower;
      }
      if (object3) {
        Ls[presetLower] = object3;
        l2 = presetLower;
      }
      var presetSplit = preset.split("-");
      if (!l2 && presetSplit.length > 1) {
        return parseLocale2(presetSplit[0]);
      }
    } else {
      var name = preset.name;
      Ls[name] = preset;
      l2 = name;
    }
    if (!isLocal && l2)
      L = l2;
    return l2 || !isLocal && L;
  };
  var dayjs = function dayjs2(date3, c2) {
    if (isDayjs(date3)) {
      return date3.clone();
    }
    var cfg = typeof c2 === "object" ? c2 : {};
    cfg.date = date3;
    cfg.args = arguments;
    return new Dayjs(cfg);
  };
  var wrapper = function wrapper2(date3, instance) {
    return dayjs(date3, {
      locale: instance.$L,
      utc: instance.$u,
      x: instance.$x,
      $offset: instance.$offset
      // todo: refactor; do not use this.$offset in you code
    });
  };
  var Utils = U;
  Utils.l = parseLocale;
  Utils.i = isDayjs;
  Utils.w = wrapper;
  var parseDate = function parseDate2(cfg) {
    var date3 = cfg.date, utc = cfg.utc;
    if (date3 === null)
      return /* @__PURE__ */ new Date(NaN);
    if (Utils.u(date3))
      return /* @__PURE__ */ new Date();
    if (date3 instanceof Date)
      return new Date(date3);
    if (typeof date3 === "string" && !/Z$/i.test(date3)) {
      var d2 = date3.match(REGEX_PARSE);
      if (d2) {
        var m2 = d2[2] - 1 || 0;
        var ms2 = (d2[7] || "0").substring(0, 3);
        if (utc) {
          return new Date(Date.UTC(d2[1], m2, d2[3] || 1, d2[4] || 0, d2[5] || 0, d2[6] || 0, ms2));
        }
        return new Date(d2[1], m2, d2[3] || 1, d2[4] || 0, d2[5] || 0, d2[6] || 0, ms2);
      }
    }
    return new Date(date3);
  };
  var Dayjs = /* @__PURE__ */ function() {
    function Dayjs2(cfg) {
      this.$L = parseLocale(cfg.locale, null, true);
      this.parse(cfg);
      this.$x = this.$x || cfg.x || {};
      this[IS_DAYJS] = true;
    }
    var _proto = Dayjs2.prototype;
    _proto.parse = function parse2(cfg) {
      this.$d = parseDate(cfg);
      this.init();
    };
    _proto.init = function init() {
      var $d = this.$d;
      this.$y = $d.getFullYear();
      this.$M = $d.getMonth();
      this.$D = $d.getDate();
      this.$W = $d.getDay();
      this.$H = $d.getHours();
      this.$m = $d.getMinutes();
      this.$s = $d.getSeconds();
      this.$ms = $d.getMilliseconds();
    };
    _proto.$utils = function $utils() {
      return Utils;
    };
    _proto.isValid = function isValid() {
      return !(this.$d.toString() === INVALID_DATE_STRING);
    };
    _proto.isSame = function isSame(that, units) {
      var other = dayjs(that);
      return this.startOf(units) <= other && other <= this.endOf(units);
    };
    _proto.isAfter = function isAfter(that, units) {
      return dayjs(that) < this.startOf(units);
    };
    _proto.isBefore = function isBefore(that, units) {
      return this.endOf(units) < dayjs(that);
    };
    _proto.$g = function $g(input, get, set) {
      if (Utils.u(input))
        return this[get];
      return this.set(set, input);
    };
    _proto.unix = function unix() {
      return Math.floor(this.valueOf() / 1e3);
    };
    _proto.valueOf = function valueOf() {
      return this.$d.getTime();
    };
    _proto.startOf = function startOf(units, _startOf) {
      var _this = this;
      var isStartOf = !Utils.u(_startOf) ? _startOf : true;
      var unit = Utils.p(units);
      var instanceFactory = function instanceFactory2(d2, m2) {
        var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m2, d2) : new Date(_this.$y, m2, d2), _this);
        return isStartOf ? ins : ins.endOf(D);
      };
      var instanceFactorySet = function instanceFactorySet2(method, slice) {
        var argumentStart = [0, 0, 0, 0];
        var argumentEnd = [23, 59, 59, 999];
        return Utils.w(_this.toDate()[method].apply(
          // eslint-disable-line prefer-spread
          _this.toDate("s"),
          (isStartOf ? argumentStart : argumentEnd).slice(slice)
        ), _this);
      };
      var $W = this.$W, $M = this.$M, $D = this.$D;
      var utcPad = "set" + (this.$u ? "UTC" : "");
      switch (unit) {
        case Y:
          return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
        case M:
          return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
        case W: {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }
        case D:
        case DATE:
          return instanceFactorySet(utcPad + "Hours", 0);
        case H:
          return instanceFactorySet(utcPad + "Minutes", 1);
        case MIN:
          return instanceFactorySet(utcPad + "Seconds", 2);
        case S:
          return instanceFactorySet(utcPad + "Milliseconds", 3);
        default:
          return this.clone();
      }
    };
    _proto.endOf = function endOf(arg) {
      return this.startOf(arg, false);
    };
    _proto.$set = function $set(units, _int) {
      var _C$D$C$DATE$C$M$C$Y$C;
      var unit = Utils.p(units);
      var utcPad = "set" + (this.$u ? "UTC" : "");
      var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
      var arg = unit === D ? this.$D + (_int - this.$W) : _int;
      if (unit === M || unit === Y) {
        var date3 = this.clone().set(DATE, 1);
        date3.$d[name](arg);
        date3.init();
        this.$d = date3.set(DATE, Math.min(this.$D, date3.daysInMonth())).$d;
      } else if (name)
        this.$d[name](arg);
      this.init();
      return this;
    };
    _proto.set = function set(string2, _int2) {
      return this.clone().$set(string2, _int2);
    };
    _proto.get = function get(unit) {
      return this[Utils.p(unit)]();
    };
    _proto.add = function add(number3, units) {
      var _this2 = this, _C$MIN$C$H$C$S$unit;
      number3 = Number(number3);
      var unit = Utils.p(units);
      var instanceFactorySet = function instanceFactorySet2(n2) {
        var d2 = dayjs(_this2);
        return Utils.w(d2.date(d2.date() + Math.round(n2 * number3)), _this2);
      };
      if (unit === M) {
        return this.set(M, this.$M + number3);
      }
      if (unit === Y) {
        return this.set(Y, this.$y + number3);
      }
      if (unit === D) {
        return instanceFactorySet(1);
      }
      if (unit === W) {
        return instanceFactorySet(7);
      }
      var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1;
      var nextTimeStamp = this.$d.getTime() + number3 * step;
      return Utils.w(nextTimeStamp, this);
    };
    _proto.subtract = function subtract(number3, string2) {
      return this.add(number3 * -1, string2);
    };
    _proto.format = function format2(formatStr) {
      var _this3 = this;
      var locale = this.$locale();
      if (!this.isValid())
        return locale.invalidDate || INVALID_DATE_STRING;
      var str = formatStr || FORMAT_DEFAULT;
      var zoneStr = Utils.z(this);
      var $H = this.$H, $m = this.$m, $M = this.$M;
      var weekdays = locale.weekdays, months = locale.months, meridiem = locale.meridiem;
      var getShort = function getShort2(arr, index2, full, length) {
        return arr && (arr[index2] || arr(_this3, str)) || full[index2].slice(0, length);
      };
      var get$H = function get$H2(num) {
        return Utils.s($H % 12 || 12, num, "0");
      };
      var meridiemFunc = meridiem || function(hour, minute, isLowercase) {
        var m2 = hour < 12 ? "AM" : "PM";
        return isLowercase ? m2.toLowerCase() : m2;
      };
      var matches = function matches2(match) {
        switch (match) {
          case "YY":
            return String(_this3.$y).slice(-2);
          case "YYYY":
            return Utils.s(_this3.$y, 4, "0");
          case "M":
            return $M + 1;
          case "MM":
            return Utils.s($M + 1, 2, "0");
          case "MMM":
            return getShort(locale.monthsShort, $M, months, 3);
          case "MMMM":
            return getShort(months, $M);
          case "D":
            return _this3.$D;
          case "DD":
            return Utils.s(_this3.$D, 2, "0");
          case "d":
            return String(_this3.$W);
          case "dd":
            return getShort(locale.weekdaysMin, _this3.$W, weekdays, 2);
          case "ddd":
            return getShort(locale.weekdaysShort, _this3.$W, weekdays, 3);
          case "dddd":
            return weekdays[_this3.$W];
          case "H":
            return String($H);
          case "HH":
            return Utils.s($H, 2, "0");
          case "h":
            return get$H(1);
          case "hh":
            return get$H(2);
          case "a":
            return meridiemFunc($H, $m, true);
          case "A":
            return meridiemFunc($H, $m, false);
          case "m":
            return String($m);
          case "mm":
            return Utils.s($m, 2, "0");
          case "s":
            return String(_this3.$s);
          case "ss":
            return Utils.s(_this3.$s, 2, "0");
          case "SSS":
            return Utils.s(_this3.$ms, 3, "0");
          case "Z":
            return zoneStr;
        }
        return null;
      };
      return str.replace(REGEX_FORMAT, function(match, $1) {
        return $1 || matches(match) || zoneStr.replace(":", "");
      });
    };
    _proto.utcOffset = function utcOffset() {
      return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
    };
    _proto.diff = function diff(input, units, _float) {
      var _this4 = this;
      var unit = Utils.p(units);
      var that = dayjs(input);
      var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
      var diff2 = this - that;
      var getMonth = function getMonth2() {
        return Utils.m(_this4, that);
      };
      var result;
      switch (unit) {
        case Y:
          result = getMonth() / 12;
          break;
        case M:
          result = getMonth();
          break;
        case Q:
          result = getMonth() / 3;
          break;
        case W:
          result = (diff2 - zoneDelta) / MILLISECONDS_A_WEEK;
          break;
        case D:
          result = (diff2 - zoneDelta) / MILLISECONDS_A_DAY;
          break;
        case H:
          result = diff2 / MILLISECONDS_A_HOUR;
          break;
        case MIN:
          result = diff2 / MILLISECONDS_A_MINUTE;
          break;
        case S:
          result = diff2 / MILLISECONDS_A_SECOND;
          break;
        default:
          result = diff2;
          break;
      }
      return _float ? result : Utils.a(result);
    };
    _proto.daysInMonth = function daysInMonth() {
      return this.endOf(M).$D;
    };
    _proto.$locale = function $locale() {
      return Ls[this.$L];
    };
    _proto.locale = function locale(preset, object3) {
      if (!preset)
        return this.$L;
      var that = this.clone();
      var nextLocaleName = parseLocale(preset, object3, true);
      if (nextLocaleName)
        that.$L = nextLocaleName;
      return that;
    };
    _proto.clone = function clone2() {
      return Utils.w(this.$d, this);
    };
    _proto.toDate = function toDate() {
      return new Date(this.valueOf());
    };
    _proto.toJSON = function toJSON() {
      return this.isValid() ? this.toISOString() : null;
    };
    _proto.toISOString = function toISOString() {
      return this.$d.toISOString();
    };
    _proto.toString = function toString2() {
      return this.$d.toUTCString();
    };
    return Dayjs2;
  }();
  var proto = Dayjs.prototype;
  dayjs.prototype = proto;
  [["$ms", MS], ["$s", S], ["$m", MIN], ["$H", H], ["$W", D], ["$M", M], ["$y", Y], ["$D", DATE]].forEach(function(g2) {
    proto[g2[1]] = function(input) {
      return this.$g(input, g2[0], g2[1]);
    };
  });
  dayjs.extend = function(plugin, option) {
    if (!plugin.$i) {
      plugin(option, Dayjs, dayjs);
      plugin.$i = true;
    }
    return dayjs;
  };
  dayjs.locale = parseLocale;
  dayjs.isDayjs = isDayjs;
  dayjs.unix = function(timestamp) {
    return dayjs(timestamp * 1e3);
  };
  dayjs.en = Ls[L];
  dayjs.Ls = Ls;
  dayjs.p = {};
  const _sfc_main$b = {
    name: "u-calendar-month",
    mixins: [mpMixin, mixin],
    props: {
      // 是否显示月份背景色
      showMark: {
        type: Boolean,
        default: true
      },
      // 主题色，对底部按钮和选中日期有效
      color: {
        type: String,
        default: "#3c9cff"
      },
      // 月份数据
      months: {
        type: Array,
        default: () => []
      },
      // 日期选择类型
      mode: {
        type: String,
        default: "single"
      },
      // 日期行高
      rowHeight: {
        type: [String, Number],
        default: 58
      },
      // mode=multiple时，最多可选多少个日期
      maxCount: {
        type: [String, Number],
        default: Infinity
      },
      // mode=range时，第一个日期底部的提示文字
      startText: {
        type: String,
        default: "开始"
      },
      // mode=range时，最后一个日期底部的提示文字
      endText: {
        type: String,
        default: "结束"
      },
      // 默认选中的日期，mode为multiple或range是必须为数组格式
      defaultDate: {
        type: [Array, String, Date],
        default: null
      },
      // 最小的可选日期
      minDate: {
        type: [String, Number],
        default: 0
      },
      // 最大可选日期
      maxDate: {
        type: [String, Number],
        default: 0
      },
      // 如果没有设置maxDate，则往后推多少个月
      maxMonth: {
        type: [String, Number],
        default: 2
      },
      // 是否为只读状态，只读状态下禁止选择日期
      readonly: {
        type: Boolean,
        default: () => props$w.calendar.readonly
      },
      // 日期区间最多可选天数，默认无限制，mode = range时有效
      maxRange: {
        type: [Number, String],
        default: Infinity
      },
      // 范围选择超过最多可选天数时的提示文案，mode = range时有效
      rangePrompt: {
        type: String,
        default: ""
      },
      // 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效
      showRangePrompt: {
        type: Boolean,
        default: true
      },
      // 是否允许日期范围的起止时间为同一天，mode = range时有效
      allowSameDay: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        // 每个日期的宽度
        width: 0,
        // 当前选中的日期item
        item: {},
        selected: []
      };
    },
    watch: {
      selectedChange: {
        immediate: true,
        handler(n2) {
          this.setDefaultDate();
        }
      }
    },
    computed: {
      // 多个条件的变化，会引起选中日期的变化，这里统一管理监听
      selectedChange() {
        return [this.minDate, this.maxDate, this.defaultDate];
      },
      dayStyle(index1, index2, item) {
        return (index12, index22, item2) => {
          const style = {};
          let week = item2.week;
          const dayWidth = Number(parseFloat(this.width / 7).toFixed(3).slice(0, -1));
          style.height = addUnit(this.rowHeight);
          if (index22 === 0) {
            week = (week === 0 ? 7 : week) - 1;
            style.marginLeft = addUnit(week * dayWidth);
          }
          if (this.mode === "range") {
            style.paddingLeft = 0;
            style.paddingRight = 0;
            style.paddingBottom = 0;
            style.paddingTop = 0;
          }
          return style;
        };
      },
      daySelectStyle() {
        return (index1, index2, item) => {
          let date3 = dayjs(item.date).format("YYYY-MM-DD"), style = {};
          if (this.selected.some((item2) => this.dateSame(item2, date3))) {
            style.backgroundColor = this.color;
          }
          if (this.mode === "single") {
            if (date3 === this.selected[0]) {
              style.borderTopLeftRadius = "3px";
              style.borderBottomLeftRadius = "3px";
              style.borderTopRightRadius = "3px";
              style.borderBottomRightRadius = "3px";
            }
          } else if (this.mode === "range") {
            if (this.selected.length >= 2) {
              const len = this.selected.length - 1;
              if (this.dateSame(date3, this.selected[0])) {
                style.borderTopLeftRadius = "3px";
                style.borderBottomLeftRadius = "3px";
              }
              if (this.dateSame(date3, this.selected[len])) {
                style.borderTopRightRadius = "3px";
                style.borderBottomRightRadius = "3px";
              }
              if (dayjs(date3).isAfter(dayjs(this.selected[0])) && dayjs(date3).isBefore(dayjs(this.selected[len]))) {
                style.backgroundColor = colorGradient(this.color, "#ffffff", 100)[90];
                style.opacity = 0.7;
              }
            } else if (this.selected.length === 1) {
              style.borderTopLeftRadius = "3px";
              style.borderBottomLeftRadius = "3px";
            }
          } else {
            if (this.selected.some((item2) => this.dateSame(item2, date3))) {
              style.borderTopLeftRadius = "3px";
              style.borderBottomLeftRadius = "3px";
              style.borderTopRightRadius = "3px";
              style.borderBottomRightRadius = "3px";
            }
          }
          return style;
        };
      },
      // 某个日期是否被选中
      textStyle() {
        return (item) => {
          const date3 = dayjs(item.date).format("YYYY-MM-DD"), style = {};
          if (this.selected.some((item2) => this.dateSame(item2, date3))) {
            style.color = "#ffffff";
          }
          if (this.mode === "range") {
            const len = this.selected.length - 1;
            if (dayjs(date3).isAfter(dayjs(this.selected[0])) && dayjs(date3).isBefore(dayjs(this.selected[len]))) {
              style.color = this.color;
            }
          }
          return style;
        };
      },
      // 获取底部的提示文字
      getBottomInfo() {
        return (index1, index2, item) => {
          const date3 = dayjs(item.date).format("YYYY-MM-DD");
          const bottomInfo = item.bottomInfo;
          if (this.mode === "range" && this.selected.length > 0) {
            if (this.selected.length === 1) {
              if (this.dateSame(date3, this.selected[0]))
                return this.startText;
              else
                return bottomInfo;
            } else {
              const len = this.selected.length - 1;
              if (this.dateSame(date3, this.selected[0]) && this.dateSame(date3, this.selected[1]) && len === 1) {
                return `${this.startText}/${this.endText}`;
              } else if (this.dateSame(date3, this.selected[0])) {
                return this.startText;
              } else if (this.dateSame(date3, this.selected[len])) {
                return this.endText;
              } else {
                return bottomInfo;
              }
            }
          } else {
            return bottomInfo;
          }
        };
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.$emit("monthSelected", this.selected);
        this.$nextTick(() => {
          sleep(10).then(() => {
            this.getWrapperWidth();
            this.getMonthRect();
          });
        });
      },
      // 判断两个日期是否相等
      dateSame(date1, date22) {
        return dayjs(date1).isSame(dayjs(date22));
      },
      // 获取月份数据区域的宽度，因为nvue不支持百分比，所以无法通过css设置每个日期item的宽度
      getWrapperWidth() {
        this.$uGetRect(".u-calendar-month-wrapper").then((size) => {
          this.width = size.width;
        });
      },
      getMonthRect() {
        const promiseAllArr = this.months.map((item, index2) => this.getMonthRectByPromise(
          `u-calendar-month-${index2}`
        ));
        Promise.all(promiseAllArr).then(
          (sizes) => {
            let height = 1;
            const topArr = [];
            for (let i2 = 0; i2 < this.months.length; i2++) {
              topArr[i2] = height;
              height += sizes[i2].height;
            }
            this.$emit("updateMonthTop", topArr);
          }
        );
      },
      // 获取每个月份区域的尺寸
      getMonthRectByPromise(el) {
        return new Promise((resolve) => {
          this.$uGetRect(`.${el}`).then((size) => {
            resolve(size);
          });
        });
      },
      // 点击某一个日期
      clickHandler(index1, index2, item) {
        if (this.readonly) {
          return;
        }
        this.item = item;
        const date3 = dayjs(item.date).format("YYYY-MM-DD");
        if (item.disabled)
          return;
        let selected = deepClone(this.selected);
        if (this.mode === "single") {
          selected = [date3];
        } else if (this.mode === "multiple") {
          if (selected.some((item2) => this.dateSame(item2, date3))) {
            const itemIndex = selected.findIndex((item2) => item2 === date3);
            selected.splice(itemIndex, 1);
          } else {
            if (selected.length < this.maxCount)
              selected.push(date3);
          }
        } else {
          if (selected.length === 0 || selected.length >= 2) {
            selected = [date3];
          } else if (selected.length === 1) {
            const existsDate = selected[0];
            if (dayjs(date3).isBefore(existsDate)) {
              selected = [date3];
            } else if (dayjs(date3).isAfter(existsDate)) {
              if (dayjs(dayjs(date3).subtract(this.maxRange, "day")).isAfter(dayjs(selected[0])) && this.showRangePrompt) {
                if (this.rangePrompt) {
                  toast(this.rangePrompt);
                } else {
                  toast(`选择天数不能超过 ${this.maxRange} 天`);
                }
                return;
              }
              selected.push(date3);
              const startDate = selected[0];
              const endDate = selected[1];
              const arr = [];
              let i2 = 0;
              do {
                arr.push(dayjs(startDate).add(i2, "day").format("YYYY-MM-DD"));
                i2++;
              } while (dayjs(startDate).add(i2, "day").isBefore(dayjs(endDate)));
              arr.push(endDate);
              selected = arr;
            } else {
              if (selected[0] === date3 && !this.allowSameDay)
                return;
              selected.push(date3);
            }
          }
        }
        this.setSelected(selected);
      },
      // 设置默认日期
      setDefaultDate() {
        if (!this.defaultDate) {
          const selected = [dayjs().format("YYYY-MM-DD")];
          return this.setSelected(selected, false);
        }
        let defaultDate = [];
        const minDate = this.minDate || dayjs().format("YYYY-MM-DD");
        const maxDate = this.maxDate || dayjs(minDate).add(this.maxMonth - 1, "month").format("YYYY-MM-DD");
        if (this.mode === "single") {
          if (!test.array(this.defaultDate)) {
            defaultDate = [dayjs(this.defaultDate).format("YYYY-MM-DD")];
          } else {
            defaultDate = [this.defaultDate[0]];
          }
        } else {
          if (!test.array(this.defaultDate))
            return;
          defaultDate = this.defaultDate;
        }
        defaultDate = defaultDate.filter((item) => {
          return dayjs(item).isAfter(dayjs(minDate).subtract(1, "day")) && dayjs(item).isBefore(dayjs(
            maxDate
          ).add(1, "day"));
        });
        this.setSelected(defaultDate, false);
      },
      setSelected(selected, event = true) {
        this.selected = selected;
        event && this.$emit("monthSelected", this.selected, "tap");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-calendar-month-wrapper",
        ref: "u-calendar-month-wrapper"
      },
      [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.months, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index2,
              class: vue.normalizeClass([`u-calendar-month-${index2}`]),
              ref_for: true,
              ref: `u-calendar-month-${index2}`,
              id: `month-${index2}`
            }, [
              index2 !== 0 ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "u-calendar-month__title"
                },
                vue.toDisplayString(item.year) + "年" + vue.toDisplayString(item.month) + "月",
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "u-calendar-month__days" }, [
                $props.showMark ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "u-calendar-month__days__month-mark-wrapper"
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "u-calendar-month__days__month-mark-wrapper__text" },
                    vue.toDisplayString(item.month),
                    1
                    /* TEXT */
                  )
                ])) : vue.createCommentVNode("v-if", true),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item.date, (item1, index1) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(["u-calendar-month__days__day", [item1.selected && "u-calendar-month__days__day__select--selected"]]),
                      key: index1,
                      style: vue.normalizeStyle([$options.dayStyle(index2, index1, item1)]),
                      onClick: ($event) => $options.clickHandler(index2, index1, item1)
                    }, [
                      vue.createElementVNode(
                        "view",
                        {
                          class: "u-calendar-month__days__day__select",
                          style: vue.normalizeStyle([$options.daySelectStyle(index2, index1, item1)])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            {
                              class: vue.normalizeClass(["u-calendar-month__days__day__select__info", [item1.disabled && "u-calendar-month__days__day__select__info--disabled"]]),
                              style: vue.normalizeStyle([$options.textStyle(item1)])
                            },
                            vue.toDisplayString(item1.day),
                            7
                            /* TEXT, CLASS, STYLE */
                          ),
                          $options.getBottomInfo(index2, index1, item1) ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 0,
                              class: vue.normalizeClass(["u-calendar-month__days__day__select__buttom-info", [item1.disabled && "u-calendar-month__days__day__select__buttom-info--disabled"]]),
                              style: vue.normalizeStyle([$options.textStyle(item1)])
                            },
                            vue.toDisplayString($options.getBottomInfo(index2, index1, item1)),
                            7
                            /* TEXT, CLASS, STYLE */
                          )) : vue.createCommentVNode("v-if", true),
                          item1.dot ? (vue.openBlock(), vue.createElementBlock("text", {
                            key: 1,
                            class: "u-calendar-month__days__day__select__dot"
                          })) : vue.createCommentVNode("v-if", true)
                        ],
                        4
                        /* STYLE */
                      )
                    ], 14, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ], 10, ["id"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      512
      /* NEED_PATCH */
    );
  }
  const uMonth = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$5], ["__scopeId", "data-v-9b76ab7e"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-calendar/month.vue"]]);
  const props$4 = defineMixin({
    props: {
      // 日历顶部标题
      title: {
        type: String,
        default: () => props$w.calendar.title
      },
      // 是否显示标题
      showTitle: {
        type: Boolean,
        default: () => props$w.calendar.showTitle
      },
      // 是否显示副标题
      showSubtitle: {
        type: Boolean,
        default: () => props$w.calendar.showSubtitle
      },
      // 日期类型选择，single-选择单个日期，multiple-可以选择多个日期，range-选择日期范围
      mode: {
        type: String,
        default: () => props$w.calendar.mode
      },
      // mode=range时，第一个日期底部的提示文字
      startText: {
        type: String,
        default: () => props$w.calendar.startText
      },
      // mode=range时，最后一个日期底部的提示文字
      endText: {
        type: String,
        default: () => props$w.calendar.endText
      },
      // 自定义列表
      customList: {
        type: Array,
        default: () => props$w.calendar.customList
      },
      // 主题色，对底部按钮和选中日期有效
      color: {
        type: String,
        default: () => props$w.calendar.color
      },
      // 最小的可选日期
      minDate: {
        type: [String, Number],
        default: () => props$w.calendar.minDate
      },
      // 最大可选日期
      maxDate: {
        type: [String, Number],
        default: () => props$w.calendar.maxDate
      },
      // 默认选中的日期，mode为multiple或range是必须为数组格式
      defaultDate: {
        type: [Array, String, Date, null],
        default: () => props$w.calendar.defaultDate
      },
      // mode=multiple时，最多可选多少个日期
      maxCount: {
        type: [String, Number],
        default: () => props$w.calendar.maxCount
      },
      // 日期行高
      rowHeight: {
        type: [String, Number],
        default: () => props$w.calendar.rowHeight
      },
      // 日期格式化函数
      formatter: {
        type: [Function, null],
        default: () => props$w.calendar.formatter
      },
      // 是否显示农历
      showLunar: {
        type: Boolean,
        default: () => props$w.calendar.showLunar
      },
      // 是否显示月份背景色
      showMark: {
        type: Boolean,
        default: () => props$w.calendar.showMark
      },
      // 确定按钮的文字
      confirmText: {
        type: String,
        default: () => props$w.calendar.confirmText
      },
      // 确认按钮处于禁用状态时的文字
      confirmDisabledText: {
        type: String,
        default: () => props$w.calendar.confirmDisabledText
      },
      // 是否显示日历弹窗
      show: {
        type: Boolean,
        default: () => props$w.calendar.show
      },
      // 是否允许点击遮罩关闭日历
      closeOnClickOverlay: {
        type: Boolean,
        default: () => props$w.calendar.closeOnClickOverlay
      },
      // 是否为只读状态，只读状态下禁止选择日期
      readonly: {
        type: Boolean,
        default: () => props$w.calendar.readonly
      },
      // 	是否展示确认按钮
      showConfirm: {
        type: Boolean,
        default: () => props$w.calendar.showConfirm
      },
      // 日期区间最多可选天数，默认无限制，mode = range时有效
      maxRange: {
        type: [Number, String],
        default: () => props$w.calendar.maxRange
      },
      // 范围选择超过最多可选天数时的提示文案，mode = range时有效
      rangePrompt: {
        type: String,
        default: () => props$w.calendar.rangePrompt
      },
      // 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效
      showRangePrompt: {
        type: Boolean,
        default: () => props$w.calendar.showRangePrompt
      },
      // 是否允许日期范围的起止时间为同一天，mode = range时有效
      allowSameDay: {
        type: Boolean,
        default: () => props$w.calendar.allowSameDay
      },
      // 圆角值
      round: {
        type: [Boolean, String, Number],
        default: () => props$w.calendar.round
      },
      // 最多展示月份数量
      monthNum: {
        type: [Number, String],
        default: 3
      }
    }
  });
  var Calendar = {
    /**
        * 农历1900-2100的润大小信息表
        * @Array Of Property
        * @return Hex
        */
    lunarInfo: [
      19416,
      19168,
      42352,
      21717,
      53856,
      55632,
      91476,
      22176,
      39632,
      21970,
      // 1900-1909
      19168,
      42422,
      42192,
      53840,
      119381,
      46400,
      54944,
      44450,
      38320,
      84343,
      // 1910-1919
      18800,
      42160,
      46261,
      27216,
      27968,
      109396,
      11104,
      38256,
      21234,
      18800,
      // 1920-1929
      25958,
      54432,
      59984,
      28309,
      23248,
      11104,
      100067,
      37600,
      116951,
      51536,
      // 1930-1939
      54432,
      120998,
      46416,
      22176,
      107956,
      9680,
      37584,
      53938,
      43344,
      46423,
      // 1940-1949
      27808,
      46416,
      86869,
      19872,
      42416,
      83315,
      21168,
      43432,
      59728,
      27296,
      // 1950-1959
      44710,
      43856,
      19296,
      43748,
      42352,
      21088,
      62051,
      55632,
      23383,
      22176,
      // 1960-1969
      38608,
      19925,
      19152,
      42192,
      54484,
      53840,
      54616,
      46400,
      46752,
      103846,
      // 1970-1979
      38320,
      18864,
      43380,
      42160,
      45690,
      27216,
      27968,
      44870,
      43872,
      38256,
      // 1980-1989
      19189,
      18800,
      25776,
      29859,
      59984,
      27480,
      23232,
      43872,
      38613,
      37600,
      // 1990-1999
      51552,
      55636,
      54432,
      55888,
      30034,
      22176,
      43959,
      9680,
      37584,
      51893,
      // 2000-2009
      43344,
      46240,
      47780,
      44368,
      21977,
      19360,
      42416,
      86390,
      21168,
      43312,
      // 2010-2019
      31060,
      27296,
      44368,
      23378,
      19296,
      42726,
      42208,
      53856,
      60005,
      54576,
      // 2020-2029
      23200,
      30371,
      38608,
      19195,
      19152,
      42192,
      118966,
      53840,
      54560,
      56645,
      // 2030-2039
      46496,
      22224,
      21938,
      18864,
      42359,
      42160,
      43600,
      111189,
      27936,
      44448,
      // 2040-2049
      /** Add By JJonline@JJonline.Cn**/
      84835,
      37744,
      18936,
      18800,
      25776,
      92326,
      59984,
      27424,
      108228,
      43744,
      // 2050-2059
      41696,
      53987,
      51552,
      54615,
      54432,
      55888,
      23893,
      22176,
      42704,
      21972,
      // 2060-2069
      21200,
      43448,
      43344,
      46240,
      46758,
      44368,
      21920,
      43940,
      42416,
      21168,
      // 2070-2079
      45683,
      26928,
      29495,
      27296,
      44368,
      84821,
      19296,
      42352,
      21732,
      53600,
      // 2080-2089
      59752,
      54560,
      55968,
      92838,
      22224,
      19168,
      43476,
      41680,
      53584,
      62034,
      // 2090-2099
      54560
    ],
    // 2100
    /**
        * 公历每个月份的天数普通表
        * @Array Of Property
        * @return Number
        */
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    /**
        * 天干地支之天干速查表
        * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
        * @return Cn string
        */
    Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    /**
        * 天干地支之地支速查表
        * @Array Of Property
        * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
        * @return Cn string
        */
    Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
    /**
        * 天干地支之地支速查表<=>生肖
        * @Array Of Property
        * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
        * @return Cn string
        */
    Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
    /**
        * 24节气速查表
        * @Array Of Property
        * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
        * @return Cn string
        */
    solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
    /**
        * 1900-2100各年的24节气日期速查表
        * @Array Of Property
        * @return 0x string For splice
        */
    sTermInfo: [
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "9778397bd19801ec9210c965cc920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd197c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bcf97c3598082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd19801ec9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bd07f1487f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b97bd197c36c9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b70c9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "977837f0e37f149b0723b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0723b06bd",
      "7f07e7f0e37f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e37f14998083b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14898082b0723b02d5",
      "7f07e7f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66aa89801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e26665b66a449801e9808297c35",
      "665f67f0e37f1489801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722"
    ],
    /**
        * 数字转中文速查表
        * @Array Of Property
        * @trans ['日','一','二','三','四','五','六','七','八','九','十']
        * @return Cn string
        */
    nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    /**
        * 日期转农历称呼速查表
        * @Array Of Property
        * @trans ['初','十','廿','卅']
        * @return Cn string
        */
    nStr2: ["初", "十", "廿", "卅"],
    /**
        * 月份转农历称呼速查表
        * @Array Of Property
        * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
        * @return Cn string
        */
    nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
    /**
        * 返回农历y年一整年的总天数
        * @param lunar Year
        * @return Number
        * @eg:var count = calendar.lYearDays(1987) ;//count=387
        */
    lYearDays: function(y2) {
      var i2;
      var sum = 348;
      for (i2 = 32768; i2 > 8; i2 >>= 1) {
        sum += this.lunarInfo[y2 - 1900] & i2 ? 1 : 0;
      }
      return sum + this.leapDays(y2);
    },
    /**
        * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
        * @param lunar Year
        * @return Number (0-12)
        * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
        */
    leapMonth: function(y2) {
      return this.lunarInfo[y2 - 1900] & 15;
    },
    /**
        * 返回农历y年闰月的天数 若该年没有闰月则返回0
        * @param lunar Year
        * @return Number (0、29、30)
        * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
        */
    leapDays: function(y2) {
      if (this.leapMonth(y2)) {
        return this.lunarInfo[y2 - 1900] & 65536 ? 30 : 29;
      }
      return 0;
    },
    /**
        * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
        * @param lunar Year
        * @return Number (-1、29、30)
        * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
        */
    monthDays: function(y2, m2) {
      if (m2 > 12 || m2 < 1) {
        return -1;
      }
      return this.lunarInfo[y2 - 1900] & 65536 >> m2 ? 30 : 29;
    },
    /**
        * 返回公历(!)y年m月的天数
        * @param solar Year
        * @return Number (-1、28、29、30、31)
        * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
        */
    solarDays: function(y2, m2) {
      if (m2 > 12 || m2 < 1) {
        return -1;
      }
      var ms2 = m2 - 1;
      if (ms2 == 1) {
        return y2 % 4 == 0 && y2 % 100 != 0 || y2 % 400 == 0 ? 29 : 28;
      } else {
        return this.solarMonth[ms2];
      }
    },
    /**
       * 农历年份转换为干支纪年
       * @param  lYear 农历年的年份数
       * @return Cn string
       */
    toGanZhiYear: function(lYear) {
      var ganKey = (lYear - 3) % 10;
      var zhiKey = (lYear - 3) % 12;
      if (ganKey == 0)
        ganKey = 10;
      if (zhiKey == 0)
        zhiKey = 12;
      return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
    },
    /**
       * 公历月、日判断所属星座
       * @param  cMonth [description]
       * @param  cDay [description]
       * @return Cn string
       */
    toAstro: function(cMonth, cDay) {
      var s2 = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
      var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
      return s2.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "座";
    },
    /**
        * 传入offset偏移量返回干支
        * @param offset 相对甲子的偏移量
        * @return Cn string
        */
    toGanZhi: function(offset) {
      return this.Gan[offset % 10] + this.Zhi[offset % 12];
    },
    /**
        * 传入公历(!)y年获得该年第n个节气的公历日期
        * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
        * @return day Number
        * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
        */
    getTerm: function(y2, n2) {
      if (y2 < 1900 || y2 > 2100) {
        return -1;
      }
      if (n2 < 1 || n2 > 24) {
        return -1;
      }
      var _table = this.sTermInfo[y2 - 1900];
      var _info = [
        parseInt("0x" + _table.substr(0, 5)).toString(),
        parseInt("0x" + _table.substr(5, 5)).toString(),
        parseInt("0x" + _table.substr(10, 5)).toString(),
        parseInt("0x" + _table.substr(15, 5)).toString(),
        parseInt("0x" + _table.substr(20, 5)).toString(),
        parseInt("0x" + _table.substr(25, 5)).toString()
      ];
      var _calday = [
        _info[0].substr(0, 1),
        _info[0].substr(1, 2),
        _info[0].substr(3, 1),
        _info[0].substr(4, 2),
        _info[1].substr(0, 1),
        _info[1].substr(1, 2),
        _info[1].substr(3, 1),
        _info[1].substr(4, 2),
        _info[2].substr(0, 1),
        _info[2].substr(1, 2),
        _info[2].substr(3, 1),
        _info[2].substr(4, 2),
        _info[3].substr(0, 1),
        _info[3].substr(1, 2),
        _info[3].substr(3, 1),
        _info[3].substr(4, 2),
        _info[4].substr(0, 1),
        _info[4].substr(1, 2),
        _info[4].substr(3, 1),
        _info[4].substr(4, 2),
        _info[5].substr(0, 1),
        _info[5].substr(1, 2),
        _info[5].substr(3, 1),
        _info[5].substr(4, 2)
      ];
      return parseInt(_calday[n2 - 1]);
    },
    /**
        * 传入农历数字月份返回汉语通俗表示法
        * @param lunar month
        * @return Cn string
        * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
        */
    toChinaMonth: function(m2) {
      if (m2 > 12 || m2 < 1) {
        return -1;
      }
      var s2 = this.nStr3[m2 - 1];
      s2 += "月";
      return s2;
    },
    /**
        * 传入农历日期数字返回汉字表示法
        * @param lunar day
        * @return Cn string
        * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
        */
    toChinaDay: function(d2) {
      var s2;
      switch (d2) {
        case 10:
          s2 = "初十";
          break;
        case 20:
          s2 = "二十";
          break;
        case 30:
          s2 = "三十";
          break;
        default:
          s2 = this.nStr2[Math.floor(d2 / 10)];
          s2 += this.nStr1[d2 % 10];
      }
      return s2;
    },
    /**
        * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
        * @param y year
        * @return Cn string
        * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
        */
    getAnimal: function(y2) {
      return this.Animals[(y2 - 4) % 12];
    },
    /**
        * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
        * @param y  solar year
        * @param m  solar month
        * @param d  solar day
        * @return JSON object
        * @eg:__f__('log','at node_modules/uview-plus/libs/util/calendar.js:381',calendar.solar2lunar(1987,11,01));
        */
    solar2lunar: function(y2, m2, d2) {
      if (y2 < 1900 || y2 > 2100) {
        return -1;
      }
      if (y2 == 1900 && m2 == 1 && d2 < 31) {
        return -1;
      }
      if (!y2) {
        var objDate = /* @__PURE__ */ new Date();
      } else {
        var objDate = new Date(y2, parseInt(m2) - 1, d2);
      }
      var i2;
      var leap = 0;
      var temp = 0;
      var y2 = objDate.getFullYear();
      var m2 = objDate.getMonth() + 1;
      var d2 = objDate.getDate();
      var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
      for (i2 = 1900; i2 < 2101 && offset > 0; i2++) {
        temp = this.lYearDays(i2);
        offset -= temp;
      }
      if (offset < 0) {
        offset += temp;
        i2--;
      }
      var isTodayObj = /* @__PURE__ */ new Date();
      var isToday = false;
      if (isTodayObj.getFullYear() == y2 && isTodayObj.getMonth() + 1 == m2 && isTodayObj.getDate() == d2) {
        isToday = true;
      }
      var nWeek = objDate.getDay();
      var cWeek = this.nStr1[nWeek];
      if (nWeek == 0) {
        nWeek = 7;
      }
      var year = i2;
      var leap = this.leapMonth(i2);
      var isLeap = false;
      for (i2 = 1; i2 < 13 && offset > 0; i2++) {
        if (leap > 0 && i2 == leap + 1 && isLeap == false) {
          --i2;
          isLeap = true;
          temp = this.leapDays(year);
        } else {
          temp = this.monthDays(year, i2);
        }
        if (isLeap == true && i2 == leap + 1) {
          isLeap = false;
        }
        offset -= temp;
      }
      if (offset == 0 && leap > 0 && i2 == leap + 1) {
        if (isLeap) {
          isLeap = false;
        } else {
          isLeap = true;
          --i2;
        }
      }
      if (offset < 0) {
        offset += temp;
        --i2;
      }
      var month = i2;
      var day = offset + 1;
      var sm = m2 - 1;
      var gzY = this.toGanZhiYear(year);
      var firstNode = this.getTerm(y2, m2 * 2 - 1);
      var secondNode = this.getTerm(y2, m2 * 2);
      var gzM = this.toGanZhi((y2 - 1900) * 12 + m2 + 11);
      if (d2 >= firstNode) {
        gzM = this.toGanZhi((y2 - 1900) * 12 + m2 + 12);
      }
      var isTerm = false;
      var Term = null;
      if (firstNode == d2) {
        isTerm = true;
        Term = this.solarTerm[m2 * 2 - 2];
      }
      if (secondNode == d2) {
        isTerm = true;
        Term = this.solarTerm[m2 * 2 - 1];
      }
      var dayCyclical = Date.UTC(y2, sm, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10;
      var gzD = this.toGanZhi(dayCyclical + d2 - 1);
      var astro = this.toAstro(m2, d2);
      return { "lYear": year, "lMonth": month, "lDay": day, "Animal": this.getAnimal(year), "IMonthCn": (isLeap ? "闰" : "") + this.toChinaMonth(month), "IDayCn": this.toChinaDay(day), "cYear": y2, "cMonth": m2, "cDay": d2, "gzYear": gzY, "gzMonth": gzM, "gzDay": gzD, "isToday": isToday, "isLeap": isLeap, "nWeek": nWeek, "ncWeek": "星期" + cWeek, "isTerm": isTerm, "Term": Term, "astro": astro };
    },
    /**
        * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
        * @param y  lunar year
        * @param m  lunar month
        * @param d  lunar day
        * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
        * @return JSON object
        * @eg:__f__('log','at node_modules/uview-plus/libs/util/calendar.js:500',calendar.lunar2solar(1987,9,10));
        */
    lunar2solar: function(y2, m2, d2, isLeapMonth) {
      var isLeapMonth = !!isLeapMonth;
      var leapMonth = this.leapMonth(y2);
      this.leapDays(y2);
      if (isLeapMonth && leapMonth != m2) {
        return -1;
      }
      if (y2 == 2100 && m2 == 12 && d2 > 1 || y2 == 1900 && m2 == 1 && d2 < 31) {
        return -1;
      }
      var day = this.monthDays(y2, m2);
      var _day = day;
      if (isLeapMonth) {
        _day = this.leapDays(y2, m2);
      }
      if (y2 < 1900 || y2 > 2100 || d2 > _day) {
        return -1;
      }
      var offset = 0;
      for (var i2 = 1900; i2 < y2; i2++) {
        offset += this.lYearDays(i2);
      }
      var leap = 0;
      var isAdd = false;
      for (var i2 = 1; i2 < m2; i2++) {
        leap = this.leapMonth(y2);
        if (!isAdd) {
          if (leap <= i2 && leap > 0) {
            offset += this.leapDays(y2);
            isAdd = true;
          }
        }
        offset += this.monthDays(y2, i2);
      }
      if (isLeapMonth) {
        offset += day;
      }
      var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
      var calObj = new Date((offset + d2 - 31) * 864e5 + stmap);
      var cY = calObj.getUTCFullYear();
      var cM = calObj.getUTCMonth() + 1;
      var cD = calObj.getUTCDate();
      return this.solar2lunar(cY, cM, cD);
    }
  };
  const _sfc_main$a = {
    name: "u-calendar",
    mixins: [mpMixin, mixin, props$4],
    components: {
      uHeader,
      uMonth
    },
    data() {
      return {
        // 需要显示的月份的数组
        months: [],
        // 在月份滚动区域中，当前视图中月份的index索引
        monthIndex: 0,
        // 月份滚动区域的高度
        listHeight: 0,
        // month组件中选择的日期数组
        selected: [],
        scrollIntoView: "",
        scrollIntoViewScroll: "",
        scrollTop: 0,
        // 过滤处理方法
        innerFormatter: (value2) => value2
      };
    },
    watch: {
      scrollIntoView: {
        immediate: true,
        handler(n2) {
        }
      },
      selectedChange: {
        immediate: true,
        handler(n2) {
          this.setMonth();
        }
      },
      // 打开弹窗时，设置月份数据
      show: {
        immediate: true,
        handler(n2) {
          if (n2) {
            this.setMonth();
          } else {
            this.scrollIntoView = "";
          }
        }
      }
    },
    computed: {
      // 由于maxDate和minDate可以为字符串(2021-10-10)，或者数值(时间戳)，但是dayjs如果接受字符串形式的时间戳会有问题，这里进行处理
      innerMaxDate() {
        return test.number(this.maxDate) ? Number(this.maxDate) : this.maxDate;
      },
      innerMinDate() {
        return test.number(this.minDate) ? Number(this.minDate) : this.minDate;
      },
      // 多个条件的变化，会引起选中日期的变化，这里统一管理监听
      selectedChange() {
        return [this.innerMinDate, this.innerMaxDate, this.defaultDate];
      },
      subtitle() {
        if (this.months.length) {
          return `${this.months[this.monthIndex].year}年${this.months[this.monthIndex].month}月`;
        } else {
          return "";
        }
      },
      buttonDisabled() {
        if (this.mode === "range") {
          if (this.selected.length <= 1) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    },
    mounted() {
      this.start = Date.now();
      this.init();
    },
    emits: ["confirm", "close"],
    methods: {
      addUnit,
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e2) {
        this.innerFormatter = e2;
      },
      // month组件内部选择日期后，通过事件通知给父组件
      monthSelected(e2, scene = "init") {
        this.selected = e2;
        if (!this.showConfirm) {
          if (this.mode === "multiple" || this.mode === "single" || this.mode === "range" && this.selected.length >= 2) {
            if (scene === "init") {
              return;
            }
            if (scene === "tap") {
              this.$emit("confirm", this.selected);
            }
          }
        }
      },
      init() {
        if (this.innerMaxDate && this.innerMinDate && new Date(this.innerMaxDate).getTime() < new Date(this.innerMinDate).getTime()) {
          return error("maxDate不能小于minDate时间");
        }
        this.listHeight = this.rowHeight * 5 + 30;
        this.setMonth();
      },
      close() {
        this.$emit("close");
      },
      // 点击确定按钮
      confirm() {
        if (!this.buttonDisabled) {
          this.$emit("confirm", this.selected);
        }
      },
      // 获得两个日期之间的月份数
      getMonths(minDate, maxDate) {
        const minYear = dayjs(minDate).year();
        const minMonth = dayjs(minDate).month() + 1;
        const maxYear = dayjs(maxDate).year();
        const maxMonth = dayjs(maxDate).month() + 1;
        return (maxYear - minYear) * 12 + (maxMonth - minMonth) + 1;
      },
      // 设置月份数据
      setMonth() {
        const minDate = this.innerMinDate || dayjs().valueOf();
        const maxDate = this.innerMaxDate || dayjs(minDate).add(this.monthNum - 1, "month").valueOf();
        const months = range$1(
          1,
          this.monthNum,
          this.getMonths(minDate, maxDate)
        );
        this.months = [];
        for (let i2 = 0; i2 < months; i2++) {
          this.months.push({
            date: new Array(
              dayjs(minDate).add(i2, "month").daysInMonth()
            ).fill(1).map((item, index2) => {
              let day = index2 + 1;
              const week = dayjs(minDate).add(i2, "month").date(day).day();
              const date3 = dayjs(minDate).add(i2, "month").date(day).format("YYYY-MM-DD");
              let bottomInfo = "";
              if (this.showLunar) {
                const lunar = Calendar.solar2lunar(
                  dayjs(date3).year(),
                  dayjs(date3).month() + 1,
                  dayjs(date3).date()
                );
                bottomInfo = lunar.IDayCn;
              }
              let config2 = {
                day,
                week,
                // 小于最小允许的日期，或者大于最大的日期，则设置为disabled状态
                disabled: dayjs(date3).isBefore(
                  dayjs(minDate).format("YYYY-MM-DD")
                ) || dayjs(date3).isAfter(
                  dayjs(maxDate).format("YYYY-MM-DD")
                ),
                // 返回一个日期对象，供外部的formatter获取当前日期的年月日等信息，进行加工处理
                date: new Date(date3),
                bottomInfo,
                dot: false,
                month: dayjs(minDate).add(i2, "month").month() + 1
              };
              const formatter = this.formatter || this.innerFormatter;
              return formatter(config2);
            }),
            // 当前所属的月份
            month: dayjs(minDate).add(i2, "month").month() + 1,
            // 当前年份
            year: dayjs(minDate).add(i2, "month").year()
          });
        }
      },
      // 滚动到默认设置的月份
      scrollIntoDefaultMonth(selected) {
        const _index = this.months.findIndex(({
          year,
          month
        }) => {
          month = padZero(month);
          return `${year}-${month}` === selected;
        });
        if (_index !== -1) {
          this.$nextTick(() => {
            this.scrollIntoView = `month-${_index}`;
            this.scrollIntoViewScroll = this.scrollIntoView;
          });
        }
      },
      // scroll-view滚动监听
      onScroll(event) {
        const scrollTop = Math.max(0, event.detail.scrollTop);
        for (let i2 = 0; i2 < this.months.length; i2++) {
          if (scrollTop >= (this.months[i2].top || this.listHeight)) {
            this.monthIndex = i2;
            this.scrollIntoViewScroll = `month-${i2}`;
          }
        }
      },
      // 更新月份的top值
      updateMonthTop(topArr = []) {
        topArr.map((item, index2) => {
          this.months[index2].top = item;
        });
        if (!this.defaultDate) {
          const selected2 = dayjs().format("YYYY-MM");
          this.scrollIntoDefaultMonth(selected2);
          return;
        }
        let selected = dayjs().format("YYYY-MM");
        if (!test.array(this.defaultDate)) {
          selected = dayjs(this.defaultDate).format("YYYY-MM");
        } else {
          selected = dayjs(this.defaultDate[0]).format("YYYY-MM");
        }
        this.scrollIntoDefaultMonth(selected);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uHeader = vue.resolveComponent("uHeader");
    const _component_uMonth = vue.resolveComponent("uMonth");
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_7);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_2);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      show: _ctx.show,
      mode: "bottom",
      closeable: "",
      onClose: $options.close,
      round: _ctx.round,
      closeOnClickOverlay: _ctx.closeOnClickOverlay
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-calendar" }, [
          vue.createVNode(_component_uHeader, {
            title: _ctx.title,
            subtitle: $options.subtitle,
            showSubtitle: _ctx.showSubtitle,
            showTitle: _ctx.showTitle
          }, null, 8, ["title", "subtitle", "showSubtitle", "showTitle"]),
          vue.createElementVNode("scroll-view", {
            style: vue.normalizeStyle({
              height: $options.addUnit($data.listHeight)
            }),
            "scroll-y": "",
            onScroll: _cache[0] || (_cache[0] = (...args) => $options.onScroll && $options.onScroll(...args)),
            "scroll-top": $data.scrollTop,
            scrollIntoView: $data.scrollIntoView
          }, [
            vue.createVNode(_component_uMonth, {
              color: _ctx.color,
              rowHeight: _ctx.rowHeight,
              showMark: _ctx.showMark,
              months: $data.months,
              mode: _ctx.mode,
              maxCount: _ctx.maxCount,
              startText: _ctx.startText,
              endText: _ctx.endText,
              defaultDate: _ctx.defaultDate,
              minDate: $options.innerMinDate,
              maxDate: $options.innerMaxDate,
              maxMonth: _ctx.monthNum,
              readonly: _ctx.readonly,
              maxRange: _ctx.maxRange,
              rangePrompt: _ctx.rangePrompt,
              showRangePrompt: _ctx.showRangePrompt,
              allowSameDay: _ctx.allowSameDay,
              ref: "month",
              onMonthSelected: $options.monthSelected,
              onUpdateMonthTop: $options.updateMonthTop
            }, null, 8, ["color", "rowHeight", "showMark", "months", "mode", "maxCount", "startText", "endText", "defaultDate", "minDate", "maxDate", "maxMonth", "readonly", "maxRange", "rangePrompt", "showRangePrompt", "allowSameDay", "onMonthSelected", "onUpdateMonthTop"])
          ], 44, ["scroll-top", "scrollIntoView"]),
          _ctx.showConfirm ? vue.renderSlot(_ctx.$slots, "footer", { key: 0 }, () => [
            vue.createElementVNode("view", { class: "u-calendar__confirm" }, [
              vue.createVNode(_component_u_button, {
                shape: "circle",
                text: $options.buttonDisabled ? _ctx.confirmDisabledText : _ctx.confirmText,
                color: _ctx.color,
                onClick: $options.confirm,
                disabled: $options.buttonDisabled
              }, null, 8, ["text", "color", "onClick", "disabled"])
            ])
          ], true) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "onClose", "round", "closeOnClickOverlay"]);
  }
  const __easycom_8 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$4], ["__scopeId", "data-v-4d01889e"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-calendar/u-calendar.vue"]]);
  const props$3 = defineMixin({
    props: {
      // 提示内容
      loadingText: {
        type: [String, Number],
        default: () => props$w.loadingPage.loadingText
      },
      // 文字上方用于替换loading动画的图片
      image: {
        type: String,
        default: () => props$w.loadingPage.image
      },
      // 加载动画的模式，circle-圆形，spinner-花朵形，semicircle-半圆形
      loadingMode: {
        type: String,
        default: () => props$w.loadingPage.loadingMode
      },
      // 是否加载中
      loading: {
        type: Boolean,
        default: () => props$w.loadingPage.loading
      },
      // 背景色
      bgColor: {
        type: String,
        default: () => props$w.loadingPage.bgColor
      },
      // 文字颜色
      color: {
        type: String,
        default: () => props$w.loadingPage.color
      },
      // 文字大小
      fontSize: {
        type: [String, Number],
        default: () => props$w.loadingPage.fontSize
      },
      // 图标大小
      iconSize: {
        type: [String, Number],
        default: () => props$w.loadingPage.fontSize
      },
      // 加载中图标的颜色，只能rgb或者十六进制颜色值
      loadingColor: {
        type: String,
        default: () => props$w.loadingPage.loadingColor
      }
    }
  });
  const _sfc_main$9 = {
    name: "u-loading-page",
    mixins: [mpMixin, mixin, props$3],
    data() {
      return {};
    },
    methods: {
      addUnit
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$3);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_1$7);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      show: _ctx.loading,
      "custom-style": {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: _ctx.bgColor,
        display: "flex"
      }
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-loading-page" }, [
          vue.createElementVNode("view", { class: "u-loading-page__warpper" }, [
            vue.createElementVNode("view", { class: "u-loading-page__warpper__loading-icon" }, [
              _ctx.image ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                src: _ctx.image,
                class: "u-loading-page__warpper__loading-icon__img",
                mode: "widthFit",
                style: vue.normalizeStyle({
                  width: $options.addUnit(_ctx.iconSize),
                  height: $options.addUnit(_ctx.iconSize)
                })
              }, null, 12, ["src"])) : (vue.openBlock(), vue.createBlock(_component_u_loading_icon, {
                key: 1,
                mode: _ctx.loadingMode,
                size: $options.addUnit(_ctx.iconSize),
                color: _ctx.loadingColor
              }, null, 8, ["mode", "size", "color"]))
            ]),
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createElementVNode(
                "text",
                {
                  class: "u-loading-page__warpper__text",
                  style: vue.normalizeStyle({
                    fontSize: $options.addUnit(_ctx.fontSize),
                    color: _ctx.color
                  })
                },
                vue.toDisplayString(_ctx.loadingText),
                5
                /* TEXT, STYLE */
              )
            ], true)
          ])
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "custom-style"]);
  }
  const __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$3], ["__scopeId", "data-v-f571bd8d"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-loading-page/u-loading-page.vue"]]);
  const props$2 = defineMixin({
    props: {
      // 是否展示工具条
      show: {
        type: Boolean,
        default: () => props$w.toolbar.show
      },
      // 取消按钮的文字
      cancelText: {
        type: String,
        default: () => props$w.toolbar.cancelText
      },
      // 确认按钮的文字
      confirmText: {
        type: String,
        default: () => props$w.toolbar.confirmText
      },
      // 取消按钮的颜色
      cancelColor: {
        type: String,
        default: () => props$w.toolbar.cancelColor
      },
      // 确认按钮的颜色
      confirmColor: {
        type: String,
        default: () => props$w.toolbar.confirmColor
      },
      // 标题文字
      title: {
        type: String,
        default: () => props$w.toolbar.title
      }
    }
  });
  const _sfc_main$8 = {
    name: "u-toolbar",
    mixins: [mpMixin, mixin, props$2],
    emits: ["confirm", "cancel"],
    methods: {
      // 点击取消按钮
      cancel() {
        this.$emit("cancel");
      },
      // 点击确定按钮
      confirm() {
        this.$emit("confirm");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: "u-toolbar",
        onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop", "prevent"]))
      },
      [
        vue.createElementVNode("view", {
          class: "u-toolbar__cancel__wrapper",
          "hover-class": "u-hover-class"
        }, [
          vue.createElementVNode(
            "text",
            {
              class: "u-toolbar__wrapper__cancel",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.cancel && $options.cancel(...args)),
              style: vue.normalizeStyle({
                color: _ctx.cancelColor
              })
            },
            vue.toDisplayString(_ctx.cancelText),
            5
            /* TEXT, STYLE */
          )
        ]),
        _ctx.title ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: "u-toolbar__title u-line-1"
          },
          vue.toDisplayString(_ctx.title),
          1
          /* TEXT */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "u-toolbar__confirm__wrapper",
          "hover-class": "u-hover-class"
        }, [
          vue.createElementVNode(
            "text",
            {
              class: "u-toolbar__wrapper__confirm",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
              style: vue.normalizeStyle({
                color: _ctx.confirmColor
              })
            },
            vue.toDisplayString(_ctx.confirmText),
            5
            /* TEXT, STYLE */
          )
        ])
      ],
      32
      /* NEED_HYDRATION */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2], ["__scopeId", "data-v-3fd495d6"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-toolbar/u-toolbar.vue"]]);
  const props$1 = defineMixin({
    props: {
      // 是否展示picker弹窗
      show: {
        type: Boolean,
        default: () => props$w.picker.show
      },
      // 弹出的方向，可选值为 top bottom right left center
      popupMode: {
        type: String,
        default: () => props$w.picker.popupMode
      },
      // 是否展示顶部的操作栏
      showToolbar: {
        type: Boolean,
        default: () => props$w.picker.showToolbar
      },
      // 顶部标题
      title: {
        type: String,
        default: () => props$w.picker.title
      },
      // 对象数组，设置每一列的数据
      columns: {
        type: Array,
        default: () => props$w.picker.columns
      },
      // 是否显示加载中状态
      loading: {
        type: Boolean,
        default: () => props$w.picker.loading
      },
      // 各列中，单个选项的高度
      itemHeight: {
        type: [String, Number],
        default: () => props$w.picker.itemHeight
      },
      // 取消按钮的文字
      cancelText: {
        type: String,
        default: () => props$w.picker.cancelText
      },
      // 确认按钮的文字
      confirmText: {
        type: String,
        default: () => props$w.picker.confirmText
      },
      // 取消按钮的颜色
      cancelColor: {
        type: String,
        default: () => props$w.picker.cancelColor
      },
      // 确认按钮的颜色
      confirmColor: {
        type: String,
        default: () => props$w.picker.confirmColor
      },
      // 每列中可见选项的数量
      visibleItemCount: {
        type: [String, Number],
        default: () => props$w.picker.visibleItemCount
      },
      // 选项对象中，需要展示的属性键名
      keyName: {
        type: String,
        default: () => props$w.picker.keyName
      },
      // 是否允许点击遮罩关闭选择器
      closeOnClickOverlay: {
        type: Boolean,
        default: () => props$w.picker.closeOnClickOverlay
      },
      // 各列的默认索引
      defaultIndex: {
        type: Array,
        default: () => props$w.picker.defaultIndex
      },
      // 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
      immediateChange: {
        type: Boolean,
        default: () => props$w.picker.immediateChange
      }
    }
  });
  const _sfc_main$7 = {
    name: "u-picker",
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {
        // 上一次选择的列索引
        lastIndex: [],
        // 索引值 ，对应picker-view的value
        innerIndex: [],
        // 各列的值
        innerColumns: [],
        // 上一次的变化列索引
        columnIndex: 0
      };
    },
    watch: {
      // 监听默认索引的变化，重新设置对应的值
      defaultIndex: {
        immediate: true,
        handler(n2) {
          this.setIndexs(n2, true);
        }
      },
      // 监听columns参数的变化
      columns: {
        immediate: true,
        deep: true,
        handler(n2) {
          this.setColumns(n2);
        }
      }
    },
    emits: ["close", "cancel", "confirm", "change"],
    methods: {
      addUnit,
      testArray: test.array,
      // 获取item需要显示的文字，判别为对象还是文本
      getItemText(item) {
        if (test.object(item)) {
          return item[this.keyName];
        } else {
          return item;
        }
      },
      // 关闭选择器
      closeHandler() {
        if (this.closeOnClickOverlay) {
          this.$emit("close");
        }
      },
      // 点击工具栏的取消按钮
      cancel() {
        this.$emit("cancel");
      },
      // 点击工具栏的确定按钮
      confirm() {
        this.$emit("confirm", {
          indexs: this.innerIndex,
          value: this.innerColumns.map((item, index2) => item[this.innerIndex[index2]]),
          values: this.innerColumns
        });
      },
      // 选择器某一列的数据发生变化时触发
      changeHandler(e2) {
        const {
          value: value2
        } = e2.detail;
        let index2 = 0, columnIndex = 0;
        for (let i2 = 0; i2 < value2.length; i2++) {
          let item = value2[i2];
          if (item !== (this.lastIndex[i2] || 0)) {
            columnIndex = i2;
            index2 = item;
            break;
          }
        }
        this.columnIndex = columnIndex;
        const values = this.innerColumns;
        this.setLastIndex(value2);
        this.setIndexs(value2);
        this.$emit("change", {
          // 微信小程序不能传递this，会因为循环引用而报错
          // picker: this,
          value: this.innerColumns.map((item, index3) => item[value2[index3]]),
          index: index2,
          indexs: value2,
          // values为当前变化列的数组内容
          values,
          columnIndex
        });
      },
      // 设置index索引，此方法可被外部调用设置
      setIndexs(index2, setLastIndex) {
        this.innerIndex = deepClone(index2);
        if (setLastIndex) {
          this.setLastIndex(index2);
        }
      },
      // 记录上一次的各列索引位置
      setLastIndex(index2) {
        this.lastIndex = deepClone(index2);
      },
      // 设置对应列选项的所有值
      setColumnValues(columnIndex, values) {
        this.innerColumns.splice(columnIndex, 1, values);
        this.setLastIndex(this.innerIndex.slice(0, columnIndex));
        let tmpIndex = deepClone(this.innerIndex);
        for (let i2 = 0; i2 < this.innerColumns.length; i2++) {
          if (i2 > this.columnIndex) {
            tmpIndex[i2] = 0;
          }
        }
        this.setIndexs(tmpIndex);
      },
      // 获取对应列的所有选项
      getColumnValues(columnIndex) {
        (async () => {
          await sleep();
        })();
        return this.innerColumns[columnIndex];
      },
      // 设置整体各列的columns的值
      setColumns(columns) {
        this.innerColumns = deepClone(columns);
        if (this.innerIndex.length === 0) {
          this.innerIndex = new Array(columns.length).fill(0);
        }
      },
      // 获取各列选中值对应的索引
      getIndexs() {
        return this.innerIndex;
      },
      // 获取各列选中的值
      getValues() {
        (async () => {
          await sleep();
        })();
        return this.innerColumns.map((item, index2) => item[this.innerIndex[index2]]);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_toolbar = resolveEasycom(vue.resolveDynamicComponent("u-toolbar"), __easycom_0);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$3);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_2);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      show: _ctx.show,
      mode: _ctx.popupMode,
      onClose: $options.closeHandler
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-picker" }, [
          _ctx.showToolbar ? (vue.openBlock(), vue.createBlock(_component_u_toolbar, {
            key: 0,
            cancelColor: _ctx.cancelColor,
            confirmColor: _ctx.confirmColor,
            cancelText: _ctx.cancelText,
            confirmText: _ctx.confirmText,
            title: _ctx.title,
            onCancel: $options.cancel,
            onConfirm: $options.confirm
          }, null, 8, ["cancelColor", "confirmColor", "cancelText", "confirmText", "title", "onCancel", "onConfirm"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("picker-view", {
            class: "u-picker__view",
            indicatorStyle: `height: ${$options.addUnit(_ctx.itemHeight)}`,
            value: $data.innerIndex,
            immediateChange: _ctx.immediateChange,
            style: vue.normalizeStyle({
              height: `${$options.addUnit(_ctx.visibleItemCount * _ctx.itemHeight)}`
            }),
            onChange: _cache[0] || (_cache[0] = (...args) => $options.changeHandler && $options.changeHandler(...args))
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.innerColumns, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("picker-view-column", {
                  key: index2,
                  class: "u-picker__view__column"
                }, [
                  $options.testArray(item) ? (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    { key: 0 },
                    vue.renderList(item, (item1, index1) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          class: "u-picker__view__column__item u-line-1",
                          key: index1,
                          style: vue.normalizeStyle({
                            height: $options.addUnit(_ctx.itemHeight),
                            lineHeight: $options.addUnit(_ctx.itemHeight),
                            fontWeight: index1 === $data.innerIndex[index2] ? "bold" : "normal",
                            display: "block"
                          })
                        },
                        vue.toDisplayString($options.getItemText(item1)),
                        5
                        /* TEXT, STYLE */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )) : vue.createCommentVNode("v-if", true)
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 44, ["indicatorStyle", "value", "immediateChange"]),
          _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-picker--loading"
          }, [
            vue.createVNode(_component_u_loading_icon, { mode: "circle" })
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["show", "mode", "onClose"]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$1], ["__scopeId", "data-v-1500ce68"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-picker/u-picker.vue"]]);
  const _sfc_main$6 = {
    __name: "addPlan",
    setup(__props) {
      vue.onMounted(async () => {
        const options = vue.getCurrentInstance();
        if (options.attrs.plan_id)
          plan_id.value = options.attrs.plan_id;
        else if (options.attrs.__pageInstance)
          plan_id.value = options.attrs.__pageInstance.options.plan_id;
        setTimeLimit();
        await initForm();
        await getMajorList();
      });
      const plan_id = vue.ref(0);
      const formRef = vue.ref(null);
      const formData = vue.ref({
        plan_name: "",
        choosedSubject: "",
        study_time: "",
        spend_time: "",
        note: "",
        tags: []
      });
      const rules2 = {
        "plan_name": [
          {
            max: 20,
            message: "长度不超过20个字符",
            trigger: ["blur", "change"]
          }
        ],
        "choosedSubject": [
          {
            type: "string",
            required: true,
            message: "请选择学科",
            trigger: ["blur", "change"]
          }
        ],
        "study_time": [
          {
            type: "string",
            required: true,
            message: "请选择日期",
            trigger: ["blur", "change"]
          }
        ],
        "spend_time": [
          {
            type: "string",
            required: true,
            message: "请输入时长",
            trigger: ["blur", "change"]
          },
          {
            pattern: /^(?!0(\.0*)?$)(\d+(\.\d)?)$/,
            message: "只能为整数或一位小数，且必须为整数",
            trigger: ["blur", "change"]
          }
        ],
        "note": [
          {
            max: 200,
            message: "长度不超过200个字符",
            trigger: ["blur", "change"]
          }
        ]
      };
      const tags = vue.ref([
        {
          text: "有问题",
          value: 1
        },
        {
          text: "新知识",
          value: 2
        },
        {
          text: "待总结",
          value: 3
        },
        {
          text: "没看懂",
          value: 4
        },
        {
          text: "有点问题",
          value: 5
        },
        {
          text: "其他",
          value: 6
        }
      ]);
      const calendar = vue.ref({
        show: false,
        minDate: "",
        maxDate: "",
        defaultDate: "",
        monthNum: 7,
        loading: false
      });
      const showCalendar = () => {
        calendar.value.show = true;
      };
      const calendarClose = () => {
        calendar.value.show = false;
      };
      const timeConfirm = (e2) => {
        formData.value.study_time = e2[0];
        calendar.value.show = false;
      };
      const setTimeLimit = () => {
        let date3 = /* @__PURE__ */ new Date();
        let year = date3.getFullYear();
        let month = date3.getMonth() + 1;
        let day = date3.getDate();
        let sixMonthsAgo = new Date(date3);
        sixMonthsAgo.setMonth(date3.getMonth() - 6);
        let minYear = sixMonthsAgo.getFullYear();
        let minMonth = sixMonthsAgo.getMonth() + 1;
        let minDay = sixMonthsAgo.getDate();
        if (month <= 9) {
          month = "0" + month;
        }
        if (day <= 9) {
          day = "0" + day;
        }
        if (minMonth <= 9) {
          minMonth = "0" + minMonth;
        }
        if (minDay <= 9) {
          minDay = "0" + minDay;
        }
        calendar.value.minDate = minYear + "-" + minMonth + "-" + minDay;
        calendar.value.maxDate = year + "-" + month + "-" + day;
      };
      const allMajorList = vue.ref([]);
      const columns = vue.ref([]);
      const showPicker = vue.ref(false);
      const uPickerRef = vue.ref(null);
      vue.ref(null);
      vue.ref({});
      const subject_cat_key = vue.ref("");
      const subject_sub_key = vue.ref("");
      const subject_key = vue.ref("");
      const changeHandler = (e2) => {
        const {
          columnIndex,
          value: value2,
          values,
          index: index2,
          indexs
        } = e2;
        if (columnIndex === 0) {
          uPickerRef.value.setColumnValues(1, allMajorList.value[index2].secondColumn);
          uPickerRef.value.setColumnValues(2, allMajorList.value[index2].childList[0].thirdColumn);
        } else if (columnIndex === 1) {
          uPickerRef.value.setColumnValues(2, allMajorList.value[indexs[0]].childList[indexs[1]].thirdColumn);
        }
      };
      const confirm = (e2) => {
        formatAppLog("log", "at pages/plan/addPlan.vue:307", e2);
        e2.indexs[0];
        e2.indexs[1];
        e2.indexs[2];
        subject_cat_key.value = e2.value[0];
        subject_sub_key.value = e2.value[1];
        subject_key.value = e2.value[2];
        formData.value.choosedSubject = e2.value[2];
        showPicker.value = false;
      };
      const closePicker = () => {
        showPicker.value = false;
      };
      const openPicker = () => {
        showPicker.value = true;
      };
      const getMajorList = async () => {
        let majorList = [];
        let firstColumn = [];
        const buildTree = (dataList) => {
          for (const key in dataList) {
            let stmpTree = {
              label: key
            };
            firstColumn.push(key);
            let secondColumn = [];
            const item = dataList[key];
            let childTreeList = [];
            for (const secondKey in item) {
              let secondTree = {
                label: secondKey,
                thirdColumn: item[secondKey]
              };
              secondColumn.push(secondKey);
              childTreeList.push(secondTree);
            }
            stmpTree.childList = childTreeList;
            stmpTree.secondColumn = secondColumn;
            majorList.push(stmpTree);
          }
          columns.value.push(firstColumn);
          columns.value.push(majorList[0].secondColumn);
          columns.value.push(majorList[0].childList[0].thirdColumn);
          allMajorList.value = majorList;
        };
        await GetSubjectMapAPI().then((res) => {
          buildTree(res);
        }).catch((err) => {
          formatAppLog("log", "at pages/plan/addPlan.vue:373", err);
        });
      };
      const initForm = async () => {
        function setData(data) {
          subject_cat_key.value = data.subject_cat_key;
          subject_sub_key.value = data.subject_sub_key;
          subject_key.value = data.subject_key;
          formData.value = {
            plan_name: data.plan_name,
            choosedSubject: subject_key.value,
            study_time: timestampToDate(data.study_time),
            spend_time: String(data.spend_time),
            note: data.note,
            tags: data.tags
          };
        }
        if (plan_id.value != 0) {
          const query = "plan_id=" + plan_id.value;
          await GetPlanDetailAPI(query).then((res) => {
            setData(res);
          }).catch((err) => {
            formatAppLog("log", "at pages/plan/addPlan.vue:404", err);
          });
        }
      };
      const submit = () => {
        formatAppLog("log", "at pages/plan/addPlan.vue:414", formData.value);
        formRef.value.validate().then(async (valid) => {
          if (valid) {
            timeToTimestamp(formData.value.study_time + " T00:00:00Z");
            const params = {
              plan_name: formData.value.plan_name,
              subject_cat_key: subject_cat_key.value,
              subject_sub_key: subject_sub_key.value,
              subject_key: subject_key.value,
              study_time: timeToTimestamp(formData.value.study_time),
              spend_time: Number(formData.value.spend_time),
              add_time: Math.floor(Date.now() / 1e3),
              note: formData.value.note,
              tags: formData.value.tags
            };
            formatAppLog("log", "at pages/plan/addPlan.vue:430", params);
            if (plan_id.value == 0) {
              await addPlanAPI(params).then((res) => {
                if (res.msg === "success") {
                  uni.$u.toast("添加成功");
                  uni.reLaunch({
                    url: "/pages/plan/index"
                  });
                }
              }).catch((err) => {
                formatAppLog("log", "at pages/plan/addPlan.vue:442", err);
              });
            } else {
              params.plan_id = plan_id.value;
              await ChangePlanAPI(params).then((res) => {
                if (res.msg === "success") {
                  uni.$u.toast("修改成功");
                  uni.reLaunch({
                    url: "/pages/plan/index"
                  });
                }
              }).catch((err) => {
                formatAppLog("log", "at pages/plan/addPlan.vue:456", err);
              });
            }
          }
        }).catch(() => {
        });
      };
      const toBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        const _component_up_input = resolveEasycom(vue.resolveDynamicComponent("up-input"), __easycom_1$4);
        const _component_up_form_item = resolveEasycom(vue.resolveDynamicComponent("up-form-item"), __easycom_2$4);
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_1$b);
        const _component_up_textarea = resolveEasycom(vue.resolveDynamicComponent("up-textarea"), __easycom_4$1);
        const _component_uni_data_checkbox = resolveEasycom(vue.resolveDynamicComponent("uni-data-checkbox"), __easycom_5);
        const _component_up_form = resolveEasycom(vue.resolveDynamicComponent("up-form"), __easycom_6);
        const _component_up_button = resolveEasycom(vue.resolveDynamicComponent("up-button"), __easycom_7);
        const _component_up_calendar = resolveEasycom(vue.resolveDynamicComponent("up-calendar"), __easycom_8);
        const _component_up_loading_page = resolveEasycom(vue.resolveDynamicComponent("up-loading-page"), __easycom_9);
        const _component_up_picker = resolveEasycom(vue.resolveDynamicComponent("up-picker"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: plan_id.value == 0 ? "添加记录" : "编辑记录",
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    onClick: toBack,
                    src: _imports_0,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_1,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "form" }, [
                vue.createVNode(_component_up_form, {
                  model: formData.value,
                  ref_key: "formRef",
                  ref: formRef,
                  labelWidth: "140rpx",
                  rules: rules2
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_up_form_item, {
                      label: "名称",
                      prop: "plan_name"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.plan_name,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.plan_name = $event)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, {
                      label: "学科",
                      prop: "choosedSubject",
                      required: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.choosedSubject,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.choosedSubject = $event),
                          disabled: "",
                          onClick: openPicker,
                          type: "select",
                          "select-open": showPicker.value
                        }, null, 8, ["modelValue", "select-open"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, {
                      label: "日期",
                      prop: "study_time",
                      required: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.study_time,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.study_time = $event),
                          disabled: "",
                          onClick: showCalendar,
                          type: "select",
                          "select-open": calendar.value.show
                        }, {
                          suffix: vue.withCtx(() => [
                            vue.createVNode(_component_up_icon, {
                              name: "calendar",
                              size: "24"
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "select-open"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, {
                      label: "时长",
                      prop: "spend_time",
                      required: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_input, {
                          modelValue: formData.value.spend_time,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.spend_time = $event)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, {
                      label: "备注",
                      prop: "note"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_textarea, {
                          modelValue: formData.value.note,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.note = $event),
                          count: "",
                          maxlength: "200"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, {
                      label: "标签",
                      prop: "tags"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_data_checkbox, {
                          max: "3",
                          mode: "tag",
                          multiple: "",
                          modelValue: formData.value.tags,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.tags = $event),
                          localdata: tags.value,
                          selectedColor: "#2C2C2C"
                        }, null, 8, ["modelValue", "localdata"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["model"]),
                vue.createVNode(_component_up_button, {
                  onClick: submit,
                  class: "btn font-red",
                  shape: "circle",
                  text: plan_id.value == 0 ? "添加" : "保存"
                }, null, 8, ["text"])
              ])
            ]),
            vue.createVNode(_component_up_calendar, {
              title: "选择日期",
              show: calendar.value.show,
              color: "#AC0404",
              closeOnClickOverlay: true,
              maxDate: calendar.value.maxDate,
              minDate: calendar.value.minDate,
              monthNum: calendar.value.monthNum,
              onConfirm: timeConfirm,
              onClose: calendarClose
            }, null, 8, ["show", "maxDate", "minDate", "monthNum"]),
            vue.createVNode(_component_up_loading_page, {
              loadingText: "",
              loading: calendar.value.loading
            }, null, 8, ["loading"]),
            vue.createVNode(_component_up_picker, {
              title: "选择学科",
              show: showPicker.value,
              ref_key: "uPickerRef",
              ref: uPickerRef,
              columns: columns.value,
              onConfirm: confirm,
              onChange: changeHandler,
              onCancel: closePicker
            }, null, 8, ["show", "columns"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesPlanAddPlan = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "D:/subject-analyze/pages/plan/addPlan.vue"]]);
  const props = defineMixin({
    props: {
      // 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
      status: {
        type: String,
        default: () => props$w.loadmore.status
      },
      // 组件背景色
      bgColor: {
        type: String,
        default: () => props$w.loadmore.bgColor
      },
      // 是否显示加载中的图标
      icon: {
        type: Boolean,
        default: () => props$w.loadmore.icon
      },
      // 字体大小
      fontSize: {
        type: [String, Number],
        default: () => props$w.loadmore.fontSize
      },
      // 图标大小
      iconSize: {
        type: [String, Number],
        default: () => props$w.loadmore.iconSize
      },
      // 字体颜色
      color: {
        type: String,
        default: () => props$w.loadmore.color
      },
      // 加载中状态的图标，spinner-花朵状图标，circle-圆圈状，semicircle-半圆
      loadingIcon: {
        type: String,
        default: () => props$w.loadmore.loadingIcon
      },
      // 加载前的提示语
      loadmoreText: {
        type: String,
        default: () => props$w.loadmore.loadmoreText
      },
      // 加载中提示语
      loadingText: {
        type: String,
        default: () => props$w.loadmore.loadingText
      },
      // 没有更多的提示语
      nomoreText: {
        type: String,
        default: () => props$w.loadmore.nomoreText
      },
      // 在“没有更多”状态下，是否显示粗点
      isDot: {
        type: Boolean,
        default: () => props$w.loadmore.isDot
      },
      // 加载中图标的颜色
      iconColor: {
        type: String,
        default: () => props$w.loadmore.iconColor
      },
      // 上边距
      marginTop: {
        type: [String, Number],
        default: () => props$w.loadmore.marginTop
      },
      // 下边距
      marginBottom: {
        type: [String, Number],
        default: () => props$w.loadmore.marginBottom
      },
      // 高度，单位px
      height: {
        type: [String, Number],
        default: () => props$w.loadmore.height
      },
      // 是否显示左边分割线
      line: {
        type: Boolean,
        default: () => props$w.loadmore.line
      },
      // 线条颜色
      lineColor: {
        type: String,
        default: () => props$w.loadmore.lineColor
      },
      // 是否虚线，true-虚线，false-实线
      dashed: {
        type: Boolean,
        default: () => props$w.loadmore.dashed
      }
    }
  });
  const _sfc_main$5 = {
    name: "u-loadmore",
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        // 粗点
        dotText: "●"
      };
    },
    computed: {
      // 加载的文字显示的样式
      loadTextStyle() {
        return {
          color: this.color,
          fontSize: addUnit(this.fontSize),
          lineHeight: addUnit(this.fontSize),
          backgroundColor: this.bgColor
        };
      },
      // 显示的提示文字
      showText() {
        let text = "";
        if (this.status == "loadmore")
          text = this.loadmoreText;
        else if (this.status == "loading")
          text = this.loadingText;
        else if (this.status == "nomore" && this.isDot)
          text = this.dotText;
        else
          text = this.nomoreText;
        return text;
      }
    },
    emits: ["loadmore"],
    methods: {
      addStyle,
      addUnit,
      loadMore() {
        if (this.status == "loadmore")
          this.$emit("loadmore");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_0$5);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-loadmore",
        style: vue.normalizeStyle([
          $options.addStyle(_ctx.customStyle),
          {
            backgroundColor: _ctx.bgColor,
            marginBottom: $options.addUnit(_ctx.marginBottom),
            marginTop: $options.addUnit(_ctx.marginTop),
            height: $options.addUnit(_ctx.height)
          }
        ])
      },
      [
        _ctx.line ? (vue.openBlock(), vue.createBlock(_component_u_line, {
          key: 0,
          length: "140rpx",
          color: _ctx.lineColor,
          hairline: false,
          dashed: _ctx.dashed
        }, null, 8, ["color", "dashed"])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 加载中和没有更多的状态才显示两边的横线 "),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([_ctx.status == "loadmore" || _ctx.status == "nomore" ? "u-more" : "", "u-loadmore__content"])
          },
          [
            _ctx.status === "loading" && _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "u-loadmore__content__icon-wrap"
            }, [
              vue.createVNode(_component_u_loading_icon, {
                color: _ctx.iconColor,
                size: _ctx.iconSize,
                mode: _ctx.loadingIcon
              }, null, 8, ["color", "size", "mode"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 如果没有更多的状态下，显示内容为dot（粗点），加载特定样式 "),
            vue.createElementVNode(
              "text",
              {
                class: vue.normalizeClass(["u-line-1", [_ctx.status == "nomore" && _ctx.isDot == true ? "u-loadmore__content__dot-text" : "u-loadmore__content__text"]]),
                style: vue.normalizeStyle([$options.loadTextStyle]),
                onClick: _cache[0] || (_cache[0] = (...args) => $options.loadMore && $options.loadMore(...args))
              },
              vue.toDisplayString($options.showText),
              7
              /* TEXT, CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        ),
        _ctx.line ? (vue.openBlock(), vue.createBlock(_component_u_line, {
          key: 1,
          length: "140rpx",
          color: _ctx.lineColor,
          hairline: false,
          dashed: _ctx.dashed
        }, null, 8, ["color", "dashed"])) : vue.createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-5817e4cf"], ["__file", "D:/subject-analyze/node_modules/uview-plus/components/u-loadmore/u-loadmore.vue"]]);
  const _sfc_main$4 = {
    __name: "allPlan",
    setup(__props) {
      vue.onMounted(async () => {
        await getPlanList();
      });
      const status = vue.ref("loadmore");
      const pageInfo = vue.ref({
        page: 1,
        pagesize: 15
      });
      const tags = vue.ref([
        {
          text: "有问题",
          value: 1
        },
        {
          text: "新知识",
          value: 2
        },
        {
          text: "待总结",
          value: 3
        },
        {
          text: "没看懂",
          value: 4
        },
        {
          text: "有点问题",
          value: 5
        },
        {
          text: "其他",
          value: 6
        }
      ]);
      const recordList = vue.ref([]);
      const getPlanList = async () => {
        const buildList = (dataObj) => {
          const mergedData = { ...dataObj };
          let stmpList = Object.keys(mergedData).map((key) => ({ date: [key][0], dataList: mergedData[key] })).sort((a2, b2) => {
            const dateA = new Date(a2.date);
            const dateB = new Date(b2.date);
            return dateB - dateA;
          });
          stmpList.forEach((item) => {
            let allTime = 0;
            item.dataList.forEach((dataDetail) => {
              allTime += dataDetail.spend_time;
              let tagList = [];
              dataDetail.tags.forEach((tag) => {
                if (tag == 0)
                  ;
                else {
                  if (tag > tags.value.length) {
                    return;
                  }
                  tagList.push(tags.value[tag - 1].text);
                }
              });
              dataDetail.tags = tagList;
            });
            item.allTime = allTime;
            if (recordList.value.length && item.date == recordList.value[recordList.value.length - 1].date) {
              recordList.value[recordList.value.length - 1].allTime += item.allTime;
              recordList.value[recordList.value.length - 1].dataList.push(...item.dataList);
            } else {
              recordList.value.push(item);
            }
          });
          pageInfo.value.page++;
        };
        if (status.value == "nomore")
          return;
        status.value = "loading";
        const params = {
          page: pageInfo.value.page,
          pagesize: pageInfo.value.pagesize
        };
        await GetPlanListAPI(params).then((res) => {
          formatAppLog("log", "at pages/plan/allPlan.vue:156", res);
          if (Object.keys(res).length === 0) {
            status.value = "nomore";
          } else {
            buildList(res);
            status.value = "loadmore";
          }
        }).catch((err) => {
          formatAppLog("log", "at pages/plan/allPlan.vue:165", err);
        });
      };
      const ToAddPlan = (plan_id) => {
        uni.navigateTo({
          url: "/pages/plan/addPlan?plan_id=" + plan_id
        });
      };
      const toBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        const _component_up_image = resolveEasycom(vue.resolveDynamicComponent("up-image"), __easycom_1$6);
        const _component_up_avatar = resolveEasycom(vue.resolveDynamicComponent("up-avatar"), __easycom_2$6);
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_1$b);
        const _component_u_loadmore = resolveEasycom(vue.resolveDynamicComponent("u-loadmore"), __easycom_4);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: "全部记录",
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    onClick: toBack,
                    src: _imports_0,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_1,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode(
                "scroll-view",
                {
                  "scroll-y": true,
                  class: "scrollBox",
                  onScrolltolower: _cache[1] || (_cache[1] = ($event) => getPlanList())
                },
                [
                  vue.createElementVNode("view", { class: "title" }, [
                    vue.createElementVNode("span", null, "全部学习记录"),
                    vue.createElementVNode("view", { class: "add" }, [
                      vue.createElementVNode("span", null, "添加记录"),
                      vue.createElementVNode("view", {
                        onClick: _cache[0] || (_cache[0] = ($event) => ToAddPlan(0)),
                        class: "addBtn"
                      }, [
                        vue.createVNode(_component_up_image, {
                          src: "/assets/icon/icon_plan_add.png",
                          width: "40rpx",
                          height: "40rpx"
                        })
                      ])
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "planData" }, [
                    vue.createElementVNode("view", { class: "planList" }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(recordList.value, (item, index2) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            key: index2,
                            class: "dateList"
                          }, [
                            vue.createElementVNode(
                              "view",
                              {
                                class: "top",
                                style: vue.normalizeStyle(index2 == 0 ? "border-top-right-radius: 10rpx;border-top-left-radius: 10rpx;" : "")
                              },
                              [
                                vue.createElementVNode(
                                  "span",
                                  null,
                                  vue.toDisplayString(item.date),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode(
                                  "span",
                                  null,
                                  "共" + vue.toDisplayString(item.allTime) + "小时",
                                  1
                                  /* TEXT */
                                )
                              ],
                              4
                              /* STYLE */
                            ),
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(item.dataList, (data, dataIndex) => {
                                return vue.openBlock(), vue.createElementBlock("view", {
                                  key: dataIndex,
                                  onClick: ($event) => ToAddPlan(data.plan_id),
                                  class: "planBox"
                                }, [
                                  vue.createVNode(_component_up_avatar, {
                                    text: " ",
                                    randomBgColor: "",
                                    size: "10"
                                  }),
                                  vue.createElementVNode(
                                    "span",
                                    { class: "plan-title" },
                                    vue.toDisplayString(data.subject),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createElementVNode("view", { class: "plan-time-tags" }, [
                                    vue.createElementVNode(
                                      "span",
                                      { class: "plan-time" },
                                      vue.toDisplayString(data.spend_time) + "小时",
                                      1
                                      /* TEXT */
                                    ),
                                    vue.createElementVNode("view", { class: "tagsList" }, [
                                      (vue.openBlock(true), vue.createElementBlock(
                                        vue.Fragment,
                                        null,
                                        vue.renderList(data.tags, (tags2, tagIndex) => {
                                          return vue.openBlock(), vue.createElementBlock(
                                            "view",
                                            {
                                              key: tagIndex,
                                              class: "tagBox"
                                            },
                                            vue.toDisplayString(tags2),
                                            1
                                            /* TEXT */
                                          );
                                        }),
                                        128
                                        /* KEYED_FRAGMENT */
                                      ))
                                    ])
                                  ]),
                                  vue.createVNode(_component_up_icon, {
                                    name: "arrow-right",
                                    color: "#ac0404",
                                    size: "20"
                                  })
                                ], 8, ["onClick"]);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    vue.createElementVNode("view", { class: "add" })
                  ])
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            vue.createVNode(_component_u_loadmore, {
              style: { "padding-bottom": "20rpx" },
              status: status.value
            }, null, 8, ["status"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesPlanAllPlan = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "D:/subject-analyze/pages/plan/allPlan.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props) {
      const newsList = vue.ref([]);
      vue.onMounted(async () => {
        await getNewsList();
      });
      const getNewsList = async () => {
        await getNewsListAPI().then((res) => {
          newsList.value = res;
          newsList.value.forEach((item) => {
            item.date = timestampToTime(Number(item.date));
          });
          formatAppLog("log", "at pages/news/index.vue:51", newsList.value);
        }).catch((err) => {
          formatAppLog("log", "at pages/news/index.vue:54", err);
        });
      };
      const toDetail = (news_id) => {
        uni.navigateTo({
          url: "/pages/news/detail?news_id=" + news_id
        });
      };
      const toBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: "新闻",
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    onClick: toBack,
                    src: _imports_0,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_1,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "wholeBox" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(newsList.value, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index2,
                      class: "newBox",
                      onClick: ($event) => toDetail(item.news_id)
                    }, [
                      vue.createElementVNode("img", {
                        class: "newsImg",
                        src: item.icon_url,
                        alt: ""
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "p",
                        { class: "title" },
                        vue.toDisplayString(item.title),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "p",
                        { class: "time font-red" },
                        "NEWS " + vue.toDisplayString(item.date),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesNewsIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/subject-analyze/pages/news/index.vue"]]);
  const getNewsDetailAPI = (query) => {
    return http$1.request({
      url: "/news/get-detail?" + query,
      method: "GET"
    });
  };
  const _sfc_main$2 = {
    __name: "detail",
    setup(__props) {
      vue.onMounted(async () => {
        const options = vue.getCurrentInstance();
        if (options.attrs.news_id)
          news_id.value = options.attrs.news_id;
        else if (options.attrs.__pageInstance)
          news_id.value = options.attrs.__pageInstance.options.news_id;
        getnewsDetail();
      });
      const news_id = vue.ref(1);
      const news_info = vue.ref({});
      const getnewsDetail = async () => {
        const query = "news_id=" + news_id.value;
        await getNewsDetailAPI(query).then((res) => {
          formatAppLog("log", "at pages/news/detail.vue:62", res);
          news_info.value = res;
          news_info.value.date = timestampToDate(news_info.value.date);
        }).catch((err) => {
          formatAppLog("log", "at pages/news/detail.vue:67", err);
        });
      };
      const toBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        const _component_up_image = resolveEasycom(vue.resolveDynamicComponent("up-image"), __easycom_1$6);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: "新闻",
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    onClick: toBack,
                    src: _imports_0,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_1,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "imgBox" }, [
                vue.createVNode(_component_up_image, {
                  src: news_info.value.icon_url,
                  width: "100%",
                  height: "320rpx"
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "introBox" }, [
                vue.createElementVNode("view", { class: "intro" }, [
                  vue.createElementVNode(
                    "span",
                    { class: "title" },
                    vue.toDisplayString(news_info.value.title),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "span",
                    { class: "font-red" },
                    "NEWS " + vue.toDisplayString(news_info.value.date),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "starImg" }, [
                  vue.createVNode(_component_up_image, {
                    src: "/assets/icon/icon_major_detail_star.png",
                    width: "70rpx",
                    height: "70rpx"
                  }),
                  vue.createTextVNode(" 收藏 ")
                ])
              ]),
              vue.createElementVNode("view", { class: "contentBox" }, [
                vue.createElementVNode(
                  "pre",
                  null,
                  vue.toDisplayString(news_info.value.body),
                  1
                  /* TEXT */
                )
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesNewsDetail = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/subject-analyze/pages/news/detail.vue"]]);
  const getDetailAPI = (query) => {
    return http$1.request({
      url: "/data/get-detail?" + query,
      method: "GET"
    });
  };
  const _sfc_main$1 = {
    __name: "index",
    setup(__props) {
      vue.onMounted(async () => {
        await getMajorList();
      });
      const allMajorList = vue.ref([]);
      const columns = vue.ref([]);
      const columnData = vue.ref([]);
      const showPicker = vue.ref(true);
      const uPickerRef = vue.ref(null);
      const nowChoose = vue.ref(null);
      const majorData = vue.ref({});
      const chartData = vue.ref();
      const opts = vue.ref(
        {
          color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
          padding: [0, 5, -10, 5],
          enableScroll: false,
          extra: {
            pie: {
              activeOpacity: 0.5,
              activeRadius: 10,
              offsetAngle: 0,
              labelWidth: 15,
              border: true,
              borderWidth: 3,
              borderColor: "#FFFFFF",
              linearType: "custom"
            }
          },
          legend: {
            margin: 5
          }
        }
      );
      const changeHandler = (e2) => {
        const {
          columnIndex,
          value: value2,
          values,
          index: index2
        } = e2;
        if (columnIndex === 0) {
          uPickerRef.value.setColumnValues(1, columnData.value[index2]);
        }
      };
      const confirm = async (e2) => {
        const first = e2.indexs[0];
        const second = e2.indexs[1];
        nowChoose.value = allMajorList.value[first].majorList[second];
        showPicker.value = false;
        await getChartData();
      };
      const closePicker = () => {
        if (nowChoose.value !== null) {
          showPicker.value = false;
        }
      };
      const openPicker = () => {
        showPicker.value = true;
      };
      const getMajorList = async () => {
        let majorMap = {};
        const buildTree = (dataList) => {
          dataList.forEach((item) => {
            if (item.major_type in majorMap) {
              majorMap[item.major_type].push({ "major_id": item.major_id, "major_name": item.major_name });
            } else {
              majorMap[item.major_type] = [{ "major_id": item.major_id, "major_name": item.major_name }];
            }
          });
          let firstColumn = [];
          let secondColumn = [];
          for (const item in majorMap) {
            firstColumn.push(item);
            allMajorList.value.push({ "major_type": item, "majorList": majorMap[item] });
            let typeMajorList = [];
            majorMap[item].forEach((major) => {
              typeMajorList.push(major.major_name);
            });
            secondColumn.push(typeMajorList);
          }
          columns.value.push(firstColumn);
          columns.value.push(secondColumn[0]);
          columnData.value = secondColumn;
        };
        await getMajorListAPI().then((res) => {
          buildTree(res);
        }).catch((err) => {
          formatAppLog("log", "at pages/analyze/index.vue:195", err);
        });
      };
      const getChartData = async () => {
        const formatData = (dataList) => {
          let finData = {
            series: []
          };
          let data = [];
          dataList.forEach((item) => {
            data.push({ name: item.subject_name, value: item.value, labelText: item.subject_name });
          });
          finData.series.push({ data });
          chartData.value = JSON.parse(JSON.stringify(finData));
        };
        const query = "major_id=" + nowChoose.value.major_id;
        await getDetailAPI(query).then((res) => {
          formatAppLog("log", "at pages/analyze/index.vue:219", res);
          majorData.value.data_rows = res.data_rows;
          majorData.value.expand_skill = res.expand_skill.split("\\n");
          majorData.value.last_update = timestampToDate(res.last_update);
          majorData.value.main_skill = res.main_skill.split("\\n");
          formatData(res.subject_value);
        }).catch((err) => {
          formatAppLog("log", "at pages/analyze/index.vue:227", err);
        });
      };
      const toBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_up_navbar = resolveEasycom(vue.resolveDynamicComponent("up-navbar"), __easycom_0$6);
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_1$b);
        const _component_qiun_data_charts = resolveEasycom(vue.resolveDynamicComponent("qiun-data-charts"), __easycom_2$1);
        const _component_up_picker = resolveEasycom(vue.resolveDynamicComponent("up-picker"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_up_navbar, {
                height: "80rpx",
                title: "数据分析 ",
                placeholder: true
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    onClick: toBack,
                    src: _imports_0,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                right: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    src: _imports_1,
                    style: { "width": "50rpx", "height": "50rpx" }
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "topBox" }, [
                vue.createElementVNode("view", { class: "title" }, [
                  vue.createTextVNode(" 行业招聘需求 "),
                  vue.createElementVNode("view", {
                    onClick: openPicker,
                    class: "right"
                  }, [
                    vue.createElementVNode("span", null, "更换专业"),
                    vue.createVNode(_component_up_icon, {
                      name: "arrow-right",
                      color: "#ac0404",
                      size: "16"
                    })
                  ])
                ]),
                vue.createElementVNode("view", { class: "intro" }, [
                  vue.createElementVNode(
                    "span",
                    { class: "font-red" },
                    vue.toDisplayString(nowChoose.value ? nowChoose.value.major_name : ""),
                    1
                    /* TEXT */
                  ),
                  vue.createTextVNode("就业岗位技术需求 ")
                ])
              ]),
              nowChoose.value !== null ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                [
                  vue.createElementVNode("view", { class: "dataChartBox" }, [
                    vue.createVNode(_component_qiun_data_charts, {
                      type: "pie",
                      opts: opts.value,
                      chartData: chartData.value
                    }, null, 8, ["opts", "chartData"])
                  ]),
                  vue.createElementVNode("view", { class: "bottomTitle" }, " 数据分析： "),
                  vue.createElementVNode("view", { class: "analyzeBox" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "big" },
                      " 记录的数据条数：" + vue.toDisplayString(majorData.value.data_rows) + "条 ",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "big" },
                      " 数据更新时间：" + vue.toDisplayString(majorData.value.last_update),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "samll" }, [
                      vue.createTextVNode(" 掌握以下技能： "),
                      vue.createElementVNode("ul", { class: "detail" }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(majorData.value.main_skill, (item, index2) => {
                            return vue.openBlock(), vue.createElementBlock(
                              "li",
                              { key: index2 },
                              vue.toDisplayString(item),
                              1
                              /* TEXT */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "samll" }, [
                      vue.createTextVNode(" 拓展技术栈： "),
                      vue.createElementVNode("ul", { class: "detail" }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(majorData.value.expand_skill, (item, index2) => {
                            return vue.openBlock(), vue.createElementBlock(
                              "li",
                              { key: index2 },
                              vue.toDisplayString(item),
                              1
                              /* TEXT */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ])
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createVNode(_component_up_picker, {
              show: showPicker.value,
              ref_key: "uPickerRef",
              ref: uPickerRef,
              columns: columns.value,
              onConfirm: confirm,
              onChange: changeHandler,
              onCancel: closePicker
            }, null, 8, ["show", "columns"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesAnalyzeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/subject-analyze/pages/analyze/index.vue"]]);
  __definePage("pages/home/index", PagesHomeIndex);
  __definePage("pages/user/register/index", PagesUserRegisterIndex);
  __definePage("pages/user/login/index", PagesUserLoginIndex);
  __definePage("pages/tree/index", PagesTreeIndex);
  __definePage("pages/career/index", PagesCareerIndex);
  __definePage("pages/career/detail", PagesCareerDetail);
  __definePage("pages/plan/index", PagesPlanIndex);
  __definePage("pages/plan/addPlan", PagesPlanAddPlan);
  __definePage("pages/plan/allPlan", PagesPlanAllPlan);
  __definePage("pages/news/index", PagesNewsIndex);
  __definePage("pages/news/detail", PagesNewsDetail);
  __definePage("pages/analyze/index", PagesAnalyzeIndex);
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
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/subject-analyze/App.vue"]]);
  const { toString } = Object.prototype;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (let i2 = 0, l2 = obj.length; i2 < l2; i2++) {
        fn.call(null, obj[i2], i2, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
      forEach(arguments[i2], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v2) => {
          if (isDate(v2)) {
            v2 = v2.toISOString();
          } else if (isObject(v2)) {
            v2 = JSON.stringify(v2);
          }
          parts.push(`${encode(key)}=${encode(v2)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  const adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e2) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile({ ..._config, ...otherConfig, ...mergeKeys$1(optionalKeys, config2) });
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request({ ..._config, ...mergeKeys$1(optionalKeys, config2) });
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  const dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h2) => {
      if (h2 !== null) {
        fn(h2);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  const mergeConfig = (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method,
      url: config2.url || "",
      params: config2.params || {},
      custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
      header: deepMerge(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = { ...config3, ...mergeKeys(defaultToConfig2Keys, globalsConfig, config2) };
    if (method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = { ...config3, ...mergeKeys(defaultsKeys, globalsConfig, config2) };
    }
    return config3;
  };
  const defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone = function() {
    function _instanceof(obj, type2) {
      return type2 != null && obj instanceof type2;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_2) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_2) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_2) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto2;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value2) {
              resolve(_clone(value2, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto2 = Object.getPrototypeOf(parent2);
            child = Object.create(proto2);
          } else {
            child = Object.create(prototype);
            proto2 = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value2, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value2, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value2) {
            var entryChild = _clone(value2, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i2 in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i2);
          if (attrs) {
            child[i2] = _clone(parent2[i2], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i2);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i2] = _clone(parent2[i2], depth2 - 1);
          } catch (e2) {
            if (e2 instanceof TypeError) {
              continue;
            } else if (e2 instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            var symbol = symbols[i2];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i2 = 0; i2 < allPropertyNames.length; i2++) {
            var propertyName = allPropertyNames[i2];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c2 = function() {
      };
      c2.prototype = parent;
      return new c2();
    };
    function __objToStr(o2) {
      return Object.prototype.toString.call(o2);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o2) {
      return typeof o2 === "object" && __objToStr(o2) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o2) {
      return typeof o2 === "object" && __objToStr(o2) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o2) {
      return typeof o2 === "object" && __objToStr(o2) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re2) {
      var flags = "";
      if (re2.global)
        flags += "g";
      if (re2.ignoreCase)
        flags += "i";
      if (re2.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    /**
    * @param {Object} arg - 全局配置
    * @param {String} arg.baseURL - 全局根路径
    * @param {Object} arg.header - 全局header
    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
    * @param {String} arg.dataType = [json] - 全局默认的dataType
    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
    * @param {Object} arg.custom - 全局默认的自定义参数
    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
    */
    constructor(arg = {}) {
      if (!isPlainObject(arg)) {
        arg = {};
        formatAppLog("warn", "at node_modules/uview-plus/libs/luch-request/core/Request.js:39", "设置全局参数必须接收一个Object");
      }
      this.config = clone({ ...defaults, ...arg });
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */
    setConfig(f2) {
      this.config = f2(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    /**
    * @Function
    * @param {Object} config - 请求配置项
    * @prop {String} options.url - 请求路径
    * @prop {Object} options.data - 请求参数
    * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
    * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
    * @prop {Object} [options.header = config.header] - 请求header
    * @prop {Object} [options.method = config.method] - 请求方法
    * @returns {Promise<unknown>}
    */
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware({
        url: url2,
        method: "GET",
        ...options
      });
    }
    post(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "POST",
        ...options
      });
    }
    put(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "PUT",
        ...options
      });
    }
    delete(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "DELETE",
        ...options
      });
    }
    options(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "OPTIONS",
        ...options
      });
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  const zIndex = {
    toast: 10090,
    noNetwork: 10080,
    // popup包含popup，actionsheet，keyboard，picker的值
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  const platform$1 = platform;
  const http = new Request();
  let themeType = ["primary", "success", "error", "warning", "info"];
  function setConfig(configs) {
    index.shallowMerge(config, configs.config || {});
    index.shallowMerge(props$w, configs.props || {});
    index.shallowMerge(color$2, configs.color || {});
    index.shallowMerge(zIndex, configs.zIndex || {});
  }
  index.setConfig = setConfig;
  const $u = {
    route,
    date: index.timeFormat,
    // 另名date
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: themeType,
    http,
    config,
    // uview-plus配置信息相关，比如版本号
    zIndex,
    debounce,
    throttle,
    mixin,
    mpMixin,
    props: props$w,
    ...index,
    color: color$2,
    platform: platform$1
  };
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.config.globalProperties.$u = $u;
    Vue2.mixin(mixin);
  };
  const uviewPlus = {
    install
  };
  var isVue2 = false;
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e2) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value2) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value2));
          } catch (e2) {
          }
          currentSettings = value2;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value2) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value2);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  const piniaSymbol = Symbol("pinia");
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url2, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url2);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url2) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url2, false);
    try {
      xhr.send();
    } catch (e2) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e2) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a2 = document.createElement("a");
    a2.download = name;
    a2.rel = "noopener";
    if (typeof blob === "string") {
      a2.href = blob;
      if (a2.origin !== location.origin) {
        if (corsEnabled(a2.href)) {
          download(blob, name, opts);
        } else {
          a2.target = "_blank";
          click(a2);
        }
      } else {
        click(a2);
      }
    } else {
      a2.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a2.href);
      }, 4e4);
      setTimeout(function() {
        click(a2);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a2 = document.createElement("a");
        a2.href = blob;
        a2.target = "_blank";
        setTimeout(function() {
          click(a2);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url2 = reader.result;
        if (typeof url2 !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url2 = isChromeIOS ? url2 : url2.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url2;
        } else {
          location.assign(url2);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url2 = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url2);
      else
        location.href = url2;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url2);
      }, 4e4);
    }
  }
  function toastMessage(message, type2) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type2);
    } else if (type2 === "error") {
      console.error(piniaMessage);
    } else if (type2 === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o2) {
    return "_a" in o2 && "install" in o2;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error2) {
    if (error2 instanceof Error && error2.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia2) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia2.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalPasteState(pinia2) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia2, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalSaveState(pinia2) {
    try {
      saveAs(new Blob([JSON.stringify(pinia2.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error2) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia2) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia2, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error2) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  function loadStoresState(pinia2, state) {
    for (const key in state) {
      const storeState = pinia2.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia2.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type2) {
    switch (type2) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia2) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia2);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia2);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia2);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia2);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store = pinia2._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error2) {
                    getters[key] = error2;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia2];
          stores = stores.concat(Array.from(pinia2._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia2 : pinia2._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia2 : pinia2._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia2._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error2) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error: error2
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type: type2 }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type2),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type2 === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type2 === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    vue.toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia2 = vue.markRaw({
      install(app) {
        {
          pinia2._a = app;
          app.provide(piniaSymbol, pinia2);
          app.config.globalProperties.$pinia = pinia2;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia2);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia2.use(devtoolsPlugin);
    }
    return pinia2;
  }
  const pinia = createPinia();
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(uviewPlus);
    app.use(pinia);
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
