import React, { useState, useEffect } from "react";
import "./DocumentUpload.css"; // Ensure to style as described below

function Documents() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [verifiedDocuments, setVerifiedDocuments] = useState([]);
  const [progressSaved, setProgressSaved] = useState(false);

  // Load files and verified documents from localStorage when the component mounts
  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles"));
    const storedVerifiedDocuments = JSON.parse(localStorage.getItem("verifiedDocuments"));

    if (storedFiles) {
      setFiles(storedFiles);
    }

    if (storedVerifiedDocuments) {
      setVerifiedDocuments(storedVerifiedDocuments);
    }
  }, []);

  // Save files and verified documents to localStorage whenever the state changes
  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem("uploadedFiles", JSON.stringify(files));
    }
    if (verifiedDocuments.length > 0) {
      localStorage.setItem("verifiedDocuments", JSON.stringify(verifiedDocuments));
    }
  }, [files, verifiedDocuments]);

  // Handle file upload
  const handleUpload = (e, category, docName) => {
    const uploadedFiles = Array.from(e.target.files).map((file) => ({
      file,
      category,
      name: docName,  // Save the correct document name (e.g., Aadhaar Card)
      verified: false,
    }));
    setUploading(true);
    setTimeout(() => {
      setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
      setUploading(false);
    }, 1000); // Simulate upload delay
  };

  // Handle drag and drop upload
  const handleDrop = (e, category, docName) => {
    e.preventDefault();
    const uploadedFiles = Array.from(e.dataTransfer.files).map((file) => ({
      file,
      category,
      name: docName,  // Save the correct document name (e.g., Aadhaar Card)
      verified: false,
    }));
    setUploading(true);
    setTimeout(() => {
      setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
      setUploading(false);
    }, 1000); // Simulate upload delay
  };

  // Handle file verification (mark as verified)
  const handleVerifyDocument = (index) => {
    setFiles((prevFiles) =>
      prevFiles.map((file, i) =>
        i === index ? { ...file, verified: true } : file
      )
    );
    setVerifiedDocuments((prev) => [...prev, files[index]]);
  };

  // Handle clearing a specific file
  const handleClearFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  // Handle clearing all files
  const handleClearAll = () => {
    setFiles([]);
    setVerifiedDocuments([]);
    localStorage.removeItem("uploadedFiles");
    localStorage.removeItem("verifiedDocuments");
  };

  const documentCategories = [
    {
      category: "Identity Proof",
      documents: ["Aadhaar Card", "Passport", "Voter ID", "PAN Card", "Driving License"],
    },
    {
      category: "Address Proof",
      documents: ["Electricity Bill", "Water Bill", "Bank Statement", "Ration Card"],
    },
    {
      category: "Income Proof",
      documents: ["Income Certificate", "Salary Slip", "Income Tax Returns (ITR)"],
    },
  ];

  return (
    <div className="document-upload">
      <h2 className="upload-title">Document Upload & Verification</h2>
      
      {/* Upload Section */}
      {documentCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="document-category">
          <h3 className="category-title">{category.category}</h3>
          {category.documents.map((doc, docIndex) => (
            <div key={docIndex} className="document-item">
              <label className="document-label">{doc}</label>
              <div
                className="upload-area"
                onDrop={(e) => handleDrop(e, category.category, doc)}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className="upload-text">
                  {uploading ? "Uploading..." : "Drag & Drop or Browse Files"}
                </div>
                <button
                  className="browse-btn"
                  onClick={() =>
                    document.getElementById(
                      `file-input-${categoryIndex}-${docIndex}`
                    ).click()
                  }
                >
                  Browse Files
                </button>
                <input
                  type="file"
                  id={`file-input-${categoryIndex}-${docIndex}`}
                  multiple
                  accept=".pdf, .jpg, .jpeg"
                  onChange={(e) => handleUpload(e, category.category, doc)}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Displaying Uploaded Documents */}
      <div className="uploaded-files">
        {files.map((fileData, index) => (
          <div key={index} className="file-item">
            <p>{fileData.name} <span>({fileData.category})</span></p>
            <p className="file-status">
              {fileData.verified ? (
                <span className="verified-badge">Verified</span>
              ) : (
                <span className="uploaded-badge">Uploaded</span>
              )}
            </p>
            <button
              className="verify-btn"
              onClick={() => handleVerifyDocument(index)}
              disabled={fileData.verified}
            >
              {fileData.verified ? "Verified" : "Verify"}
            </button>
            <button
              className="clear-file-btn"
              onClick={() => handleClearFile(index)}
            >
              Clear File
            </button>
          </div>
        ))}
      </div>

      {/* Save Progress Section */}
      <div className="save-progress-container">
        <button
          className="save-progress-btn"
          onClick={() => setProgressSaved(true)}
          disabled={uploading}
        >
          {uploading ? "Saving..." : "Save Progress"}
        </button>
        {progressSaved && <p className="save-confirmation">Progress Saved!</p>}
      </div>

      {/* Clear All Section */}
      <div className="clear-all">
        <button className="clear-all-btn" onClick={handleClearAll}>
          Clear All Files
        </button>
      </div>
    </div>
  );
}

export default Documents;
