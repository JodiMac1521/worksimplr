'use client';
import { useEffect, useRef, useState } from 'react';

function Counter({ target, suffix = '', duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = parseFloat(target.replace(/[^0-9.]/g, ''));
        const steps = 60;
        const inc = num / steps;
        let cur = 0;
        const interval = setInterval(() => {
          cur += inc;
          if (cur >= num) { cur = num; clearInterval(interval); }
          setVal(Math.floor(cur));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  // Format the display
  const raw = target.replace(/[^0-9.]/g, '');
  const isDecimal = target.includes('.');
  const prefix = target.match(/^[^0-9]*/)?.[0] || '';
  const display = isDecimal && val >= parseFloat(raw) ? raw : val.toLocaleString();

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

export default function AnimatedStats() {
  const SERIF = "'DM Serif Display', serif";
  return (
    <div style={{ display:'flex',justifyContent:'center',gap:64,flexWrap:'wrap',paddingTop:40,borderTop:'1px solid rgba(224,123,57,0.2)' }}>
      {[
        { target:'5000', suffix:'+', label:'Projects Completed' },
        { target:'98', suffix:'%', label:'Completion Rate' },
        { target:'2', suffix:' weeks', label:'Avg Sprint Time' },
      ].map(s => (
        <div key={s.label} style={{ textAlign:'center' }}>
          <div style={{ fontFamily:SERIF, fontSize:'clamp(2rem,4vw,2.8rem)', color:'#E07B39', fontWeight:400, lineHeight:1 }}>
            <Counter target={s.target} suffix={s.suffix} />
          </div>
          <div style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.4)', marginTop:6, letterSpacing:'0.5px' }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
