import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const scriptRef = useRef(null);

  useEffect(() => {
    scriptRef.current = document.createElement("script");
    scriptRef.current.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    scriptRef.current.type = "text/javascript";
    scriptRef.current.async = true;
    scriptRef.current.innerHTML = `
      {
        "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "enable_publishing": false,
        "hide_legend": true,
        "allow_symbol_change": true,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(scriptRef.current);

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container rounded-xl" ref={container}></div>
  );
}

export default memo(TradingViewWidget);
