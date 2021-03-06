﻿

//Original 
/*
var _gauges = _gauges || [];
  (function() {
    var t   = document.createElement('script');
    t.type  = 'text/javascript';
    t.async = true;
    t.id    = 'gauges-tracker';
    t.setAttribute('data-site-id', '4f1852bccb25bc4e10000007');
    t.src = '//secure.gaug.es/track.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
  })();
*/

//TeamMentor modified 

//from https://secure.gaug.es/track.js on 4/13/12

var my_Gauge = 
    {
            data_site_id : '4f1852bccb25bc4e10000007'
        ,   title        : null
        ,   resource     : null
        ,   track        : function(title, resource)
                            {
                                my_Gauge.title = title;
                                my_Gauge.resource = resource;
                                _gauges.track();
                            }
    };

var _gauges= _gauges || [];

(function()
    {
        var h= (_gauges['slice']) ? _gauges.slice(0):[];
        _gauges =   {
                            track_referrer:true
                        ,   image:new Image()
                        ,   track:function()
                                {
                                    this.setCookie('_gauges_cookie',1,1);
                                    var a=this.url();
                                    if(a)
                                    {
                                        this.image.src=a;
                                        var b=60*60,d=b*24,f=d*31,c=d*365,i=c*10;
                                        if(!this.getCookie('_gauges_unique_hour'))  { this.setCookie('_gauges_unique_hour',1,b) }
                                        if(!this.getCookie('_gauges_unique_day'))   { this.setCookie('_gauges_unique_day',1,d) }
                                        if(!this.getCookie('_gauges_unique_month')) { this.setCookie('_gauges_unique_month',1,f) }
                                        if(!this.getCookie('_gauges_unique_year'))  { this.setCookie('_gauges_unique_year',1,c) }
                                        if(!this.getCookie('_gauges_unique'))       { this.setCookie('_gauges_unique',1,i) }
                                    }
                                }
                        ,   push:function(a)
                                {
                                    var b=a.shift();
                                    if(b=='track')
                                    {
                                        _gauges.track()
                                    }
                                }
                        ,   url:function()
                                {
                                    var a,b
                                    //TM changes - start
                                        //d=this.$('gauges-tracker');
                                        // if(d)
                                   {
                                        
                                        //b=d.getAttribute('data-site-id'); 
                                        b = my_Gauge.data_site_id;

                                        //a=d.src.replace('/track.js','/track.gif');
                                        a = "https://secure.gaug.es/track.gif"
                                        var title = my_Gauge.title ? my_Gauge.title : this.title();
                                        var resource = my_Gauge.resource ? my_Gauge.resource : this.resource();
                                       //TM changes - end

                                        a+="?h[site_id]="       + b;
                                        a+="&h[resource]="      + resource;
                                        a+="&h[referrer]="      + this.referrer();
                                        a+="&h[title]="         + title;
                                        a+="&h[user_agent]="    + this.agent();
                                        a+="&h[unique]="        + this.unique();
                                        a+="&h[unique_hour]="   + this.uniqueHour();
                                        a+="&h[unique_day]="    + this.uniqueDay();
                                        a+="&h[unique_month]="  + this.uniqueMonth();
                                        a+="&h[unique_year]="   + this.uniqueYear();
                                        a+="&h[screenx]="       + this.screenWidth();
                                        a+="&h[browserx]="      + this.browserWidth();
                                        a+="&h[browsery]="      + this.browserHeight();
                                        a+="&timestamp="        + this.timestamp()
                                   }
                                   return a
                                }
                        ,   domain:function()
                                {
                                    return window.location.hostname
                                }
                        ,   referrer:function()
                                {
                                    var a='';
                                    if(!this.track_referrer)
                                    {
                                        return a
                                    }
                                    this.track_referrer=false;
                                    try
                                    {
                                        a=top.document.referrer
                                    }
                                    catch(e1)
                                    {
                                        try
                                        {
                                            a=parent.document.referrer
                                        }
                                        catch(e2)
                                        {
                                            a=''
                                        }
                                    }
                                    if(a=='')
                                    {
                                        a=document.referrer
                                    }
                                    return this.escape(a)
                                }
                        ,   agent:function()
                                {
                                    return this.escape(navigator.userAgent)
                                }
                        ,
                            escape:function(a)
                                {
                                    return(typeof(encodeURIComponent)=='function') 
                                        ? encodeURIComponent(a)
                                        : escape(a)
                                }
                        ,   resource    :function(){ return this.escape(document.location.href) }
                        ,   timestamp   :function(){return new Date().getTime()}
                        ,   title       :function(){return(document.title&&document.title!="")?this.escape(document.title):''}
                        ,   uniqueHour  :function(){if(!this.getCookie('_gauges_cookie')){return 0}return this.getCookie('_gauges_unique_hour')?0:1}
                        ,uniqueDay:function(){if(!this.getCookie('_gauges_cookie')){return 0}return this.getCookie('_gauges_unique_day')?0:1}
                        ,uniqueMonth:function(){if(!this.getCookie('_gauges_cookie')){return 0}return this.getCookie('_gauges_unique_month')?0:1}
                        ,uniqueYear:function(){if(!this.getCookie('_gauges_cookie')){return 0}return this.getCookie('_gauges_unique_year')?0:1}
                        ,unique:function(){if(!this.getCookie('_gauges_cookie')){return 0}return this.getCookie('_gauges_unique')?0:1}
                        ,screenWidth:function(){try{return screen.width}catch(e){return 0}}
                        ,browserDimensions:function(){var a=0,b=0;try{if(typeof(window.innerWidth)=='number'){a=window.innerWidth;b=window.innerHeight}else if(document.documentElement&&document.documentElement.clientWidth){a=document.documentElement.clientWidth;b=document.documentElement.clientHeight}else if(document.body&&document.body.clientWidth){a=document.body.clientWidth;b=document.body.clientHeight}}catch(e){}return{width:a,height:b}}
                        ,browserWidth:function(){return this.browserDimensions().width}
                        ,browserHeight:function(){return this.browserDimensions().height},$:function(a){if(document.getElementById){return document.getElementById(a)}return null}
                        ,setCookie:function(a,b,d){var f,c;b=escape(b);if(d){f=new Date();f.setTime(f.getTime()+(d*1000));c='; expires='+f.toGMTString()}else{c=''}document.cookie=a+"="+b+c+"; path=/"}
                        ,getCookie:function(a){var b=a+"=",d=document.cookie.split(';');for(var f=0;f<d.length;f++){var c=d[f];while(c.charAt(0)==' '){c=c.substring(1,c.length)}if(c.indexOf(b)==0){return unescape(c.substring(b.length,c.length))}}return null
                    }
                };
        _gauges.track();
        for(var g=0,j=h.length;g<j;g++)
        {
            _gauges.push(h[g])
        }
    })();

 