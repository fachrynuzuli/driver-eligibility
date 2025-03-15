import React from 'react';
import { Award, BadgeCheck, Clock, FileCheck } from 'lucide-react';

interface FilterPanelProps {
  filters: {
    minHoursAvailable: number;
    licenseTypes: string[];
    certifications: string[];
    minSkillLevel: number;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    minHoursAvailable: number;
    licenseTypes: string[];
    certifications: string[];
    minSkillLevel: number;
  }>>;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters }) => {
  const licenseOptions = ['CDL-A', 'CDL-B', 'CDL-C', 'Hazmat', 'Tanker', 'Doubles/Triples'];
  const certificationOptions = ['OSHA', 'First Aid', 'HazMat Training', 'Defensive Driving', 'Forklift'];

  const handleLicenseChange = (licenseType: string) => {
    setFilters(prev => {
      if (prev.licenseTypes.includes(licenseType)) {
        return {
          ...prev,
          licenseTypes: prev.licenseTypes.filter(type => type !== licenseType)
        };
      } else {
        return {
          ...prev,
          licenseTypes: [...prev.licenseTypes, licenseType]
        };
      }
    });
  };

  const handleCertificationChange = (certName: string) => {
    setFilters(prev => {
      if (prev.certifications.includes(certName)) {
        return {
          ...prev,
          certifications: prev.certifications.filter(cert => cert !== certName)
        };
      } else {
        return {
          ...prev,
          certifications: [...prev.certifications, certName]
        };
      }
    });
  };

  const handleHoursChange = (hours: number) => {
    setFilters(prev => ({
      ...prev,
      minHoursAvailable: hours
    }));
  };

  const handleSkillLevelChange = (level: number) => {
    setFilters(prev => ({
      ...prev,
      minSkillLevel: level
    }));
  };

  return (
    <div className="p-4 overflow-y-auto h-full">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>

      {/* Hours filter */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Clock className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="font-medium text-gray-700">Minimum Hours Available</h3>
        </div>
        <div className="flex items-center justify-between">
          <input
            type="range"
            min="0"
            max="11"
            step="1"
            value={filters.minHoursAvailable}
            onChange={(e) => handleHoursChange(parseInt(e.target.value))}
            className="w-full mr-2 accent-blue-600"
          />
          <span className="bg-gray-100 text-gray-800 rounded px-2 py-1 w-12 text-center">
            {filters.minHoursAvailable}h
          </span>
        </div>
      </div>

      {/* License filter */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <FileCheck className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="font-medium text-gray-700">Required Licenses</h3>
        </div>
        <div className="space-y-2">
          {licenseOptions.map(license => (
            <label key={license} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.licenseTypes.includes(license)}
                onChange={() => handleLicenseChange(license)}
                className="rounded text-blue-600 focus:ring-blue-500 mr-2"
              />
              <span className="text-gray-700">{license}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Certification filter */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Award className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="font-medium text-gray-700">Required Certifications</h3>
        </div>
        <div className="space-y-2">
          {certificationOptions.map(cert => (
            <label key={cert} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.certifications.includes(cert)}
                onChange={() => handleCertificationChange(cert)}
                className="rounded text-blue-600 focus:ring-blue-500 mr-2"
              />
              <span className="text-gray-700">{cert}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Skill level filter */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <BadgeCheck className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="font-medium text-gray-700">Minimum Skill Tier</h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map(level => (
            <button
              key={level}
              onClick={() => handleSkillLevelChange(level)}
              className={`py-2 px-4 text-center rounded-md ${
                filters.minSkillLevel === level
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Tier {level}
            </button>
          ))}
        </div>
      </div>

      {/* Reset filters */}
      <button
        onClick={() => setFilters({
          minHoursAvailable: 0,
          licenseTypes: [],
          certifications: [],
          minSkillLevel: 1
        })}
        className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterPanel;
