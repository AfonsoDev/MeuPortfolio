"use client";
import Script from 'next/script';

export function Analytics() {
	const token = process.env.GOOGLE_TOKEN;
	if (!token) {
		return null;
	}
	return (
		<>
		<Script
		  strategy='lazyOnload'
		  src={`https://www.googletagmanager.com/gtag/js?id=${token}`}
		/>
  
		<Script id='' strategy='lazyOnload'>
		  {`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${token}', {
				page_path: window.location.pathname,
				});
			`}
		</Script>
	  </>
	);
}
