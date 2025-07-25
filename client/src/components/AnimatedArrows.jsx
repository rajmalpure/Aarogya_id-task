import React, { useState } from 'react';
import { FileText, Download, RefreshCw, ChevronRight, Activity, CheckCircle, AlertCircle } from 'lucide-react';

const AnimatedArrows = () => {
  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <div className="flex space-x-1 animate-pulse">
        <ChevronRight className="w-6 h-6 text-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
        <ChevronRight className="w-6 h-6 text-blue-600 animate-bounce" style={{ animationDelay: '200ms' }} />
        <ChevronRight className="w-6 h-6 text-blue-700 animate-bounce" style={{ animationDelay: '400ms' }} />
      </div>
      <div className="mx-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <RefreshCw className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </div>
    </div>
  );
};

const DocumentViewer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleViewClick = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulating API call with mock data since we don't have the actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockData = {
        "Patient Name": "John Doe",
        "Patient ID": "PAT-2025-001",
        "Date of Birth": "1985-03-15",
        "Blood Group": "O+",
        "Diagnosis": "Hypertension",
        "Prescription": "Amlodipine 5mg",
        "Doctor": "Dr. Sarah Wilson",
        "Date": "2025-07-25",
        "Next Appointment": "2025-08-15"
      };
      
      setData(mockData);
    } catch (err) {
      setError("Failed to fetch document data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6 text-white">
          <div className="flex items-center space-x-3">
            <Activity className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Aarogya Task UI</h1>
          </div>
          <p className="mt-2 opacity-90">Medical Document Processing System</p>
        </div>

        <div className="p-6">
          <AnimatedArrows />
          
          <div className="text-center mb-8">
            <button 
              className={`inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
              }`}
              onClick={handleViewClick}
              disabled={loading}
            >
              {loading ? (
                <>
                  <RefreshCw className="w-6 h-6 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <FileText className="w-6 h-6" />
                  <span>View Document</span>
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          {data && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Extracted Key-Value Pairs</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(data).map(([key, value], index) => (
                  <div 
                    key={key}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col space-y-2">
                      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        {key}
                      </span>
                      <span className="text-lg text-gray-800 font-medium">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Download className="w-5 h-5" />
                  <span>Export Data</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AarogyaTaskUI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <DocumentViewer />
    </div>
  );
};

export default AarogyaTaskUI;