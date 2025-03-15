import { useState, useEffect } from 'react';
import { Award, ChevronRight, Clock, FileCheck, Filter, Search, Truck, User, X } from 'lucide-react';
import { mockDrivers } from '../data/mockData';
import { Driver } from '../types/driver';
import DriverList from './DriverList';
import DriverProfile from './DriverProfile';
import FilterPanel from './FilterPanel';

const DriverDashboard = () => {
  const [drivers, setDrivers] = useState<Driver[]>(mockDrivers);
  const [filteredDrivers, setFilteredDrivers] = useState<Driver[]>(mockDrivers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minHoursAvailable: 0,
    licenseTypes: [] as string[],
    certifications: [] as string[],
    minSkillLevel: 1,
  });

  useEffect(() => {
    let results = mockDrivers;

    // Apply search term
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      results = results.filter(driver => 
        driver.name.toLowerCase().includes(lowercasedTerm) || 
        driver.id.toLowerCase().includes(lowercasedTerm)
      );
    }

    // Apply filters
    if (filters.minHoursAvailable > 0) {
      results = results.filter(driver => driver.availableHours >= filters.minHoursAvailable);
    }

    if (filters.licenseTypes.length > 0) {
      results = results.filter(driver => 
        filters.licenseTypes.every(licenseType => 
          driver.licenses.some(license => license.type === licenseType && license.status === 'Valid')
        )
      );
    }

    if (filters.certifications.length > 0) {
      results = results.filter(driver => 
        filters.certifications.every(cert => 
          driver.certifications.some(driverCert => driverCert.name === cert && driverCert.isValid)
        )
      );
    }

    if (filters.minSkillLevel > 1) {
      results = results.filter(driver => driver.skillLevel >= filters.minSkillLevel);
    }

    setFilteredDrivers(results);
  }, [searchTerm, filters]);

  const handleDriverClick = (driver: Driver) => {
    setSelectedDriver(driver);
  };

  const handleCloseProfile = () => {
    setSelectedDriver(null);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Truck className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-800">Driver Eligibility Dashboard</h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar for filters */}
        <div className={`bg-white border-r border-gray-200 overflow-y-auto transition-all duration-300 ${showFilters ? 'w-72' : 'w-0'}`}>
          {showFilters && <FilterPanel filters={filters} setFilters={setFilters} />}
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Search and filter controls */}
          <div className="bg-white p-4 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-2 rounded-md ${showFilters ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} hover:bg-blue-100 hover:text-blue-600 transition-colors`}
              >
                <Filter size={20} />
              </button>
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search drivers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="text-sm text-gray-600">
                {filteredDrivers.length} driver{filteredDrivers.length !== 1 ? 's' : ''} available
              </div>
            </div>
          </div>

          {/* Driver list */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
            <DriverList 
              drivers={filteredDrivers} 
              onDriverClick={handleDriverClick}
              selectedDriverId={selectedDriver?.id}
            />
          </div>
        </div>

        {/* Driver profile panel */}
        {selectedDriver && (
          <div className="bg-white w-96 border-l border-gray-200 overflow-y-auto shadow-xl">
            <DriverProfile driver={selectedDriver} onClose={handleCloseProfile} />
          </div>
        )}
      </main>
    </div>
  );
};

export default DriverDashboard;
