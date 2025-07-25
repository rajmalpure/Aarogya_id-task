exports.extractDocumentData = (req, res) => {
    const { documentId } = req.body;
  
    // Dummy extracted data
    const extractedData = {
      name: "John Doe",
      dob: "1990-01-01",
      policyNumber: "AAROGYA-123456",
      insuranceCompany: "ABC Health",
      claimAmount: "$2,000"
    };
  
    res.status(200).json(extractedData);
  };
  