const weatherCode = {
    100: ["100.svg", "500.svg", "Clear"],
    101: ["101.svg", "501.svg", "Clear with occasional clouds"],
    102: ["102.svg", "502.svg", "Clear with a chance of rain"],
    103: ["102.svg", "502.svg", "Clear with occasional rain"],
    104: ["104.svg", "504.svg", "Clear with a chance of snow"],
    105: ["104.svg", "504.svg", "Clear with occasional snow"],
    106: ["102.svg", "502.svg", "Clear with a chance of rain or snow"],
    107: ["102.svg", "502.svg", "Clear with occasional rain or snow"],
    108: ["102.svg", "502.svg", "Clear with a chance of rain or thunderstorms"],
    110: ["110.svg", "510.svg", "Clear, becoming partly cloudy"],
    111: ["110.svg", "510.svg", "Clear, becoming cloudy"],
    112: ["112.svg", "512.svg", "Clear, becoming rainy"],
    113: ["112.svg", "512.svg", "Clear, becoming occasionally rainy"],
    114: ["112.svg", "512.svg", "Clear, becoming rainy"],
    115: ["115.svg", "515.svg", "Clear, becoming snowy"],
    116: ["115.svg", "515.svg", "Clear, becoming occasionally snowy"],
    117: ["115.svg", "515.svg", "Clear, becoming snowy"],
    118: ["112.svg", "512.svg", "Clear, becoming rainy or snowy"],
    119: ["112.svg", "512.svg", "Clear, becoming rainy or thunderstorms"],
    120: ["102.svg", "502.svg", "Clear with morning and evening showers"],
    121: ["102.svg", "502.svg", "Clear with morning showers"],
    122: ["112.svg", "512.svg", "Clear with afternoon showers"],
    123: ["100.svg", "500.svg", "Clear with thunderstorms along the mountains"],
    124: ["100.svg", "500.svg", "Clear with snow along the mountains"],
    125: ["112.svg", "512.svg", "Clear with thunderstorms in the afternoon"],
    126: ["112.svg", "512.svg", "Clear with rain starting around noon"],
    127: ["112.svg", "512.svg", "Clear with rain starting in the evening"],
    128: ["112.svg", "512.svg", "Clear with rain at night"],
    130: ["100.svg", "500.svg", "Clear with morning fog"],
    131: ["100.svg", "500.svg", "Clear with fog in the early morning"],
    132: ["101.svg", "501.svg", "Clear with morning and evening clouds"],
    140: ["102.svg", "502.svg", "Clear with occasional rain and thunderstorms"],
    160: ["104.svg", "504.svg", "Clear with a chance of snow or rain"],
    170: ["104.svg", "504.svg", "Clear with occasional snow or rain"],
    181: ["115.svg", "515.svg", "Clear, becoming snowy or rainy"],
    200: ["200.svg", "200.svg", "Cloudy"],
    201: ["201.svg", "601.svg", "Cloudy with occasional clear intervals"],
    202: ["202.svg", "202.svg", "Cloudy with a chance of rain"],
    203: ["202.svg", "202.svg", "Cloudy with occasional rain"],
    204: ["204.svg", "204.svg", "Cloudy with a chance of snow"],
    205: ["204.svg", "204.svg", "Cloudy with occasional snow"],
    206: ["202.svg", "202.svg", "Cloudy with a chance of rain or snow"],
    207: ["202.svg", "202.svg", "Cloudy with occasional rain or snow"],
    208: ["202.svg", "202.svg", "Cloudy with a chance of rain or thunderstorms"],
    209: ["200.svg", "200.svg", "Fog"],
    210: ["210.svg", "610.svg", "Cloudy, becoming partly cloudy"],
    211: ["210.svg", "610.svg", "Cloudy, becoming clear"],
    212: ["212.svg", "212.svg", "Cloudy, becoming rainy"],
    213: ["212.svg", "212.svg", "Cloudy, becoming occasionally rainy"],
    214: ["212.svg", "212.svg", "Cloudy, becoming rainy"],
    215: ["215.svg", "215.svg", "Cloudy, becoming snowy"],
    216: ["215.svg", "215.svg", "Cloudy, becoming occasionally snowy"],
    217: ["215.svg", "215.svg", "Cloudy, becoming snowy"],
    218: ["212.svg", "212.svg", "Cloudy, becoming rainy or snowy"],
    219: ["212.svg", "212.svg", "Cloudy, becoming rainy or thunderstorms"],
    220: ["202.svg", "202.svg", "Cloudy with morning and evening showers"],
    221: ["202.svg", "202.svg", "Cloudy with morning showers"],
    222: ["212.svg", "212.svg", "Cloudy with afternoon showers"],
    223: ["201.svg", "601.svg", "Cloudy with occasional clear intervals during the day"],
    224: ["212.svg", "212.svg", "Cloudy with rain starting around noon"],
    225: ["212.svg", "212.svg", "Cloudy with rain starting in the evening"],
    226: ["212.svg", "212.svg", "Cloudy with rain at night"],
    228: ["215.svg", "215.svg", "Cloudy with snow starting around noon"],
    229: ["215.svg", "215.svg", "Cloudy with snow starting in the evening"],
    230: ["215.svg", "215.svg", "Cloudy with snow at night"],
    231: ["200.svg", "200.svg", "Cloudy with coastal mist or drizzle"],
    240: ["202.svg", "202.svg", "Cloudy with occasional rain and thunderstorms"],
    250: ["204.svg", "204.svg", "Cloudy with occasional snow and thunderstorms"],
    260: ["204.svg", "204.svg", "Cloudy with a chance of snow or rain"],
    270: ["204.svg", "204.svg", "Cloudy with occasional snow or rain"],
    281: ["215.svg", "215.svg", "Cloudy, becoming snowy or rainy"],
    300: ["300.svg", "300.svg", "Rain"],
    301: ["301.svg", "701.svg", "Rain with occasional clear intervals"],
    302: ["302.svg", "302.svg", "Rain with occasional lulls"],
    303: ["303.svg", "303.svg", "Rain with occasional snow"],
    304: ["300.svg", "300.svg", "Rain or snow"],
    306: ["300.svg", "300.svg", "Heavy rain"],
    308: ["308.svg", "308.svg", "Rain with strong winds"],
    309: ["303.svg", "303.svg", "Rain changing to snow"],
    311: ["311.svg", "711.svg", "Rain, clearing later"],
    313: ["313.svg", "313.svg", "Rain, becoming cloudy"],
    314: ["314.svg", "314.svg", "Rain with occasional snow"],
    315: ["314.svg", "314.svg", "Rain changing to snow"],
    316: ["311.svg", "711.svg", "Rain or snow, clearing later"],
    317: ["313.svg", "313.svg", "Rain or snow, becoming cloudy"],
    320: ["311.svg", "711.svg", "Rain in the morning, clearing later"],
    321: ["313.svg", "313.svg", "Rain in the morning, becoming cloudy"],
    322: ["303.svg", "303.svg", "Rain or snow in the morning and evening"],
    323: ["311.svg", "711.svg", "Rain starting around noon, clearing later"],
    324: ["311.svg", "711.svg", "Rain starting in the evening, clearing later"],
    325: ["311.svg", "711.svg", "Rain, clearing at night"],
    326: ["314.svg", "314.svg", "Rain starting in the evening, changing to snow"],
    327: ["314.svg", "314.svg", "Rain, changing to snow at night"],
    328: ["300.svg", "300.svg", "Brief heavy rain"],
    329: ["300.svg", "300.svg", "Rain changing to sleet"],
    340: ["400.svg", "400.svg", "Snow or rain"],
    350: ["300.svg", "300.svg", "Thunderstorms with rain"],
    361: ["411.svg", "811.svg", "Snow or rain, clearing later"],
    371: ["413.svg", "413.svg", "Snow or rain, becoming cloudy"],
    400: ["400.svg", "400.svg", "Snow"],
    401: ["401.svg", "801.svg", "Snow with occasional clear intervals"],
    402: ["402.svg", "402.svg", "Snow with occasional lulls"],
    403: ["403.svg", "403.svg", "Snow with occasional rain"],
    405: ["400.svg", "400.svg", "Heavy snow"],
    406: ["406.svg", "406.svg", "Blizzard conditions"],
    407: ["406.svg", "406.svg", "Stormy snow"],
    409: ["403.svg", "403.svg", "Snow changing to rain"],
    411: ["411.svg", "811.svg", "Snow, clearing later"],
    413: ["413.svg", "413.svg", "Snow, becoming cloudy"],
    414: ["414.svg", "414.svg", "Snow with occasional rain"],
    420: ["411.svg", "811.svg", "Snow in the morning, clearing later"],
    421: ["413.svg", "413.svg", "Snow in the morning, becoming cloudy"],
    422: ["414.svg", "414.svg", "Snow starting around noon, changing to rain"],
    423: ["414.svg", "414.svg", "Snow starting in the evening, changing to rain"],
    425: ["400.svg", "400.svg", "Brief heavy snow"],
    426: ["400.svg", "400.svg", "Snow changing to sleet"],
    427: ["400.svg", "400.svg", "Snow changing to sleet briefly"],
    450: ["400.svg", "400.svg", "Snow with thunderstorms"],  
  };
  
  // 130000=東京
  const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
  
  const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const timeDefinesList = new Array();
  const weatherCodeList = new Array();
  const tempsMinList = new Array();
  const tempsMaxList = new Array();
  
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (weather) {
      document
        .getElementById("location")
    
      const isTodaysData = weather[0].timeSeries[2].timeDefines.length === 4;
      const weatherCodes = weather[0].timeSeries[0].areas[0].weatherCodes;
      const timeDefines = weather[0].timeSeries[0].timeDefines;
      const temps = weather[0].timeSeries[2].areas[0].temps;
      weatherCodeList.push(weatherCodes[0], weatherCodes[1]);
      timeDefinesList.push(timeDefines[0], timeDefines[1]);
      if (isTodaysData) {
        tempsMinList.push(temps[0] === temps[1] ? "--" : temps[0], temps[2]);
        tempsMaxList.push(temps[1], temps[3]);
      } else {
        tempsMinList.push("--", temps[0]);
        tempsMaxList.push("--", temps[1]);
      }
  
      const startCount =
        weather[1].timeSeries[0].timeDefines.indexOf(timeDefines[1]) + 1;
      for (let i = startCount; i < startCount + 5; i++) {
        weatherCodeList.push(weather[1].timeSeries[0].areas[0].weatherCodes[i]);
        timeDefinesList.push(weather[1].timeSeries[0].timeDefines[i]);
        tempsMinList.push(weather[1].timeSeries[1].areas[0].tempsMin[i]);
        tempsMaxList.push(weather[1].timeSeries[1].areas[0].tempsMax[i]);
      }
  
      const date = document.getElementsByClassName("date");
      const weatherImg = document.getElementsByClassName("weatherImg");
      const weatherTelop = document.getElementsByClassName("weatherTelop");
      const tempMin = document.getElementsByClassName("tempMin");
      const tempMax = document.getElementsByClassName("tempMax");
  
      weatherCodeList.forEach(function (el, i) {
        let dt = new Date(timeDefinesList[i]);
        let weekdayCount = dt.getDay();
        if (weekdayCount === 0) date[i].style.color = "red";
        if (weekdayCount === 6) date[i].style.color = "blue";
        var m = ("00" + (dt.getMonth() + 1)).slice(-2);
        var d = ("00" + dt.getDate()).slice(-2);
        date[i].textContent = `${m}/${d}(${dayList[weekdayCount]})`;
        var isNight = Number(i === 0 && !isTodaysData)
        weatherImg[i].src = "https://www.jma.go.jp/bosai/forecast/img/" + weatherCode[el][isNight];
        weatherTelop[i].textContent = weatherCode[el][2];
        tempMin[i].textContent = tempsMinList[i] + "℃";
        tempMax[i].textContent = tempsMaxList[i] + "℃";
      });
    });
  
  