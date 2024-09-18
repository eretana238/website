import React from 'react';

interface StatusProps {
    isLookingForJob: boolean;
}

const StatusIndicator: React.FC<StatusProps> = ({ isLookingForJob }) => {
    return (
        <div className='flex items-center space-x-2'>
            <h3>{isLookingForJob ? 'Looking for a job' : 'Not looking for a job'}</h3>
            <div
                className={`w-2 h-2 rounded-full ${isLookingForJob ? 'bg-green-500' : 'bg-red-500'}`}
            ></div>
        </div>
    );
};

export default StatusIndicator;