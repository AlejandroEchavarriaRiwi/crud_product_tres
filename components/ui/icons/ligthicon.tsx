const LightIcon: React.FC = () => {
    return (
        <svg width="25" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" fill="#ffffff" />
            <g stroke="#ffffff" stroke-width="4">
                <line x1="50" y1="15" x2="50" y2="5" />
                <line x1="50" y1="95" x2="50" y2="85" />
                <line x1="15" y1="50" x2="5" y2="50" />
                <line x1="95" y1="50" x2="85" y2="50" />
                <line x1="26" y1="26" x2="19" y2="19" />
                <line x1="74" y1="74" x2="81" y2="81" />
                <line x1="26" y1="74" x2="19" y2="81" />
                <line x1="74" y1="26" x2="81" y2="19" />
            </g>
        </svg>
    );
};

export default LightIcon;
