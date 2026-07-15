import { useState, useEffect } from 'react';
import Head from 'next/head';

const modules = [
  { icon: '🚀', name: 'Startup Hub', desc: 'O\\'z startup\\'ingizni yarating', color: '#8B5CF6' },
  { icon: '🤖', name: 'AI Hub', desc: '5+ AI model bilan ishlash', color: '#EC4899' },
  { icon: '🎮', name: 'Games', desc: '50+ o\\'yin (Telegram)', color: '#06B6D4' },
  { icon: '🎓', name: 'Academy', desc: 'Video kurslar, sertifikat', color: '#10B981' },
  { icon: '🛡️', name: 'Cyber', desc: 'Kiberxavfsizlik darslari', color: '#F59E0B' },
  { icon: '💘', name: 'Match', desc: 'Anonim tanishuv', color: '#EF4444' },
  { icon: '🛒', name: 'Market', desc: 'Marketplace, e\\'lonlar', color: '#84CC16' },
  { icon: '💼', name: 'Jobs', desc: 'Ish topish', color: '#3B82F6' },
  { icon: '💰', name: 'Investors', desc: 'Sarmoya izlash', color: '#F59E0B' },
  { icon: '🕶️', name: 'Social', desc: 'Cyberpunk ijtimoiy tarmoq', color: '#A855F7' },
  { icon: '📊', name: 'SMM', desc: 'SMM xizmatlari', color: '#EC4899' },
  { icon: '🔗', name: 'Chain', desc: 'Blockchain, kripto', color: '#06B6D4' },
  { icon: '📱', name: 'Mobile', desc: 'Android ilova', color: '#10B981' },
  { icon: '💼', name: 'Portfolio', desc: 'Portfolio builder', color: '#8B5CF6' },
];

export default function Home() {
  const [time, setTime] = useState<string>('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString('uz-UZ'));
    };
    updateTime();
    const t = setInterval(updateTime, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <Head>
        <title>🌌 KRYZENVERSE — Mega-ekosistema</title>
        <meta name="description" content="14+ modul. Startup + AI + Games + Academy + Match + Marketplace + Mobile + Bot. Hammasi bitta osmonda." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 30%, #16213e 60%, #0a1628 100%)',
        color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflow: 'hidden',
      }}>
        <header style={{
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{
              width: '50px', height: '50px',
              background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
              borderRadius: '15px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '28px',
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
            }}>🌌</div>
            <div>
              <h1 style={{ margin: 0, fontSize: '26px', fontWeight: 900, letterSpacing: '-0.5px' }}>
                KRYZENVERSE
              </h1>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.6 }}>v1.0.0 • live</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{
              padding: '8px 16px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '20px',
              fontSize: '13px',
              color: '#10B981',
            }}>
              ● {time}
            </div>
            <a
              href="https://github.com/KRYZENSYS/kryzenverse"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '10px 20px',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                color: '#fff',
                borderRadius: '20px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >GitHub ⭐</a>
          </div>
        </header>

        <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
          <section style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '30px',
              fontSize: '14px',
              marginBottom: '30px',
            }}>
              <span style={{
                width: '8px', height: '8px',
                background: '#10B981',
                borderRadius: '50%',
                boxShadow: '0 0 10px #10B981',
                animation: 'pulse 2s infinite',
              }} />
              Live • Mega-ekosistema
            </div>
            <h2 style={{
              fontSize: 'clamp(40px, 8vw, 88px)',
              fontWeight: 900,
              margin: '0 0 25px 0',
              lineHeight: 1.05,
              letterSpacing: '-2px',
            }}>
              Barcha loyihalaringiz<br />
              <span style={{
                background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                bitta osmonda
              </span>
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              maxWidth: '700px',
              margin: '0 auto 40px',
              opacity: 0.85,
              lineHeight: 1.6,
            }}>
              14+ modul. Startup, AI, Games, Academy, Match, Marketplace, Mobile, Bot. Hammasi bitta ekosistema — o\\'zbek tilida, bepul, ochiq kod.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setCounter(counter + 1)}
                style={{
                  padding: '18px 40px',
                  fontSize: '18px',
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)',
                }}
              >
                Bosildi: {counter} 🚀
              </button>
              <button
                onClick={() => alert('🎉 KRYZENVERSE muvaffaqiyatli ishlayapti!\n\n14 ta modul tayyor!')}
                style={{
                  padding: '18px 40px',
                  fontSize: '18px',
                  fontWeight: 700,
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                }}
              >
                Test tugma 🎉
              </button>
            </div>
          </section>

          <section>
            <h3 style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 800,
              textAlign: 'center',
              margin: '0 0 50px 0',
            }}>
              🌟 14 ta modul
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}>
              {modules.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '30px',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = m.color;
                    e.currentTarget.style.boxShadow = `0 20px 60px ${m.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-30px', right: '-30px',
                    width: '100px', height: '100px',
                    background: `radial-gradient(circle, ${m.color}30, transparent 70%)`,
                    borderRadius: '50%',
                  }} />
                  <div style={{ fontSize: '44px', marginBottom: '15px' }}>{m.icon}</div>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 700, color: m.color }}>
                    {m.name}
                  </h4>
                  <p style={{ margin: 0, opacity: 0.7, fontSize: '14px', lineHeight: 1.5 }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section style={{
            marginTop: '100px',
            padding: '60px 40px',
            background: 'rgba(139, 92, 246, 0.05)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '30px',
            textAlign: 'center',
          }}>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, margin: '0 0 20px 0' }}>
              📊 Texnologiyalar
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '15px',
              maxWidth: '900px',
              margin: '30px auto 0',
            }}>
              {['Next.js 15', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Kotlin', 'Groq AI', 'Telegram', 'WebSocket'].map((t) => (
                <div key={t} style={{
                  padding: '15px 20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 600,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  {t}
                </div>
              ))}
            </div>
          </section>

          <footer style={{
            marginTop: '80px',
            padding: '40px 20px',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <p style={{ fontSize: '16px', opacity: 0.8, margin: '0 0 10px 0' }}>
              🌌 <strong>KRYZENVERSE</strong> — barcha loyihalaringiz bitta osmonda
            </p>
            <p style={{ fontSize: '13px', opacity: 0.5, margin: 0 }}>
              © 2026 KRYZENSYS • MIT • GitHub Pages da joylashgan • $0/oy
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
