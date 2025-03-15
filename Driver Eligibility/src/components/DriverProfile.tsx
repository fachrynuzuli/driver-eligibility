import React from 'react';
import { Driver } from '../types/driver';
import { Squircle, Award, CircleCheck, Clock, FileCheck, Mail, Phone, X, CircleX } from 'lucide-react';

interface DriverProfileProps {
  driver: Driver;
  onClose: () => void;
}

const DriverProfile: React.FC<DriverProfileProps> = ({ driver, onClose }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-gray-200 p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Driver Profile</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Driver info */}
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
            {driver.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">{driver.name}</h3>
            <p className="text-gray-500">ID: {driver.id}</p>
            <div className="flex items-center mt-1">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                Skill Tier {driver.skillLevel}
              </span>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div className="mb-6">
          <h4 className="font-medium mb-2 text-gray-700">Contact Information</h4>
          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-gray-500 mr-2" />
              <span>{driver.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-gray-500 mr-2" />
              <span>{driver.email}</span>
            </div>
          </div>
        </div>

        {/* Hours status */}
        <div className="mb-6">
          <h4 className="font-medium mb-2 text-gray-700">Hours of Service</h4>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-gray-500" />
                <span>Available Driving Hours</span>
              </div>
              <span className={`font-semibold ${driver.availableHours <= 0 ? 'text-red-600' : driver.availableHours < 4 ? 'text-amber-600' : 'text-green-600'}`}>
                {driver.availableHours} hours
              </span>
            </div>
            
            <div className="mt-2 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Weekly limit:</span>
                <span>{driver.weeklyHours}/60 hours</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${driver.weeklyHours > 50 ? 'bg-amber-500' : 'bg-green-500'}`}
                  style={{ width: `${(driver.weeklyHours / 60) * 100}%` }}
                ></div>
              </div>
            </div>

            {driver.lastRestPeriod && (
              <div className="mt-3 text-sm text-gray-500">
                Last 10-hour rest period: {driver.lastRestPeriod}
              </div>
            )}
          </div>
        </div>

        {/* Licenses */}
        <div className="mb-6">
          <h4 className="font-medium mb-2 text-gray-700">Licenses</h4>
          <div className="bg-gray-50 rounded-lg p-3 divide-y divide-gray-200">
            {driver.licenses.map((license, index) => (
              <div key={index} className={`${index > 0 ? 'pt-2 mt-2' : ''}`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FileCheck className="h-5 w-5 mr-2 text-gray-500" />
                    <span>{license.type}</span>
                  </div>
                  <span className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${license.status === 'Valid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {license.status}
                  </span>
                </div>
                {license.expiration && (
                  <div className="ml-7 text-sm text-gray-500">
                    Expires: {license.expiration}
                  </div>
                )}
                {license.restrictions && (
                  <div className="ml-7 text-sm text-gray-500">
                    Restrictions: {license.restrictions}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <h4 className="font-medium mb-2 text-gray-700">Certifications</h4>
          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
            {driver.certifications.map((cert, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{cert.name}</span>
                </div>
                {cert.isValid ? (
                  <CircleCheck className="h-5 w-5 text-green-500" />
                ) : (
                  <CircleX className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        {driver.notes && (
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-gray-700">Notes</h4>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-600">{driver.notes}</p>
            </div>
          </div>
        )}
      </div>

      {/* Action footer */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          {driver.availableHours <= 0 ? (
            <div className="flex-1 bg-red-100 text-red-800 py-2 px-4 rounded flex items-center justify-center">
              <Squircle className="h-5 w-5 mr-2" />
              No available hours
            </div>
          ) : !driver.licenses.some(l => l.status === 'Valid') ? (
            <div className="flex-1 bg-red-100 text-red-800 py-2 px-4 rounded flex items-center justify-center">
              <Squircle className="h-5 w-5 mr-2" />
              No valid license
            </div>
          ) : (
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Select for Dispatch
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
