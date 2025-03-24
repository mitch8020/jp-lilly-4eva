interface RSVPButtonProps {
  onClick?: () => void;
  className?: string;
}

const RSVPButton: React.FC<RSVPButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 px-4 py-2.5 text-sm font-semibold text-white text-center leading-6 shadow-sm hover:from-indigo-600 hover:to-indigo-500 active:from-indigo-700 active:to-indigo-600 active:shadow-inner active:translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all duration-200 ${className}`}
    >
      RSVP
    </button>
  );
};

export default RSVPButton; 