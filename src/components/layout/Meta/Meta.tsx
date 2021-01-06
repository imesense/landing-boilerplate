export function Meta() {
  const data = {
    title: 'Landing boilerplate',
    forSocials: {
      title: 'Landing boilerplate',
      desc: 'Create landing faster',
      url: 'http://github.com/Z3SA/landing-boilerplate',
    },
    ogImage: {
      width: 1200,
      height: 628,
    },
    desc: 'Create landing faster',
    barColor: '#ffb900',
  };

  const appleTouchSizes = [57, 60, 72, 76, 114, 120, 144, 152, 180];
  const faviconSizes = [16, 32, 96, 192];

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <title>{data.title}</title>
      <link rel="shortcut icon" href="/images/favicons/64.png" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={data.forSocials.title} />
      <meta property="og:description" content={data.forSocials.desc} />
      <meta property="og:url" content={data.forSocials.url} />
      <meta property="vk:image" content="/images/og-image.png" /> 
      <meta property="twitter:image" content="/images/og-image.png" />
      <meta property="og:image" content="/images/og-image.png" />
      <meta property="og:image:width" content={data.ogImage.width.toString()} />
      <meta property="og:image:height" content={data.ogImage.height.toString()} />
      <link rel="image_src" href="/images/og-image.png" />
      <meta name="description" content={data.desc} />
      <meta name="theme-color" content={data.barColor} />
      <meta name="msapplication-navbutton-color" content={data.barColor} />
      <meta name="apple-mobile-web-app-status-bar-style" content={data.barColor} />
      <meta httpEquiv="Cache-Control" content="max-age=86400, must-revalidate" />
      {
        appleTouchSizes.map(
          (size, i) => (
            <link 
              key={i} 
              rel="apple-touch-icon" 
              sizes={`${size}x${size}`} 
              href={`/images/favicons/${size}.png`} 
            />
          )
        )
      }
      {
        faviconSizes.map(
          (size, i) => (
            <link 
              key={i}
              rel="icon" 
              type="image/png" 
              sizes={`${size}x${size}`} 
              href={`/images/favicons/${size}.png`} 
            />
          )
        )
      }
      <meta name="msapplication-TileImage" content="images/favicons/144.png" />
      <meta name="yandex-verification" content="aa8147f4e34cbde3" />
    </>
  );
}