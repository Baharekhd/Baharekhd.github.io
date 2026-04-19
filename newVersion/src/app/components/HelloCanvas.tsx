import { useEffect, useRef } from 'react';

export function HelloCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textPositionRef = useRef({ x: 0, y: 0 });
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      // Initialize text position to center
      textPositionRef.current = {
        x: canvas.offsetWidth / 2,
        y: canvas.offsetHeight / 2
      };
      targetPositionRef.current = { ...textPositionRef.current };
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };

      const textPos = textPositionRef.current;
      const dx = mousePositionRef.current.x - textPos.x;
      const dy = mousePositionRef.current.y - textPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // If mouse is close to text, move text away
      if (distance < 150) {
        const angle = Math.atan2(dy, dx);
        const pushDistance = 150 - distance;
        targetPositionRef.current = {
          x: textPos.x - Math.cos(angle) * pushDistance * 0.5,
          y: textPos.y - Math.sin(angle) * pushDistance * 0.5
        };
      } else {
        // Return to center
        targetPositionRef.current = {
          x: canvas.offsetWidth / 2,
          y: canvas.offsetHeight / 2
        };
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Smooth interpolation
      textPositionRef.current.x += (targetPositionRef.current.x - textPositionRef.current.x) * 0.1;
      textPositionRef.current.y += (targetPositionRef.current.y - textPositionRef.current.y) * 0.1;

      // Draw text
      ctx.font = 'bold 72px sans-serif';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('hello', textPositionRef.current.x, textPositionRef.current.y);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-pointer"
      style={{ touchAction: 'none' }}
    />
  );
}
