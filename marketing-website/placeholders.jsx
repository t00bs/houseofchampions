/* Placeholder image components — striped SVGs with monospace captions */

function StripedPlaceholder({ caption, hue = 38, sat = 12, light = 14, variant = 0, accent = null }) {
  const stripeId = React.useId();
  const dotId = React.useId();
  const colorA = `hsl(${hue} ${sat}% ${light}%)`;
  const colorB = `hsl(${hue} ${sat}% ${light + 4}%)`;
  const colorC = `hsl(${hue} ${sat}% ${light + 8}%)`;
  const angle = (variant * 13) % 90;
  const accentLine = accent || `hsl(${hue + 6} ${sat + 8}% ${light + 18}%)`;
  return (
    <div className="placeholder">
      <svg className="stripes" preserveAspectRatio="none" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={stripeId} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform={`rotate(${angle})`}>
            <rect width="14" height="14" fill={colorA}/>
            <rect width="7" height="14" fill={colorB}/>
          </pattern>
          <pattern id={dotId} width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="1" fill={colorC}/>
          </pattern>
          <radialGradient id={`g-${stripeId}`} cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor={`hsl(${hue} ${sat + 2}% ${light + 18}%)`}/>
            <stop offset="100%" stopColor={colorA}/>
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#g-${stripeId})`}/>
        <rect width="400" height="500" fill={`url(#${stripeId})`} opacity="0.45"/>
        <rect width="400" height="500" fill={`url(#${dotId})`} opacity="0.5"/>
        {/* subtle composition lines */}
        <line x1="0" y1={120 + variant*10} x2="400" y2={80 + variant*8} stroke={accentLine} strokeWidth="0.5" opacity="0.5"/>
        <line x1="0" y1={350 - variant*6} x2="400" y2={380 - variant*8} stroke={accentLine} strokeWidth="0.5" opacity="0.4"/>
      </svg>
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
}

Object.assign(window, { StripedPlaceholder });

/* Real photograph — same frame treatment as the striped placeholder */
function Photo({ src, caption, pos = "center", alt = "" }) {
  return (
    <div className="placeholder">
      <img className="photo" src={src} alt={alt} loading="lazy" style={{ objectPosition: pos }} />
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
}

/* Picks a real photo when `img` is supplied, else the abstract striped tile */
function Media({ img, pos, caption, hue = 38, variant = 0, alt = "" }) {
  if (img) return <Photo src={img} caption={caption} pos={pos} alt={alt} />;
  return <StripedPlaceholder caption={caption} hue={hue} variant={variant} />;
}

Object.assign(window, { StripedPlaceholder, Photo, Media });
