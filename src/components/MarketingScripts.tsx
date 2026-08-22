import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-PJVS9KPR";
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/** Loads GTM / gtag / Meta only after load + idle — keeps main thread free for LCP. */
export function MarketingScripts() {
  return (
    <Script id="marketing-deferred" strategy="lazyOnload">
      {`
        (function(){
          window.dataLayer=window.dataLayer||[];
          function run(){
            ${GTM_ID ? `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');` : ""}
            ${GOOGLE_ADS_ID || GA4_ID ? `
            var g=document.createElement('script');g.async=true;
            g.src='https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID ?? GA4_ID}';
            document.head.appendChild(g);
            function gtag(){dataLayer.push(arguments);}
            window.gtag=gtag;gtag('js',new Date());
            ${GA4_ID ? `gtag('config','${GA4_ID}');` : ""}
            ${GOOGLE_ADS_ID ? `gtag('config','${GOOGLE_ADS_ID}');` : ""}` : ""}
            ${META_PIXEL_ID ? `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${META_PIXEL_ID}');fbq('track','PageView');` : ""}
          }
          if('requestIdleCallback' in window){requestIdleCallback(run,{timeout:3500});}
          else{setTimeout(run,2500);}
        })();
      `}
    </Script>
  );
}

export function MarketingNoScript() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-PJVS9KPR";
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
