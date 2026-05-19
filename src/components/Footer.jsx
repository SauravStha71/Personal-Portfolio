export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '28px 24px',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: '12px',
      color: 'var(--muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: 14 }}>&lt;/&gt;</span>
      Designed &amp; built by Saurav Shrestha · 2026
    </footer>
  );
}
