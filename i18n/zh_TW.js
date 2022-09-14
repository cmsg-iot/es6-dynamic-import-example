export default {
  interface: {
    home: {
      week: (i) => {
        let w = ["一", "二", "三", "四", "五", "六", "日"];
        return "星期" + w[i];
      },
      temp: "氣溫",
      hum: "濕度",
      soil: "土壤濕度",
      p1: "水位",
      p2: "出口壓力",
      mode: (i) => {
        let m = ["停止", "手動", "自動(執行)", "自動(待機)", "自動(暫停)"];
        return m[i];
      },
      time: (t) => {
        return "剩 " + t + " 分";
      },
      title: "BEExANT",
    },
    menu: {
      sche: "排程設定",
      custom: "自定義設定",
      network: "網路設定",
      system: "系統設定",
      terminal: "終端機",
    },
    sche: {
      week: ["一", "二", "三", "四", "五", "六", "日"],
      station: "區",
      update: "更新",
      add: "新增",
      weekTitle: "週",
      time: "時間",
      ok: "確認",
      cancel: "取消",
    },
    wifi: {
      curWifi: "目前Wi-Fi",
      wifiList: "Wi-Fi 搜尋清單",
      reconnect: "重新連上",
      scan: "搜尋",
    },
    config: {
      name: "裝置名稱",
      time: "系統時間",
      ssid: "SSID 設定",
      serial: "Serial baud",
      softSerial: "SoftSerial baud",
      reload: "重新整理",
    },
    terminal: {
      rssi: "訊號",
      LT: "啟動時間",
      input: "輸入命令...",
      clear: "清除",
      send: "發送",
      scroll: "捲動",
      log: "訊息",
    },
    custom: {
      mode: "開機模式",
      station: "系統站數",
      title_p1: "進口水壓校正",
      title_p2: "出口水壓校正",
      shift: "位移",
      radial: "比例",
      title_soil: "土壤水分校正",
      SML: "土壤含水低於",
      title_protect: "系統保護",
      pump_IL_stop: "進水壓小於時停止",
      pump_IL_start: "進水壓大於時執行設定",
      pump_act_id: "設定事件id",
      title_foehn: "焚風設定",
      temp_limit: "空氣溫度上限",
      hum_limit: "空氣濕度下限",
      actionTime: "每站循環噴灑",
    },
    common: {
      set: "點擊設定",
    },
  },
  message: {
    sche: {
      alert_edit: "停止或手動模式下才可修改排程！",
      alert_week: "至少選擇一個星期！",
      alert_time: "請選擇灑水時段！",
      alert_valve:
        "至少設定一區有效的灑水時間,為防止電磁閥過熱，每站上限為30分鐘。",
      alert_done: "新增排程完成，若需要自動控制，請回到首頁將模式切換回自動。",
      alert_no_sche: "無任何設定排程",

      confirm_remove: "確認是否刪除排程？",
    },
    custom: {
      alert_input_mode: "請輸入模式編號",
      alert_unknown_mode: "請輸入以下編號其一(0:STOP,1:MANUAL,2:AUTO)",
      prompt_mode: "設定開機模式(0:STOP,1:MANUAL,2:AUTO)",
      prompt_station: "設定開關數量(Stations)\n範圍: 1 ~ 6",
      prompt_ilwpsh: "設定進水水壓位移(ILWPSH)",
      prompt_ilwpr: "設定進水水壓比例(ILWPR)",
      prompt_olwpsh: "設定出水水壓位移(OLWPSH)",
      prompt_olwpr: "設定出水水壓比例(OLWPR)",
      prompt_smzero: "設定土壤濕度 0%(SMZero)",
      prompt_smfull: "設定土壤濕度 100%(SMFull)",
      prompt_pump_stop: "設定汞浦壓力小於值時停止(Pump IL Stop)",
      prompt_pump_start: "設定汞浦壓力大於值時執行下一設定(Pump IL Start)",
      prompt_pump_start_act: "執行設定ID事件(Pump IL Start Act ID)",
      prompt_sml: "設定土壤含水低於值時啟動(SML)\n範圍: 0 ~ 100",
      prompt_smlact: "設定土壤保濕啟動時間(SMLActT)\n範圍: 0 ~ 30",
      prompt_foehn_temp: "設定空氣溫度上限(Foehn Temp)\n範圍: 0 ~ 80 ",
      prompt_foehn_hum: "設定相對濕度下限(Foehn Hum)\n範圍: 0 ~ 100",
      prompt_foehn_opt:
        "兩個條件達成時設定每站循環噴灑時間(Foehn OpT)\n範圍: 0 ~ 30",
    },
    system: {
      alert_wifi_timeout: "已逾時，請重新搜尋。",
      alert_not_null: "請輸入至少一個字",
      alert_not_vaild: "格式不符，請重試",

      confirm_time: (T) => {
        return `確定要更新系統時間? ${T}`;
      },
      confirm_ssid: (ssid, pwd) => {
        return `確定更改為 wifi名稱: ${ssid}, 密碼: ${pwd} ?`;
      },
      confirm_reload: "確認強制重新整理(清除暫存並重新獲取資源)?",

      prompt_wifi_connect: (ssid) => {
        return `SSID: ${ssid},Wifi密碼: `;
      },
      prompt_device_name: "請輸入裝置名稱",
      prompt_set_ssid: "請輸入SSID",
      prompt_set_pwd: "請輸入8~16位密碼",
      prompt_bps:
        "請輸入serial baud 編號\n0: 9600\n1: 19200\n2: 38400\n3: 74800\n4: 115200\n5: 230400",
      prompt_ssbps: "請輸入soft serial baud 編號\n0: 9600\n1: 19200\n2: 38400",
    },
    control: {
      alert_manual: "手動模式才能手動控制，請先點擊模式下的按鈕切換。",
    },
  },
};
