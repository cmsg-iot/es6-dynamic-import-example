export default {
  interface: {
    home: {
      week: (i) => {
        let w = ["M", "T", "W", "T", "F", "S", "S"];
        return "Week" + w[i];
      },
      temp: "Temp",
      hum: "Hum",
      soil: "SMO",
      p1: "WL",
      p2: "OP",
      mode: (i) => {
        let m = ["STOP", "MANUAL", "AUTO(ON)", "AUTO(IDLE)", "AUTO(PAUSE)"];
        return m[i];
      },
      time: (t) => {
        return t + "minutes";
      },
      title: "BEExANT",
    },
    menu: {
      sche: "Schedule",
      custom: "Custom",
      network: "Network",
      system: "System",
      terminal: "Terminal",
    },
    sche: {
      week: ["M", "T", "W", "T", "F", "S", "S"],
      station: "Area",
      update: "Update",
      add: "Add",
      weekTitle: "Week",
      time: "Time",
      ok: "Ok",
      cancel: "Cancel",
    },
    wifi: {
      curWifi: "Wi-Fi",
      wifiList: "Wi-Fi List",
      reconnect: "Reconnect",
      scan: "Scan",
    },
    config: {
      name: "Name",
      time: "SysTime",
      ssid: "SSID",
      serial: "Serial Baud",
      softSerial: "SoftSerial Baud",
      reload: "Reload",
    },
    terminal: {
      rssi: "RSSI",
      LT: "LT",
      input: "Command...",
      clear: "Clear",
      send: "Send",
      scroll: "Scroll",
      log: "Log",
    },
    custom: {
      mode: "Boot Mode",
      station: "Stations",
      title_p1: "Water Level",
      title_p2: "Output pressure",
      shift: "Shift",
      radial: "Radial",
      title_soil: "Soil Moisture",
      SML: "Lower Limit",
      title_protect: "System Protect",
      pump_IL_stop: "Pump IL Stop",
      pump_IL_start: "Pump IL Start",
      pump_act_id: "Pump Act Id",
      title_foehn: "Foehn Protect",
      temp_limit: "Temp Upper Limit",
      hum_limit: "Hum Lower Limit",
      actionTime: "actionTime",
    },
    common: {
      set: "Setting",
    },
  },
  message: {
    sche: {
      alert_edit: "The schedule can only be modified in stop or manual mode!",
      alert_week: "Choose at least a week!",
      alert_time: "Please choose a watering time!",
      alert_valve:
        "Set the effective watering time for at least one area. In order to prevent the solenoid valve from overheating, the upper limit of each station is 30 minutes.",
      alert_done:
        "The new schedule has been added. If you need automatic control, please go back to the home page and switch the mode back to automatic.",
      alert_no_sche: "No set schedule.",

      confirm_remove: "Are you sure to delete the schedule?",
    },
    custom: {
      alert_input_mode: "Please enter a pattern number",
      alert_unknown_mode:
        "Please enter one of the following numbers(0:STOP,1:MANUAL,2:AUTO)",
      prompt_mode: "Set boot mode(0:STOP,1:MANUAL,2:AUTO)",
      prompt_station: "Set the number of stations(Stations)\nRange: 1 ~ 6",
      prompt_ilwpsh: "Set water pressure displacement(ILWPSH)",
      prompt_ilwpr: "Set the inlet water pressure ratio(ILWPR)",
      prompt_olwpsh: "Set water pressure displacement(OLWPSH)",
      prompt_olwpr: "Set the water pressure ratio(OLWPR)",
      prompt_smzero: "Set soil humidity 0%(SMZero)",
      prompt_smfull: "Set soil humidity 100%(SMFull)",
      prompt_pump_stop:
        "Stop when the mercury Pu pressure is less than the value(Pump IL Stop)",
      prompt_pump_start:
        "Set the next setting when the mercury Pu pressure is greater than the value(Pump IL Start)",
      prompt_pump_start_act:
        "Execute the setting ID event(Pump IL Start Act ID)",
      prompt_sml:
        "Start when the soil water content is lower than the value(SML)\nRange: 0 ~ 100",
      prompt_smlact:
        "Set soil moisturizing startup time(SMLActT)\nRange: 0 ~ 30",
      prompt_foehn_temp:
        "Set air temperature upper limit(Foehn Temp)\nRange: 0 ~ 80",
      prompt_foehn_hum:
        "Set the relative humidity lower limit(Foehn Hum)\nRange: 0 ~ 100",
      prompt_foehn_opt:
        "Set the cycle spray time per station when the two conditions are reached(Foehn OpT)\nRange: 0 ~ 30",
    },
    system: {
      alert_wifi_timeout: "Timeout, please search again.",
      alert_not_null: "Please enter at least one word.",
      alert_not_vaild: "The format is not vaild, please try it out.",

      confirm_time: (T) => {
        return `OK to update the system time? ${T}`;
      },
      confirm_ssid: (ssid, pwd) => {
        return `Determine the change of WiFi name: ${ssid}, password: ${pwd} ?`;
      },
      confirm_reload:
        "Confirm the forced reorganization(Clear temporary deposits and re -obtain resources)?",

      prompt_wifi_connect: (ssid) => {
        return `SSID: ${ssid},Wifi password: `;
      },
      prompt_device_name: "Please enter the device name",
      prompt_set_ssid: "Please enter ssid",
      prompt_set_pwd: "Please enter the 8 ~ 16 -bit password",
      prompt_bps:
        "Please enter the Serial Baud number\n0: 9600\n1: 19200\n2: 38400\n3: 74800\n4: 115200\n5: 230400",
      prompt_ssbps:
        "Please enter the Soft Serial Baud number\n0: 9600\n1: 19200\n2: 38400",
    },
    control: {
      alert_manual:
        "Only manual mode can be controlled manually. Please click the button in the mode first to switch.",
    },
  },
};
