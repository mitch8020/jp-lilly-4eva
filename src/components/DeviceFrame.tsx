interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-[1920px] md:h-[1080px] bg-white rounded-[40px] shadow-[0_10px_50px_-12px_rgba(0,0,0,0.25)] relative overflow-hidden flex flex-col justify-center py-8 md:py-12 ${className}`}>
      {children}
    </div>
  );
};

export default DeviceFrame; 