interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-[1920px] min-h-screen md:h-[1080px] bg-white rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col justify-start ${className}`}>
      {children}
    </div>
  );
};

export default DeviceFrame; 