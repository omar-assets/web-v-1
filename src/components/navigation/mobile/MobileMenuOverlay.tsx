interface MobileMenuOverlayProps {
  onClose: () => void;
}

export function MobileMenuOverlay({ onClose }: MobileMenuOverlayProps) {
  return (
    <div 
      className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
      aria-hidden="true"
    />
  );
}