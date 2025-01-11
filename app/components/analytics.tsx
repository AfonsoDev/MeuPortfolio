"use client";
import Script from 'next/script';

export function Analytics() {
	const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	if (!token) {
		return null;
	}
	return (
		<>
		<Script
		  strategy='lazyOnload'
		  src={`https://www.googletagmanager.com/gtag/js?id=G-G6XH8QKV7Q`}
		/>
  
		<Script id='' strategy='lazyOnload'>
		  {`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-G6XH8QKV7Q', {
				page_path: window.location.pathname,
				});
			`}
		</Script>
	  </>
	);
}
