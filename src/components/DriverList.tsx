import React from 'react';
import { Driver } from '../types/driver';
import { Squircle, Award, CircleCheck, Clock, FileCheck, CircleX } from 'lucide-react';

interface DriverListProps {
  drivers: Driver[];
  onDriverClick: (driver: Driver) => void;
  selectedDriverId?: string;
}

const DriverList: React.FC<DriverListProps> = ({ drivers, onDriverClick, selectedDriverId }) => {
  const getStatusColor = (hours: number) => {
    if (hours <= 0) return 'text-red-600';
    if (hours < 4) return 'text-amber-500';
    return 'text-green-600';
  };
  
  const hasValidLicense = (driver: Driver) => {
    return driver.licenses.some(license => license.status === 'Valid');
  };

  const getEligibilityStatus = (driver: Driver) => {
    if (driver.availableHours <= 0) {
      return {
        eligible: false,
        reason: 'No available hours',
        icon: <CircleX className="h-5 w-5 text-red-500" />
      };
    }
    
    if (!hasValidLicense(driver)) {
      return {
        eligible: false,
        reason: 'No valid license',
        icon: <Squircle className="h-5 w-5 text-amber-500" />
      };
    }
    
    return {
      eligible: true,
      reason: 'Eligible for dispatch',
      icon: <CircleCheck className="h-5 w-5 text-green-500" />
    };
  };

  if (drivers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 px-4 text-center">
        <div className="bg-gray-100 rounded-full p-3 mb-4">
          <Squircle className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No drivers match your criteria</h3>
        <p className="text-gray-500 max-w-md">
          Try adjusting your search or filters to find available drivers.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {drivers.map((driver) => {
        const eligibility = getEligibilityStatus(driver);
        
        return (
          <div 
            key={driver.id}
            onClick={() => onDriverClick(driver)}
            className={`p-4 hover:bg-blue-50 cursor-pointer transition-colors ${selectedDriverId === driver.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-gray-900">{driver.name}</h3>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Tier {driver.skillLevel}
                  </span>
                </div>
                <p className="text-sm text-gray-500">ID: {driver.id}</p>
              </div>

              <div className="flex items-center space-x-1 text-sm">
                {eligibility.icon}
                <span className={eligibility.eligible ? 'text-green-700' : 'text-red-700'}>
                  {eligibility.eligible ? 'Eligible' : 'Not eligible'}
                </span>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span className={getStatusColor(driver.availableHours)}>
                  {driver.availableHours}h available
                </span>
              </div>
              <div className="flex items-center text-sm">
                <FileCheck className="h-4 w-4 mr-1 text-gray-500" />
                <span>
                  {driver.licenses.filter(l => l.status === 'Valid').length} license(s)
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Award className="h-4 w-4 mr-1 text-gray-500" />
                <span>
                  {driver.certifications.filter(c => c.isValid).length} cert(s)
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DriverList;
