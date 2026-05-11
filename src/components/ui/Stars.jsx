// SVG star primitives — all sized via `starSize` prop (px number)
function FullStar({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#d4a827" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function HalfStar({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="half-grad">
          <stop offset="50%" stopColor="#d4a827" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="url(#half-grad)"
      />
    </svg>
  );
}

function EmptyStar({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Stars({ rating, starSize = 20 }) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full  }).map((_, i) => <FullStar  key={`f-${i}`} size={starSize} />)}
      {half &&                                       <HalfStar              size={starSize} />}
      {Array.from({ length: empty }).map((_, i) => <EmptyStar key={`e-${i}`} size={starSize} />)}
    </div>
  );
}