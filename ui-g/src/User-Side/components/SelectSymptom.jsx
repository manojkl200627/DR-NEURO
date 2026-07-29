import React, { useState } from "react";
import { symptomOptions } from "./symptomOptions";
import "./SelectSymptom.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
const SymptomsLoader = () => {
  const back_urii = import.meta.env.VITE_BACK_URI || "http://127.0.0.1:8000";



  const [hidee , setHidee] = useState(false)
  const [hidee2 , setHidee2] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [search, setSearch] = useState("");
  const [diseaseData, setDiseaseData] = useState(null);
  const [open, setOpen] = useState({
    description: false,
    diets: false,
    medications: false,
    precautions: false,
    workout: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMore = () => setVisibleCount((p) => p + 6);

  const handleCheckboxChange = (value) => {
    setSelectedSymptoms((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  const parseList = (item) => {
  if (!item) return [];


  if (Array.isArray(item)) return item;

  if (typeof item === "string") {
    try {
      return JSON.parse(
        item
          .replace(/'/g, '"')     
          .replace(/,\s*]/, "]")  
      );
    } catch {
      console.warn("parseList: cannot parse item:", item);

   
      return item
        .replace(/\[|\]/g, "")
        .split(",")
        .map((x) => x.replace(/'/g, "").trim())
        .filter(Boolean);
    }
  }

  return [String(item)];
};


  const handleAiClick = async (e) => {
    e?.preventDefault?.();
    setError(null);
    setLoading(true);
    setDiseaseData(null);
    setHidee(true)

    try {
      const res = await axios.post(`${back_urii.replace(/\/$/, "")}/predict/`, {
        symptoms: selectedSymptoms,
      }, { timeout: 20000 });
      const payload = res?.data?.data ?? res?.data ?? null;
      if (!payload) {
        throw new Error("API returned empty response (check network / server).");
      }
      setDiseaseData(payload);
    } catch (err) {
      console.error("predict error:", err);
      setError(
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong calling the API."
      );
    } finally {
      setLoading(false);
    }
  };

  const filteredSymptoms = symptomOptions.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );



  const [loading2, setLoading2] = useState(false);
  const [result2, setResult2] = useState("");
  const [error2, setError2] = useState("");

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const MODEL = "gemini-1.5-flash";

  const handleAnalyze = async () => {
    if (!selectedSymptoms || selectedSymptoms.length === 0) {
      
      setError("Please select at least one symptom.");
      return;
    }

    setError2("");
    setLoading2(true);
    setResult2("");

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCevD0zK8IWuNcjAsHN9sAd2Ax6jAf48Xg",
        {
          contents: [
            {
              parts: [
                {
                  text: `The user has selected these symptoms: ${selectedSymptoms.join(
                    ", "
                  )}. Give a simple possible diagnosis and suggestions.`
                }
              ]
            }
          ]
        }
      );

      const output = response.data.candidates[0].content.parts[0].text;
      setResult2(output);
    } catch (err) {
      console.error(err);
      setError2("Error calling Gemini API");
    } finally {
      setLoading2(false);
      setHidee2(true)
    }
  };


  return (
    <div className="poiuyt">
      <h3>Select Symptoms</h3>

      <input
        type="text"
        placeholder="Search symptoms..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="symptom-search-bar"
      />

      <div className="symptom-list">
        {(search ? filteredSymptoms : symptomOptions.slice(0, visibleCount)).map(
          (item) => (
            <label key={item.value} className="checkbox-item">
              <input
                type="checkbox"
                value={item.value}
                checked={selectedSymptoms.includes(item.value)}
                onChange={() => handleCheckboxChange(item.value)}
                className="kajsdh78865"
              />
              <div className="jahsdgjh">{item.name}</div>
            </label>
          )
        )}

        {!search && visibleCount < symptomOptions.length && (
          <button onClick={loadMore}>Load More</button>
        )}
      </div>
        
        <p className="askjdhnbm">
                   <strong>Selected Symptoms:</strong> <div className="jkhgtrbnvz">{JSON.stringify(selectedSymptoms)}</div> 
       </p>
      
      
        {!hidee && <button
          className="kjnnzxvbhj"
          onClick={handleAiClick}
          disabled={loading || selectedSymptoms.length === 0}
        >
          {loading ? "Loading..." : "Continue"}
        </button> }
      

      

      {error && (
        <div style={{ color: "crimson", marginTop: 10 }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      {diseaseData && (
        <div className="container-box" style={{ marginTop: 18 }}>
          <div className="section">
            <div className="sec-header" onClick={() => toggle("description")}>
              Description
            </div>
            {open.description && (
              <div className="sec-body">{diseaseData.description ?? "—"}</div>
            )}
          </div>

          <div className="section">
            <div className="sec-header" onClick={() => toggle("diets")}>
              Diets
            </div>
            {open.diets && (
              <div className="sec-body">
                {parseList(diseaseData.diets).length ? (
                  parseList(diseaseData.diets).map((d, i) => <div key={i}>• {d}</div>)
                ) : (
                  <div>—</div>
                )}
              </div>
            )}
          </div>

          <div className="section">
            <div className="sec-header" onClick={() => toggle("medications")}>
              Medications
            </div>
            {open.medications && (
              <div className="sec-body">
                {parseList(diseaseData.medications).length ? (
                  parseList(diseaseData.medications).map((m, i) => <div key={i}>• {m}</div>)
                ) : (
                  <div>—</div>
                )}
              </div>
            )}
          </div>

          <div className="section">
            <div className="sec-header" onClick={() => toggle("precautions")}>
              Precautions
            </div>
            {open.precautions && (
              <div className="sec-body">
                {(Array.isArray(diseaseData.precautions) ? diseaseData.precautions : parseList(diseaseData.precautions)).map(
                  (p, i) => <div key={i}>• {p}</div>
                )}
              </div>
            )}
          </div>

          <div className="section">
            <div className="sec-header" onClick={() => toggle("workout")}>
              Workout
            </div>
            {open.workout && (
              <div className="sec-body">
                {(Array.isArray(diseaseData.workout) ? diseaseData.workout : parseList(diseaseData.workout)).map(
                  (w, i) => <div key={i}>• {w}</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="w-full p-4 bg-white shadow rounded-lg" style={{ marginTop: 20 }}>
  
  {!hidee2 && <div className="dghty">
    <h2 className="text-xl font-semibold mb-3">AI Diagnosis Result</h2>

  <button
    onClick={handleAnalyze}
    className="hjkadtry"
    disabled={loading2}
  >
    {loading2 ? "Analyzing..." : "Analyze Symptoms"}
  </button>
  </div> }
  

  {error2 && <p className="text-red-600 mt-3">{error2}</p>}

  {result2 && (
  <div className="ksjdh8746">
    <h3 className="skdjf30957sdkjfgb">Result:</h3>
    <pre className="dfkjh348567dsjhfgbjsh">
      {result2}
    </pre>
  </div>
)}

</div>
      
    </div>
  );
};

export default SymptomsLoader;
