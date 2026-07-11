import { ImageResponse } from 'next/og';

// Route segment config — required for static export
export const dynamic = 'force-static';

// Image metadata
export const size = { width: 96, height: 96 };
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#131313',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontSize: 39,
          fontWeight: 700,
          color: '#00ff88',
          letterSpacing: '-0.5px',
        }}
      >
        KX
      </div>
    ),
    { ...size }
  );
}
