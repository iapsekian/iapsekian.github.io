const e=Global.theme_config.home_banner.subtitle.typing_speed,t=Global.theme_config.home_banner.subtitle.backing_speed,o=Global.theme_config.home_banner.subtitle.backing_delay,a=Global.theme_config.home_banner.subtitle.starting_delay,n=Global.theme_config.home_banner.subtitle.loop,l=Global.theme_config.home_banner.subtitle.smart_backspace,b=Global.theme_config.home_banner.subtitle.hitokoto.api;Global.theme_config.home_banner.subtitle.hitokoto.enable?Global.initTyped=i=>{fetch(b).then((e=>e.json())).then((b=>{var c;c=b.hitokoto,new Typed("#"+i,{strings:[c],typeSpeed:e||100,smartBackspace:l||!1,backSpeed:t||80,backDelay:o||1500,loop:n||!1,startDelay:a||500})})).catch(console.error)}:Global.initTyped=b=>{const i=[...Global.theme_config.home_banner.subtitle.text];if(document.getElementById(b)){new Typed("#"+b,{strings:i,typeSpeed:e||100,smartBackspace:l||!1,backSpeed:t||80,backDelay:o||1500,loop:n||!1,startDelay:a||500})}};