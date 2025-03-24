interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full h-full bg-white rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col ${className}`}>
      <div className="flex-1 pt-4 pb-4 md:py-12 px-4 md:px-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default DeviceFrame; 