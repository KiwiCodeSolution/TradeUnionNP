"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YHGB59KBZD"></Script>
      <Script>
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YHGB59KBZD');`}
      </Script>
    </>
  );
}
