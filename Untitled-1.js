import React, { useState, useRef } from "react";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";

export default function SupplierApp() {
  const [supplierName, setSupplierName] = useState("");
  const [location, setLocation] = useState("");
  const [material, setMaterial] = useState("");
  const [batchId, setBatchId] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const qrRef = useRef(null);

  const handleSubmit = () => {
    if (!supplierName || !location || !material || !batchId) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const handleDownloadQR = async () => {
    if (!qrRef.current) return;
    const canvas = await html2canvas(qrRef.current);
    const link = document.createElement("a");
    link.download = `${batchId}_QRCode.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Textile Chain Supplier App</h1>

      <input
        type="text"
        placeholder="Supplier Name *"
        value={supplierName}
        onChange={(e) => setSupplierName(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Location *"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Material (e.g., Organic Cotton) *"
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Batch ID / Reference *"
        value={batchId}
        onChange={(e) => setBatchId(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Notes or Observations"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        style={{ ...styles.input, ...styles.notes }}
      />

      {error && <p style={styles.error}>{error}</p>}

      <button onClick={handleSubmit} style={styles.button}>
        Submit Entry
      </button>

      {submitted && (
        <div style={styles.qrContainer}>
          <p style={styles.success}>✅ Entry Submitted Successfully</p>
          <p style={styles.qrLabel}>Batch QR Code:</p>
          <div ref={qrRef} style={styles.qrBox}>
            <QRCode
              value={`TextileChain|${batchId}|${supplierName}|${material}|${location}`}
              size={200}
            />
          </div>
          <button onClick={handleDownloadQR} style={styles.downloadButton}>
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  notes: {
    height: "80px",
  },
  button: {
    backgroundColor: "#1e40af",
    color: "#fff",
    padding: "15px",
    width: "100%",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  downloadButton: {
    marginTop: "10px",
    backgroundColor: "#10b981",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "15px",
  },
  success: {
    color: "green",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  qrContainer: {
    marginTop: "30px",
    textAlign: "center",
  },
  qrLabel: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  qrBox: {
    display: "inline-block",
    backgroundColor: "white",
    padding: "10px",
  },
};
