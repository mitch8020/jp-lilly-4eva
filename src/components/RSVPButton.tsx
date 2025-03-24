interface RSVPButtonProps {
  onClick?: () => void;
  className?: string;
}

const RSVPButton: React.FC<RSVPButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
    >
      RSVP
    </button>
  );
};

export default RSVPButton; 