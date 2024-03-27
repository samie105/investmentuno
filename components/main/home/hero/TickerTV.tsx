"use client";
import React from "react";
import { TickerTape } from "react-tradingview-embed";

export default function TickerTV() {
  return (
    <div>
      <TickerTape
        widgetPropsAny={{
          symbols: [
            {
              proName: "BITSTAMP:BTCUSD",
              title: "Bitcoin",
            },
            {
              proName: "BITSTAMP:ETHUSD",
              title: "Ethereum",
            },
            {
              description: "Doge",
              proName: "CRYPTOCAP:DOGE",
            },
            {
              description: "Binance",
              proName: "CRYPTOCAP:BNB",
            },
            {
              description: "Ripple",
              proName: "CRYPTOCAP:XRP",
            },
          ],
          showSymbolLogo: true,
          isTransparent: true,
          displayMode: "adaptive",
          colorTheme: "dark",
          locale: "en",
        }}
      />
    </div>
  );
}
