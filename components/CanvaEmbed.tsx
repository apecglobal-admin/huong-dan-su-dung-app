export default function CanvaEmbedInline() {
  return (
   <div
      style={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingTop: '177.7778%',
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        marginTop: '1.6em',
        marginBottom: '0.9em',
        overflow: 'hidden',
        borderRadius: 8,
        willChange: 'transform',
      }}
    >
      <iframe
        loading="lazy"
        src="https://www.canva.com/design/DAG2sAOfovk/s5KVB_VCut44bv54Bss5Mw/view?embed"
        allowFullScreen
        allow="fullscreen"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
        title="Canva design"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
      />
    </div>
  );
}
